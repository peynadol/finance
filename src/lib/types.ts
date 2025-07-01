export type Transaction = {
  id: string;
  name: string;
  created_at: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  date: string;
  recurring: boolean;
  updated_at: string;
};

export type Budget = {
  id: string;
  category: string;
  maximum: number;
  theme: string;
  start_date?: string;
  end_date?: string;
  archived: boolean;
};

export type Pot = {
  id: string;
  name: string;
  target: number;
  total: number;
  theme: string;
  target_date?: string;
};
