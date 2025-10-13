import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { Metadata } from 'next'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import { SearchParams } from 'nuqs/server'
import { Suspense } from 'react'
import { ErrorFallback } from '@/components/error-fallback'
import { BookingDataTable } from '@/components/tables/booking/data-table'
import { BookingFilters } from '@/components/tables/booking/filters'
import { BookingSkeleton } from '@/components/tables/booking/skeleton'
import { Card, CardContent } from '@/components/ui/card'
import { loadBookingFilterParams } from '@/hooks/use-booking-filter-params'
import { createQueryClient } from '@/lib/ssr-query-client'
import { getBookings } from '@/services/booking/get-bookings'

export const revalidate = 5

export const metadata: Metadata = {
  title: 'Reservas',
}

type Props = {
  searchParams: Promise<SearchParams>
}

export default async function Page(props: Props) {
  const queryClient = createQueryClient()
  const searchParams = await props.searchParams

  const filter = loadBookingFilterParams(searchParams)
  const queryParams = {
    q: filter.q || undefined,
    status: filter.status || undefined,
    page: filter.page,
    limit: filter.limit,
  }

  await queryClient.prefetchQuery({
    queryKey: ['/bookings', queryParams],
    queryFn: () => getBookings(queryParams),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Card>
        <CardContent>
          <div className="space-y-4">
            <BookingFilters />

            <ErrorBoundary errorComponent={ErrorFallback}>
              <Suspense fallback={<BookingSkeleton />}>
                <BookingDataTable />
              </Suspense>
            </ErrorBoundary>
          </div>
        </CardContent>
      </Card>
    </HydrationBoundary>
  )
}
