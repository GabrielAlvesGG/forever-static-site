// ============================================
// LISTA DE PRESENTES
// Versão final otimizada para arrecadação + entretenimento
// ============================================
import freezer from "../img/freezer-presente.png";
import batedeira from "../img/batedeira-presente.png";
import ferro_de_passar from "../img/ferro-de-passar-presente.png";
import frigideira from "../img/frigideira-presente.png";
import armario_noiva from "../img/armario-da-noiva-presente.png";
import moveis_casal from "../img/moveis-para-casa-presente.png";
import aquecedor_presente from "../img/aquecedor-alyrio-presente.png";
import chaleira_eletrica from "../img/chaleira-eletrica-presente.png";
import talheres from "../img/talheres-elegantes-presentes.png";
import noite_dos_noivos from "../img/noite-dos-noivos-presente.png";
import curso_de_danca_noivos from "../img/curso-de-danca-presente.png";
import caixa_de_som_peixe from "../img/musica-para-peixe-presente.png";
import mais_plantas_para_casal from "../img/mais-plantas-para-casal-presente.png";
import aquario_novo_alyrio from "../img/aquario-novo-alyrio-presente.png";
import lixo_eletrico from "../img/lixo-eletrico-presente.png";
import pratos_visitas from "../img/pratos-para-as-visitas-presente.png";
import vaso_novo_para_plantonaldo from "../img/Um-Vaso-Novo-para-plantonaldo-presente.png";
import amigo_novo_plantonaldo from "../img/um-amigo-novo-presentes.png";
import passeio_de_balao from "../img/passeio-de-balao-presente.png";
import alexa from "../img/alexa-presente.png";
import balanca from "../img/balanca-presente.png";
import jogo_de_panelas from "../img/jogos-de-panela-presente.png";
import cantinho_do_cafe from "../img/cantinho-do-cafe-presente.png";
import arcondicionado from "../img/arcondicionado-presente.png";
import uber from "../img/uber-presente.png";
import terapia_casal from "../img/terapia-de-casal-presente.png";
import cerveja_do_noivo from "../img/cerveja-noivo-presente.png";

export type GiftCategory =
  | "lua-de-mel"
  | "casa-cozinha"
  | "experiencias"
  | "contribuicao";

export interface Gift {
  id: number;
  name: string;
  description: string;
  value: number;
  category: GiftCategory;
  image?: string;
  highlight?: boolean;
  maxQuantity?: number;
}

export const categoryLabels: Record<GiftCategory, string> = {
  "lua-de-mel": "🌴 Lua de Mel",
  "casa-cozinha": "🏠 Casa & Cozinha",
  "experiencias": "✨ Experiências",
  "contribuicao": "💝 Contribuição Livre",
};

export const giftPlaceholder =
  "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop";

