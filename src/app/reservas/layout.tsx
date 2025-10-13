import { PropsWithChildren } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-1 flex-col border bg-gray-100 dark:bg-gray-900">
      <header className="bg-card mb-5 flex items-center justify-between p-5 shadow">
        <h1 className="text-2xl font-bold">Resify</h1>
        <ThemeToggle />
      </header>
      <div className="container mx-auto p-5">{children}</div>
    </div>
  )
}
