import Image from "next/image";
import Link from "next/link";

export default function Section4Products() {
  return (
    <div className="bg-[url('/images/Section4Productsbackground.png')] bg-no-repeat bg-[length:50%] bg-[position:85%_400%]  h-screen flex items-center px-10">
      <div className="max-w-screen-xl pl-40 w-full flex">
        {/* Left */}
        <div className="flex flex-col justify-center space-y-4 w-1/3">
          <p className="font-section4-title">Superheat H1: Uniquely designed for your life.</p>

          <p className="font-section4-subtitle">
            High-efficiency hardware that converts computing heat into usable hot water. High-efficiency hardware that
            converts computing heat into usable hot water. High-efficiency hardware that converts computing heat into
            usable hot water.
          </p>
        </div>

        {/* Right */}
        <div className="w-2/3"></div>
      </div>
    </div>
  );
}
