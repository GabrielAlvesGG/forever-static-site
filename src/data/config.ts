// ============================================
// CONFIGURAÇÕES DO CASAMENTO
// Edite as informações abaixo conforme necessário
// ============================================

export const weddingConfig = {
  // Nomes dos noivos
  groomName: "Gabriel",
  brideName: "Maria", // Altere para o nome da noiva
  
  // Data e hora do casamento (formato: YYYY-MM-DDTHH:MM:SS)
  // Horário em formato 24h, horário de Brasília
  weddingDate: "2026-06-20T16:00:00",
  
  // Locais da cerimônia e festa
  ceremony: {
    name: "Igreja Nossa Senhora das Graças",
    address: "Rua das Flores, 123 - Centro",
    city: "São Paulo, SP",
    mapsLink: "https://maps.google.com/?q=Igreja+Nossa+Senhora+das+Gracas",
    wazeLink: "https://waze.com/ul?ll=-23.5505,-46.6333&navigate=yes",
  },
  reception: {
    name: "Espaço Villa Garden",
    address: "Av. das Rosas, 456 - Jardim Primavera",
    city: "São Paulo, SP",
    mapsLink: "https://maps.google.com/?q=Espaco+Villa+Garden",
    wazeLink: "https://waze.com/ul?ll=-23.5605,-46.6433&navigate=yes",
  },
  
  // Configurações do PIX
  pix: {
    key: "gabriel.pix@exemplo.com", // Chave PIX (CPF, email, telefone ou aleatória)
    recipientName: "Gabriel e Maria", // Nome que aparece no PIX
    bank: "Banco XYZ", // Opcional
  },
  
  // Nossa História - texto emotivo sobre o casal
  ourStory: `A nossa história começou em uma tarde comum de outono, quando nossos olhares se cruzaram pela primeira vez. O que parecia ser apenas um encontro casual transformou-se em uma conexão profunda e verdadeira.

Entre cafés, longas conversas e risadas compartilhadas, descobrimos que o amor verdadeiro existe e que ele estava ali, esperando por nós dois. Cada momento juntos nos mostrou que éramos feitos um para o outro.

Hoje, depois de tantas memórias construídas, decidimos unir nossas vidas para sempre. E é com o coração transbordando de felicidade que convidamos você para celebrar conosco este dia tão especial.`,

  // Mensagem após a data do casamento
  afterWeddingMessage: "Obrigado por fazer parte da nossa história! 💕",
  
  // Mensagem no dia do casamento
  weddingDayMessage: "Hoje é o grande dia! 💒",
};
