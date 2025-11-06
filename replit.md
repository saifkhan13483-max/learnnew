# AI No-Code Web Development Course Platform

## Overview

This is a learning management system (LMS) designed to teach AI-powered no-code web development. The platform delivers a structured course with 12 modules covering topics from basic no-code concepts to building various types of websites (static sites, web apps, forums, social platforms, membership sites, and directories) using modern AI tools and agents.

The course content is stored in a static data structure and displayed through an interactive interface featuring a collapsible sidebar navigation, markdown-based lesson content with syntax highlighting, progress tracking, and seamless lesson-to-lesson navigation.

## Recent Changes

**November 6, 2025:**
- Fixed duplicate lesson title display issue: LessonContent component now accepts an optional `lessonTitle` prop and uses useRef to track and skip the first H1 element in markdown content when it matches the lesson title. This prevents double rendering of titles since the Lesson component already displays the title in its header.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool:**
- React with TypeScript for type safety and component-based development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing (alternative to React Router)

**UI Component Strategy:**
- Shadcn/ui component library (Radix UI primitives with custom styling)
- Tailwind CSS for utility-first styling with a custom design system
- CSS variables for theming (light/dark mode support built-in)
- "New York" style variant from Shadcn configuration

**Design System:**
- System-based approach inspired by Notion and Linear
- Custom color palette using HSL values with CSS custom properties
- Elevation system using shadow and opacity layers (elevate-1, elevate-2)
- Typography system with Inter for UI text and JetBrains Mono for code
- Responsive breakpoints for mobile, tablet, and desktop layouts

**State Management:**
- React Query (@tanstack/react-query) for server state and caching
- Local storage for progress tracking (completed lessons)
- React Context for sidebar and UI state management
- No global state management library (Redux/Zustand) - keeping it simple

**Key Layout Components:**
- Collapsible sidebar navigation (280px on desktop, drawer on mobile)
- Module accordion showing all 12 modules with nested lesson lists
- Main content area with 720px max-width for optimal readability
- Breadcrumb navigation and previous/next lesson controls

**Content Rendering:**
- React Markdown for parsing lesson content
- React Syntax Highlighter with One Dark theme for code blocks
- Support for inline code, headings, lists, blockquotes, and tables

### Backend Architecture

**Server Framework:**
- Express.js for HTTP server and API routing
- HTTP server creation for potential WebSocket support
- Custom middleware for request logging and JSON body parsing

**Development Mode:**
- Vite middleware integration for hot module replacement (HMR)
- SSR template rendering in development
- Custom error overlay and dev banner plugins (Replit-specific)

**Production Build:**
- Static file serving from dist/public directory
- esbuild for server-side bundling (ESM format)
- Separate client and server build processes

**Routing Strategy:**
- API routes prefixed with `/api` (currently minimal - storage interface exists but no active endpoints)
- Frontend routes handled by Wouter (/, /module/:moduleId/lesson/:lessonId)
- Fallback to React app for all non-API routes

### Data Storage

**Current Implementation:**
- In-memory storage implementation (MemStorage class)
- Storage interface defined for future database integration
- User schema defined with Drizzle ORM but not actively used
- Course content stored as TypeScript constants in shared/courseData.ts

**Database Configuration (Prepared but Not Active):**
- Drizzle ORM configured for PostgreSQL
- Neon Database serverless driver in dependencies
- Schema location: shared/schema.ts
- Migrations directory configured but not populated
- Connection via DATABASE_URL environment variable

**Data Model:**
- Users table: id (UUID), username (unique), password (hashed)
- Course structure: Module → Lessons hierarchy
- Progress tracking: Stored in browser localStorage as JSON array

**Rationale for Current Approach:**
The course content is static and doesn't require dynamic updates, making a database unnecessary for the core functionality. Progress tracking in localStorage keeps the implementation simple and avoids server-side session management. The database infrastructure is configured for future features like user authentication, collaborative features, or dynamic content management.

### External Dependencies

**UI & Styling:**
- @radix-ui/* (20+ packages): Unstyled, accessible component primitives
- class-variance-authority: Type-safe variant styling
- clsx & tailwind-merge: Utility class management
- cmdk: Command palette component
- react-syntax-highlighter: Code syntax highlighting with themes
- react-markdown: Markdown parsing and rendering
- lucide-react: Icon library

**Data & State Management:**
- @tanstack/react-query: Server state management and caching
- drizzle-orm & drizzle-zod: Type-safe ORM and schema validation
- @neondatabase/serverless: PostgreSQL driver for Neon
- zod: Runtime type validation

**Backend:**
- express: Web server framework
- connect-pg-simple: PostgreSQL session store (configured but unused)
- nanoid: Unique ID generation

**Development Tools:**
- @replit/vite-plugin-*: Replit-specific development plugins
- tsx: TypeScript execution for development
- esbuild: Production bundling for server code

**Fonts:**
- Google Fonts: Inter (UI text), JetBrains Mono (code)

**Notable Architectural Decisions:**
- **Monorepo Structure**: Client and server code in same repository with shared types
- **Path Aliases**: TypeScript path mapping (@/, @shared/, @assets/) for cleaner imports
- **No Authentication**: Course is publicly accessible, no login required (auth schema exists for future use)
- **Client-Side Progress**: Avoids server complexity while still providing user value
- **Static Content**: Course data hardcoded as TypeScript allows type safety and eliminates CMS complexity