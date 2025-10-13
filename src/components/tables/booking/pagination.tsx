import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useBookingFilterParams } from '@/hooks/use-booking-filter-params'

export function BookingPagination({ totalPages }: { totalPages: number }) {
  const { filter, setFilter } = useBookingFilterParams()

  function handlePageChange(page: number) {
    setFilter({ page })
  }

  return (
    <div className="flex justify-between">
      <Select
        value={filter.limit.toString()}
        onValueChange={(value) =>
          setFilter({ limit: parseInt(value), page: 1 })
        }
      >
        <SelectTrigger>
          <SelectValue>{filter.limit}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="20">20</SelectItem>
          <SelectItem value="50">50</SelectItem>
        </SelectContent>
      </Select>

      <div>
        <Pagination>
          <PaginationContent>
            {filter.page > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(filter.page - 1)}
                />
              </PaginationItem>
            )}
            {filter.page < totalPages && (
              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(filter.page + 1)}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
