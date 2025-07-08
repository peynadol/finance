"use client";
import { Funnel, ArrowDownUp } from "lucide-react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface DataTableProps<TData extends { category: string }, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData extends { category: string }, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
    state: {
      columnFilters,
      sorting,
    },
  });

  // grabs unique categories from the data
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  ).filter(Boolean);

  return (
    <div>
      {/* Mobile filter/search bar */}
      <div className="block md:hidden w-full mb-4">
        <div className="flex items-center gap-2 bg-[#F9F6F3] p-2 rounded-xl">
          {/* Search Input */}
          <Input
            placeholder="Search transaction"
            value={
              (table.getColumn("recipient")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("recipient")?.setFilterValue(event.target.value)
            }
            className="flex-1 bg-white text-sm"
          />

          {/* Sort Icon */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost">
                <ArrowDownUp className="w-5 h-5 text-grey-700" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onSelect={() => table.setSorting([{ id: "date", desc: true }])}
              >
                Latest
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => table.setSorting([{ id: "date", desc: false }])}
              >
                Oldest
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() =>
                  table.setSorting([{ id: "amount", desc: true }])
                }
              >
                Highest
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() =>
                  table.setSorting([{ id: "amount", desc: false }])
                }
              >
                Lowest
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Filter Icon */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost">
                <Funnel className="w-5 h-5 text-grey-700" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onSelect={() =>
                  table.getColumn("category")?.setFilterValue(undefined)
                }
              >
                All Transactions
              </DropdownMenuItem>
              {uniqueCategories.map((category) => (
                <DropdownMenuItem
                  key={category}
                  onSelect={() =>
                    table.getColumn("category")?.setFilterValue(category)
                  }
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Desktop filter/search bar */}
      <div className="hidden md:flex items-center py-4 justify-between mb-4">
        {/* Desktop Search */}
        <Input
          placeholder="Search recipient or sender..."
          value={
            (table.getColumn("recipient")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("recipient")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        {/* Desktop Filter & Sort */}
        <div className="flex items-center gap-4">
          {/* Category Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Category <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onSelect={() =>
                  table.getColumn("category")?.setFilterValue(undefined)
                }
              >
                All Transactions
              </DropdownMenuItem>
              {uniqueCategories.map((category) => (
                <DropdownMenuItem
                  key={category}
                  onSelect={() =>
                    table.getColumn("category")?.setFilterValue(category)
                  }
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Sort Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Sort by <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem
                onSelect={() => table.setSorting([{ id: "date", desc: true }])}
              >
                Latest
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => table.setSorting([{ id: "date", desc: false }])}
              >
                Oldest
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() =>
                  table.setSorting([{ id: "recipient", desc: false }])
                }
              >
                A to Z
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() =>
                  table.setSorting([{ id: "recipient", desc: true }])
                }
              >
                Z to A
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() =>
                  table.setSorting([{ id: "amount", desc: true }])
                }
              >
                Highest
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() =>
                  table.setSorting([{ id: "amount", desc: false }])
                }
              >
                Lowest
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Table */}
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
                  );
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
  );
}
