import { useEffect, useRef, useState } from "react";
import { Shirt, Ban, BadgeInfo, Palette, Check } from "lucide-react";
import ternosMasculinos from "../img/ternos_masculinos.png";
import vestimentaFemina from "../img/vestimenta_feminina.jpeg";
import paletaMadrinhas from "../img/paleta_madrinhas.png";
import restricoesIgreja from "../img/restricoes_igreja.jpeg";

const womenRules = ["Vestidos longos.", "Traje social completo."];

const menRules = ["Traje social completo.", "Terno com gravata."];

const churchRules = [
  "Tomara que caia.",
  "Costas nuas.",
  "Alças finas.",
  "Transparências em costas, ombros e colo.",
  "Decotes grandes.",
  "Fendas acima do joelho.",
];

type DressImageCardProps = {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  delay?: number;
};

type HighlightImageCardProps = {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  items?: string[];
  delay?: number;
  tone?: "gold" | "rose";
  captionPosition?: "bottom" | "top";
  imageFit?: "cover" | "contain";
};

function DressImageCard({
  image,
  eyebrow,
  title,
  description,
  items,
  delay = 0,
}: DressImageCardProps) {
  return (
    <div
      className="overflow-hidden rounded-[2rem] border border-border/60 bg-card/85 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Ajustado para ficar menos alto e mais agradável */}
      <div className="relative h-[270px] sm:h-[310px] lg:h-[340px] overflow-hidden bg-[#f6f1ec]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          <p className="text-gold tracking-[0.28em] uppercase text-xs mb-2">
            {eyebrow}
          </p>
          <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-background mb-2">
            {title}
          </h3>
          <p className="text-background/85 text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="p-5 md:p-6">
        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-foreground/90 leading-relaxed"
            >
              <span className="mt-2 w-2.5 h-2.5 rounded-full bg-gold shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function HighlightImageCard({
  image,
  eyebrow,
  title,
  description,
  items = [],
  delay = 0,
  tone = "gold",
  captionPosition = "bottom",
  imageFit = "contain",
}: HighlightImageCardProps) {
  const toneClasses =
    tone === "gold"
      ? {
          border: "border-gold/30",
          overlay: "from-foreground/75 via-foreground/20 to-transparent",
          badge: "border-gold/25 bg-background/60 text-gold",
          bullet: "bg-gold",
          panel: "from-rose/20 via-card/95 to-gold/10",
        }
      : {
          border: "border-rose-dark/20",
          overlay: "from-foreground/80 via-foreground/25 to-transparent",
          badge: "border-rose-dark/20 bg-background/60 text-gold",
          bullet: "bg-rose-dark",
          panel: "from-background via-card/95 to-rose/10",
        };

  const captionPosClass =
    captionPosition === "top" ? "top-0 pt-5" : "bottom-0 pb-5";

  const captionGradient =
    captionPosition === "top"
      ? "bg-gradient-to-b from-foreground/80 via-foreground/35 to-transparent"
      : `bg-gradient-to-t ${toneClasses.overlay}`;

  const fitClass = imageFit === "contain" ? "object-contain" : "object-cover";
  const hoverScale =
    imageFit === "contain" ? "hover:scale-[1.02]" : "hover:scale-105";

  return (
    <div
      className={`overflow-hidden rounded-[2rem] border ${toneClasses.border} bg-gradient-to-br ${toneClasses.panel} shadow-card transition-all duration-500 hover:-translate-y-1`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Mantido padrão de madrinhas e igreja */}
        <div className="relative h-[280px] sm:h-[340px] lg:h-[420px] overflow-hidden bg-[#f6f1ec]">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className={`w-full h-full ${fitClass} object-center transition-transform duration-700 ${hoverScale}`}
          />

          <div className={`absolute inset-0 ${captionGradient}`} />

          <div
            className={`absolute ${captionPosClass} left-0 right-0 px-5 md:px-6`}
          >
            <p className="text-gold tracking-[0.28em] uppercase text-xs mb-2">
              {eyebrow}
            </p>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-background mb-2">
              {title}
            </h3>
            <p className="text-background/85 text-sm md:text-base leading-relaxed max-w-xl">
              {description}
            </p>
          </div>
        </div>

        <div className="p-5 md:p-6 lg:p-7 flex flex-col justify-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs uppercase tracking-[0.22em] mb-4 w-fit ${toneClasses.badge}`}
          >
            {tone === "gold" ? (
              <Palette className="w-4 h-4" />
            ) : (
              <Ban className="w-4 h-4" />
            )}
            {eyebrow}
          </div>

          <ul className="space-y-3">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-foreground/90 leading-relaxed"
              >
                <span
                  className={`mt-2 w-2.5 h-2.5 rounded-full shrink-0 ${toneClasses.bullet}`}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const DressCode = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.12 },
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="traje"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute top-24 left-8 w-32 h-32 bg-rose/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-8 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container px-4">
        <div
          className={`max-w-3xl mx-auto text-center mb-14 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4 flex items-center justify-center gap-2">
            <Shirt className="w-4 h-4" />
            Dress Code
          </p>

          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-foreground mb-5">
            Traje
          </h2>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Para manter a harmonia da celebração e o estilo da cerimônia,
            pedimos a gentileza de seguir as orientações abaixo.
          </p>
        </div>

        {/* Cores das madrinhas */}
        <div
          className={`mb-8 transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <HighlightImageCard
            image={paletaMadrinhas}
            eyebrow="Cores reservadas"
            title="Cores das madrinhas"
            description="Paleta reservada para preservar a harmonia visual da cerimônia."
            items={[
              "Os tons marsala e avermelhados serão usados pelas madrinhas.",
              "Pedimos gentilmente que as convidadas não utilizem essas cores.",
            ]}
            tone="gold"
            imageFit="contain"
          />
        </div>

        {/* Trajes */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <DressImageCard
            image={vestimentaFemina}
            eyebrow="Convidadas"
            title="Traje feminino"
            description="Orientação de vestimenta para as convidadas."
            items={womenRules}
            delay={0}
          />

          <DressImageCard
            image={ternosMasculinos}
            eyebrow="Convidados"
            title="Traje masculino"
            description="Orientação de vestimenta para os convidados."
            items={menRules}
            delay={100}
          />
        </div>

        {/* Restrições da igreja */}
        <div
          className={`mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <HighlightImageCard
            image={restricoesIgreja}
            eyebrow="Para igreja evitar"
            title="Regras de vestimenta para a cerimônia"
            description="Pedimos atenção especial aos pontos abaixo para manter a proposta e a elegância da cerimônia religiosa."
            items={churchRules}
            tone="rose"
            captionPosition="bottom"
            imageFit="contain"
          />
        </div>

        {/* Observação */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-3xl mx-auto rounded-3xl border border-gold/20 bg-gradient-to-r from-background via-rose/10 to-background p-6 md:p-7 text-center shadow-soft">
            <div className="inline-flex items-center justify-center gap-2 mb-3">
              <BadgeInfo className="w-4 h-4 text-gold" />
              <h4 className="font-serif text-xl md:text-2xl text-foreground">
                Observação
              </h4>
            </div>

            <p className="text-foreground/85 leading-relaxed">
              Se necessário, utilize uma <strong>enxarpe</strong> ou um{" "}
              <strong>casaquinho não transparente</strong>.
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-background/70 text-sm text-foreground/80">
                <Check className="w-4 h-4 text-gold" />
                Mais conforto
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-background/70 text-sm text-foreground/80">
                <Check className="w-4 h-4 text-gold" />
                Mais elegância
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-background/70 text-sm text-foreground/80">
                <Check className="w-4 h-4 text-gold" />
                Mais alinhamento com a cerimônia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
