import { useEffect, useRef, useState } from "react";
import { X, Copy, Check, Gift as GiftIcon, Heart } from "lucide-react";
import { Gift } from "@/data/gifts";
import { weddingConfig } from "@/data/config";

interface GiftModalProps {
  gift: Gift | null;
  isOpen: boolean;
  onClose: () => void;
}

const GiftModal = ({ gift, isOpen, onClose }: GiftModalProps) => {
  const [copied, setCopied] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const formatCurrency = (value: number) => {
    if (value === 0) return "Valor livre";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
      // Focus trap - focus the close button when modal opens
      closeButtonRef.current?.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Handle click outside
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Copy PIX key
  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(weddingConfig.pix.key);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const input = document.createElement("input");
      input.value = weddingConfig.pix.key;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isOpen || !gift) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm animate-fade-in"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="bg-card rounded-2xl shadow-modal w-full max-w-md max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6 pb-4 border-b border-border">
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-rose/50 flex items-center justify-center">
              <GiftIcon className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h2 id="modal-title" className="font-serif text-2xl text-foreground">
                {gift.name}
              </h2>
              <p className="text-gold font-semibold">{formatCurrency(gift.value)}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <p className="text-muted-foreground">{gift.description}</p>

          {/* Thank you message */}
          <div className="flex items-center gap-2 p-4 rounded-xl bg-rose/30 border border-rose-dark/20">
            <Heart className="w-5 h-5 text-rose-dark flex-shrink-0" />
            <p className="text-sm text-foreground/80">
              Sua contribuição será muito especial para nossa nova vida juntos!
            </p>
          </div>

          {/* PIX info */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg text-foreground">Dados do PIX</h3>
            
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Recebedor:</span> {weddingConfig.pix.recipientName}
              </p>
              {weddingConfig.pix.bank && (
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Banco:</span> {weddingConfig.pix.bank}
                </p>
              )}
            </div>

            {/* PIX key copy field */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground font-medium">
                Chave PIX:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  readOnly
                  value={weddingConfig.pix.key}
                  className="flex-1 px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm font-mono"
                  onClick={(e) => (e.target as HTMLInputElement).select()}
                />
                <button
                  onClick={handleCopyPix}
                  className={`px-4 py-3 rounded-lg font-medium text-sm flex items-center gap-2 transition-all duration-300 min-w-[100px] justify-center ${
                    copied
                      ? "bg-green-500 text-background"
                      : "bg-gradient-gold text-background hover:shadow-lg"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copiar
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Value reminder */}
            {gift.value > 0 && (
              <p className="text-sm text-muted-foreground text-center pt-2">
                Valor sugerido: <span className="text-gold font-semibold">{formatCurrency(gift.value)}</span>
              </p>
            )}
          </div>

          {/* Instructions */}
          <div className="p-4 rounded-xl bg-muted/50 border border-border">
            <h4 className="font-medium text-foreground mb-2 text-sm">Como fazer:</h4>
            <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
              <li>Copie a chave PIX acima</li>
              <li>Abra o app do seu banco</li>
              <li>Escolha a opção PIX</li>
              <li>Cole a chave e confirme o valor</li>
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-0">
          <button
            onClick={onClose}
            className="w-full py-3 px-4 rounded-lg border-2 border-gold text-foreground font-medium hover:bg-gold/10 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftModal;
