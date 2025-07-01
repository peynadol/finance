"use client";

import { BillsTable } from "../components/recurring-bills/recurring-data-table";
import { columns, Bill } from "../components/recurring-bills/recurring-columns";
import TotalBillsCard from "../components/recurring-bills/total-bills-card";
import SummaryContainer from "../components/recurring-bills/summary-container";
import { useStore } from "@/lib/useStore";

//TODO: IMPORT ASSETS

const RecurringBillsPage = () => {
  const recurringBills = useStore((state) => state.recurringBills);
  console.log("Recurring Bills:", recurringBills);
  const total = Math.abs(
    recurringBills.reduce((acc, bill) => acc + bill.amount, 0)
  );
  return (
    <div className="p-6 grid grid-cols-[1fr_2fr] gap-6">
      <div className=" space-y-4">
        <TotalBillsCard total={total} />
        <SummaryContainer />
      </div>
      <div className=" bg-white rounded-lg p-4">
        <BillsTable columns={columns} data={recurringBills} />
      </div>
    </div>
  );
};

export default RecurringBillsPage;
