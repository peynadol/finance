import { Skeleton } from "@/components/ui/skeleton";

export default function TransactionsPreviewSkeleton() {
  return (
    <div className="bg-white rounded-lg p-4 space-y-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex justify-between items-center">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-16" />
        </div>
      ))}
    </div>
  );
}
