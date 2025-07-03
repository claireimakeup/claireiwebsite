# Claire Imbrogno Makeup Artist Website

## Overview

This is a professional makeup artist portfolio website for Claire Imbrogno, built as a full-stack web application showcasing her work in beauty, bridal, commercial, and editorial makeup artistry. The application features a modern, elegant design with a comprehensive portfolio gallery, client testimonials, and contact functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API architecture
- **Development**: Hot module replacement with Vite integration

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for production deployment)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Connection**: Neon Database serverless adapter for scalable connections

## Key Components

### Frontend Components
- **Hero Section**: Dynamic image carousel showcasing portfolio highlights
- **Portfolio Gallery**: Category-filtered grid display of makeup work
- **About Section**: Professional biography and expertise showcase
- **Testimonials**: Client feedback carousel with images
- **Contact Form**: Professional inquiry form with validation
- **Blog Section**: Editorial content and insights (structure in place)

### Backend Services
- **Contact API**: Handles form submissions with validation
- **Static Asset Serving**: Optimized image and asset delivery
- **User Management**: Basic user schema for potential future features

### UI Design System
- **Typography**: Custom font stack with Tenor Sans, Times New Roman, and modern alternatives
- **Color Scheme**: Professional black, white, and gray palette with accent colors
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Animations**: Smooth transitions and hover effects for enhanced UX

## Data Flow

1. **Client Request**: User interacts with React frontend
2. **State Management**: TanStack Query manages API state and caching
3. **API Communication**: RESTful API calls to Express backend
4. **Database Operations**: Drizzle ORM handles PostgreSQL interactions
5. **Response Handling**: Type-safe data flow back to React components
6. **UI Updates**: Optimistic updates and error handling via React Query

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for production
- **@sendgrid/mail**: Email service integration for contact forms
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Database ORM with type safety
- **react-hook-form**: Form handling and validation
- **wouter**: Lightweight routing solution

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant management

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production
- **vite**: Frontend build tool and dev server

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20 with TypeScript execution via tsx
- **Database**: PostgreSQL 16 module in Replit environment
- **Hot Reload**: Vite development server with HMR
- **Port Configuration**: Frontend on port 5000, auto-scaling deployment target

### Production Build
- **Frontend Build**: Vite builds React app to `dist/public`
- **Backend Build**: esbuild bundles server code to `dist/index.js`
- **Static Assets**: Express serves built frontend and portfolio images
- **Database**: Neon serverless PostgreSQL with connection pooling

### Deployment Configuration
- **Platform**: Replit autoscale deployment
- **Build Process**: Two-stage build (frontend + backend)
- **Environment Variables**: Database URL and API keys via environment
- **Asset Optimization**: Vite handles code splitting and asset optimization

## Changelog
```
Changelog:
- January 7, 2025. Website prepared for Netlify deployment with custom domain cimakeup.com.au
- January 7, 2025. Contact form configured for Netlify Forms with email notifications
- January 7, 2025. All social media links verified and pointing to current accounts (@claire_imakeup)
- January 7, 2025. SEO optimized with authentic domain and social media references
- January 7, 2025. Added authentic client testimonials from Mirea Martin and Kirby Cuomo
- January 7, 2025. Streamlined portfolio events section and blog posts as requested
- June 24, 2025. Initial setup
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```