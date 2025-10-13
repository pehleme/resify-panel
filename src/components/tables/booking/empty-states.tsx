'use client'

import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from '@/components/ui/empty'
import { useBookingFilterParams } from '@/hooks/use-booking-filter-params'

export function EmptyState({ onUpdate }: { onUpdate: () => void }) {
  return (
    <Empty className="container border">
      <EmptyHeader>
        <EmptyTitle>Nenhuma reserva encontrada</EmptyTitle>
        <EmptyDescription>Ainda não há reservas cadastradas</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" onClick={() => onUpdate()}>
          Atualizar pagina
        </Button>
      </EmptyContent>
    </Empty>
  )
}

export function NoResults() {
  const { setFilter } = useBookingFilterParams()

  return (
    <Empty className="container border">
      <EmptyHeader>
        <EmptyTitle>Nenhuma reserva encontrada</EmptyTitle>
        <EmptyDescription>
          Tente outra busca, ou ajustar os filtros
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" onClick={() => setFilter(null)}>
          Limpar filtros
        </Button>
      </EmptyContent>
    </Empty>
  )
}
