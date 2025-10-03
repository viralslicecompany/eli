import Hero from "@/components/hero";
import Events from "@/components/events";
import Upcoming from "@/components/upcoming";
import Meet from "@/components/meet";
import What from "@/components/what";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        {/* <Upcoming /> */}
        <Events />
        <Meet />
        <What />
      </main>
    </>
  );
}
