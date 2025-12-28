import { useEffect, useRef, useState } from "react";
import { Check, Download, Users, Trash2 } from "lucide-react";
import { weddingConfig } from "@/data/config";

interface RSVPEntry {
  id: string;
  name: string;
  email: string;
  guests: number;
  message: string;
  confirmedAt: string;
}

const STORAGE_KEY = "wedding-rsvp-list";

const RSVP = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rsvpList, setRsvpList] = useState<RSVPEntry[]>([]);
  const [showList, setShowList] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

  // Load RSVP list from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setRsvpList(JSON.parse(stored));
      } catch (e) {
        console.error("Error parsing RSVP list:", e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newEntry: RSVPEntry = {
      id: Date.now().toString(),
      name,
      email,
      guests,
      message,
      confirmedAt: new Date().toISOString(),
    };

    const updatedList = [...rsvpList, newEntry];
    setRsvpList(updatedList);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));

    setIsSubmitted(true);
    setName("");
    setEmail("");
    setGuests(1);
    setMessage("");

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const handleDeleteEntry = (id: string) => {
    const updatedList = rsvpList.filter((entry) => entry.id !== id);
    setRsvpList(updatedList);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
  };

  const handleExportJSON = () => {
    const dataStr = JSON.stringify(rsvpList, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `rsvp-${weddingConfig.groomName.toLowerCase()}-${weddingConfig.brideName.toLowerCase()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const totalGuests = rsvpList.reduce((acc, entry) => acc + entry.guests, 0);

  return (
    <section
      id="rsvp"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-hero relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-rose/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-gold/15 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section title */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Confirme sua presença
          </p>
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-foreground mb-4">
            RSVP
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Ficaremos muito felizes com sua presença! Por favor, confirme para que possamos preparar tudo com carinho.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`bg-card rounded-2xl shadow-card p-6 md:p-8 border border-border/50 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {isSubmitted ? (
              <div className="text-center py-8 animate-scale-in">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-2">
                  Presença Confirmada!
                </h3>
                <p className="text-muted-foreground">
                  Obrigado por confirmar. Estamos ansiosos para celebrar com você!
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all text-foreground"
                    placeholder="Seu nome"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all text-foreground"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-2">
                    Número de convidados *
                  </label>
                  <select
                    id="guests"
                    required
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all text-foreground cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "pessoa" : "pessoas"}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all text-foreground resize-none"
                    placeholder="Deixe uma mensagem para os noivos..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-gold text-background font-medium text-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  Confirmar Presença
                </button>
              </div>
            )}
          </form>

          {/* RSVP List toggle (for the couple to check) */}
          {rsvpList.length > 0 && (
            <div
              className={`mt-8 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <button
                onClick={() => setShowList(!showList)}
                className="flex items-center justify-center gap-2 mx-auto text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Users className="w-4 h-4" />
                <span>
                  {showList ? "Ocultar lista" : `Ver confirmações (${rsvpList.length})`}
                </span>
              </button>

              {showList && (
                <div className="mt-6 bg-card rounded-2xl shadow-card p-6 border border-border/50 animate-scale-in">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif text-xl text-foreground">
                      Confirmações ({totalGuests} {totalGuests === 1 ? "pessoa" : "pessoas"})
                    </h3>
                    <button
                      onClick={handleExportJSON}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted hover:bg-muted/80 text-sm transition-colors"
                      title="Exportar como JSON"
                    >
                      <Download className="w-4 h-4" />
                      Exportar
                    </button>
                  </div>

                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {rsvpList.map((entry) => (
                      <div
                        key={entry.id}
                        className="flex items-start justify-between p-3 rounded-lg bg-background border border-border/50"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{entry.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {entry.guests} {entry.guests === 1 ? "pessoa" : "pessoas"}
                            {entry.email && ` • ${entry.email}`}
                          </p>
                          {entry.message && (
                            <p className="text-sm text-muted-foreground mt-1 italic">
                              "{entry.message}"
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => handleDeleteEntry(entry.id)}
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                          title="Remover"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVP;
