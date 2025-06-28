import SummaryCard from "./components/summary-card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <SummaryCard title="Current Balance" amount={100} />
    </div>
  );
}
