import { create } from "zustand";

type ModalStore = {
  activeModal: string | null;
  modalData?: unknown;
  openModal: (modalName: string, data?: unknown) => void;
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
