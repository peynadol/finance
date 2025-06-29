"use client";
//TODO: dynamically change the progress bar value and colour
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
const BudgetBar = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-[500px]">
      <Progress
        value={progress}
        className="w-full h-6 bg-beige-100 [&>*]:bg-green" // that strange ampersand syntax is targeting the child via tailwind
      />
    </div>
  );
};

export default BudgetBar;
