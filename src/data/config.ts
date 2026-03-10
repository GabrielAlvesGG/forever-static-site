// ============================================
// CONFIGURAÇÕES DO CASAMENTO
// Edite as informações abaixo conforme necessário
// ============================================

export const weddingConfig = {
  // Nomes dos noivos
  groomName: "Gabriel",
  brideName: "Gabriella", // Altere para o nome da noiva

  // Data e hora do casamento (formato: YYYY-MM-DDTHH:MM:SS)
  // Horário em formato 24h, horário de Brasília (UTC-03:00)
  // Inclui o offset para evitar variações de fuso/parse em alguns navegadores.
  weddingDate: "2026-07-18T17:00:00-03:00",

  // Locais da cerimônia e festa
  ceremony: {
    name: "Paróquia Nossa Senhora do Brasil",
    address:
      "Pça. Nossa Sra. do Brasil, 01 - Jardim America, São Paulo - SP, 01438-060",
    city: "São Paulo, SP",
    mapsLink:
      "https://www.google.com/maps/place/Paróquia+Nossa+Senhora+do+Brasil/@-23.5693671,-46.6775401,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce577d17e29ce1:0xe2f8d3bf0f569d98!8m2!3d-23.5693672!4d-46.6726745!16s%2Fm%2F0lqfzh0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
    wazeLink:
      "https://waze.com/ul?q=Pça.%20Nossa%20Sra.%20do%20Brasil,%2001%20-%20Jardim%20America,%20São%20Paulo%20-%20SP,%2001438-060&navigate=yes",
  },
  reception: {
    name: "Espaço Villa Garden",
    address: "Av. das Rosas, 456 - Jardim Primavera",
    city: "São Paulo, SP",
    mapsLink:
      "https://www.google.com/maps/place/Bisutti+Zero+Onze/@-23.5995426,-46.6854149,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce574c4a1a2e0f:0x58dddf7f3f737f4!8m2!3d-23.5995426!4d-46.6828346!16s%2Fg%2F1ptxgs8p_?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3Dn",
    wazeLink: "https://waze.com/ul?ll=-23.5995426,-46.6828346&navigate=yes",
  },

  // Configurações do PIX
  pix: {
    key: "+5511949008619", // Chave PIX (CPF, email, telefone ou aleatória)
    recipientName: "GABRIEL ALVES DE OLIVEIRA", // Nome que aparece no PIX
    city: "SAO PAULO",
    bank: "Nubank", // Opcional
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
