import { useEffect, useState } from "react";
import { Heart, ChevronDown } from "lucide-react";
import { weddingConfig } from "@/data/config";

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

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-rose/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-champagne/40 rounded-full blur-2xl" />
      </div>

      {/* Main content */}
      <div className="container relative z-10 text-center px-4 py-20">
        {/* Small decorative text */}
        <p
          className={`text-muted-foreground tracking-[0.3em] uppercase text-sm mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Vamos nos casar!
        </p>

        {/* Names */}
        <h1
          className={`font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {weddingConfig.groomName}
          <span className="text-gold mx-2 sm:mx-4">&</span>
          {weddingConfig.brideName}
        </h1>

        {/* Decorative divider */}
        <div
          className={`flex items-center justify-center gap-4 my-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-gold" />
          <Heart className="w-5 h-5 text-gold fill-gold animate-pulse-soft" />
          <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* Date */}
        <p
          className={`font-serif text-xl sm:text-2xl md:text-3xl text-foreground mb-4 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {formattedDate}
        </p>

        {/* Location */}
        <p
          className={`text-muted-foreground text-base sm:text-lg mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {weddingConfig.ceremony.city}
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={() => scrollToSection("presentes")}
            className="btn-gold min-w-[200px]"
          >
            Ver Presentes
          </button>
          <button
            onClick={() => scrollToSection("rsvp")}
            className="px-8 py-3 rounded-full font-medium border-2 border-gold text-foreground hover:bg-gold/10 transition-all duration-300 min-w-[200px]"
          >
            Confirmar Presença
          </button>
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
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Rolar para baixo"
        >
          <span className="text-xs tracking-wider uppercase mb-2">Saiba mais</span>
          <ChevronDown className="w-5 h-5 animate-float" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
