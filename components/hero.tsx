"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative flex flex-col justify-end h-[500px] md:h-[850px] rounded-2xl mx-3 sm:mx-6 md:mx-6 overflow-hidden bg-black shadow-2xl">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/eli-bowman.jpg"
          alt="Eli Bowman"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          className="opacity-95"
          priority
        />
        {/* Enhanced gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-start justify-end h-full w-full px-4 sm:px-8 md:px-12 pb-24 sm:pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold drop-shadow-2xl mb-4 sm:mb-6 md:mb-8 leading-[1.1] text-white tracking-tight">
            Rewrite your mindset.
            <br />
            <span className="font-light text-white/90 italic">
              Step into life.
            </span>
          </h1>

          <Link href="https://intro.co/EliBowman?source=intro">
            <Button
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-medium shadow-xl w-full sm:w-auto max-w-xs"
            >
              Book a Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Event Card: Responsive positioning and sizing */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="absolute left-1/2 -translate-x-1/2 bottom-6 sm:bottom-8 sm:right-8 sm:left-auto sm:translate-x-0 z-30 w-[calc(100%-2rem)] max-w-xs sm:w-64 md:w-72"
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 backdrop-blur-xl hover:bg-black/50 transition-colors duration-300">
          <div className="relative h-24 md:h-32 group cursor-pointer overflow-hidden">
            <Image
              src="/events/aspire.png"
              alt="Aspire Tour"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, 300px"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-[10px] md:text-xs text-white px-2.5 py-1 rounded-md font-bold tracking-widest border border-white/20 shadow-lg">
              NEXT EVENT
            </div>
          </div>

          <div className="p-4 md:p-5">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] md:text-xs text-white/70 font-semibold tracking-wider uppercase">
                Eli Bowman
              </span>
              <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                ASPIRE TOUR
              </h3>
            </div>

            <Link
              href="https://register.aspiretour.com/colu-lp-v4"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3"
            >
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-500 hover:to-blue-500 text-white border-0 rounded-xl shadow-lg hover:shadow-pink-500/25 transition-all duration-300 font-semibold text-xs md:text-sm h-9 md:h-10"
              >
                Get Tickets
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
