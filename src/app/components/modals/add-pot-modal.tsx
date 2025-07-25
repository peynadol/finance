"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/lib/stores/modalStore";
import { AddPotSchema } from "@/lib/schemas/pot";
import { AddPotForm } from "../forms/add-pot-form";
import { useCreatePot } from "@/lib/queries/queries";

export function AddPotModal() {
  const { isOpen, closeModal } = useModalStore();
  const isAddOpen = isOpen("ADD_POT");
  const addPot = useCreatePot();

  const handleSubmit = (data: AddPotSchema) => {
    addPot.mutate(data, {
      onSuccess: () => {
        closeModal();
      },
      onError: (error) => {
        console.error("Failed to add pot:", error.message);
        // maybe show a toast or message to the user
      },
    });
  };

  return (
    <Dialog open={isAddOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Pot</DialogTitle>
          <DialogDescription>
            Create a pot to set savings targets. These can help keep you on
            track as you save for special purchases.
          </DialogDescription>
        </DialogHeader>

        <AddPotForm
          onSubmit={handleSubmit}
          onCancel={closeModal}
          isPending={addPot.isPending}
        />
      </DialogContent>
    </Dialog>
  );
}
