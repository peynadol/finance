import { ChevronRight } from "lucide-react";
import OverviewRecurringBillCard from "./overview-recurring-bill-card";
import Link from "next/link";
import { useStore } from "@/lib/useStore";

const OverviewRecurringBillContainer = () => {
  // const recurringBills = useStore((state) => state.recurringBills);
  // for now, using hardcoded data
  // the provided data is all in the past, so hard to dynamically render 'upcoming' bills
  const recurringBillSummaries = [
    {
      name: "Paid Bills",
      amount: 190.0,
      colour: "bg-green-800",
    },
    {
      name: "Total Upcoming",
      amount: 194.98,
      colour: "bg-orange-200",
    },
    {
      name: "Due Soon",
      amount: 59.98,
      colour: "bg-sky-300",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-8 min-w-[400px] ">
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
