import { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";

type PotsCardProgressProps = {
  target: number;
  total: number;
  theme?: string;
};

const PotsCardProgress = ({ target, total, theme }: PotsCardProgressProps) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const hasAnimated = useRef(false);

  const percentage = Number(((total / target) * 100).toFixed(0));

  useEffect(() => {
    if (!hasAnimated.current) {
      hasAnimated.current = true;

      // delay to trigger animation smoothly after mount
      const timeout = setTimeout(() => {
        setAnimatedValue(percentage);
      }, 100);

      // cleanup function to clear the timeout
      return () => clearTimeout(timeout);
    } else {
      // skip animation after first load
      setAnimatedValue(percentage);
    }
  }, [percentage]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-preset-4 text-grey-500">Total Saved</p>
        <p className="text-preset-1">£{total.toFixed(2)}</p>
      </div>
      <Progress
        value={animatedValue}
        max={100}
        className="bg-beige-100"
        colour={theme || "bg-green-500"}
      />
      <div className="flex items-center justify-between">
        <p className="text-preset-5-bold text-grey-500">{percentage}%</p>
        <p className="text-preset-5 text-grey-500">Target of £{target}</p>
      </div>
    </div>
  );
};

export default PotsCardProgress;
