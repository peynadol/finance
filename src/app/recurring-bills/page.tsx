"use client";

import { BillsTable } from "../components/recurring-bills/recurring-data-table";
import { columns, Bill } from "../components/recurring-bills/recurring-columns";
import TotalBillsCard from "../components/recurring-bills/total-bills-card";
import SummaryContainer from "../components/recurring-bills/summary-container";
import { useStore } from "@/lib/stores/useStore";
import { useGetTransactions } from "@/lib/queries/queries";

//TODO: IMPORT ASSETS

const RecurringBillsPage = () => {
  const { data: transactions = [], isLoading } = useGetTransactions();
  const recurringTotal = transactions.reduce((acc, transaction) => {
    if (transaction.recurring) {
      return acc + transaction.amount;
    }
    return acc;
  }, 0);
  const recurringBills = useStore((state) => state.recurringBills);

  return (
    <div className="p-6 grid grid-cols-[1fr_2fr] gap-6">
      <div className=" space-y-4">
        <TotalBillsCard total={recurringTotal} />
        <SummaryContainer transactions={transactions} />
      </div>
      <div className=" bg-white rounded-lg p-4">
        <BillsTable columns={columns} data={transactions} />
      </div>
    </div>
  );
};

export default RecurringBillsPage;
