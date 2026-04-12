import foto_1_2019 from "../img/1_2019.jpeg";
import foto_2_2019 from "../img/2_2019.jpeg";
import foto_3_2019 from "../img/3_2019.jpeg";
import foto_1_2020_2023 from "../img/2020-2023_1.jpeg";
import foto_2_2020_2023 from "../img/2020-2023_2.jpeg";
import foto_3_2020_2023 from "../img/2020-2023_3.jpeg";
import foto_5_2020_2023 from "../img/2020-2023_5.jpeg";
import foto_4_2020_2023 from "../img/2020-2023_4.jpeg";
import foto_6_2020_2023 from "../img/2020-2023-6.jpeg";
import foto_7_2020_2023 from "../img/2020-2023_7.jpeg";
import foto_1_2024 from "../img/2024-1.jpeg";
import foto_2_2024 from "../img/2024-2.jpeg";
import foto_3_2024 from "../img/2024-3.jpeg";
import foto_4_2024 from "../img/2024-4.jpeg";
import foto_5_2024 from "../img/2024-5.jpeg";
import foto_6_2024 from "../img/2024-6.jpeg";
import foto_7_2024 from "../img/2024-7.jpeg";
import foto_8_2024 from "../img/2024-8.jpeg";
import foto_11_2024 from "../img/2024-11.jpeg";
import video_11_2024 from "../img/2024-video.mp4";

export type TimelineMedia = {
  type: "image" | "video";
  src: string;
  alt?: string;
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
    title: "Como tudo começou",
    summary: "Do Instagram ao Ibirapuera, foi assim que nossa história ganhou forma.",
    details:
      "Nos conhecemos pelo Instagram, através de um conhecido em comum. O primeiro encontro, que seria em uma cervejaria, tomou outro rumo quando o lugar estava fechado, e a noite seguiu na Vila Madalena, onde nossa conexão começou de verdade. Depois de mais alguns encontros, foi no Ibirapuera que oficializamos nosso namoro, com um anel de coco cheio de significado para nós.",
    media: [
      {
        type: "image",
        src: foto_1_2019,
        alt: "Primeiro rolê na Vila Madalena",
        caption: "Noite em que nos conhecemos e dançamos até cansar.",
      },
      {
        type: "image",
        src: foto_3_2019,
        alt: "Momentos do começo",
        caption: "A conexão foi acontecendo de um jeito leve e natural.",
      },
      {
        type: "image",
        src: foto_2_2019,
        alt: "Ibirapuera",
        caption: "No Ibirapuera, oficializamos nosso namoro com um anel de coco.",
      },
    ],
  },
  {
  id: "2020-2023-jornada",
  year: "2020 - 2023",
  title: "Nossa história foi crescendo",
  summary: "Entre risadas, encontros e momentos especiais, fomos construindo o nosso futuro felizes para sempre.",
  details:
    "Com o passar do tempo, fomos vivendo cada fase com leveza, parceria e muito carinho. Entre passeios, comemorações, viagens e memórias inesquecíveis, nosso amor foi amadurecendo de forma natural. Foram anos importantes, cheios de momentos que fortaleceram ainda mais a nossa caminhada juntos.",
  media: [
    {
      type: "image",
      src: foto_7_2020_2023,
      alt: "Momento especial a dois",
      caption: "Entre conversas e brindes, fomos colecionando momentos especiais.",
    },
    {
      type: "image",
      src: foto_3_2020_2023,
      alt: "Primeira vez pegando o buquê",
      caption: "Primeira vez pegando o buquê, o destino já estava mandando sinais.",
    },
    {
      type: "image",
      src: foto_6_2020_2023,
      alt: "Segunda vez pegando o buquê",
      caption: "Segundo buquê, ficou difícil chamar de coincidência.",
    },
    {
      type: "image",
      src: foto_5_2020_2023,
      alt: "Momento em família",
      caption: "Celebrando conquistas e dividindo a alegria de estarmos juntos.",
    },
    {
      type: "image",
      src: foto_2_2020_2023,
      alt: "Momento descontraído do casal",
      caption: "Em cada instante, a leveza e a alegria sempre fizeram parte da nossa história.",
    },
    {
      type: "image",
      src: foto_4_2020_2023,
      alt: "Dia especial na praia",
      caption: "Até nos momentos mais simples, fomos construindo lindas memórias juntos.",
    },
  ],
},
  {
  id: "2024-pedido",
  year: "2024",
  title: "O grande pedido",
  summary: "O “sim” que tornou nosso para sempre ainda mais real.",
  details:
    "Em 2024, durante uma viagem com a família da Gabriella para Monte Verde, vivemos um dos momentos mais emocionantes da nossa história. Em uma trilha até o topo da Pedra Redonda, Gabriel fez o pedido de noivado. Ali, em meio àquela vista especial, demos mais um passo importante na nossa caminhada rumo ao grande dia.",
  media: [
    {
      type: "image",
      src: foto_1_2024,
      alt: "Pedido de noivado",
      caption: "",
    },
    {
      type: "image",
      src: foto_3_2024,
      alt: "Pedido de noivado",
      caption: "O momento em que o nosso para sempre começou a ganhar forma.",
    },
    {
      type: "image",
      src: foto_6_2024,
      alt: "Foto na montanha",
      caption: "Após o pedido, eternizamos a emoção daquele dia em meio à beleza da montanha.",
    },
    {
      type: "image",
      src: foto_2_2024,
      alt: "Registro da data do noivado",
      caption: "Um registro especial do dia em que vivemos um dos capítulos mais marcantes da nossa história.",
    },
    {
      type: "image",
      src: foto_7_2024,
      alt: "Foto no hotel com vista para a montanha",
      caption: "Entre a paisagem e a emoção do momento, guardamos mais uma lembrança do nosso noivado.",
    },
    {
      type: "image",
      src: foto_8_2024,
      alt: "Registro na Fonte do Amor",
      caption: "Na Fonte do Amor, deixamos um símbolo do sentimento que nos trouxe até aqui.",
    },
    {
      type: "image",
      src: foto_11_2024,
      alt: "Foto descontraída do casal",
      caption: "Entre sorrisos e leveza, celebramos a alegria desse novo capítulo da nossa história.",
    }
  ],
},
];

export default timelineData;