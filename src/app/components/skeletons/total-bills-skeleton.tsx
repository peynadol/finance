import { Skeleton } from "@/components/ui/skeleton";

const TotalBillsSkeleton = () => {
  return (
    <div className="bg-grey-900 text-white p-6 rounded-lg space-y-4 w-full">
      <Skeleton className="h-6 w-6 rounded-lg bg-white/30" />
      <Skeleton className="h-6 w-24 bg-white/30" />
      <Skeleton className="h-8 w-32 bg-white/40" />
    </div>
  );
};

export default TotalBillsSkeleton;
