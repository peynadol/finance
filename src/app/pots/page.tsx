"use client";
import { AppButton } from "../components/app-button";
import { useGetPots, useGetTransactions } from "@/lib/queries/queries";
import { useModalStore } from "@/lib/stores/modalStore";
import { PotsCardSkeleton } from "../components/skeletons/pots-card-skeleton";
import SortablePotCard from "../components/pots/sortable-pot-card";
import { DndContext } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import { arrayMove } from "@dnd-kit/sortable"; // optional, or use a separate helper
import { useState, useEffect } from "react";

const PotsPage = () => {
  const { data: potsData = [], isLoading: isPotsLoading } = useGetPots();
  const [pots, setPots] = useState(potsData);

  useEffect(() => {
    if (potsData.length > 0) {
      setPots(potsData);
    }
  }, [potsData.length]); // linting issue here

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

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = pots.findIndex((p) => p.id === active.id);
    const newIndex = pots.findIndex((p) => p.id === over.id);

    setPots(arrayMove(pots, oldIndex, newIndex));
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-preset-1">Pots</h2>
        <AppButton onClick={() => openModal("ADD_POT")}>
          + Add New Pot
        </AppButton>
      </div>

      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext
          items={pots.map((p) => p.id)}
          strategy={rectSortingStrategy}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {isLoading
              ? [1, 2, 3].map((i) => <PotsCardSkeleton key={i} />)
              : pots.map((pot) => (
                  <SortablePotCard
                    key={pot.id}
                    pot={{ ...pot, total: potTotals[pot.id] || 0 }}
                  />
                ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};
export default PotsPage;
