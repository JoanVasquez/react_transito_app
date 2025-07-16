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

- React 18 + TypeScript
- Vite para herramientas de construcción
- Redux Toolkit para manejo de estado
- Tailwind CSS para estilos
- Framer Motion para animaciones
- Recharts para visualización de datos

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
- **Manejo de Estado**: Redux Toolkit para estado global
- **Enrutamiento**: React Router para navegación
- **Estilos**: Tailwind CSS con diseño responsivo
- **Animaciones**: Framer Motion para transiciones suaves

### Patrones Clave
- **Hooks Personalizados**: Lógica encapsulada (useQuiz, useSnackbar)
- **Context API**: Manejo de tema y notificaciones
- **Capa de Servicios**: Separación de lógica de negocio (QuizService)
- **Local Storage**: Resultados persistentes de usuario
- **Seguridad de Tipos**: Implementación completa de TypeScript

## Proyecto Académico

Desarrollado por Sarai Rodríguez y Joan Vásquez como proyecto final de Informática Gerencial en la Universidad Abierta para Adultos (UAPA), bajo la guía de la profesora Maria Aurellina Agramonte Pimentel.
