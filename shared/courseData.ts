export interface Lesson {
  id: string;
  title: string;
  duration: number;
  content: string;
  objectives?: string[];
  keyTakeaways?: string[];
  prerequisites?: string[];
  resources?: Resource[];
}

export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  lessons: Lesson[];
  project?: string;
  learningOutcomes?: string[];
}

export interface Resource {
  title: string;
  url: string;
  type: 'article' | 'video' | 'tool' | 'documentation' | 'tutorial';
}

export const courseModules: Module[] = [
  {
    id: "module-1",
    number: 1,
    title: "Introduction to AI-Powered No-Code Web Development",
    description: "Learn the fundamentals of building websites using AI agents and no-code tools",
    difficulty: 'beginner',
    learningOutcomes: [
      'Understand what no-code development is and its advantages',
      'Learn about AI agents and their role in web development',
      'Explore modern no-code tools and platforms',
      'Set up your development workflow and accounts',
      'Understand how AI transforms the web creation process'
    ],
    lessons: [
      {
        id: "lesson-1-1",
        title: "What is No-Code Development?",
        duration: 15,
        objectives: [
          'Define no-code development and its key benefits',
          'Compare traditional coding vs no-code approaches',
          'Identify use cases for no-code development',
          'Understand the modern no-code technology stack'
        ],
        keyTakeaways: [
          'No-code development allows anyone to build websites without writing code',
          'AI agents and visual tools accelerate development from months to hours',
          'Modern no-code platforms can create professional-grade websites',
          'You can build 7 different types of websites using no-code tools'
        ],
        resources: [
          {
            title: 'No-Code Movement Overview',
            url: 'https://www.nocode.tech/what-is-no-code',
            type: 'article'
          },
          {
            title: 'The Future of No-Code',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            type: 'video'
          }
        ],
        content: `# What is No-Code Development?

No-code development is a revolutionary approach to building websites and applications without writing traditional programming code. Instead of learning complex programming languages, you'll use visual interfaces, AI agents, and pre-built components to bring your ideas to life.

## Why No-Code Matters

**Speed**: Build in hours what used to take weeks
- Traditional development requires learning multiple languages (HTML, CSS, JavaScript, backend languages)
- No-code tools let you focus on design and functionality instead of syntax
- Launch products faster and iterate based on real user feedback

**Accessibility**: Anyone with an idea can become a creator
- No computer science degree required
- No need to spend months learning to code
- Focus on problem-solving and creativity, not technical details

**Cost-Effective**: No need to hire expensive developers
- Save thousands on development costs
- Make changes yourself without waiting for developers
- Test ideas before investing heavily

**Flexibility**: Quickly iterate and adapt your projects
- Make changes in minutes, not days
- A/B test different designs easily
- Respond to user feedback immediately

## The Modern No-Code Stack

Today's no-code tools are powered by:

### AI Agents
- Understand natural language instructions
- Generate complete applications from descriptions
- Automatically write code you never have to see
- Learn from millions of websites to suggest best practices

### Drag-and-Drop Interfaces
- Visual builders for designing pages
- Pre-built components you can customize
- Real-time preview of your changes
- No need to understand underlying code

### Pre-Built Templates
- Start with professional designs
- Customizable for your brand
- Industry-specific options available
- Save hours of design work

### Automated Deployment
- One-click publishing to the web
- Automatic updates and hosting
- Built-in security and performance optimization
- No server management required

## What You'll Build in This Course

By the end of this course, you'll be able to create:

1. **Static Websites**: Professional portfolios, landing pages, and company websites
2. **Dynamic Websites**: Blogs, product catalogs, and content-driven sites
3. **Web Applications**: Interactive tools, SaaS products, and productivity apps
4. **Forums**: Community discussion boards and Q&A platforms
5. **Social Platforms**: Content sharing and networking sites
6. **Membership Sites**: Paid content platforms and course websites
7. **Directories**: Business listings and searchable databases

## The Shift in Web Development

**Traditional Approach**:
- Learn HTML, CSS, JavaScript (3-6 months)
- Learn a backend language like Python or Node.js (3-6 months)
- Learn database management (1-2 months)
- Learn deployment and DevOps (1-2 months)
- Build your first real project (2-4 weeks)
**Total time**: 10-18 months

**No-Code + AI Approach**:
- Understand website types and architecture (1 week)
- Learn to use AI agents and no-code tools (1 week)
- Build your first project (2-4 hours)
**Total time**: 2-3 weeks to proficiency

The future of web development is accessible to everyone. You don't need to be a programmer to bring your ideas to life. Let's begin your journey.

## Key Takeaway

No-code development democratizes website creation. With AI agents and modern tools, you can build professional websites in hours, not months, without writing a single line of code.`
      },
      {
        id: "lesson-1-2",
        title: "Role of AI Agents (Lovable, Replit, Cursor, etc.)",
        duration: 20,
        objectives: [
          'Understand what AI agents are and how they work',
          'Compare popular AI development platforms',
          'Learn when to use each platform',
          'Write effective prompts for AI agents'
        ],
        keyTakeaways: [
          'AI agents can understand natural language and generate code automatically',
          'Different platforms are best suited for different types of projects',
          'Lovable excels at design-first projects, Replit for full-stack apps',
          'Effective prompts are clear, specific, and context-aware'
        ],
        prerequisites: ['Understanding of basic web concepts from Lesson 1.1'],
        resources: [
          {
            title: 'Lovable Platform',
            url: 'https://lovable.dev',
            type: 'tool'
          },
          {
            title: 'Replit Agent Documentation',
            url: 'https://docs.replit.com',
            type: 'documentation'
          },
          {
            title: 'Cursor AI Features',
            url: 'https://cursor.sh',
            type: 'tool'
          }
        ],
        content: `# Role of AI Agents in Web Development

AI agents are intelligent assistants that understand your requirements in plain English and generate functional code, complete designs, and entire websites. They're revolutionizing how we build for the web.

## What Are AI Agents?

AI agents are sophisticated programs powered by large language models (like GPT-4) that have been trained on millions of websites, code repositories, and design patterns. They can:

- **Understand Context**: Read your descriptions and existing code to understand what you're building
- **Generate Solutions**: Create complete features, pages, or entire applications
- **Learn and Adapt**: Improve their output based on your feedback
- **Debug Issues**: Identify and fix problems in generated code
- **Suggest Improvements**: Recommend best practices and optimizations

## Popular AI Development Platforms

### Lovable (lovable.dev)
**Best for**: Rapid prototyping and design-first projects

**Strengths**:
- Generates beautiful, modern designs instantly
- Excellent for landing pages and marketing sites
- Real-time collaboration features
- One-click deployment
- Built-in responsive design

**Use When**:
- You need a polished website quickly
- Design is a top priority
- You're building static or simple dynamic sites

**Example Prompt**:
\`\`\`
Create a landing page for a fitness app with the following sections:

1. Hero section with an embedded workout video
2. Three benefit cards highlighting key features
3. Pricing table showing subscription options
4. Contact form for user inquiries

Design requirements:
- Use energetic, vibrant colors
- Modern, clean design aesthetic
- Mobile-responsive layout
\`\`\`

### Replit (replit.com)
**Best for**: Full-stack applications and learning

**Strengths**:
- Complete development environment in browser
- AI pair programming with Ghostwriter
- Supports all major frameworks
- Instant deployment capabilities
- Built-in database support
- Collaborative coding

**Use When**:
- Building complex web applications
- Need backend functionality
- Want to learn while building
- Require database integration

**Example Prompt**:
\`\`\`
Build a task management app with user authentication, 
the ability to create, edit, and delete tasks, and 
categorize them by project. Use React for frontend 
and Express for backend.
\`\`\`

### Cursor (cursor.sh)
**Best for**: Advanced developers and complex projects

**Strengths**:
- AI-powered VS Code alternative
- Context-aware code suggestions
- Understands entire codebase
- Supports all programming languages
- Terminal integration

**Use When**:
- Building enterprise-level applications
- Need fine-grained control
- Working with existing codebases
- Require advanced customization

**Example Prompt**:
\`\`\`
Add a real-time chat feature to this React app using 
WebSockets. Include typing indicators, message history, 
and user presence indicators.
\`\`\`

### Bolt.new
**Best for**: Quick prototypes and experiments

**Strengths**:
- Instant project creation
- No account required to start
- Fast iteration cycles
- Share projects easily

**Use When**:
- Testing ideas quickly
- Learning new frameworks
- Creating demos

### v0.dev (by Vercel)
**Best for**: UI component generation

**Strengths**:
- Generates React components from descriptions
- Uses shadcn/ui components
- Production-ready code
- Copy-paste into your project

**Use When**:
- Need specific UI components
- Building with React/Next.js
- Want Tailwind CSS styling

## How AI Agents Work

### 1. Understanding Context
The AI reads:
- Your written instructions (prompts)
- Existing code in your project
- Industry best practices
- Modern design patterns

### 2. Generating Solutions
The AI creates:
- HTML structure and content
- CSS styling and layouts
- JavaScript functionality
- Backend API endpoints
- Database schemas
- Complete file structures

### 3. Iterative Refinement
You can:
- Request changes in plain English
- Ask for alternatives
- Fix bugs by describing the issue
- Add new features incrementally

### 4. Deployment Assistance
The AI helps:
- Configure deployment settings
- Set up environment variables
- Optimize for production
- Fix deployment errors

## The AI Development Workflow

1. **Describe what you want to build** - Write a clear description of your project and requirements
2. **AI generates initial version** - The AI creates your complete website in minutes
3. **Review and test** - Check the generated site and try out all features
4. **Request refinements** - Ask for changes, improvements, or new features
5. **AI updates the project** - Watch as changes are applied instantly
6. **Repeat until satisfied** - Continue refining until it's exactly what you want
7. **Deploy with one click** - Launch your website live to the world

## Best Practices for Working with AI Agents

### Be Specific
**Bad**: "Make a website"
**Good**: "Create a portfolio website with a hero section, about me page, project gallery with filtering by category, and a contact form. Use a blue color scheme."

### Provide Context
**Bad**: "Add authentication"
**Good**: "Add user authentication with email and password. Users should be able to sign up, log in, reset passwords, and access a protected dashboard."

### Iterate Incrementally
**Bad**: Requesting everything at once and getting overwhelmed
**Good**: Start with core features, test them, then add more functionality

### Test Frequently
- Review generated code regularly
- Test functionality as it's built
- Catch issues early before they compound

### Learn from Output
- Review the code AI generates
- Understand the patterns being used
- Build your mental model of how things work

## Common Use Cases

### Quick Prototyping
Prompt: "Create a mockup of a recipe sharing website"
Time: 5-10 minutes

### Feature Addition
Prompt: "Add dark mode toggle to this website"
Time: 2-5 minutes

### Bug Fixing
Prompt: "The contact form isn't submitting. The email field validation seems broken."
Time: 1-3 minutes

### Redesign
Prompt: "Redesign the homepage with a more modern, minimalist aesthetic"
Time: 10-15 minutes

## Limitations to Understand

AI agents are powerful but have limits:

1. **Complex Business Logic**: May need human guidance for intricate workflows
2. **Security-Critical Code**: Always review authentication and payment code
3. **Performance Optimization**: May need manual tuning for high-traffic sites
4. **Unique Designs**: Work best with common patterns; truly unique designs may need iteration

## Key Takeaway

AI agents are your development partners, not replacements for creativity and planning. They handle the technical implementation while you focus on:
- Defining what to build
- Ensuring it meets user needs
- Making design decisions
- Testing and refining

The best results come from clear communication with the AI, iterative refinement, and understanding your project's goals.`
      },
      {
        id: "lesson-1-3",
        title: "Overview of Modern Tools (Framer, Webflow, Bubble, Notion, etc.)",
        duration: 20,
        content: `# Overview of Modern No-Code Tools

The no-code ecosystem offers specialized tools for different types of projects. Understanding when to use each tool is key to building efficiently.

## Design-First Platforms

### Framer (framer.com)
**Best For**: Landing pages, portfolios, and marketing websites

**Key Features**:
- Beautiful animations and interactions
- Design system integration
- Real-time collaboration
- Code export capabilities (React)
- Built-in CMS
- Free SSL and hosting

**Pricing**: Free to start, $5-20/month for custom domains

**Learning Curve**: Low (visual, Figma-like interface)

**When to Use**:
- Marketing websites that need to look stunning
- Portfolios that showcase your work
- Landing pages for products or services
- Any site where design is the priority

**Example Projects**:
- Personal portfolio
- Startup landing page
- Agency website
- Product announcement page

**Strengths**:
✅ Beautiful out-of-the-box designs
✅ Fast performance
✅ Great for animations
✅ Responsive by default

**Limitations**:
❌ Limited backend functionality
❌ Not ideal for complex applications
❌ Basic CMS capabilities

---

### Webflow (webflow.com)
**Best For**: Complex websites with custom designs

**Key Features**:
- Professional-grade design control
- Powerful CMS functionality
- E-commerce integration
- SEO optimization tools
- Custom code support
- Client billing features

**Pricing**: $14-39/month for sites, $29-212/month for e-commerce

**Learning Curve**: Medium (more technical than Framer)

**When to Use**:
- Client work (agencies)
- E-commerce stores
- Content-heavy websites (blogs, news sites)
- Sites requiring custom animations
- Projects needing extensive SEO

**Example Projects**:
- E-commerce store
- Corporate website
- Magazine/blog
- Documentation site

**Strengths**:
✅ Complete design control
✅ Robust CMS
✅ Great for client work
✅ Excellent SEO features

**Limitations**:
❌ Steeper learning curve
❌ More expensive
❌ Complex backend logic still challenging

---

## Application Builders

### Bubble (bubble.io)
**Best For**: Full web applications and SaaS products

**Key Features**:
- Visual programming for logic
- Database management built-in
- User authentication system
- API integrations
- Workflow automation
- Plugin marketplace

**Pricing**: Free to start, $29-529/month for production

**Learning Curve**: High (most complex no-code platform)

**When to Use**:
- Building web applications (not just websites)
- Need user accounts and permissions
- Require complex workflows
- Want to build a SaaS product
- Need database relationships

**Example Projects**:
- Social media platform
- Marketplace (like Airbnb)
- Project management tool
- CRM system
- Educational platform

**Strengths**:
✅ Most powerful no-code platform
✅ Can build almost anything
✅ Large community and resources
✅ Extensive plugin ecosystem

**Limitations**:
❌ Difficult to learn
❌ Can be slow for complex apps
❌ Design flexibility limited
❌ Migration to code is difficult

---

### Softr (softr.io)
**Best For**: Quick applications from databases

**Key Features**:
- Connects to Airtable or Google Sheets
- Pre-built blocks (lists, forms, charts)
- User authentication
- Membership features
- Custom domains
- Payment integration

**Pricing**: Free to start, $49-249/month

**Learning Curve**: Low

**When to Use**:
- Quick MVP development
- Internal tools
- Directory websites
- Membership sites
- Client portals

**Example Projects**:
- Job board
- Business directory
- Internal dashboard
- Member portal

**Strengths**:
✅ Very fast to build
✅ Great for data-driven apps
✅ Easy to maintain
✅ Good template selection

**Limitations**:
❌ Limited design customization
❌ Dependent on Airtable/Sheets
❌ Not suitable for complex logic

---

## Content & Data Platforms

### Notion (notion.so)
**Best For**: Content management and simple websites

**Key Features**:
- Powerful content organization
- Database creation
- Can power websites via APIs
- Collaboration tools
- Free to use

**When to Use**:
- Documentation sites
- Knowledge bases
- Simple landing pages
- Content planning

**Example Projects**:
- Company wiki
- Help center
- Personal blog
- Resource directory

**Strengths**:
✅ Excellent for content
✅ Easy collaboration
✅ Free for most uses
✅ Familiar to many users

**Limitations**:
❌ Limited design control
❌ Slow page loads
❌ Not ideal for public websites

---

### Airtable (airtable.com)
**Best For**: Database-driven projects

**Key Features**:
- Spreadsheet-database hybrid
- Powerful API access
- Automation capabilities
- Forms and views
- Integration with other tools

**When to Use**:
- Managing structured data
- Powering directory websites
- Content management
- Database for other no-code tools

**Example Projects**:
- Product database
- Event calendar
- CRM system
- Inventory management

**Strengths**:
✅ Flexible data structure
✅ Great API
✅ Easy to understand
✅ Powerful automations

**Limitations**:
❌ Not a website builder
❌ Needs frontend tool
❌ Can get expensive

---

## Choosing the Right Tool

### Decision Framework

**For Static Websites**: 
→ Framer (design priority) or Webflow (SEO/content priority)

**For Dynamic Websites**: 
→ Webflow (with CMS) or Softr + Airtable

**For Web Applications**: 
→ Bubble (complex logic) or Replit/Lovable (with code)

**For Forums**: 
→ Discourse (specialized) or Bubble (custom)

**For Social Platforms**: 
→ Bubble or custom code (Replit)

**For Membership Sites**: 
→ Webflow + Memberstack or WordPress + Paid Memberships Pro

**For Directories**: 
→ Softr + Airtable or Webflow + CMS

---

## Tool Comparison Table

| Tool | Best For | Learning Curve | Pricing | Design Freedom | Logic Capability |
|------|----------|----------------|---------|----------------|------------------|
| Framer | Marketing sites | Low | $ | High | Low |
| Webflow | Complex websites | Medium | $$ | Very High | Medium |
| Bubble | Web apps | High | $$$ | Medium | Very High |
| Softr | Quick MVPs | Low | $$ | Low | Medium |
| Notion | Docs/content | Very Low | Free | Very Low | Very Low |
| Airtable | Databases | Low | $$ | N/A | Medium |
| Replit | Full apps | Medium | $ | Full | Full |
| Lovable | Quick prototypes | Low | $$ | High | Medium |

---

## Combining Tools

Often the best approach is using multiple tools together:

### Example 1: Directory Website
- **Airtable**: Store all business listings
- **Softr**: Create the public website
- **Zapier**: Automate submissions

### Example 2: Membership Site
- **Webflow**: Design and build the site
- **Memberstack**: Handle memberships and payments
- **Airtable**: Store member data

### Example 3: SaaS Product
- **Lovable**: Build the landing page
- **Replit**: Build the actual application
- **Stripe**: Handle payments

---

## Getting Started Recommendations

### Complete Beginners
Start with: **Framer**
- Visual interface
- Fast results
- Great for learning design principles

### Some Technical Knowledge
Start with: **Webflow**
- More control
- Industry standard
- Better for professional work

### Want to Build Apps
Start with: **Replit + AI**
- Learn by doing
- Full flexibility
- Backed by AI assistance

### Need Results Fast
Start with: **Softr + Airtable**
- Quickest to launch
- Easy to maintain
- Great for MVPs

---

## Key Takeaway

There's no single "best" tool—each serves different purposes. Success comes from:

1. **Understanding your project requirements**
2. **Choosing the right tool for the job**
3. **Being willing to use multiple tools together**
4. **Starting simple and adding complexity as needed**

As you progress through this course, you'll learn when and how to use these tools effectively for each type of website.`
      },
      {
        id: "lesson-1-4",
        title: "How AI Transforms Web Creation (Prompt → Live Website)",
        duration: 25,
        content: `# How AI Transforms Web Creation

The journey from idea to live website has been completely revolutionized by AI. What once took weeks or months can now be accomplished in hours.

## The Traditional Web Development Path

### Step 1: Requirements & Planning (3-5 days)
- Write detailed technical specifications
- Create user stories and use cases
- Define all features and functionality
- Plan database structure
- Estimate timelines

### Step 2: Design (5-10 days)
- Create wireframes
- Design mockups in Figma/Sketch
- Get client/stakeholder approval
- Create design system
- Plan responsive breakpoints

### Step 3: Frontend Development (2-4 weeks)
- Write HTML structure
- Style with CSS
- Add JavaScript interactivity
- Make responsive
- Cross-browser testing
- Fix bugs

### Step 4: Backend Development (2-4 weeks)
- Set up server
- Create database
- Write API endpoints
- Implement authentication
- Handle file uploads
- Error handling

### Step 5: Integration (1-2 weeks)
- Connect frontend to backend
- Test all features
- Fix integration bugs
- Performance optimization

### Step 6: Deployment (3-5 days)
- Set up hosting
- Configure domain
- Deploy application
- Set up SSL
- Configure backups
- Monitor for issues

### Step 7: Testing & Bug Fixes (1-2 weeks)
- User acceptance testing
- Fix bugs
- Performance tuning
- Security audit

**Total Timeline**: 8-16 weeks for a basic website
**Cost**: $5,000-50,000+ depending on complexity

---

## The AI-Powered Web Development Path

### Step 1: Define Your Vision (10-30 minutes)
Write a clear description of what you want:

\`\`\`
I need a portfolio website for my photography business.

Features needed:
- Hero section with my best photo
- About me section
- Gallery of my work organized by category (weddings, portraits, events)
- Contact form
- Instagram feed integration
- Dark/light mode toggle

Design style: Modern, minimalist, lots of white space
Color scheme: Black, white, and gold accents
\`\`\`

### Step 2: AI Generation (2-5 minutes)
Input your description into an AI agent (Lovable, Replit, v0, etc.)

The AI creates:
✅ Complete file structure
✅ HTML/React components
✅ CSS styling
✅ JavaScript functionality
✅ Responsive design
✅ Accessibility features

### Step 3: Review & Refine (30-60 minutes)
Test the generated website and request changes:

\`\`\`
- Make the hero image full screen
- Change the gallery to a masonry layout
- Add a filter animation when switching categories
- Make the contact form send to my email
- Add a testimonials section
\`\`\`

AI makes updates in seconds.

### Step 4: Deploy (5-10 minutes)
One-click deployment to:
- Vercel
- Netlify  
- Replit hosting

Automatic SSL, CDN, and optimization included.

**Total Timeline**: 2-4 hours for a basic website
**Cost**: $0-20/month for hosting

---

## Real Example Transformation

### Example 1: Personal Portfolio

**Traditional Approach**:
1. Learn HTML/CSS/JavaScript (3-6 months)
2. Design in Figma (5-10 hours)
3. Code the website (20-40 hours)
4. Set up hosting (2-4 hours)
5. Debug and polish (10-15 hours)

**Time**: 40-60 hours + months of learning
**Cost**: Time = Money or $2,000-5,000 to hire

**AI Approach**:

**Prompt**:
\`\`\`
Create a portfolio website for a UX designer with:
- Animated hero section with my name and title
- About section with photo and bio
- Case study cards for 6 projects with hover effects
- Skills section with icons
- Contact form with validation
- Footer with social links
Use a purple and white color scheme, modern sans-serif fonts
\`\`\`

**Result**: Complete website in 3 minutes
**Refinement**: 30 minutes of tweaks
**Deployment**: 5 minutes

**Total Time**: ~40 minutes
**Cost**: $0 (free tier)

---

### Example 2: Business Website

**Traditional Approach**:
- Hire agency: $5,000-15,000
- Timeline: 4-8 weeks
- Revisions limited by contract

**AI Approach**:

**Initial Prompt**:
\`\`\`
Create a website for a local coffee shop:

Pages needed:
1. Home - hero with shop photo, welcome message, hours, location
2. Menu - categorized items with prices and descriptions
3. About - our story, team photos
4. Contact - form, map, phone, email

Features:
- Online ordering integration
- Newsletter signup
- Instagram feed
- Mobile-first design

Style: Warm, cozy, modern rustic
Colors: Brown, cream, forest green
\`\`\`

**Time**: 5 minutes for generation + 1 hour refinement
**Cost**: $0-20/month

---

## The AI Workflow in Detail

### Phase 1: Initial Generation

**Your Input**: Clear description of:
- Type of website
- Key features
- Design preferences
- Target audience
- Technical requirements

**AI Output**:
- Complete codebase
- Styled components
- Working functionality
- Responsive layouts
- Best practice implementation

### Phase 2: Iterative Refinement

**Conversation with AI**:

You: "Make the header sticky when scrolling"
AI: *Updates header with position: sticky*

You: "Add a smooth scroll to section links"
AI: *Implements smooth scroll behavior*

You: "The mobile menu doesn't close after clicking a link"
AI: *Fixes the bug immediately*

Each iteration takes seconds to minutes, not hours or days.

### Phase 3: Feature Enhancement

As your needs evolve, add features incrementally:

Week 1: Launch basic site
Week 2: "Add blog functionality"
Week 3: "Add newsletter subscription"
Week 4: "Integrate payment processing"

Each addition is a simple prompt away.

---

## What AI Handles Automatically

### Code Structure
- Proper file organization
- Component architecture
- Clean, readable code
- Comments and documentation

### Responsive Design
- Mobile breakpoints
- Tablet layouts
- Desktop views
- Touch-friendly interfaces

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support

### Performance
- Optimized images
- Code splitting
- Lazy loading
- Minification

### Best Practices
- SEO meta tags
- Security headers
- Error handling
- Loading states

---

## What You Control

While AI handles the technical implementation, you're in charge of:

### Vision & Strategy
- What to build
- Who it's for
- What problem it solves

### Design Decisions
- Color schemes
- Typography
- Layout preferences
- Brand identity

### User Experience
- Navigation structure
- Content flow
- Call-to-action placement
- User journey

### Business Logic
- Feature priorities
- Functionality requirements
- Integration needs
- Success metrics

---

## The Prompt → Live Website Process

### Example: Building a Recipe Sharing Website

**Step 1: Initial Prompt**
\`\`\`
Build a recipe sharing website where users can:
- Browse recipes by category
- Search recipes by ingredients
- Save favorite recipes
- Submit their own recipes
- Rate and comment on recipes

Use a warm, kitchen-inspired color palette
Make it mobile-friendly
\`\`\`

**AI generates in 3 minutes**: Complete app structure

**Step 2: Test & Feedback**
You test it and notice:
- Search is too basic
- Upload needs preview
- Comments need moderation

**Step 3: Refinement Prompts**
\`\`\`
Improve the search to find recipes by multiple ingredients
Add image preview before upload
Add admin panel for comment moderation
\`\`\`

**AI updates in 2 minutes**: Enhanced features added

**Step 4: Polish**
\`\`\`
Add loading animations
Improve mobile navigation
Add social sharing buttons
\`\`\`

**Step 5: Deploy**
Click deploy button → Live website in 5 minutes

**Total time from idea to live**: ~2 hours

---

## Common Mistakes & How to Avoid Them

### Mistake 1: Vague Prompts
❌ "Make me a website"
✅ "Create a portfolio website for a graphic designer with project showcase, about page, and contact form"

### Mistake 2: Requesting Everything at Once
❌ Asking for 50 features in one prompt
✅ Start with core features, then add incrementally

### Mistake 3: Not Testing Incrementally
❌ Requesting 10 changes then testing
✅ Request 2-3 changes, test, then continue

### Mistake 4: Ignoring AI Suggestions
❌ Dismissing AI recommendations
✅ Consider why AI suggests certain approaches

---

## Speed Comparison Chart

| Task | Traditional | With AI | Time Saved |
|------|-------------|---------|------------|
| Setup project | 30 min | 1 min | 97% |
| Create homepage | 4 hours | 5 min | 98% |
| Add contact form | 2 hours | 2 min | 98% |
| Make responsive | 4 hours | 0 min* | 100% |
| Deploy | 2 hours | 5 min | 96% |
| Add feature | 4-8 hours | 5-15 min | 95%+ |

*Already responsive by default

---

## Key Takeaway

AI has fundamentally changed the equation:

**Before**: Coding skills were the barrier to building websites
**Now**: Clear communication and vision are the keys to success

The best results come from:
1. **Clear, specific prompts**
2. **Iterative refinement**
3. **Understanding what you want to build**
4. **Testing and providing feedback**

You don't need to be a programmer anymore—you need to be a good communicator and product thinker. AI handles the technical implementation while you focus on creating value for users.`
      },
      {
        id: "lesson-1-5",
        title: "Setting Up Accounts and Basic Workflow",
        duration: 15,
        content: `# Setting Up Accounts and Basic Workflow

Before building your first website, let's set up the essential accounts and understand the workflow you'll use throughout this course.

## Required Accounts

### 1. AI Development Platform (Choose at least one)

#### Replit (Recommended for this course)
**Sign up**: replit.com

**Why Replit?**
- Complete development environment
- AI assistant (Ghostwriter) built-in
- Instant deployment
- Free tier available
- Great for learning

**Setup Steps**:
1. Visit replit.com
2. Click "Sign up"
3. Choose GitHub, Google, or email signup
4. Verify your email
5. Complete the welcome tutorial

**Free Tier Includes**:
- Unlimited public projects
- 0.5 GB storage
- Basic AI features
- Community support

#### Lovable (Great for quick prototypes)
**Sign up**: lovable.dev

**Why Lovable?**
- Fastest way to create websites
- Beautiful designs by default
- One-click deployment
- Great for portfolios and landing pages

**Setup Steps**:
1. Visit lovable.dev
2. Sign up with email or Google
3. Start with a template or blank project

#### Cursor (For advanced users)
**Download**: cursor.sh

**Why Cursor?**
- Most powerful AI coding assistant
- Works like VS Code
- Best for complex projects

**Setup Steps**:
1. Download from cursor.sh
2. Install on your computer
3. Sign up for free trial
4. Connect to your projects

---

### 2. Deployment Services

#### Vercel (Highly Recommended)
**Sign up**: vercel.com

**Why Vercel?**
- Free for personal projects
- Automatic HTTPS
- Global CDN
- Easy custom domains
- One-command deploy
- Excellent performance

**Setup Steps**:
1. Visit vercel.com
2. Sign up with GitHub, GitLab, or email
3. No credit card required for free tier

**Free Tier Includes**:
- Unlimited websites
- 100 GB bandwidth/month
- Automatic SSL
- Analytics

#### Netlify (Alternative to Vercel)
**Sign up**: netlify.com

**Why Netlify?**
- Similar to Vercel
- Great for static sites
- Form handling built-in
- Serverless functions

**Setup Steps**:
1. Visit netlify.com
2. Sign up with GitHub, GitLab, Bitbucket, or email
3. Browse templates or deploy your own

---

### 3. Version Control

#### GitHub
**Sign up**: github.com

**Why GitHub?**
- Industry standard
- Version history
- Collaboration features
- Portfolio showcase
- Required for some deployments

**Setup Steps**:
1. Visit github.com
2. Create free account
3. Verify email
4. Consider enabling 2FA for security

**Pro Tip**: Connect GitHub to Replit and Vercel for seamless deployment

---

### 4. Optional but Recommended

#### Database Services

**Supabase** (supabase.com)
- Free PostgreSQL database
- Built-in authentication
- Real-time subscriptions
- 500 MB storage free

**Firebase** (firebase.google.com)
- Google's platform
- Realtime database
- Authentication
- Hosting included
- Generous free tier

**Airtable** (airtable.com)
- Spreadsheet-database hybrid
- Easy to use
- Great for content
- Free for personal use

#### Payment Processing

**Stripe** (stripe.com)
- For membership sites
- Professional payment processing
- No monthly fees
- Pay per transaction only

---

## Basic Workflow Overview

### The Complete Development Cycle

\`\`\`
1. Plan Your Project
   ↓
2. Create in AI Platform
   ↓
3. Test Locally
   ↓
4. Refine with AI
   ↓
5. Deploy to Production
   ↓
6. Monitor & Iterate
\`\`\`

Let's break down each step:

---

### Step 1: Plan Your Project

**Before writing any prompts**, define:

**Purpose**
- What problem does this solve?
- Who is the target audience?

**Features**
- What must it have? (MVP)
- What would be nice to have?
- What can wait for later?

**Design**
- Look at 3-5 similar websites
- Note what you like/dislike
- Choose a color palette
- Select fonts

**Technical Requirements**
- Does it need a database?
- Does it need user authentication?
- Any third-party integrations?

**Quick Planning Template**:
\`\`\`
Project: [Name]
Purpose: [1 sentence]
Target Users: [Who]
Key Features: [3-5 bullet points]
Design Style: [Describe in 2-3 words]
Tech Needs: Database? [ ] Auth? [ ] Payments? [ ]
\`\`\`

---

### Step 2: Create in AI Platform

#### Using Replit

1. **Create New Project**
   - Click "+ Create Repl"
   - Choose template (or start from scratch)
   - Name your project

2. **Describe to AI**
   Open AI chat and paste your requirements:
   \`\`\`
   Create a portfolio website with:
   - Hero section with animated name
   - Projects gallery
   - About me page
   - Contact form
   Use modern design with blue accents
   \`\`\`

3. **Review Generated Code**
   - AI creates all files
   - Check structure
   - Test in preview

#### Using Lovable

1. **Start New Project**
   - Click "New Project"
   - Describe what you want
   - AI generates immediately

2. **Customize**
   - Edit in visual builder
   - Or describe changes to AI
   - Real-time preview

---

### Step 3: Test Locally

**Check These**:
- ✅ All links work
- ✅ Forms submit correctly
- ✅ Images load
- ✅ Responsive on mobile
- ✅ No console errors

**Test on**:
- Desktop browser
- Mobile browser
- Tablet if available

**Use DevTools**:
- Press F12 in browser
- Check Console for errors
- Use Device Toolbar for mobile view

---

### Step 4: Refine with AI

Based on testing, request improvements:

**Example Refinements**:
\`\`\`
- The mobile menu doesn't close after clicking a link
- Add a smooth scroll effect
- Make the contact form required fields more visible
- Improve loading speed
- Add favicon
\`\`\`

**Iterate Until**:
- All features work
- Design looks professional
- No errors in console
- Mobile experience is smooth

---

### Step 5: Deploy to Production

#### Deploying from Replit

**Option A: Use Replit Hosting**
1. Click "Deploy" button
2. Choose deployment type
3. Your site is live!

**Option B: Deploy to Vercel**
1. Connect Replit to GitHub
2. Push code to GitHub
3. Import GitHub repo in Vercel
4. Auto-deploy on every update

#### Deploying to Vercel Directly

1. Install Vercel CLI or use dashboard
2. Connect your project
3. Click "Deploy"
4. Get live URL instantly

**Custom Domain**:
1. Buy domain (Namecheap, Google Domains)
2. Add domain in Vercel
3. Update DNS records
4. Site live on your domain!

---

### Step 6: Monitor & Iterate

**After Launch**:

**Week 1**: Watch for issues
- Test all features in production
- Fix any bugs that appear
- Monitor loading speeds

**Ongoing**:
- Check analytics (if setup)
- Gather user feedback
- Make improvements
- Add new features

**Use Vercel Analytics**:
- Free with every deployment
- See real performance data
- Understand user behavior

---

## Workspace Organization

Create a clear folder structure for your projects:

\`\`\`
my-web-projects/
├── portfolio/
│   ├── replit-project/
│   └── deployed-url.txt
├── blog/
│   ├── replit-project/
│   └── deployed-url.txt
├── learning-exercises/
│   ├── exercise-1/
│   ├── exercise-2/
│   └── exercise-3/
└── course-projects/
    ├── static-site/
    ├── dynamic-site/
    └── web-app/
\`\`\`

**Keep Track Of**:
- Project URLs (deployed sites)
- Login credentials (in password manager)
- API keys (in secure note)
- Replit project links

---

## Recommended Workflow for This Course

As you go through each module:

1. **Create course-projects folder** in Replit
2. **One Repl per major project**
3. **Name clearly**: "Module-3-Portfolio", "Module-4-Blog"
4. **Deploy each project** to practice
5. **Keep for portfolio** at course end

---

## Quick Start Checklist

Before starting your first project, ensure you have:

- [ ] Replit account created and verified
- [ ] GitHub account set up
- [ ] Vercel account created
- [ ] Tried creating a test Repl
- [ ] Explored the AI chat interface
- [ ] Tested deploying a simple "Hello World"
- [ ] Bookmarked this course
- [ ] Joined Replit community (optional)

---

## Pro Tips

### Save Time
- Keep a document of prompts that work well
- Create templates for common project types
- Reuse successful patterns

### Stay Organized
- Name projects clearly
- Document what you learned
- Save URLs in one place

### Learn Efficiently
- Build alongside the course
- Don't just watch—do
- Ask AI to explain code you don't understand

### Build Portfolio
- Keep your best projects
- Deploy them all
- Add to GitHub for showcase

---

## Common Setup Issues

### Issue: "AI not responding in Replit"
**Solution**: Refresh page, or check if you've exceeded free tier limits

### Issue: "Deployment failed"
**Solution**: Check console for errors, ensure all files are saved

### Issue: "Custom domain not working"
**Solution**: Wait 24-48 hours for DNS propagation

### Issue: "GitHub connection failed"
**Solution**: Reconnect GitHub account in settings

---

## Next Steps

Now that your accounts are set up, you're ready to:

1. **Understand website foundations** (Module 2)
2. **Build your first static site** (Module 3)
3. **Deploy to production** (Module 3)
4. **Add to your portfolio** (All modules)

---

## Key Takeaway

The setup is simple and mostly free. You now have:

✅ AI development environment (Replit)
✅ Deployment platform (Vercel)
✅ Version control (GitHub)
✅ Understanding of the workflow

Everything you need to start building professional websites is ready. Let's begin creating!

**Action Items**:
- [ ] Create all required accounts
- [ ] Verify email addresses  
- [ ] Try creating a test project
- [ ] Deploy a "Hello World" site
- [ ] Bookmark this course
- [ ] Proceed to Module 2`
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
