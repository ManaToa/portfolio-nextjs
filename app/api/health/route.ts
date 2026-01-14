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
export async function GET() {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true'

  return NextResponse.json(
    {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      maintenance: isMaintenanceMode,
    },
    { status: 200 },
  )
}
