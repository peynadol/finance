import { PotsCardSkeleton } from "@/app/components/skeletons/pots-card-skeleton";

export default function SkeletonPage() {
  return (
    <div className="w-full max-w-screen-xl px-6 py-8 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <PotsCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
