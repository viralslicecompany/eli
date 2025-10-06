import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section className="relative py-20 px-4">
      <div
        className="absolute inset-0 w-full h-full flex justify-center items-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-[120vw] h-[40vw] max-w-7xl bg-gradient-to-tr from-blue-700/60 via-purple-700/50 to-pink-600/40 blur-3xl rounded-full opacity-60 mx-auto" />
      </div>
      <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-2">
        <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
          Ready to transform your results?
        </h2>
        <p className="text-md md:text-lg text-zinc-300 max-w-2xl mx-auto">
          Book a call with Eli and start your journey to extraordinary
          performance today.
        </p>
        <Button size="lg" className="text-lg px-8 py-4 font-medium shadow-xl mt-6">
          Book a Call
        </Button>
      </div>
    </section>
  );
}
