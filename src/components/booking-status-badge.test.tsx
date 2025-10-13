import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { BookingStatusBadge } from './booking-status-badge'
import { BookingStatus } from '@/data/enums/booking-status'

describe('BookingStatusBadge', () => {
  test('deve renderizar status confirmado corretamente', () => {
    render(<BookingStatusBadge status={BookingStatus.CONFIRMADO} />)
    expect(screen.getByText('Confirmado')).toBeInTheDocument()
  })

  test('deve renderizar status pendente corretamente', () => {
    render(<BookingStatusBadge status={BookingStatus.PENDENTE} />)
    expect(screen.getByText('Pendente')).toBeInTheDocument()
  })

  test('deve renderizar status cancelado corretamente', () => {
    render(<BookingStatusBadge status={BookingStatus.CANCELADO} />)
    expect(screen.getByText('Cancelado')).toBeInTheDocument()
  })
})
