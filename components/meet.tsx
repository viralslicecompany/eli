import Image from "next/image";

export default function Meet() {
  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
            Meet
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-black mt-2">
            Eli Bowman
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/eli.jpg"
                alt="Eli Bowman"
                width={400}
                height={533}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-600 text-lg leading-relaxed space-y-4">
              <span className="block">
                Eli is a life coach, entrepreneur, and certified Aspire Tour
                speaker who's passionate about helping people close the gap
                between where they are now and where they want to be.
              </span>
              <span className="block">
                After hitting rock bottom through self-destructive patterns
                rooted in negative mental programming, Eli made the decision to
                transform his life. He learned to identify and reframe the
                limiting beliefs holding him back, eventually building a startup
                from the ground up into a multi-million dollar company with over
                40 employees.
              </span>
              <span className="block">
                But here's what he discovered: business success alone wasn't
                enough. Despite achieving everything he thought he wanted,
                something was missing. That realization led him to his true
                calling—helping others break through their own barriers and find
                genuine fulfillment.
              </span>
              <span className="block">
                His upcoming book, <span className="italic">Rewrite The Program</span>, lays out a
                transformative framework that walks readers through
                understanding their childhood programming, navigating the
                necessary unlearning process, and amplifying their authentic
                voice to make a real impact.
              </span>
            </p>
          </div>
        </div>

        {/* Featured On */}
        <div className="mt-16 text-center">
          <span className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6 block">
            Featured On
          </span>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <Image
              src="/logos/forbes.png"
              alt="Forbes"
              width={90}
              height={32}
              className="h-8 w-auto object-contain grayscale opacity-70 hover:opacity-100 transition"
            />
            <Image
              src="/logos/entrepreneur.png"
              alt="Entrepreneur"
              width={120}
              height={32}
              className="h-8 w-auto object-contain grayscale opacity-70 hover:opacity-100 transition"
            />
            <Image
              src="/logos/inc.png"
              alt="Inc."
              width={60}
              height={32}
              className="h-8 w-auto object-contain grayscale opacity-70 hover:opacity-100 transition"
            />
            <Image
              src="/logos/fastcompany.png"
              alt="Fast Company"
              width={120}
              height={32}
              className="h-8 w-auto object-contain grayscale opacity-70 hover:opacity-100 transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
