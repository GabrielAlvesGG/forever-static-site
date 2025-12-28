import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";
import { weddingConfig } from "@/data/config";

const OurStory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Split story into paragraphs
  const paragraphs = weddingConfig.ourStory.split("\n\n");

  return (
    <section
      id="nossa-historia"
      ref={sectionRef}
      className="py-20 md:py-32 bg-card relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-40 bg-rose/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Nossa Jornada
          </p>
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-foreground">
            Nossa História
          </h2>

          {/* Decorative divider */}
          <div className="divider-ornament mt-6">
            <Heart className="w-4 h-4 text-gold fill-gold" />
          </div>
        </div>

        {/* Story content */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="font-serif text-lg sm:text-xl text-foreground/90 leading-relaxed mb-6 last:mb-0 text-center"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Decorative element */}
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
