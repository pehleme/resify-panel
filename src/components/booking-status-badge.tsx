import { Badge } from '@/components/ui/badge'
import { BookingStatus, BookingStatusLabel } from '@/data/enums/booking-status'

function getStatusVariant(status: BookingStatus) {
  switch (status) {
    case BookingStatus.CONFIRMADO:
      return 'green'
    case BookingStatus.PENDENTE:
      return 'blue'
    case BookingStatus.CANCELADO:
      return 'red'
    default:
      return 'outline'
  }
}

export function BookingStatusBadge({ status }: { status: BookingStatus }) {
  return (
    <Badge variant={getStatusVariant(status)}>
      {BookingStatusLabel[status]}
    </Badge>
  )
}
