"use client";
import { AppButton } from "../components/app-button";
import PotsCard from "../components/pots/pots-card";
import { useGetPots, useGetTransactions } from "@/lib/queries/queries";
import { useModalStore } from "@/lib/stores/modalStore";
//TODO: when a new pot is added, i don't want the bar filling animation on the other pots
// to run again, i want it to only run when the page is loaded

const PotsPage = () => {
  const { data: pots = [] } = useGetPots();
  const { data: transactions = [] } = useGetTransactions();
  const { openModal } = useModalStore();

  const potTotals: Record<string, number> = pots.reduce((acc, pot) => {
    const total = transactions.reduce((sum, transaction) => {
      return transaction.category === pot.name ? sum + transaction.amount : sum;
    }, 0);
    return { ...acc, [pot.id]: total };
  }, {});

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-preset-1">Pots</h2>
        <AppButton onClick={() => openModal("ADD_POT")}>
          + Add New Pot
        </AppButton>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {pots.map((pot, index) => (
          <PotsCard
            key={index}
            name={pot.name}
            target={pot.target}
            total={potTotals[pot.id] || 0}
            theme={pot.theme}
            id={pot.id}
          />
        ))}
      </div>
    </div>
  );
};

export default PotsPage;
