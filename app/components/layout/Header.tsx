"use client";
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Header() {
  return (
    <section>
       <div className=' container mx-auto'>
         <div className='bg-teal-800 p-6'>
          <div className='flex justify-between '>

            <div className=''>
                <a href="logo"></a>
            </div>

            <div>
                <a href="Products">Products</a>
                <a href="Resources">Resources</a>
                <a href="Social">Social</a>
            </div>

            <div>
                <a href="https://x.com/home">
                <Button>
                  <Image
                src="twitter.svg"
                width={20}
                height={20}
                alt="logo of the twitter" />
                </Button>
                </a>

                <a href="https://github.com/Maimai10808">
                <Button>
                  <Image
                src="twitter.svg"
                width={20}
                height={20}
                alt="logo of the twitter" />
                </Button>
                </a>
            </div>
         </div>
         </div>
       </div>
    </section>
  );
}
