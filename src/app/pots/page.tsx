"use client";
import { AppButton } from "../components/app-button";
import PotsCard from "../components/pots/pots-card";
import { useGetPots, useGetTransactions } from "@/lib/queries/queries";

const PotsPage = () => {
  const { data: pots = [] } = useGetPots();
  const { data: transactions = [] } = useGetTransactions();

  const potTotals: Record<string, number> = pots.reduce((acc, pot) => {
    const total = transactions.reduce((sum, transaction) => {
      return transaction.category === pot.name ? sum + transaction.amount : sum;
    }, 0);
    return { ...acc, [pot.id]: total };
  }, {});

  console.log("Pots data:", pots);
  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-preset-1">Pots</h2>
        <AppButton>+ Add New Pot</AppButton>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {pots.map((pot, index) => (
          <PotsCard
            key={index}
            name={pot.name}
            target={pot.target}
            total={potTotals[pot.id] || 0}
            theme={pot.theme}
          />
        ))}
      </div>
    </div>
  );
};

export default PotsPage;
