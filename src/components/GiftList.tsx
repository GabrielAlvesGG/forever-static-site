import { useEffect, useRef, useState } from "react";
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { gifts, categoryLabels, Gift, GiftCategory } from "@/data/gifts";
import GiftCard from "./GiftCard";
import GiftModal from "./GiftModal";

type SortOption = "default" | "price-asc" | "price-desc";

const GiftList = () => {
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<GiftCategory | "all">("all");
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    let observer: IntersectionObserver | null = null;
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer?.disconnect();
          observer = null;
        }
      },
      { threshold: 0.1 }
    );

    const element = sectionRef.current;
    if (element) {
      observer.observe(element);
    } else {
      setIsVisible(true);
    }

    return () => observer?.disconnect();
  }, []);

  const handleSelectGift = (gift: Gift) => {
    setSelectedGift(gift);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedGift(null), 300);
  };

  const filteredGifts = gifts
    .filter((gift) => {
      const matchesSearch =
        gift.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        gift.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || gift.category === selectedCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.value - b.value;
      if (sortBy === "price-desc") return b.value - a.value;
      return 0;
    });

  const categories = Object.entries(categoryLabels) as [GiftCategory, string][];

  return (
    <section
      id="presentes"
      ref={sectionRef}
      className="py-20 md:py-32 bg-card relative overflow-hidden"
    >
      <div className="container px-4 max-w-7xl mx-auto">
        {/* Section title */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Lista de Presentes
          </p>
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-foreground mb-4">
            Presentes
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Sua presença é o maior presente, mas se quiser nos presentear, escolha algo especial da nossa lista.
          </p>
        </div>

        {/* Filters */}
        <div
          className={`mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Search and toggle filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar presente..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all text-foreground placeholder:text-muted-foreground"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Toggle filters button (mobile) */}
            <button
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className="sm:hidden flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border hover:border-gold transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filtros</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isFiltersOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Sort (desktop) */}
            <div className="hidden sm:block">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all text-foreground cursor-pointer min-w-[180px]"
              >
                <option value="default">Ordenar por</option>
                <option value="price-asc">Menor preço</option>
                <option value="price-desc">Maior preço</option>
              </select>
            </div>
          </div>

          {/* Category filters and sort (mobile collapsible) */}
          <div className={`space-y-4 ${isFiltersOpen ? "block" : "hidden sm:block"}`}>
            {/* Sort (mobile) */}
            <div className="sm:hidden">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all text-foreground cursor-pointer"
              >
                <option value="default">Ordenar por</option>
                <option value="price-asc">Menor preço</option>
                <option value="price-desc">Maior preço</option>
              </select>
            </div>

            {/* Category buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === "all"
                    ? "bg-gradient-gold text-background"
                    : "bg-background border border-border text-foreground hover:border-gold"
                }`}
              >
                Todos ({gifts.length})
              </button>

              {categories.map(([key, label]) => {
                const count = gifts.filter((g) => g.category === key).length;

                return (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === key
                        ? "bg-gradient-gold text-background"
                        : "bg-background border border-border text-foreground hover:border-gold"
                    }`}
                  >
                    {label} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-muted-foreground mt-4">
            {filteredGifts.length}{" "}
            {filteredGifts.length === 1
              ? "presente encontrado"
              : "presentes encontrados"}
          </p>
        </div>

        {/* Gifts grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8 items-stretch transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {filteredGifts.map((gift, index) => (
            <div
              key={gift.id}
              style={{ animationDelay: `${index * 50}ms` }}
              className="animate-fade-up h-full"
            >
              <GiftCard gift={gift} onSelect={handleSelectGift} />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredGifts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Nenhum presente encontrado com os filtros selecionados.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 text-gold hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>

      {/* Gift Modal */}
      <GiftModal
        gift={selectedGift}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default GiftList;