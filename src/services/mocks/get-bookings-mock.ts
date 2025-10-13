import { http, HttpResponse } from 'msw'
import { BookingStatus } from '@/data/enums/booking-status'

export const getBookingsMock = http.get('api/bookings', ({ request }) => {
  const url = new URL(request.url)

  const page = parseInt(url.searchParams.get('page') || '1')
  const limit = parseInt(url.searchParams.get('limit') || '10')
  const query = url.searchParams.get('q') || ''
  const status = url.searchParams.get('status') as BookingStatus | null

  let filteredBookings = [
    {
      id: 'R-00123',
      passageiro: 'Ana Souza',
      companhia: 'LATAM',
      status: 'CONFIRMADO',
      dataVoo: '2025-11-15',
      horaVoo: '13:20',
      pax: 3,
      observacoes: 'Assento preferencial',
    },
  ]

  if (query) {
    filteredBookings = filteredBookings.filter(
      (booking) =>
        booking.passageiro.toLowerCase().includes(query.toLowerCase()) ||
        booking.companhia.toLowerCase().includes(query.toLowerCase()) ||
        booking.id.toLowerCase().includes(query.toLowerCase()),
    )
  }

  if (status) {
    const statusValue = status as BookingStatus
    filteredBookings = filteredBookings.filter(
      (booking) => booking.status === statusValue,
    )
  }

  const total = filteredBookings.length
  const totalPages = Math.ceil(total / limit)
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedBookings = filteredBookings.slice(startIndex, endIndex)

  return HttpResponse.json({
    data: paginatedBookings,
    total,
    page,
    limit,
    totalPages,
  })
})
