import { Gift, giftPlaceholder } from "@/data/gifts";

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

  const imageUrl = gift.image || giftPlaceholder;

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-soft hover-lift border border-border/50 flex flex-col h-full group">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={gift.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = giftPlaceholder;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-serif text-lg text-foreground mb-1.5 leading-tight line-clamp-1">
          {gift.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
          {gift.description}
        </p>

        {/* Price and button */}
        <div className="mt-auto pt-3 border-t border-border/50">
          <p className="text-gold font-semibold text-lg mb-3">
            {formatCurrency(gift.value)}
          </p>
          <button
            onClick={() => onSelect(gift)}
            className="w-full py-2.5 px-4 rounded-lg bg-gradient-gold text-background font-medium text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Ver QR Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
