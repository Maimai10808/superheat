'use client'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useUserStore } from "@/store/useUserStore";
import Header from "@/components/components/layout/Header"
import Footer from "@/components/components/layout/Footer"


export default function Hero() {
  const username = useUserStore((state) => state.username);
  const setUsername = useUserStore((state) => state.setUsername);

  return (<>
  <Header />
    <section className='text-center'>

    </section>
  <Footer />
    </>
  );
}
