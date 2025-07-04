"use client";

import { Cell, Pie, PieChart, Tooltip } from "recharts";
//TODO: GET TOOLTIP WORKING PROPERLY ON OUTER PIE
type BudgetPieChartProps = {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  totalLimit: number;
  totalSpent: number;
};

const BudgetPieChart = ({
  data,
  totalLimit,
  totalSpent,
}: BudgetPieChartProps) => {
  const isOverBudget = totalSpent > totalLimit;

  return (
    <div className="relative w-[220px] h-[220px]">
      <PieChart width={220} height={220}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={100}
          stroke="none"
          startAngle={90}
          endAngle={-270}
        >
          {data.map((entry, index) => (
            <Cell key={`outer-${index}`} fill={entry.color} />
          ))}
        </Pie>

        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={80}
          stroke="none"
          startAngle={90}
          endAngle={-270}
          tooltipType={"none"}
        >
          {data.map((entry, index) => (
            <Cell key={`inner-${index}`} fill={entry.color} fillOpacity={0.7} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
        <span
          className={isOverBudget ? "text-red text-preset-1" : "text-preset-1"}
        >
          £{Math.round(totalSpent)}
        </span>
        <p className="text-preset-4 text-grey-500">
          of £{Math.round(totalLimit)} limit
        </p>
      </div>
    </div>
  );
};

export default BudgetPieChart;
