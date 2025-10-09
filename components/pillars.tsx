import Image from "next/image";

export default function Pillars() {
  const pillars = [
    "Mindset",
    "Wealth", 
    "Health",
    "Relationships",
    "Business",
    "Leadership",
    "Happiness"
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Pillars List */}
          <div className="flex flex-col justify-center order-2 md:order-1">
            <div className="flex items-center mb-4 sm:mb-6">
              <span
                className="inline-block mr-2 sm:mr-3 align-middle"
                style={{
                  width: 8,
                  height: 8,
                  backgroundColor: "#000",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              />
              <h3 className="text-xs sm:text-xs text-black leading-tight align-middle">
                PILLARS FOR AN EXTRAORDINARY LIFE
              </h3>
            </div>
            
            <div className="space-y-0.5 sm:space-y-1">
              {pillars.map((pillar, index) => (
                <div key={index} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black">
                  {pillar}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center order-1 md:order-2">
            <div className="w-full max-w-xl aspect-square rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <Image
                src="/images/eli2.jpg"
                alt="Eli Bowman speaking at a large motivational event"
                width={400}
                height={533}
                className="object-cover object-center w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
