import Image from "next/image";
import Section4Products from "@/components/sections/Section4-plus/Section4Products";
import Section4App from "@/components/sections/Section4-plus/Section4App";
import Section4Web from "@/components/sections/Section4-plus/Section4Web";

export default function Section4() {
  return (
    <div className="bg-black flex flex-col">
      {/* title */}
      <div>
        <p className="text-white font-geist font-normal text-[48px] leading-[95%] tracking-[-5%] text-center">
          Why it is special?
        </p>
        <p className="text-gray-500 font-geist font-normal text-[36px] leading-[95%] tracking-[-5%] text-center">
          Control. Monitor. Earn — anywhere.
        </p>
      </div>

      {/* components */}
      <div>
        <Section4Products />
        <Section4App />
        <Section4Web />
      </div>
    </div>
  );
}
