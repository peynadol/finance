"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { format } from "date-fns";

//TODO: In amount, conditionally render colour based on positive or negative value

export type Transaction = {
  id: string;
  name: string;
  avatar: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: () => (
      <div className="text-left text-preset-5 text-grey-900">Name</div>
    ),
  },
  {
    accessorKey: "category",
    header: () => (
      <div className="text-left text-preset-5 text-grey-900">Category</div>
    ),
  },
  {
    accessorKey: "date",
    header: () => (
      <div className="text-left text-preset-5 text-grey-900">Date</div>
    ),
  },
  {
    accessorKey: "amount",
    header: () => (
      <div className="text-right text-preset-5 text-grey-900">Amount</div>
    ),
    cell: ({ row }) => {
      const amount: number = row.getValue("amount");
      return (
        <div className="text-right text-preset-5 text-grey-900">
          {amount > 0
            ? `+£${amount.toFixed(2)}`
            : `-£${Math.abs(amount).toFixed(2)}`}
        </div>
      );
    },
  },
];
