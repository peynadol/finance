import { BudgetsCardSkeleton } from "@/app/components/skeletons/budgets-card-skeleton";
export default function SkeletonPage() {
  return (
    <div className="w-full max-w-screen-xl px-6 py-8 mx-auto">
      <BudgetsCardSkeleton />
    </div>
  );
}
