"use client";

import { columns, Transaction } from "@/app/components/transactions/columns";
import { DataTable } from "@/app/components/transactions/data-table";
//TODO: IMPORT ASSETS
import { useGetTransactions } from "@/lib/queries/queries";
import { AppButton } from "../components/app-button";
import { useModalStore } from "@/lib/stores/modalStore";

const TransactionsPage = () => {
  const { data: transactions = [], isLoading } = useGetTransactions();
  const { openModal } = useModalStore();
  const transactionCategories = transactions.map(
    (transaction: Transaction) => transaction.category
  );
  return (
    <div className="flex flex-col h-full p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between ">
        <h2 className="text-preset-1">Transactions</h2>
        <AppButton
          onClick={() =>
            openModal("ADD_TRANSACTION", { transactionCategories })
          }
        >
          + Add Transaction
        </AppButton>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-lg w-full p-4  ">
        <DataTable columns={columns} data={transactions} />
      </div>
    </div>
  );
};

export default TransactionsPage;
