import { ChevronRight } from "lucide-react";
import OverviewRecurringBillCard from "./overview-recurring-bill-card";
import Link from "next/link";
import { Transaction } from "@/lib/types";

const OverviewRecurringBillContainer = ({
  recurringBills,
}: {
  recurringBills: Transaction[];
}) => {
  const today = new Date();
  const dueSoonThreshold = new Date();
  dueSoonThreshold.setDate(today.getDate() + 2); // 2 days from

  const totalPaid = recurringBills.reduce((acc, bill) => {
    const billDate = new Date(bill.date);
    return billDate < today ? acc + bill.amount : acc;
  }, 0);

  const totalUpcoming = recurringBills.reduce((acc, bill) => {
    const billDate = new Date(bill.date);
    return billDate > today ? acc + bill.amount : acc;
  }, 0);

  const totalDueSoon = recurringBills.reduce((acc, bill) => {
    const billDate = new Date(bill.date);
    return billDate > today && billDate <= dueSoonThreshold
      ? acc + bill.amount
      : acc;
  }, 0);

  const recurringBillSummaries = [
    {
      name: "Paid Bills",
      amount: totalPaid,
      colour: "bg-green-800",
    },
    {
      name: "Total Upcoming",
      amount: totalUpcoming,
      colour: "bg-orange-200",
    },
    {
      name: "Due Soon",
      amount: totalDueSoon,
      colour: "bg-sky-300",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-8  ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-preset-2">Recurring Bills</h2>
        <Link
          href="/recurring-bills"
          className="text-preset-4 text-grey-500 hover:underline"
        >
          See Details <ChevronRight className="inline ml-1" size={16} />
        </Link>
      </div>

      <div className="flex items-center flex-col gap-4">
        {recurringBillSummaries.map((summary) => (
          <OverviewRecurringBillCard
            key={summary.name}
            name={summary.name}
            amount={summary.amount}
            colour={summary.colour}
          />
        ))}
      </div>
    </div>
  );
};

export default OverviewRecurringBillContainer;
