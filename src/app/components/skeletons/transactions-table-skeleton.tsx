import { Skeleton } from "@/components/ui/skeleton";

const TransactionsTableSkeleton = () => {
  return (
    <div className="rounded bg-white p-6 space-y-4">
      {/* Search and controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Skeleton className="h-9 w-full sm:w-72" />
        <div className="flex gap-2">
          <Skeleton className="h-9 w-28" />
          <Skeleton className="h-9 w-24" />
        </div>
      </div>

      {/* Table */}
      <div className="w-full border rounded">
        {/* Table header */}
        <div className="grid grid-cols-4 sm:grid-cols-5 px-4 py-2 border-b text-sm font-medium text-muted-foreground">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16 hidden sm:block" />
        </div>

        {/* Rows */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-4 sm:grid-cols-5 px-4 py-3 items-center border-b"
          >
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16 hidden sm:block" />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-end pt-2">
        <Skeleton className="h-8 w-32" />
      </div>
    </div>
  );
};

export default TransactionsTableSkeleton;
