import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import type { Transaction } from "@/lib/types";

export const useGetTransactions = () => {
  return useQuery<Transaction[]>({
    queryKey: ["transactions"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("transactions")
        .select("*")
        .order("date", { ascending: false });

      if (error) throw error;
      return data || [];
    },
    refetchOnWindowFocus: false,
  });
};

export const useGetBudgets = () => {
  return useQuery({
    queryKey: ["budgets"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("budgets")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data || [];
    },
    refetchOnWindowFocus: false,
  });
};

export const useGetPots = () => {
  return useQuery({
    queryKey: ["pots"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("pots")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data || [];
    },
    refetchOnWindowFocus: false,
  });
};
