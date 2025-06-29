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
      <div className="text-left text-preset-5 text-grey-500">
        Recipient / Sender
      </div>
    ),
    cell: ({ row }) => {
      const name: string = row.getValue("name");
      const avatar: string = row.getValue("avatar");
      return (
        <div className="flex items-center gap-2">
          <Image
            src={avatar}
            alt={name}
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-preset-4-bold text-grey-900">{name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: () => (
      <div className="text-left text-preset-5 text-grey-500">Category</div>
    ),
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
