export interface Lesson {
  id: string;
  title: string;
  duration: number;
  content: string;
}

export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  lessons: Lesson[];
  project?: string;
}

export const courseModules: Module[] = [
  {
    id: "module-1",
    number: 1,
    title: "Introduction to AI-Powered No-Code Web Development",
    description: "Discover how AI agents are revolutionizing web development and learn the essential tools you'll use throughout this course.",
    lessons: [
      {
        id: "1-1",
        title: "What is No-Code Development?",
        duration: 8,
        content: `# What is No-Code Development?

No-code development is a revolutionary approach to building websites and applications without writing traditional programming code. Instead of learning complex programming languages, you'll use visual interfaces, AI agents, and pre-built components to bring your ideas to life.

## Why No-Code Matters

- **Speed**: Build in hours what used to take weeks
- **Accessibility**: Anyone with an idea can become a creator
- **Cost-Effective**: No need to hire expensive developers
- **Flexibility**: Quickly iterate and adapt your projects

## The Modern No-Code Stack

Today's no-code tools are powered by:
- AI agents that understand natural language
- Drag-and-drop interfaces
- Pre-built templates and components
- Automated deployment systems

## What You'll Build

By the end of this course, you'll be able to create:
- Professional portfolios
- Dynamic blogs
- Web applications
- Community forums
- Social media platforms
- Membership sites
- Business directories

The future of web development is accessible to everyone. Let's begin your journey.`
      },
      {
        id: "1-2",
        title: "Role of AI Agents (Lovable, Replit, Cursor, etc.)",
        duration: 10,
        content: `# Role of AI Agents in Web Development

AI agents are intelligent assistants that can understand your requirements and generate functional code, designs, and complete websites based on natural language instructions.

## Popular AI Development Platforms

### Lovable
- Specializes in rapid prototyping
- Excellent for design-first approaches
- Real-time collaboration features

### Replit
- Full development environment
- AI pair programming
- Instant deployment capabilities

### Cursor
- AI-powered code editor
- Context-aware suggestions
- Supports all major frameworks

## How AI Agents Work

1. **Understanding Context**: AI reads your prompts and existing code
2. **Generating Solutions**: Creates code, designs, or full features
3. **Iterative Refinement**: Improves based on your feedback
4. **Deployment**: Helps publish your finished product

## Best Practices

- Be specific in your requests
- Provide context and examples
- Iterate and refine
- Test frequently

AI agents are your development partners, not replacements for creativity and planning.`
      },
      {
        id: "1-3",
        title: "Overview of Modern Tools (Framer, Webflow, Bubble, Notion, etc.)",
        duration: 12,
        content: `# Overview of Modern No-Code Tools

The no-code ecosystem offers specialized tools for different types of projects. Understanding when to use each tool is key to success.

## Design-First Platforms

### Framer
- Beautiful animations and interactions
- Design system integration
- Best for marketing sites and portfolios
- Code export capabilities

### Webflow
- Professional-grade design control
- CMS functionality
- E-commerce integration
- SEO-optimized output

## Application Builders

### Bubble
- Full application logic
- Database management
- User authentication
- API integrations

### Softr
- Quick app generation from databases
- Template marketplace
- Membership features

## Content & Data

### Notion
- Content management
- Database creation
- Can power websites via APIs

### Airtable
- Spreadsheet-database hybrid
- API access
- Automation capabilities

## Choosing the Right Tool

| Tool | Best For | Learning Curve |
|------|----------|----------------|
| Framer | Landing pages, portfolios | Low |
| Webflow | Complex websites | Medium |
| Bubble | Web applications | High |
| Notion | Content sites | Very Low |

Each tool has strengths - often you'll use multiple tools together in your workflow.`
      },
      {
        id: "1-4",
        title: "How AI Transforms Web Creation (Prompt → Live Website)",
        duration: 15,
        content: `# How AI Transforms Web Creation

The traditional path from idea to live website involved multiple specialists and weeks of work. AI has compressed this timeline dramatically.

## The Traditional Way

1. Write detailed specifications
2. Create wireframes and mockups
3. Write HTML, CSS, JavaScript
4. Set up backend and database
5. Deploy and configure servers
6. Debug and optimize

**Timeline**: 2-8 weeks for a basic site

## The AI-Powered Way

1. Write a clear prompt describing your vision
2. AI generates the complete application
3. Review and refine with natural language
4. One-click deployment

**Timeline**: 2-8 hours for a basic site

## Example Transformation

### Your Prompt:
\`\`\`
Create a portfolio website with a hero section, about me page, 
project gallery with filtering, and contact form. Use a modern 
blue color scheme and ensure it's mobile responsive.
\`\`\`

### AI Output:
- Complete React application
- Styled components
- Responsive design
- Contact form with validation
- Ready to deploy

## The AI Workflow

\`\`\`
Idea → Prompt → Generation → Refinement → Deployment
\`\`\`

Each cycle takes minutes instead of days. You can iterate quickly, experiment freely, and launch faster than ever before.

## What AI Handles

- Code structure and syntax
- Responsive design
- Common functionality
- Best practices
- Basic optimizations

## What You Control

- Vision and requirements
- Design preferences
- Feature priorities
- User experience
- Business logic

AI amplifies your creativity but requires clear direction. The better your prompts, the better your results.`
      },
      {
        id: "1-5",
        title: "Setting Up Accounts and Basic Workflow",
        duration: 10,
        content: `# Setting Up Your Development Environment

Before we build anything, let's set up the essential accounts and understand the basic workflow you'll use throughout this course.

## Required Accounts

### 1. AI Development Platform (Choose One)
- **Replit**: Sign up at replit.com
- **Lovable**: Create account at lovable.dev
- **Cursor**: Download from cursor.sh

### 2. Deployment Services
- **Vercel**: vercel.com (recommended for most projects)
- **Netlify**: netlify.com (great for static sites)

### 3. Optional but Recommended
- **GitHub**: For version control
- **Firebase**: For databases and authentication
- **Stripe**: For payment processing (membership sites)

## Basic Workflow Overview

\`\`\`
1. Define Project Requirements
   ↓
2. Create Prompt for AI
   ↓
3. Generate Initial Version
   ↓
4. Test and Refine
   ↓
5. Deploy to Production
   ↓
6. Monitor and Iterate
\`\`\`

## Setting Up Your First Project

1. **Choose your AI platform**: Start with Replit for easiest onboarding
2. **Create a new project**: Select "Web Development" template
3. **Connect deployment**: Link your Vercel account
4. **Set up version control**: Enable Git integration

## Workspace Organization

Create a simple folder structure:
\`\`\`
my-projects/
├── portfolio/
├── blog/
├── app-project/
└── learning-exercises/
\`\`\`

## Next Steps

With your accounts ready, you're prepared to start building. In the next module, we'll dive into understanding different website types and planning your first project.

**Action Items**:
- [ ] Create accounts on chosen platforms
- [ ] Verify email addresses
- [ ] Complete platform tutorials (if available)
- [ ] Bookmark this course for easy access`
      }
    ]
  },
  {
    id: "module-2",
    number: 2,
    title: "Website Foundations",
    description: "Learn the fundamental concepts that apply to all web projects, from choosing the right architecture to planning your deployment strategy.",
    lessons: [
      {
        id: "2-1",
        title: "Understanding Web Components (Frontend, Backend, Database)",
        duration: 12,
        content: `# Understanding Web Components

Every website is built from three core components. Understanding these will help you plan any project effectively.

## The Three Pillars

### 1. Frontend (What Users See)
The visible interface of your website:
- **HTML**: Structure and content
- **CSS**: Styling and layout
- **JavaScript**: Interactivity and behavior

**Examples**: Buttons, forms, navigation, animations

### 2. Backend (The Engine)
The server-side logic users don't see:
- **Server**: Processes requests
- **APIs**: Connect frontend to data
- **Business Logic**: Rules and workflows

**Examples**: User authentication, data processing, email sending

### 3. Database (Data Storage)
Where information lives:
- **Tables/Collections**: Organized data
- **Queries**: Retrieve and update data
- **Relationships**: How data connects

**Examples**: User profiles, blog posts, product catalogs

## How They Work Together

\`\`\`
User clicks button (Frontend)
    ↓
Request sent to server (Backend)
    ↓
Data retrieved from database (Database)
    ↓
Response formatted (Backend)
    ↓
Display updated (Frontend)
\`\`\`

## Do You Need All Three?

Not always! Here's when each is required:

| Component | Static Site | Dynamic Site | Web App |
|-----------|-------------|--------------|---------|
| Frontend  | ✅ Yes      | ✅ Yes       | ✅ Yes  |
| Backend   | ❌ No       | ✅ Yes       | ✅ Yes  |
| Database  | ❌ No       | ✅ Yes       | ✅ Yes  |

## In No-Code Context

- **Frontend**: Visual builders handle this
- **Backend**: AI generates or platforms provide
- **Database**: Services like Airtable, Firebase

Understanding these components helps you choose the right tools and architecture for your project.`
      },
      {
        id: "2-2",
        title: "Choosing the Right Website Type",
        duration: 10,
        content: `# Choosing the Right Website Type

Different projects require different architectures. Making the right choice from the start saves time and headaches later.

## The Seven Website Types

### 1. Static Websites
**Best for**: Portfolios, landing pages, company sites
- No database needed
- Fast loading
- Easy to maintain
- Lower cost

### 2. Dynamic Websites
**Best for**: Blogs, news sites, product catalogs
- Content from database
- Easy updates
- Scalable content

### 3. Web Applications
**Best for**: Tools, dashboards, SaaS products
- User accounts required
- Complex interactions
- Real-time updates

### 4. Forums & Communities
**Best for**: Discussion boards, Q&A sites
- User-generated content
- Moderation tools
- Threading and replies

### 5. Social Media Platforms
**Best for**: Networking, sharing content
- Feeds and timelines
- Social interactions
- Real-time features

### 6. Membership Websites
**Best for**: Paid content, courses, subscriptions
- Payment processing
- Access control
- Subscription management

### 7. Directory & Listing Websites
**Best for**: Business directories, job boards
- Search and filters
- Categorization
- User submissions

## Decision Framework

Ask yourself:
1. Do users need to log in? → Web App, Forum, Social, or Membership
2. Is content updated frequently? → Dynamic or App
3. Do users create content? → Forum, Social, or Directory
4. Will you charge money? → Membership
5. Is it just information? → Static or Dynamic

## Architecture Reference

| Type | Database | Login | Payments |
|------|----------|-------|----------|
| Static | ❌ | ❌ | ❌ |
| Dynamic | ✅ | Optional | ❌ |
| Web App | ✅ | ✅ | Optional |
| Forum | ✅ | ✅ | ❌ |
| Social | ✅ | ✅ | ❌ |
| Membership | ✅ | ✅ | ✅ |
| Directory | ✅ | Optional | Optional |

Choose based on your specific needs, not what seems most impressive. Start simple and add complexity as needed.`
      },
      {
        id: "2-3",
        title: "Planning Layouts and Features",
        duration: 15,
        content: `# Planning Layouts and Features

Proper planning prevents poor performance. Before you build, you need a clear plan.

## Layout Planning Process

### 1. Sketch Your Pages
Draw rough wireframes for:
- Homepage
- Key user flows
- Important features

Don't worry about details - boxes and labels work fine.

### 2. Common Layout Patterns

**Header/Navigation**:
- Logo (left)
- Menu items (center or right)
- CTA button (right)

**Hero Section**:
- Headline
- Subheading
- Call-to-action
- Visual/image

**Content Sections**:
- 1-column: Text-heavy content
- 2-column: Features/benefits
- 3-column: Cards/services
- Grid: Products/portfolio

**Footer**:
- Links
- Contact info
- Social media
- Legal pages

### 3. Feature Checklist

Mark what you need:
- [ ] Navigation menu
- [ ] Search functionality
- [ ] User accounts
- [ ] Comments/reviews
- [ ] Contact form
- [ ] Shopping cart
- [ ] Payment processing
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Social sharing

## Creating a Site Map

\`\`\`
Homepage
├── About
├── Services
│   ├── Service 1
│   ├── Service 2
│   └── Service 3
├── Portfolio
├── Blog
│   └── [Blog Posts]
└── Contact
\`\`\`

## User Flow Mapping

Example for e-commerce:
\`\`\`
Landing → Browse Products → Product Detail → 
Add to Cart → Checkout → Payment → Confirmation
\`\`\`

## Responsive Design Planning

Design for three breakpoints:
- **Mobile**: 375px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

Consider what changes at each size:
- Navigation becomes hamburger menu
- Columns stack vertically
- Images resize or hide
- Font sizes adjust

## Content Inventory

List all content types you'll need:
- Text/copy
- Images
- Videos
- Icons
- Forms
- Data/tables

## AI Prompting Tips

When describing layouts to AI:
- Be specific about sections
- Describe the hierarchy
- Mention responsive behavior
- Include interaction details

**Good prompt example**:
\`\`\`
Create a homepage with:
1. Fixed header with logo and menu
2. Full-width hero with headline, subheading, and CTA button
3. Three-column features section
4. Testimonials carousel
5. Footer with social links

Use responsive design that stacks to single column on mobile.
\`\`\`

Planning saves time in execution. Spend 20% of your time planning, and you'll save 50% in building and revising.`
      }
    ]
  },
  {
    id: "module-3",
    number: 3,
    title: "Building Static Websites",
    description: "Create beautiful, fast-loading static websites perfect for portfolios, landing pages, and company sites.",
    lessons: [
      {
        id: "3-1",
        title: "Static vs. Dynamic — When to Choose Static",
        duration: 8,
        content: `# Static vs. Dynamic — When to Choose Static

Understanding the difference between static and dynamic websites helps you choose the right approach for your project.

## What is a Static Website?

A static website delivers the same content to every visitor. The files (HTML, CSS, JavaScript) are pre-built and don't change based on user interaction or data.

**Examples**: Portfolio sites, landing pages, documentation

## What is a Dynamic Website?

A dynamic website generates content on-the-fly from a database. Each visitor might see different content based on their preferences, the time of day, or other factors.

**Examples**: News sites, e-commerce stores, social platforms

## Advantages of Static Sites

### Speed
- No database queries
- No server processing
- Files served directly from CDN
- **Result**: Lightning-fast load times

### Security
- No database to hack
- No server-side code vulnerabilities
- Fewer attack vectors
- **Result**: Inherently more secure

### Cost
- Cheap or free hosting
- No database costs
- Minimal server resources
- **Result**: Often $0/month

### Reliability
- Fewer points of failure
- Easy to cache
- Works offline (with service workers)
- **Result**: 99.99% uptime

## When to Choose Static

✅ **Choose Static When**:
- Content doesn't change frequently
- Same content for all visitors
- No user accounts needed
- Budget is limited
- Speed is critical
- SEO is important

**Examples**:
- Personal portfolio
- Company landing page
- Event website
- Documentation
- Marketing site

## When Dynamic is Better

✅ **Choose Dynamic When**:
- Content updated frequently
- Personalized experiences
- User accounts required
- E-commerce functionality
- User-generated content
- Real-time data

**Examples**:
- Online store
- Social network
- News website
- SaaS application
- Member portal

## The Hybrid Approach

Modern tools allow "static with dynamic features":
- Static site + API calls
- Static generation with database
- Incremental static regeneration

**Best of both worlds**: Speed and security of static, functionality of dynamic

## Deployment Options

Static sites can deploy to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Cloudflare Pages

All offer free tiers with excellent performance.`
      },
      {
        id: "3-2",
        title: "Best No-Code Builders (Framer, Webflow, Dorik, etc.)",
        duration: 12,
        content: `# Best No-Code Builders for Static Sites

Each platform has unique strengths. Choose based on your specific needs and skill level.

## Top Platforms Compared

### Framer
**Best for**: Designers, modern portfolios
- Stunning animations
- Component-based design
- Real-time collaboration
- CMS capabilities
- One-click deployment

**Pros**: Beautiful output, easy to learn
**Cons**: Can be expensive for advanced features

### Webflow
**Best for**: Professional websites
- Pixel-perfect control
- CMS functionality
- E-commerce ready
- SEO tools built-in
- Export code option

**Pros**: Professional results, powerful
**Cons**: Steeper learning curve

### Dorik
**Best for**: Quick launches, beginners
- Template marketplace
- Drag-and-drop simple
- White-label options
- Membership features
- Affordable pricing

**Pros**: Fast setup, budget-friendly
**Cons**: Less design control

### Carrd
**Best for**: Single-page sites
- Super simple interface
- Very affordable
- Quick deployment
- Perfect for landing pages

**Pros**: Easiest to use, cheap
**Cons**: Limited to simple sites

### Wix
**Best for**: Small businesses
- Huge app marketplace
- All-in-one solution
- Good templates
- Business tools included

**Pros**: Feature-rich, familiar
**Cons**: Can feel bloated

## Feature Comparison

| Platform | Design Control | Learning Curve | Price | Best Use |
|----------|---------------|----------------|-------|----------|
| Framer | High | Low | $$$ | Portfolio |
| Webflow | Very High | Medium | $$$ | Professional |
| Dorik | Medium | Very Low | $ | Landing Page |
| Carrd | Low | Very Low | $ | Single Page |
| Wix | Medium | Low | $$ | Business |

## Choosing Your Platform

Consider:
1. **Budget**: What can you afford monthly?
2. **Timeline**: How quickly do you need to launch?
3. **Skills**: Comfortable with design?
4. **Requirements**: What features are essential?
5. **Growth**: Will you need to scale?

## Getting Started

For this module, we recommend:
- **Beginners**: Start with Dorik or Carrd
- **Designers**: Try Framer
- **Professional sites**: Learn Webflow

Most platforms offer free trials - experiment before committing.`
      }
    ],
    project: "Personal Portfolio Website"
  },
  {
    id: "module-4",
    number: 4,
    title: "Building Dynamic Websites",
    description: "Add databases and dynamic content to create blogs, product listings, and content-rich websites.",
    lessons: [
      {
        id: "4-1",
        title: "Introduction to Dynamic Data",
        duration: 10,
        content: `# Introduction to Dynamic Data

Dynamic websites pull content from databases, allowing easy updates without touching code.

## What Makes a Site Dynamic?

Instead of hardcoded content, dynamic sites:
- Fetch data from databases
- Display content based on queries
- Update without redeploying
- Personalize for users

## Common Use Cases

### Blogs
- Posts stored in database
- New articles added via CMS
- Categories and tags
- Search functionality

### Product Catalogs
- Items with details and images
- Inventory tracking
- Price updates
- Filtering and sorting

### News Sites
- Breaking news updates
- Content scheduling
- Author management
- Comment systems

## How It Works

\`\`\`
User visits page
    ↓
Server queries database
    ↓
Data formatted as HTML
    ↓
Page displayed to user
\`\`\`

This happens in milliseconds, but allows ultimate flexibility in content management.`
      }
    ],
    project: "Blog or Product Listing Site"
  },
  {
    id: "module-5",
    number: 5,
    title: "Building Full Web Applications",
    description: "Create interactive applications with user authentication, real-time features, and complex functionality.",
    lessons: [
      {
        id: "5-1",
        title: "What Makes a Web App Different?",
        duration: 10,
        content: `# What Makes a Web App Different?

Web applications go beyond displaying information - they provide tools and functionality that help users accomplish tasks.

## Key Differences

### Static/Dynamic Sites
- **Purpose**: Information delivery
- **User Role**: Passive consumer
- **Interaction**: Click and read
- **Examples**: Blog, portfolio, news site

### Web Applications
- **Purpose**: Task completion
- **User Role**: Active participant
- **Interaction**: Create, edit, manage
- **Examples**: Gmail, Trello, Notion

## Essential App Features

### 1. User Authentication
- Sign up / Login
- Password reset
- User sessions
- Account management

### 2. Data Persistence
- Save user data
- Sync across devices
- Real-time updates
- Data ownership

### 3. Complex Interactions
- Drag and drop
- Real-time collaboration
- Keyboard shortcuts
- Multi-step workflows

### 4. State Management
- Remember user preferences
- Track progress
- Handle complex data
- Undo/redo functionality

## Architecture Requirements

Web apps typically need:
- **Frontend**: React, Vue, or similar
- **Backend**: API server
- **Database**: PostgreSQL, MongoDB, etc.
- **Authentication**: JWT, OAuth
- **Hosting**: Full-stack platform

## Examples to Build

- To-do list with categories
- Expense tracker
- Note-taking app
- Project manager
- CRM system
- Booking system

The line between "site" and "app" can blur, but apps focus on doing rather than showing.`
      }
    ],
    project: "To-Do App or Expense Tracker"
  },
  {
    id: "module-6",
    number: 6,
    title: "Building Forums & Communities",
    description: "Create discussion platforms with threads, user roles, and content moderation.",
    lessons: [
      {
        id: "6-1",
        title: "Structuring Discussion Boards and Threads",
        duration: 12,
        content: `# Structuring Discussion Boards and Threads

Forums require careful planning to enable meaningful discussions while maintaining organization.

## Core Forum Components

### Categories
Top-level organization:
- General Discussion
- Technical Support
- Feature Requests
- Off Topic

### Threads (Topics)
Individual discussions within categories:
- Original post
- Metadata (author, date, view count)
- Tag/flair system

### Replies
Responses to threads:
- Nested or flat structure
- Quote functionality
- Rich text formatting
- Attachments

## Database Structure

\`\`\`
Categories
├── id, name, description, order
│
Threads
├── id, category_id, title, author_id
├── created_at, updated_at, pinned, locked
│
Posts
├── id, thread_id, author_id, content
├── created_at, edited_at, parent_post_id
│
Users
├── id, username, role, reputation
└── created_at, last_active
\`\`\`

## User Roles and Permissions

### Administrator
- Full control
- Delete any content
- Manage users
- Site configuration

### Moderator
- Edit/delete posts
- Lock/pin threads
- Warn users
- Move threads

### Member
- Create threads
- Reply to posts
- Edit own content
- Report issues

### Guest
- Read only
- Can't post
- Limited access

## Essential Features

- **Search**: Find relevant discussions
- **Notifications**: New replies, mentions
- **Reputation**: Upvotes, badges, ranks
- **Moderation**: Report, hide, ban
- **Rich Content**: Images, code blocks, embeds

Building a forum requires balancing openness with control.`
      }
    ],
    project: "Community Forum"
  },
  {
    id: "module-7",
    number: 7,
    title: "Building Social Media Platforms",
    description: "Develop social networking features including feeds, profiles, and real-time interactions.",
    lessons: [
      {
        id: "7-1",
        title: "Planning Feed, Profiles, and Posts",
        duration: 15,
        content: `# Planning Social Media Features

Social platforms center around user-generated content and connections.

## Core Features

### User Profiles
- Avatar and cover photo
- Bio and personal info
- Activity history
- Social connections
- Privacy settings

### Content Feed
- Algorithmic or chronological
- Post types (text, image, video)
- Engagement metrics
- Infinite scroll
- Real-time updates

### Social Interactions
- Like/react
- Comment
- Share/repost
- Follow/unfollow
- Direct messages

## Database Architecture

\`\`\`
Users
├── Profile data
├── Settings
└── Relationships

Posts
├── Content
├── Media
├── Timestamp
└── Visibility

Interactions
├── Likes
├── Comments
├── Shares
└── Follows
\`\`\`

## Technical Challenges

### Scaling
- Handle many users
- Efficient queries
- CDN for media
- Caching strategies

### Real-time Features
- Live notifications
- Online status
- Instant messaging
- Live reactions

### Privacy & Safety
- Content moderation
- Block/report
- Data privacy
- Age verification

## AI Prompt Strategy

Break your platform into phases:
1. User auth and profiles
2. Post creation and display
3. Social interactions
4. Feed algorithm
5. Notifications
6. Direct messaging

Start simple, iterate based on usage.`
      }
    ],
    project: "Mini Social Network"
  },
  {
    id: "module-8",
    number: 8,
    title: "Building Membership & Subscription Websites",
    description: "Create paid content platforms with subscription management and access control.",
    lessons: [
      {
        id: "8-1",
        title: "Understanding User Authentication + Payments",
        duration: 12,
        content: `# User Authentication and Payment Integration

Membership sites combine secure authentication with payment processing to monetize content.

## Authentication Basics

### User Registration
- Email verification
- Password requirements
- Terms acceptance
- Profile creation

### Login Systems
- Email/password
- Social login (Google, GitHub)
- Magic links
- Two-factor authentication

### Session Management
- Stay logged in
- Remember device
- Security tokens
- Logout functionality

## Payment Integration

### Popular Payment Providers

**Stripe**
- Most flexible
- Subscriptions built-in
- Global support
- Developer-friendly

**LemonSqueezy**
- Merchant of record
- Handles tax/VAT
- Simpler setup
- Good for digital products

**Paddle**
- Similar to LemonSqueezy
- Great for SaaS
- Subscription management

### Subscription Models

**One-time Payment**
- Lifetime access
- Simple to implement
- Single revenue

**Recurring Subscription**
- Monthly/annual billing
- Predictable revenue
- Higher lifetime value

**Tiered Access**
- Free tier
- Basic plan
- Premium plan
- Enterprise plan

## Access Control

\`\`\`
User Login
    ↓
Check Subscription Status
    ↓
Grant/Deny Access to Content
\`\`\`

### Implementation
- Middleware checks subscription
- Protected routes
- Content gating
- Download limits

## Member Features

- Account dashboard
- Billing management
- Update payment method
- Cancel subscription
- Download invoices
- Usage statistics

## AI Integration

Prompt AI to create:
- Membership tiers UI
- Payment checkout flow
- Member dashboard
- Content access logic
- Subscription management

Keep user experience smooth - reduce friction in signup and payment.`
      }
    ],
    project: "Paid Content or Course Platform"
  },
  {
    id: "module-9",
    number: 9,
    title: "Building Directory & Listing Websites",
    description: "Design searchable directories with advanced filtering and categorization.",
    lessons: [
      {
        id: "9-1",
        title: "Setting Up Search and Filters",
        duration: 10,
        content: `# Search and Filtering for Directories

Directories help users find specific items from large collections. Effective search and filtering are essential.

## Core Components

### Search Functionality
- **Keyword Search**: Match titles, descriptions
- **Autocomplete**: Suggest as user types
- **Search Filters**: Refine results
- **Search History**: Recent searches

### Filter Categories

**Location**
- Country
- State/Province
- City
- Proximity (radius search)

**Category**
- Industry
- Type
- Tags
- Collections

**Attributes**
- Price range
- Rating
- Availability
- Features

**Sorting**
- Relevance
- Newest first
- Price (low to high)
- Rating
- Alphabetical

## Database Design

\`\`\`
Listings
├── id, title, description
├── category, subcategory
├── location (lat, lng, address)
├── price, rating
├── features (array)
└── created_at, updated_at

Categories
├── id, name, slug
└── parent_category_id

Users
├── id, business_name
└── listings (relationship)
\`\`\`

## Search Implementation

### Simple Text Search
\`\`\`sql
WHERE title LIKE '%keyword%' 
OR description LIKE '%keyword%'
\`\`\`

### Advanced Search
- Full-text search engines
- Elasticsearch
- Algolia
- Typesense

## Filter UI Best Practices

- Show filter count (e.g., "Category (12)")
- Display active filters prominently
- Easy to clear all filters
- Mobile: Filters in drawer
- Desktop: Sidebar filters

## Example Directory Types

- Business directory
- Job board
- Real estate listings
- Event calendar
- Product marketplace
- Service providers
- Restaurant finder

Make discovery effortless - that's the value of a great directory.`
      }
    ],
    project: "Business Directory"
  },
  {
    id: "module-10",
    number: 10,
    title: "AI Prompt Engineering for Web Development",
    description: "Master the art of writing effective prompts to generate high-quality code and designs.",
    lessons: [
      {
        id: "10-1",
        title: "Writing Clear and Effective Prompts",
        duration: 15,
        content: `# Writing Clear and Effective Prompts

The quality of your output depends heavily on the quality of your input. Master prompting to unlock AI's full potential.

## Prompt Engineering Fundamentals

### The Anatomy of a Good Prompt

1. **Context**: What are you building?
2. **Goal**: What should this accomplish?
3. **Specifics**: Exact requirements
4. **Constraints**: Limitations or preferences
5. **Format**: How should output be structured?

## The Prompt Formula

\`\`\`
I'm building [PROJECT TYPE].

I need [SPECIFIC FEATURE] that:
- [REQUIREMENT 1]
- [REQUIREMENT 2]
- [REQUIREMENT 3]

Use [TECH STACK] and follow [BEST PRACTICES].

Output should be [FORMAT SPECIFICATION].
\`\`\`

## Examples: Bad vs Good

### ❌ Bad Prompt
"Make a login page"

**Problems**: Vague, no context, no specs

### ✅ Good Prompt
\`\`\`
Create a login page for a SaaS application with:
- Email and password fields
- "Remember me" checkbox
- "Forgot password" link
- Social login buttons (Google, GitHub)
- Form validation with error messages
- Responsive design for mobile and desktop

Use React with TypeScript, Tailwind CSS for styling, 
and react-hook-form for validation.

Include accessibility features (ARIA labels, keyboard navigation).
\`\`\`

## Advanced Techniques

### Iterative Refinement
Start broad, then specify:
\`\`\`
Prompt 1: "Create a dashboard layout"
Prompt 2: "Add a sidebar with navigation"
Prompt 3: "Make the sidebar collapsible on mobile"
\`\`\`

### Providing Examples
"Create a card component similar to this: [description or code snippet]"

### Specifying Style
"Use a modern, minimal design with soft shadows and rounded corners"

## Domain-Specific Prompting

### For Frontend:
- Specify component structure
- Mention responsive breakpoints
- Include interaction details
- Define color scheme

### For Backend:
- Describe data models
- Specify API endpoints
- Mention authentication needs
- Define error handling

### For Database:
- List all entities
- Describe relationships
- Specify constraints
- Include sample data

## Common Mistakes

1. **Too Vague**: "Make it look good"
2. **Too Complex**: Trying to build everything at once
3. **Contradictory**: Conflicting requirements
4. **No Context**: Not explaining the bigger picture
5. **Assuming Knowledge**: AI doesn't know your specific project

## Debugging Prompts

If output isn't right:
1. Add more context
2. Be more specific
3. Provide examples
4. Break into smaller tasks
5. Specify what's wrong

## Practice Exercise

Write prompts for:
- A pricing page with three tiers
- A blog post editor with markdown
- A user profile settings page
- An image gallery with lightbox

Compare results and refine your technique.`
      }
    ],
    project: "Build a Full Web App Using Only Prompts"
  },
  {
    id: "module-11",
    number: 11,
    title: "Deployment & Maintenance",
    description: "Learn to deploy your projects and keep them running smoothly with monitoring and optimization.",
    lessons: [
      {
        id: "11-1",
        title: "Final Deployment Steps",
        duration: 12,
        content: `# Final Deployment Steps

Deployment transforms your local project into a live website accessible to the world.

## Pre-Deployment Checklist

### Testing
- [ ] All features work as expected
- [ ] Forms submit correctly
- [ ] Links aren't broken
- [ ] Images load properly
- [ ] Mobile responsive
- [ ] Cross-browser compatible

### Optimization
- [ ] Images compressed
- [ ] Code minified
- [ ] Unused code removed
- [ ] Cache strategies implemented
- [ ] Database indexes added

### Content
- [ ] All text proofread
- [ ] Contact information correct
- [ ] Privacy policy added
- [ ] Terms of service included
- [ ] Favicon added

### SEO
- [ ] Meta titles and descriptions
- [ ] Open Graph tags
- [ ] XML sitemap
- [ ] robots.txt file
- [ ] Analytics installed

## Deployment Platforms

### Vercel (Recommended)
**Best for**: React, Next.js, most modern apps

1. Connect GitHub repository
2. Configure build settings
3. Set environment variables
4. Deploy with one click

**Free tier**: Generous limits for most projects

### Netlify
**Best for**: Static sites, JAMstack

Similar workflow to Vercel:
- Git-based deployment
- Automatic builds
- Form handling built-in
- Serverless functions

### Traditional Hosting
**Best for**: WordPress, custom servers

- FTP upload
- Database setup
- Domain configuration
- SSL certificate

## Custom Domain Setup

1. **Purchase Domain**: Namecheap, Google Domains
2. **Configure DNS**: Point to hosting provider
3. **Wait for Propagation**: 24-48 hours
4. **Enable SSL**: Free with Let's Encrypt

## Environment Variables

Never commit secrets to code:
- API keys
- Database credentials
- OAuth secrets
- Encryption keys

Use platform environment variable settings.

## Going Live

\`\`\`
Test locally → Deploy to staging → 
Final check → Deploy to production → 
Monitor for issues
\`\`\`

## Post-Launch

- Monitor error logs
- Check analytics
- Test all user flows
- Gather feedback
- Plan improvements

Your first deployment is just the beginning!`
      }
    ]
  },
  {
    id: "module-12",
    number: 12,
    title: "Capstone Project",
    description: "Apply everything you've learned by building a complete project from scratch, documenting your process, and publishing it online.",
    lessons: [
      {
        id: "12-1",
        title: "Capstone Project Overview",
        duration: 20,
        content: `# Capstone Project

This is where you demonstrate mastery by building a complete project of your choice.

## Project Requirements

### Choose One Type:
1. Static Website
2. Dynamic Website
3. Web Application
4. Forum/Community
5. Social Media Platform
6. Membership Website
7. Directory/Listing Site

### Minimum Features

Your project must include:
- Polished, professional design
- Responsive layout (mobile, tablet, desktop)
- At least 5 functional pages/views
- Working forms or interactions
- Deployed to live URL
- Custom domain (optional but recommended)

### Documentation Required

Create a project document including:
1. **Project Overview**
   - What you built and why
   - Target audience
   - Key features

2. **Planning Phase**
   - Initial sketches/wireframes
   - Feature list
   - Technology choices

3. **Development Process**
   - AI prompts used
   - Challenges faced
   - Solutions implemented
   - Iterations made

4. **Deployment**
   - Platform chosen
   - Configuration steps
   - Final URL

5. **Reflection**
   - What you learned
   - What you'd do differently
   - Next steps for the project

## Suggested Projects

### Beginner
- Personal portfolio with blog
- Local business website
- Event landing page

### Intermediate
- Recipe sharing platform
- Job board
- Fitness tracker app

### Advanced
- Online course platform
- Project management tool
- Social networking site

## Evaluation Criteria

Your project will be assessed on:
- **Functionality**: Does it work reliably?
- **Design**: Is it visually appealing?
- **Usability**: Is it easy to use?
- **Code Quality**: Is it well-structured?
- **Documentation**: Is it thorough?

## Timeline

Recommended schedule:
- Week 1: Planning and design
- Week 2: Core features development
- Week 3: Polish and additional features
- Week 4: Testing and deployment
- Week 5: Documentation

## Getting Help

Use all resources available:
- Course materials
- AI assistants
- Community forums
- Documentation
- Previous modules

## Submission

When complete, submit:
1. Live website URL
2. Documentation (PDF or Markdown)
3. GitHub repository (if applicable)
4. Brief video walkthrough (optional)

## Next Steps After Completion

- Add to your portfolio
- Share on social media
- Write a blog post about building it
- Gather user feedback
- Continue iterating

This is your opportunity to shine. Build something you're proud to show the world!

## Sample Project Ideas by Type

### Static Site
"Mountain Photography Portfolio" - Showcase photography work with galleries, about page, and contact form

### Dynamic Site
"Tech News Hub" - Curated tech news with categories, search, and daily updates

### Web Application
"Personal Finance Manager" - Track income, expenses, budgets, and financial goals

### Forum
"Indie Maker Community" - Discussion board for independent creators to share progress and tips

### Social Platform
"BookClub Social" - Connect readers, share reviews, and join book discussion groups

### Membership Site
"Design Resources Library" - Premium design assets with tiered subscription access

### Directory
"Remote-Friendly Companies" - Searchable directory of companies offering remote positions

Choose a project that excites you - passion leads to better work!`
      }
    ],
    project: "Your Complete Capstone Project"
  }
];

