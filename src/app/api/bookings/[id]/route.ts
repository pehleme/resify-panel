import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params

  if (!id) {
    return NextResponse.json(
      { error: 'ID da reserva é obrigatório' },
      { status: 400 },
    )
  }

  const booking = db.bookings.byId(id)

  if (!booking) {
    return NextResponse.json(
      { error: 'Reserva não encontrada' },
      { status: 404 },
    )
  }

  return NextResponse.json(booking)
}
