import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Themes } from "@/lib/constants/themes";
import {
  addTransactionSchema,
  AddTransactionSchema,
} from "@/lib/schemas/transactions";
import { useState } from "react";

type AddTransactionFormProps = {
  onSubmit: (data: AddTransactionSchema) => void;
  onCancel?: () => void;
  uniqueCategories: string[];
};

export function AddTransactionForm({
  onSubmit,
  onCancel,
  uniqueCategories,
}: AddTransactionFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AddTransactionSchema>({
    resolver: zodResolver(addTransactionSchema),
    defaultValues: {
      name: "",
      amount: 0,
      type: "expense", // Default to expense
      category: "",
      date: "",
      recurring: false,
    },
  });
  const [useManualCategory, setUseManualCategory] = useState(false);
  const handleFormSubmit = (data: AddTransactionSchema) => {
    console.log("Transaction data submitted:", data);
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      {/* Transaction Name */}
      <div className="grid gap-1">
        <label htmlFor="name" className="text-sm font-medium">
          Transaction Name
        </label>
        <input
          id="name"
          {...register("name")}
          className="w-full rounded-md border border-input px-3 py-2 text-sm shadow-sm"
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Transaction Amount */}
      <div className="grid gap-1">
        <label htmlFor="amount" className="text-sm font-medium">
          Transaction Amount
        </label>
        <input
          id="amount"
          type="number"
          step="0.01"
          placeholder="0.00"
          {...register("amount", { valueAsNumber: true })}
          className="w-full rounded-md border border-input px-3 py-2 text-sm shadow-sm"
        />
        {errors.amount && (
          <p className="text-sm text-red-500">{errors.amount.message}</p>
        )}
      </div>

      {/* Transaction Category */}
      <div className="grid gap-1">
        <label htmlFor="category" className="text-sm font-medium">
          Category
        </label>

        {!useManualCategory ? (
          <select
            id="category"
            {...register("category")}
            className="w-full rounded-md border border-input px-3 py-2 text-sm shadow-sm"
            onChange={(e) => {
              const value = e.target.value;
              if (value === "__manual") {
                setUseManualCategory(true);
                setValue("category", "");
              } else {
                setValue("category", value);
              }
            }}
          >
            <option value="">Select a category</option>
            <option value="__manual">Other (enter manually)</option>

            {uniqueCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        ) : (
          <input
            type="text"
            placeholder="Enter new category"
            {...register("category")}
            className="w-full rounded-md border border-input px-3 py-2 text-sm shadow-sm"
            onChange={(e) => setValue("category", e.target.value)}
          />
        )}

        {errors.category && (
          <p className="text-sm text-red-500">{errors.category.message}</p>
        )}
      </div>

      {/* Transaction Type */}
      <div className="grid gap-1">
        <label htmlFor="type" className="text-sm font-medium">
          Type
        </label>
        <select
          id="type"
          {...register("type")}
          className="w-full rounded-md border border-input px-3 py-2 text-sm shadow-sm"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        {errors.type && (
          <p className="text-sm text-red-500">{errors.type.message}</p>
        )}
      </div>

      {/* Recurring Transaction */}
      <div className="grid gap-1">
        <div className="flex items-center gap-2">
          <label htmlFor="recurring" className="text-sm font-medium">
            Recurring
          </label>
          <input
            id="recurring"
            type="checkbox"
            {...register("recurring")}
            className="h-4 w-4 accent-primary"
          />
        </div>
        {errors.recurring && (
          <p className="text-sm text-red-500">{errors.recurring.message}</p>
        )}
      </div>

      {/* Transaction Date */}
      <div className="grid gap-1">
        <label htmlFor="date" className="text-sm font-medium">
          Transaction Date
        </label>
        <input
          id="date"
          type="date"
          {...register("date")}
          className="w-full rounded-md border border-input px-3 py-2 text-sm shadow-sm"
        />
        {errors.date && (
          <p className="text-sm text-red-500">{errors.date.message}</p>
        )}
      </div>

      {/* Actions */}
      <DialogFooter className="pt-4">
        {onCancel && (
          <DialogClose asChild>
            <button
              type="button"
              onClick={onCancel}
              className="rounded-md border border-input bg-background px-4 py-2 text-sm shadow-sm hover:bg-muted"
            >
              Cancel
            </button>
          </DialogClose>
        )}
        <button
          type="submit"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90"
        >
          Add Transaction
        </button>
      </DialogFooter>
    </form>
  );
}
