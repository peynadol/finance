import { Skeleton } from "@/components/ui/skeleton";

const BillsTableSkeleton = () => {
  return (
    <div className="bg-white p-6 rounded space-y-4 w-full">
      {/* Top search/sort */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Skeleton className="h-9 w-full sm:w-72" />
        <Skeleton className="h-9 w-24" />
      </div>

      {/* Table */}
      <div className="w-full border rounded overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-3 px-4 py-2 border-b text-sm font-medium text-muted-foreground">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>

        {/* Rows */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-3 px-4 py-3 items-center border-b"
          >
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillsTableSkeleton;
