"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/lib/stores/modalStore";
import { useDeletePot } from "@/lib/queries/queries";
import { AppButton } from "../app-button";

export function DeletePotModal() {
  const { isOpen, closeModal, modalData } = useModalStore();
  const isAddOpen = isOpen("DELETE_POT");
  const deletePot = useDeletePot();

  const handleSubmit = () => {
    if (!modalData?.id) return;
    deletePot.mutate(modalData.id, {
      onSuccess: () => {
        closeModal();
      },
      onError: (err) => {
        console.error("Failed to delete pot:", err);
      },
    });
  };

  return (
    <Dialog open={isAddOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          {/* Dynamically render the pot name */}
          <DialogTitle>Delete Pot</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this pot? This action cannot be
            reversed, and all the data inside it will be removed forever.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex flex-col justify-between w-full gap-2">
            <AppButton onClick={handleSubmit} variant="destroy">
              Confirm
            </AppButton>
            <AppButton onClick={closeModal} variant="secondary">
              Cancel
            </AppButton>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
