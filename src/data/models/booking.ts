import { BookingStatus } from '../enums/booking-status'

export interface Booking {
  id: string
  passageiro: string
  companhia: string
  dataVoo: string
  horaVoo: string
  pax: number
  status: BookingStatus
  observacoes: string
}
