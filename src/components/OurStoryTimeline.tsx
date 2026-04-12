import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import timelineData, { TimelineItem } from "@/data/timelineData";

type Media = TimelineItem["media"][number];

export default function OurStoryTimeline() {
  const items = useMemo(() => timelineData, []);

  return (
    <section className="bg-gradient-hero">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
        <div id="nossa-historia" className="mt-10">
          <div className="relative">
            {/* Linha central desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gold/30" />

            {/* Linha lateral mobile */}
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gold/30" />

            <div className="space-y-16">
              {items.map((item: TimelineItem, idx: number) => {
                const isLeft = idx % 2 === 0;

                return (
                  <TimelineRow
                    key={`${item.year}-${item.title}`}
                    item={item}
                    isLeft={isLeft}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineRow({
  item,
  isLeft,
}: {
  item: TimelineItem;
  isLeft: boolean;
}) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <div ref={ref} className="relative">
      {/* Marcador */}
      <div
        className={[
          "absolute top-8 w-4 h-4 rounded-full border border-gold bg-gradient-gold shadow-soft z-10 transition-all duration-700",
          "md:left-1/2 md:-translate-x-1/2",
          "left-4 -translate-x-1/2",
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75",
        ].join(" ")}
      />

      {/* DESKTOP */}
      <div className="hidden md:grid md:grid-cols-9 md:items-stretch">
        {isLeft ? (
          <>
            <div
              className={[
                "md:col-span-4 md:pr-10 transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-x-8 translate-y-8",
              ].join(" ")}
            >
              <TimelineTextCard item={item} />
            </div>

            <div
              className={[
                "md:col-span-4 md:col-start-6 md:pl-10 transition-all duration-700 ease-out delay-150",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-x-8 translate-y-8",
              ].join(" ")}
            >
              <TimelineMediaSide item={item} isActive={isVisible} />
            </div>
          </>
        ) : (
          <>
            <div
              className={[
                "md:col-span-4 md:pr-10 transition-all duration-700 ease-out delay-150",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-x-8 translate-y-8",
              ].join(" ")}
            >
              <TimelineMediaSide item={item} isActive={isVisible} />
            </div>

            <div
              className={[
                "md:col-span-4 md:col-start-6 md:pl-10 transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-x-8 translate-y-8",
              ].join(" ")}
            >
              <TimelineTextCard item={item} />
            </div>
          </>
        )}
      </div>

      {/* MOBILE */}
      <div className="md:hidden pl-12 space-y-4">
        <div
          className={[
            "transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          <TimelineTextCard item={item} />
        </div>

        <div
          className={[
            "transition-all duration-700 ease-out delay-150",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          <TimelineMediaSide item={item} isActive={isVisible} />
        </div>
      </div>
    </div>
  );
}

function TimelineTextCard({ item }: { item: TimelineItem }) {
  return (
    <div className="bg-card/85 border border-border/60 rounded-3xl shadow-soft hover:shadow-card transition-all">
      <div className="px-6 py-5">
        <p className="text-gold tracking-[0.35em] uppercase text-xs mb-2">
          {item.year}
        </p>

        <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-2">
          {item.title}
        </h3>

        <p className="text-muted-foreground mb-4">{item.summary}</p>

        <p className="text-foreground/90 leading-relaxed">{item.details}</p>
      </div>
    </div>
  );
}

function TimelineMediaSide({
  item,
  isActive,
}: {
  item: TimelineItem;
  isActive: boolean;
}) {
  if (!item.media?.length) {
    return (
      <div className="h-full min-h-[320px] rounded-3xl border border-border/40 bg-background/20 backdrop-blur-sm" />
    );
  }

  return (
    <TimelineMediaCarousel
      media={item.media}
      title={item.title}
      isActive={isActive}
    />
  );
}

function TimelineMediaCarousel({
  media,
  title,
  isActive,
  autoPlayMs = 4000,
}: {
  media: Media[];
  title: string;
  isActive: boolean;
  autoPlayMs?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiple = media.length > 1;

  const goPrev = () => {
    setCurrentIndex((cur) => (cur - 1 + media.length) % media.length);
  };

  const goNext = () => {
    setCurrentIndex((cur) => (cur + 1) % media.length);
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [media]);

  useEffect(() => {
    if (!isActive || !hasMultiple) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((cur) => (cur + 1) % media.length);
    }, autoPlayMs);

    return () => window.clearInterval(interval);
  }, [isActive, hasMultiple, media.length, autoPlayMs]);

  return (
    <div className="relative min-h-[320px] h-full rounded-3xl overflow-hidden border border-border/60 bg-card/70 shadow-soft">
      <div className="relative w-full h-[320px] md:h-full min-h-[320px] overflow-hidden">
        {media.map((m, idx) => {
          const isCurrent = idx === currentIndex;

          return (
            <div
              key={`${title}-${idx}`}
              className={[
                "absolute inset-0 transition-all duration-1000 ease-in-out",
                isCurrent
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-[1.03] pointer-events-none",
              ].join(" ")}
            >
              {m.type === "image" ? (
                <img
                  src={m.src}
                  alt={m.alt ?? title}
                  className="w-full h-full object-cover"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              ) : (
                <video
                  src={m.src}
                  poster={m.poster}
                  className="w-full h-full object-cover bg-black"
                  autoPlay={isCurrent && isActive}
                  muted
                  loop
                  playsInline
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

              {(m.caption || title) && (
                <div className="absolute left-0 right-0 bottom-0 p-5">
                  <p className="text-white/95 text-sm sm:text-base font-medium">
                    {m.caption ?? title}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded-full bg-black/35 text-white border border-white/20 hover:bg-black/50 transition"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded-full bg-black/35 text-white border border-white/20 hover:bg-black/50 transition"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {media.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={[
                  "w-2.5 h-2.5 rounded-full transition-all",
                  idx === currentIndex
                    ? "bg-white scale-110"
                    : "bg-white/40 hover:bg-white/70",
                ].join(" ")}
                aria-label={`Ir para mídia ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}