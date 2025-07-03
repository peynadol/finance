import { Skeleton } from "@/components/ui/skeleton";

export default function BalanceSummarySkeleton() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="rounded-lg p-4 bg-white space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-6 w-full" />
        </div>
      ))}
    </>
  );
}
