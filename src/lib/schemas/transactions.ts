import { z } from "zod";
import type { Transaction } from "../types";

export const transactionSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, "Name is required"),
  amount: z.number(),
  type: z.enum(["income", "expense"]),
  category: z.string().min(1, "Category is required"),
  date: z.string(),
  recurring: z.boolean(),
  created_at: z.string(),
  updated_at: z.string(),
}) satisfies z.ZodType<Transaction>;

export const addTransactionSchema = z.object({
  name: z.string().min(1, "Name is required"),
  amount: z.coerce.number(),
  type: z.enum(["income", "expense"]),
  category: z.string().min(1, "Category is required"),
  date: z.string(),
  recurring: z.boolean(),
});

export type AddTransactionSchema = z.infer<typeof addTransactionSchema>;
