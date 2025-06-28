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
    <div className="relative w-[400px] h-[400px]">
      <PieChart width={400} height={400}>
        <Pie
          data={mockBudgets}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={140}
          stroke="none"
          startAngle={90}
          endAngle={-270}
        >
          {mockBudgets.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-preset-1 text-grey-900">${spent}</p>
        <p className="text-preset-4 text-grey-500">of ${total} limit</p>
      </div>
    </div>
  );
};

export default BudgetPieChart;
