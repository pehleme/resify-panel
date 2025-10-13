import fs from 'fs'
import path from 'path'
import { Booking } from '@/data/models/booking'

export const db = {
  bookings: {
    all: () => {
      const filePath = path.join(process.cwd(), 'src', 'data', 'reservas.json')
      const raw = fs.readFileSync(filePath, 'utf-8')
      return JSON.parse(raw) as Booking[]
    },
    byId: (id: string) => {
      return db.bookings.all().find((booking) => booking.id === id)
    },
  },
}
