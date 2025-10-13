import { BookingStatus } from '@/data/enums/booking-status'
import { BaseResponse } from '@/data/models/base-response'
import { Booking } from '@/data/models/booking'
import { PaginationRequest } from '@/data/models/pagination-request'
import { api } from '@/lib/api'

export interface GetBookingsParams extends PaginationRequest {
  q?: string
  status?: BookingStatus
}

export function getBookings(params?: GetBookingsParams) {
  return api
    .get('bookings', { searchParams: { ...params } })
    .json<BaseResponse<Booking[]>>()
}
