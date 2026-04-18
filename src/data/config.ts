// ============================================
// CONFIGURAÇÕES DO CASAMENTO
// Edite as informações abaixo conforme necessário
// ============================================

export const weddingConfig = {
  // Nomes dos noivos
  groomName: "Gabriel",
  brideName: "Gabriella",

  // Data e hora do casamento (formato: YYYY-MM-DDTHH:MM:SS)
  // Horário em formato 24h, horário de Brasília (UTC-03:00)
  // Inclui o offset para evitar variações de fuso/parse em alguns navegadores.
  weddingDate: "2026-07-18T16:30:00-03:00",

  // Locais da cerimônia e festa
  ceremony: {
    name: "Paróquia Nossa Senhora do Brasil",
    address: "Pça. Nossa Sra. do Brasil, 01 - Jardim América",
    city: "",
    mapsLink:
      "https://www.google.com/maps/place/Paróquia+Nossa+Senhora+do+Brasil/@-23.5693671,-46.6775401,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce577d17e29ce1:0xe2f8d3bf0f569d98!8m2!3d-23.5693672!4d-46.6726745!16s%2Fm%2F0lqfzh0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
    wazeLink:
      "https://waze.com/ul?q=Pça.%20Nossa%20Sra.%20do%20Brasil,%2001%20-%20Jardim%20America,%20São%20Paulo%20-%20SP,%2001438-060&navigate=yes",
    description:
      "Nossa cerimônia será realizada na Paróquia Nossa Senhora do Brasil, em um momento especial de fé e celebração.",
  },

  reception: {
    name: "Bisutti Zero Onze",
    address: "Local da recepção",
    city: "São Paulo - SP",
    mapsLink:
      "https://www.google.com/maps/place/Bisutti+Zero+Onze/@-23.5995426,-46.6854149,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce574c4a1a2e0f:0x58dddf7f3f737f4!8m2!3d-23.5995426!4d-46.6828346!16s%2Fg%2F1ptxgs8p_?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3Dn",
    wazeLink: "https://waze.com/ul?ll=-23.5995426,-46.6828346&navigate=yes",
    description:
      "Após a cerimônia, receberemos nossos convidados para celebrar esse dia tão especial conosco.",
  },

  // Configurações do PIX
  pixOptions: [
    {
      label: "PIX da Noiva",
      key: "+5511954998484",
      recipientName: "Gabriella Simões Apostolou",
      city: "SAO PAULO",
      bank: "Nubank"
    },
    {
      label: "PIX do Noivo",
      key: "+5511949008619",
      recipientName: "GABRIEL ALVES DE OLIVEIRA",
      city: "SAO PAULO",
      bank: "Nubank",
    },

  ],

  // Nossa História - texto emotivo sobre o casal
  ourStory: `Nossa história começou de forma inesperada, pelo Instagram, através de um conhecido em comum. O primeiro encontro, que seria em uma cervejaria, mudou de rumo quando o lugar estava fechado e nos levou até a Vila Madalena, onde tudo começou a fazer sentido entre nós.

Entre conversas, risadas, dança e encontros que vieram depois, fomos construindo uma conexão cada vez mais forte. No Ibirapuera, oficializamos nosso namoro com um anel de coco, escolhido como símbolo do nosso amor e da nossa caminhada juntos.

Anos depois, em 2024, em uma viagem para Monte Verde, no topo da Pedra Redonda, vivemos mais um momento inesquecível: o pedido de casamento. E agora, com o coração cheio de alegria, convidamos vocês para fazer parte do nosso grande dia.`,

  // Mensagem após a data do casamento
  afterWeddingMessage: "Obrigado por fazer parte da nossa história! 💕",

  // Mensagem no dia do casamento
  weddingDayMessage: "Hoje é o grande dia! 💒",
};