export function getModuleById(id: string): Module | undefined {
  return courseModules.find(m => m.id === id);
}

export function getLessonById(moduleId: string, lessonId: string): Lesson | undefined {
  const module = getModuleById(moduleId);
  return module?.lessons.find(l => l.id === lessonId);
}

export function getAllLessons(): Array<{ module: Module; lesson: Lesson }> {
  const all: Array<{ module: Module; lesson: Lesson }> = [];
  courseModules.forEach(module => {
    module.lessons.forEach(lesson => {
      all.push({ module, lesson });
    });
  });
  return all;
}

export function getNextLesson(currentModuleId: string, currentLessonId: string): { module: Module; lesson: Lesson } | null {
  const all = getAllLessons();
  const currentIndex = all.findIndex(
    item => item.module.id === currentModuleId && item.lesson.id === currentLessonId
  );
  
  if (currentIndex === -1 || currentIndex === all.length - 1) {
    return null;
  }
  
  return all[currentIndex + 1];
}

export function getPreviousLesson(currentModuleId: string, currentLessonId: string): { module: Module; lesson: Lesson } | null {
  const all = getAllLessons();
  const currentIndex = all.findIndex(
    item => item.module.id === currentModuleId && item.lesson.id === currentLessonId
  );
  
  if (currentIndex <= 0) {
    return null;
  }
  
  return all[currentIndex - 1];
}
