import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { UtilityGrid } from '../../Grid/UtilityGrid';
import { RoadmapGrid } from '../../Grid/RoadmapGrid';
import { MoveRight ,Smile, SquareArrowDown, Gauge} from 'lucide-react'

export default function Section5() {
  return (
   <div className='bg-black flex flex-col items-center pb-20'>

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




    {/* Title Section */}
<div className='flex flex-col px-5 items-center mt-20'>
  {/* Main Title */}
  <h2 className='font-section5-title text-center mb-10'>
    A continuous flow of passive income.
  </h2>

  {/* Stats Grid */}
  <div className='flex justify-between items-start gap-20 w-full '>

    {/* Location Card */}
    <div className='text-center '>
      <p className='font-section4-subtitle mb-2'>Our professional solution helps</p>
      <div className='flex items-center justify-center gap-2 mb-2'>
        <span className='font-geist font-normal text-[46px] leading-[95%] tracking-[-5%] text-red-600'>
          US/California
        </span>
        <SquareArrowDown size={20} className='text-red-600'/>
      </div>
      <p className='font-section4-subtitle'>households</p>
    </div>

    {/* Savings Card */}
    <div className='text-center'>
      <p className='font-section4-subtitle mb-2'>Save up to</p>
      <p className='font-geist font-normal text-[46px] leading-[95%] tracking-[-5%] text-white'>
        35.11% per kwh
      </p>
      <p className='font-section4-subtitle'>on energy</p>
    </div>

    {/* Earnings Card */}
    <div className='text-center '>
      <p className='font-section4-subtitle mb-2'>Earning per year</p>
      <div className='flex items-center justify-center gap-2 mb-1'>
        <span className='font-geist font-normal text-[46px] leading-[95%] tracking-[-5%] text-white'>
          730k SATS
        </span>
        <Gauge size={20} className='text-white'/>
      </div>
      <p className='font-geist font-normal text-[46px] leading-[95%] tracking-[-5%] text-white'>
        / ＄827.37
      </p>
      <p className='font-section4-subtitle'>in mining revenue</p>
    </div>
  </div>
</div>

    {/* utility */}
    <div className='mt-[300px]'>

    {/* utility-title */}
    <div className='text-center flex flex-col gap-5'>

      <p className='font-section5-title'>The first heater that earns its keep</p>
      <p className='font-section4-subtitle'>From utility to asset without changing a thing.</p>

    </div>

    {/* utility-grid */}
    <div className='flex flex-row justify-between mt-10 px-20 gap-10'>
    {/* utility-left-grid */}
    <div className=''>

      <UtilityGrid
    imgsrc= {'/images/section5leftimg.png'}
    imgbg= {'bg-radial-orange-gradient'}
    Title = {'Superheat H1'}
    Capacity= {'50 Gallon'}
    Power= {'2.0kW'}
    Voltage= {'240v'}
    RecoveryRate= {'23 gallons/hour'}
    Dimension= {'62" x 23" x 26"'}
    Passiveincome= {'Up to $2000 earnings per year'}
      />

    </div>
     {/* utility-right-grid */}
    <div className=''>

      <UtilityGrid
    imgsrc= {'/images/section5rightimg.png'}
    imgbg= {'bg-radial-dark-gradient'}
    Title = {'Industry standard'}
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

    {/* Roadmap */}
    <div className='flex flex-col justify-center items-center px-10 my-20'>
      {/* Roadmap-title */}
       <p className='font-section5-title  my-20'>Roadmap & Future Plans.</p>

        {/* Roadmap-icon */}
       <div className='flex flex-row '>
      <RoadmapGrid
      Title = {'January — CES World Premiere'}
      Subtitle = {'A global debut at CES 2026.Showcasing the world’s first smart heating system that pays for itself — efficient, intelligent, and built for the future of home energy.'}
      icon = {'map'}
      />
       <RoadmapGrid
      Title = {'March — Early Shipments Begin'}
      Subtitle = {'The first Superheat units reach our early supporters.  From vision to reality — homes powered by smarter, cleaner, and more connected energy.'}
      icon = {'zap'}
      />
       <RoadmapGrid
      Title = {'Q3 — Strategic Partnerships & Commercial Expansion'}
      Subtitle = {'Superheat scales into commercial properties, real estate developments, and smart infrastructure projects. Collaborating with industry leaders to bring next-gen energy systems to larger communities.'}
      icon = {'paw'}
      />
       <RoadmapGrid
      Title = {'Q4 — Global Rollout & Ecosystem Growth'}
      Subtitle = {'Superheat expands worldwide with new integrations and market launches. Empowering users everywhere to earn, save, and contribute to a cleaner, connected energy ecosystem.'}
      icon = {'star'}
      />
       </div>

    </div>

    {/* Start */}
    <div className='w-2/5 flex flex-col justify-center items-center mt-20'>
      {/* Start-title */}
      <div className='text-center space-y-5'>
      <p className='font-section4-subtitle'>Lower Bills. Higher Purpose.</p>
      <p className='font-section5-title'>Start Earning Now</p>

       </div>

       {/* Start-button */}
       <div className='mt-10 flex flex-col w-3/5 items-center  '>
      <Link href=''><Button variant= "orgcapsule" className=''>Join & Connect<MoveRight className=''/></Button></Link>
      <Link href=''><Button variant="link" className='text-white'>Follow on <Smile className=''/> </Button></Link>


       </div>
    </div>



   </div>
  );
}



