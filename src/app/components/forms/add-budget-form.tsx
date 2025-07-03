import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addBudgetSchema, type AddBudgetSchema } from "@/lib/schemas/budget";
import { DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Themes } from "@/lib/constants/themes";

type AddBudgetFormProps = {
  onSubmit: (data: AddBudgetSchema) => void;
  onCancel?: () => void;
  transactionCategories: string[];
  defaultValues?: Partial<AddBudgetSchema>;
};

export function AddBudgetForm({
  onSubmit,
  onCancel,
  transactionCategories,
  defaultValues,
}: AddBudgetFormProps) {
  const form = useForm<AddBudgetSchema>({
    resolver: zodResolver(addBudgetSchema),
    defaultValues: {
      category: "",
      maximum: 0,
      theme: "",
      start_date: "",
      end_date: "",
      ...defaultValues,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = form;

  const selectedThemeColor =
    Themes.find((t) => t.value === watch("theme"))?.color ?? "";

  const handleFormSubmit = (data: AddBudgetSchema) => {
    console.log("Budget data submitted:", data);
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      {/* Category */}
      <div className="grid gap-1">
        <label htmlFor="category" className="text-sm font-medium">
          Category
        </label>

        <select
          id="category"
          {...register("category")}
          className="w-full rounded-md border border-input px-3 py-2 text-sm shadow-sm"
          onChange={(e) => form.setValue("category", e.target.value)}
          value={form.watch("category")}
        >
          <option value="">Select an existing category</option>
          {transactionCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {errors.category && (
          <p className="text-sm text-red-500">{errors.category.message}</p>
        )}
      </div>

      {/* Maximum */}
      <div className="grid gap-1">
        <label htmlFor="maximum" className="text-sm font-medium">
          Maximum Amount
        </label>
        <input
          id="maximum"
          type="number"
          step="0.01"
          placeholder="0.00"
          {...register("maximum", { valueAsNumber: true })}
          className="w-full rounded-md border border-input px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        {errors.maximum && (
          <p className="text-sm text-red-500">{errors.maximum.message}</p>
        )}
      </div>

      {/* Theme */}
      <div className="grid gap-1">
        <label htmlFor="theme" className="text-sm font-medium">
          Theme
        </label>
        <div className="flex items-center gap-2">
          <select
            id="theme"
            {...register("theme")}
            className="w-full rounded-md border border-input px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Select a theme</option>
            {Themes.map((theme) => (
              <option key={theme.value} value={theme.value}>
                {theme.label}
              </option>
            ))}
          </select>
          <div
            className="h-4 w-4 rounded-full border"
            style={{ backgroundColor: selectedThemeColor }}
          />
        </div>
      </div>

      {/* Start Date */}
      <div className="grid gap-1">
        <label htmlFor="start_date" className="text-sm font-medium">
          Start Date
        </label>
        <input
          id="start_date"
          type="date"
          {...register("start_date")}
          className="w-full rounded-md border border-input px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      {/* End Date */}
      <div className="grid gap-1">
        <label htmlFor="end_date" className="text-sm font-medium">
          End Date
        </label>
        <input
          id="end_date"
          type="date"
          {...register("end_date")}
          className="w-full rounded-md border border-input px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
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
          Save Budget
        </button>
      </DialogFooter>
    </form>
  );
}
