# Josh Rouwhorst - Portfolio 2025

Welcome to the portfolio website of **Josh Rouwhorst**, a Senior Software Engineer and Web Developer passionate about creating modern, performant web applications.

## About This Project

This portfolio showcases my professional work, projects, and technical expertise through a clean, responsive design. Built with cutting-edge web technologies to demonstrate modern development practices and attention to detail.

### 🚀 Tech Stack

- **[Next.js 15](https://nextjs.org)** - React framework with App Router
- **[TypeScript](https://typescriptlang.org)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[Google Fonts](https://fonts.google.com)** - Young Serif & Geist font families
- **React Context** - State management for scroll detection

### ✨ Features

- **Responsive Design** - Optimized for all device sizes
- **Adaptive Text** - Text color adapts to background brightness using CSS blend modes
- **Compound Components** - Flexible, reusable component architecture
- **Scroll Detection** - Dynamic navigation styling based on scroll position
- **Performance Optimized** - Font optimization and efficient rendering
- **TypeScript** - Full type safety throughout the application

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/joshrouwhorst/portfolio-2025.git
cd portfolio-2025
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles & Tailwind config
│   ├── layout.tsx      # Root layout with font configuration
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   ├── Hero.tsx       # Hero section
│   ├── Nav.tsx        # Navigation with adaptive styling
│   ├── Project.tsx    # Compound component for projects
│   └── ...
├── hooks/             # Custom React hooks
├── providers/         # Context providers
└── config.ts          # Site configuration
```

## Key Features

### Adaptive Navigation

The navigation bar dynamically adjusts its styling based on scroll position and uses CSS blend modes to ensure text remains readable over varying backgrounds.

### Compound Components

The Project component uses a compound pattern allowing flexible composition:

```tsx
<Project>
  <Project.Title>My Project</Project.Title>
  <Project.Description>Project details...</Project.Description>
  <Project.Link href="/demo">View Demo</Project.Link>
</Project>
```

### Font Optimization

Uses Next.js font optimization with Google Fonts (Young Serif and Geist) for improved performance and visual consistency.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Styling

This project uses Tailwind CSS v4 with the new `@theme` directive for custom design tokens. The configuration is inline within `globals.css` for simplified setup.

## Contact

**Josh Rouwhorst**  
Senior Software Engineer & Web Developer  
[Portfolio](https://joshr.work) • [LinkedIn](https://linkedin.com/in/joshrouwhorst) • [GitHub](https://github.com/joshrouwhorst)
