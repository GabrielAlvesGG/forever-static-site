// ============================================
// LISTA DE PRESENTES
// Adicione, remova ou edite os presentes abaixo
// ============================================
import freezer from "../img/freezer-presente.png";
import batedeira from "../img/batedeira-presente.png";
import ferro_de_passar from "../img/ferro-de-passar-presente.png";
import frigideira from "../img/frigideira-presente.png";
import armario_noiva from "../img/armario-da-noiva-presente.png";
import moveis_casal from "../img/moveis-para-casa-presente.png";
import aquecedor_presente from "../img/aquecedor-alyrio-presente.png";
import banho_no_alyrio from "../img/banho-no-peixe-presente.png";
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
}

export const categoryLabels: Record<GiftCategory, string> = {
  "lua-de-mel": "🌴 Lua de Mel",
  "casa-cozinha": "🏠 Casa & Cozinha",
  "experiencias": "✨ Experiências",
  "contribuicao": "💝 Contribuição Livre",
};

// Placeholder image for gifts without specific images
export const giftPlaceholder = "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop";

export const gifts: Gift[] = [
  // ============================================
  // LUA DE MEL - Cotinhas e experiências de viagem
  // ============================================
  { id: 1, name: "Jantar Romântico", description: "Um jantar especial à luz de velas durante a lua de mel", value: 450, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop" },
  { id: 2, name: "Diária no Hotel", description: "Uma noite especial para o casal durante a viagem", value: 1600, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop" },
  { id: 3, name: "Passeio Romântico ao Entardecer", description: "Um momento especial para o casal aproveitar juntos durante a viagem", value: 650, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop" },
  { id: 4, name: "City Tour", description: "Conhecendo juntos novos lugares e paisagens", value: 500, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop" },
  { id: 5, name: "Café da Manhã na Cama", description: "Um começo de dia especial durante a viagem", value: 180, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop" },
  { id: 6, name: "Trilha Ecológica", description: "Uma aventura em meio à natureza", value: 320, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop" },
  { id: 7, name: "Jantar Especial na Lua de Mel", description: "Uma experiência inesquecível para celebrar o início dessa nova fase", value: 550, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop" },
  { id: 8, name: "Degustação de Vinhos", description: "Uma experiência romântica para brindar o amor", value: 480, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop" },
  { id: 9, name: "Passeio de Bicicleta", description: "Explorando paisagens inesquecíveis juntos", value: 250, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?w=400&h=300&fit=crop" },
  { id: 10, name: "Sessão de Fotos", description: "Registro especial da nossa lua de mel", value: 1400, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop" },
  { id: 11, name: "Pacote de Passeio para Lua de Mel", description: "Ajude o casal a viver momentos inesquecíveis na viagem", value: 1200, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop" },
  { id: 12, name: "Dia de Spa Relaxante na Lua de Mel", description: "Um momento de descanso e carinho a dois", value: 700, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop" },
  { id: 13, name: "Looks da Moda para Arrasar na Viagem", description: "Contribuição para os looks especiais da lua de mel", value: 900, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=300&fit=crop" },
  { id: 14, name: "Kit de Malas para Lua de Mel", description: "Para viajar com estilo e praticidade", value: 1800, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&h=300&fit=crop" },

  // ============================================
  // CASA & COZINHA - Utensílios, móveis e itens do lar
  // ============================================
  { id: 15, name: "Jogo de Panelas", description: "Kit completo para o começo da nossa vida a dois", value: 1290, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" },
  { id: 16, name: "Cafeteira Elétrica", description: "Para os cafés de toda manhã", value: 650, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop" },
  { id: 17, name: "Liquidificador", description: "Praticidade para o dia a dia do casal", value: 450, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&h=300&fit=crop" },
  { id: 18, name: "Batedeira", description: "Para receitas deliciosas em casa", value: 700, category: "casa-cozinha", image: batedeira },
  { id: 19, name: "Conjunto de Potes", description: "Mais organização para a cozinha", value: 220, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop" },
  { id: 20, name: "Jogo de Facas para Cortes da Marmita", description: "Facas práticas para o preparo das refeições", value: 1200, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&h=300&fit=crop" },
  { id: 21, name: "Forno Elétrico", description: "Compacto e eficiente para o dia a dia", value: 950, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=300&fit=crop" },
  { id: 22, name: "Aspirador de Pó", description: "Mais praticidade para manter a casa em ordem", value: 950, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=300&fit=crop" },
  { id: 23, name: "Ferro de Passar", description: "Para deixar tudo impecável", value: 350, category: "casa-cozinha", image: ferro_de_passar },
  { id: 24, name: "Jogo de Toalhas", description: "Um toque de conforto para o novo lar", value: 350, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=400&h=300&fit=crop" },
  { id: 25, name: "Jogo de Cama", description: "Conforto e carinho para as noites do casal", value: 800, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop" },
  { id: 26, name: "Edredom", description: "Aconchego para noites frias", value: 650, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=400&h=300&fit=crop" },
  { id: 27, name: "Travesseiros", description: "Mais conforto para o descanso do casal", value: 350, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1592789705501-f9ae4278a9c9?w=400&h=300&fit=crop" },
  { id: 28, name: "Lixeira Automática", description: "Mais praticidade para a rotina da casa", value: 420, category: "casa-cozinha", image: lixo_eletrico },
  { id: 29, name: "Sanduicheira", description: "Lanches rápidos e gostosos para dois", value: 220, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&h=300&fit=crop" },
  { id: 30, name: "Chaleira Elétrica", description: "Água quente em minutos para o dia a dia", value: 280, category: "casa-cozinha", image: chaleira_eletrica },
  { id: 31, name: "Jogo de Pratos para Receber Visitas", description: "Para compartilhar momentos especiais com quem amamos", value: 650, category: "casa-cozinha", image: pratos_visitas },
  { id: 32, name: "Jogo de Talheres para Todos Comerem", description: "Talheres para os almoços e jantares em família", value: 300, category: "casa-cozinha", image: talheres },
  { id: 33, name: "Frigideira Nova para Não Grudar o Ovo", description: "Porque toda cozinha merece praticidade e bom humor", value: 240, category: "casa-cozinha", image: frigideira },
  { id: 34, name: "Mini Impressora Portátil para as Fotos do Casamento", description: "Para eternizar lembranças especiais", value: 850, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop" },
  { id: 35, name: "Freezer Novo para Marmita Congelada do Casal", description: "Mais espaço e praticidade para a rotina", value: 4200, category: "casa-cozinha", image: freezer },
  { id: 36, name: "Armário para as Roupas da Noiva", description: "Um cantinho especial para organizar tudo com carinho", value: 2800, category: "casa-cozinha", image: armario_noiva },
  { id: 37, name: "Móveis para a Casa do Casal", description: "Ajude a construir o nosso novo lar", value: 5000, category: "casa-cozinha", image: moveis_casal },

  // ============================================
  // EXPERIÊNCIAS - Presentes criativos e momentos especiais
  // ============================================
  { id: 38, name: "Noite de Pizza", description: "Uma pizza artesanal para dois", value: 180, category: "experiencias", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop" },
  { id: 39, name: "Cinema em Casa", description: "Pipoca, doces e um bom filme", value: 150, category: "experiencias", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop" },
  { id: 40, name: "Garrafa de Vinho", description: "Um rótulo especial para celebrar", value: 250, category: "experiencias", image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400&h=300&fit=crop" },
  { id: 41, name: "Café Especial", description: "Grãos selecionados para o casal", value: 120, category: "experiencias", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop" },
  { id: 42, name: "Noite Especial para os Noivos", description: "Um momento romântico e memorável para o casal", value: 450, category: "experiencias", image:  noite_dos_noivos},
  { id: 43, name: "Degustação de Queijos", description: "Tábua de queijos artesanais para dois", value: 220, category: "experiencias", image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400&h=300&fit=crop" },
  { id: 44, name: "Massagem Relaxante", description: "Um momento de bem-estar para o casal", value: 500, category: "experiencias", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop" },
  { id: 45, name: "Assinatura de Streaming", description: "Um ano de filmes e séries juntos", value: 250, category: "experiencias", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop" },
  { id: 46, name: "Jantar Delivery", description: "Comida de restaurante sem sair de casa", value: 180, category: "experiencias", image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=300&fit=crop" },
  { id: 47, name: "Kit Churrasco", description: "Carnes nobres e acompanhamentos para celebrar", value: 350, category: "experiencias", image: "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?w=400&h=300&fit=crop" },
  { id: 48, name: "Cesta de Café da Manhã", description: "Um café especial para começar o dia", value: 220, category: "experiencias", image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop" },
  { id: 49, name: "Jogo de Tabuleiro", description: "Noites divertidas em casa", value: 180, category: "experiencias", image: "https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?w=400&h=300&fit=crop" },
  { id: 50, name: "Cesta Romântica para Dois", description: "Um presente delicado para um momento especial a dois", value: 280, category: "experiencias", image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop" },
  { id: 51, name: "Livros de Mangá para o Casal", description: "Leituras divertidas para compartilharmos juntos", value: 220, category: "experiencias", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop" },
  { id: 52, name: "Um Aquecedor Novo pro Alyrio", description: "Um presentinho especial para o bem-estar do nosso peixinho", value: 250, category: "experiencias", image: aquecedor_presente },
  { id: 53, name: "Banho para o Nosso Peixe", description: "Um mimo divertido para o Alyrio", value: 120, category: "experiencias", image: banho_no_alyrio },
  { id: 54, name: "Trilogia de Livros que o Noivo Quer", description: "Um presente para alimentar novas leituras", value: 350, category: "experiencias", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop" },
  { id: 55, name: "Mais um Box de Livro para a Noiva", description: "Mais histórias para encantar os dias dela", value: 380, category: "experiencias", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop" },
  { id: 56, name: "Curso de Cozinha para o Casal", description: "Uma experiência deliciosa para vivermos juntos", value: 600, category: "experiencias", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop" },
  { id: 57, name: "Curso de Dança para a Dança dos Noivos", description: "Ajude o casal a brilhar no grande dia", value: 500, category: "experiencias", image: curso_de_danca_noivos },
  { id: 58, name: "Caixa de Som Ambiente para o Peixe", description: "Porque até o Alyrio merece trilha sonora", value: 220, category: "experiencias", image: caixa_de_som_peixe },
  { id: 59, name: "Um Vaso Novo para o Plantonaldo", description: "Um cantinho novo para a nossa plantinha querida", value: 180, category: "experiencias", image: vaso_novo_para_plantonaldo },
  { id: 60, name: "Uma Planta Amiga Nova para a Casa", description: "Mais vida e alegria para o nosso lar", value: 180, category: "experiencias", image: amigo_novo_plantonaldo },
  { id: 61, name: "Mais Excalibur contra Mau-Olhado", description: "Um presente divertido para proteger o lar do casal", value: 150, category: "experiencias", image: mais_plantas_para_casal },
  { id: 62, name: "Um Aquário Maior para o Alyrio", description: "Mais espaço e conforto para o nosso peixinho", value: 650, category: "experiencias", image: aquario_novo_alyrio },
  { id: 63, name: "Tábua Especial para Servir", description: "Um item bonito e útil para receber amigos e família em casa", value: 260, category: "experiencias", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop" },

  // ============================================
  // CONTRIBUIÇÃO LIVRE - Valores variados
  // ============================================
  { id: 64, name: "Contribuição de R$50", description: "Cada gesto de carinho conta muito", value: 50, category: "contribuicao", image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop" },
  { id: 65, name: "Contribuição de R$100", description: "Sua presença já é um presente", value: 100, category: "contribuicao", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop" },
  { id: 66, name: "Contribuição de R$200", description: "Gratidão pelo seu carinho", value: 200, category: "contribuicao", image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=300&fit=crop" },
  { id: 67, name: "Contribuição de R$500", description: "Muito obrigado pelo apoio", value: 500, category: "contribuicao", image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=400&h=300&fit=crop" },
  { id: 68, name: "Cota Lua de Mel", description: "Contribuição livre para momentos especiais da nossa viagem", value: 500, category: "contribuicao", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop" },
  { id: 69, name: "Contribuição Especial", description: "Valor livre para nos presentear", value: 0, category: "contribuicao", image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop" },
];