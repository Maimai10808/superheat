'use client'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useUserStore } from "@app/store/useUserStore";
import Header from "@/app/components/layout/Header"
import Footer from "@/app/components/layout/Footer"


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
