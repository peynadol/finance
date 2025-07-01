"use client";

import { columns, Transaction } from "@/app/components/transactions/columns";
import { DataTable } from "@/app/components/transactions/data-table";
//TODO: IMPORT ASSETS
import { useStore } from "@/lib/useStore";

const TransactionsPage = () => {
  const transactionsStore = useStore((state) => state.transactions);
  return (
    <div className="flex flex-col h-full p-4 space-y-4">
      {/* Header */}
      <div className=" ">
        <h2 className="text-preset-1">Transactions</h2>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-lg w-full p-4  ">
        <DataTable columns={columns} data={transactionsStore} />
      </div>
    </div>
  );
};

export default TransactionsPage;
