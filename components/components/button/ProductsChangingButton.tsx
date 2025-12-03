"use client";

import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { useState, useEffect } from "react";

export default function ProductsChangingButton() {
  const [ProductsDisplay, setProductsDisplay] = useState("Residential");
//   useEffect(() => {
//     return () => {};
//   }, [person]);

  return (
    //   <select value={person} onChange={e => {
    //     setPerson(e.target.value);
    //   }}>
    //     <option value="Alice">Alice</option>
    //     <option value="Bob">Bob</option>
    //     <option value="Taylor">Taylor</option>
    //   </select>
    //   <hr />
    //   <p><i>{bio ?? 'Loading...'}</i></p>

    <div>
      <ToggleGroup type="single" value={ProductsDisplay} onChange= {e =>  setProductsDisplay(e.target.value)}>

        <ToggleGroupItem
          value="Residential"
          aria-label="Toggle bold">
          Residential
        </ToggleGroupItem>

        <ToggleGroupItem
          value="Commercial"
          aria-label="Toggle italic"
        >
          Commercial
        </ToggleGroupItem>

      </ToggleGroup>
    </div>
  );
}

// export function () {

//

//     function ResidentialhandleClick() {
//         setProductsDisplay('Residential')
//     }

//      function CommercialhandleClick() {
//         setProductsDisplay('Commercial')
//     }

//     return (
//
//     )
// }
