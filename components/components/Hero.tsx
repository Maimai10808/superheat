'use client'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useUserStore } from "@/store/useUserStore";



export default function Hero() {
  const username = useUserStore((state) => state.username);
  const setUsername = useUserStore((state) => state.setUsername);

  return (<div className="h-screen bg-[url(section1background.jpg)] flex items-center justify-center">

    </div>
  );
}
