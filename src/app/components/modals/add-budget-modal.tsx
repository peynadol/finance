"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useModalStore } from "@/lib/stores/modalStore";

export function AddBudgetModal() {
  const { isOpen, closeModal } = useModalStore();
  const isAddOpen = isOpen("ADD_BUDGET");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    closeModal();
  };

  return (
    <Dialog open={isAddOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Budget</DialogTitle>
            <DialogDescription>
              Create a new budget category. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="budget-name">Budget Name</Label>
              <Input
                id="budget-name"
                name="name"
                placeholder="e.g. Groceries"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="budget-amount">Amount</Label>
              <Input
                id="budget-amount"
                name="amount"
                type="number"
                placeholder="0.00"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save Budget</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
