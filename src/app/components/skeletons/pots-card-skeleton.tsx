import { Skeleton } from "@/components/ui/skeleton";

export const PotsCardSkeleton = () => {
  return (
    <div className="bg-white w-full p-6 space-y-4 rounded">
      {/* Dot + Title Row */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Skeleton className="h-3 w-3 rounded-full" />
          <Skeleton className="h-5 w-32" />
        </div>
        {/* You can optionally show a grey circle for the 3-dot menu */}
        <Skeleton className="h-6 w-6 rounded-full" />
      </div>

      {/* Total Saved label + amount */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-6 w-16" />
      </div>

      {/* Progress bar */}
      <Skeleton className="h-2 rounded w-full" />

      {/* % + Target text row */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-10" />
        <Skeleton className="h-4 w-24" />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Skeleton className="h-10 w-full rounded" />
        <Skeleton className="h-10 w-full rounded" />
      </div>
    </div>
  );
};
