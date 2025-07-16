# Tránsito Higüey App

Aplicación interactiva de educación vial para Higüey, República Dominicana. Desarrollada con React, TypeScript y Vite.

## Características

- Cuestionario interactivo de conocimientos de tránsito
- Seguimiento de progreso y puntuación
- Resultados personalizados y recomendaciones
- Diseño responsivo con Tailwind CSS
- Almacenamiento local para resultados de usuario
- Animaciones suaves con Framer Motion

## Stack Tecnológico

### Frontend
- **React 18.3+** con TypeScript 5.8+ para desarrollo type-safe
- **Vite 7.0+** como bundler y servidor de desarrollo con HMR
- **Redux Toolkit 2.8+** para manejo de estado global predictible
- **React Router DOM 7.6+** para enrutamiento SPA con HashRouter
- **Tailwind CSS 4.1+** con configuración personalizada y diseño responsivo
- **Framer Motion 12.23+** para animaciones fluidas y transiciones
- **Recharts 3.1+** para gráficos interactivos de resultados

### Herramientas de Desarrollo
- **ESLint 9.30+** con configuración TypeScript y React
- **PostCSS 8.5+** para procesamiento de CSS
- **Autoprefixer** para compatibilidad cross-browser
- **TypeScript ESLint** para análisis estático de código

## Comenzar

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar servidor de desarrollo:
```bash
npm run dev
```

3. Construir para producción:
```bash
npm run build
```

## Scripts Disponibles

- `npm run dev` - Iniciar servidor de desarrollo con recarga automática
- `npm run build` - Construir para producción (compilación TypeScript + construcción Vite)
- `npm run lint` - Ejecutar ESLint para verificaciones de calidad de código
- `npm run preview` - Previsualizar construcción de producción localmente

## Estructura del Proyecto

- `/src/components` - Componentes UI reutilizables
- `/src/pages` - Componentes de páginas
- `/src/store` - Store Redux y slices
- `/src/services` - Servicios de lógica de negocio
- `/src/utils` - Funciones utilitarias y datos del cuestionario
- `/src/hooks` - Hooks personalizados de React
- `/src/context` - Proveedores de contexto de React
- `/src/models` - Definiciones de tipos TypeScript

## Arquitectura

### Arquitectura Frontend
- **Basada en Componentes**: Componentes modulares de React con TypeScript
- **Manejo de Estado**: Redux Toolkit con RTK Query para estado global
- **Enrutamiento**: HashRouter para compatibilidad con GitHub Pages
- **Estilos**: Utility-first CSS con Tailwind y componentes reutilizables
- **Animaciones**: Declarativas con Framer Motion y variants

### Patrones de Diseño Implementados
- **Custom Hooks**: Lógica reutilizable (useQuiz, useSnackbar)
- **Context API**: Providers para tema y notificaciones globales
- **Service Layer**: Separación de lógica de negocio (QuizService)
- **Repository Pattern**: Abstracción de almacenamiento local
- **Observer Pattern**: Redux para cambios de estado reactivos
- **Factory Pattern**: Generación dinámica de componentes de input

### Características Técnicas
- **Type Safety**: Tipado estricto con TypeScript e interfaces
- **Performance**: Lazy loading, React.memo y useMemo optimizations
- **Accessibility**: ARIA labels, semantic HTML y navegación por teclado
- **Responsive Design**: Mobile-first con breakpoints de Tailwind
- **PWA Ready**: Configuración base para Progressive Web App
- **Local Storage**: Persistencia de datos con serialización JSON
- **Error Boundaries**: Manejo robusto de errores en componentes
- **Code Splitting**: Separación automática de bundles con Vite

## Configuración de Desarrollo

### Requisitos del Sistema
- Node.js 18+ o superior
- npm 9+ o yarn 1.22+
- Navegador moderno con soporte ES2022

### Variables de Entorno
```bash
# Opcional: configurar puerto de desarrollo
PORT=3000

# Opcional: configurar base URL para producción
VITE_BASE_URL=/transito-higuey-app/
```

### Comandos de Desarrollo
```bash
# Instalación limpia
npm ci

# Desarrollo con hot reload
npm run dev -- --port 3000

# Build con análisis de bundle
npm run build -- --mode production

# Previsualización local del build
npm run preview -- --port 4173

# Linting con auto-fix
npm run lint -- --fix
```

### Estructura de Archivos de Configuración
```
├── vite.config.ts          # Configuración de Vite
├── tailwind.config.js      # Configuración de Tailwind CSS
├── tsconfig.json          # Configuración principal de TypeScript
├── tsconfig.app.json      # Configuración de TypeScript para la app
├── tsconfig.node.json     # Configuración de TypeScript para Node.js
├── eslint.config.js       # Configuración de ESLint
└── postcss.config.js      # Configuración de PostCSS
```

## Proyecto Académico

Desarrollado por **Sarai Rodríguez** y **Joan Vásquez** como proyecto final de **Informática Gerencial** en la **Universidad Abierta para Adultos (UAPA)**, bajo la guía de la profesora **Maria Aurellina Agramonte Pimentel**.

### Objetivos de Desarrollo Sostenible (ODS)
- **ODS 9**: Innovación mediante soluciones digitales para educación vial
- **ODS 11**: Comunidades seguras y sostenibles a través de ciudadanos responsables
