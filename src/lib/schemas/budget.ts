import { z } from "zod";
import type { Budget } from "../types";

export const budgetSchema = z.object({
  id: z.string().uuid(),
  category: z.string().min(1, "Category is required"),
  maximum: z.number().positive("Maximum must be a positive number"),
  theme: z.string(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  archived: z.boolean(),
}) satisfies z.ZodType<Budget>;

// purely for the add budget modal
export const addBudgetSchema = z.object({
  category: z.string().min(1, "Category is required"),
  maximum: z.coerce.number().positive("Maximum must be a positive number"),
  theme: z.string().optional(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
});

export type AddBudgetSchema = z.infer<typeof addBudgetSchema>;
