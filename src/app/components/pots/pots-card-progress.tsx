import { Progress } from "@/components/ui/progress";

//TODO: dynamically set the value and max
//TODO: calculate the percentage saved
//TODO: set the target amount dynamically
const PotsCardProgress = () => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-preset-4 text-grey-500">Total Saved</p>
        <p className="text-preset-1">£40.00</p>
      </div>
      <Progress value={40} max={100} className="bg-beige-100 [&>*]:bg-green" />
      <div className="flex items-center justify-between">
        <p className="text-preset-5-bold text-grey-500">%7.95</p>
        <p className="text-preset-5 text-grey-500">Target of £2,000</p>
      </div>
    </div>
  );
};

export default PotsCardProgress;
