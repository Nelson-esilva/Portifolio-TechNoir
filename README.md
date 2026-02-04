# Portfólio Tech-Noir

Portfólio profissional em tema tech-noir (estilo terminal/Matrix) — **Nelson Emeliano** | FullStack Developer & Machine Learning Specialist.

## Sobre o projeto

Site one-page com seções: Hero, Sobre, Skills, Projetos (IA, visão computacional, IoT, MES, etc.) e Contato. Design escuro, animações com GSAP e elementos inspirados em terminal/Matrix.

## Stack

- **React 19** + **TypeScript**
- **Vite 7** — build e dev server
- **Tailwind CSS** — estilos
- **shadcn/ui** (Radix UI) — componentes
- **GSAP** — animações
- **Lucide React** — ícones

## Pré-requisitos

- Node.js 18+
- pnpm (recomendado) ou npm

## Como rodar

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU_USUARIO/portfolio-tech-noir.git
cd portfolio-tech-noir
```

### 2. Entrar na pasta do app e instalar dependências

```bash
cd app
pnpm install
# ou: npm install
```

### 3. Desenvolvimento

```bash
pnpm dev
# ou: npm run dev
```

Abre no navegador em `http://localhost:5173`.

### 4. Build para produção

```bash
pnpm build
# ou: npm run build
```

Artefatos em `app/dist/`. Para preview local:

```bash
pnpm preview
# ou: npm run preview
```

### 5. Lint

```bash
pnpm lint
# ou: npm run lint
```

## Estrutura do repositório

```
.
├── app/                 # Aplicação Vite + React
│   ├── src/
│   │   ├── components/  # Componentes e UI (shadcn)
│   │   ├── sections/    # Hero, About, Skills, Projects, Contact
│   │   ├── hooks/       # Hooks customizados
│   │   └── lib/         # Utilitários
│   ├── public/          # Assets estáticos
│   └── package.json
├── assets/              # Imagens/recursos do projeto
├── README.md
└── .gitignore
```

## Licença

Uso pessoal/portfólio. Para reutilizar layout ou trechos, entre em contato.

---

**Nelson Emeliano** — [LinkedIn](https://linkedin.com/in/nelsonemeliano) | [GitHub](https://github.com/nelsonemeliano)
