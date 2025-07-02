import { z } from "zod";
import type { Pot } from "../types";

export const potSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, "Name is required"),
  target: z.number().positive("Target must be a positive number"),
  total: z.number().min(0, "Total must be at least 0"),
  theme: z.string(),
  target_date: z.string().optional(),
}) satisfies z.ZodType<Pot>;

// purely for the add pot modal
export const addPotSchema = z.object({
  name: z.string().min(1, "Name is required"),
  target: z.number().positive("Target must be a positive number"),
  theme: z.string().optional(),
  target_date: z.string().optional(),
});

export type AddPotSchema = z.infer<typeof addPotSchema>;
