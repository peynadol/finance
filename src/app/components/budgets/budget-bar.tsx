"use client";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
type BudgetBarProps = {
  colour: string;
  spent: number;
  maximum: number;
};
const BudgetBar = ({ colour, spent, maximum }: BudgetBarProps) => {
  const [progress, setProgress] = useState(0);
  const newProgress = Math.min(Math.max((spent / maximum) * 100, 0), 100);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(newProgress), 300);
    return () => clearTimeout(timer);
  }, [newProgress]);
  return (
    <div className="w-[500px]">
      <Progress
        value={progress}
        colour={colour}
        className="w-full h-6 bg-beige-100"
      />
    </div>
  );
};

export default BudgetBar;
