import Image from "next/image";
import Link from "next/link";

export default function Section2Products() {
  return (
    <div className="bg-[url('/images/Section2Products.png')] bg-no-repeat bg-[length:80%] bg-[position:95%_1%]  h-screen flex flex-row items-center px-10 w-full">
      {/* Left-Left */}
      <div className="w-1/6"></div>
      {/* Left */}
      <div className="flex flex-col gap-5 lg:w-1/5 w-1/2">
        <p className="font-section2-title">Superheat H1: Uniquely designed for your life.</p>

        <p className="font-section2-subtitle">
          High-efficiency hardware that converts computing heat into usable hot water. High- efficiency hardware that
          converts computing heat into usable hot water. High-efficiency hardware that converts computing heat into
          usable hot water.
        </p>

        <div className="flex flex-row justify-start items-center space-x-3  ">
          <Link href="" className="bg-gray-400 w-[15px] h-[15px]"></Link>
          <div></div>
          <Link href="" className="bg-red-600  w-[15px] h-[15px]"></Link>
        </div>
      </div>

      {/* Right */}
      <div className=""></div>
    </div>
  );
}
