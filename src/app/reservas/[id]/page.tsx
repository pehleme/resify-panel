import {
  Building2,
  Calendar,
  ChevronLeftIcon,
  Clock,
  FileText,
  Plane,
  Users,
} from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { createQueryClient } from '@/lib/ssr-query-client'
import { formatDate } from '@/lib/utils'
import { getBookingById } from '@/services/booking/get-booking-by-id'

export const metadata: Metadata = {
  title: 'Detalhes da Reserva',
  robots: {
    index: false,
    follow: false,
  },
}

type Props = {
  params: Promise<{ id: string }>
}

export default async function Page({ params }: Props) {
  const queryClient = createQueryClient()
  const { id } = await params

  const booking = await queryClient.fetchQuery({
    queryKey: [`/bookings/${id}`],
    queryFn: () => getBookingById({ id }),
  })

  if (!booking.id) {
    return notFound()
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Link href="/reservas">
          <Button data-testid="back-button" variant="outline">
            <ChevronLeftIcon className="size-4" />
            Voltar
          </Button>
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="col-span-full grid gap-5 md:grid-cols-3">
          <Card>
            <CardContent>
              <div className="flex items-center gap-3 rounded-lg">
                <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-900">
                  <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-100" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                    Data do Voo
                  </p>
                  <p className="text-lg font-bold text-blue-700 dark:text-blue-100">
                    {formatDate(booking.dataVoo)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="flex items-center gap-3 rounded-lg">
                <div className="rounded-lg bg-green-100 p-2 dark:bg-green-900">
                  <Clock className="h-5 w-5 text-green-600 dark:text-green-100" />
                </div>
                <div>
                  <p className="text-sm font-medium text-green-900 dark:text-green-100">
                    Horário
                  </p>
                  <p className="text-lg font-bold text-green-700 dark:text-green-100">
                    {booking.horaVoo}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="flex items-center gap-3 rounded-lg">
                <div className="rounded-lg bg-purple-100 p-2 dark:bg-purple-900">
                  <Building2 className="h-5 w-5 text-purple-600 dark:text-purple-100" />
                </div>
                <div>
                  <p className="text-sm font-medium text-purple-900 dark:text-purple-100">
                    Companhia
                  </p>
                  <p className="text-lg font-bold text-purple-700 dark:text-purple-100">
                    {booking.companhia}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="size-5" />
              Informações do Passageiro
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-100">
                Nome:
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {booking.passageiro}
              </span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-100">
                Passageiros:
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {booking.pax} {booking.pax === 1 ? 'pessoa' : 'pessoas'}
              </span>
            </div>
            <Separator />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plane className="size-5" />
              Informações do Voo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-100">
                Companhia:
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {booking.companhia}
              </span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-100">
                Data:
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {formatDate(booking.dataVoo)}
              </span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-100">
                Horário:
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {booking.horaVoo}
              </span>
            </div>
            <Separator />
          </CardContent>
        </Card>

        {booking.observacoes && (
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="size-5" />
                Observações
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                <p className="leading-relaxed whitespace-pre-wrap">
                  {booking.observacoes}
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
