import Image from 'next/image'
import Link from 'next/link'

export default function Section2Products() {
  return (
    <div className="bg-[url('/images/Section2Products.png')] bg-no-repeat bg-[length:80%] bg-[position:95%_1%]  h-screen flex items-center px-10">

      <div className="max-w-screen-xl pl-40 w-full flex">

        {/* Left */}
        <div className="flex flex-col justify-center space-y-4 w-1/3">

          <p className="section2-title">
            Superheat H1:<br />
            Uniquely designed<br />
            for your life.
          </p>

          <p className="section2-subtitle">
            High-efficiency hardware that converts <br />
            computing heat into usable hot water. High-<br />
            efficiency hardware that converts computing<br />
            heat into usable hot water. High-efficiency hardware<br />
            that converts computing heat into<br />
            usable hot water.
          </p>

          <div className='flex flex-row justify-start items-center space-x-3  ' >
          <Link href='' className='bg-gray-400 w-[15px] h-[15px]' ></Link>
          <div></div>
          <Link href='' className='bg-red-600  w-[15px] h-[15px]'></Link>
          </div>


        </div>

        {/* Right */}
        <div className="w-2/3"></div>

      </div>

    </div>
  )
}
