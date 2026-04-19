import { useEffect, useState } from "react";
import { Heart, ChevronDown } from "lucide-react";
import { weddingConfig } from "@/data/config";
import heroBackgroundImage from "@/assets/images/hero.jpeg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const weddingDate = new Date(weddingConfig.weddingDate);
  const formattedDate = weddingDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const siteSections = [
    "Nossa História",
    "Linha do Tempo",
    "Cerimônia",
    "Recepção",
    "Presentes",
    "Presença",
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-foreground">
        <img
          src={heroBackgroundImage}
          alt="Foto do casal"
          className="w-full h-full object-contain md:object-cover"
          loading="eager"
          style={{ objectPosition: "50% 20%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/75" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="container relative z-10 text-center px-4 py-20">
        <p
          className={`text-background tracking-[0.3em] uppercase text-sm mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Vamos nos casar!
        </p>

        <h1
          className={`font-script text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-background mb-6 transition-all duration-1000 delay-200 drop-shadow-lg leading-tight ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {weddingConfig.groomName}
          <span className="text-gold mx-2 sm:mx-4">&</span>
          {weddingConfig.brideName}
        </h1>

        <div
          className={`flex items-center justify-center gap-4 my-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-gold" />
          <Heart className="w-5 h-5 text-gold fill-gold animate-pulse-soft" />
          <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-gold" />
        </div>

        <p
          className={`font-serif text-xl sm:text-2xl md:text-3xl text-background mb-4 transition-all duration-1000 delay-400 drop-shadow ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {formattedDate}
        </p>

        <p
          className={`text-background text-base sm:text-lg mb-10 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {weddingConfig.ceremony.city}
        </p>

        <div
          className={`max-w-3xl mx-auto transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-block max-w-full rounded-2xl bg-background/10 backdrop-blur-sm border border-background/15 px-5 py-4 sm:px-6 sm:py-5 shadow-lg">
            <p className="text-background text-xs sm:text-sm uppercase tracking-[0.25em] mb-4">
              Nesta página
            </p>

            <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm sm:text-base md:text-lg text-background">
              {siteSections.map((section, index) => (
                <div key={section} className="flex items-center gap-3">
                  <span className="font-serif whitespace-nowrap">
                    {section}
                  </span>
                  {index < siteSections.length - 1 && (
                    <span className="text-gold/90">•</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={() => scrollToSection("nossa-historia")}
          className="flex flex-col items-center text-background/80 hover:text-background transition-colors"
          aria-label="Rolar para baixo"
        >
          <span className="text-xs tracking-wider uppercase mb-2">
            Continue descendo
          </span>
          <ChevronDown className="w-5 h-5 animate-float" />
        </button>
      </div>
    </section>
  );
};

export default Hero;