'use client'

import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from '@/components/ui/empty'

export function ErrorFallback() {
  function handleReset() {
    window.location.reload()
  }

  return (
    <Empty className="container border">
      <EmptyHeader>
        <EmptyTitle>Algo deu errado</EmptyTitle>
        <EmptyDescription>Por favor, tente novamente.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" onClick={handleReset}>
          Tentar novamente
        </Button>
      </EmptyContent>
    </Empty>
  )
}
