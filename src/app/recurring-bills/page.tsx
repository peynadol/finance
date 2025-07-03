"use client";

import { BillsTable } from "../components/recurring-bills/recurring-data-table";
import { columns } from "../components/recurring-bills/recurring-columns";
import TotalBillsCard from "../components/recurring-bills/total-bills-card";
import SummaryContainer from "../components/recurring-bills/summary-container";
import { useGetTransactions } from "@/lib/queries/queries";

// Skeletons
import TotalBillsSkeleton from "../components/skeletons/total-bills-skeleton";
import BillsSummarySkeleton from "../components/skeletons/bills-summary-skeleton";
import BillsTableSkeleton from "../components/skeletons/bills-table-skeleton";

const RecurringBillsPage = () => {
  const { data: transactions = [], isLoading } = useGetTransactions();

  const recurringTotal = transactions.reduce((acc, transaction) => {
    if (transaction.recurring) {
      return acc + transaction.amount;
    }
    return acc;
  }, 0);

  return (
    <div className="p-6 grid grid-cols-[1fr_2fr] gap-6">
      <div className="space-y-4">
        {isLoading ? (
          <>
            <TotalBillsSkeleton />
            <BillsSummarySkeleton />
          </>
        ) : (
          <>
            <TotalBillsCard total={recurringTotal} />
            <SummaryContainer transactions={transactions} />
          </>
        )}
      </div>

      <div className="bg-white rounded-lg p-4">
        {isLoading ? (
          <BillsTableSkeleton />
        ) : (
          <BillsTable columns={columns} data={transactions} />
        )}
      </div>
    </div>
  );
};

export default RecurringBillsPage;
