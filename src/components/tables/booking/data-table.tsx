'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { Eye } from 'lucide-react'
import Link from 'next/link'
import { BookingStatusBadge } from '@/components/booking-status-badge'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useBookingFilterParams } from '@/hooks/use-booking-filter-params'
import { formatDate } from '@/lib/utils'
import { getBookings } from '@/services/booking/get-bookings'
import { EmptyState, NoResults } from './empty-states'
import { BookingPagination } from './pagination'

export function BookingDataTable() {
  const { filter, hasFilters, hasPagination } = useBookingFilterParams()
  const queryParams = {
    q: filter.q || undefined,
    status: filter.status || undefined,
    page: filter.page,
    limit: filter.limit,
  }

  const {
    data: bookingsData,
    refetch,
    isFetching,
  } = useSuspenseQuery({
    queryKey: ['/bookings', queryParams],
    queryFn: () => getBookings(queryParams),
  })

  if ((hasFilters || hasPagination) && !bookingsData?.data.length) {
    return <NoResults />
  }

  if (!bookingsData?.data.length && !hasPagination && !isFetching) {
    return <EmptyState onUpdate={refetch} />
  }

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Passageiro</TableHead>
            <TableHead>Companhia</TableHead>
            <TableHead>Data / Hora</TableHead>
            <TableHead className="text-center">Pax</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookingsData?.data.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell className="font-mono text-sm">{booking.id}</TableCell>
              <TableCell className="font-medium">
                {booking.passageiro}
              </TableCell>
              <TableCell>{booking.companhia}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {formatDate(booking.dataVoo)}
                  <span className="text-gray-500">{booking.horaVoo}</span>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <Badge variant="outline" className="font-medium">
                  {booking.pax} {booking.pax === 1 ? 'pax' : 'pax'}
                </Badge>
              </TableCell>
              <TableCell>
                <BookingStatusBadge status={booking.status} />
              </TableCell>
              <TableCell className="bg-background sticky right-0 z-30 w-[100px] text-right">
                <Link href={`/reservas/${booking.id}`}>
                  <Button size="icon-sm" variant="outline">
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">Detalhes</span>
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <BookingPagination totalPages={bookingsData?.totalPages || 1} />
    </div>
  )
}
