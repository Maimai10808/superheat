import Image from "next/image";

export default function Section4App() {
  return (
    <div className="bg-[url('/images/Section4Productsbackground.png')] bg-no-repeat bg-[length:50%] bg-[position:5%_300%]  h-screen flex items-center px-10">
      <div className="max-w-screen-xl pl-40 w-full flex">
        {/* Left */}
        <div className="w-2/3"></div>

        {/* Right */}
        <div className="flex flex-col justify-center space-y-4 w-1/3 ">
          <p className="font-section4-title">Smart Modes, Smarter Heating.</p>

          <p className="font-section4-subtitle">
            Choose from Normal or Smart modes — tailored to fit your daily needs. Smart mode learns your daily water use
            and mining habits, making your heater more adaptive and energy-efficient over time.
          </p>
        </div>
      </div>
    </div>
  );
}
