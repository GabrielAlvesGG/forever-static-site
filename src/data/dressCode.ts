// ============================================
// DRESS CODE / TRAJES
// Edite as categorias e exemplos abaixo
// ============================================

export interface DressCodeItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface DressCodeCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: DressCodeItem[];
}

export const dressCodeData: DressCodeCategory[] = [
  {
    id: "convidados",
    title: "Convidados",
    subtitle: "Traje Social / Esporte Fino",
    description: "Pedimos que venham com traje social ou esporte fino. Cores claras e tons pastéis são bem-vindos!",
    items: [
      {
        id: 1,
        title: "Vestido Midi",
        description: "Elegante e confortável para a celebração",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
      },
      {
        id: 2,
        title: "Blazer + Calça",
        description: "Combinação clássica e sofisticada",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      },
      {
        id: 3,
        title: "Conjunto Social",
        description: "Feminino e delicado para a ocasião",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=500&fit=crop",
      },
      {
        id: 4,
        title: "Camisa Social",
        description: "Leve e elegante para o evento",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop",
      },
    ],
  },
  {
    id: "padrinhos",
    title: "Padrinhos",
    subtitle: "Traje Social Completo",
    description: "Nossos padrinhos devem usar traje social completo. Para os homens, terno escuro. Para as mulheres, vestido longo ou midi em tons pastéis.",
    items: [
      {
        id: 5,
        title: "Terno Escuro",
        description: "Preto, azul marinho ou cinza chumbo",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
      },
      {
        id: 6,
        title: "Vestido Longo",
        description: "Tons pastéis ou nude, evitar branco",
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop",
      },
      {
        id: 7,
        title: "Gravata + Colete",
        description: "Complementos em tons neutros",
        image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=400&h=500&fit=crop",
      },
      {
        id: 8,
        title: "Vestido Midi Elegante",
        description: "Opção sofisticada para madrinhas",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop",
      },
    ],
  },
];
