"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import ReownWalletButton from "@/components/button/ReownWalletButton";
import { WagmiButton } from "@/components/button/WagmiButton";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 text-gray-600 body-font gold-gradient-bg z-10  ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        {/* Left-logo */}
        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="">
          <span className="ml-3 text-xl">Superheat</span>
        </Link>

        <div
          className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400
                    flex flex-wrap items-center text-base justify-center"
        >
          <Link className="mr-5 hover:text-gray-900" href="">
            Products
          </Link>
          <Link className="mr-5 hover:text-gray-900" href="">
            Resources
          </Link>
          <Link className="mr-5 hover:text-gray-900" href="">
            Social
          </Link>

          <WagmiButton />
        </div>

        {/* Right-Contact-Me-Button */}
        <Button variant="outline" size="icon" className="rounded-full bg-gray-500 ">
          <Image src="/images/icons8-x-50.png" width={20} height={20} alt="Picture of the author" />
        </Button>
        <Button variant="orgcapsule" className="ml-2">
          Contact Me
          <MoveRight className="" />
        </Button>
      </div>
    </header>
  );
}
