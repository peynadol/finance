import { Skeleton } from "@/components/ui/skeleton";

export default function RecurringBillsPreviewSkeleton() {
  return (
    <div className="bg-white rounded-lg p-4 space-y-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex justify-between items-center">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-20" />
        </div>
      ))}
    </div>
  );
}
