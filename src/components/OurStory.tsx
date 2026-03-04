import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";
import { weddingConfig } from "@/data/config";
import OurStoryTimeline from "@/components/OurStoryTimeline";

const OurStory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Controla mostrar/esconder a timeline (sem modal)
  const [showStory, setShowStory] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Split story into paragraphs
  const paragraphs = weddingConfig.ourStory.split("\n\n");

  return (
    <>
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
            className={`text-center mb-10 transition-all duration-1000 ${
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
            <div className="divider-ornament mt-6 flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/70" />
              <Heart className="w-4 h-4 text-gold fill-gold" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/70" />
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
  {/* Botão coração: mostra/esconde timeline */}
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowStory((v) => !v)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-foreground/20 text-foreground hover:bg-foreground/5 transition-all duration-300"
                aria-expanded={showStory}
                aria-controls="timeline-nossa-historia"
              >
                <Heart className="w-5 h-5 text-gold fill-gold" />
                <span className="font-medium">
                  {showStory ? "Esconder nossa linha do tempo" : "Ver nossa linha do tempo"}
                </span>
              </button>
            </div>

            {/* Nota: mídias de prévia (links públicos) */}
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Prévia: as fotos/vídeos abaixo estão usando links públicos apenas para visualizar o layout.
            </p>

          {/* Timeline fora da section, mas ainda dentro de um único "pai" (Fragment) */}
      <div id="timeline-nossa-historia">
        <OurStoryTimeline open={showStory} />
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

     
    </>
  );
};

export default OurStory;
