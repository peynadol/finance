import { Skeleton } from "@/components/ui/skeleton";

export default function BudgetsPreviewSkeleton() {
  return (
    <div className="bg-white rounded-lg p-4 space-y-4">
      <Skeleton className="mx-auto h-[120px] w-[120px] rounded-full" />
      <div className="space-y-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-40" />
        ))}
      </div>
    </div>
  );
}
