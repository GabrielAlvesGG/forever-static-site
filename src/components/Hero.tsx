import { useEffect, useState } from "react";
import { Heart, ChevronDown } from "lucide-react";
import { weddingConfig } from "@/data/config";
import heroBackgroundImage from "@/assets/images/hero.jpeg";

// ============================================
// HERO BACKGROUND IMAGE
// Boa prática:
// - Imagens dentro de src/: importar (como acima).
// - Alternativa (URL fixa): colocar em public/images/hero.jpeg e usar:
//   const heroBackgroundImage = "/images/hero.jpeg";
// ============================================

// ============================================
// HERO BACKGROUND IMAGE
// Substitua pela foto do casal (URL ou import local)
// ============================================
const heroBackgroundImage = "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop";

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
<<<<<<< HEAD
    <>
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
          {/* Dark overlay gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
        </div>

        {/* Main content */}
        <div className="container relative z-10 text-center px-4 py-20">
          {/* Small decorative text */}
          <p
            className={`text-background/80 tracking-[0.3em] uppercase text-sm mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Vamos nos casar!
          </p>
=======
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBackgroundImage}
          alt="Foto do casal"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="container relative z-10 text-center px-4 py-20">
        {/* Small decorative text */}
        <p
          className={`text-background/80 tracking-[0.3em] uppercase text-sm mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Vamos nos casar!
        </p>

        {/* Names */}
        <h1
          className={`font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-background mb-6 transition-all duration-1000 delay-200 drop-shadow-lg ${
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
          className={`font-serif text-xl sm:text-2xl md:text-3xl text-background mb-4 transition-all duration-1000 delay-400 drop-shadow ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {formattedDate}
        </p>

        {/* Location */}
        <p
          className={`text-background/80 text-base sm:text-lg mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {weddingConfig.ceremony.city}
        </p>
>>>>>>> 114a5abd61e29a5016344cfc73a99d35e987a58c

          {/* Names */}
          <h1
            className={`font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-background mb-6 transition-all duration-1000 delay-200 drop-shadow-lg ${
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
            className={`font-serif text-xl sm:text-2xl md:text-3xl text-background mb-4 transition-all duration-1000 delay-400 drop-shadow ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {formattedDate}
          </p>

          {/* Location */}
          <p
            className={`text-background/80 text-base sm:text-lg mb-12 transition-all duration-1000 delay-500 ${
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
              className="px-8 py-3 rounded-full font-medium border-2 border-background text-background hover:bg-background/20 transition-all duration-300 min-w-[200px]"
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
            className="flex flex-col items-center text-background/70 hover:text-background transition-colors"
            aria-label="Rolar para baixo"
          >
<<<<<<< HEAD
            <span className="text-xs tracking-wider uppercase mb-2">
              Saiba mais
            </span>
            <ChevronDown className="w-5 h-5 animate-float" />
          </button>
        </div>
      </section>
    </>
=======
            Ver Presentes
          </button>
          <button
            onClick={() => scrollToSection("rsvp")}
            className="px-8 py-3 rounded-full font-medium border-2 border-background text-background hover:bg-background/20 transition-all duration-300 min-w-[200px]"
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
          className="flex flex-col items-center text-background/70 hover:text-background transition-colors"
          aria-label="Rolar para baixo"
        >
          <span className="text-xs tracking-wider uppercase mb-2">Saiba mais</span>
          <ChevronDown className="w-5 h-5 animate-float" />
        </button>
      </div>
    </section>
>>>>>>> 114a5abd61e29a5016344cfc73a99d35e987a58c
  );
};

export default Hero;
