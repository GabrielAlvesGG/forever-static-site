import { useEffect, useRef, useState } from "react";
import { Shirt } from "lucide-react";
import { dressCodeData, DressCodeCategory } from "@/data/dressCode";

const DressCodeCard = ({ 
  item, 
  index 
}: { 
  item: { id: number; title: string; description: string; image: string }; 
  index: number;
}) => {
  return (
    <div
      className="group bg-card rounded-xl overflow-hidden shadow-soft border border-border/50 hover-lift"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h4 className="font-serif text-lg text-background font-semibold">
            {item.title}
          </h4>
          <p className="text-background/80 text-sm">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

const DressCodeSection = ({ 
  category, 
  index 
}: { 
  category: DressCodeCategory; 
  index: number;
}) => {
  return (
    <div className="mb-16 last:mb-0">
      {/* Category header */}
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-3">
          {category.subtitle}
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
          {category.title}
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {category.description}
        </p>
      </div>

      {/* Items grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {category.items.map((item, itemIndex) => (
          <DressCodeCard key={item.id} item={item} index={itemIndex} />
        ))}
      </div>
    </div>
  );
};

const DressCode = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id="traje"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-rose/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />

      <div className="container px-4">
        {/* Section title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4 flex items-center justify-center gap-2">
            <Shirt className="w-4 h-4" />
            Dress Code
          </p>
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-foreground mb-4">
            Traje
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Para que todos se sintam confortáveis e elegantes, preparamos algumas sugestões de traje.
          </p>
        </div>

        {/* Dress code categories */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {dressCodeData.map((category, index) => (
            <DressCodeSection key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* Note */}
        <div
          className={`mt-12 p-6 rounded-2xl bg-rose/20 border border-rose-dark/20 max-w-2xl mx-auto text-center transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-foreground/80 text-sm">
            <strong className="text-foreground">Observação:</strong> Pedimos gentilmente que evitem branco, off-white e tons muito claros, 
            pois são reservados para a noiva. Em caso de dúvidas, fale conosco!
          </p>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
