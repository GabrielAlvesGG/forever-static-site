import { useEffect, useRef, useState } from "react";
import {
  Camera,
  Heart,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import preWedding1 from "../img/prewedding-1.jpeg";
import preWedding2 from "../img/prewedding-2.jpeg";
import preWedding3 from "../img/prewedding-3.jpeg";
import preWedding4 from "../img/prewedding-4.jpeg";
import preWedding5 from "../img/prewedding-5.jpeg";
import preWedding6 from "../img/prewedding-6.jpeg";
import preWedding7 from "../img/prewedding-7.jpeg";
import preWedding8 from "../img/prewedding-8.jpeg";
import preWedding9 from "../img/prewedding-9.jpeg";
import preWedding10 from "../img/prewedding-10.jpeg";
import preWedding11 from "../img/prewedding-11.jpeg";
import preWedding12 from "../img/prewedding-12.jpeg";
import preWedding13 from "../img/prewedding-13.jpeg";
import preWedding14 from "../img/prewedding-14.jpeg";
import preWedding15 from "../img/prewedding-15.jpeg";
import preWedding16 from "../img/prewedding-16.jpeg";
import preWedding17 from "../img/prewedding-17.jpeg";

const preWeddingPhotos = [
  { id: 1, src: preWedding1, alt: "Pré-wedding 1" },
  { id: 2, src: preWedding2, alt: "Pré-wedding 2" },
  { id: 3, src: preWedding3, alt: "Pré-wedding 3" },
  { id: 4, src: preWedding4, alt: "Pré-wedding 4" },
  { id: 5, src: preWedding5, alt: "Pré-wedding 5" },
  { id: 6, src: preWedding6, alt: "Pré-wedding 6" },
  { id: 7, src: preWedding7, alt: "Pré-wedding 7" },
  { id: 8, src: preWedding8, alt: "Pré-wedding 8" },
  { id: 9, src: preWedding9, alt: "Pré-wedding 9" },
  { id: 10, src: preWedding10, alt: "Pré-wedding 10" },
  { id: 11, src: preWedding11, alt: "Pré-wedding 11" },
  { id: 12, src: preWedding12, alt: "Pré-wedding 12" },
  { id: 13, src: preWedding13, alt: "Pré-wedding 13" },
  { id: 14, src: preWedding14, alt: "Pré-wedding 14" },
  { id: 15, src: preWedding15, alt: "Pré-wedding 15" },
  { id: 16, src: preWedding16, alt: "Pré-wedding 16" },
  { id: 17, src: preWedding17, alt: "Pré-wedding 17" },
];

const PreWeddingGallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [isGalleryExpanded, setIsGalleryExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openLightbox = (index: number) => {
    setSelectedPhoto(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const goToPrevious = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(
        selectedPhoto === 0 ? preWeddingPhotos.length - 1 : selectedPhoto - 1,
      );
    }
  };

  const goToNext = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(
        selectedPhoto === preWeddingPhotos.length - 1 ? 0 : selectedPhoto + 1,
      );
    }
  };

  const toggleGallery = () => {
    setIsGalleryExpanded((prev) => !prev);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhoto === null) return;
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto]);

  return (
    <section
      id="fotos"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-champagne/30 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-48 h-48 bg-rose/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        <div
          className={`text-center mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Momentos Especiais
          </p>

          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-foreground">
            Pré-Wedding
          </h2>

          <div className="divider-ornament mt-6">
            <Camera className="w-4 h-4 text-gold" />
          </div>

          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            Alguns momentos especiais da nossa sessão de fotos antes do grande
            dia
          </p>
        </div>

        <div
          className={`flex justify-center mb-10 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            type="button"
            onClick={toggleGallery}
            className="inline-flex items-center gap-3 rounded-full border border-gold/30 bg-card px-6 py-3 text-sm sm:text-base text-foreground shadow-sm transition-all duration-300 hover:border-gold/50 hover:shadow-md"
            aria-expanded={isGalleryExpanded}
            aria-controls="prewedding-grid"
          >
            <Camera className="w-4 h-4 text-gold" />
            <span className="font-medium">
              {isGalleryExpanded ? "Minimizar fotos" : "Ver fotos"}
            </span>
            {isGalleryExpanded ? (
              <ChevronUp className="w-4 h-4 text-gold" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gold" />
            )}
          </button>
        </div>

        <div
          id="prewedding-grid"
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            isGalleryExpanded
              ? "max-h-[5000px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto pb-2 transition-all duration-1000 delay-300 ${
              isVisible && isGalleryExpanded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {preWeddingPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className={`group relative aspect-[4/5] overflow-hidden rounded-lg cursor-pointer transition-all duration-500 hover:shadow-xl ${
                  index === 0 ? "md:row-span-2 md:aspect-auto" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          <div
            className={`flex justify-center mt-12 transition-all duration-1000 delay-500 ${
              isVisible && isGalleryExpanded
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
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
      </div>

      <Dialog open={selectedPhoto !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-foreground/95 border-none overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/20 text-background hover:bg-background/40 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={goToPrevious}
              className="absolute left-4 z-50 p-2 rounded-full bg-background/20 text-background hover:bg-background/40 transition-colors"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 z-50 p-2 rounded-full bg-background/20 text-background hover:bg-background/40 transition-colors"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {selectedPhoto !== null && (
              <img
                src={preWeddingPhotos[selectedPhoto].src}
                alt={preWeddingPhotos[selectedPhoto].alt}
                className="max-w-full max-h-[90vh] object-contain"
              />
            )}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/20 text-background text-sm">
              {selectedPhoto !== null &&
                `${selectedPhoto + 1} / ${preWeddingPhotos.length}`}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PreWeddingGallery;
