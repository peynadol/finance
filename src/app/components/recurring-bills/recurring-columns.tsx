"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

export type Bill = {
  id: string;
  billTitle: string;
  dueDate: string;
  amount: number;
};

export const columns: ColumnDef<Bill>[] = [
  {
    accessorKey: "billTitle",
    header: () => (
      <div className="text-left text-preset-5 text-grey-500">Bill Title</div>
    ),
    enableSorting: true,
    cell: ({ row }) => {
      const title: string = row.getValue("billTitle");
      return <span className="text-preset-4-bold text-grey-900">{title}</span>;
    },
  },
  {
    accessorKey: "dueDate",
    header: () => (
      <div className="text-left text-preset-5 text-grey-500">Due Date</div>
    ),
    enableSorting: true,
    sortingFn: (rowA, rowB) => {
      const dateA = new Date(rowA.getValue("dueDate"));
      const dateB = new Date(rowB.getValue("dueDate"));
      return dateA.getTime() - dateB.getTime();
    },
    cell: ({ row }) => {
      const dueDate: string = row.getValue("dueDate");
      return (
        <div className="text-preset-5 text-grey-500">
          {format(new Date(dueDate), "dd MMM yyyy")}
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
        <div className="text-right text-preset-4-bold text-grey-900">
          £{amount.toFixed(2)}
        </div>
      );
    },
  },
];
