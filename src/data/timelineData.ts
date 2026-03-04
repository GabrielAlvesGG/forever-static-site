export type TimelineMedia = {
  type: "image" | "video";
  /** Use caminhos públicos (ex: coloque arquivos em `public/moments/...` e referencie com `/moments/...`) */
  src: string;
  alt?: string;
  /** opcional p/ vídeo */
  poster?: string;
  caption: string;
};

export type TimelineItem = {
  id: string;
  year: string;
  title: string;
  summary: string;
  details: string;
  media: TimelineMedia[];
};

const timelineData: TimelineItem[] = [
  {
    id: "2019-conhecemos",
    year: "2019",
    title: "A gente se conheceu",
    summary: "Um encontro simples que virou o começo de tudo.",
    details:
      "Foi naquele ano que a gente se encontrou e, sem perceber, começou a construir uma história cheia de carinho, parceria e risadas.",
    media: [
      {
        type: "image",
        // preview pública (troque depois por asset local/import)
        src: "https://images.unsplash.com/photo-1520975958225-3f61d2a57d87?auto=format&fit=crop&w=1200&q=80",
        alt: "Café e conversa",
        caption: "Primeiros cafés e conversas longas.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
        alt: "Passeio ao pôr do sol",
        caption: "Um fim de tarde que a gente nunca esquece.",
      },
      {
        type: "video",
        // vídeo CC0 (preview) — substitua pelo seu depois
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        caption: "Um vídeo de prévia (exemplo).",
      },
    ],
  },
  {
    id: "2021-vida-a-dois",
    year: "2021",
    title: "A vida foi virando ‘nós’",
    summary: "Planos, viagens e uma rotina que virou lar.",
    details:
      "Entre pequenas conquistas e sonhos divididos, a gente entendeu que o amor também mora no cotidiano. Foi quando ‘eu’ virou ‘a gente’.",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1521332154212-9e45797b7b4f?auto=format&fit=crop&w=1200&q=80",
        alt: "Viagem",
        caption: "Uma viagem marcante (prévia).",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
        alt: "Rotina a dois",
        caption: "A rotina que virou lar (prévia).",
      },
    ],
  },
  {
    id: "2024-pedido",
    year: "2024",
    title: "O pedido",
    summary: "O ‘sim’ que abriu o nosso para sempre.",
    details:
      "O pedido veio com a certeza tranquila de que é com você. Um passo importante, cheio de emoção, e o início oficial dos preparativos.",
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
        alt: "Celebração",
        caption: "Celebrando esse novo começo (prévia).",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
        alt: "Alianças",
        caption: "Detalhes do nosso ‘sim’ (prévia).",
      },
      {
        type: "video",
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        poster: "https://images.unsplash.com/photo-1520975867597-0f3b23c0b2f7?auto=format&fit=crop&w=1200&q=80",
        caption: "Vídeo de prévia (exemplo).",
      },
    ],
  },
];

export default timelineData;
