# 💒 Site de Casamento - Gabriel & Maria

Site de casamento elegante e moderno, pronto para deploy no GitHub Pages.

![Wedding](https://img.shields.io/badge/Wedding-Site-pink?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-5-purple?style=for-the-badge)

## ✨ Funcionalidades

- 🏠 **Hero** com nomes dos noivos e data
- 📖 **Nossa História** - Seção com texto emotivo sobre o casal
- ⏰ **Contagem Regressiva** - Dias, horas, minutos e segundos até o casamento
- 🎁 **Lista de Presentes** - 70 itens com filtros, busca e ordenação
- 💳 **Modal PIX** - Copiar chave PIX com um clique
- ✉️ **RSVP** - Confirmação de presença salva localmente
- 📍 **Localização** - Links para Google Maps e Waze
- 📱 **100% Responsivo** - Mobile-first design
- 🎨 **Animações Suaves** - Fade-in ao rolar a página

## 🚀 Executar Localmente

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Abrir no navegador
# http://localhost:5173
```

## 📝 Personalização

### Editar Informações do Casamento

Abra o arquivo `src/data/config.ts`:

```typescript
export const weddingConfig = {
  // Nomes dos noivos
  groomName: "Gabriel",
  brideName: "Maria", // ⬅️ Altere aqui

  // Data e hora do casamento
  weddingDate: "2026-06-20T16:00:00", // ⬅️ Altere aqui

  // Locais
  ceremony: {
    name: "Igreja Nossa Senhora das Graças", // ⬅️ Altere aqui
    address: "Rua das Flores, 123",
    // ...
  },

  // Chave PIX
  pix: {
    key: "gabriel.pix@exemplo.com", // ⬅️ Altere aqui
    recipientName: "Gabriel e Maria",
    // ...
  },

  // Nossa História
  ourStory: `Seu texto aqui...`, // ⬅️ Altere aqui
};
```

### Editar Lista de Presentes

Abra o arquivo `src/data/gifts.ts` e adicione, remova ou edite os presentes:

```typescript
export const gifts: Gift[] = [
  {
    id: 1,
    name: "Nome do Presente",
    description: "Descrição curta",
    value: 250, // Valor em reais
    category: "lua-de-mel", // Categoria
  },
  // ...
];
```

**Categorias disponíveis:**
- `lua-de-mel` - Cotinhas de lua de mel
- `casa-cozinha` - Casa e cozinha
- `experiencias` - Experiências simbólicas
- `contribuicao` - Contribuição livre

## 🌐 Deploy no GitHub Pages

### Opção 1: GitHub Actions (Recomendado)

1. **Crie o arquivo de workflow**

   Crie `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: true

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4

         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: npm

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build

         - name: Setup Pages
           uses: actions/configure-pages@v4

         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: dist

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

2. **Configure o repositório**
   - Vá em **Settings > Pages**
   - Em **Source**, selecione **GitHub Actions**

3. **Faça push para a branch main**
   - O deploy será automático!

### Opção 2: Deploy Manual (pasta /docs)

1. **Configure o Vite para build estático**

   Edite `vite.config.ts`:

   ```typescript
   export default defineConfig({
     base: '/nome-do-seu-repositorio/',
     build: {
       outDir: 'docs',
     },
     // ...
   });
   ```

2. **Faça o build**

   ```bash
   npm run build
   ```

3. **Commit e push da pasta docs**

   ```bash
   git add docs
   git commit -m "Build para GitHub Pages"
   git push
   ```

4. **Configure o GitHub Pages**
   - Vá em **Settings > Pages**
   - Em **Source**, selecione **Deploy from a branch**
   - Selecione **main** e a pasta **/docs**

### Após o Deploy

Seu site estará disponível em:
```
https://seu-usuario.github.io/nome-do-repositorio/
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Countdown.tsx      # Contagem regressiva
│   ├── Footer.tsx         # Rodapé
│   ├── GiftCard.tsx       # Card de presente
│   ├── GiftList.tsx       # Lista de presentes + filtros
│   ├── GiftModal.tsx      # Modal com PIX
│   ├── Hero.tsx           # Seção principal
│   ├── Location.tsx       # Localização
│   ├── OurStory.tsx       # Nossa história
│   └── RSVP.tsx           # Confirmação de presença
├── data/
│   ├── config.ts          # ⬅️ Configurações do casamento
│   └── gifts.ts           # ⬅️ Lista de presentes
├── pages/
│   └── Index.tsx          # Página principal
└── index.css              # Estilos e design system
```

## 🎨 Paleta de Cores

| Cor | HSL | Uso |
|-----|-----|-----|
| Off-white | `40 20% 98%` | Background |
| Rosé | `0 25% 85%` | Destaques suaves |
| Bege | `35 40% 92%` | Secundário |
| Dourado | `43 50% 58%` | Acento |

## 📱 Funcionalidades Offline

- ✅ Lista de presentes carrega sem internet
- ✅ RSVP salva em localStorage
- ✅ Exportar confirmações em JSON
- ✅ Countdown funciona offline

## 🔧 Tecnologias

- **React 18** - Interface
- **TypeScript** - Tipagem
- **Vite** - Build
- **Tailwind CSS** - Estilos
- **Lucide React** - Ícones

## 📄 Licença

Este projeto é de uso livre. Customize à vontade para seu casamento! 💕

---

Feito com ❤️ para o grande dia
