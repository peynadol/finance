import { create } from "zustand";

type ModalStore = {
  activeModal: string | null;
  modalData?: any; // needed for editing/ deleting modals
  openModal: (modalName: string, data?: any) => void;
  closeModal: () => void;
  isOpen: (modalName: string) => boolean;
};

export const useModalStore = create<ModalStore>((set, get) => ({
  activeModal: null,
  modalData: undefined,
  openModal: (modalName, data) =>
    set({ activeModal: modalName, modalData: data }),
  closeModal: () => set({ activeModal: null, modalData: undefined }),
  isOpen: (modalName) => get().activeModal === modalName,
}));
