import { useEffect, useState } from "react";
import { Heart, ChevronDown, Clock3, CalendarDays } from "lucide-react";
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
    timeZone: "America/Sao_Paulo",
  });

  const formattedTime = weddingDate.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo",
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
      {/* Background */}
      <div className="absolute inset-0 bg-foreground">
        <img
          src={heroBackgroundImage}
          alt="Foto do casal"
          className="w-full h-full object-contain md:object-cover"
          loading="eager"
          style={{ objectPosition: "50% 20%" }}
        />

        {/* Camada principal */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(20,16,15,0.60),rgba(20,16,15,0.42),rgba(20,16,15,0.78))]" />

        {/* Vignette lateral para dar cara mais cinematográfica */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_28%,rgba(0,0,0,0.18)_58%,rgba(0,0,0,0.42)_100%)]" />

        {/* Escurecimento lateral extra */}
        <div className="absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-black/28 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[22%] bg-gradient-to-l from-black/40 to-transparent" />
      </div>

      <div className="container relative z-10 text-center px-4 py-16 md:py-20">
        <p
          className={`text-background/95 tracking-[0.32em] uppercase text-xs sm:text-sm mb-5 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ textShadow: "0 3px 14px rgba(0,0,0,0.60)" }}
        >
          Vamos nos casar!
        </p>

        <h1
          className={`font-script text-[4rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem] leading-[0.9] text-background transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            textShadow:
              "0 8px 28px rgba(0,0,0,0.52), 0 3px 10px rgba(0,0,0,0.42)",
          }}
        >
          <span className="inline-block">{weddingConfig.brideName}</span>
          <span
            className="inline-block text-gold mx-2 sm:mx-3 md:mx-4"
            style={{
              textShadow:
                "0 6px 22px rgba(0,0,0,0.45), 0 0 14px rgba(201,169,98,0.22)",
            }}
          >
            &
          </span>
          <span className="inline-block">{weddingConfig.groomName}</span>
        </h1>

        <div
          className={`flex items-center justify-center gap-4 sm:gap-5 my-6 md:my-7 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ filter: "drop-shadow(0 4px 14px rgba(0,0,0,0.35))" }}
        >
          <div className="h-px w-16 sm:w-24 md:w-28 bg-gradient-to-r from-transparent to-gold/90" />
          <Heart className="w-5 h-5 md:w-6 md:h-6 text-gold fill-gold" />
          <div className="h-px w-16 sm:w-24 md:w-28 bg-gradient-to-l from-transparent to-gold/90" />
        </div>

        {/* Card central de data e horário */}
        <div
          className={`mb-10 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="inline-flex flex-col items-stretch rounded-[30px] border border-gold/30 bg-[linear-gradient(180deg,rgba(35,28,27,0.58),rgba(25,20,20,0.42))] backdrop-blur-md px-7 py-6 sm:px-10 sm:py-7 shadow-[0_22px_60px_rgba(0,0,0,0.34)] min-w-[300px] sm:min-w-[420px] md:min-w-[520px]">
            <div className="flex items-center justify-center gap-4 sm:gap-5">
              <CalendarDays
                className="w-8 h-8 sm:w-10 sm:h-10 text-gold shrink-0"
                style={{ filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.35))" }}
              />

              <span
                className="font-serif text-background text-[2rem] sm:text-[2.3rem] md:text-[2.7rem] leading-none"
                style={{
                  textShadow:
                    "0 5px 18px rgba(0,0,0,0.64), 0 1px 4px rgba(0,0,0,0.45)",
                }}
              >
                {formattedDate}
              </span>
            </div>

            <div className="mx-auto my-4 h-px w-28 sm:w-36 bg-gradient-to-r from-transparent via-gold/65 to-transparent" />

            <div className="flex items-center justify-center gap-4 sm:gap-5">
              <Clock3
                className="w-8 h-8 sm:w-10 sm:h-10 text-gold shrink-0"
                style={{ filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.35))" }}
              />

              <span
                className="font-serif text-gold text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] leading-none"
                style={{
                  textShadow:
                    "0 5px 18px rgba(0,0,0,0.66), 0 1px 4px rgba(0,0,0,0.48)",
                }}
              >
                às {formattedTime}
              </span>
            </div>
          </div>
        </div>

        {/* Local */}
        <p
          className={`text-background/95 text-sm sm:text-base md:text-lg mb-8 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ textShadow: "0 3px 12px rgba(0,0,0,0.55)" }}
        >
          {weddingConfig.ceremony.city}
        </p>

        {/* Navegação */}
        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="inline-block max-w-full rounded-[28px] border border-gold/22 bg-[linear-gradient(180deg,rgba(60,48,43,0.32),rgba(36,28,28,0.28))] backdrop-blur-md px-6 py-5 sm:px-10 sm:py-6 shadow-[0_18px_45px_rgba(0,0,0,0.24)]">
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-4">
              <div className="h-px w-10 sm:w-14 bg-gradient-to-r from-transparent to-gold/75" />
              <p
                className="text-background uppercase tracking-[0.22em] text-xs sm:text-sm"
                style={{ textShadow: "0 3px 10px rgba(0,0,0,0.45)" }}
              >
                Nesta página
              </p>
              <div className="h-px w-10 sm:w-14 bg-gradient-to-l from-transparent to-gold/75" />
            </div>

            <div
              className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 sm:gap-x-4 text-background text-sm sm:text-base md:text-[1.15rem]"
              style={{ textShadow: "0 3px 10px rgba(0,0,0,0.40)" }}
            >
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

      {/* Scroll */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={() => scrollToSection("nossa-historia")}
          className="flex flex-col items-center text-background/90 hover:text-background transition-colors"
          aria-label="Rolar para baixo"
          style={{ textShadow: "0 3px 10px rgba(0,0,0,0.48)" }}
        >
          <span className="text-xs tracking-[0.2em] uppercase mb-2">
            Continue descendo
          </span>
          <ChevronDown className="w-6 h-6 animate-float" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
