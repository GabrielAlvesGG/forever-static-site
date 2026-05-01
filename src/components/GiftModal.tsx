import { useEffect, useMemo, useRef, useState } from "react";
import { X, Copy, Check, Heart } from "lucide-react";
import QRCode from "qrcode";
import { Gift, giftPlaceholder } from "@/data/gifts";
import { weddingConfig } from "@/data/config";
import { buildPixPayload } from "@/utils/pix";

interface GiftModalProps {
  gift: Gift | null;
  isOpen: boolean;
  onClose: () => void;
}

type PixOption = {
  label: string;
  key: string;
  recipientName: string;
  city: string;
  bank?: string;
};

const GiftModal = ({ gift, isOpen, onClose }: GiftModalProps) => {
  const [copied, setCopied] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [selectedPixIndex, setSelectedPixIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const pixOptions: PixOption[] = weddingConfig.pixOptions ?? [];

  const selectedPix = pixOptions[selectedPixIndex] ?? pixOptions[0];

  const formatCurrency = (value: number) => {
    if (value === 0) return "Valor livre";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  useEffect(() => {
    setCopied(false);
    setSelectedPixIndex(0);
  }, [gift, isOpen]);

  const pixPayload = useMemo(() => {
    if (!gift || !selectedPix) return "";

    const amount = gift.value > 0 ? gift.value :1;

    return buildPixPayload({
      pixKey: selectedPix.key,
      recipientName: selectedPix.recipientName,
      city: selectedPix.city,
      amount,
      description: `Presente: ${gift.name}`,
      txid: `GIFT${gift.id}`,
    });
  }, [gift, selectedPix]);

  useEffect(() => {
    const generateQrCode = async () => {
      if (!pixPayload || !isOpen) {
        setQrCodeUrl("");
        return;
      }

      try {
        const url = await QRCode.toDataURL(pixPayload, {
          width: 240,
          margin: 2,
        });
        setQrCodeUrl(url);
      } catch (error) {
        console.error("Erro ao gerar QR Code PIX:", error);
        setQrCodeUrl("");
      }
    };

    generateQrCode();
  }, [pixPayload, isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCopyPix = async () => {
    if (!pixPayload) return;

    try {
      await navigator.clipboard.writeText(pixPayload);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const input = document.createElement("input");
      input.value = pixPayload;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isOpen || !gift) return null;

  if (!pixOptions.length) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm animate-fade-in"
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="bg-card rounded-2xl shadow-modal w-full max-w-md p-6">
          <h2 id="modal-title" className="font-serif text-2xl text-foreground">
            Configuração de PIX ausente
          </h2>
          <p className="text-muted-foreground mt-3">
            Nenhuma opção de PIX foi configurada em weddingConfig.pixOptions.
          </p>
          <button
            onClick={onClose}
            className="w-full mt-6 py-3 px-4 rounded-lg border-2 border-gold text-foreground font-medium hover:bg-gold/10 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    );
  }

  const imageUrl = gift.image || giftPlaceholder;

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
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <img
            src={imageUrl}
            alt={gift.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = giftPlaceholder;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 hover:bg-background flex items-center justify-center transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        <div className="px-6 pt-2 pb-4 border-b border-border">
          <h2 id="modal-title" className="font-serif text-2xl text-foreground">
            {gift.name}
          </h2>
          <p className="text-gold font-semibold text-lg">
            {formatCurrency(gift.value)}
          </p>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-muted-foreground">{gift.description}</p>

          <div className="flex items-center gap-2 p-4 rounded-xl bg-rose/30 border border-rose-dark/20">
            <Heart className="w-5 h-5 text-rose-dark flex-shrink-0" />
            <p className="text-sm text-foreground/80">
              Sua contribuição será muito especial para nossa nova vida juntos!
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-lg text-foreground">Escolha para quem enviar</h3>

            <div className="grid grid-cols-2 gap-2">
              {pixOptions.map((option, index) => {
                const isActive = selectedPixIndex === index;

                return (
                  <button
                    key={`${option.label}-${option.key}`}
                    type="button"
                    onClick={() => {
                      setSelectedPixIndex(index);
                      setCopied(false);
                    }}
                    className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                      isActive
                        ? "bg-gradient-gold text-background border-gold shadow-md"
                        : "bg-background text-foreground border-border hover:border-gold/60"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-lg text-foreground">Dados do PIX</h3>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Recebedor:</span>{" "}
                {selectedPix.recipientName}
              </p>

              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Chave:</span>{" "}
                {selectedPix.key}
              </p>

              {selectedPix.bank && (
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Banco:</span>{" "}
                  {selectedPix.bank}
                </p>
              )}
            </div>

            {qrCodeUrl && (
              <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-background p-4">
                <img
                  src={qrCodeUrl}
                  alt={`QR Code PIX para ${gift.name} - ${selectedPix.label}`}
                  className="w-56 h-56 object-contain"
                />
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Escaneie o QR Code no app do banco
                </p>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground font-medium">
                PIX copia e cola:
              </label>

              <textarea
                readOnly
                value={pixPayload}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-xs leading-relaxed resize-none"
                onClick={(e) => (e.target as HTMLTextAreaElement).select()}
              />

              <button
                onClick={handleCopyPix}
                className={`w-full px-4 py-3 rounded-lg font-medium text-sm flex items-center gap-2 transition-all duration-300 justify-center ${
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
                    Copiar código PIX
                  </>
                )}
              </button>
            </div>

            {gift.value > 0 ? (
              <p className="text-sm text-muted-foreground text-center pt-2">
                Valor do presente:{" "}
                <span className="text-gold font-semibold">
                  {formatCurrency(gift.value)}
                </span>
              </p>
            ) : (
              <p className="text-sm text-muted-foreground text-center pt-2">
                Este presente está com{" "}
                <span className="text-gold font-semibold">valor livre</span>. O
                convidado poderá definir o valor no banco.
              </p>
            )}
          </div>

          <div className="p-4 rounded-xl bg-muted/50 border border-border">
            <h4 className="font-medium text-foreground mb-2 text-sm">
              Como fazer:
            </h4>
            <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
              <li>Escolha se deseja presentear no PIX do noivo ou da noiva</li>
              <li>Escaneie o QR Code ou copie o código PIX</li>
              <li>Abra o app do seu banco</li>
              <li>Escolha a opção PIX</li>
              <li>Confirme os dados e finalize o pagamento</li>
            </ol>
          </div>
        </div>

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