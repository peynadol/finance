import { AppButton } from "../components/app-button";
import PotsCard from "../components/pots/pots-card";

const PotsPage = () => {
  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-preset-1">Pots</h2>
        <AppButton>+ Add New Pot</AppButton>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <PotsCard />
        <PotsCard />
        <PotsCard />
        <PotsCard />
        <PotsCard />
      </div>
    </div>
  );
};

export default PotsPage;
