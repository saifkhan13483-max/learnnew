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
    description: "Learn the fundamentals of no-code development, understand AI agents, explore modern tools, and set up your development workflow.",
    lessons: [
      {
        id: "lesson-1-1",
        title: "What is No-Code Development?",
        duration: 12,
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

## The No-Code Revolution

The traditional path to building a website required:
- Learning HTML, CSS, and JavaScript
- Understanding backend programming
- Managing databases and servers
- Dealing with deployment and hosting complexities

**The old way took weeks or months to learn and implement.**

With no-code development:
- Describe what you want in plain language
- AI generates the code for you
- Visual tools handle the design
- One-click deployment makes it live

**The new way takes hours or days to master and implement.**

## Real-World Impact

No-code development has enabled:
- Entrepreneurs to launch startups without technical co-founders
- Designers to build fully functional prototypes
- Small businesses to create professional web presence
- Students to build portfolio projects
- Anyone with an idea to become a creator

## The Skills You'll Learn

Throughout this course, you'll develop:
- **Planning Skills**: How to structure and organize web projects
- **Design Thinking**: Creating user-friendly interfaces
- **AI Collaboration**: Writing effective prompts for AI agents
- **Tool Selection**: Choosing the right platform for each project
- **Deployment Knowledge**: Publishing and maintaining websites

The future of web development is accessible to everyone. Let's begin your journey.`
      },
      {
        id: "lesson-1-2",
        title: "Role of AI Agents (Lovable, Replit, Cursor, etc.)",
        duration: 15,
        content: `# Role of AI Agents in Web Development

AI agents are intelligent assistants that can understand your requirements and generate functional code, designs, and complete websites based on natural language instructions.

## Popular AI Development Platforms

### Lovable
- **Specialization**: Rapid prototyping and design-first development
- **Strengths**: Real-time collaboration, beautiful UI generation
- **Best For**: Marketing sites, landing pages, quick MVPs
- **Key Feature**: Instant preview of changes

### Replit
- **Specialization**: Full development environment with AI pair programming
- **Strengths**: Instant deployment, collaborative coding, built-in database
- **Best For**: Complete web applications, learning to code
- **Key Feature**: Everything in one platform - code, host, and deploy

### Cursor
- **Specialization**: AI-powered code editor for professionals
- **Strengths**: Context-aware suggestions, supports all frameworks
- **Best For**: Experienced developers who want AI assistance
- **Key Feature**: Understands your entire codebase for better suggestions

### Other Notable Platforms

**v0 by Vercel**
- Generates React components from text descriptions
- Perfect for UI component creation
- Integrates with Next.js projects

**GitHub Copilot**
- AI pair programmer in your existing editor
- Suggests code as you type
- Learns from millions of repositories

**Bolt.new**
- Full-stack application generation
- Instant development environments
- Great for prototyping

## How AI Agents Work

### 1. Understanding Context
AI agents analyze:
- Your natural language prompts
- Existing code in your project
- Common patterns and best practices
- Your previous interactions and preferences

### 2. Generating Solutions
The AI creates:
- Complete application code
- Responsive designs
- Database schemas
- API integrations
- Deployment configurations

### 3. Iterative Refinement
You can refine by:
- Providing feedback in plain language
- Requesting specific changes
- Adding new features incrementally
- Fixing bugs with descriptions

### 4. Deployment Assistance
AI helps with:
- Optimizing code for production
- Setting up hosting environments
- Configuring custom domains
- Managing environment variables

## The AI Development Workflow

\`\`\`
Step 1: Describe Your Vision
  "Create a portfolio website with a hero section,
   project gallery, and contact form"

Step 2: AI Generates Initial Version
  - Complete React application
  - Styled components
  - Responsive layout
  - Ready to preview

Step 3: Review and Refine
  "Make the hero section taller and add
   animation to the project cards"

Step 4: AI Updates Code
  - Implements changes
  - Maintains consistency
  - Preserves existing functionality

Step 5: Deploy
  One-click deployment to production
\`\`\`

## Best Practices for Working with AI

### Be Specific in Your Requests

**Instead of**: "Make a website"
**Try**: "Create a portfolio website with a dark theme, featuring a hero section with my name and title, a grid of 6 projects with hover effects, and a contact form"

### Provide Context and Examples

**Instead of**: "Add a navigation menu"
**Try**: "Add a sticky navigation menu at the top with links to Home, About, Projects, and Contact. It should have a transparent background that becomes solid white when scrolling down"

### Iterate and Refine

Build in stages:
1. Start with basic structure
2. Add styling and design
3. Implement interactivity
4. Optimize and polish

### Test Frequently

After each major change:
- Preview in the browser
- Test on mobile devices
- Check all interactive elements
- Verify links and forms

## Understanding AI Limitations

AI agents are powerful but not perfect. They:
- May generate code that needs adjustment
- Work best with clear, specific instructions
- Can sometimes misunderstand complex requirements
- Require human oversight for quality

**Remember**: AI agents are your development partners, not replacements for creativity and planning.

## Choosing the Right AI Platform

| Platform | Best For | Learning Curve | Cost |
|----------|----------|----------------|------|
| Lovable | Quick prototypes | Very Low | Free tier available |
| Replit | Learning & building | Low | Free tier available |
| Cursor | Professional development | Medium | Paid subscription |
| v0 | UI components | Low | Free with limits |

## Practical Example

Let's see how an AI agent transforms a request into reality:

**Your Prompt**:
\`\`\`
Create a landing page for a coffee shop with:
- Hero section with a background image
- "Our Story" section with text and image
- Menu showcase with 4 coffee types
- Contact form
- Instagram feed section
Use warm, earthy colors
\`\`\`

**AI Generates**:
- Complete HTML structure
- CSS with custom color scheme
- Responsive grid layouts
- Form validation
- Smooth scroll navigation
- Mobile-optimized design

**Time to build**: 5-10 minutes instead of several days!

The key to success with AI agents is learning to communicate your vision clearly and iteratively refining the results.`
      },
      {
        id: "lesson-1-3",
        title: "Overview of Modern Tools (Framer, Webflow, Bubble, Notion, etc.)",
        duration: 15,
        content: `# Overview of Modern No-Code Tools

The no-code ecosystem offers specialized tools for different types of projects. Understanding when to use each tool is key to success.

## Design-First Platforms

### Framer
**What it does**: Transform designs into live, interactive websites

**Key Features**:
- Beautiful animations and interactions
- Design system integration
- Real-time collaboration
- Code export capabilities
- CMS for dynamic content

**Best For**: Marketing sites, portfolios, landing pages, brand websites

**Pricing**: Free tier available, Pro starts at $15/month

**Learning Curve**: Low - if you know design tools, you'll pick this up quickly

### Webflow
**What it does**: Professional-grade website builder with full design control

**Key Features**:
- Visual CSS control (the "Photoshop of web design")
- Built-in CMS functionality
- E-commerce integration
- SEO optimization tools
- Client billing and management

**Best For**: Complex business websites, e-commerce, agency projects

**Pricing**: Free tier available, CMS starts at $23/month

**Learning Curve**: Medium - powerful but requires time to master

## Application Builders

### Bubble
**What it does**: Build complete web applications without code

**Key Features**:
- Full application logic and workflows
- Database management
- User authentication and permissions
- API integrations (connect to any service)
- Responsive design editor
- Plugin marketplace

**Best For**: SaaS applications, marketplaces, complex web apps, MVPs

**Pricing**: Free tier available, Starter at $29/month

**Learning Curve**: High - most powerful but steepest learning curve

### Softr
**What it does**: Turn databases into web applications

**Key Features**:
- Quick app generation from Airtable/Google Sheets
- Pre-built blocks and templates
- Membership and user management
- Payment integration
- Custom domains

**Best For**: Internal tools, client portals, directories, membership sites

**Pricing**: Free tier available, Starter at $49/month

**Learning Curve**: Very Low - fastest way to launch an app

## Content & Data Platforms

### Notion
**What it does**: All-in-one workspace that can power websites

**Key Features**:
- Content management and collaboration
- Database creation with relations
- Can power websites via APIs (Super.so, Notion2Site)
- Real-time collaboration
- Template system

**Best For**: Documentation sites, simple blogs, knowledge bases

**Pricing**: Free for individuals, Plus at $10/user/month

**Learning Curve**: Very Low

### Airtable
**What it does**: Spreadsheet-database hybrid with API access

**Key Features**:
- Powerful database with relationships
- Automations and integrations
- API for connecting to websites
- Collaboration features
- Form views for data collection

**Best For**: Backend for no-code apps, content databases, project management

**Pricing**: Free tier available, Plus at $20/user/month

**Learning Curve**: Low - familiar spreadsheet interface

## Specialized Tools

### WordPress + Elementor
**What it does**: Traditional CMS with visual page builder

**Best For**: Blogs, business websites, content-heavy sites
**Strengths**: Massive plugin ecosystem, SEO tools, established platform
**Learning Curve**: Low to Medium

### Carrd
**What it does**: Simple one-page websites

**Best For**: Personal pages, landing pages, link-in-bio pages
**Strengths**: Super simple, very affordable
**Learning Curve**: Very Low

### Wix
**What it does**: All-in-one website builder

**Best For**: Small business websites, portfolios
**Strengths**: Easy to use, many templates
**Learning Curve**: Very Low

### Squarespace
**What it does**: Design-focused website builder

**Best For**: Creative portfolios, small e-commerce, blogs
**Strengths**: Beautiful templates, good e-commerce
**Learning Curve**: Low

## Choosing the Right Tool

### Decision Framework

**Ask yourself these questions**:

1. **What type of project is it?**
   - Static pages → Framer, Webflow, Carrd
   - Web application → Bubble, Softr
   - Blog/content site → WordPress, Webflow
   - Quick prototype → Framer, Lovable

2. **Do you need a database?**
   - Yes, simple → Airtable + Softr
   - Yes, complex → Bubble
   - No → Framer, Carrd

3. **Will users have accounts?**
   - Yes → Bubble, Softr, Webflow
   - No → Framer, Carrd

4. **What's your budget?**
   - Free → Notion, Carrd, trial versions
   - Low budget → Framer, Webflow
   - Medium budget → Bubble, Softr

5. **How much time to learn?**
   - Quick start → Carrd, Softr, Notion
   - Willing to learn → Framer, Webflow
   - Time to master → Bubble

### Comparison Matrix

| Tool | Best For | Database | User Auth | Learning Curve | Starting Price |
|------|----------|----------|-----------|----------------|----------------|
| Framer | Landing pages, portfolios | Limited CMS | No | Low | Free |
| Webflow | Complex websites | Yes (CMS) | Yes | Medium | $23/mo |
| Bubble | Web applications | Yes (full) | Yes | High | $29/mo |
| Softr | Quick apps from data | External | Yes | Very Low | $49/mo |
| Notion | Documentation, blogs | Yes | No | Very Low | Free |
| Carrd | One-page sites | No | No | Very Low | $19/year |

## Combining Tools for Maximum Power

You don't have to choose just one tool. Many successful projects combine multiple platforms:

**Example 1: Startup Website**
- **Framer**: Marketing website and landing pages
- **Bubble**: Web application dashboard
- **Airtable**: Database backend
- **Stripe**: Payment processing

**Example 2: Content Business**
- **Webflow**: Main website and blog
- **Softr**: Member portal
- **Airtable**: Content management
- **ConvertKit**: Email marketing

**Example 3: Agency**
- **Framer**: Client websites
- **Notion**: Internal documentation
- **Airtable**: Project management
- **Softr**: Client portal

## Platform-Specific Tips

### For Framer
- Start with templates, then customize
- Use components for repeating elements
- Export to React if you need custom code later

### For Webflow
- Take the time to learn the Box Model
- Use classes and symbols for consistency
- Plan your CMS structure before building

### For Bubble
- Map out your database structure first
- Use reusable elements to save time
- Join the community forum for help

### For Softr
- Set up your Airtable base properly first
- Use pre-built blocks to move fast
- Customize gradually as you learn

Each tool has strengths - often you'll use multiple tools together in your workflow. Start with one, master it, then expand your toolkit.`
      },
      {
        id: "lesson-1-4",
        title: "How AI Transforms Web Creation (Prompt → Live Website)",
        duration: 13,
        content: `# How AI Transforms Web Creation

The traditional path from idea to live website involved multiple specialists and weeks of work. AI has compressed this timeline dramatically.

## The Traditional Way

### Old Development Process

**Step 1: Specifications (3-5 days)**
- Write detailed requirements document
- Create user stories
- Define technical architecture
- Get stakeholder approval

**Step 2: Design (5-10 days)**
- Create wireframes
- Design mockups in Figma
- Design system and style guide
- Multiple revision rounds

**Step 3: Development (2-4 weeks)**
- Write HTML, CSS, JavaScript
- Build backend APIs
- Set up database
- Implement all features
- Debug and fix issues

**Step 4: Deployment (1-3 days)**
- Configure servers
- Set up domains and SSL
- Deploy code
- Test in production

**Step 5: Optimization (ongoing)**
- Performance tuning
- SEO optimization
- Security hardening

**Total Timeline**: 4-8 weeks for a basic site
**Total Cost**: $5,000 - $50,000+ depending on complexity

## The AI-Powered Way

### Modern AI-Assisted Process

**Step 1: Describe Your Vision (5-10 minutes)**
Write a clear prompt describing what you want:
\`\`\`
Create a portfolio website with:
- Hero section with animated text
- About me page with timeline
- Project gallery with filtering by category
- Blog with search functionality
- Contact form with email integration
Use a modern blue color scheme and ensure mobile responsiveness
\`\`\`

**Step 2: AI Generation (2-5 minutes)**
- AI generates complete application
- Frontend, backend, and database
- Styled and responsive
- Best practices applied

**Step 3: Review and Refine (15-30 minutes)**
Make adjustments in plain language:
- "Make the hero section taller"
- "Add social media links to footer"
- "Change color scheme to dark mode"

**Step 4: One-Click Deployment (2 minutes)**
- Click "Deploy"
- Live URL generated
- SSL automatically configured

**Total Timeline**: 2-8 hours for a basic site
**Total Cost**: $0-$50 for hosting and domain

## Real Example Transformation

Let's see a complete example from prompt to live website.

### Your Initial Prompt

\`\`\`
Create a landing page for a fitness coaching business called "FitLife Pro"

Requirements:
- Hero section with background video and CTA button
- "Why Choose Us" section with 3 key benefits
- Testimonials carousel with 5 client reviews
- Pricing table with 3 tiers (Basic, Pro, Premium)
- Contact form with name, email, phone, and message
- Footer with social media links

Design: Use energetic colors (orange and dark blue), modern typography, 
and ensure everything is mobile-friendly
\`\`\`

### AI Output (Generated in 3 minutes)

The AI creates:

**1. Complete Structure**
- Responsive React components
- Proper semantic HTML
- Accessibility features built-in

**2. Styled Interface**
- Custom color palette applied
- Typography system
- Smooth animations and transitions
- Mobile-first responsive design

**3. Functionality**
- Contact form with validation
- Testimonials carousel that auto-rotates
- Smooth scroll navigation
- Hover effects and interactions

**4. Best Practices**
- SEO-optimized meta tags
- Performance optimizations
- Cross-browser compatibility
- Fast loading times

### Refinement Conversation

**You**: "Make the hero section taller and add a subtitle"
**AI**: *Updates hero section with increased height and adds subtitle field*

**You**: "Add icons to the benefits section"
**AI**: *Integrates icon library and adds relevant icons*

**You**: "Change pricing cards to have a highlighted middle option"
**AI**: *Styles middle pricing tier with accent colors and 'Most Popular' badge*

**Total refinement time**: 15 minutes

### Deployment

Click "Deploy" button → Live at fitlifepro.vercel.app in 90 seconds

## The AI Workflow in Detail

### Phase 1: Idea to Prompt

**Transform your idea into a clear prompt**:

❌ **Bad Prompt**: "Make me a website for my business"

✅ **Good Prompt**: 
\`\`\`
Create a professional services website for an accounting firm with:
- Homepage with hero, services overview, and testimonials
- About page with team member bios
- Services page with 4 main service offerings
- Resources page with blog posts
- Contact page with form and office location map
Use a trustworthy color scheme (navy blue and gold) and corporate style
\`\`\`

### Phase 2: Generation

**What AI Handles Automatically**:
- Code structure and file organization
- Component architecture
- Responsive breakpoints
- Form validation
- Error handling
- Loading states
- Common animations
- SEO basics

### Phase 3: Refinement

**Types of refinements you can make**:

**Design Changes**:
- "Make the header sticky on scroll"
- "Increase spacing between sections"
- "Change font to something more modern"

**Feature Additions**:
- "Add a search bar to the blog"
- "Include a newsletter signup in footer"
- "Add filtering to the services page"

**Content Updates**:
- "Update the hero headline"
- "Add more testimonials"
- "Change the CTA button text"

### Phase 4: Deployment

**Modern deployment is automatic**:
1. Push code to Git repository
2. Connect to hosting platform (Vercel, Netlify)
3. Automatic builds on every update
4. SSL certificate auto-configured
5. CDN distribution worldwide
6. Custom domain connection (optional)

## Comparing the Two Approaches

### Speed Comparison

| Task | Traditional | AI-Powered | Time Saved |
|------|-------------|------------|------------|
| Planning | 3-5 days | 30 minutes | 95% |
| Design | 5-10 days | 5 minutes (AI generates) | 99% |
| Development | 2-4 weeks | 2-8 hours | 95% |
| Deployment | 1-3 days | 2 minutes | 99% |
| **Total** | **4-8 weeks** | **2-8 hours** | **95%** |

### What You Still Control

Even with AI doing the heavy lifting, you maintain complete control over:

✅ **Vision and Direction**
- Overall goals and purpose
- Target audience
- Brand identity

✅ **Design Preferences**
- Color schemes
- Typography choices
- Layout structure

✅ **Feature Priorities**
- Which features to include
- User experience flow
- Functionality details

✅ **Content Strategy**
- Messaging and copy
- Images and media
- Blog and content

✅ **Business Logic**
- Pricing strategies
- User workflows
- Integration choices

### What AI Handles for You

🤖 **Technical Implementation**
- Writing clean, efficient code
- Handling edge cases
- Cross-browser compatibility
- Performance optimization

🤖 **Best Practices**
- Security implementations
- Accessibility standards
- SEO fundamentals
- Mobile responsiveness

🤖 **Common Patterns**
- Form validation
- Navigation systems
- Layout structures
- Component reusability

## The Future is Collaborative

The key insight is that **AI doesn't replace creativity—it amplifies it**.

You bring:
- Vision and ideas
- Business knowledge
- Design taste
- User understanding

AI brings:
- Technical execution
- Best practices
- Speed and efficiency
- Consistency

Together, you build better websites faster than ever before.

## Success Formula

\`\`\`
Clear Vision + Detailed Prompts + AI Tools + Iterative Refinement = Professional Website
\`\`\`

The better your prompts and the clearer your vision, the better your results. AI is a powerful tool, but it needs your guidance and creativity to build something truly great.`
      },
      {
        id: "lesson-1-5",
        title: "Setting Up Accounts and Basic Workflow",
        duration: 15,
        content: `# Setting Up Accounts and Basic Workflow

Before we build anything, let's set up the essential accounts and understand the basic workflow you'll use throughout this course.

## Required Accounts

### 1. AI Development Platform (Choose One to Start)

#### Replit (Recommended for Beginners)
**Why choose Replit**:
- Everything in one place (code, host, deploy)
- Built-in AI assistant
- Collaborative features
- Free tier is generous

**Setup Steps**:
1. Go to [replit.com](https://replit.com)
2. Click "Sign up"
3. Choose "Continue with Google" (easiest) or email
4. Verify your email
5. Complete the quick tutorial

**What you get**:
- Online code editor
- Instant preview
- Built-in AI assistant
- Free hosting for projects
- Collaborative workspaces

#### Lovable (Best for Design-First)
**Why choose Lovable**:
- Fastest from idea to live site
- Beautiful default designs
- Real-time previews
- Great for non-technical users

**Setup Steps**:
1. Visit [lovable.dev](https://lovable.dev)
2. Sign up with email or Google
3. Complete onboarding flow

#### Cursor (For More Technical Users)
**Why choose Cursor**:
- Professional-grade editor
- Works offline
- Full control over code
- Advanced AI features

**Setup Steps**:
1. Download from [cursor.sh](https://cursor.sh)
2. Install on your computer
3. Sign in for AI features
4. Import existing projects if needed

### 2. Deployment Services

#### Vercel (Recommended)
**Why Vercel**:
- Automatic deployments from Git
- Free SSL certificates
- Global CDN
- Generous free tier

**Setup Steps**:
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub (recommended)
3. Grant necessary permissions
4. You're ready to deploy

**What you get**:
- Unlimited static sites
- Free SSL
- Custom domains
- Automatic HTTPS
- Preview deployments

#### Netlify (Alternative)
**Similar to Vercel, great alternative**:
1. Visit [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Connect repositories

### 3. Version Control

#### GitHub (Highly Recommended)
**Why you need it**:
- Save your work safely
- Track changes over time
- Collaborate with others
- Required for auto-deployments

**Setup Steps**:
1. Go to [github.com](https://github.com)
2. Sign up for free account
3. Verify email
4. Install GitHub Desktop (optional but helpful)

**Best Practices**:
- Create a repository for each project
- Write clear commit messages
- Use branches for experiments

### 4. Optional but Valuable

#### Firebase (For Databases & Auth)
**When you need it**: Dynamic apps, user authentication
**Setup**: [firebase.google.com](https://firebase.google.com)
**What you get**: Database, authentication, file storage

#### Stripe (For Payments)
**When you need it**: E-commerce, membership sites
**Setup**: [stripe.com](https://stripe.com)
**What you get**: Payment processing, subscriptions

#### Cloudflare (For Domains & DNS)
**When you need it**: Custom domains, performance
**Setup**: [cloudflare.com](https://cloudflare.com)
**What you get**: Domain registration, DNS, CDN

## Basic Workflow Overview

### The Complete Development Cycle

\`\`\`
1. Define Requirements
   ↓
2. Create Prompt for AI
   ↓
3. Generate Initial Version
   ↓
4. Test and Preview
   ↓
5. Refine with Feedback
   ↓
6. Deploy to Production
   ↓
7. Monitor and Iterate
\`\`\`

Let's break down each step:

### Step 1: Define Requirements

Before writing any prompts, clarify:
- **Purpose**: What is this website for?
- **Audience**: Who will use it?
- **Key Features**: What must it have?
- **Design Preferences**: Colors, style, mood
- **Content**: What information to display

**Example Planning Document**:
\`\`\`
Project: Personal Portfolio
Purpose: Showcase my design work and get freelance clients
Audience: Potential clients, recruiters
Key Features:
  - Hero with my name and tagline
  - Portfolio gallery (12 projects)
  - About me section
  - Contact form
  - Blog (optional)
Design: Minimal, modern, dark mode, purple accents
Timeline: Launch in 1 week
\`\`\`

### Step 2: Create Prompt for AI

Transform requirements into clear instructions:

\`\`\`
Create a portfolio website for a UI/UX designer with:

Header:
- Logo on left
- Navigation menu (Work, About, Contact)
- Dark/light mode toggle on right

Hero Section:
- Large heading "Jane Smith - UI/UX Designer"
- Subheading "Creating delightful digital experiences"
- CTA button "View My Work" that scrolls to portfolio

Portfolio Section:
- Grid of 12 projects (4 columns on desktop, 2 on tablet, 1 on mobile)
- Each project card shows image, title, and tags
- Hover effect reveals "View Case Study" button
- Filter by tags (Web, Mobile, Branding)

About Section:
- Profile photo on left
- Bio text on right
- Skills list with proficiency bars
- "Download Resume" button

Contact Section:
- Form with name, email, message fields
- Send button
- Social media icons (Dribbble, LinkedIn, Twitter)

Design:
- Dark mode by default
- Purple accent color (#8B5CF6)
- Modern, minimal aesthetic
- Smooth scroll between sections
- Fully responsive
\`\`\`

### Step 3: Generate Initial Version

1. Paste your prompt into your chosen AI platform
2. Wait for generation (usually 1-5 minutes)
3. Review the initial output
4. Check that main elements are present

### Step 4: Test and Preview

**What to check**:
- ✅ All sections present
- ✅ Links work correctly
- ✅ Forms validate properly
- ✅ Images load
- ✅ Mobile responsive
- ✅ No console errors

**How to test**:
- Use preview mode in your platform
- Test on your phone
- Try different browsers
- Click all buttons and links

### Step 5: Refine with Feedback

Make adjustments iteratively:

**First Round**:
- "Increase hero section height by 50%"
- "Make project cards have rounded corners"
- "Add animation to skill bars"

**Second Round**:
- "Change purple to a warmer shade"
- "Add padding between sections"
- "Make contact form wider"

**Final Polish**:
- "Add subtle hover effects to navigation"
- "Include a smooth fade-in for sections on scroll"
- "Optimize images for faster loading"

### Step 6: Deploy to Production

#### Using Vercel (Recommended Path):

1. **Connect to GitHub**:
   - Create repository for your project
   - Push code to GitHub

2. **Import to Vercel**:
   - Log into Vercel
   - Click "New Project"
   - Import from GitHub
   - Select your repository

3. **Configure (usually automatic)**:
   - Vercel detects settings
   - Click "Deploy"

4. **Live in 60 seconds**:
   - Get a .vercel.app URL
   - Site is live globally

5. **Add Custom Domain (Optional)**:
   - Buy domain from Cloudflare/Namecheap
   - Add in Vercel settings
   - DNS automatically configured

### Step 7: Monitor and Iterate

**After launch**:
- Track visitor analytics
- Gather user feedback
- Monitor performance
- Fix any issues
- Add new features

## Workspace Organization

### Recommended Folder Structure

Create a organized system for your projects:

\`\`\`
my-projects/
├── learning/
│   ├── first-website/
│   ├── portfolio-v1/
│   └── practice-projects/
├── client-work/
│   ├── coffee-shop-site/
│   └── fitness-landing/
├── personal/
│   ├── blog/
│   └── portfolio-final/
└── resources/
    ├── templates/
    ├── images/
    └── notes/
\`\`\`

### Project Checklist Template

Use this for every project:

**Pre-Launch Checklist**:
- [ ] All content is final
- [ ] Forms tested and working
- [ ] Mobile responsive on all pages
- [ ] All links work
- [ ] Images optimized
- [ ] SEO titles and descriptions added
- [ ] Favicon added
- [ ] Analytics connected
- [ ] SSL certificate active (automatic on Vercel)
- [ ] Custom domain connected (if applicable)

## Practical First Project

Let's set everything up with a simple first project:

### Your First Website (15-minute exercise)

**Goal**: Build and deploy a simple "About Me" page

**Prompt to use**:
\`\`\`
Create a simple "About Me" page with:
- Header with my name
- Profile photo
- Short bio paragraph (3-4 sentences)
- List of 3 interests
- Links to Twitter and LinkedIn
- Footer with copyright

Use a clean, minimal design with blue accents
Make it mobile responsive
\`\`\`

**Steps**:
1. Open your AI platform (Replit recommended)
2. Create new project
3. Paste the prompt
4. Generate
5. Preview
6. Make 1-2 small adjustments
7. Deploy to Vercel
8. Share your live URL

**Expected time**: 10-15 minutes total

## Next Steps

With your accounts ready and workflow understood, you're prepared to start building real projects.

**Action Items**:
- [ ] Create accounts on your chosen platforms
- [ ] Verify all email addresses
- [ ] Complete any platform tutorials
- [ ] Build and deploy your first simple page
- [ ] Bookmark this course for reference
- [ ] Join community forums (Replit, Webflow, Bubble communities)

**Recommended Resources**:
- Replit Community: [ask.replit.com](https://ask.replit.com)
- Webflow University: [university.webflow.com](https://university.webflow.com)
- Bubble Forum: [forum.bubble.io](https://forum.bubble.io)

In the next module, we'll dive deep into understanding different website types and planning your first real project.

Remember: The best way to learn is by doing. Don't wait for perfection—start building!`
      }
    ]
  },
  {
    id: "module-2",
    number: 2,
    title: "Website Foundations",
    description: "Understand web architecture, choose the right website type for your project, plan effective layouts, and master deployment fundamentals.",
    lessons: [
      {
        id: "lesson-2-1",
        title: "Understanding Web Components (Frontend, Backend, Database)",
        duration: 15,
        content: `# Understanding Web Components

Every website is built from three fundamental components that work together: the frontend, backend, and database. Understanding these components helps you make better decisions about your project and communicate more effectively with AI agents.

## The Three Core Components

### Frontend (What Users See)

The **frontend** is everything users directly interact with in their web browser. It's the visible, interactive layer of your website.

**What it includes**:
- Visual design and layout
- Buttons, forms, and navigation
- Images, videos, and animations
- Text content and typography
- Interactive elements and responses

**Technologies**:
- **HTML**: Structure and content
- **CSS**: Styling and visual design
- **JavaScript**: Interactivity and dynamic behavior
- **React/Vue/Angular**: Modern frameworks for complex UIs

**Example**: When you visit Netflix:
- The movie thumbnails you see
- The play button you click
- The search bar where you type
- The smooth animations and transitions
All of this is the frontend.

### Backend (The Brain)

The **backend** is the server-side logic that processes requests, handles business rules, and manages data. Users never see it directly, but it powers everything behind the scenes.

**What it does**:
- Processes user requests
- Handles authentication and permissions
- Executes business logic
- Manages file uploads
- Sends emails and notifications
- Connects to external services (payment, maps, etc.)

**Technologies**:
- **Node.js/Express**: JavaScript on the server
- **Python/Django/Flask**: Python web frameworks
- **Ruby/Rails**: Ruby web framework
- **PHP/Laravel**: PHP framework
- **Serverless Functions**: Event-driven computing

**Example**: When you log into Netflix:
- Verifying your password (backend checks it)
- Loading your personalized recommendations (backend calculates them)
- Tracking what you've watched (backend records it)
- Processing your subscription payment (backend handles it)
All of this happens on the backend.

### Database (Long-term Memory)

The **database** is where all your data is permanently stored. Think of it as your website's filing cabinet or long-term memory.

**What it stores**:
- User accounts and profiles
- Content (posts, products, articles)
- Settings and preferences
- Transaction history
- Images and file references
- Relationships between data

**Types of Databases**:

**Relational Databases (SQL)**
- PostgreSQL, MySQL, SQLite
- Organized in tables with relationships
- Best for structured data
- Examples: User accounts, orders, inventory

**NoSQL Databases**
- MongoDB, Firebase, DynamoDB
- Flexible document structure
- Best for varied or evolving data
- Examples: Social media posts, user activity logs

**Example**: Netflix's database stores:
- Your account information
- Your viewing history
- Movie metadata (titles, descriptions, cast)
- Your watch list
- Subtitle preferences
- Billing information

## How They Work Together

### The Request-Response Cycle

\`\`\`
User Action (Frontend)
    ↓
1. You click "Add to Cart"
    ↓
Browser sends request to Backend
    ↓
2. Backend receives: "Add product #123 to user #456's cart"
    ↓
Backend queries Database
    ↓
3. Database stores: Cart entry for user #456
    ↓
Database confirms to Backend
    ↓
4. Backend sends success response
    ↓
Frontend updates display
    ↓
5. You see "Item added to cart" ✓
\`\`\`

### Real-World Example: Social Media Post

Let's trace what happens when you post on social media:

**Step 1: Frontend Action**
\`\`\`
You type: "Just finished building my first website!"
You click: "Post" button
\`\`\`

**Step 2: Frontend Sends to Backend**
\`\`\`
POST request to: /api/posts
Data sent:
{
  userId: "12345",
  content: "Just finished building my first website!",
  timestamp: "2024-11-05T10:30:00Z"
}
\`\`\`

**Step 3: Backend Processing**
\`\`\`
- Validates user is logged in
- Checks content length (not too long)
- Scans for prohibited content
- Generates unique post ID
- Prepares to save to database
\`\`\`

**Step 4: Database Storage**
\`\`\`
INSERT INTO posts:
- post_id: "789"
- user_id: "12345"
- content: "Just finished building my first website!"
- created_at: "2024-11-05T10:30:00Z"
- likes: 0
- comments: 0
\`\`\`

**Step 5: Backend Responds**
\`\`\`
Returns:
{
  success: true,
  postId: "789",
  message: "Post created successfully"
}
\`\`\`

**Step 6: Frontend Updates**
\`\`\`
- Displays your new post immediately
- Clears the text input
- Shows "Posted successfully" message
\`\`\`

## Website Architecture Patterns

### Static Website (No Backend/Database)

**Structure**:
\`\`\`
Frontend Only
- HTML files
- CSS styling
- JavaScript for basic interactions
- No server processing needed
\`\`\`

**Best For**:
- Portfolios
- Landing pages
- Documentation sites
- Company information pages

**Example**: Personal portfolio showcasing your work

### Dynamic Website (Frontend + Backend + Database)

**Structure**:
\`\`\`
Frontend ↔ Backend ↔ Database

User Interface ↔ Server Logic ↔ Data Storage
\`\`\`

**Best For**:
- Blogs with admin panel
- E-commerce sites
- News websites
- Booking systems

**Example**: Blog where you can add/edit posts through an admin interface

### Web Application (Complex Frontend + Backend + Database)

**Structure**:
\`\`\`
Rich Frontend Application
        ↓
    API Layer
        ↓
Backend Services
        ↓
Multiple Databases
\`\`\`

**Best For**:
- Social networks
- Project management tools
- SaaS applications
- Real-time collaboration tools

**Example**: Trello (project management), Slack (team communication)

## When You Need Each Component

### Frontend Always Required ✓
Every website needs a frontend. This is non-negotiable—it's what users see and interact with.

### Backend Sometimes Required
You need a backend when:
- Users create accounts and log in
- Content needs to be dynamically generated
- You're processing payments
- Users upload files
- You need to send emails
- You're connecting to external APIs

You DON'T need a backend for:
- Simple portfolios
- Static landing pages
- Pure information sites
- Single-page marketing sites

### Database Sometimes Required
You need a database when:
- Storing user accounts
- Managing content (blog posts, products)
- Saving user-generated content
- Tracking user activity
- Building any kind of application

You DON'T need a database for:
- Static content sites
- Simple landing pages
- Informational pages
- One-time campaign sites

## Modern Approaches with AI

### Traditional Approach
- Build frontend (weeks)
- Build backend (weeks)
- Set up database (days)
- Connect everything (days)
- Debug integration issues (days)

### AI-Powered Approach
**Single Prompt**:
\`\`\`
Create a blog website with:
- Homepage showing latest 10 posts
- Individual post pages
- Admin panel to create/edit/delete posts
- User authentication for admin
- Rich text editor for writing posts
- Tag system for organizing posts
\`\`\`

**AI Generates**:
- ✓ Complete frontend (React components)
- ✓ Backend API (Express.js)
- ✓ Database schema (PostgreSQL)
- ✓ Authentication system
- ✓ All components connected and working

**Time**: 10 minutes instead of weeks

## Key Concepts to Remember

### Separation of Concerns
Each component has a distinct role:
- Frontend: Presentation and user interaction
- Backend: Business logic and data processing
- Database: Data persistence and retrieval

### API (Application Programming Interface)
The "contract" between frontend and backend:
\`\`\`
Frontend says: "Give me user #123's profile"
Backend responds: { name: "John", email: "john@example.com" }
\`\`\`

### Authentication vs Authorization
- **Authentication**: Verifying who you are (login)
- **Authorization**: Verifying what you can do (permissions)
Both typically handled by backend

### Data Flow
\`\`\`
User Input → Frontend Validation → Backend Processing → 
Database Storage → Backend Response → Frontend Display
\`\`\`

## Practical Exercise: Identifying Components

For each website type, identify which components you need:

**Portfolio Website**
- Frontend: ✓ (Display projects)
- Backend: ✗ (No dynamic content)
- Database: ✗ (Content is static)

**Blog with Comments**
- Frontend: ✓ (Display posts and comments)
- Backend: ✓ (Handle comments, authentication)
- Database: ✓ (Store posts and comments)

**E-commerce Store**
- Frontend: ✓ (Product listings, cart)
- Backend: ✓ (Process orders, payments)
- Database: ✓ (Products, users, orders)

**Landing Page**
- Frontend: ✓ (Information and contact form)
- Backend: ✓ (Process contact form)
- Database: ✗ (Just email the form data)

## Common Patterns

### JAMstack (JavaScript, APIs, Markup)
- Static frontend
- Backend as serverless functions
- External services for database/auth
- Ultra-fast, secure, scalable

### Monolith
- Frontend, backend, database all in one codebase
- Simpler to develop and deploy
- Good for smaller projects

### Microservices
- Frontend separate
- Multiple backend services
- Separate databases per service
- Best for large, complex applications

Understanding these components helps you:
- Choose the right tools for your project
- Write better prompts for AI agents
- Understand what you're building
- Troubleshoot issues effectively
- Scale your projects as they grow

In the next lesson, we'll use this knowledge to choose the perfect website type for different scenarios.`
      },
      {
        id: "lesson-2-2",
        title: "Choosing the Right Website Type",
        duration: 16,
        content: `# Choosing the Right Website Type

Not all websites are created equal. Choosing the right type of website for your project is crucial—it affects development time, costs, complexity, and what tools you'll use.

## The Website Type Decision Matrix

### Quick Decision Tree

\`\`\`
Start Here: What's your primary goal?

→ Display information only?
  ├─ Yes → Static Website
  └─ No → Continue

→ Regularly updated content (blog, news)?
  ├─ Yes → Dynamic Website or CMS
  └─ No → Continue

→ Users need to log in and interact?
  ├─ Yes → Web Application
  └─ No → Continue

→ Build a community?
  ├─ Yes → Forum or Social Platform
  └─ No → Continue

→ Restrict content to members?
  ├─ Yes → Membership Site
  └─ No → Continue

→ List and organize items/businesses?
  └─ Yes → Directory Website
\`\`\`

## Comprehensive Website Type Guide

### 1. Static Website

**What it is**: Fixed content that doesn't change unless you manually update files.

**Characteristics**:
- Same content for all visitors
- No user accounts or login
- No database needed
- Lightning-fast loading
- Very secure (no backend to hack)
- Low maintenance

**Perfect For**:
- Personal portfolios
- Company landing pages
- Product showcase sites
- Event websites
- Resume/CV sites
- Small business information sites

**Not Suitable For**:
- User-generated content
- E-commerce
- Personalized experiences
- Frequent content updates

**Example Projects**:
- Design portfolio showcasing your work
- Restaurant menu and location page
- Wedding invitation website
- Company "About Us" site

**Development Time**: 2-8 hours
**Cost**: Free - $10/month (hosting)
**Best Tools**: Framer, Carrd, HTML/CSS, Vercel

**Real Example**:
\`\`\`
TechStartup Landing Page
- Hero section with value proposition
- Feature highlights
- Pricing table
- Team photos
- Contact information
- Footer with social links

No login required, same for everyone, super fast.
\`\`\`

### 2. Dynamic Website (CMS-Powered)

**What it is**: Content-driven site where content can be easily updated through an admin panel.

**Characteristics**:
- Admin panel for content management
- Database stores content
- Backend generates pages dynamically
- SEO-friendly
- Regular content updates
- Multiple content types

**Perfect For**:
- Blogs and publications
- News websites
- Magazine sites
- Content-heavy business sites
- Documentation sites
- Recipe websites

**Not Suitable For**:
- Complex user interactions
- Real-time collaboration
- Social features
- E-commerce (use specialized tools)

**Example Projects**:
- Personal blog about web development
- Local news website
- Recipe sharing blog
- Business blog with case studies

**Development Time**: 1-3 days
**Cost**: $10-50/month
**Best Tools**: WordPress, Webflow CMS, Ghost, Contentful

**Real Example**:
\`\`\`
Tech Blog
- Homepage with latest articles
- Category pages
- Individual article pages
- Author profiles
- Search functionality
- Comment system
- Newsletter signup

Admin writes posts in dashboard, visitors read them.
\`\`\`

### 3. Web Application

**What it is**: Interactive software accessed through a web browser, with user accounts and complex functionality.

**Characteristics**:
- User authentication required
- Personalized dashboards
- Real-time updates
- Complex business logic
- Rich interactivity
- Multiple user roles

**Perfect For**:
- SaaS products
- Project management tools
- CRM systems
- Productivity apps
- Financial tools
- Education platforms

**Not Suitable For**:
- Simple information sharing
- Marketing sites
- Basic blogs

**Example Projects**:
- Task management app (like Trello)
- Expense tracker
- Time tracking tool
- Online course platform
- Invoice generator

**Development Time**: 1-4 weeks
**Cost**: $25-100/month
**Best Tools**: Bubble, Replit, Custom code with React/Node

**Real Example**:
\`\`\`
Project Management Tool
- User signup and login
- Create projects and tasks
- Assign tasks to team members
- Track progress
- File attachments
- Comments and notifications
- Dashboard with analytics

Each user sees their own data and projects.
\`\`\`

### 4. Forum / Community Platform

**What it is**: Discussion-focused platform where users create and respond to topics.

**Characteristics**:
- User profiles
- Topic creation
- Threaded discussions
- Voting/reactions
- Moderation tools
- Categories and tags
- Notifications

**Perfect For**:
- Community building
- Support forums
- Q&A platforms
- Discussion boards
- Niche communities

**Not Suitable For**:
- One-way communication
- Private messaging focus
- Content publishing

**Example Projects**:
- Developer community forum
- Product support forum
- Hobby enthusiast community
- Local community board

**Development Time**: 2-6 weeks
**Cost**: $50-200/month
**Best Tools**: Discourse, Bubble, Custom development

**Real Example**:
\`\`\`
Photography Community Forum
- Categories: Beginner, Gear, Post-Processing
- Users post questions and tips
- Upload photo attachments
- Vote on helpful answers
- User reputation system
- Moderator controls
- Latest activity feed

Members help each other, build reputation.
\`\`\`

### 5. Social Media Platform

**What it is**: User-centric platform focused on connections, content sharing, and social interactions.

**Characteristics**:
- User profiles with followers
- Post creation (text, images, videos)
- Feed algorithm
- Likes, comments, shares
- Direct messaging
- Notifications
- Real-time updates

**Perfect For**:
- Niche social networks
- Professional networks
- Creative communities
- Local community platforms

**Not Suitable For**:
- Simple information sharing
- Content publishing without interaction
- Basic portfolios

**Example Projects**:
- Photo-sharing app for photographers
- Professional network for designers
- Local events and meetups platform
- Pet owners community

**Development Time**: 4-12 weeks
**Cost**: $100-500/month
**Best Tools**: Bubble, Custom development

**Real Example**:
\`\`\`
Designers Social Network
- User profiles with portfolio
- Post designs with descriptions
- Follow other designers
- Like and comment on posts
- Direct messaging
- Explore page with trending designs
- Notifications for interactions

Users build following, share work, network.
\`\`\`

### 6. Membership Site

**What it is**: Gated content platform where access is restricted to paying or registered members.

**Characteristics**:
- Member registration
- Payment/subscription integration
- Content access control
- Member-only areas
- Tiered access levels
- Content dripping (scheduled release)

**Perfect For**:
- Online courses
- Premium content
- Exclusive communities
- Subscription content
- Coaching programs

**Not Suitable For**:
- Public content
- Free resources
- Open communities

**Example Projects**:
- Online course platform
- Premium newsletter with archives
- Fitness coaching membership
- Business templates library

**Development Time**: 1-3 weeks
**Cost**: $30-100/month
**Best Tools**: Memberstack + Webflow, Teachable, Kajabi

**Real Example**:
\`\`\`
Web Development Course Membership
- Free tier: Sample lessons
- Pro tier ($29/mo): All courses
- Premium tier ($99/mo): Courses + coaching
- Member dashboard
- Progress tracking
- Certificate generation
- Community forum access

Members pay monthly, access exclusive content.
\`\`\`

### 7. Directory / Listing Site

**What it is**: Organized database of items, businesses, or resources that users can browse and search.

**Characteristics**:
- Searchable database
- Filtering and sorting
- Categories and tags
- Detail pages for each listing
- User-submitted entries (optional)
- Maps integration (often)

**Perfect For**:
- Business directories
- Job boards
- Product catalogs
- Resource libraries
- Event listings
- Real estate listings

**Not Suitable For**:
- Social interaction focus
- Complex user workflows
- Content publishing

**Example Projects**:
- Local restaurant directory
- Freelancer directory
- Tool and resource library
- Co-working space directory
- Startup directory

**Development Time**: 1-2 weeks
**Cost**: $20-75/month
**Best Tools**: Airtable + Softr, Webflow CMS, Custom development

**Real Example**:
\`\`\`
No-Code Tools Directory
- List of 200+ no-code tools
- Filter by: Category, Price, Features
- Search by name or description
- Each tool has detail page
- User ratings and reviews
- "Add tool" submission form
- Sort by popularity or alphabetical

Users find tools, submit new ones.
\`\`\`

## Comparison Table

| Website Type | Database | User Login | Best Deployment | Complexity | Dev Time | Monthly Cost |
|--------------|----------|------------|-----------------|------------|----------|--------------|
| **Static** | No | No | Vercel, Netlify | Very Low | Hours | $0-10 |
| **Dynamic** | Yes | Optional | Webflow, Vercel | Low | 1-3 days | $10-50 |
| **Web App** | Yes | Required | Vercel, Railway | High | 1-4 weeks | $25-100 |
| **Forum** | Yes | Required | Discourse, Custom | High | 2-6 weeks | $50-200 |
| **Social Media** | Yes | Required | Custom hosting | Very High | 4-12 weeks | $100-500 |
| **Membership** | Yes | Required | Vercel + Stripe | Medium | 1-3 weeks | $30-100 |
| **Directory** | Yes | Optional | Softr, Vercel | Medium | 1-2 weeks | $20-75 |

## Hybrid Approaches

### Combining Multiple Types

Many successful sites combine approaches:

**Example 1: SaaS with Content**
- Static pages for marketing (homepage, features, pricing)
- Web application for logged-in users
- Blog for content marketing (dynamic CMS)

**Example 2: Community + Membership**
- Free forum for all users
- Premium membership for exclusive content
- Static pages for information

**Example 3: Directory + Social**
- Directory of professionals
- Social profiles for each person
- Messaging between users
- Review and rating system

## Making Your Decision

### Answer These Questions:

1. **Will users create accounts?**
   - No → Static or Dynamic
   - Yes → Web App, Forum, Social, or Membership

2. **Is content updated frequently?**
   - Daily/Weekly → Dynamic CMS
   - Rarely → Static
   - By users → Web App/Forum/Social

3. **Do you need payments?**
   - No → Any type
   - One-time → Static + Stripe
   - Subscription → Membership or Web App

4. **Primary purpose?**
   - Information → Static or Dynamic
   - Interaction → Forum or Social
   - Functionality → Web App
   - Access control → Membership
   - Organization → Directory

5. **Budget for development?**
   - Low ($0-50) → Static or Dynamic
   - Medium ($50-500) → Web App or Directory
   - High ($500+) → Complex Web App or Social

### Common Mistakes to Avoid

❌ **Over-engineering**
Building a complex web app when a static site would suffice.

❌ **Under-planning**
Choosing static site when you actually need user accounts and database.

❌ **Wrong tool**
Using a CMS for an application, or building custom when a no-code tool exists.

❌ **Scope creep**
Starting with portfolio, adding blog, then forum, then social features...

✅ **Start simple, scale up**
Begin with the simplest type that meets your needs. You can always add complexity later.

## Practical Examples by Use Case

### "I want to showcase my work"
→ **Static Website**
Portfolio with projects, about page, contact form

### "I want to write and share articles"
→ **Dynamic Website**
Blog with CMS, categories, search

### "I want to build a productivity tool"
→ **Web Application**
Task manager with user accounts, dashboards

### "I want a community around my topic"
→ **Forum Platform**
Discussion boards, user profiles, moderation

### "I want to sell online courses"
→ **Membership Site**
Gated content, payment integration, progress tracking

### "I want users to share content and connect"
→ **Social Platform**
User feeds, follows, posts, comments

### "I want to list local businesses"
→ **Directory Site**
Searchable database, categories, maps

Choosing the right website type from the start saves time, money, and frustration. When in doubt, start simpler—it's easier to add complexity than to remove it.`
      },
      {
        id: "lesson-2-3",
        title: "Planning Layouts and Features",
        duration: 14,
        content: `# Planning Layouts and Features

Before you write a single prompt or design anything, proper planning ensures you build exactly what you need—nothing more, nothing less. A well-planned website is faster to build, easier to maintain, and better for users.

## The Planning Process

### Step 1: Define Your Goal

Start with the fundamental question: **What is the primary purpose of this website?**

**Examples of clear goals**:
- ✓ "Help potential clients see my work and contact me"
- ✓ "Sell handmade jewelry online"
- ✓ "Share photography tips and build an audience"
- ✓ "Provide a portal for students to access course materials"

**Examples of unclear goals**:
- ✗ "Be on the internet"
- ✗ "Look professional"
- ✗ "Have a website"

### Step 2: Know Your Audience

**Who will use this site?**
- Age range and demographics
- Technical skill level
- What they're looking for
- What devices they'll use

**Example**:
\`\`\`
Website: Freelance graphic designer portfolio
Audience: 
- Marketing managers at tech companies (25-45 years old)
- Looking to hire a designer
- Browsing on desktop during work hours
- Want to see work quickly and contact easily
- Moderate tech skills

Design Implications:
- Professional, modern aesthetic
- Large, prominent work samples
- Easy-to-find contact form
- Fast loading (they're busy)
- Works perfectly on desktop
\`\`\`

### Step 3: List Essential Features

Divide features into three categories:

**Must-Have** (Core features without which the site fails its purpose)
- These are non-negotiable
- Site can't launch without them

**Should-Have** (Important but not critical)
- Enhance user experience
- Can be added post-launch if needed

**Nice-to-Have** (Bonus features)
- Would be cool but not necessary
- Consider for version 2

**Example: Freelance Portfolio**
\`\`\`
Must-Have:
- Portfolio gallery with 10-15 projects
- About me section
- Contact form
- Responsive on all devices

Should-Have:
- Categorized projects (branding, web, print)
- Case studies for top projects
- Testimonials from clients
- Resume download

Nice-to-Have:
- Blog about design process
- Newsletter signup
- Dark mode toggle
- Animation on scroll
\`\`\`

## Planning Layout Structure

### Common Layout Patterns

#### 1. Single Page Layout (Landing Page)

**Structure**:
\`\`\`
Header (Navigation)
    ↓
Hero Section
    ↓
Features/Benefits
    ↓
Social Proof
    ↓
Call to Action
    ↓
Footer
\`\`\`

**Best For**: Products, services, events, portfolios
**Pros**: Simple, focused, high conversion
**Cons**: Limited content, not great for SEO

#### 2. Multi-Page Layout

**Structure**:
\`\`\`
Homepage
├── About
├── Services/Products
├── Portfolio/Work
├── Blog
└── Contact
\`\`\`

**Best For**: Businesses, professionals, agencies
**Pros**: Organized content, better SEO, more information
**Cons**: More to maintain, needs navigation

#### 3. Blog/Content Layout

**Structure**:
\`\`\`
Homepage (Latest posts)
├── Category pages
├── Individual post pages
├── About
└── Archive/Search
\`\`\`

**Best For**: Content creators, publications, magazines
**Pros**: Great for SEO, easy to update, builds audience
**Cons**: Requires regular content creation

#### 4. Dashboard Layout (Web App)

**Structure**:
\`\`\`
Sidebar Navigation
Main Content Area (Dashboard)
├── Dashboard/Home
├── Feature A
├── Feature B
├── Settings
└── Profile
\`\`\`

**Best For**: Web applications, tools, SaaS
**Pros**: Organized functionality, familiar pattern
**Cons**: More complex to build

### Section Planning Template

For each page or section, plan these elements:

**Section Name**: [Hero Section]
**Purpose**: Capture attention and communicate value proposition
**Content Needed**:
- Headline (1 sentence)
- Subheadline (1-2 sentences)
- Call-to-action button
- Background image or video

**Design Notes**:
- Full viewport height
- Center-aligned text
- Large, bold typography
- High contrast for readability

## Feature Planning Framework

### User Stories Method

Write features as user stories:
\`\`\`
As a [type of user],
I want to [do something],
So that [achieve goal].
\`\`\`

**Examples**:
\`\`\`
As a potential client,
I want to see project case studies,
So that I can evaluate the designer's skills.

As a blog reader,
I want to search articles by topic,
So that I can find relevant content quickly.

As a member,
I want to track my course progress,
So that I know what to complete next.
\`\`\`

### Feature Specifications

For each feature, detail:

**Feature**: Project Filtering
**Description**: Allow visitors to filter portfolio projects by category
**Requirements**:
- Categories: Web Design, Branding, Print, UI/UX
- Click category to filter
- Show all when no filter selected
- Smooth transition between states
**Priority**: Should-have
**Complexity**: Low

## Content Planning

### Content Inventory

List all content you need to prepare:

**Text Content**:
- [ ] Homepage headline and copy
- [ ] About me bio (150-200 words)
- [ ] Service descriptions
- [ ] Project descriptions
- [ ] Testimonials (3-5)
- [ ] Contact page copy
- [ ] Footer information

**Visual Content**:
- [ ] Logo
- [ ] Profile photo
- [ ] Project images (10-15)
- [ ] Service icons
- [ ] Background images/videos

**Other Assets**:
- [ ] Resume PDF
- [ ] Social media links
- [ ] Contact information

### Writing Effective Copy

**Headlines** (5-10 words):
- Clear and specific
- Benefit-focused
- Action-oriented

❌ "Welcome to My Website"
✓ "Helping Startups Launch Beautiful Brands"

**Subheadlines** (10-20 words):
- Expand on headline
- Address pain point or desire
- Lead to action

**Call-to-Action** (2-4 words):
- Specific action
- Value-oriented
- Creates urgency

❌ "Click Here"
✓ "View My Work"
✓ "Start Free Trial"
✓ "Download Guide"

## Navigation Planning

### Navigation Best Practices

**Keep it Simple**:
- 5-7 main navigation items maximum
- Clear, descriptive labels
- Logical order

**Common Navigation Patterns**:
\`\`\`
Logo | Home | About | Services | Work | Blog | Contact
\`\`\`

\`\`\`
Logo | Products | Solutions | Pricing | Resources | Login
\`\`\`

\`\`\`
Logo | Portfolio | About | Process | Contact | [CTA Button]
\`\`\`

**Mobile Navigation**:
- Hamburger menu for small screens
- Essential items always visible
- Easy to access and close

### Information Architecture

Create a sitemap showing page hierarchy:

\`\`\`
Homepage
├── About
│   └── Team
├── Services
│   ├── Web Design
│   ├── Branding
│   └── Consulting
├── Portfolio
│   └── [Individual Projects]
├── Blog
│   ├── [Categories]
│   └── [Individual Posts]
└── Contact
\`\`\`

## Wireframing Basics

### Low-Fidelity Wireframe (Sketch)

Before getting into details, sketch rough layouts:

\`\`\`
Homepage Wireframe:

┌─────────────────────────────────┐
│ [Logo]    Nav  Nav  Nav  [CTA] │
├─────────────────────────────────┤
│                                 │
│        [Large Heading]          │
│       [Subheading Text]         │
│          [CTA Button]           │
│                                 │
├─────────────────────────────────┤
│  [Project]  [Project]  [Project]│
│  [Project]  [Project]  [Project]│
├─────────────────────────────────┤
│     "What I Do" Section         │
│  [Icon] [Icon] [Icon]           │
├─────────────────────────────────┤
│   Testimonials                  │
├─────────────────────────────────┤
│   Contact Form                  │
├─────────────────────────────────┤
│   Footer Links | Social         │
└─────────────────────────────────┘
\`\`\`

### What to Include in Wireframes

- Content blocks and hierarchy
- Navigation placement
- Call-to-action locations
- Image placeholders
- General spacing and layout

### What NOT to Worry About

- Exact colors
- Specific fonts
- Pixel-perfect alignment
- Final copy
- High-res images

## Planning for Responsiveness

### Think in Breakpoints

**Desktop (1200px+)**:
- Multi-column layouts
- Larger images
- Expanded navigation

**Tablet (768px - 1199px)**:
- 2-column layouts
- Slightly smaller images
- Collapsed navigation possible

**Mobile (< 768px)**:
- Single column
- Stacked elements
- Hamburger menu
- Larger touch targets

### Mobile-First Mindset

Plan your mobile layout first:
1. What's most important?
2. What can be simplified?
3. How does navigation work?
4. Are buttons big enough to tap?

## Creating a Planning Document

### Simple Planning Template

\`\`\`markdown
# Website Planning Document

## Project Overview
- **Name**: [Site name]
- **Purpose**: [Primary goal]
- **Audience**: [Target users]
- **Timeline**: [Launch date]

## Pages
1. Homepage
2. About
3. Portfolio
4. Contact

## Features
### Must-Have
- [ ] Feature 1
- [ ] Feature 2

### Should-Have
- [ ] Feature 3
- [ ] Feature 4

### Nice-to-Have
- [ ] Feature 5

## Content Checklist
- [ ] Logo
- [ ] Hero image
- [ ] About bio
- [ ] Project images
- [ ] Testimonials

## Design Direction
- **Style**: Modern, minimal
- **Colors**: Blue and white
- **Mood**: Professional but approachable

## Technical Requirements
- Responsive design
- Fast loading
- Contact form
- SEO optimization
\`\`\`

## From Planning to Prompt

Transform your planning document into AI prompts:

**Planning**:
\`\`\`
Portfolio site with:
- Hero section
- Project grid (12 items, 3 columns)
- About section with photo
- Contact form
- Modern, minimal design
- Blue color scheme
\`\`\`

**Prompt for AI**:
\`\`\`
Create a portfolio website for a web designer with these sections:

Header:
- Logo on left
- Navigation: Work, About, Contact
- Sticky on scroll

Hero Section:
- Full viewport height
- Heading: "Creating Digital Experiences"
- Subheading: "UI/UX Designer based in San Francisco"
- CTA button: "View Projects"

Portfolio Section:
- Grid of 12 projects (3 columns desktop, 2 tablet, 1 mobile)
- Each project: image, title, category tag
- Hover effect showing "View Project" overlay
- Filter buttons: All, Web, Mobile, Branding

About Section:
- Profile photo on left (circular)
- Bio on right (200 words)
- Skills list with icons
- "Download Resume" button

Contact Section:
- Form with name, email, message fields
- Submit button
- Social media links below

Footer:
- Copyright
- Social icons

Design:
- Modern, minimal aesthetic
- Primary color: #2563eb (blue)
- Clean typography
- Ample white space
- Smooth animations on scroll
- Fully responsive
\`\`\`

## Common Planning Mistakes

❌ **Planning Too Much**
Spending weeks on perfect plan instead of building

❌ **Planning Too Little**
Jumping straight to building without clear direction

❌ **Feature Overload**
Including every possible feature instead of focusing on essentials

❌ **Ignoring Users**
Planning for what you want instead of what users need

❌ **No Prioritization**
Treating all features as equally important

✅ **Good Planning Balance**
- 2-4 hours of planning
- Clear priorities
- Focus on user needs
- Room for iteration
- Actionable outcomes

Remember: Plans are meant to guide, not constrain. Stay flexible and adjust as you build and learn.`
      },
      {
        id: "lesson-2-4",
        title: "Domain, Hosting, and Deployment Basics",
        duration: 15,
        content: `# Domain, Hosting, and Deployment Basics

Understanding domains, hosting, and deployment is essential for getting your website live on the internet. These concepts sound technical, but they're actually straightforward when you break them down.

## Understanding Domains

### What is a Domain Name?

A **domain name** is your website's address on the internet—the URL people type to visit your site.

**Examples**:
- \`google.com\`
- \`yourportfolio.com\`
- \`myawesomeblog.net\`

**Anatomy of a Domain**:
\`\`\`
https://www.yoursite.com/about
  │      │      │       │    │
  │      │      │       │    └─ Path (page)
  │      │      │       └────── Domain name
  │      │      └────────────── Top-level domain (TLD)
  │      └───────────────────── Subdomain
  └──────────────────────────── Protocol
\`\`\`

### Types of Top-Level Domains (TLDs)

**Generic TLDs**:
- \`.com\` - Most common, best for businesses
- \`.net\` - Originally for networks
- \`.org\` - Originally for organizations
- \`.io\` - Popular with tech startups
- \`.dev\` - For developers
- \`.design\` - For designers
- \`.app\` - For applications

**Country TLDs**:
- \`.us\` - United States
- \`.uk\` - United Kingdom
- \`.ca\` - Canada
- \`.de\` - Germany

### Choosing a Domain Name

**Best Practices**:
✓ Keep it short (under 15 characters)
✓ Make it memorable
✓ Easy to spell and pronounce
✓ Avoid numbers and hyphens
✓ Use keywords when relevant
✓ Prefer .com when possible

**Examples**:

❌ **Bad**: \`my-awesome-design-portfolio-2024.com\`
✓ **Good**: \`janesmithdesign.com\`

❌ **Bad**: \`bestwebsitesever123.net\`
✓ **Good**: \`webstudio.io\`

### Where to Buy Domains

**Recommended Registrars**:

**Namecheap**
- Pricing: $8-15/year
- Pros: Affordable, good support, free privacy
- Best for: Budget-conscious buyers

**Cloudflare**
- Pricing: At-cost ($8-10/year for .com)
- Pros: Best pricing, integrated DNS, security
- Best for: Technical users, best value

**Google Domains** (Now Squarespace Domains)
- Pricing: $12-20/year
- Pros: Simple interface, email forwarding
- Best for: Simplicity seekers

**Porkbun**
- Pricing: $8-12/year
- Pros: Good prices, modern interface
- Best for: Good balance of price and features

### Domain Costs

**Initial Registration**:
- .com: $8-15/year
- .io: $30-40/year
- .design: $20-30/year
- .net/.org: $10-15/year

**Renewal Costs**: Often same or slightly higher
**Transfer Costs**: Usually free + 1 year renewal

**Hidden Costs to Watch For**:
- Privacy protection (should be free)
- Email forwarding (usually included)
- Auto-renewal (check pricing)

## Understanding Hosting

### What is Web Hosting?

**Hosting** is the service that stores your website files and makes them accessible on the internet. Think of it as renting space on a computer (server) that's always connected to the internet.

### Types of Hosting

#### 1. Static Hosting (Best for Most Projects)

**What it hosts**: HTML, CSS, JavaScript files
**No server-side processing**

**Best For**:
- Portfolios
- Landing pages
- Marketing sites
- Documentation

**Providers**:
- **Vercel**: Free, auto-deploy from Git, custom domains
- **Netlify**: Free, similar to Vercel, great forms
- **Cloudflare Pages**: Free, fastest globally
- **GitHub Pages**: Free, simple, for GitHub users

**Pricing**: Usually FREE
**Speed**: Very fast (CDN-distributed)
**Scalability**: Automatic, handles traffic spikes

#### 2. Platform Hosting (No-Code Tools)

**What it hosts**: Entire websites built on platforms

**Examples**:
- **Webflow**: $14-39/month (includes hosting)
- **Framer**: $5-15/month per site
- **Squarespace**: $16-49/month
- **Wix**: $16-45/month

**Best For**:
- Sites built on those platforms
- All-in-one solutions
- Less technical users

**Pricing**: $10-50/month typically
**Ease**: Easiest (one-click publish)

#### 3. Application Hosting (For Web Apps)

**What it hosts**: Full-stack applications with backend

**Providers**:
- **Vercel**: Free tier, scales up
- **Railway**: $5-20/month
- **Render**: Free tier, $7+/month
- **Heroku**: $5-25/month
- **DigitalOcean**: $5-10/month

**Best For**:
- Web applications
- Sites with databases
- Backend APIs

**Pricing**: $0-50/month depending on scale

#### 4. Traditional Hosting (Avoid for New Projects)

**Old-school web hosts**: Bluehost, HostGator, GoDaddy

**Why to avoid**:
- Slower than modern alternatives
- More complex to set up
- Usually more expensive
- Less reliable
- Worse support

**Only use if**: You have a specific requirement or legacy site

## Modern Deployment Workflow

### The Git-Based Deployment Process

This is the modern standard:

\`\`\`
1. Write code locally or in cloud IDE
    ↓
2. Push to GitHub/GitLab
    ↓
3. Connect repo to hosting platform (Vercel/Netlify)
    ↓
4. Automatic deployment on every push
    ↓
5. Live site updated automatically
\`\`\`

### Setting Up Deployment (Vercel Example)

**Step 1: Prepare Your Project**
\`\`\`bash
# Ensure your project is in Git
git init
git add .
git commit -m "Initial commit"
\`\`\`

**Step 2: Push to GitHub**
\`\`\`bash
# Create repository on GitHub
# Then connect and push
git remote add origin https://github.com/username/project.git
git push -u origin main
\`\`\`

**Step 3: Deploy to Vercel**
1. Go to vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Configure settings (usually auto-detected)
5. Click "Deploy"

**Step 4: Get Your Live URL**
\`\`\`
Your site is live at:
https://project-name.vercel.app
\`\`\`

**Step 5: Add Custom Domain (Optional)**
1. Buy domain (Namecheap, Cloudflare)
2. In Vercel, add custom domain
3. Update DNS records (Vercel provides instructions)
4. Wait 5-30 minutes for DNS propagation
5. Site live at your custom domain

### Deployment Best Practices

**Use Environment Variables**:
Store sensitive data (API keys) in environment variables, not in code

**Enable HTTPS**:
Always use HTTPS (automatic with Vercel/Netlify)

**Set Up Automatic Deployments**:
Push to Git → automatic deployment

**Use Preview Deployments**:
Test changes on temporary URLs before going live

## DNS and Domain Configuration

### What is DNS?

**DNS (Domain Name System)** translates domain names to IP addresses.

\`\`\`
When someone types: yoursite.com
DNS translates to: 192.158.1.38 (server IP address)
Browser connects to server
Website loads
\`\`\`

### Common DNS Record Types

**A Record**: Points domain to IP address
\`\`\`
yoursite.com → 192.158.1.38
\`\`\`

**CNAME Record**: Points domain to another domain
\`\`\`
www.yoursite.com → yoursite.vercel.app
\`\`\`

**MX Record**: Email server configuration
\`\`\`
yoursite.com → mail.google.com (for Gmail)
\`\`\`

### Connecting Custom Domain

**Typical Process**:

1. **Buy domain** (Namecheap, Cloudflare)

2. **Add domain in hosting platform** (Vercel/Netlify)

3. **Update DNS records** at domain registrar:
\`\`\`
Type: A
Name: @
Value: [hosting platform's IP]

Type: CNAME  
Name: www
Value: [your-project.vercel.app]
\`\`\`

4. **Wait for propagation** (5 minutes - 48 hours, usually < 1 hour)

5. **Verify SSL certificate** (automatic on modern platforms)

## SSL and Security

### What is SSL/TLS?

**SSL** (Secure Sockets Layer) encrypts data between browser and server.

**Indicators**:
- \`https://\` in URL (not \`http://\`)
- Padlock icon in browser
- "Secure" or "Connection is secure"

### Why SSL Matters

✓ **Security**: Encrypts sensitive data
✓ **Trust**: Visitors see site is secure
✓ **SEO**: Google ranks HTTPS sites higher
✓ **Required**: Many features require HTTPS

### Getting SSL

**Modern Platforms** (Automatic):
- Vercel: Automatic, free
- Netlify: Automatic, free
- Cloudflare Pages: Automatic, free

**Traditional Hosts**:
- Let's Encrypt: Free but manual setup
- Paid SSL: $50-200/year (unnecessary now)

## Complete Deployment Checklist

**Before Launch**:
- [ ] Test site on multiple devices
- [ ] Verify all links work
- [ ] Check forms submit correctly
- [ ] Optimize images for web
- [ ] Add meta tags (SEO)
- [ ] Set up analytics (Google Analytics)
- [ ] Create 404 page
- [ ] Add favicon

**Domain & Hosting**:
- [ ] Purchase domain name
- [ ] Connect domain to hosting
- [ ] Verify DNS records
- [ ] Confirm SSL certificate active
- [ ] Test www and non-www versions both work

**Post-Launch**:
- [ ] Submit sitemap to Google Search Console
- [ ] Set up monitoring/uptime checks
- [ ] Create backup process
- [ ] Document deployment process
- [ ] Share site URL

## Common Deployment Scenarios

### Scenario 1: Simple Portfolio

**Domain**: Buy from Namecheap ($10/year)
**Hosting**: Vercel (free)
**Deployment**: Git push → auto-deploy
**Total Cost**: $10/year

### Scenario 2: Blog with CMS

**Option A: Webflow**
- **Domain**: Included or external
- **Hosting**: Webflow ($14/month)
- **Total**: $168/year

**Option B: Custom + Headless CMS**
- **Domain**: Namecheap ($10/year)
- **Hosting**: Vercel (free)
- **CMS**: Contentful (free tier)
- **Total**: $10/year

### Scenario 3: Web Application

**Domain**: Cloudflare ($10/year)
**Hosting**: Vercel or Railway
- Free tier: $0/month
- Starter: $20/month (with database)
**Total**: $10-250/year depending on scale

## Troubleshooting Common Issues

### Domain Not Working

**Check**:
1. DNS records correctly configured?
2. Waited long enough for propagation? (try 24 hours)
3. Cleared browser cache?
4. Typing correct URL (www vs non-www)?

### SSL Certificate Issues

**Solutions**:
- Wait 10-15 minutes after domain connection
- Force HTTPS in hosting settings
- Check DNS records are correct
- Contact hosting support if persists

### Deployment Failed

**Common Causes**:
- Build errors in code
- Missing environment variables
- Incorrect build commands
- Node/package version issues

**Fix**:
- Check deployment logs
- Test build locally first
- Verify environment variables
- Match local and deployment environments

## Cost Summary

### Minimum Annual Cost

**Free Option**:
- Domain: Use .vercel.app subdomain (free)
- Hosting: Vercel (free)
- **Total: $0/year**

**Professional Setup**:
- Domain: Custom .com ($10/year)
- Hosting: Vercel/Netlify (free)
- **Total: $10/year**

**Web Application**:
- Domain: $10/year
- Hosting + Database: $20/month
- **Total: $250/year**

### Budget Tiers

**Hobby/Learning**: $0-20/year
**Professional Portfolio**: $10-50/year
**Business Website**: $50-200/year
**Web Application**: $100-500/year
**High-Traffic Site**: $500+/year

The barrier to getting online has never been lower. You can have a professional website live with a custom domain for less than $20/year—less than two cups of coffee per month.`
      },
      {
        id: "lesson-2-5",
        title: "Practical Setup Checklist Before You Start",
        duration: 10,
        content: `# Practical Setup Checklist Before You Start

Before diving into building your website, having the right accounts, tools, and resources ready will save you time and frustration. This lesson provides a practical checklist to ensure you're fully prepared.

## Essential Accounts Setup

### Development Platform (Choose One)

**✓ Replit** (Recommended for Beginners)
- [ ] Create account at replit.com
- [ ] Verify email address
- [ ] Complete onboarding tutorial
- [ ] Create your first test project

**OR Lovable** (Best for Quick Prototypes)
- [ ] Sign up at lovable.dev
- [ ] Connect GitHub account (optional)
- [ ] Explore template gallery

**OR Cursor** (For Code-First Approach)
- [ ] Download from cursor.sh
- [ ] Install on your computer
- [ ] Set up AI features
- [ ] Configure preferences

### Version Control

**✓ GitHub** (Highly Recommended)
- [ ] Create account at github.com
- [ ] Verify email
- [ ] Set up profile (photo, bio)
- [ ] Install GitHub Desktop (optional but helpful)
- [ ] Create test repository
- [ ] Learn basic Git commands

**Basic Git Commands to Know**:
\`\`\`bash
git init              # Start new repository
git add .             # Stage all changes
git commit -m "msg"   # Save changes
git push              # Upload to GitHub
git pull              # Download updates
\`\`\`

### Deployment Platform

**✓ Vercel** (Recommended)
- [ ] Sign up at vercel.com
- [ ] Connect GitHub account
- [ ] Deploy a test project
- [ ] Explore dashboard

**✓ Alternative: Netlify**
- [ ] Create account at netlify.com
- [ ] Connect GitHub
- [ ] Review features

### Domain Registrar (If Using Custom Domain)

**✓ Namecheap** or **Cloudflare**
- [ ] Create account
- [ ] Add payment method
- [ ] Search for available domains
- [ ] Save desired domains to watch list

### Optional but Valuable

**✓ Analytics**
- [ ] Google Analytics account
- [ ] Google Search Console

**✓ Design Resources**
- [ ] Unsplash account (free images)
- [ ] Figma account (design tool)

**✓ Content Management**
- [ ] Notion account (planning, notes)
- [ ] Airtable account (database backend)

## Tools and Software

### Browser Setup

**Primary Browser** (Chrome or Brave recommended)
- [ ] Install latest version
- [ ] Install extensions:
  - [ ] ColorZilla (color picker)
  - [ ] Lighthouse (performance testing)
  - [ ] Responsive Viewer (test multiple screens)

**Secondary Browser for Testing**
- [ ] Firefox or Safari
- [ ] Check site works across browsers

### Design Tools

**✓ Basic Image Editing**
- [ ] Photopea (free, web-based)
- [ ] Canva account (templates, simple editing)
- [ ] Remove.bg account (background removal)

**✓ Icon Resources**
- [ ] Bookmark lucide.dev (icon library)
- [ ] Bookmark heroicons.com
- [ ] Bookmark fontawesome.com

**✓ Color Tools**
- [ ] Bookmark coolors.co (color palette generator)
- [ ] Bookmark color.adobe.com
- [ ] Install ColorZilla browser extension

### Content Preparation Tools

**✓ Text Editor**
- [ ] VS Code (if coding)
- [ ] Notion (planning and drafts)
- [ ] Google Docs (collaborative writing)

**✓ Screenshot/Screen Recording**
- [ ] Built-in tools (Windows Snip, Mac Screenshot)
- [ ] Loom account (screen recording)
- [ ] CloudApp (quick sharing)

## Content and Assets Checklist

### Text Content Ready

**Professional Information**:
- [ ] Your name/business name
- [ ] Tagline or value proposition
- [ ] Short bio (50 words)
- [ ] Long bio (200 words)
- [ ] List of services/skills
- [ ] Contact information

**Website Copy**:
- [ ] Homepage headline
- [ ] About page content
- [ ] Service/product descriptions
- [ ] Call-to-action text
- [ ] Footer information

### Visual Assets

**Brand Assets**:
- [ ] Logo (SVG or PNG, transparent background)
- [ ] Favicon (512x512px image)
- [ ] Brand colors (hex codes noted)
- [ ] Font preferences decided

**Content Images**:
- [ ] Profile/team photos (high resolution)
- [ ] Project/portfolio images
- [ ] Product photos (if applicable)
- [ ] Background images/videos
- [ ] Icon preferences (outline vs solid)

**Image Requirements**:
- [ ] High resolution (at least 1920px wide for heroes)
- [ ] Optimized file size (use TinyPNG.com)
- [ ] Appropriate format (JPG for photos, PNG for graphics)
- [ ] Organized in folders

### Other Assets

**Documents**:
- [ ] Resume/CV (PDF)
- [ ] Case studies (PDF or ready to paste)
- [ ] White papers/resources

**Media**:
- [ ] Video files (hosted on YouTube/Vimeo preferred)
- [ ] Audio files (if podcast/music site)

**Social Proof**:
- [ ] Client testimonials (3-5 written)
- [ ] Client logos (with permission)
- [ ] Reviews/ratings
- [ ] Awards or certifications

## Project Planning Documents

### Create These Before Building

**✓ Project Brief** (15 minutes)
\`\`\`
Project Name: _______________
Type of Website: _______________
Primary Goal: _______________
Target Audience: _______________
Launch Date: _______________
\`\`\`

**✓ Feature List** (20 minutes)
- [ ] List must-have features
- [ ] List should-have features
- [ ] List nice-to-have features
- [ ] Prioritize top 3

**✓ Sitemap** (10 minutes)
- [ ] List all pages needed
- [ ] Organize page hierarchy
- [ ] Plan navigation structure

**✓ Content Outline** (30 minutes)
- [ ] Write main headlines
- [ ] Draft key copy points
- [ ] Note CTAs for each page
- [ ] List all sections per page

## Technical Preparation

### Environment Setup

**✓ Test Development Environment**:
- [ ] Create test project in chosen platform
- [ ] Verify can preview locally
- [ ] Test deployment to staging
- [ ] Confirm can make changes

**✓ Set Up Workflow**:
- [ ] Decide on code editor/platform
- [ ] Connect GitHub
- [ ] Link deployment service
- [ ] Test automatic deployment

### API Keys and Integrations

**If Using Third-Party Services**:
- [ ] Google Maps API (for location features)
- [ ] Email service (Sendgrid, Mailgun)
- [ ] Payment processor (Stripe account)
- [ ] Analytics tracking ID
- [ ] Social media API keys (if needed)

**Store Securely**:
- [ ] Use environment variables
- [ ] Never commit to Git
- [ ] Document what each key is for

## Learning Resources Bookmarked

### Documentation

**✓ Bookmark These**:
- [ ] Your chosen platform docs (Replit, Lovable, etc.)
- [ ] Vercel documentation
- [ ] MDN Web Docs (reference)
- [ ] Can I Use (browser compatibility)

### Communities

**✓ Join These**:
- [ ] Replit community (if using Replit)
- [ ] Webflow community (if using Webflow)
- [ ] Reddit: r/webdev, r/web_design
- [ ] Discord servers for your tools

### Quick Reference

**✓ Cheat Sheets**:
- [ ] HTML cheat sheet
- [ ] CSS cheat sheet
- [ ] Markdown guide
- [ ] Git commands reference

## Pre-Launch Checklist

### Before You Start Building

**Planning Complete**:
- [ ] Goal clearly defined
- [ ] Audience identified
- [ ] Features prioritized
- [ ] Content prepared
- [ ] Design direction decided

**Accounts Ready**:
- [ ] Development platform set up
- [ ] GitHub account created
- [ ] Deployment platform connected
- [ ] Domain purchased (if custom)

**Assets Organized**:
- [ ] All images collected and optimized
- [ ] Copy written and reviewed
- [ ] Brand colors and fonts decided
- [ ] Logo and favicon ready

**Tools Installed**:
- [ ] Browser with dev tools
- [ ] Image editing capability
- [ ] Screen recording (for tutorials/demos)

**Knowledge Refreshed**:
- [ ] Completed course Modules 1-2
- [ ] Bookmarked key resources
- [ ] Know where to get help

## Time-Saving Tips

### Before You Build

**Collect Inspiration** (30 minutes):
- [ ] Find 5-10 websites you like
- [ ] Screenshot elements you want
- [ ] Note what you like about each
- [ ] Save to inspiration folder

**Set Up Templates**:
- [ ] Create standard text snippets
- [ ] Save color palette
- [ ] Prepare image sizes guide
- [ ] Make reusable components list

**Organize Workspace**:
- [ ] Create project folder structure
- [ ] Set up naming conventions
- [ ] Prepare asset library
- [ ] Create backup system

## Common Preparation Mistakes

### Avoid These

❌ **Starting Without Content**
Don't start building if you don't have text and images ready

❌ **No Clear Goal**
Building without knowing what you want achieves nothing

❌ **Skipping Planning**
"Winging it" leads to wasted time and poor results

❌ **Not Testing Tools First**
Unfamiliarity with platform causes slowdowns

❌ **Forgetting About Mobile**
Not preparing mobile-ready assets and layout ideas

### Do These Instead

✅ **Prepare Content First**
Have all text, images, and assets ready before building

✅ **Write Clear Goal**
One-sentence purpose statement guides all decisions

✅ **Plan Structure**
Even 30 minutes of planning saves hours of rebuilding

✅ **Practice With Tools**
Spend 1 hour learning platform before real project

✅ **Think Mobile-First**
Plan mobile layout before desktop

## Final Preparation Test

### Are You Ready to Build?

Answer these questions:

1. **Do you have a clear goal for your website?**
   - [ ] Yes, I can state it in one sentence

2. **Is your content ready?**
   - [ ] Yes, all text and images prepared

3. **Have you chosen your tools?**
   - [ ] Yes, accounts created and tested

4. **Do you have a plan?**
   - [ ] Yes, written feature list and sitemap

5. **Can you deploy?**
   - [ ] Yes, deployment platform connected

**If you answered YES to all 5**: You're ready to build!

**If you answered NO to any**: Complete that preparation first.

## Quick Start Action Plan

### Next 60 Minutes

**Minutes 0-15: Set Up Accounts**
- Create Replit account
- Create GitHub account
- Create Vercel account

**Minutes 15-30: Prepare Content**
- Write your bio
- Choose 5 project images
- Write homepage headline

**Minutes 30-45: Plan Structure**
- List pages needed
- Sketch rough layout
- Prioritize features

**Minutes 45-60: Test Tools**
- Create test project in Replit
- Deploy test to Vercel
- Verify everything works

**After 60 minutes**: You're ready to build your first real project!

## Support Resources

### When You Get Stuck

**Platform-Specific Help**:
- Replit: ask.replit.com
- Vercel: vercel.com/docs
- GitHub: docs.github.com

**General Web Help**:
- Stack Overflow (Q&A)
- MDN Web Docs (reference)
- CSS-Tricks (tutorials)

**Communities**:
- Reddit: r/webdev
- Discord servers
- Platform forums

**Remember**: Everyone gets stuck. The key is knowing where to find help.

## You're Ready!

With this checklist completed, you have everything you need to start building professional websites. The next modules will guide you through specific project types, but you're now equipped with the foundation for success.

**Quick wins to try first**:
1. Build a single-page portfolio (2-3 hours)
2. Deploy it to Vercel (10 minutes)
3. Share it with a friend for feedback
4. Make one improvement based on feedback

Learning by doing is the fastest path to mastery. You're ready—let's build!`
      }
    ]
  }
];

