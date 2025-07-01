import clsx from "clsx";

// this data has to be hardcoded for now
// json isn't condusive to calculating upcoming, due soon, etc.
const SummaryContainer = () => {
  const summaryData = [
    {
      label: "Paid Bills",
      count: 4,
      amount: 190.0,
    },
    {
      label: "Total Upcoming",
      count: 4,
      amount: 194.98,
    },
    {
      label: "Due Soon",
      count: 2,
      amount: 59.98,
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
              isWarning ? "text-red-500" : "text-grey-500"
            )}
          >
            {label}
          </p>
          <p
            className={clsx(
              "text-preset-5-bold",
              isWarning ? "text-red-500" : "text-grey-900"
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
