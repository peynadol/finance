import DotHeading from "../budgets/dot-heading";
import PotButtonContainer from "./pot-button-container";
import PotsCardProgress from "./pots-card-progress";

type PotsCardProps = {
  id: string;
  name: string;
  total: number;
  target: number;
  theme: string;
};
const PotsCard = ({ name, total, target, theme, id }: PotsCardProps) => {
  return (
    <div className="bg-white w-full p-6 space-y-4 rounded">
      <DotHeading label={name} colour={theme} id={id} />
      <PotsCardProgress target={target} total={total} theme={theme} />
      <PotButtonContainer />
    </div>
  );
};

export default PotsCard;