export const gifts: Gift[] = [
  // ============================================
  // LUA DE MEL
  // ============================================
  {
    id: 1,
    name: "Espirro em Paris",
    description: "Uma cota charmosa para o projeto da nossa lua de mel internacional",
    value: 250,
    category: "lua-de-mel",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=300&fit=crop",
    maxQuantity: 8,
  },
  {
    id: 2,
    name: "Passeio de Balão para Esquecer a Fatura do Cartão",
    description: "Uma experiência inesquecível para o casal ver tudo do alto e esquecer os boletos por alguns minutos",
    value: 1500,
    category: "lua-de-mel",
    image: passeio_de_balao ,
    highlight: true,
    maxQuantity: 2,
  },
  {
    id: 3,
    name: "Jantar Romântico da Lua de Mel",
    description: "Ajude a patrocinar um jantar daqueles que rendem foto, brinde e lembrança boa",
    value: 850,
    category: "lua-de-mel",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
    maxQuantity: 2,
  },
  {
    id: 4,
    name: "Café da Manhã sem Pressa",
    description: "Um café caprichado para começarmos o dia da lua de mel com muita paz e pouca correria",
    value: 350,
    category: "lua-de-mel",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop",
    maxQuantity: 3,
  },
  {
    id: 5,
    name: "Diária Especial do Casal",
    description: "Uma diária cheia de conforto para curtirmos essa fase do jeito que ela merece",
    value: 2200,
    category: "lua-de-mel",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    highlight: true,
    maxQuantity: 2,
  },
  {
    id: 6,
    name: "Transfer do Casal sem Perrengue",
    description: "Ajude os noivos a irem de um lugar para outro com dignidade, mala e zero estresse",
    value: 420,
    category: "lua-de-mel",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
    maxQuantity: 2,
  },

  // ============================================
  // CASA & COZINHA
  // ============================================
  {
    id: 7,
    name: "Alexa para Ter Mais Alguém para Chamar Toda Hora",
    description: "Uma assistente inteligente para tocar música, responder dúvida e ouvir nossos pedidos aleatórios",
    value: 550,
    category: "casa-cozinha",
    image: alexa ,
    maxQuantity: 2,
  },
  {
    id: 8,
    name: "Cota para o Robô Aspirador Evitar a Fadiga",
    description: "Uma ajuda para automatizar a poeira e preservar a energia do casal",
    value: 1200,
    category: "casa-cozinha",
    image: lixo_eletrico,
    highlight: true,
    maxQuantity: 2,
  },
  {
    id: 9,
    name: "Combo de Controles de TV para Não Ter Briga",
    description: "Um gesto de paz para evitar discussões filosóficas sobre quem mudou de canal",
    value: 250,
    category: "casa-cozinha",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
    maxQuantity: 3,
  },
  {
    id: 10,
    name: "Balança para Acompanhar os Excessos Pós-Casamento",
    description: "Um item útil para acompanhar a saúde e fingir que o fondue não aconteceu",
    value: 350,
    category: "casa-cozinha",
    image: balanca,
    maxQuantity: 2,
  },
  {
    id: 11,
    name: "Jogo de Pratos para Receber Visitas",
    description: "Para servir bem a família, os amigos e quem aparecer na hora do café",
    value: 900,
    category: "casa-cozinha",
    image: pratos_visitas,
    maxQuantity: 2,
  },
  {
    id: 12,
    name: "Jogo de Talheres Elegantes",
    description: "Talheres bonitos para refeições especiais e para o casal se sentir minimamente adulto",
    value: 550,
    category: "casa-cozinha",
    image: talheres,
    maxQuantity: 2,
  },
  {
    id: 13,
    name: "Jogo de Panelas para Testar o Amor na Cozinha",
    description: "O presente ideal para receitas em dupla, bagunça conjunta e pequenas vitórias gastronômicas",
    value: 1800,
    category: "casa-cozinha",
    image: jogo_de_panelas,
    highlight: true,
    maxQuantity: 2,
  },
  {
    id: 14,
    name: "Frigideira Antiaderente para o Ovo Não Grudar e o Humor Também Não",
    description: "Uma frigideira de respeito para o café da manhã render menos estresse e mais dignidade",
    value: 380,
    category: "casa-cozinha",
    image: frigideira,
    maxQuantity: 2,
  },
  {
    id: 15,
    name: "Chaleira Elétrica",
    description: "Para cafés, chás, visitas e qualquer situação em que água quente resolva a vida",
    value: 420,
    category: "casa-cozinha",
    image: chaleira_eletrica,
    maxQuantity: 2,
  },
  {
    id: 16,
    name: "Freezer para as Marmitas da Vida Real",
    description: "Mais espaço para organização, praticidade e planos ambiciosos de alimentação da semana",
    value: 4200,
    category: "casa-cozinha",
    image: freezer,
    highlight: true,
    maxQuantity: 1,
  },
  {
    id: 17,
    name: "Móveis para a Casa do Casal",
    description: "Ajude a transformar o nosso cantinho em um lar bonito, funcional e cheio de história",
    value: 5000,
    category: "casa-cozinha",
    image: moveis_casal,
    highlight: true,
    maxQuantity: 1,
  },
  {
    id: 18,
    name: "Kit Paciência para Dividir o Guarda-Roupa",
    description: "Uma contribuição simbólica para a convivência elegante entre cabides, gavetas e concessões",
    value: 300,
    category: "casa-cozinha",
    image: armario_noiva,
    maxQuantity: 2,
  },
  {
    id: 19,
    name: "Cota da Faxina Terceirizada",
    description: "Porque amar é fácil, mas encarar faxina de sábado nem sempre é",
    value: 500,
    category: "casa-cozinha",
    image: lixo_eletrico,
    maxQuantity: 3,
  },
  {
    id: 20,
    name: "Ajuda para Montar o Cantinho do Café",
    description: "Uma cota para criar o ponto mais estratégico, querido e visitado da casa",
    value: 650,
    category: "casa-cozinha",
    image: cantinho_do_cafe,
    maxQuantity: 2,
  },
  {
    id: 21,
    name: "Fundo da Organização da Casa para Fingir que a Vida Está Sob Controle",
    description: "Ajuda oficial para caixas, cestos, organização e a ilusão de que tudo está no lugar",
    value: 450,
    category: "casa-cozinha",
    image: ferro_de_passar,
    maxQuantity: 2,
  },
  {
    id: 22,
    name: "Cota do Ar-Condicionado para Não Esquentar a Cabeça",
    description: "Um presente estratégico para garantir conforto e discussões em temperatura civilizada",
    value: 1800,
    category: "casa-cozinha",
    image: arcondicionado,
    highlight: true,
    maxQuantity: 2,
  },
  {
    id: 23,
    name: "Cota do Colchão para Dormir Abraçado sem Reclamar",
    description: "Conforto de verdade para noites tranquilas, descansadas e mais românticas",
    value: 2200,
    category: "casa-cozinha",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop",
    highlight: true,
    maxQuantity: 1,
  },

  // ============================================
  // EXPERIÊNCIAS
  // ============================================
  {
    id: 24,
    name: "Vale Netflix para Maratonar Juntos",
    description: "Um empurrão para as sessões infinitas de série, filme, coberta e procrastinação em dupla",
    value: 180,
    category: "experiencias",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop",
    maxQuantity: 3,
  },
  {
    id: 25,
    name: "Uber para Não Pagar Multa de Rodízio",
    description: "Mobilidade inteligente para o casal sair em paz e voltar sem dor no bolso",
    value: 280,
    category: "experiencias",
    image: uber,
    maxQuantity: 3,
  },
  {
    id: 26,
    name: "Primeiro Mês de Jantar do Casal",
    description: "Uma ajuda deliciosa para os nossos primeiros jantares oficiais de casados",
    value: 700,
    category: "experiencias",
    image: noite_dos_noivos,
    maxQuantity: 2,
  },
  {
    id: 27,
    name: "Aluguel de Bebê para Treinamento",
    description: "Uma contribuição bem-humorada para o casal praticar responsabilidade sem garantia de aprovação",
    value: 300,
    category: "experiencias",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&h=300&fit=crop",
    maxQuantity: 2,
  },
  {
    id: 28,
    name: "Vale Terapia para Manter a Sanidade",
    description: "Porque o amor é lindo, mas conversar com profissional continua sendo uma ótima ideia",
    value: 450,
    category: "experiencias",
    image: terapia_casal,
    maxQuantity: 2,
  },
  {
  id: 29,
  name: "Vale Date no Meio da Semana",
  description: "Um empurrão para o casal continuar namorando mesmo com boletos, cansaço e rotina",
  value: 300,
  category: "experiencias",
  image: noite_dos_noivos,
  maxQuantity: 2,
},
  {
    id: 30,
    name: "Patrocine a Cervejinha do Noivo",
    description: "Um presentinho estratégico para manter o bom humor do rapaz em dia",
    value: 220,
    category: "experiencias",
    image: cerveja_do_noivo,
    maxQuantity: 3,
  },
  {
    id: 31,
    name: "Patrocine o Docinho da Noiva",
    description: "Uma contribuição doce para manter o nível de felicidade e açúcar adequados",
    value: 220,
    category: "experiencias",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
    maxQuantity: 3,
  },
  {
    id: 32,
    name: "Vale Churrasco com Vaga Garantida no Próximo",
    description: "Ajude a financiar o churras e ainda entre na lista afetiva dos convidados especiais",
    value: 450,
    category: "experiencias",
    image: "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?w=400&h=300&fit=crop",
    maxQuantity: 3,
  },
  {
    id: 33,
    name: "Um Mês de Aula de Dança para Arrasar no TikTok",
    description: "Uma contribuição oficial para passos melhores, reels mais bonitos e menos vergonha pública",
    value: 850,
    category: "experiencias",
    image: curso_de_danca_noivos,
    maxQuantity: 2,
  },
  {
    id: 34,
    name: "Chá para Aguentar a Ansiedade de Dizer Sim",
    description: "Uma ajudinha para acalmar o coração até o grande dia chegar",
    value: 180,
    category: "experiencias",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
    maxQuantity: 2,
  },
  {
    id: 35,
    name: "Open Engov para o Pós-Festa",
    description: "Investimento sério no bem-estar do dia seguinte e na continuidade da dignidade",
    value: 300,
    category: "experiencias",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
    maxQuantity: 2,
  },
  {
    id: 36,
    name: "Procedimentos Estéticos para o Casal Continuar Lindo",
    description: "Uma cota para manter o brilho, o autocuidado e a autoestima devidamente patrocinados",
    value: 650,
    category: "experiencias",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&h=300&fit=crop",
    maxQuantity: 2,
  },
  {
    id: 37,
    name: "Fundo Emergencial para Delivery",
    description: "Porque existe amor, existe rotina e existem dias em que ninguém vai cozinhar",
    value: 300,
    category: "experiencias",
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=300&fit=crop",
    maxQuantity: 3,
  },
  {
    id: 38,
    name: "Vale Pizza para os Dias de Preguiça",
    description: "Ajuda oficial para as noites em que a solução mais racional é uma pizza grande",
    value: 250,
    category: "experiencias",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
    maxQuantity: 3,
  },
  {
    id: 39,
    name: "Cota da Primeira DR em Ambiente Climatizado",
    description: "Porque a primeira conversa séria merece conforto térmico e alguma elegância",
    value: 320,
    category: "experiencias",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    maxQuantity: 2,
  },
  {
    id: 40,
    name: "Vale Café para Sobreviver à Vida Adulta",
    description: "Cafeína patrocinada para boletos, compromissos e segundas-feiras matrimoniais",
    value: 180,
    category: "experiencias",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop",
    maxQuantity: 3,
  },
  {
    id: 41,
    name: "Assinatura de Streaming para Evitar Conversa Difícil",
    description: "Às vezes o casal só precisa de um bom catálogo e um episódio a mais",
    value: 180,
    category: "experiencias",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop",
    maxQuantity: 3,
  },
  {
    id: 42,
    name: "Vale Hambúrguer Artesanal da Reconciliação",
    description: "Uma forma gourmet de pedir desculpa, voltar às boas e ainda jantar bem",
    value: 260,
    category: "experiencias",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    maxQuantity: 2,
  },
  {
    id: 43,
    name: "Patrocínio do Sorvete Depois da Briga",
    description: "Ajuda doce e gelada para restaurar a paz com certa rapidez",
    value: 160,
    category: "experiencias",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
    maxQuantity: 2,
  },
  {
    id: 44,
    name: "Vale Massagem para Recuperar das Emoções do Casamento",
    description: "Um momento de relaxamento real depois de meses de organização e emoção acumulada",
    value: 550,
    category: "experiencias",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
    maxQuantity: 2,
  },
  {
    id: 45,
    name: "Ajuda para Abastecer o Carro do Amor",
    description: "Uma contribuição para manter os passeios, visitas e dates em funcionamento",
    value: 300,
    category: "experiencias",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
    maxQuantity: 2,
  },
  {
    id: 46,
    name: "Fundo do Mercado do Mês para o Casal Não Viver de Miojo",
    description: "Uma ajuda honesta e muito útil para manter a despensa minimamente respeitável",
    value: 500,
    category: "experiencias",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop",
    maxQuantity: 3,
  },
  {
    id: 47,
    name: "Vale Adega para Brindar a Paciência",
    description: "Uma contribuição para taças, brindes e alguns respiros estratégicos a dois",
    value: 420,
    category: "experiencias",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
    maxQuantity: 2,
  },
  {
    id: 48,
    name: "Kit Fondue para Noites Românticas e Calóricas",
    description: "Porque romance de verdade também envolve queijo, chocolate e pouca culpa",
    value: 350,
    category: "experiencias",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=300&fit=crop",
    maxQuantity: 2,
  },
  {
    id: 49,
    name: "Cota da Marmita Gourmet dos Recém-Casados",
    description: "Uma ajuda elegante para unir praticidade, rotina e alguma pretensão gastronômica",
    value: 300,
    category: "experiencias",
    image: freezer,
    maxQuantity: 2,
  },
  {
    id: 50,
    name: "Vale Sushi da Sexta-Feira",
    description: "Um presente para encerrar a semana com paz, shoyu e felicidade",
    value: 320,
    category: "experiencias",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop",
    maxQuantity: 2,
  },
  {
    id: 51,
    name: "Patrocínio do Date de Domingo",
    description: "Ajude o casal a continuar saindo, namorando e fingindo que não existe segunda-feira",
    value: 420,
    category: "experiencias",
    image: noite_dos_noivos,
    maxQuantity: 2,
  },
  {
    id: 52,
    name: "Reserva Técnica para Imprevistos Matrimoniais",
    description: "Uma contribuição estratégica para o famoso e inevitável 'vai que precisa'",
    value: 250,
    category: "experiencias",
    image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=400&h=300&fit=crop",
    maxQuantity: 2,
  },
  {
    id: 53,
    name: "Vale Spa para Esquecer o Preço da Festa",
    description: "Uma pausa merecida para o casal relaxar, respirar e não abrir a planilha",
    value: 550,
    category: "experiencias",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
    maxQuantity: 2,
  },
  {
    id: 54,
    name: "Vale Gasolina para Manter o Romance em Movimento",
    description: "Uma ajuda carinhosa para o casal continuar colecionando saídas e memórias",
    value: 220,
    category: "experiencias",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
    maxQuantity: 2,
  },

  // ============================================
  // CONTRIBUIÇÃO LIVRE
  // ============================================
  {
    id: 55,
    name: "Aviãozinho de Dinheiro",
    description: "A maneira mais clássica, prática e sempre bem-vinda de ajudar os noivos",
    value: 150,
    category: "contribuicao",
    image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=400&h=300&fit=crop",
    maxQuantity: 6,
  },
  {
    id: 56,
    name: "Ajuda nos Primeiros Meses de Aluguel",
    description: "Uma contribuição importante para começar a vida a dois com mais fôlego",
    value: 1000,
    category: "contribuicao",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
    highlight: true,
    maxQuantity: 3,
  },
  {
    id: 57,
    name: "Dinheiro para a Primeira Compra sem Chorar no Caixa",
    description: "Uma ajuda preciosa para aquele mercado em que a realidade finalmente bate",
    value: 650,
    category: "contribuicao",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop",
    maxQuantity: 3,
  },
  {
    id: 58,
    name: "Contribuição de R$ 200",
    description: "Um gesto cheio de carinho para fortalecer o início da nossa nova fase",
    value: 200,
    category: "contribuicao",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop",
    maxQuantity: 5,
  },
  {
    id: 59,
    name: "Contribuição de R$ 500",
    description: "Uma ajuda especial para projetos, contas e sonhos que já estão em andamento",
    value: 500,
    category: "contribuicao",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop",
    maxQuantity: 4,
  },
  {
    id: 60,
    name: "Contribuição de R$ 1.000",
    description: "Um presente generoso que faz diferença real na construção da nossa vida a dois",
    value: 1000,
    category: "contribuicao",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=300&fit=crop",
    highlight: true,
    maxQuantity: 3,
  },
  {
    id: 61,
    name: "Contribuição de R$ 2.000",
    description: "Uma contribuição premium para nos ajudar de forma marcante nesse começo",
    value: 2000,
    category: "contribuicao",
    image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=400&h=300&fit=crop",
    highlight: true,
    maxQuantity: 2,
  },
   {
    id: 62,
    name: "Mais Proteção Verde contra Mau-Olhado",
    description: "Um toque divertido de proteção, personalidade e decoração para o nosso lar",
    value: 220,
    category: "experiencias",
    image: mais_plantas_para_casal,
    maxQuantity: 1,
  },
 

  // ============================================
  // PERSONALIDADE DO CASAL
  // ============================================
  {
    id: 63,
    name: "Um Aquecedor Novo pro Alyrio",
    description: "Um mimo especial para o bem-estar térmico do nosso peixinho querido",
    value: 450,
    category: "experiencias",
    image: aquecedor_presente,
    maxQuantity: 1,
  },
  {
    id: 64,
    name: "Caixa de Som Ambiente para o Alyrio",
    description: "Porque até o nosso peixe merece uma trilha sonora condizente com sua importância",
    value: 320,
    category: "experiencias",
    image: caixa_de_som_peixe,
    maxQuantity: 1,
  },
  {
    id: 65,
    name: "Um Aquário Maior para o Alyrio",
    description: "Mais espaço, conforto e status para o membro aquático da família",
    value: 950,
    category: "experiencias",
    image: aquario_novo_alyrio,
    maxQuantity: 1,
  },
  {
    id: 66,
    name: "Um Vaso Novo para o Plantonaldo",
    description: "Um novo lar à altura da importância botânica dessa planta querida",
    value: 280,
    category: "experiencias",
    image: vaso_novo_para_plantonaldo,
    maxQuantity: 1,
  },
  {
    id: 67,
    name: "Uma Planta Amiga Nova para a Casa",
    description: "Mais verde, mais charme e mais chances de fingirmos que entendemos de jardinagem",
    value: 250,
    category: "experiencias",
    image: amigo_novo_plantonaldo,
    maxQuantity: 1,
  },
 
   {
    id: 68,
    name: "Contribuição Livre para Qualquer Caos que Surgir com Amor",
    description: "Você escolhe o valor e ajuda os noivos exatamente onde a vida resolver surpreender",
    value: 0,
    category: "contribuicao",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop",
  },
];