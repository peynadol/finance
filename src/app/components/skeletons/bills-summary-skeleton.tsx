import { Skeleton } from "@/components/ui/skeleton";

const BillsSummarySkeleton = () => {
  return (
    <div className="bg-white rounded p-6 space-y-4 w-full">
      <Skeleton className="h-6 w-32" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-4 w-48" />
      </div>
    </div>
  );
};

export default BillsSummarySkeleton;
