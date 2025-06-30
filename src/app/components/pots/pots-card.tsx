import DotHeading from "../budgets/dot-heading";
import PotButtonContainer from "./pot-button-container";
import PotsCardProgress from "./pots-card-progress";

const PotsCard = () => {
  return (
    <div className="bg-white w-full p-6 space-y-4 rounded">
      <DotHeading label="Savings" color="bg-green" />
      <PotsCardProgress />
      <PotButtonContainer />
    </div>
  );
};

export default PotsCard;
