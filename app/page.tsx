import Image from "next/image";
import Hero from "@app/components/Hero";
import Section1 from "@app/components/Section1";
import Section2 from "@app/components/Section2";
import Section3 from "@app/components/Section3";
import Section4 from "@app/components/Section4";
import Section5 from "@app/components/Section5";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />

      </main>
    </>
  );
}
