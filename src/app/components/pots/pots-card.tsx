import DotHeading from "../budgets/dot-heading";
import PotButtonContainer from "./pot-button-container";
import PotsCardProgress from "./pots-card-progress";
import { Pot } from "@/lib/types";

type PotsCardProps = {
  pot: Pot;
};
const PotsCard = ({ pot }: PotsCardProps) => {
  return (
    <div className="bg-white w-full p-6 space-y-4 rounded">
      <DotHeading data={pot} />
      <PotsCardProgress
        target={pot.target}
        total={pot.total}
        theme={pot.theme}
      />
    </div>
  );
};

export default PotsCard;
