import Link from "next/link";
import { Button } from "./ui/button";

export default function What() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
        {/* Left Column */}
        <div className="flex flex-col justify-between h-full space-y-6 sm:space-y-8">
          {/* Main Heading */}
          <div className="flex-grow flex items-start">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Eli is results-driven
            </h1>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 sm:space-y-8">
          {/* Descriptive Text */}
          <div className="prose prose-base sm:prose-lg">
            <p className="leading-relaxed text-base sm:text-lg">
              Join over thousands of people around the world who are achieving
              the extraordinary with Eli's tools. Their stories paint the
              picture of what's possible for you, too.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
                300%
              </div>
              <div className="text-xs sm:text-sm font-medium">
                increase in cognitive performance
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
                139%
              </div>
              <div className="text-xs sm:text-sm font-medium">
                increase in performance biochemistry
              </div>
            </div>
          </div>

          {/* Call-to-Action Button */}
          <div className="pt-4">
            <Link href="/about/story">
              <Button className="w-full sm:w-auto">Learn more</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
