import Image from "next/image";

export default function Meet() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider">
            Meet
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mt-2">
            Eli Bowman
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-xl aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/eli.jpg"
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
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed space-y-4">
              <span className="block">
                Eli Bowman is a top-selling author, certified Aspire Tour speaker, 
                and 7-figure entrepreneur who helps people bridge the gap between 
                their current reality and their dream life. As the creator of the 
                Path of Purpose Framework, he's passionate about helping people 
                close the gap between where they are now and where they want to be.
              </span>
              <span className="block">
                After hitting rock bottom through self-destructive decisions driven 
                by negative mental programming, Eli transformed his life by 
                reframing and uninstalling these limiting beliefs. He ultimately 
                bootstrapped a startup to a multi-million dollar valuation with 
                over 40 employees.
              </span>
              <span className="block">
                But here's what he discovered: business success alone wasn't
                enough. Despite this external success, he discovered business 
                achievements alone lacked true purpose. That realization led him 
                to his real calling—guiding others to identify and remove what 
                blocks their path to fulfillment.
              </span>
              <span className="block">
                As a master in neuro-linguistic programming (NLP), Eli specializes 
                in revealing fascinating insights about the brain and unconscious 
                mind that create powerful transformation moments for his clients 
                and audiences.
              </span>
              <span className="block">
                His upcoming book, <span className="italic">Rewrite The Program</span>, offers a 
                groundbreaking framework that guides readers through understanding 
                childhood programming, navigating necessary deconstruction, and 
                amplifying their authentic voice for global impact.
              </span>
            </p>
          </div>
        </div>

        {/* Featured On */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <span className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider mb-6 block">
            Featured On
          </span>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12">
            <Image
              src="/logos/forbes.png"
              alt="Forbes"
              width={90}
              height={32}
              className="h-6 sm:h-7 md:h-8 w-auto object-contain grayscale opacity-70 hover:opacity-100 transition"
            />
            <Image
              src="/logos/entrepreneur.png"
              alt="Entrepreneur"
              width={120}
              height={32}
              className="h-6 sm:h-7 md:h-8 w-auto object-contain grayscale opacity-70 hover:opacity-100 transition"
            />
            <Image
              src="/logos/inc.png"
              alt="Inc."
              width={60}
              height={32}
              className="h-6 sm:h-7 md:h-8 w-auto object-contain grayscale opacity-70 hover:opacity-100 transition"
            />
            <Image
              src="/logos/fastcompany.png"
              alt="Fast Company"
              width={120}
              height={32}
              className="h-6 sm:h-7 md:h-8 w-auto object-contain grayscale opacity-70 hover:opacity-100 transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
