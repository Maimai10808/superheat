import Image from "next/image";

export default function ProductsWeb() {
  return (
    <div className="bg-[url('/images/Section4Productsbackground.png')] bg-no-repeat bg-[length:50%] bg-[position:85%_300%]  h-screen flex items-center px-10">
      <div className="max-w-screen-xl pl-40 w-full flex">
        {/* Left */}
        <div className="flex flex-col justify-center space-y-4 w-1/3">
          <p className="font-section4-title">Transparent Earnings, Confident Decisions.</p>

          <p className="font-section4-subtitle">
            Visualized revenue data and granular permissions ensure both clarity and security — enabling better
            financial control at every level.
          </p>
        </div>

        {/* Right */}
        <div className="w-2/3"></div>
      </div>
    </div>
  );
}
