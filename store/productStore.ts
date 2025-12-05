import { create } from "zustand";

interface ProductStore {
  productType: string;
  setProductType: (type: string) => void;
}

export const useProductStore = create<ProductStore>(set => ({
  productType: "Residential",
  setProductType: type => set({ productType: type }),
}));
