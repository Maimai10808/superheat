import Image from 'next/image'
import Link from 'next/link'

export default function Section2Web() {
  return (
    <div className="bg-[url('/images/Section2Web.png')] bg-no-repeat bg-[length:60%] bg-[position:90%_60%]  h-screen flex items-center px-10">

      <div className="max-w-screen-xl pl-40 w-full flex ">

        {/* Left */}
        <div className="flex flex-col justify-center  space-y-4 w-1/3">

          <p className="font-section2-title">
           Super Console:  <br />
            For smart and  <br />
            scalable control.
          </p>

          <p className="font-section2-subtitle">
            Superheat Console provides a centralized
            platform to monitor, configure, and optimize all
            connected devices. Designed for enterprise
            scenarios, it simplifies cluster management,
            enhances collaboration, and delivers real-time
            operational insights — all in one clean interface.
          </p>

          <div className='flex flex-row justify-start items-center space-x-3  text-black divide-x-2 divide-gray-300  ' >
          <Link href='' className='' >Dashboard</Link>
          <Link href='' className='' >Device Management</Link>
          </div>

          </div>

        {/* Right */}
        <div className="w-2/3"></div>

      </div>

    </div>
  );
}
