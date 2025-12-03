import Section2App from "@/components/components/sections/Section2-plus/Section2App";
import Section2Web from "@/components/components/sections/Section2-plus/Section2Web";
import Section2Products from "@/components/components/sections/Section2-plus/Section2Products";

export default function Section2() {
  return (<div>
     <div className="bg-[url('/images/section2background.png')] bg-cover bg-[position:center_200px] h-screen flex justify-center items-center px-6 py-20">

      {Title()}

     </div>


    <Section2Products />
    {/* <Section2Web />
    <Section2App /> */}

  </div>
  );
}



function Title() {
  return <div className="w-full px-4 flex flex-col justify-center items-center text-white pb-40 space-y-4">

    <p className="font-geist font-normal text-[48px] leading-[0.95] tracking-[-0.05em] text-center mt-5">
      Introducing <span className='text-[rgba(255,85,0,1)]'>Superheat</span>,
    </p>

    <p className="font-geist font-normal text-[36px] leading-[0.95] tracking-[-0.05em] text-center text-[rgba(255,255,255,0.6)] p-2">
      More than a heater — it’s an intelligent<br /> energy ecosystem.
    </p>

    <p className="font-geist font-light text-[16px] leading-[1.10] tracking-[-0.05em] text-center text-[rgba(255,255,255,0.6)] p-1">
      Custom ASIC miner (120 TH/s) - Built for performance
    </p>

  </div>;
}

