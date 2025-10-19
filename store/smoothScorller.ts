import { create } from "zustand";

interface ScrollStore {
  SmoothScrolling: boolean;
  setSmoothScrolling: (value: boolean) => void;
}

export const useScrollStore = create<ScrollStore>((set) => ({
  SmoothScrolling: true,
  setSmoothScrolling: (v) => set({ SmoothScrolling: v }),
}));
