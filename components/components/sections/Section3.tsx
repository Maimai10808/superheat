import Image from 'next/image'

export default function Section3() {
  return (
    <div className='bg-black flex justify-center items-center px-10 '>
      {/* container */}
      <div className='container  w-full flex flex-col  items-center mb-[150px] mt-[300px]'>

      {/* title */}
        <div className='flex flex-col justify-center space-y-4 w-1/2'>
        <p className='font-geist font-normal text-[48px] leading-[95%] tracking-[-5%] text-center text-white'>Who is for?</p>
        <p className='font-geist font-normal text-[36px] leading-[95%] tracking-[-5%] text-center text-gray-400'>A smarter way to heat — for every home and business.</p>
        </div>

      {/* Grid */}
        <div className='flex flex-row space-x-10 mt-20 '>
       {/* Left-Grid */}
        <div className=' bg-white p-5  '>
          <div className='w-[604px] h-[514px] relative overflow-hidden'>
             <Image
      src="/images/section3leftimg.png"
      fill={true}
      style={{objectFit: "cover"}}
      alt="Picture of the author"
      className="relative z-0"
              />
          </div>

          <div className='mt-5 space-y-5'>
            <p className='font-geist font-normal text-[36px] leading-[95%] tracking-[-5%] align-middle text-black'>Home Users</p>
            <p className='font-geist font-light text-[20px] leading-[110%] tracking-[-5%] align-middle text-gray-400'>Superheat H1 is engineered for performance —
              Enjoy steady <span className='text-red-700'>hot water, save energy, and earn Bitcoin effortlessly.</span>
            </p>
          </div>
        </div>

        <div className='w-1/3'>

        </div>


         {/* Right-Grid */}
         <div className=' bg-white p-5  w-1/2'>
          <div className='w-[604px] h-[514px] relative overflow-hidden'>
             <Image
      src="/images/section3rightimg.jpg"
      fill={true}
      style={{objectFit: "cover"}}
      alt="Picture of the author"
      className="relative z-0"
              />
          </div>

          <div className='mt-5 space-y-5'>
            <p className='font-geist font-normal text-[36px] leading-[95%] tracking-[-5%] align-middle text-black'>Hotels & Properties</p>
            <p className='font-geist font-light text-[20px] leading-[110%] tracking-[-5%] align-middle text-gray-400'>Each unit installed transforms household consumption into a growing revenue stream—<span className='text-red-700'>scalable passive income for commercial projects.</span>
            </p>
          </div>
        </div>


        </div>
      </div>
    </div>
  );
}
