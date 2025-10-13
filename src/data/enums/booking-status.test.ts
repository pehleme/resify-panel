import { describe, expect, test } from 'vitest'
import { BookingStatus, BookingStatusLabel } from './booking-status'

describe('BookingStatus', () => {
  test('deve ter os status corretos definidos', () => {
    expect(BookingStatus.CONFIRMADO).toBe('CONFIRMADO')
    expect(BookingStatus.CANCELADO).toBe('CANCELADO')
    expect(BookingStatus.PENDENTE).toBe('PENDENTE')
  })

  test('deve ter labels corretos para cada status', () => {
    expect(BookingStatusLabel[BookingStatus.CONFIRMADO]).toBe('Confirmado')
    expect(BookingStatusLabel[BookingStatus.CANCELADO]).toBe('Cancelado')
    expect(BookingStatusLabel[BookingStatus.PENDENTE]).toBe('Pendente')
  })
})
