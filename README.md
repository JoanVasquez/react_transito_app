# Tránsito Higüey App

Interactive traffic education quiz application for Higüey, Dominican Republic. Built with React, TypeScript, and Vite.

## Features

- Interactive traffic knowledge quiz
- Progress tracking and scoring
- Personalized results and recommendations
- Responsive design with Tailwind CSS
- Local storage for user results
- Smooth animations with Framer Motion

## Tech Stack

- React 18 + TypeScript
- Vite for build tooling
- Redux Toolkit for state management
- Tailwind CSS for styling
- Framer Motion for animations
- Recharts for data visualization

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

## Project Structure

- `/src/components` - Reusable UI components
- `/src/pages` - Page components
- `/src/store` - Redux store and slices
- `/src/services` - Business logic services
- `/src/utils` - Utility functions and quiz data
- `/src/hooks` - Custom React hooks
- `/src/context` - React context providers
- `/src/models` - TypeScript type definitions

## Architecture

### Frontend Architecture
- **Component-Based**: Modular React components with TypeScript
- **State Management**: Redux Toolkit for global state
- **Routing**: React Router for navigation
- **Styling**: Tailwind CSS with responsive design
- **Animations**: Framer Motion for smooth transitions

### Key Patterns
- **Custom Hooks**: Encapsulated logic (useQuiz, useSnackbar)
- **Context API**: Theme and notification management
- **Service Layer**: Business logic separation (QuizService)
- **Local Storage**: Persistent user results
- **Type Safety**: Full TypeScript implementation

## Academic Project

Developed by Sarai Rodríguez and Joan Vásquez as a final project for Management Informatics at Universidad Abierta para Adultos (UAPA), under the guidance of Professor Maria Aurellina Agramonte Pimentel.
