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
import { AddPotSchema } from "@/lib/schemas/pot";
import { AddPotForm } from "../forms/add-pot-form";

export function DeletePotModal() {
  const { isOpen, closeModal } = useModalStore();
  const isAddOpen = isOpen("DELETE_POT");

  const handleSubmit = () => {
    // here i should call an api/ mutation to save the pot
    console.log("Deleting pot:");
    closeModal();
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
          <div>
            <button onClick={handleSubmit}>Confirm</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
