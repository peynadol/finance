import { Skeleton } from "@/components/ui/skeleton";

export default function PotsPreviewSkeleton() {
  return (
    <div className="bg-white rounded-lg p-4 space-y-4">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-8 w-full max-w-[120px]" />
      <div className="space-y-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-32" />
        ))}
      </div>
    </div>
  );
}
