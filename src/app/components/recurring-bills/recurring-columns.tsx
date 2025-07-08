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

      return (
        <div className="flex items-center gap-2">
          <p className="text-preset-4-bold text-grey-900 truncate max-w-[120px] md:max-w-none">
            {name}
          </p>
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
        <>
          {/* Mobile format */}
          <div className="text-preset-5 text-grey-500 block md:hidden">
            {format(new Date(date), "dd/MM/yy")}
          </div>

          {/* Desktop format */}
          <div className="text-preset-5 text-grey-500 hidden md:block">
            {format(new Date(date), "dd MMM yyyy")}
          </div>
        </>
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
