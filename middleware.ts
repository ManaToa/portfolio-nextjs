import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

/**
 * Middleware avec gestion du mode maintenance
 *
 * Si MAINTENANCE_MODE="true", intercepte toutes les requêtes (sauf assets et API health)
 * et les réécrit vers /maintenance pour afficher la page de maintenance.
 */
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Vérifier le mode maintenance
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true'

  // Si le mode maintenance est activé, intercepter les requêtes
  if (isMaintenanceMode) {
    // Laisser passer les assets statiques, l'API health, et la page de maintenance elle-même
    if (
      pathname.startsWith('/_next') ||
      pathname.startsWith('/favicon.ico') ||
      pathname.startsWith('/images') ||
      pathname.startsWith('/icons') ||
      pathname.startsWith('/svg') ||
      pathname.startsWith('/fonts') ||
      pathname.startsWith('/img') ||
      pathname === '/api/health' ||
      pathname === '/maintenance'
    ) {
      return NextResponse.next()
    }

    // Réécrire toutes les autres requêtes vers /maintenance
    // (réécriture = l'URL reste la même dans le navigateur, mais le contenu affiché change)
    const maintenanceUrl = new URL('/maintenance', request.url)
    return NextResponse.rewrite(maintenanceUrl)
  }

  // Mode maintenance désactivé - laisse passer toutes les requêtes
  return NextResponse.next()
}

// Configuration du matcher pour que le middleware s'exécute sur toutes les routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
