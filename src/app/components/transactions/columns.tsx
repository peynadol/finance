"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Transaction } from "@/lib/types";

//TODO: maybe add a check mark to the dropdown category filter to indicate the selected category
// category needs to be inferred from the transaction type

export const columns: ColumnDef<Transaction>[] = [
  {
    id: "recipient",
    accessorFn: (row) => row.name,
    header: () => (
      <div className="text-left text-preset-5 text-grey-500">
        Recipient / Sender
      </div>
    ),
    cell: ({ row }) => {
      const { name } = row.original;

      return (
        <div className="flex items-center">
          <p className="text-preset-4-bold text-grey-900">{name}</p>
        </div>
      );
    },
    enableSorting: true,
  },

  {
    accessorKey: "category",
    header: () => (
      <div className="text-left text-preset-5 text-grey-500">Category</div>
    ),
    enableSorting: true,
    cell: ({ row }) => {
      const category: string = row.getValue("category");
      return (
        <div className="text-preset-5 text-grey-500">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: () => (
      <div className="text-left text-preset-5 text-grey-500">Date</div>
    ),
    enableSorting: true,
    sortingFn: (rowA, rowB) => {
      const dateA = new Date(rowA.getValue("date"));
      const dateB = new Date(rowB.getValue("date"));
      return dateA.getTime() - dateB.getTime();
    },
    cell: ({ row }) => {
      const date: string = row.getValue("date");
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
      const amount: number = row.getValue("amount");
      const type: string = row.original.type;

      const isIncome = type === "income";
      const sign = isIncome ? "+" : "-";
      const color = isIncome ? "text-green" : "text-red";

      return (
        <div className={`text-right text-preset-4-bold ${color}`}>
          {`${sign}£${amount.toFixed(2)}`}
        </div>
      );
    },
  },
];
