import { Progress } from "@/components/ui/progress";

//TODO: dynamically set the value and max
//TODO: calculate the percentage saved
//TODO: set the target amount dynamically
type PotsCardProgressProps = {
  target: number;
  total: number;
  theme?: string;
};
const PotsCardProgress = ({ target, total, theme }: PotsCardProgressProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-preset-4 text-grey-500">Total Saved</p>
        <p className="text-preset-1">£{total.toFixed(2)}</p>
      </div>
      <Progress
        value={Number(((total / target) * 100).toFixed(0))}
        max={100}
        className="bg-beige-100"
        colour={theme || "bg-green-500"}
      />
      <div className="flex items-center justify-between">
        <p className="text-preset-5-bold text-grey-500">
          {((total / target) * 100).toFixed(0)}%
        </p>
        <p className="text-preset-5 text-grey-500">Target of £{target}</p>
      </div>
    </div>
  );
};

export default PotsCardProgress;
