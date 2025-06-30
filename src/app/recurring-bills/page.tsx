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
  {
    id: "4",
    billTitle: "City Water Supply",
    dueDate: "2024-08-22T09:00:00Z",
    amount: 45.0,
  },
  {
    id: "5",
    billTitle: "Tech Innovations Monthly",
    dueDate: "2024-08-28T12:00:00Z",
    amount: 78.25,
  },
  {
    id: "6",
    billTitle: "Home Security Systems",
    dueDate: "2024-08-21T15:30:00Z",
    amount: 99.99,
  },
  {
    id: "7",
    billTitle: "Internet Provider Monthly",
    dueDate: "2024-08-26T11:00:00Z",
    amount: 65.0,
  },
  {
    id: "8",
    billTitle: "Streaming Service Subscription",
    dueDate: "2024-08-29T18:00:00Z",
    amount: 12.99,
  },
];

const RecurringBillsPage = () => {
  return (
    <div className="p-6 grid grid-cols-[1fr_2fr] gap-6">
      <div className=" space-y-4">
        <TotalBillsCard />
        <SummaryContainer />
      </div>
      <div className=" bg-white rounded-lg p-4">
        <BillsTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default RecurringBillsPage;
