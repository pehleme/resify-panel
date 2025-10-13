# Resify - Painel de Reservas

Sistema de gerenciamento de reservas desenvolvido com Next.js 15, TypeScript e Tailwind CSS.

## 🚀 Como rodar localmente

### Pré-requisitos

- Node.js 18+
- pnpm (recomendado) ou npm

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/pehleme/resify-panel.git
cd resify-panel
```

2. Instale as dependências:

```bash
pnpm install
# ou
npm install
```

3. Execute o servidor de desenvolvimento:

```bash
pnpm dev
# ou
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🧪 Como rodar os testes

### Testes unitários e de integração

```bash
pnpm test
# ou
npm run test
```

### Testes E2E

```bash
pnpm test:e2e
# ou
npm run test:e2e
```

### Interface dos testes

```bash
# Vitest UI
pnpm test:ui

# Playwright UI
pnpm test:e2e:ui
```

## 🚀 Deploy

O projeto está configurado para deploy automático na Vercel:

[Resify](https://resify-panel.vercel.app)

## 🛠️ Decisões Técnicas

- **Next.js 15 + App Router**: Aproveitamento das funcionalidades mais recentes do framework
- **React Query**: Gerenciamento de estado servidor com cache inteligente e sincronização
- **Tailwind CSS**: Estilização utilitária para desenvolvimento rápido e consistente
- **MSW**: Mock de API para testes isolados e confiáveis
- **nuqs**: Persistência de filtros via URL para melhor UX

## 📋 Funcionalidades

- ✅ Listagem de reservas com paginação
- ✅ Filtros por ID, nome, companhia aérea e status
- ✅ Detalhes completos da reserva
- ✅ Estados de carregamento, erro e vazio
- ✅ Dark mode
- ✅ Responsivo
- ✅ Acessível (ARIA labels, foco visível)
- ✅ SEO

## 🧪 Cobertura de Testes

- **5 testes unitários** cobrindo serviços e componentes
- **1 teste E2E** cobrindo fluxo principal (lista → detalhe → voltar)
- **MSW** para mock de API nos testes

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── api/               # API Routes
│   └── reservas/          # Páginas de reservas
├── components/            # Componentes reutilizáveis
│   ├── tables/           # Componentes de tabela
│   └── ui/               # Componentes base
├── data/                 # Dados e modelos
├── hooks/                # Hooks customizados
├── lib/                  # Utilitários e configurações
└── services/             # Serviços de API
```

## 🎨 Tecnologias

- **Framework**: Next.js 15
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Estado**: React Query
- **Testes**: Vitest + Testing Library + Playwright
- **Mock**: MSW
- **Deploy**: Vercel

## 📝 Scripts Disponíveis

| Script        | Descrição                   |
| ------------- | --------------------------- |
| pnpm dev      | Servidor de desenvolvimento |
| pnpm build    | Build de produção           |
| pnpm start    | Servidor de produção        |
| pnpm test     | Testes unitários            |
| pnpm test:e2e | Testes E2E                  |
| pnpm lint     | Linter                      |
| pnpm format   | Formatação de código        |
