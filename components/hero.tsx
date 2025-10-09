import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex flex-col justify-end min-h-[400px] md:min-h-[800px] rounded-xl mx-2 sm:mx-4 md:mx-4 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/eli-bowman.jpg"
          alt="Background"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          className="opacity-90"
          priority
        />
        {/* Overlay for darkening */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
      </div>

      <div className="relative z-20 flex flex-col items-start justify-end h-full w-full px-3 sm:px-6 md:px-10 pb-6 sm:pb-10 md:pb-16">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-semibold drop-shadow-lg mb-3 sm:mb-4 md:mb-6 leading-tight">
          Rewrite your mindset.
          <br />
          <span className="font-light">Step into life.</span>
        </h1>
        <Button
          size="lg"
          className="w-full sm:w-auto text-base sm:text-lg"
        >
          Book a Call
        </Button>
      </div>

      {/* Event Card: Responsive positioning and sizing */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 sm:bottom-4 sm:right-4 sm:left-auto sm:translate-x-0 md:bottom-6 md:right-6 z-30 w-[90vw] max-w-xs sm:w-48 md:w-64">
        <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white/10 backdrop-blur-md">
          <div className="relative h-20 md:h-28">
            <Image
              src="/events/aspire.png"
              alt="Aspire Tour"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 256px"
            />
            <div className="absolute top-2 left-2 bg-white/10 backdrop-blur-md text-[10px] md:text-xs text-white px-2 py-1 rounded font-semibold tracking-widest shadow border border-white/20">
              NEXT EVENT
            </div>
          </div>
          <div className="p-2 md:p-3">
            <div className="text-[10px] md:text-xs text-white/80 mb-1 font-medium">ELI BOWMAN</div>
            <div className="text-base md:text-lg font-bold text-white leading-tight mb-1">
              ASPIRE TOUR
            </div>
            <Link href="https://register.aspiretour.com/colu-lp-v4" target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="mt-2 w-full cursor-pointer bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full shadow hover:from-pink-600 hover:to-blue-600 transition text-xs md:text-sm"
              >
                Get Tickets
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
