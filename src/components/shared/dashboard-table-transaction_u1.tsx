"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data: Transaction[] = [
  {
    id: 1,
    name: "Digital Marketing Untuk Pemula",
    type: "UMKM Level Up",
    price: 499000,
    status: "Success",
    date: "10/11/2024",
    valid_until: "1 Jan - 31 Des 2024",
  },
  {
    id: 2,
    name: "Digital Marketing Untuk Pemula",
    type: "UMKM Level Up",
    price: 499000,
    status: "Failed",
    date: "10/11/2024",
    valid_until: "1 Jan - 31 Des 2024",
  },
  {
    id: 3,
    name: "Digital Marketing Untuk Pemula",
    type: "UMKM Level Up",
    price: 499000,
    status: "Success",
    date: "10/11/2024",
    valid_until: "1 Jan - 31 Des 2024",
  },
  {
    id: 4,
    name: "Digital Marketing Untuk Pemula",
    type: "UMKM Level Up",
    price: 499000,
    status: "Success",
    date: "10/11/2024",
    valid_until: "1 Jan - 31 Des 2024",
  },
  {
    id: 5,
    name: "Digital Marketing Untuk Pemula",
    type: "UMKM Level Up",
    price: 499000,
    status: "Success",
    date: "10/11/2024",
    valid_until: "1 Jan - 31 Des 2024",
  },
  {
    id: 6,
    name: "Digital Marketing Untuk Pemula",
    type: "UMKM Level Up",
    price: 499000,
    status: "Success",
    date: "10/11/2024",
    valid_until: "1 Jan - 31 Des 2024",
  },
  {
    id: 7,
    name: "Digital Marketing Untuk Pemula",
    type: "UMKM Level Up",
    price: 499000,
    status: "Success",
    date: "10/11/2024",
    valid_until: "1 Jan - 31 Des 2024",
  },
  {
    id: 8,
    name: "Digital Marketing Untuk Pemula",
    type: "UMKM Level Up",
    price: 499000,
    status: "Success",
    date: "10/11/2024",
    valid_until: "1 Jan - 31 Des 2024",
  },
  {
    id: 9,
    name: "Digital Marketing Untuk Pemula",
    type: "UMKM Level Up",
    price: 499000,
    status: "Success",
    date: "10/11/2024",
    valid_until: "1 Jan - 31 Des 2024",
  },
  {
    id: 10,
    name: "Digital Marketing Untuk Pemula",
    type: "UMKM Level Up",
    price: 499000,
    status: "Success",
    date: "10/11/2024",
    valid_until: "1 Jan - 31 Des 2024",
  },
  {
    id: 11,
    name: "Digital Marketing Untuk Pemula",
    type: "UMKM Level Up",
    price: 499000,
    status: "Success",
    date: "10/11/2024",
    valid_until: "1 Jan - 31 Des 2024",
  },
  {
    id: 12,
    name: "Digital Marketing Untuk Pemula",
    type: "UMKM Level Up",
    price: 499000,
    status: "Success",
    date: "10/11/2024",
    valid_until: "1 Jan - 31 Des 2024",
  },
  {
    id: 13,
    name: "Digital Marketing Untuk Pemula",
    type: "UMKM Level Up",
    price: 499000,
    status: "Success",
    date: "10/11/2024",
    valid_until: "1 Jan - 31 Des 2024",
  },
]

export type Transaction = {
  id: number
  name: string
  type: string
  price: number
  status: "Pending" | "Processing" | "Success" | "Failed"
  date: string
  valid_until: string
}

export const columns: ColumnDef<Transaction>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Type
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("type")}</div>,
  },
  {
    accessorKey: "price",
    header: () => <div className="text-center">Price</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"))

      // Format the amount as a indonesian amount
      const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(amount)

      return <div className="text-center font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="text-center lowercase">{row.getValue("status")}</div>,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("date")}</div>
    ),
  },
  {
    accessorKey: "valid_until",
    header: "Valid Until",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("valid_until")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const transaction = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              // onClick={() => navigator.clipboard.writeText(transaction.id)}
              onClick={() => navigator.clipboard.writeText(transaction.id.toString())}
            >
              Copy transaction ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View transaction details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter status..."
          value={(table.getColumn("status")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("status")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
