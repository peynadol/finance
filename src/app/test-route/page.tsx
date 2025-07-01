"use client";
import { useGetPots } from "@/lib/queries/queries";

export default function TestRoute() {
  const { data, isLoading, error } = useGetPots();
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <h1>Pots</h1>
      <ul>
        {data.map((pot) => (
          <li key={pot.id}>{pot.name}</li>
        ))}
      </ul>
    </div>
  );
}
