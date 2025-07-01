"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function TestQuery() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("transactions")
        .select("*")
        .order("date", { ascending: false });

      if (error) console.error(error);
      else setTransactions(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Transactions</h1>
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {t.name} – £{t.amount} on {new Date(t.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
