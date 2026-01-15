import { NextResponse } from 'next/server'

/**
 * Health check endpoint
 *
 * Utilisé pour vérifier que l'application est en ligne et fonctionnelle.
 * Utile pour :
 * - Monitoring (uptime checks)
 * - Load balancers (health checks)
 * - CI/CD pipelines
 *
 * GET /api/health
 *
 * Retourne 200 OK si l'application fonctionne.
 */

// Forcer le runtime Edge pour que les variables d'environnement soient lues au runtime
// (comme le middleware) plutôt qu'au build time
export const runtime = 'edge'

export async function GET() {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true'

  return NextResponse.json(
    {
      status: 'ko',
      timestamp: new Date().toISOString(),
      maintenance: isMaintenanceMode,
    },
    { status: 200 },
  )
}
