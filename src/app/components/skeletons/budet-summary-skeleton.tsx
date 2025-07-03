import { Skeleton } from "@/components/ui/skeleton";

const BudgetSummarySkeleton = () => {
  return (
    <div className="rounded bg-white p-6 space-y-6">
      {/* Donut Chart Section */}
      <div className="flex flex-col items-center space-y-3">
        <div className="h-40 w-40 rounded-full bg-muted animate-pulse" />
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-4 w-24" />
      </div>

      {/* Spending Summary Title */}
      <Skeleton className="h-5 w-40" />

      {/* Category Rows */}
      <div className="space-y-6">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="flex justify-between items-start">
            {/* Left side: dot + label */}
            <div className="flex items-center space-x-2">
              <div className="h-4 w-1 rounded-full bg-muted animate-pulse" />
              <Skeleton className="h-4 w-24" />
            </div>

            {/* Right side: value + subtext */}
            <div className="flex flex-col items-end space-y-1">
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetSummarySkeleton;
