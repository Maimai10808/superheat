"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useProductStore } from "@/store/Zustand/productStore";

export default function ProductsChangingButton() {
  const productType = useProductStore(state => state.productType);
  const setProductType = useProductStore(state => state.setProductType);

  function handleValueChange(value: string) {
    if (value) {
      setProductType(value);
    }
  }

  return (
    <>
      <ToggleGroup type="single" value={productType} onValueChange={handleValueChange}>
        <ToggleGroupItem value="Residential" aria-label="Toggle bold" className="bg-gray-300">
          Residential
        </ToggleGroupItem>

        <ToggleGroupItem value="Commercial" aria-label="Toggle italic" className=" bg-gray-300">
          Commercial
        </ToggleGroupItem>
      </ToggleGroup>
    </>
  );
}
