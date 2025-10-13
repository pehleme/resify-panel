import { describe, expect, test } from 'vitest'
import { loadBookingFilterParams } from './use-booking-filter-params'
import { BookingStatus } from '@/data/enums/booking-status'

describe('loadBookingFilterParams', () => {
  test('deve retornar valores padrão quando não há parâmetros', () => {
    const result = loadBookingFilterParams({})

    expect(result.page).toBe(1)
    expect(result.limit).toBe(10)
    expect(result.q).toBeNull()
    expect(result.status).toBeNull()
  })

  test('deve parsear corretamente parâmetros de página', () => {
    const result = loadBookingFilterParams({ page: '3' })

    expect(result.page).toBe(3)
  })

  test('deve parsear corretamente o parâmetro de busca', () => {
    const result = loadBookingFilterParams({ q: 'João Silva' })

    expect(result.q).toBe('João Silva')
  })

  test('deve parsear corretamente o status', () => {
    const result = loadBookingFilterParams({ status: BookingStatus.CONFIRMADO })

    expect(result.status).toBe(BookingStatus.CONFIRMADO)
  })

  test('deve parsear múltiplos parâmetros corretamente', () => {
    const result = loadBookingFilterParams({
      page: '2',
      limit: '20',
      q: 'teste',
      status: BookingStatus.PENDENTE,
    })

    expect(result.page).toBe(2)
    expect(result.limit).toBe(20)
    expect(result.q).toBe('teste')
    expect(result.status).toBe(BookingStatus.PENDENTE)
  })
})
