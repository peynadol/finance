import { ChevronRight } from "lucide-react";
import OverviewSummaryCard from "./overview-summary-card";
import PotTotalCard from "./pot-total-card";
import Link from "next/link";
import { Pot, Transaction } from "@/lib/types";

const PotOverviewContainer = ({
  pots,
  transactions,
}: {
  pots: Pot[];
  transactions: Transaction[];
}) => {
  // calculates how much is saved in a specific pot
  const getPotTotal = (potName: string) => {
    return transactions.reduce((acc, transaction) => {
      return transaction.category === potName ? acc + transaction.amount : acc;
    }, 0);
  };

  // enrich pots with totalSaved field
  const enrichedPots = pots.map((pot) => ({
    ...pot,
    totalSaved: getPotTotal(pot.name),
  }));

  // calculates total saved across all pots
  const totalSaved = enrichedPots.reduce((acc, pot) => acc + pot.totalSaved, 0);
  console.log("All pot-related transactions:");
  pots.forEach((pot) => {
    const related = transactions.filter(
      (t) => t.category === pot.name && t.type === "expense"
    );
    console.log(pot.name, related.length, related);
  });

  return (
    <div className="bg-white rounded-lg p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-preset-2 text-grey-900">Pots</h2>
        <Link
          href="/pots"
          className="text-preset-4 text-grey-500 hover:underline"
        >
          See Details <ChevronRight className="inline ml-1 " size={16} />
        </Link>
      </div>

      {/* Content */}
      <div className="md:flex-row gap-6 flex flex-col">
        {/* Total Saved Section */}
        <div className="flex-1">
          <PotTotalCard total={totalSaved} />
        </div>

        {/* Grid of Pots */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 flex-1">
          {enrichedPots.slice(0, 4).map((pot) => (
            <OverviewSummaryCard
              key={pot.name}
              name={pot.name}
              amount={pot.totalSaved}
              colour={pot.theme}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PotOverviewContainer;
