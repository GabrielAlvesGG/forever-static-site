// ============================================
// LISTA DE PRESENTES
// Adicione, remova ou edite os presentes abaixo
// ============================================

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
  icon?: string;
}

export const categoryLabels: Record<GiftCategory, string> = {
  "lua-de-mel": "🌴 Lua de Mel",
  "casa-cozinha": "🏠 Casa & Cozinha",
  "experiencias": "✨ Experiências",
  "contribuicao": "💝 Contribuição Livre",
};

export const gifts: Gift[] = [
  // ============================================
  // LUA DE MEL - Cotinhas e experiências de viagem
  // ============================================
  { id: 1, name: "Jantar Romântico", description: "Um jantar especial à luz de velas durante a lua de mel", value: 250, category: "lua-de-mel" },
  { id: 2, name: "Passeio de Barco", description: "Navegando por águas cristalinas ao pôr do sol", value: 350, category: "lua-de-mel" },
  { id: 3, name: "Diária no Hotel", description: "Uma noite em um hotel aconchegante", value: 500, category: "lua-de-mel" },
  { id: 4, name: "Passagem Aérea", description: "Contribuição para os voos da viagem", value: 800, category: "lua-de-mel" },
  { id: 5, name: "Spa para Casal", description: "Momento de relaxamento a dois", value: 400, category: "lua-de-mel" },
  { id: 6, name: "City Tour", description: "Conhecendo os pontos turísticos", value: 200, category: "lua-de-mel" },
  { id: 7, name: "Mergulho com Snorkel", description: "Explorando a vida marinha juntos", value: 300, category: "lua-de-mel" },
  { id: 8, name: "Café da Manhã na Cama", description: "Acordar com um delicioso café especial", value: 100, category: "lua-de-mel" },
  { id: 9, name: "Aluguel de Carro", description: "Liberdade para explorar a região", value: 450, category: "lua-de-mel" },
  { id: 10, name: "Upgrade de Quarto", description: "Suite com vista para o mar", value: 600, category: "lua-de-mel" },
  { id: 11, name: "Trilha Ecológica", description: "Aventura em meio à natureza", value: 180, category: "lua-de-mel" },
  { id: 12, name: "Aula de Culinária Local", description: "Aprendendo receitas típicas juntos", value: 280, category: "lua-de-mel" },
  { id: 13, name: "Piquenique na Praia", description: "Momento romântico à beira-mar", value: 150, category: "lua-de-mel" },
  { id: 14, name: "Passeio de Helicóptero", description: "Vista panorâmica inesquecível", value: 1200, category: "lua-de-mel" },
  { id: 15, name: "Noite em Bangalô", description: "Hospedagem exclusiva sobre as águas", value: 900, category: "lua-de-mel" },
  { id: 16, name: "Degustação de Vinhos", description: "Provando rótulos especiais", value: 320, category: "lua-de-mel" },
  { id: 17, name: "Passeio de Bicicleta", description: "Explorando paisagens de bike", value: 120, category: "lua-de-mel" },
  { id: 18, name: "Show ao Vivo", description: "Uma noite de música e entretenimento", value: 250, category: "lua-de-mel" },
  { id: 19, name: "Sessão de Fotos", description: "Registro profissional da viagem", value: 380, category: "lua-de-mel" },
  { id: 20, name: "Transfer Aeroporto", description: "Transporte confortável e seguro", value: 200, category: "lua-de-mel" },

  // ============================================
  // CASA & COZINHA - Utensílios e eletrodomésticos
  // ============================================
  { id: 21, name: "Jogo de Panelas", description: "Kit completo antiaderente", value: 450, category: "casa-cozinha" },
  { id: 22, name: "Cafeteira Elétrica", description: "Para os cafés de toda manhã", value: 280, category: "casa-cozinha" },
  { id: 23, name: "Liquidificador", description: "Potente e versátil", value: 200, category: "casa-cozinha" },
  { id: 24, name: "Air Fryer", description: "Fritadeira sem óleo prática", value: 380, category: "casa-cozinha" },
  { id: 25, name: "Jogo de Talheres", description: "24 peças em inox", value: 180, category: "casa-cozinha" },
  { id: 26, name: "Jogo de Copos", description: "Conjunto de cristal para ocasiões especiais", value: 150, category: "casa-cozinha" },
  { id: 27, name: "Aparelho de Jantar", description: "Conjunto completo de porcelana", value: 350, category: "casa-cozinha" },
  { id: 28, name: "Torradeira", description: "Café da manhã perfeito", value: 120, category: "casa-cozinha" },
  { id: 29, name: "Mixer de Mão", description: "Praticidade na cozinha", value: 180, category: "casa-cozinha" },
  { id: 30, name: "Batedeira", description: "Para receitas deliciosas", value: 320, category: "casa-cozinha" },
  { id: 31, name: "Conjunto de Potes", description: "Organização para a cozinha", value: 100, category: "casa-cozinha" },
  { id: 32, name: "Jogo de Facas", description: "Kit profissional em aço inox", value: 250, category: "casa-cozinha" },
  { id: 33, name: "Panela de Pressão Elétrica", description: "Praticidade e segurança", value: 420, category: "casa-cozinha" },
  { id: 34, name: "Forno Elétrico", description: "Compacto e eficiente", value: 350, category: "casa-cozinha" },
  { id: 35, name: "Jogo de Taças", description: "Para vinhos e espumantes", value: 200, category: "casa-cozinha" },
  { id: 36, name: "Aspirador de Pó", description: "Limpeza rápida e eficiente", value: 380, category: "casa-cozinha" },
  { id: 37, name: "Ferro de Passar", description: "Roupas sempre impecáveis", value: 150, category: "casa-cozinha" },
  { id: 38, name: "Jogo de Toalhas", description: "Kit banho e rosto macio", value: 180, category: "casa-cozinha" },
  { id: 39, name: "Jogo de Cama", description: "Lençóis de algodão egípcio", value: 300, category: "casa-cozinha" },
  { id: 40, name: "Edredom", description: "Aconchego para noites frias", value: 280, category: "casa-cozinha" },
  { id: 41, name: "Travesseiros", description: "Par de travesseiros de pluma", value: 200, category: "casa-cozinha" },
  { id: 42, name: "Escorredor de Louças", description: "Em inox resistente", value: 80, category: "casa-cozinha" },
  { id: 43, name: "Lixeira Automática", description: "Sensor de movimento", value: 180, category: "casa-cozinha" },
  { id: 44, name: "Sanduicheira", description: "Lanches rápidos e gostosos", value: 100, category: "casa-cozinha" },
  { id: 45, name: "Chaleira Elétrica", description: "Água quente em minutos", value: 150, category: "casa-cozinha" },

  // ============================================
  // EXPERIÊNCIAS - Momentos especiais
  // ============================================
  { id: 46, name: "Noite de Pizza", description: "Uma pizza artesanal para dois", value: 80, category: "experiencias" },
  { id: 47, name: "Cinema em Casa", description: "Pipoca, doces e um bom filme", value: 60, category: "experiencias" },
  { id: 48, name: "Garrafa de Vinho", description: "Um rótulo especial para celebrar", value: 150, category: "experiencias" },
  { id: 49, name: "Café Especial", description: "Grãos selecionados para o casal", value: 50, category: "experiencias" },
  { id: 50, name: "Flores por um Mês", description: "Buquês semanais durante um mês", value: 200, category: "experiencias" },
  { id: 51, name: "Aula de Dança", description: "Aprendendo a dançar juntos", value: 180, category: "experiencias" },
  { id: 52, name: "Degustação de Queijos", description: "Tábua de queijos artesanais", value: 120, category: "experiencias" },
  { id: 53, name: "Massagem Relaxante", description: "Momento de bem-estar", value: 250, category: "experiencias" },
  { id: 54, name: "Assinatura de Streaming", description: "Um ano de filmes e séries", value: 200, category: "experiencias" },
  { id: 55, name: "Jantar Delivery", description: "Comida de restaurante em casa", value: 100, category: "experiencias" },
  { id: 56, name: "Kit Churrasco", description: "Carnes nobres e acompanhamentos", value: 180, category: "experiencias" },
  { id: 57, name: "Cesta de Café da Manhã", description: "Café especial na cama", value: 120, category: "experiencias" },
  { id: 58, name: "Livros para o Casal", description: "Leituras para compartilhar", value: 80, category: "experiencias" },
  { id: 59, name: "Jogo de Tabuleiro", description: "Noites de diversão em casa", value: 100, category: "experiencias" },
  { id: 60, name: "Kit Fondue", description: "Noite romântica com fondue", value: 150, category: "experiencias" },
  { id: 61, name: "Plantas para a Casa", description: "Verde e vida no novo lar", value: 100, category: "experiencias" },
  { id: 62, name: "Porta-retratos", description: "Para emoldurar as memórias", value: 80, category: "experiencias" },
  { id: 63, name: "Velas Aromáticas", description: "Ambiente aconchegante", value: 60, category: "experiencias" },
  { id: 64, name: "Kit Petiscos Gourmet", description: "Delícias para aperitivo", value: 130, category: "experiencias" },
  { id: 65, name: "Curso Online Juntos", description: "Aprendizado compartilhado", value: 200, category: "experiencias" },

  // ============================================
  // CONTRIBUIÇÃO LIVRE - Valores variados
  // ============================================
  { id: 66, name: "Contribuição de R$50", description: "Cada gesto de carinho conta muito", value: 50, category: "contribuicao" },
  { id: 67, name: "Contribuição de R$100", description: "Sua presença já é um presente", value: 100, category: "contribuicao" },
  { id: 68, name: "Contribuição de R$200", description: "Gratidão pelo seu carinho", value: 200, category: "contribuicao" },
  { id: 69, name: "Contribuição de R$500", description: "Muito obrigado pelo apoio", value: 500, category: "contribuicao" },
  { id: 70, name: "Contribuição Especial", description: "Valor livre para nos presentear", value: 0, category: "contribuicao" },
];
