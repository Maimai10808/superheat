import Hero from "@/components/Apppage/Hero";
import Section2 from "@/components/Apppage/Introducing";
import Section3 from "@/components/Apppage/Hardware";
import Section5 from "@/components/Apppage/UtilityPage";
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
