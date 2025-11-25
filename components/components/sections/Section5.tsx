import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { UtilityTable } from '../../Table/UtilityTable';

export default function Section5() {
  return (
   <div className='bg-black flex flex-col'>

    {/* video */}
    <div className='w-full h-[300px] relative overflow-hidden'>
      <Image
            src="/images/section5video.jpg"
            fill={true}
            style={{objectFit: "cover"}}
            alt="Picture of the author"
            className="relative z-0"
                    />
    </div>

    {/* title */}
    <div className='flex flex-col px-10 items-center '>

      <p className='font-section5-title'>A continuous flow of passive income. </p>
      {/* title-grid */}
      <div className='flex flex-row gap-10 mt-10 text-center'>

         {/* title-left-grid */}
         <div className=''>
          <p className='font-section4-subtitle '>Our professional solution helps</p>
           <p className='font-geist font-normal text-[36px] leading-[95%] tracking-[-5%] text-red-600'>US/California *?* </p>
            <p className='font-section4-subtitle'>households</p>

         </div>

       {/* title-middle-grid */}
       <div className=''>
       <p className='font-section4-subtitle'>Save up tp</p>
        <p className='font-section5-title'>35.11% per kwh</p>
         <p className='font-section4-subtitle'>on energy</p>

         </div>

         {/* title-right-grid */}
         <div className=''>
            <p className='font-section4-subtitle'>Earning per year</p>
             <p className='font-section5-title'>730k SATS *?* / ＄827.37</p>
             <p className='font-section4-subtitle'>in mining revenue</p>
         </div>
       </div>
    </div>

    {/* utility */}
    <div className='mt-[300px]'>

    {/* utility-title */}
    <div className='text-center'>

      <p className='font-section5-title'>The first heater that earns its keep</p>
      <p className='font-section4-subtitle'>From utility to asset without changing a thing.</p>

    </div>

    {/* utility-grid */}
    <div className='flex flex-row justify-between'>
    {/* utility-left-grid */}
    <div className=''>

    {/* utility-left-grid-img */}
      <div className=''>

      </div>

    {/* utility-left-grid-table */}
      <div className='text-white'>
      <p className=''>Superheat H1</p>
      <UtilityTable
    Capacity= {'50 Gallon'}
    Power= {'2.0kW'}
    Voltage= {'240v'}
    RecoveryRate= {'23 gallons/hour'}
    Dimension= {'62" x 23" x 26"'}
    Passiveincome= {'Up to $2000 earnings per year'}
      />
      </div>


    </div>
     {/* utility-right-grid */}
    <div className=''>


      {/* utility-right-grid-img */}
      <div className=''>

      </div>

    {/* utility-right-grid-table */}
      <div className='text-white'>
      <p className=''>Industry standard</p>
      <UtilityTable
    Capacity= {'50 Gallon'}
    Power= {'2.0kW'}
    Voltage= {'240v'}
    RecoveryRate= {'20 gallons/hour'}
    Dimension= {'63" x 23" x 23"'}
    Passiveincome= {'X'}
      />
      </div>

    </div>

    </div>
    </div>

    {/* Roadmap */}
    <div className=''>
      {/* Roadmap-title */}
       <p className='font-section5-title'>Roadmap & Future Plans.</p>

        {/* Roadmap-icon */}
       <div className=''>

       </div>

    </div>

    {/* Start */}
    <div className=''>
      {/* Start-title */}
      <div className='text-center'>
      <p className='font-section4-subtitle'>Lower Bills. Higher Purpose.</p>
      <p className='font-section5-title'>Start Earning Now</p>

       </div>

       {/* Start-button */}
       <div className='mt-10'>


       </div>

    </div>



   </div>
  );
}



