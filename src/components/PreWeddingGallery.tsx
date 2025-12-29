import { useEffect, useRef, useState } from "react";
import { Camera, Heart, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Adicione aqui as URLs das suas fotos de pré-wedding
// Exemplo: import foto1 from "@/assets/prewedding/foto1.jpg";
const preWeddingPhotos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Foto do casal 1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    alt: "Foto do casal 2",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&q=80",
    alt: "Foto do casal 3",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
    alt: "Foto do casal 4",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800&q=80",
    alt: "Foto do casal 5",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80",
    alt: "Foto do casal 6",
  },
];

const PreWeddingGallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
        selectedPhoto === 0 ? preWeddingPhotos.length - 1 : selectedPhoto - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(
        selectedPhoto === preWeddingPhotos.length - 1 ? 0 : selectedPhoto + 1
      );
    }
  };

  // Handle keyboard navigation
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
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-champagne/30 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-48 h-48 bg-rose/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Momentos Especiais
          </p>
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-foreground">
            Pré-Wedding
          </h2>

          {/* Decorative divider */}
          <div className="divider-ornament mt-6">
            <Camera className="w-4 h-4 text-gold" />
          </div>

          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            Alguns momentos especiais da nossa sessão de fotos antes do grande dia
          </p>
        </div>

        {/* Photo grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                <Heart className="w-8 h-8 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
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

      {/* Lightbox Modal */}
      <Dialog open={selectedPhoto !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-foreground/95 border-none overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/20 text-background hover:bg-background/40 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
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

            {/* Image */}
            {selectedPhoto !== null && (
              <img
                src={preWeddingPhotos[selectedPhoto].src}
                alt={preWeddingPhotos[selectedPhoto].alt}
                className="max-w-full max-h-[90vh] object-contain"
              />
            )}

            {/* Photo counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/20 text-background text-sm">
              {selectedPhoto !== null && `${selectedPhoto + 1} / ${preWeddingPhotos.length}`}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PreWeddingGallery;
