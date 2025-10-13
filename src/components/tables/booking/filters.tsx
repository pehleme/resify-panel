'use client'

import { FilterXIcon, SearchIcon, XIcon } from 'lucide-react'
import { BookingStatusBadge } from '@/components/booking-status-badge'
import { Button } from '@/components/ui/button'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { BookingStatus } from '@/data/enums/booking-status'
import { useBookingFilterParams } from '@/hooks/use-booking-filter-params'

export function BookingFilters() {
  const { filter, setFilter, hasFilters } = useBookingFilterParams()

  function handleClearFilters() {
    setFilter(null)
  }

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row">
        <Select
          value={filter.status || ''}
          onValueChange={(value) =>
            setFilter({ status: value as BookingStatus })
          }
        >
          <SelectTrigger className="min-w-full md:min-w-48">
            <SelectValue placeholder="Todos os status" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(BookingStatus).map((status) => (
              <SelectItem key={status} value={status}>
                <BookingStatusBadge status={status} />
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <InputGroup>
          <InputGroupInput
            placeholder="Buscar por passageiro, companhia ou ID..."
            value={filter.q || ''}
            onChange={(e) => setFilter({ q: e.target.value })}
            onKeyDown={(e) => e.key === 'Enter' && setFilter({ q: filter.q })}
          />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          {filter.q && (
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                onClick={() => setFilter({ q: '' })}
                size="icon-sm"
              >
                <XIcon />
              </InputGroupButton>
            </InputGroupAddon>
          )}
        </InputGroup>

        {hasFilters && (
          <Button variant="outline" onClick={handleClearFilters}>
            <FilterXIcon />
            Limpar
          </Button>
        )}
      </div>
    </>
  )
}
