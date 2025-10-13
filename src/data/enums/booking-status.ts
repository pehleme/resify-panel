export enum BookingStatus {
  CONFIRMADO = 'CONFIRMADO',
  CANCELADO = 'CANCELADO',
  PENDENTE = 'PENDENTE',
}

export const BookingStatusLabel = {
  [BookingStatus.CONFIRMADO]: 'Confirmado',
  [BookingStatus.CANCELADO]: 'Cancelado',
  [BookingStatus.PENDENTE]: 'Pendente',
}
