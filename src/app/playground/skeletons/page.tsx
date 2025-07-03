import TransactionsTableSkeleton from "@/app/components/skeletons/transactions-table-skeleton";
export default function SkeletonPage() {
  return (
    <div className="w-full max-w-screen-xl px-6 py-8 mx-auto">
      <TransactionsTableSkeleton />
    </div>
  );
}
