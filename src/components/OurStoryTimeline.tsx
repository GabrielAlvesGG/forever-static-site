import { useEffect, useMemo, useState } from "react";
import { ChevronDown, Images, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import timelineData, { TimelineItem } from "@/data/timelineData";

type Props = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

type Media = TimelineItem["media"][number];

type LightboxState = {
  open: boolean;
  itemIndex: number; // índice do marco (timeline item)
  mediaIndex: number; // índice da mídia dentro do marco
};

export default function OurStoryTimeline({ open, defaultOpen = false, onOpenChange }: Props) {
  const items = useMemo(() => timelineData, []);
  const [internalOpen, setInternalOpen] = useState<boolean>(defaultOpen);
  const isOpen = open ?? internalOpen;

  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const [lightbox, setLightbox] = useState<LightboxState>({
    open: false,
    itemIndex: 0,
    mediaIndex: 0,
  });

  const toggleSection = () => {
    const next = !isOpen;
    onOpenChange?.(next);
    if (open === undefined) setInternalOpen(next);
  };

  const toggleItem = (idx: number) => setExpandedIndex((cur) => (cur === idx ? null : idx));

  const openLightbox = (itemIndex: number, mediaIndex: number) => {
    setLightbox({ open: true, itemIndex, mediaIndex });
  };

  const closeLightbox = () => setLightbox((s) => ({ ...s, open: false }));

  const currentItem = items[lightbox.itemIndex];
  const currentMedia: Media | null =
    lightbox.open && currentItem ? currentItem.media[lightbox.mediaIndex] : null;

  const goPrev = () => {
    if (!currentItem) return;
    setLightbox((s) => {
      const len = currentItem.media.length;
      const nextIndex = (s.mediaIndex - 1 + len) % len;
      return { ...s, mediaIndex: nextIndex };
    });
  };

  const goNext = () => {
    if (!currentItem) return;
    setLightbox((s) => {
      const len = currentItem.media.length;
      const nextIndex = (s.mediaIndex + 1) % len;
      return { ...s, mediaIndex: nextIndex };
    });
  };

  // Teclado (ESC fecha / setas navegam)
  useEffect(() => {
    if (!lightbox.open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox.open, lightbox.itemIndex, lightbox.mediaIndex]);

  return (
    <>
      <section className="bg-gradient-hero">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
          {/* Botão de toggle (mostrar/esconder seção) */}
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={toggleSection}
              aria-controls="nossa-historia"
              aria-expanded={isOpen}
              className="px-8 py-3 rounded-full font-medium border-2 border-gold text-foreground hover:bg-background/50 transition-all duration-300 min-w-[240px] inline-flex items-center justify-center gap-2 bg-background/40"
            >
              <span>{isOpen ? "Ocultar linha do tempo" : "Ver linha do tempo"}</span>
              <ChevronDown
                className={`w-5 h-5 text-gold transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>
          </div>

          {/* Conteúdo (abre/fecha) */}
          <div
            id="nossa-historia"
            aria-hidden={!isOpen}
            className={[
              "mt-10 overflow-hidden transition-[max-height,opacity] duration-700 ease-out",
              isOpen ? "max-h-[8000px] opacity-100" : "max-h-0 opacity-0 pointer-events-none",
            ].join(" ")}
          >
            <div className="relative">
              {/* Linha central (desktop) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gold/30" />
              {/* Linha à esquerda (mobile) */}
              <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gold/30" />

              <div className="space-y-10">
                {items.map((item: TimelineItem, idx: number) => {
                  const isLeft = idx % 2 === 0;
                  const isExpanded = expandedIndex === idx;

                  return (
                    <div key={`${item.year}-${item.title}`} className="relative">
                      {/* Marcador */}
                      <div
                        className={[
                          "absolute top-6 w-4 h-4 rounded-full border border-gold bg-gradient-gold shadow-soft",
                          "md:left-1/2 md:-translate-x-1/2",
                          "left-4 -translate-x-1/2",
                        ].join(" ")}
                      />

                      <div className="md:grid md:grid-cols-9 md:items-start">
                        {/* desktop: lado esquerdo */}
                        <div className={["hidden md:block md:col-span-4", isLeft ? "md:pr-10" : ""].join(" ")}>
                          {isLeft && (
                            <TimelineCard
                              itemIndex={idx}
                              item={item}
                              isExpanded={isExpanded}
                              onToggle={() => toggleItem(idx)}
                              onOpenMedia={openLightbox}
                            />
                          )}
                        </div>

                        {/* desktop: lado direito */}
                        <div
                          className={["hidden md:block md:col-span-4 md:col-start-6", !isLeft ? "md:pl-10" : ""].join(" ")}
                        >
                          {!isLeft && (
                            <TimelineCard
                              itemIndex={idx}
                              item={item}
                              isExpanded={isExpanded}
                              onToggle={() => toggleItem(idx)}
                              onOpenMedia={openLightbox}
                            />
                          )}
                        </div>

                        {/* mobile: coluna única */}
                        <div className="md:hidden pl-12">
                          <TimelineCard
                            itemIndex={idx}
                            item={item}
                            isExpanded={isExpanded}
                            onToggle={() => toggleItem(idx)}
                            onOpenMedia={openLightbox}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="mt-10 text-xs text-muted-foreground">
                Dica: para evitar caminhos <code className="px-1 py-0.5 rounded bg-background/50 border border-border/60">/src/assets/...</code> no runtime,
                prefira servir via <code className="px-1 py-0.5 rounded bg-background/50 border border-border/60">public/</code> (ex:{" "}
                <code className="px-1 py-0.5 rounded bg-background/50 border border-border/60">/moments/2019-01.jpg</code>) ou importar os arquivos no TS/TSX.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX (tela cheia) */}
      {lightbox.open && currentMedia && (
        <div className="fixed inset-0 z-[9999]">
          <button
            type="button"
            className="absolute inset-0 bg-black/80"
            aria-label="Fechar visualização"
            onClick={closeLightbox}
          />

          <div className="absolute inset-4 md:inset-10 lg:inset-16 rounded-3xl border border-white/15 bg-black/30 overflow-hidden flex flex-col">
            {/* Top bar */}
            <div className="flex items-center justify-between px-3 py-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white hover:bg-white/10 transition"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white hover:bg-white/10 transition"
                  aria-label="Próximo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white hover:bg-white/10 transition"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media */}
            <div className="flex-1 flex items-center justify-center p-4">
              {currentMedia.type === "image" ? (
                <img
                  src={currentMedia.src}
                  alt={currentMedia.alt ?? ""}
                  className="max-w-full max-h-full rounded-2xl"
                />
              ) : (
                <video
                  src={currentMedia.src}
                  poster={currentMedia.poster}
                  controls
                  autoPlay
                  className="max-w-full max-h-full rounded-2xl bg-black"
                />
              )}
            </div>

            {/* Caption */}
            {currentMedia.caption && (
              <div className="px-5 pb-4">
                <p className="text-white/80 text-sm">{currentMedia.caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function TimelineCard({
  itemIndex,
  item,
  isExpanded,
  onToggle,
  onOpenMedia,
}: {
  itemIndex: number;
  item: TimelineItem;
  isExpanded: boolean;
  onToggle: () => void;
  onOpenMedia: (itemIndex: number, mediaIndex: number) => void;
}) {
  return (
    <div className="bg-card/85 border border-border/60 rounded-3xl shadow-soft hover:shadow-card transition-all">
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
        aria-expanded={isExpanded}
      >
        <div className="min-w-0">
          <p className="text-gold tracking-[0.35em] uppercase text-xs mb-2">{item.year}</p>
          <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-2">{item.title}</h3>
          <p className="text-muted-foreground">{item.summary}</p>
        </div>

        <span
          className={[
            "shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full border border-border/70 bg-background/40 transition-transform",
            isExpanded ? "rotate-180" : "rotate-0",
          ].join(" ")}
          aria-hidden="true"
        >
          <ChevronDown className="w-5 h-5 text-gold" />
        </span>
      </button>

      {/* Conteúdo (accordion) */}
      <div
        className={[
          "grid transition-all duration-500 ease-out",
          isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6">
            <p className="text-foreground/90 leading-relaxed mb-5">{item.details}</p>

            <div className="flex items-center gap-2 mb-3">
              <Images className="w-4 h-4 text-gold" />
              <p className="text-sm font-medium text-foreground">Mídias</p>
            </div>

            {/* ✅ Miniaturas maiores e mais “visíveis” */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {item.media.map((m, idx) => (
                <button
                  type="button"
                  key={`${item.year}-${item.title}-${idx}`}
                  onClick={() => onOpenMedia(itemIndex, idx)}
                  className="group text-left rounded-2xl overflow-hidden border border-border/60 bg-background/40 hover:border-gold/40 transition"
                  aria-label="Abrir mídia em tela cheia"
                >
                  <div className="relative aspect-[16/10] bg-black/20">
                    {m.type === "image" ? (
                      <img
                        src={m.src}
                        alt={m.alt ?? ""}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <video
                          src={m.src}
                          poster={m.poster}
                          preload="metadata"
                          className="w-full h-full object-cover bg-black"
                          muted
                        />
                        <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-black/55 border border-white/10 text-white text-xs">
                          <Play className="w-3.5 h-3.5" />
                          Vídeo
                        </div>
                      </>
                    )}

                    {/* overlay “clique para ampliar” */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition">
                      <span className="text-xs text-white/90 px-2 py-1 rounded-full bg-black/55 border border-white/10">
                        Clique para ampliar
                      </span>
                    </div>
                  </div>

                  {m.caption && (
                    <div className="p-3">
                      <p className="text-sm text-foreground/90 line-clamp-2">{m.caption}</p>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
