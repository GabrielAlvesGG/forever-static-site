import { useEffect, useRef, useState } from "react";
import { MapPin, Navigation, Church, PartyPopper } from "lucide-react";
import { weddingConfig } from "@/data/config";

const Location = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    const element = sectionRef.current;
    if (element) {
      observer.observe(element);
    } else {
      setIsVisible(true);
    }

    return () => observer.disconnect();
  }, []);

  const locations = [
    {
      icon: Church,
      title: "Cerimônia",
      name: weddingConfig.ceremony.name,
      address: weddingConfig.ceremony.address,
      city: weddingConfig.ceremony.city,
      mapsLink: weddingConfig.ceremony.mapsLink,
      wazeLink: weddingConfig.ceremony.wazeLink,
      image:
        "https://cdn.alboompro.com/65277638133b0500017d69a4_672058f29b496e0001b08ab4/medium/willian-machado-produtora-ricardo-hara-produtora-7-studio-k-paroquia-nossa-senhora-do-brasil-guia-de-igrejas.jpg?v=1",
      description:
        weddingConfig.ceremony.description ||
        "Será neste local que celebraremos nossa cerimônia.",
    },
    {
      icon: PartyPopper,
      title: "Recepção",
      name: weddingConfig.reception.name,
      address: weddingConfig.reception.address,
      city: weddingConfig.reception.city,
      mapsLink: weddingConfig.reception.mapsLink,
      wazeLink: weddingConfig.reception.wazeLink,
      image:
        "https://cdn0.casamentos.com.br/vendor/5954/3_2/960/jpg/1_13_435954-172437256987693.jpeg",
      description:
        weddingConfig.reception.description ||
        "Após a cerimônia, esperamos vocês para celebrar conosco na recepção.",
    },
  ];

  return (
    <section
      id="localizacao"
      ref={sectionRef}
      className="py-20 md:py-32 bg-card relative overflow-hidden"
    >
      <div className="container px-4">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Onde será
          </p>
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-foreground mb-4">
            Localização
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Confira os endereços da cerimônia e da recepção para se programar
            com tranquilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={location.title}
              className={`bg-background rounded-2xl shadow-card overflow-hidden border border-border/50 hover-lift transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-rose/50 flex items-center justify-center">
                    <location.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-gold text-sm font-medium uppercase tracking-wider">
                      {location.title}
                    </p>
                    <h3 className="font-serif text-xl text-foreground">
                      {location.name}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  {location.description}
                </p>

                <div className="flex items-start gap-2 mb-6 text-muted-foreground">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p>{location.address}</p>
                    <p>{location.city}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={location.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-gold text-background font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <MapPin className="w-5 h-5" />
                    Google Maps
                  </a>

                  <a
                    href={location.wazeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-gold text-foreground font-medium hover:bg-gold/10 transition-all duration-300"
                  >
                    <Navigation className="w-5 h-5" />
                    Waze
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
