import { create } from "zustand";

interface ViewerStore {
  // Pièce actuellement sélectionnée
  selectedPart: string | null;
  setSelectedPart: (file: string | null) => void;
}

export const useViewerStore = create<ViewerStore>((set) => ({
  selectedPart: null,
  setSelectedPart: (file) => set({ selectedPart: file }),
}));