// Helper functions
export function getModuleById(moduleId: string): Module | undefined {
  return courseModules.find(module => module.id === moduleId);
}

export function getLessonById(moduleId: string, lessonId: string): Lesson | undefined {
  const module = getModuleById(moduleId);
  if (!module) return undefined;
  return module.lessons.find(lesson => lesson.id === lessonId);
}

export function getNextLesson(moduleId: string, lessonId: string): { moduleId: string; lessonId: string; title: string } | null {
  const module = getModuleById(moduleId);
  if (!module) return null;
  
  const currentIndex = module.lessons.findIndex(lesson => lesson.id === lessonId);
  if (currentIndex === -1) return null;
  
  // Check if there's a next lesson in the current module
  if (currentIndex < module.lessons.length - 1) {
    const nextLesson = module.lessons[currentIndex + 1];
    return {
      moduleId: module.id,
      lessonId: nextLesson.id,
      title: nextLesson.title
    };
  }
  
  // Check if there's a next module
  const currentModuleIndex = courseModules.findIndex(m => m.id === moduleId);
  if (currentModuleIndex < courseModules.length - 1) {
    const nextModule = courseModules[currentModuleIndex + 1];
    if (nextModule.lessons.length > 0) {
      const firstLesson = nextModule.lessons[0];
      return {
        moduleId: nextModule.id,
        lessonId: firstLesson.id,
        title: firstLesson.title
      };
    }
  }
  
  return null;
}

export function getPreviousLesson(moduleId: string, lessonId: string): { moduleId: string; lessonId: string; title: string } | null {
  const module = getModuleById(moduleId);
  if (!module) return null;
  
  const currentIndex = module.lessons.findIndex(lesson => lesson.id === lessonId);
  if (currentIndex === -1) return null;
  
  // Check if there's a previous lesson in the current module
  if (currentIndex > 0) {
    const prevLesson = module.lessons[currentIndex - 1];
    return {
      moduleId: module.id,
      lessonId: prevLesson.id,
      title: prevLesson.title
    };
  }
  
  // Check if there's a previous module
  const currentModuleIndex = courseModules.findIndex(m => m.id === moduleId);
  if (currentModuleIndex > 0) {
    const prevModule = courseModules[currentModuleIndex - 1];
    if (prevModule.lessons.length > 0) {
      const lastLesson = prevModule.lessons[prevModule.lessons.length - 1];
      return {
        moduleId: prevModule.id,
        lessonId: lastLesson.id,
        title: lastLesson.title
      };
    }
  }
  
  return null;
}
