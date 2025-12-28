import { useEffect, useRef, useState } from "react";
import { MapPin, Navigation, Church, PartyPopper } from "lucide-react";
import { weddingConfig } from "@/data/config";

const Location = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
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
    },
    {
      icon: PartyPopper,
      title: "Recepção",
      name: weddingConfig.reception.name,
      address: weddingConfig.reception.address,
      city: weddingConfig.reception.city,
      mapsLink: weddingConfig.reception.mapsLink,
      wazeLink: weddingConfig.reception.wazeLink,
    },
  ];

  return (
    <section
      id="localizacao"
      ref={sectionRef}
      className="py-20 md:py-32 bg-card relative overflow-hidden"
    >
      <div className="container px-4">
        {/* Section title */}
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
            Encontre os locais da cerimônia e da festa
          </p>
        </div>

        {/* Location cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={location.title}
              className={`bg-background rounded-2xl shadow-card p-6 md:p-8 border border-border/50 hover-lift transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              {/* Icon and title */}
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

              {/* Address */}
              <div className="flex items-start gap-2 mb-6 text-muted-foreground">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p>{location.address}</p>
                  <p>{location.city}</p>
                </div>
              </div>

              {/* Navigation buttons */}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
