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
  { id: 1, name: "Jantar Romântico", description: "Um jantar especial à luz de velas durante a lua de mel", value: 250, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop" },
  { id: 2, name: "Passeio de Barco", description: "Navegando por águas cristalinas ao pôr do sol", value: 350, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop" },
  { id: 3, name: "Diária no Hotel", description: "Uma noite em um hotel aconchegante", value: 500, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop" },
  { id: 4, name: "Passagem Aérea", description: "Contribuição para os voos da viagem", value: 800, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop" },
  { id: 5, name: "Spa para Casal", description: "Momento de relaxamento a dois", value: 400, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop" },
  { id: 6, name: "City Tour", description: "Conhecendo os pontos turísticos", value: 200, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop" },
  { id: 7, name: "Mergulho com Snorkel", description: "Explorando a vida marinha juntos", value: 300, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400&h=300&fit=crop" },
  { id: 8, name: "Café da Manhã na Cama", description: "Acordar com um delicioso café especial", value: 100, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop" },
  { id: 9, name: "Aluguel de Carro", description: "Liberdade para explorar a região", value: 450, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop" },
  { id: 10, name: "Upgrade de Quarto", description: "Suite com vista para o mar", value: 600, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop" },
  { id: 11, name: "Trilha Ecológica", description: "Aventura em meio à natureza", value: 180, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop" },
  { id: 12, name: "Aula de Culinária Local", description: "Aprendendo receitas típicas juntos", value: 280, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop" },
  { id: 13, name: "Piquenique na Praia", description: "Momento romântico à beira-mar", value: 150, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop" },
  { id: 14, name: "Passeio de Helicóptero", description: "Vista panorâmica inesquecível", value: 1200, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=400&h=300&fit=crop" },
  { id: 15, name: "Noite em Bangalô", description: "Hospedagem exclusiva sobre as águas", value: 900, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=300&fit=crop" },
  { id: 16, name: "Degustação de Vinhos", description: "Provando rótulos especiais", value: 320, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop" },
  { id: 17, name: "Passeio de Bicicleta", description: "Explorando paisagens de bike", value: 120, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?w=400&h=300&fit=crop" },
  { id: 18, name: "Show ao Vivo", description: "Uma noite de música e entretenimento", value: 250, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop" },
  { id: 19, name: "Sessão de Fotos", description: "Registro profissional da viagem", value: 380, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop" },
  { id: 20, name: "Transfer Aeroporto", description: "Transporte confortável e seguro", value: 200, category: "lua-de-mel", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop" },

  // ============================================
  // CASA & COZINHA - Utensílios e eletrodomésticos
  // ============================================
  { id: 21, name: "Jogo de Panelas", description: "Kit completo antiaderente", value: 450, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" },
  { id: 22, name: "Cafeteira Elétrica", description: "Para os cafés de toda manhã", value: 280, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop" },
  { id: 23, name: "Liquidificador", description: "Potente e versátil", value: 200, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&h=300&fit=crop" },
  { id: 24, name: "Air Fryer", description: "Fritadeira sem óleo prática", value: 380, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop" },
  { id: 25, name: "Jogo de Talheres", description: "24 peças em inox", value: 180, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1530018352490-c6eef07fd7e0?w=400&h=300&fit=crop" },
  { id: 26, name: "Jogo de Copos", description: "Conjunto de cristal para ocasiões especiais", value: 150, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=400&h=300&fit=crop" },
  { id: 27, name: "Aparelho de Jantar", description: "Conjunto completo de porcelana", value: 350, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=400&h=300&fit=crop" },
  { id: 28, name: "Torradeira", description: "Café da manhã perfeito", value: 120, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400&h=300&fit=crop" },
  { id: 29, name: "Mixer de Mão", description: "Praticidade na cozinha", value: 180, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&h=300&fit=crop" },
  { id: 30, name: "Batedeira", description: "Para receitas deliciosas", value: 320, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1591261730799-ee4e6c2d16d7?w=400&h=300&fit=crop" },
  { id: 31, name: "Conjunto de Potes", description: "Organização para a cozinha", value: 100, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop" },
  { id: 32, name: "Jogo de Facas", description: "Kit profissional em aço inox", value: 250, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&h=300&fit=crop" },
  { id: 33, name: "Panela de Pressão Elétrica", description: "Praticidade e segurança", value: 420, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=400&h=300&fit=crop" },
  { id: 34, name: "Forno Elétrico", description: "Compacto e eficiente", value: 350, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=300&fit=crop" },
  { id: 35, name: "Jogo de Taças", description: "Para vinhos e espumantes", value: 200, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=400&h=300&fit=crop" },
  { id: 36, name: "Aspirador de Pó", description: "Limpeza rápida e eficiente", value: 380, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=300&fit=crop" },
  { id: 37, name: "Ferro de Passar", description: "Roupas sempre impecáveis", value: 150, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop" },
  { id: 38, name: "Jogo de Toalhas", description: "Kit banho e rosto macio", value: 180, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=400&h=300&fit=crop" },
  { id: 39, name: "Jogo de Cama", description: "Lençóis de algodão egípcio", value: 300, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop" },
  { id: 40, name: "Edredom", description: "Aconchego para noites frias", value: 280, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=400&h=300&fit=crop" },
  { id: 41, name: "Travesseiros", description: "Par de travesseiros de pluma", value: 200, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1592789705501-f9ae4278a9c9?w=400&h=300&fit=crop" },
  { id: 42, name: "Escorredor de Louças", description: "Em inox resistente", value: 80, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" },
  { id: 43, name: "Lixeira Automática", description: "Sensor de movimento", value: 180, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop" },
  { id: 44, name: "Sanduicheira", description: "Lanches rápidos e gostosos", value: 100, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&h=300&fit=crop" },
  { id: 45, name: "Chaleira Elétrica", description: "Água quente em minutos", value: 150, category: "casa-cozinha", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" },

  // ============================================
  // EXPERIÊNCIAS - Momentos especiais
  // ============================================
  { id: 46, name: "Noite de Pizza", description: "Uma pizza artesanal para dois", value: 80, category: "experiencias", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop" },
  { id: 47, name: "Cinema em Casa", description: "Pipoca, doces e um bom filme", value: 60, category: "experiencias", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop" },
  { id: 48, name: "Garrafa de Vinho", description: "Um rótulo especial para celebrar", value: 150, category: "experiencias", image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400&h=300&fit=crop" },
  { id: 49, name: "Café Especial", description: "Grãos selecionados para o casal", value: 50, category: "experiencias", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop" },
  { id: 50, name: "Flores por um Mês", description: "Buquês semanais durante um mês", value: 200, category: "experiencias", image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop" },
  { id: 51, name: "Aula de Dança", description: "Aprendendo a dançar juntos", value: 180, category: "experiencias", image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=400&h=300&fit=crop" },
  { id: 52, name: "Degustação de Queijos", description: "Tábua de queijos artesanais", value: 120, category: "experiencias", image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400&h=300&fit=crop" },
  { id: 53, name: "Massagem Relaxante", description: "Momento de bem-estar", value: 250, category: "experiencias", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop" },
  { id: 54, name: "Assinatura de Streaming", description: "Um ano de filmes e séries", value: 200, category: "experiencias", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop" },
  { id: 55, name: "Jantar Delivery", description: "Comida de restaurante em casa", value: 100, category: "experiencias", image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=300&fit=crop" },
  { id: 56, name: "Kit Churrasco", description: "Carnes nobres e acompanhamentos", value: 180, category: "experiencias", image: "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?w=400&h=300&fit=crop" },
  { id: 57, name: "Cesta de Café da Manhã", description: "Café especial na cama", value: 120, category: "experiencias", image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop" },
  { id: 58, name: "Livros para o Casal", description: "Leituras para compartilhar", value: 80, category: "experiencias", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop" },
  { id: 59, name: "Jogo de Tabuleiro", description: "Noites de diversão em casa", value: 100, category: "experiencias", image: "https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?w=400&h=300&fit=crop" },
  { id: 60, name: "Kit Fondue", description: "Noite romântica com fondue", value: 150, category: "experiencias", image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&h=300&fit=crop" },
  { id: 61, name: "Plantas para a Casa", description: "Verde e vida no novo lar", value: 100, category: "experiencias", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=300&fit=crop" },
  { id: 62, name: "Porta-retratos", description: "Para emoldurar as memórias", value: 80, category: "experiencias", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400&h=300&fit=crop" },
  { id: 63, name: "Velas Aromáticas", description: "Ambiente aconchegante", value: 60, category: "experiencias", image: "https://images.unsplash.com/photo-1602607003908-d1de7e9d1d07?w=400&h=300&fit=crop" },
  { id: 64, name: "Kit Petiscos Gourmet", description: "Delícias para aperitivo", value: 130, category: "experiencias", image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&h=300&fit=crop" },
  { id: 65, name: "Curso Online Juntos", description: "Aprendizado compartilhado", value: 200, category: "experiencias", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop" },

  // ============================================
  // CONTRIBUIÇÃO LIVRE - Valores variados
  // ============================================
  { id: 66, name: "Contribuição de R$50", description: "Cada gesto de carinho conta muito", value: 50, category: "contribuicao", image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop" },
  { id: 67, name: "Contribuição de R$100", description: "Sua presença já é um presente", value: 100, category: "contribuicao", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop" },
  { id: 68, name: "Contribuição de R$200", description: "Gratidão pelo seu carinho", value: 200, category: "contribuicao", image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=300&fit=crop" },
  { id: 69, name: "Contribuição de R$500", description: "Muito obrigado pelo apoio", value: 500, category: "contribuicao", image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=400&h=300&fit=crop" },
  { id: 70, name: "Contribuição Especial", description: "Valor livre para nos presentear", value: 0, category: "contribuicao", image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop" },
];
