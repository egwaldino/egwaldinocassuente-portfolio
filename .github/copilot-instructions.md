# AI Coding Guidelines for egwaldinocassuente-portfolio

## Architecture Overview

This is a React portfolio website built with Vite, TypeScript, and Chakra UI. The app structure follows:

- `src/app/` - Main app logic, with `home/` containing page sections organized in subfolders
- `src/components/` - Reusable UI components (ProjectCard, Header, Footer)
- `src/assets/` - Static images and resources
- Path mapping: `@/*` resolves to `./src/*`

The app uses Chakra UI v3 with a simplified provider setup (no color mode switching).

## Key Dependencies & Integrations

- **UI Framework**: Chakra UI with `defaultSystem`
- **Animations**: Framer Motion for transitions and animated carousels
- **Icons**: React Icons (Hi* from heroicons, Fi* from feather, etc.)
- **Hosting**: Firebase Hosting (build output to `dist/`)
- **Build Tool**: Vite with React plugin and tsconfig paths

## Developer Workflows

- **Package Manager**: pnpm (use `pnpm install`, not npm/yarn)
- **Development**: `pnpm dev` starts Vite dev server
- **Build**: `pnpm build` runs TypeScript check then Vite build
- **Lint**: `pnpm lint` runs ESLint on TSX files
- **Preview**: `pnpm preview` serves built app locally
- **Deploy**: `firebase deploy` after building

## Code Conventions

- **Imports**: Use `@/` path alias (e.g., `import { Header } from '@/components/header/Header'`)
- **Components**: Export as named functions with JSX.Element return type annotation
- **Styling**: Chakra UI props directly on components, responsive with `base`/`md` breakpoints
- **Assets**: Import images from `@/assets/` and use in `src` or `bgImage`
- **TypeScript**: Strict mode enabled, use interfaces for props (e.g., `type ProjectCardProps = { ... }`)
- **File Structure**: Components organized in subfolders with data files, sections in `home/` folder with subcomponents

## Component Patterns

- Wrap app in `<Provider>` for Chakra context
- Use `Flex`, `Box`, `Text`, `Heading` from Chakra for layout
- Responsive props: `fontSize={{ base: "xs", md: "sm" }}`
- Gradients: `bgGradient="to-br" gradientFrom="#04071D" gradientTo="#0C0E23"`
- Hover effects: `_hover={{ transform: "translateY(-6px)" }}`
- Animated carousels: Use `motion` from framer-motion with `animate` and `transition` props

## Section Organization

Each major section is organized in its own subfolder with:

- Main component (e.g., `AboutSection.tsx`)
- Subcomponents (e.g., `AboutProfile.tsx`, `AboutSoftSkills.tsx`)
- Data file (e.g., `aboutData.ts`)

## Examples

- Hero section: Background image overlay with Header component
- Project cards: Hover lift animation with tech icon array
- Animated carousels: Testimonials and hard skills sections use framer-motion for scrolling animations

Reference: `src/app/App.tsx` for app structure, `src/components/ProjectCard.tsx` for component patterns.</content>
<parameter name="filePath">c:\Users\egcas\Dev\Portfolio\egwaldinocassuente-portfolio\.github\copilot-instructions.md
