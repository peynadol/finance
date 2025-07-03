"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/lib/stores/modalStore";
import { useEditBudget } from "@/lib/queries/queries";
import { AddBudgetForm } from "../forms/add-budget-form";

export function EditBudgetModal() {
  const { isOpen, closeModal, modalData } = useModalStore();
  const isEditOpen = isOpen("EDIT_BUDGET");
  const editBudget = useEditBudget();
  const { transactionCategories = [], ...defaultValues } = modalData || {};

  const handleSubmit = (data: any) => {
    if (!modalData?.id) return;
    editBudget.mutate(
      { ...data, id: modalData.id },
      {
        onSuccess: () => closeModal(),
        onError: (err) => console.error("Failed to edit budget:", err),
      }
    );
  };

  return (
    <Dialog open={isEditOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Budget</DialogTitle>
          <DialogDescription>
            Update the budget’s details below.
          </DialogDescription>
        </DialogHeader>

        <AddBudgetForm
          onSubmit={handleSubmit}
          onCancel={closeModal}
          defaultValues={modalData}
          transactionCategories={transactionCategories}
        />
      </DialogContent>
    </Dialog>
  );
}
