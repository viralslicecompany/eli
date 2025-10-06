import { Button } from "./ui/button";

export default function What() {
  return (
    <section className="py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="flex flex-col justify-between h-full space-y-8">
          {/* Main Heading */}
          <div className="flex-grow flex items-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Eli is results-driven
            </h1>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Descriptive Text */}
          <div className="prose prose-lg">
            <p className="leading-relaxed">
              Join over thousands of people around the world who are achieving
              the extraordinary with Eli's tools. Their stories paint the
              picture of what's possible for you, too.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-8">
            <div className="">
              <div className="text-6xl md:text-7xl font-bold mb-2">300%</div>
              <div className="text-sm font-medium">
                increase in cognitive performance
              </div>
            </div>
            <div className="">
              <div className="text-6xl md:text-7xl font-bold mb-2">139%</div>
              <div className="text-sm font-medium">
                increase in performance biochemistry
              </div>
            </div>
          </div>

          {/* Call-to-Action Button */}
          <div className="pt-4">
            <Button>
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
