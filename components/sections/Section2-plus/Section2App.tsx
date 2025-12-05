import Image from "next/image";
import Link from "next/link";

export default function Section2App() {
  return (
    <div className="bg-[url('/images/Section2App.png')] bg-no-repeat bg-[length:40%] bg-[position:60%_100%]  h-screen flex items-center px-10">
      <div className="max-w-screen-xl pl-40 w-full flex">
        {/* Left */}
        <div className="flex flex-col justify-center space-y-4 w-1/3">
          <p className="font-section2-title">
            Superheat App: <br />
            For Everyday <br />
            Smart Users.
          </p>

          <p className="font-section2-subtitle">
            The SuperHeat App connects your heater, your energy, and your earnings — all in one place. From real-time
            control to transparent earnings, it turns every moment of heating into an intelligent, measurable
            experience.
          </p>

          <div className="flex flex-row justify-start items-center space-x-4 text-black divide-x-2 divide-gray-300  ">
            <Link href="" className="">
              Homepage
            </Link>
            <Link href="" className="">
              Earnings
            </Link>
            <Link href="" className="">
              Device Control
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="w-2/3"></div>
      </div>
    </div>
  );
}
