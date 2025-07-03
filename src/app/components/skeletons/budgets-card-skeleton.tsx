import { Skeleton } from "@/components/ui/skeleton";

export const BudgetsCardSkeleton = () => {
  return (
    <div className="bg-white p-6 rounded space-y-4 h-[500px]">
      {/* Header with dot + title */}
      <div className="flex items-center gap-2">
        <Skeleton className="h-3 w-3 rounded-full" />
        <Skeleton className="h-5 w-32" />
      </div>

      {/* Max label */}
      <Skeleton className="h-4 w-40" />

      {/* Progress bar */}
      <Skeleton className="h-4 w-full rounded" />

      {/* Spent / Remaining */}
      <div className="flex gap-4">
        <div className="flex-1 space-y-1">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-5 w-24" />
        </div>
        <div className="flex-1 space-y-1">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-5 w-24" />
        </div>
      </div>

      {/* Latest Spending Section */}
      <div className="bg-muted p-4 rounded space-y-3 h-[300px]">
        <div className="flex justify-between items-center ">
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-4 w-16" />
        </div>

        {/* Fake list items */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex justify-between items-center">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};
