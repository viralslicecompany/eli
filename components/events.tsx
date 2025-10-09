import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "1:1 Coaching Call",
    subtitle: "Personalized guidance to unlock your next level.",
    image: "/images/eli-example1.png",
    cta: {
      label: "Book a Call",
      href: "/book-a-call",
    },
    tag: "ELI BOWMAN",
  },
  {
    title: "Speaking Events",
    subtitle: "Have Eli speak at your event.",
    image: "/images/eli-example2.png",
    cta: {
      label: "Book a Call",
      href: "/book-a-call",
    },
    tag: "ELI BOWMAN",
  },
  {
    title: "Mindset Reset",
    subtitle: "Rewire your thinking for lasting change.",
    image: "/images/eli-example3.png",
    cta: {
      label: "Start Now",
      href: "/mindset-reset",
    },
    tag: "ELI BOWMAN",
  },
];

export default function Events() {
  return (
    <section className="py-12 px-4 md:px-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <h2 className="text-white text-2xl md:text-3xl font-semibold drop-shadow-sm">
          Collaborate with us
        </h2>
        <Link
          href="/"
          className="text-zinc-400 hover:text-white text-sm flex items-center gap-1 transition-colors font-medium"
        >
          Discover all services <ChevronRight className="size-4" />
        </Link>
      </div>
      <div className="relative">
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gradient-to-br from-[#181818] to-[#2c2c2c] p-[2px] rounded-2xl shadow-xl transition-transform hover:scale-[1.025] active:scale-100"
              style={{ height: 440 }}
            >
              <div className="bg-[#181818] rounded-2xl overflow-hidden flex flex-col h-full">
                {/* Image section */}
                <div className="relative w-full" style={{ height: "500px" }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    className="object-cover w-full h-full rounded-t-2xl"
                    style={{ objectPosition: "center" }}
                  />
                  <div className="absolute top-3 left-3 bg-black/60 text-xs text-white px-3 py-1 rounded-full tracking-widest font-semibold shadow">
                    {service.tag}
                  </div>
                </div>
                {/* Content section: align content to the bottom */}
                <div className="flex flex-col flex-1 p-5 justify-end">
                  <div>
                    <div className="text-lg md:text-xl font-bold text-white mb-1 leading-tight uppercase tracking-tight">
                      {service.title}
                    </div>
                    <div className="text-zinc-300 text-sm mb-4">
                      {service.subtitle}
                    </div>
                  </div>
                  <Link
                    href={service.cta.href}
                    className="inline-block text-center font-semibold py-2 px-4 rounded-lg shadow transition-colors text-base bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-zinc-700 hover:to-zinc-800 text-white mt-2"
                  >
                    {service.cta.label}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
