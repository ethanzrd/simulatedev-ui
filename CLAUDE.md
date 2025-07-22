# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Tauri + React + TypeScript application that provides a task management interface with a desktop application wrapper. The project uses modern React patterns with TypeScript, Tailwind CSS for styling, and shadcn/ui components.

## Development Commands

- `pnpm dev` - Start development server on port 1420
- `pnpm build` - Build the application (TypeScript compilation + Vite build)
- `pnpm preview` - Preview the built application
- `pnpm tauri` - Run Tauri-specific commands

For Tauri desktop development:
- The project includes both web and desktop (Tauri) configurations
- Tauri development server runs on port 1420 with HMR on port 1421
- The Tauri backend code is in `src-tauri/` directory

## Architecture

### Frontend Structure
- **Main App**: Single-page application with React Router
- **State Management**: Uses React hooks for local state, TanStack Query for server state
- **Routing**: Browser router with catch-all route for 404 handling
- **UI Components**: Built with shadcn/ui component library and Radix UI primitives

### Key Components
- `Index.tsx` - Main application controller managing screen navigation (login/home/task)
- `LoginScreen.tsx` - Authentication interface
- `HomeScreen.tsx` - Main dashboard with task overview
- `TaskScreen.tsx` - Individual task detail view
- `Sidebar.tsx` - Navigation and task list
- `CommandPalette.tsx` - Keyboard-driven command interface

### Styling System
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **CSS Variables**: HSL color system with theme support
- **Typography**: JetBrains Mono as the monospace font
- **Components**: Pre-built UI components in `src/components/ui/`

### Path Aliases
- `@/` maps to `./src/` for clean imports

## Key Patterns

### Screen Management
The app uses a state-based screen system with three main screens:
- `login` - Initial authentication state
- `home` - Main dashboard
- `task` - Task detail view

### Component Architecture
- Components follow a functional pattern with TypeScript
- UI components are separated into `src/components/ui/` (reusable) and main components
- Form handling uses react-hook-form with zod validation
- Toast notifications via sonner

### Theming
The application supports light/dark themes through:
- CSS custom properties for colors
- `next-themes` for theme management
- Tailwind's dark mode class strategy

## Development Notes

- The project uses pnpm as the package manager
- ESLint configuration is present for code quality
- TypeScript is configured with strict settings
- Vite is the build tool with React SWC plugin for fast compilation
- The lovable-tagger plugin is used in development for component tagging