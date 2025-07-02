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

export function AddBudgetModal() {
  const { isOpen, closeModal, modalData } = useModalStore();
  const isAddOpen = isOpen("ADD_BUDGET");
  const transactionCategories = modalData?.transactionCategories || [];

  const handleSubmit = (data: AddBudgetSchema) => {
    // here i should call an api/ mutation to save the budget
    console.log("Submitting budget:", data);
    closeModal();
  };

  return (
    <Dialog open={isAddOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Budget</DialogTitle>
          <DialogDescription>
            Create a new budget category. Click save when you&apos;re done.
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
