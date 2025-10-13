import { BookingStatus } from '@/data/enums/booking-status'
import { http, HttpResponse } from 'msw'

export const getBookingByIdMock = http.get('api/bookings/:id', ({ params }) => {
  const { id } = params

  return HttpResponse.json({
    id: 'R-00123',
    passageiro: 'Ana Souza',
    companhia: 'LATAM',
    status: 'CONFIRMADO',
    dataVoo: '2025-11-15',
    horaVoo: '13:20',
    pax: 3,
    observacoes: 'Assento preferencial',
  })
})
