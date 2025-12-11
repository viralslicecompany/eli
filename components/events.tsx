import { ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "1:1 Coaching Call",
    subtitle: "Personalized guidance to unlock your next level.",
    image: "/images/eli-coaching-2.png",
    imagePosition: "center top",
    cta: {
      label: "Book a Call",
      href: "https://intro.co/EliBowman?source=intro",
    },
    tag: "COACHING",
  },
  {
    title: "Speaking Events",
    subtitle: "Have Eli speak at your event.",
    image: "/images/eli-speaking-2.png",
    imagePosition: "center top",
    cta: {
      label: "Book Speaking",
      href: "mailto:eliotbowman@gmail.com",
    },
    tag: "SPEAKING",
  },
  {
    title: "Rewrite The Program",
    subtitle: "Rewire your thinking for lasting change.",
    image: "/images/eli-book-2.png",
    imagePosition: "center top",
    cta: {
      label: "Coming Soon",
      href: "mailto:eliotbowman@gmail.com",
    },
    tag: "NEW BOOK",
  },
];

export default function Events() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg tracking-tight">
            Collaborate with us
          </h2>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm sm:text-base text-zinc-400 hover:text-white transition-all duration-300 font-medium"
          >
            <span>Discover all services</span>
            <ChevronRight className="size-4 sm:size-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative flex flex-col h-full bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative w-full h-48 sm:h-56 md:h-60 overflow-hidden bg-zinc-900">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ objectPosition: service.imagePosition || "center top" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Tag Badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-xs text-white px-3 py-1.5 rounded-full tracking-widest font-bold shadow-lg border border-white/10 z-10">
                  {service.tag}
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-1 p-6 sm:p-8 bg-gradient-to-b from-transparent to-zinc-900/20">
                {/* Title and Subtitle */}
                <div className="flex-1 mb-6 space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight tracking-tight group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                    {service.subtitle}
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  href={service.cta.href}
                  className="group/btn inline-flex items-center justify-center gap-2 w-full sm:w-auto text-center font-semibold py-3 px-6 rounded-xl bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-zinc-700 hover:to-zinc-600 text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                >
                  <span>{service.cta.label}</span>
                  <ArrowRight className="size-4 opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
