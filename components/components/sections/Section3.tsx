"use client";

import Image from "next/image";
import ProductsChangingButton from "../button/ProductsChangingButton";
import { useProductStore } from "@/store/productStore";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Section3Img } from "../Grid/Section3Img";

export default function Section3() {
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center gap-5 mt-10">
      {/* ImgDisplay */}

      {ImgDisplay()}

      {/* switch */}
      {Switch()}

      {/* Title */}
      {Title()}

      {/* Button */}
      {TheButton()}
    </div>
  );
}

function TheButton() {
  return (
    <div className="">
      <Button variant="outline" className="rounded-full">
          <Plus /> Learn more about the product
      </Button>
    </div>
  );
}

function Switch() {
  return (
    <div className="">
      <ProductsChangingButton />
    </div>
  );
}

function ImgDisplay() {
  const productType = useProductStore((state) => state.productType);

  if (productType === "Residential") {
    return <Section3Img imgsrc="/images/section3leftimg.png" />;
  } else {
    return <Section3Img imgsrc="/images/section3rightimg.jpg" />;
  }
}

function Title() {
  const productType = useProductStore((state) => state.productType);

  if (productType === "Residential") {
    return (
      <div className="flex md:flex-row flex-col justify-center items-center mt-5 mx-10 w-4/5">
        <p className="text-left font-geist font-normal text-[56px] leading-[95%] tracking-[-5%] text-black w-1/3">
          Efficient by design,made for total home comfort.
        </p>
        <div className="w-1/5"></div>
        <p className="text-right font-geist font-normal text-[26px] leading-[95%] tracking-[-5%] text-black w-2/5">
          Superheat H1 is engineered for performance —powerful enough to supply
          your entire household with {""}
          <span className="text-red-600">
            efficient and sustainable hot water.
          </span>
        </p>
      </div>
    );
  } else {
    return (
      <div className="flex md:flex-row flex-col justify-center items-center mt-5 mx-10 w-4/5">
        <p className="text-left font-geist font-normal text-[56px] leading-[95%] tracking-[-5%] text-black w-1/3">
          Efficient by design,built for exponential returns.
        </p>
        <div className="w-1/5"></div>
        <p className="text-right font-geist font-normal text-[26px] leading-[95%] tracking-[-5%] text-black w-2/5">
          Each unit installed transforms household consumption into a growing
          revenue stream—{" "}
          <span className="text-red-600">
            scalable passive income for commercial projects.
          </span>
        </p>
      </div>
    );
  }
}
