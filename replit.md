# HoloBiz - Voice-Driven AI CFO for Bangladeshi SMEs

## Overview

HoloBiz is a voice-first financial intelligence platform designed specifically for Bangladesh's 7.8 million SMEs. The application enables business owners to interact with an AI-powered CFO using natural language (Bangla, Banglish, or English) to receive real-time financial insights, compliance guidance, export readiness advice, and business predictions. The platform addresses critical challenges faced by Bangladeshi SMEs including low financial literacy, limited access to credit, regulatory complexity, and minimal data-driven decision making.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & UI Library**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing instead of React Router
- **shadcn/ui** component library built on Radix UI primitives for accessible, customizable UI components
- **Tailwind CSS** for utility-first styling with custom design system variables

**Design System**
- Custom color palette reflecting fintech trust (Deep Blue #1A73E8) and AI innovation (Purple #7C4DFF)
- Glassmorphism visual style with frosted glass effects and soft gradients
- Typography system using Poppins for headings and Inter/Roboto for body text
- Responsive grid layouts with mobile-first approach

**State Management**
- **TanStack Query (React Query)** for server state management, caching, and data synchronization
- Local component state using React hooks for UI interactions
- Form state managed by **React Hook Form** with **Zod** schema validation

**Animation & Interactivity**
- **Framer Motion** for declarative animations on voice waves, chat bubbles, and page transitions
- Custom VoiceWave component with synchronized animation bars for voice input visualization
- Smooth scroll and hover effects aligned with glassmorphism aesthetic

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for the HTTP server layer
- Custom middleware for request logging, JSON parsing, and raw body preservation
- RESTful API design with `/api` prefix for all endpoints

**Data Validation**
- **Zod** schemas for runtime type validation on API requests
- Shared schema definitions between client and server via `@shared` path alias
- **drizzle-zod** integration for generating validation schemas from database models

**Development Tools**
- **tsx** for running TypeScript directly in development without compilation
- **esbuild** for production builds with ESM output format
- Vite middleware integration for seamless SSR/SPA development experience

### Database Architecture

**ORM & Query Builder**
- **Drizzle ORM** configured for PostgreSQL dialect
- Type-safe query building with full TypeScript inference
- Schema definition in `shared/schema.ts` for shared types across stack
- **Neon Database Serverless** driver (`@neondatabase/serverless`) for connection pooling

**Schema Design**
- `contactSubmissions` table for storing contact form data with fields: id, name, email, phone, message, submittedAt
- UUID-based primary keys for distributed system compatibility
- Timestamp tracking for submission auditing

**Migration Strategy**
- **drizzle-kit** for schema migrations with configuration in `drizzle.config.ts`
- Migrations output to `./migrations` directory
- Environment-based database URL configuration

**Current Implementation Note**
- In-memory storage implementation (`MemStorage`) used for development/prototyping
- Ready for migration to PostgreSQL with minimal code changes (interface-based design)
- Storage interface (`IStorage`) abstracts database operations for easy swapping

### Authentication & Authorization

**Current State**
- No authentication system implemented yet
- Contact submission endpoints are publicly accessible
- Session management dependencies included (`connect-pg-simple`) but not activated

**Planned Implementation**
- Session-based authentication with PostgreSQL session store
- User role management for SME owners, administrators, and analytics viewers

### API Structure

**Contact Management Endpoints**
- `POST /api/contact` - Create new contact submission with validation
- `GET /api/contact/submissions` - Retrieve all contact submissions (admin-only in future)

**Response Format**
- Consistent JSON structure: `{ success: boolean, data?: any, error?: string }`
- HTTP status codes: 200 (success), 400 (validation error), 500 (server error)

**Error Handling**
- Centralized error catching in route handlers
- Zod validation errors surfaced with descriptive messages
- Client-side error boundary for runtime error display

## External Dependencies

### Third-Party UI Components
- **Radix UI** - Headless UI primitives for accessibility (accordion, dialog, dropdown, popover, tooltip, etc.)
- **Lucide React** - Icon library for consistent iconography
- **react-icons** - Additional icon sets (social media icons like WhatsApp)
- **cmdk** - Command palette component for future search/command features
- **embla-carousel-react** - Carousel/slider implementation
- **recharts** - Chart library for financial visualizations and dashboards

### Development & Build Tools
- **@replit/vite-plugin-runtime-error-modal** - Runtime error overlay for development
- **@replit/vite-plugin-cartographer** - Replit-specific development tooling
- **@replit/vite-plugin-dev-banner** - Development environment indicators

### Date & Utility Libraries
- **date-fns** - Date manipulation and formatting
- **clsx** & **tailwind-merge** - Utility for conditional class name joining
- **class-variance-authority** - Type-safe variant management for components
- **nanoid** - Compact unique ID generation

### Database & ORM
- **@neondatabase/serverless** - Neon PostgreSQL serverless driver
- **drizzle-orm** - TypeScript ORM for type-safe database queries
- **drizzle-kit** - Migration and schema management tooling
- **drizzle-zod** - Automatic Zod schema generation from Drizzle schemas

### Fonts
- **Google Fonts** - Poppins (headings) and Inter (body text) loaded via CDN in index.html

### Future AI/ML Integration (Not Yet Implemented)
Based on design documentation, planned integrations include:
- **Whisper/Vosk** - Speech-to-text for Bangla and English voice recognition
- **Fine-tuned LLM** - Custom language model for Bangla-Banglish business context
- **Prophet/LSTM** - Time-series forecasting for cash flow and inventory predictions
- **Python FastAPI** - Planned AI/ML backend service (separate from Express server)
- **MongoDB** - Potential NoSQL database for unstructured AI training data
- **AWS/Google Cloud** - Cloud infrastructure for ML model hosting