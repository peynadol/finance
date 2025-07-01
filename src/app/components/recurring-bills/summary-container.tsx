import clsx from "clsx";
import { Transaction } from "@/lib/types";

const SummaryContainer = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  // consider abstracting this logic to a custom hook as it's used in one other place so far
  const today = new Date();
  const dueSoonThreshold = new Date();
  dueSoonThreshold.setDate(today.getDate() + 2);

  const recurringBills = transactions.filter(
    (tx) => tx.recurring && tx.type === "expense"
  );

  const paidBills = recurringBills.filter((tx) => new Date(tx.date) < today);
  const totalUpcoming = recurringBills.filter(
    (tx) => new Date(tx.date) > today
  );
  const dueSoon = recurringBills.filter((tx) => {
    const billDate = new Date(tx.date);
    return billDate > today && billDate <= dueSoonThreshold;
  });

  const summaryData = [
    {
      label: "Paid Bills",
      count: paidBills.length,
      amount: paidBills.reduce((sum, tx) => sum + tx.amount, 0),
    },
    {
      label: "Total Upcoming",
      count: totalUpcoming.length,
      amount: totalUpcoming.reduce((sum, tx) => sum + tx.amount, 0),
    },
    {
      label: "Due Soon",
      count: dueSoon.length,
      amount: dueSoon.reduce((sum, tx) => sum + tx.amount, 0),
      isWarning: true,
    },
  ];

  return (
    <div className="rounded-lg p-4 bg-white">
      <h2 className="text-preset-3 mb-4">Summary</h2>
      {summaryData.map(({ label, count, amount, isWarning }, i) => (
        <div
          key={label}
          className={clsx(
            "flex items-center justify-between py-4",
            i < summaryData.length - 1 && "border-b"
          )}
        >
          <p
            className={clsx(
              "text-preset-5",
              isWarning ? "text-red" : "text-grey-500"
            )}
          >
            {label}
          </p>
          <p
            className={clsx(
              "text-preset-5-bold",
              isWarning ? "text-red" : "text-grey-900"
            )}
          >
            {count} (£{amount.toFixed(2)})
          </p>
        </div>
      ))}
    </div>
  );
};

export default SummaryContainer;
