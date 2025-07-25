"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/lib/stores/modalStore";
import { AddTransactionSchema } from "@/lib/schemas/transactions";
import { AddTransactionForm } from "../forms/add-transaction-form";
import { useCreateTransaction } from "@/lib/queries/queries";

export function AddTransactionModal() {
  const { isOpen, closeModal, modalData } = useModalStore();
  const isAddOpen = isOpen("ADD_TRANSACTION");
  const transactionCategories = modalData?.transactionCategories || [];
  const uniqueCategories = Array.from(
    new Set(transactionCategories)
  ) as string[];
  const createTransaction = useCreateTransaction();

  const handleSubmit = (data: AddTransactionSchema) => {
    createTransaction.mutate(data, {
      onSuccess: () => {
        closeModal();
      },
      onError: (error) => {
        console.error("Failed to add transaction:", error.message);
        // maybe show a toast or message to the user
      },
    });
  };

  return (
    <Dialog open={isAddOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Transaction</DialogTitle>
          <DialogDescription>
            Add a new transaction to your financial records. This can be an
            income or expense, and you can categorise it accordingly.
          </DialogDescription>
        </DialogHeader>

        <AddTransactionForm
          onSubmit={handleSubmit}
          onCancel={closeModal}
          uniqueCategories={uniqueCategories}
        />
      </DialogContent>
    </Dialog>
  );
}
