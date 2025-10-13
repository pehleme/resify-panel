import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from '@/components/ui/empty'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Empty className="container border">
        <EmptyHeader>
          <EmptyTitle>404 - Não encontrado</EmptyTitle>
          <EmptyDescription>
            Não foi possível encontrar o recurso solicitado
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Link href="/" className="underline">
            <Button variant="outline">Voltar para a página inicial</Button>
          </Link>
        </EmptyContent>
      </Empty>
    </div>
  )
}
