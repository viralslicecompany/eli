import Hero from "@/components/hero";
import Events from "@/components/events";
import Meet from "@/components/meet";
import What from "@/components/what";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        {/* <Upcoming /> */}
        <Events />
        <Meet />
        <What />
        <Footer />
      </main>
    </>
  );
}
