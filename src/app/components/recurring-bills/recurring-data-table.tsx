"use client";
import { ArrowDownUp } from "lucide-react";
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

interface BillsTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function BillsTable<TData, TValue>({
  columns,
  data,
}: BillsTableProps<TData, TValue>) {
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
    state: {
      columnFilters,
      sorting,
    },
  });

  return (
    <div className="">
      <div className="w-full mb-4">
        {/* Mobile layout */}
        <div className="flex md:hidden items-center gap-2 bg-[#F9F6F3] p-2 rounded-xl">
          {/* Search Input */}
          <Input
            placeholder="Search bill title"
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
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
                onSelect={() => table.setSorting([{ id: "date", desc: false }])}
              >
                Soonest Due
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => table.setSorting([{ id: "date", desc: true }])}
              >
                Latest Due
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => table.setSorting([{ id: "name", desc: false }])}
              >
                A to Z
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => table.setSorting([{ id: "name", desc: true }])}
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

        {/* Desktop layout */}
        <div className="hidden md:flex items-center justify-between py-4">
          {/* Search input */}
          <Input
            placeholder="Search bill title..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />

          {/* Sort dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Sort by <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem
                onSelect={() => table.setSorting([{ id: "date", desc: false }])}
              >
                Soonest Due
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => table.setSorting([{ id: "date", desc: true }])}
              >
                Latest Due
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => table.setSorting([{ id: "name", desc: false }])}
              >
                A to Z
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => table.setSorting([{ id: "name", desc: true }])}
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
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
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
    </div>
  );
}
