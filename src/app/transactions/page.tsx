"use client";

import { columns, Transaction } from "@/app/components/transactions/columns";
import { DataTable } from "@/app/components/transactions/data-table"; // Make sure this path works with `public/`
//TODO: IMPORT ASSETS

const data: Transaction[] = [
  {
    id: "1",
    name: "Emma Richardson",
    avatar: "/assets/images/avatars/emma-richardson.jpg",
    category: "General",
    date: "2024-08-19T14:23:11Z",
    amount: 75.5,
    recurring: false,
  },
  {
    id: "2",
    name: "Savory Bites Bistro",
    avatar: "/assets/images/avatars/savory-bites-bistro.jpg",
    category: "Dining Out",
    date: "2024-08-19T20:23:11Z",
    amount: -55.5,
    recurring: false,
  },
  {
    id: "3",
    name: "Savory Bites Bistro",
    avatar: "/assets/images/avatars/savory-bites-bistro.jpg",
    category: "Dining Out",
    date: "2024-08-19T20:23:11Z",
    amount: -55.5,
    recurring: false,
  },
];

const TransactionsPage = () => {
  return (
    <div className="p-6">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default TransactionsPage;
