import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import type { Transaction } from "@/lib/types";
import { AddPotSchema } from "../schemas/pot";
import { AddBudgetSchema } from "../schemas/budget";

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

export const useCreateTransaction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: Transaction) => {
      const { error } = await supabase.from("transactions").insert(data);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
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

export const useCreatePot = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: AddPotSchema) => {
      const { error } = await supabase.from("pots").insert(data);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pots"] });
    },
  });
};

export const useDeletePot = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("pots").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pots"] });
    },
  });
};

export const useEditPot = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: AddPotSchema & { id: string }) => {
      const { id, ...values } = data;
      const { error } = await supabase.from("pots").update(values).eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pots"] });
    },
  });
};

export const useCreateBudget = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: AddBudgetSchema) => {
      const { error } = await supabase.from("budgets").insert(data);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["budgets"] });
    },
  });
};

export const useDeleteBudget = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("budgets").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["budgets"] });
    },
  });
};

export const useEditBudget = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: AddBudgetSchema & { id: string }) => {
      const { id, ...values } = data;
      const { error } = await supabase
        .from("budgets")
        .update(values)
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["budgets"] });
    },
  });
};
