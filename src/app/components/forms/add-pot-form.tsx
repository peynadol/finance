import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Themes } from "@/lib/constants/themes";
import { addPotSchema, type AddPotSchema } from "@/lib/schemas/pot";
// TODO: think about a more elegant way to prevent multiple submissions
// and make it more reusable across forms

type AddPotFormProps = {
  onSubmit: (data: AddPotSchema) => void;
  onCancel?: () => void;
  isPending?: boolean;
};

export function AddPotForm({ onSubmit, onCancel, isPending }: AddPotFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<AddPotSchema>({
    resolver: zodResolver(addPotSchema),
    defaultValues: {
      name: "",
      target: 0,
      theme: "",
      target_date: "",
    },
  });

  const selectedThemeColor =
    Themes.find((t) => t.value === watch("theme"))?.color ?? "";

  const handleFormSubmit = (data: AddPotSchema) => {
    if (isSubmitting) return;
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      {/* Pot Name */}
      <div className="grid gap-1">
        <label htmlFor="name" className="text-sm font-medium">
          Pot Name
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

      {/* Target Amount */}
      <div className="grid gap-1">
        <label htmlFor="target" className="text-sm font-medium">
          Target Amount
        </label>
        <input
          id="target"
          type="number"
          step="0.01"
          placeholder="0.00"
          {...register("target", { valueAsNumber: true })}
          className="w-full rounded-md border border-input px-3 py-2 text-sm shadow-sm"
        />
        {errors.target && (
          <p className="text-sm text-red-500">{errors.target.message}</p>
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
            className="w-full rounded-md border border-input px-3 py-2 text-sm shadow-sm"
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
        {errors.theme && (
          <p className="text-sm text-red-500">{errors.theme.message}</p>
        )}
      </div>

      {/* Target Date */}
      <div className="grid gap-1">
        <label htmlFor="target_date" className="text-sm font-medium">
          Target Date
        </label>
        <input
          id="target_date"
          type="date"
          {...register("target_date")}
          className="w-full rounded-md border border-input px-3 py-2 text-sm shadow-sm"
        />
        {errors.target_date && (
          <p className="text-sm text-red-500">{errors.target_date.message}</p>
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
          disabled={isPending || isSubmitting}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending || isSubmitting ? "Saving..." : "Save Pot"}
        </button>
      </DialogFooter>
    </form>
  );
}
