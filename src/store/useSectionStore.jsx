import { create } from "zustand";

export const useSectionStore = create((set) => ({
  activeSection: null, // "about" | "contact" | "projects"
  openSection: (section) => set({ activeSection: section }),
  close: () => set({ activeSection: null }),
}));
