"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/lib/stores/modalStore";
import { AddBudgetForm } from "../forms/add-budget-form";
import { AddBudgetSchema } from "@/lib/schemas/budget";
import { useCreateBudget } from "@/lib/queries/queries";

export function AddBudgetModal() {
  const { isOpen, closeModal, modalData } = useModalStore();
  const isAddOpen = isOpen("ADD_BUDGET");
  const transactionCategories = modalData?.transactionCategories || [];
  const addBudget = useCreateBudget();

  const handleSubmit = (data: AddBudgetSchema) => {
    addBudget.mutate(data, {
      onSuccess: () => {
        closeModal();
      },
      onError: (error) => {
        console.error("Failed to add budget:", error.message);
        // maybe show a toast or message to the user
      },
    });
  };

  return (
    <Dialog open={isAddOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Budget</DialogTitle>
          <DialogDescription>
            Choose a category to set a spending budget. These categories can
            help you monitor spending.
          </DialogDescription>
        </DialogHeader>

        <AddBudgetForm
          onSubmit={handleSubmit}
          onCancel={closeModal}
          transactionCategories={transactionCategories}
        />
      </DialogContent>
    </Dialog>
  );
}
