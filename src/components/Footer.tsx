import { Heart } from "lucide-react";
import { weddingConfig } from "@/data/config";

const Footer = () => {
  const weddingDate = new Date(weddingConfig.weddingDate);
  const year = weddingDate.getFullYear();

  return (
    <footer className="py-12 bg-foreground text-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-rose rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="text-center">
          {/* Names */}
          <h2 className="font-script text-4xl sm:text-5xl mb-4">
            {weddingConfig.groomName}
            <span className="text-gold mx-2">&</span>
            {weddingConfig.brideName}
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-background/30" />
            <Heart className="w-4 h-4 text-gold fill-gold" />
            <div className="h-px w-12 bg-background/30" />
          </div>

          {/* Date */}
          <p className="font-serif text-lg text-background/80 mb-8">
            {weddingDate.toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>

          {/* Message */}
          <p className="text-background/60 text-sm max-w-md mx-auto">
            Obrigado por fazer parte deste momento tão especial em nossas vidas.
            Que o amor sempre guie nossos caminhos.
          </p>

          {/* Copyright */}
          <p className="text-background/40 text-xs mt-8">
            &copy; {year} • Feito com{" "}
            <Heart className="w-3 h-3 inline text-rose fill-rose" /> para nosso grande dia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
