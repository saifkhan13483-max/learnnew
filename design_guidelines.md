# Design Guidelines: AI No-Code Web Development Course Platform

## Design Approach
**System-Based Approach** inspired by Notion's documentation clarity and Linear's focused information architecture. This learning platform prioritizes readability, clear hierarchy, and efficient navigation for technical educational content.

## Core Layout Architecture

### Homepage Structure
- Full-width hero section (60vh) with course title, tagline, and primary CTA
- Course overview section with statistics (12 modules, ~36 lessons, estimated completion time)
- Visual module grid (3 columns on desktop, 2 on tablet, 1 on mobile) displaying all 12 modules with:
  - Module number and title
  - Lesson count indicator
  - Brief description (2-3 lines)
  - Progress indicator ring
  - "Start Module" button
- "What You'll Build" showcase section with project thumbnails in 2-column layout
- "Course Structure" timeline visualization showing learning path
- Footer with additional resources and quick links

### Lesson View Layout
**Fixed Sidebar Navigation (desktop):**
- Width: 280px on desktop
- Collapsible module accordion showing all 12 modules
- Each module displays nested lesson list
- Active lesson highlighted with indicator bar
- Progress checkmarks for completed lessons
- Sticky position with scroll

**Main Content Area:**
- Maximum width: 720px for optimal reading
- Generous margins (px-8 lg:px-12)
- Floating "Previous/Next Lesson" navigation at bottom
- Breadcrumb navigation at top
- Estimated reading time indicator

**Mobile Navigation:**
- Hamburger menu triggering slide-out drawer
- Bottom navigation bar with: Menu, Progress, Search icons

## Typography System

### Hierarchy
- **Course Title (Homepage):** Large display text, 4xl-6xl scale, font-bold
- **Module Titles:** 2xl-3xl, font-semibold
- **Lesson Titles:** xl-2xl, font-semibold
- **Section Headings:** lg-xl, font-semibold
- **Body Text:** base-lg, regular weight, leading-relaxed (1.75 line height)
- **Code Snippets:** mono font, slightly smaller (sm-base)
- **Captions/Meta:** sm, slightly lighter weight

### Font Stack
- **Primary:** Inter or similar modern sans-serif via Google Fonts
- **Monospace:** JetBrains Mono or Fira Code for code blocks

## Spacing System
Use Tailwind units: **2, 3, 4, 6, 8, 12, 16, 24** for consistent rhythm

- Component padding: p-6 to p-8
- Section spacing: py-12 to py-24
- Card gaps: gap-6 to gap-8
- Inline spacing: space-x-2 to space-x-4
- Vertical content flow: space-y-4 to space-y-6

## Component Library

### Navigation Components
**Sidebar Module Accordion:**
- Module header with expand/collapse icon
- Nested lesson list with indentation (pl-4)
- Hover states on clickable items
- Active lesson indicator (left border accent, 4px width)
- Compact spacing (py-2 for lessons)

**Breadcrumb:**
- Horizontal layout with separator icons
- Linked path to current lesson
- Positioned above lesson title

**Bottom Navigation Bar:**
- Fixed position on mobile
- 3 primary actions with icons + labels
- Safe area padding

### Content Components
**Module Cards (Homepage Grid):**
- Rounded corners (rounded-xl)
- Subtle border treatment
- Padding: p-6
- Hover lift effect (no animation, just shadow change)
- Header with module number badge
- Icon representation for module type
- Footer with lesson count and time estimate

**Lesson Content Container:**
- Maximum width constraint (max-w-3xl)
- Ample padding between sections
- Clear visual breaks between topics

**Code Blocks:**
- Rounded corners (rounded-lg)
- Padding: p-4
- Syntax highlighting via library
- Copy button in top-right corner
- Line numbers for longer snippets

**Callout Boxes (Tips/Warnings):**
- Left border accent (border-l-4)
- Background differentiation
- Icon prefix (info, warning, success types)
- Padding: p-4
- Margin: my-6

**Progress Indicators:**
- Circular progress ring showing module completion
- Linear progress bar at top of lesson pages
- Checkmark icons for completed lessons in sidebar

**Project Showcase Cards:**
- Featured image placeholder at top
- Title and description
- Tech stack badges
- "View Project" link

### Interactive Elements
**Primary Buttons:**
- Size: px-6 py-3
- Rounded: rounded-lg
- Font: font-semibold
- Block on mobile, inline on desktop

**Secondary Buttons:**
- Outline style with border
- Same sizing as primary
- Used for "Back" or auxiliary actions

**Lesson Navigation (Prev/Next):**
- Two-column layout at lesson bottom
- Large tap targets (min-height: 80px)
- Shows adjacent lesson titles
- Arrow icons indicating direction

**Search Input:**
- Prominent placement in sidebar header
- Icon prefix
- Rounded-full or rounded-lg
- Padding: px-4 py-2

## Visual Rhythm & Hierarchy

### Information Density Balance
- Hero: Spacious (py-16 to py-24)
- Module grid: Moderate (py-12 to py-16)
- Lesson content: Comfortable reading density with breathing room
- Footer: Compact but organized (py-8 to py-12)

### Content Flow
- Consistent vertical spacing between sections (space-y-8 to space-y-12)
- Visual separators (subtle borders) between major sections
- Whitespace around code blocks and callouts (my-6 to my-8)

## Responsive Behavior

### Breakpoints Strategy
- **Mobile (base):** Single column, stacked layout, drawer navigation
- **Tablet (md: 768px):** 2-column grids where appropriate, sidebar appears
- **Desktop (lg: 1024px):** Full sidebar, 3-column grids, optimal reading width

### Layout Shifts
- Sidebar collapses to drawer on mobile
- Module grid: 3 → 2 → 1 columns
- Navigation moves to bottom bar on mobile
- Horizontal scroll for code blocks if needed

## Images

**Hero Section Image:**
- Use a wide hero image showing diverse website types/code editor visualization
- Dimensions: Full-width, 60vh height
- Overlay: Subtle gradient for text readability
- Position: Background with content overlay

**Module Cards:**
- Small icon illustrations representing each module's focus
- Size: 48x48px, positioned at card top
- Style: Line icons or simple illustrations

**Project Showcase:**
- Screenshot-style images of example projects
- Aspect ratio: 16:9
- Positioned above project description cards

**No floating content** - all sections grounded with proper context and supporting elements. Every page section serves a clear purpose in the learning journey.