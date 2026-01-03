"use client";

export default function Hero() {
  return (
    <div className="bg-[url('/images/section1background.jpg')] bg-cover bg-center h-screen flex items-end justify-center px-6 py-20">
      <div className="w-full  px-4 flex justify-between items-end text-white  pb-20">
        {/* Left-Title */}
        <div className="">
          <p className="font-geist gold-gradient-text font-normal not-italic text-[75px] leading-[95%] tracking-[-5%] align-middle ">
            Superheat:
            <br />
            What if your water heater
            <br />
            earns Bitcoin.
          </p>

          <p className="font-geist gold-gradient-text font-light text-[24px] leading-[110%] tracking-[-5%] text-left align-middle mt-10">
            Redefining heat as an asset through our dual-purpose innovation.
          </p>
        </div>
        {/* Right-Title */}
        <div className="">
          <p className="font-geist text-white font-light text-[24px] leading-[110%] tracking-[-5%] text-right align-middle ">
            Heating the future.
            <br />
            Powered by silicon.
            <br />
            Earned in blocks.
          </p>
        </div>
      </div>
    </div>
  );
}
