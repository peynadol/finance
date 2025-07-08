"use client";
import { AppButton } from "../components/app-button";
import PotsCard from "../components/pots/pots-card";
import { useGetPots, useGetTransactions } from "@/lib/queries/queries";
import { useModalStore } from "@/lib/stores/modalStore";
import { PotsCardSkeleton } from "../components/skeletons/pots-card-skeleton";

const PotsPage = () => {
  const { data: pots = [], isLoading: isPotsLoading } = useGetPots();

  const { data: transactions = [], isLoading: isTransactionsLoading } =
    useGetTransactions();

  const { openModal } = useModalStore();

  const isLoading = isPotsLoading || isTransactionsLoading;

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {isLoading
          ? [1, 2, 3].map((i) => <PotsCardSkeleton key={i} />)
          : pots.map((pot) => (
              <PotsCard
                key={pot.id}
                pot={{ ...pot, total: potTotals[pot.id] || 0 }}
              />
            ))}
      </div>
    </div>
  );
};
export default PotsPage;
