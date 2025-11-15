'use client'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useUserStore } from "@app/store/useUserStore";


export default function Hero() {
  const username = useUserStore((state) => state.username);
  const setUsername = useUserStore((state) => state.setUsername);

  return (
    <section className='text-center'>
      <div>
      <p>用户名：{username}</p>

      <button onClick={() => setUsername("Mai")} className='bg-black text-white p-5'>I'm Maimai</button>

      </div>

       <Button>Click me</Button>



    </section>
  );
}
