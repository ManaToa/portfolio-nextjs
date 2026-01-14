import StatusPage from '@/components/StatusPage'

/**
 * Page de maintenance
 *
 * Cette page est affichée automatiquement par le middleware
 * lorsque MAINTENANCE_MODE="true" est activé.
 * Elle intercepte toutes les requêtes (sauf assets et API health).
 */
export default function MaintenancePage() {
  return <StatusPage mode="maintenance" />
}
