import { useEffect, useRef, useState } from "react";
import { Calendar, Clock3 } from "lucide-react";
import { weddingConfig } from "@/data/config";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [status, setStatus] = useState<"counting" | "today" | "passed">(
    "counting",
  );
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date(weddingConfig.weddingDate);
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      const isToday = weddingDate.toDateString() === now.toDateString();

      if (isToday) {
        setStatus("today");
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      if (difference <= 0) {
        setStatus("passed");
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      setStatus("counting");
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const weddingDate = new Date(weddingConfig.weddingDate);

  const formattedDate = weddingDate.toLocaleDateString("pt-BR", {
    weekday: "long",
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

  const timeUnits = [
    { value: timeLeft.days, label: "Dias" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-hero relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-rose/20 rounded-full blur-2xl" />
      </div>

      <div className="container relative z-10 px-4">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Marque na agenda
          </p>
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-foreground">
            Contagem Regressiva
          </h2>
        </div>

        <div
          className={`max-w-3xl mx-auto mb-14 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="rounded-3xl border border-gold/20 bg-card/95 backdrop-blur-sm shadow-card px-6 py-7 sm:px-8 sm:py-8">
            <div className="flex flex-col items-center text-center gap-5">
              <div className="flex items-center gap-2 text-gold uppercase tracking-[0.25em] text-xs sm:text-sm">
                <Calendar className="w-4 h-4" />
                <span>Data da cerimônia</span>
              </div>

              <p className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground capitalize leading-relaxed">
                {formattedDate}
              </p>

              <div className="w-16 h-px bg-gold/30" />

              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2 text-gold uppercase tracking-[0.25em] text-xs sm:text-sm">
                  <Clock3 className="w-4 h-4" />
                  <span>Horário da cerimônia</span>
                </div>

                <div className="inline-flex items-center justify-center rounded-full border border-gold/30 bg-gold/10 px-6 py-3 shadow-sm">
                  <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold font-medium leading-none">
                    {formattedTime}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground">
                  Chegue com antecedência para aproveitar cada momento com
                  calma.
                </p>
              </div>
            </div>
          </div>
        </div>

        {status === "counting" ? (
          <div
            className={`flex flex-wrap justify-center gap-4 md:gap-8 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {timeUnits.map((unit, index) => (
              <div
                key={unit.label}
                className="flex flex-col items-center"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl bg-card shadow-card flex items-center justify-center mb-3 border border-gold/20">
                  <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground font-medium">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-muted-foreground text-sm tracking-wider uppercase">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div
            className={`text-center transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="inline-block px-8 py-6 rounded-2xl bg-card shadow-card border border-gold/20">
              <p className="font-script text-3xl sm:text-4xl md:text-5xl text-gold">
                {status === "today"
                  ? weddingConfig.weddingDayMessage
                  : weddingConfig.afterWeddingMessage}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Countdown;
