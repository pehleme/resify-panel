import { useQueryStates } from 'nuqs'
import {
  createLoader,
  parseAsInteger,
  parseAsString,
  parseAsStringEnum,
} from 'nuqs/server'
import { BookingStatus } from '@/data/enums/booking-status'

export const bookingFilterParamsSchema = {
  q: parseAsString,
  status: parseAsStringEnum<BookingStatus>(Object.values(BookingStatus)),
  page: parseAsInteger.withDefault(1),
  limit: parseAsInteger.withDefault(10),
}

export function useBookingFilterParams() {
  const [filter, setFilter] = useQueryStates(bookingFilterParamsSchema)

  return {
    filter,
    setFilter,
    hasFilters: Object.entries(filter)
      .filter(([key]) => key !== 'page' && key !== 'limit')
      .some(([, value]) => value !== null),
    hasPagination: filter.page !== 1 || filter.limit !== 10,
  }
}

export const loadBookingFilterParams = createLoader(bookingFilterParamsSchema)
