import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Check } from "lucide-react";
import { weddingConfig } from "@/data/config";

const RSVP = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    try {
      await emailjs.send(
        "service_zr8u3fo",
        "template_k8tqyw1",
        {
          name: trimmedName,
          email: trimmedEmail || "Não informado",
          message: trimmedMessage || "Sem mensagem",
          confirmed_at: new Date().toLocaleString("pt-BR"),
          bride_name: weddingConfig.brideName,
          groom_name: weddingConfig.groomName,
        },
        {
          publicKey: "_OYO9BuUsM6R6388u",
        },
      );

      setIsSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Erro ao enviar confirmação:", error);
      setSubmitError(
        "Não foi possível enviar sua confirmação agora. Tente novamente em instantes.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="rsvp"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-hero relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-rose/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-gold/15 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
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
            Ficaremos muito felizes com sua presença! Por favor, confirme para
            que possamos preparar tudo com carinho.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`bg-card rounded-2xl shadow-card p-6 md:p-8 border border-border/50 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
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
                  Obrigado por confirmar. Recebemos sua confirmação com sucesso.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
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

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all text-foreground"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
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

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-gold text-background font-medium text-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Enviando..." : "Confirmar Presença"}
                </button>

                {submitError && (
                  <p className="text-sm text-red-500 text-center">
                    {submitError}
                  </p>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
