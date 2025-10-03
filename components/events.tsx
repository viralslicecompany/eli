import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Events() {
  return (
    <section className="py-12 px-4 md:px-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-white text-2xl md:text-3xl font-medium">
          Events that <span className="italic font-light">liberate</span>
        </h2>
        <Link
          href="/"
          className="text-gray-300 hover:text-white text-sm flex items-center gap-1 transition-colors"
        >
          Discover events <ChevronRight className="size-4" />
        </Link>
      </div>
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {/* Event Card 1 */}
          <div className="min-w-[220px] max-w-[260px] bg-[#181818] rounded-xl shadow-lg overflow-hidden flex-shrink-0">
            <div className="h-40 w-full relative">
              <img
                src="/events/business-mastery.jpg"
                alt="Business Mastery"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <div className="text-xs text-gray-400 mb-1 tracking-widest">
                ELI BOWMAN
              </div>
              <div className="text-lg font-bold text-white mb-2 leading-tight">
                BUSINESS MASTERY
              </div>
              <div className="text-gray-300 text-sm">
                Grow your business exponentially.
              </div>
            </div>
          </div>
          {/* Event Card 2 */}
          <div className="min-w-[220px] max-w-[260px] bg-[#181818] rounded-xl shadow-lg overflow-hidden flex-shrink-0">
            <div className="h-40 w-full relative">
              <img
                src="/events/leadership-academy.jpg"
                alt="Leadership Academy"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <div className="text-xs text-gray-400 mb-1 tracking-widest">
                ELI BOWMAN
              </div>
              <div className="text-lg font-bold text-white mb-2 leading-tight">
                LEADERSHIP ACADEMY
              </div>
              <div className="text-gray-300 text-sm">
                Become an impactful leader.
              </div>
            </div>
          </div>
          {/* Event Card 3 */}
          <div className="min-w-[220px] max-w-[260px] bg-[#181818] rounded-xl shadow-lg overflow-hidden flex-shrink-0">
            <div className="h-40 w-full relative">
              <img
                src="/events/date-with-destiny.jpg"
                alt="Date with Destiny"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <div className="text-xs text-gray-400 mb-1 tracking-widest">
                ELI BOWMAN
              </div>
              <div className="text-lg font-bold text-white mb-2 leading-tight">
                DATE WITH DESTINY
              </div>
              <div className="text-gray-300 text-sm">
                Create the life according to you.
              </div>
            </div>
          </div>
          {/* Event Card 4 */}
          <div className="min-w-[220px] max-w-[260px] bg-[#181818] rounded-xl shadow-lg overflow-hidden flex-shrink-0">
            <div className="h-40 w-full relative">
              <img
                src="/events/unleash-the-power.jpg"
                alt="Unleash the Power Within"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <div className="text-xs text-gray-400 mb-1 tracking-widest">
                ELI BOWMAN
              </div>
              <div className="text-lg font-bold text-white mb-2 leading-tight">
                UNLEASH THE POWER WITHIN
              </div>
              <div className="text-gray-300 text-sm">
                Escape limits, rediscover growth.
              </div>
            </div>
          </div>{" "}
          {/* Event Card 4 */}
          <div className="min-w-[220px] max-w-[260px] bg-[#181818] rounded-xl shadow-lg overflow-hidden flex-shrink-0">
            <div className="h-40 w-full relative">
              <img
                src="/events/unleash-the-power.jpg"
                alt="Unleash the Power Within"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <div className="text-xs text-gray-400 mb-1 tracking-widest">
                ELI BOWMAN
              </div>
              <div className="text-lg font-bold text-white mb-2 leading-tight">
                UNLEASH THE POWER WITHIN
              </div>
              <div className="text-gray-300 text-sm">
                Escape limits, rediscover growth.
              </div>
            </div>
          </div>{" "}
          {/* Event Card 4 */}
          <div className="min-w-[220px] max-w-[260px] bg-[#181818] rounded-xl shadow-lg overflow-hidden flex-shrink-0">
            <div className="h-40 w-full relative">
              <img
                src="/events/unleash-the-power.jpg"
                alt="Unleash the Power Within"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <div className="text-xs text-gray-400 mb-1 tracking-widest">
                ELI BOWMAN
              </div>
              <div className="text-lg font-bold text-white mb-2 leading-tight">
                UNLEASH THE POWER WITHIN
              </div>
              <div className="text-gray-300 text-sm">
                Escape limits, rediscover growth.
              </div>
            </div>
          </div>{" "}
          {/* Event Card 4 */}
          <div className="min-w-[220px] max-w-[260px] bg-[#181818] rounded-xl shadow-lg overflow-hidden flex-shrink-0">
            <div className="h-40 w-full relative">
              <img
                src="/events/unleash-the-power.jpg"
                alt="Unleash the Power Within"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <div className="text-xs text-gray-400 mb-1 tracking-widest">
                ELI BOWMAN
              </div>
              <div className="text-lg font-bold text-white mb-2 leading-tight">
                UNLEASH THE POWER WITHIN
              </div>
              <div className="text-gray-300 text-sm">
                Escape limits, rediscover growth.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
