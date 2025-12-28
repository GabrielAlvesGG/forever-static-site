import { Gift as GiftIcon } from "lucide-react";
import { Gift } from "@/data/gifts";

interface GiftCardProps {
  gift: Gift;
  onSelect: (gift: Gift) => void;
}

const GiftCard = ({ gift, onSelect }: GiftCardProps) => {
  const formatCurrency = (value: number) => {
    if (value === 0) return "Valor livre";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-soft hover-lift border border-border/50 flex flex-col h-full group">
      {/* Icon */}
      <div className="w-12 h-12 rounded-full bg-rose/50 flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors duration-300">
        <GiftIcon className="w-6 h-6 text-gold" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-serif text-xl text-foreground mb-2 leading-tight">
          {gift.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {gift.description}
        </p>
      </div>

      {/* Price and button */}
      <div className="mt-auto pt-4 border-t border-border/50">
        <p className="text-gold font-semibold text-lg mb-3">
          {formatCurrency(gift.value)}
        </p>
        <button
          onClick={() => onSelect(gift)}
          className="w-full py-3 px-4 rounded-lg bg-gradient-gold text-background font-medium text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        >
          Presentear
        </button>
      </div>
    </div>
  );
};

export default GiftCard;
