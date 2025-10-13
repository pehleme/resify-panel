import { Booking } from '@/data/models/booking'
import { api } from '@/lib/api'

export interface GetBookingByIdParams {
  id: string
}

export function getBookingById({ id }: GetBookingByIdParams) {
  return api.get(`bookings/${id}`).json<Booking>()
}
