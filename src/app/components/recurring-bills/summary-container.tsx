import React from "react";

const SummaryContainer = () => {
  return (
    <div className="rounded p-4">
      <h2 className="text-preset-3">Summary</h2>
      <div className="flex items-center justify-between border-b py-4">
        <p className="text-preset-5 text-grey-500">Paid Bills</p>
        <p className="text-preset-5-bold">4 (£190.00)</p>
      </div>
      <div className="flex items-center justify-between border-b py-4">
        <p className="text-preset-5 text-grey-500">Paid Bills</p>
        <p className="text-preset-5-bold">4 (£190.00)</p>
      </div>
      <div className="flex items-center justify-between border-b py-4">
        <p className="text-preset-5 text-grey-500">Paid Bills</p>
        <p className="text-preset-5-bold">4 (£190.00)</p>
      </div>
    </div>
  );
};

export default SummaryContainer;
