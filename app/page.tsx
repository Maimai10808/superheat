import Hero from "@/components/sections/Hero";
import Section2 from "@/components/sections/Introducing";
import Section3 from "@/components/sections/Hardware";
import Section5 from "@/components/sections/Utility";
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
