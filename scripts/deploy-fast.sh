#!/usr/bin/env bash
set -euo pipefail

REMOTE="${REMOTE:-origin}"

# Vérifie qu'on est bien sur la branche dev
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "dev" ]; then
  echo "Error: deploy:fast must be run from the 'dev' branch."
  echo "You are currently on: $CURRENT_BRANCH"
  exit 1
fi

# Repo git ?
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || {
  echo "Not inside a git repository."
  exit 1
}

# Refuse si le working tree n'est pas clean
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "Working tree not clean. Commit or stash your changes first."
  exit 1
fi

echo "Fetching remote..."
git fetch "$REMOTE" --prune

# Update dev
echo "Updating dev..."
git checkout dev
git pull --rebase "$REMOTE" dev

# Capture le titre du dernier commit de dev (après pull)
LAST_MSG="$(git log -1 --pretty=%s)"
# Sanitize minimal (évite les guillemets et retours chariot)
LAST_MSG_CLEAN="$(echo "$LAST_MSG" | tr -d '\n\r' | sed 's/"/'\''/g')"

echo "Fast deploy basen dev commit: $LAST_MSG_CLEAN"

git push "$REMOTE" dev

# Merge dev -> main
echo "Promoting dev -> main..."
git checkout main
git pull --rebase "$REMOTE" main
git merge --no-ff dev -m "fast-deploy: $LAST_MSG_CLEAN"
git push "$REMOTE" main

# Prépare prod, affiche ce qui va partir, confirme
echo "Preparing prod..."
git checkout prod
git pull --rebase "$REMOTE" prod

echo ""
echo "Commits that will be deployed (prod..main):"
git log --oneline prod..main
echo ""

read -r -p "Push to prod and deploy now? (y/N) " ANSWER
if [[ "${ANSWER}" != "y" && "${ANSWER}" != "Y" ]]; then
  echo "Aborted before prod merge/push."
  git ceckout dev
  exit 0
fi

# Merge main -> prod
echo "Promoting main -> prod..."
git merge --no-ff main -m "fast-deploy: $LAST_MSG_CLEAN"

# Push prod => déclenche ton workflow GitHub Actions
echo "Pushing prod (triggers deploy)..."
git push "$REMOTE" prod

# Retour sur dev pour éviter toute erreur ensuite
git checkout dev
echo "Done: prod pushed, deploy should start. Returned to dev."
