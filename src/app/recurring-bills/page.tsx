"use client";

import { BillsTable } from "../components/recurring-bills/recurring-data-table";
import { columns, Bill } from "../components/recurring-bills/recurring-columns";
import TotalBillsCard from "../components/recurring-bills/total-bills-card";
import SummaryContainer from "../components/recurring-bills/summary-container";

//TODO: IMPORT ASSETS

const data: Bill[] = [
  {
    id: "1",
    billTitle: "Spark Electric Solutions",
    dueDate: "2024-08-25T14:00:00Z",
    amount: 120.75,
  },
  {
    id: "2",
    billTitle: "Green Gas Services",
    dueDate: "2024-08-30T10:00:00Z",
    amount: 85.5,
  },
  {
    id: "3",
    billTitle: "Savory Bites Bistro",
    dueDate: "2024-08-19T20:23:11Z",
    amount: -55.5,
  },
];

const RecurringBillsPage = () => {
  return (
    <div className="p-6 flex ">
      <div>
        <TotalBillsCard />
        <SummaryContainer />
      </div>
      <BillsTable columns={columns} data={data} />
    </div>
  );
};

export default RecurringBillsPage;
