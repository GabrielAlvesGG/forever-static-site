import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";
import { weddingConfig } from "@/data/config";
import OurStoryTimeline from "@/components/OurStoryTimeline";

const OurStory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) observer.unobserve(currentSection);
      observer.disconnect();
    };
  }, []);

  const paragraphs = weddingConfig.ourStory.split("\n\n");

  return (
    <section
      id="nossa-historia"
      ref={sectionRef}
      className="py-20 md:py-32 bg-card relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-40 bg-rose/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        <div
          className={`text-center mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Nossa Jornada
          </p>

          <h2 className="font-script text-4xl sm:text-5xl md:text-7xl text-foreground">
            Nossa História
          </h2>

          <div className="divider-ornament mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/70" />
            <Heart className="w-4 h-4 text-gold fill-gold" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/70" />
          </div>
        </div>

        <div
          className={`max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="font-serif text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 last:mb-0 text-center px-2 sm:px-0"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div
          className={`mt-12 flex flex-col items-center justify-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/70" />
            <Heart className="w-5 h-5 text-gold fill-gold" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/70" />
          </div>

          <p className="font-serif text-lg sm:text-xl md:text-2xl text-foreground text-center px-4 max-w-3xl">
            E assim, capítulo após capítulo, nossa história ganhou sua própria
            linha do tempo.
          </p>
        </div>

        <div id="timeline-nossa-historia" className="mt-14">
          <OurStoryTimeline />
        </div>

        <div
          className={`flex justify-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-gold/50" />
            <div className="w-3 h-3 rounded-full bg-gold/70" />
            <Heart className="w-6 h-6 text-gold fill-gold" />
            <div className="w-3 h-3 rounded-full bg-gold/70" />
            <div className="w-2 h-2 rounded-full bg-gold/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;