"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/lib/stores/modalStore";
import { useEditPot } from "@/lib/queries/queries";
import { AddPotForm } from "../forms/add-pot-form"; // reuse same form

export function EditPotModal() {
  const { isOpen, closeModal, modalData } = useModalStore();
  const isEditOpen = isOpen("EDIT_POT");
  const editPot = useEditPot();

  const handleSubmit = (data: any) => {
    if (!modalData?.id) return;
    editPot.mutate(
      { ...data, id: modalData.id },
      {
        onSuccess: () => closeModal(),
        onError: (err) => console.error("Failed to edit pot:", err),
      }
    );
  };

  return (
    <Dialog open={isEditOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Pot</DialogTitle>
          <DialogDescription>Update the pot’s details below.</DialogDescription>
        </DialogHeader>

        <AddPotForm
          onSubmit={handleSubmit}
          onCancel={closeModal}
          defaultValues={modalData}
          isPending={editPot.isPending}
        />
      </DialogContent>
    </Dialog>
  );
}
