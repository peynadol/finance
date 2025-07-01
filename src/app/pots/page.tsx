"use client";
import { AppButton } from "../components/app-button";
import PotsCard from "../components/pots/pots-card";
import { useStore } from "@/lib/useStore";

const PotsPage = () => {
  const pots = useStore((state) => state.pots);
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
            total={pot.total}
            theme={pot.theme}
          />
        ))}
      </div>
    </div>
  );
};

export default PotsPage;
