import Hero from "@/components/sections/Hero";
import Section2 from "@/components/sections/Section2";
import Section3 from "@/components/sections/Section3";
import Section5 from "@/components/sections/Section5";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <main>
        <Suspense>
          <Hero />
        </Suspense>

        <Suspense>
          <Section2 />
        </Suspense>

        <Suspense>
          <Section3 />
        </Suspense>

        <Suspense>
          <Section5 />
        </Suspense>
      </main>
    </>
  );
}
