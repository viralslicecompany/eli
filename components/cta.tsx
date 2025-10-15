import Link from "next/link";
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div
        className="absolute inset-0 w-full h-full flex justify-center items-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-[120vw] h-[40vw] max-w-7xl bg-gradient-to-tr from-blue-700/60 via-purple-700/50 to-pink-600/40 blur-3xl rounded-full opacity-60 mx-auto" />
      </div>
      <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg px-4">
          Ready to transform your results?
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto px-4">
          Book a call with Eli and start your journey to extraordinary
          performance today.
        </p>
        <Link href="https://intro.co/EliBowman?source=intro">
        <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-medium shadow-xl mt-4 sm:mt-6 w-full sm:w-auto max-w-xs">
          Book a Call
        </Button>
        </Link>
      </div>
    </section>
  );
}
