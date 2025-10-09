import Hero from "@/components/hero";
import Events from "@/components/events";
import Meet from "@/components/meet";
import What from "@/components/what";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import Pillars from "@/components/pillars";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        {/* <Upcoming /> */}
        <Events />
        <Pillars />
        <What />
        <Meet />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
