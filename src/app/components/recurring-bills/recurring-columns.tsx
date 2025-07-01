"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

export type Bill = {
  name: string;
  category: string;
  amount: number;
  date: string;
  recurring: boolean;
};

export const columns: ColumnDef<Bill>[] = [
  {
    accessorKey: "name",
    header: () => (
      <div className="text-left text-preset-5 text-grey-500">Bill Title</div>
    ),
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      const avatar = row.original.avatar;

      return (
        <div className="flex items-center gap-2">
          <p className="text-preset-4-bold text-grey-900">{name}</p>
        </div>
      );
    },
    enableSorting: true,
  },
  {
    accessorKey: "date",
    header: () => (
      <div className="text-left text-preset-5 text-grey-500">Due Date</div>
    ),
    enableSorting: true,
    sortingFn: (rowA, rowB) => {
      const a = new Date(rowA.getValue("date")).getTime() || 0;
      const b = new Date(rowB.getValue("date")).getTime() || 0;
      return a - b;
    },
    cell: ({ row }) => {
      const date = row.getValue("date") as string;
      return (
        <div className="text-preset-5 text-grey-500">
          {format(new Date(date), "dd MMM yyyy")}
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: () => (
      <div className="text-right text-preset-5 text-grey-500">Amount</div>
    ),
    enableSorting: true,
    cell: ({ row }) => {
      const amount = row.getValue("amount") as number;
      return (
        <div className="text-right text-preset-4-bold text-grey-900">
          £{Math.abs(amount).toFixed(2)}
        </div>
      );
    },
  },
];
