import { NextRequest, NextResponse } from 'next/server'
import { BookingStatus } from '@/data/enums/booking-status'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')
  const query = searchParams.get('q') || ''
  const status = searchParams.get('status') as BookingStatus | null

  let filteredBookings = db.bookings.all()

  if (query) {
    filteredBookings = filteredBookings.filter(
      (booking) =>
        booking.passageiro.toLowerCase().includes(query.toLowerCase()) ||
        booking.companhia.toLowerCase().includes(query.toLowerCase()) ||
        booking.id.toLowerCase().includes(query.toLowerCase()),
    )
  }

  if (status) {
    filteredBookings = filteredBookings.filter(
      (booking) => booking.status === status,
    )
  }

  const total = filteredBookings.length
  const totalPages = Math.ceil(total / limit)
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedBookings = filteredBookings.slice(startIndex, endIndex)

  const response = {
    data: paginatedBookings,
    total,
    page,
    limit,
    totalPages,
  }

  return NextResponse.json(response)
}
