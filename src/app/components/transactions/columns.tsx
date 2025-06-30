"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { format } from "date-fns";

//TODO: maybe add a check mark to the dropdown category filter to indicate the selected category

export type Transaction = {
  name: string;
  avatar: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
};

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
      const { name, avatar } = row.original;

      return (
        <div className="flex items-center gap-2">
          {avatar ? (
            <Image
              src={avatar.replace(/^\.\/assets/, "")}
              alt={name}
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-grey-200" />
          )}
          <span className="text-preset-4-bold text-grey-900">{name}</span>
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
      return (
        <div
          className={`text-right text-preset-4-bold ${
            amount > 0 ? "text-green" : "text-grey-900"
          }`}
        >
          {amount > 0
            ? `+£${amount.toFixed(2)}`
            : `-£${Math.abs(amount).toFixed(2)}`}
        </div>
      );
    },
  },
];
