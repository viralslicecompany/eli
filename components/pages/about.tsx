import Image from "next/image";
import { Button } from "../ui/button";

export default function AboutPage() {
    return (
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <span className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        About
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2">
                        Eli Bowman
                    </h1>
                </div>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start mb-12 sm:mb-16 md:mb-20">
                    {/* Image */}
                    <div className="flex justify-center order-1 md:order-2">
                        <div className="w-full max-w-xl aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/eli-bowman.jpg"
                                alt="Eli Bowman"
                                width={400}
                                height={533}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                    </div>

                    {/* Story Content */}
                    <div className="flex flex-col justify-center order-2 md:order-1 space-y-6">
                        <div className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                                One of Eli Bowman's earliest memories is of his uncle carrying in bags of groceries while his mother quietly cried in the kitchen—a moment that made him realize his family was struggling financially.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                                Although Eli grew up without much money, he still looks back on his childhood as a good one, filled with love and support from those closest to him.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                                The Entrepreneurial Journey
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                                In the early stages of his journey as an entrepreneur, Eli faced significant hardships. He lived with the constant stress of making ends meet, often relying on welfare and food stamps just to get by.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                                As his determination carried him forward, Eli founded and built a bicycle assembly company that would become the largest and most successful venture in his career. With over 40 employees and a valuation reaching a few million dollars, the business seemed poised for lasting success.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Turning Point Section */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
                    {/* Content */}
                    <div className="space-y-6">
                        <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                            The Turning Point
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                            Then, almost overnight, disaster struck: the company's largest customer—Walmart—suddenly pulled out, creating a crisis that threatened everything Eli had worked for.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                            Through that difficult time, Eli came to realize that his true calling might be helping others find their own path and purpose. After the company ended, he discovered not only relief, but also a new direction focused on guiding and supporting others in their journeys.
                        </p>
                    </div>

                    {/* Additional Image */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-xl aspect-square rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/eli2.jpg"
                                alt="Eli Bowman speaking"
                                width={400}
                                height={400}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">
                            Ready to rewrite your story?
                        </h3>
                        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                            Join thousands who have transformed their lives through Eli's proven framework for overcoming limiting beliefs and stepping into their authentic purpose.
                        </p>
                        <Button size="lg" className="text-base sm:text-lg">
                            Book a Call
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}