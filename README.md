# Kokua Poke - Landing Page

Landing page para Kokua Poke, construída com Eleventy, Nunjucks e SCSS.

## Estrutura do Projeto

```
kokua/
├── src/
│   ├── _includes/         # Templates Nunjucks
│   │   └── base.njk      # Layout base
│   ├── _data/            # Dados JSON
│   │   └── images.json   # Caminhos das imagens locais
│   ├── assets/
│   │   ├── images/       # Imagens do site (baixadas do Figma)
│   │   │   ├── hero/
│   │   │   ├── backgrounds/
│   │   │   ├── sections/
│   │   │   ├── logos/
│   │   │   ├── pokes/
│   │   │   ├── icons/
│   │   │   └── social/
│   │   └── scss/         # Arquivos de estilo
│   │       ├── _variables.scss   # Variáveis (cores, fontes, etc.)
│   │       ├── _base.scss        # Estilos base e reset
│   │       ├── _components.scss  # Componentes da página
│   │       └── main.scss         # Arquivo principal SCSS
│   └── index.njk         # Página principal
├── _site/                # Saída do build (gerado automaticamente)
├── .eleventy.js          # Configuração do Eleventy
└── package.json
```

## Requisitos

- Node.js (versão 14 ou superior)
- npm

## Instalação

As dependências já foram instaladas, mas se necessário:

```bash
npm install
```

## Scripts Disponíveis

### Desenvolvimento
```bash
npm start
```
Inicia o servidor de desenvolvimento com live reload. O site estará disponível em `http://localhost:8080`

### Build de Produção
```bash
npm run build
```
Gera os arquivos estáticos na pasta `_site/`

## Tecnologias Utilizadas

- **Eleventy (11ty)**: Gerador de sites estáticos
- **Nunjucks**: Engine de templates
- **SCSS/Sass**: Pré-processador CSS
- **Google Fonts**: Fontes Afacad e Salo

## Estrutura de Estilos

### Variáveis (_variables.scss)
Define cores, tipografia, breakpoints e espaçamentos utilizados no projeto.

### Base (_base.scss)
Contém reset CSS, estilos base para elementos HTML e classes utilitárias.

### Components (_components.scss)
Todos os componentes específicos da landing page:
- Hero section
- Content sections
- Menu items
- Delivery section
- Footer

## Imagens

Todas as imagens do site foram baixadas do Figma e estão armazenadas localmente em `src/assets/images/`, organizadas por categoria:
- **hero/**: Imagens do hero section
- **backgrounds/**: Fundos decorativos
- **sections/**: Imagens das seções de conteúdo
- **logos/**: Logos e elementos decorativos da marca
- **pokes/**: Fotos dos pratos poke
- **icons/**: Ícones e elementos gráficos
- **social/**: Ícones de redes sociais

As referências às imagens são gerenciadas através do arquivo `src/_data/images.json`.

## Personalização

### Cores
Edite `src/assets/scss/_variables.scss` para alterar as cores do tema:
- `$color-primary`: Verde principal (#007a37)
- `$color-secondary`: Laranja (#ff9a4c)
- `$color-cream`: Creme (#edefb6)

### Layout
Ajuste os componentes em `src/assets/scss/_components.scss`

### Conteúdo
Modifique o conteúdo diretamente em `src/index.njk`

## Responsividade

O site é totalmente responsivo com breakpoints para:
- Mobile: até 480px
- Tablet: 481px a 768px
- Desktop: 769px a 1024px
- Wide: 1025px+

## Deploy

Após executar `npm run build`, os arquivos na pasta `_site/` estão prontos para deploy em qualquer serviço de hospedagem estática (Netlify, Vercel, GitHub Pages, etc.).

## Notas

- As fontes são carregadas via Google Fonts e CDN Fonts
- O SCSS é compilado automaticamente durante o build
- Todas as imagens estão armazenadas localmente e prontas para produção
