"use client";

import { Cell, Pie, PieChart, Tooltip } from "recharts";

const mockBudgets = [
  { name: "Entertainment", value: 50, color: "#2A8376" },
  { name: "Bills", value: 750, color: "#85D1E4" },
  { name: "Dining Out", value: 75, color: "#F4CBA4" },
  { name: "Personal Care", value: 100, color: "#544C67" },
];

const total = mockBudgets.reduce((acc, cur) => acc + cur.value, 0);
const spent = 338;

const BudgetPieChart = () => {
  return (
    <div className="relative w-[220px] h-[220px]">
      <PieChart width={220} height={220}>
        <Pie
          data={mockBudgets}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={100}
          stroke="none"
          startAngle={90}
          endAngle={-270}
        >
          {mockBudgets.map((entry, index) => (
            <Cell key={`outer-${index}`} fill={entry.color} />
          ))}
        </Pie>

        <Pie
          data={mockBudgets}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={55}
          outerRadius={70}
          stroke="none"
          startAngle={90}
          endAngle={-270}
        >
          {mockBudgets.map((entry, index) => (
            <Cell key={`inner-${index}`} fill={entry.color} fillOpacity={0.7} />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <p className="text-preset-1 text-grey-900">${spent}</p>
        <p className="text-preset-4 text-grey-500">of ${total} limit</p>
      </div>
    </div>
  );
};

export default BudgetPieChart;
