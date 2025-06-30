import DotHeading from "../budgets/dot-heading";
import PotButtonContainer from "./pot-button-container";
import PotsCardProgress from "./pots-card-progress";

const PotsCard = () => {
  return (
    <div className="bg-white w-[500px] space-y-4 p-6 rounded">
      <DotHeading label="Savings" color="green" />
      <PotsCardProgress />
      <PotButtonContainer />
    </div>
  );
};

export default PotsCard;
