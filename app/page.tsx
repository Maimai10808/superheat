import Image from "next/image";
import Header from "@/components/components/layout/Header"
import Footer from "@/components/components/layout/Footer"
import Hero from "@/components/components/Hero";
import Section1 from "@/components/components/sections/Section1";
import Section2 from "@/components/components/sections/Section2";
import Section3 from "@/components/components/sections/Section3";
import Section4 from "@/components/components/sections/Section4";
import Section5 from "@/components/components/sections/Section5";

export default function Home() {
  return (
    <>
      <main>

        <Header />
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />

      </main>
    </>
  );
}
