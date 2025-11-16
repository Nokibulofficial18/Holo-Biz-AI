# HoloBiz Design Guidelines

## Design Approach
**Voice-First Fintech Experience**: Blend Google Assistant's conversational UI with modern fintech dashboard aesthetics. Create a warm, non-intimidating interface that balances AI sophistication with SME-friendly accessibility. Government-grade reliability meets startup innovation.

## Brand Identity

### Color Palette
- **Deep Blue** (#1A73E8): Primary brand color for trust, fintech credibility, headers, CTAs
- **Purple** (#7C4DFF): AI/innovation accents, voice wave animations, interactive elements
- **Green** (#43A047): Success states, growth indicators, positive metrics
- **Warm Yellow** (#FBC02D): Alerts, highlights, attention-grabbing elements
- **Background** (#F4F6F8): Main page background, card backgrounds on white (#FFFFFF)

### Typography
- **Headings**: Poppins (600-700 weight) - Modern, friendly, professional
- **Body Text**: Inter or Roboto (400-500 weight) - Clean, readable
- **Hierarchy**: Hero (48-64px) → Section Headings (32-40px) → Subheadings (24px) → Body (16-18px)

### Visual Style
- **Glassmorphism**: Frosted glass effects on cards, navigation, feature panels (backdrop-blur with subtle borders)
- **Soft Gradients**: Purple-to-blue gradients for hero sections, card backgrounds
- **Rounded Corners**: Generous border-radius (12-24px) for modern, approachable feel
- **Shadows**: Soft, layered shadows for depth (0 4px 20px rgba(0,0,0,0.08))

## Layout System

### Spacing Primitives
Use Tailwind units: **4, 6, 8, 12, 16, 20** for consistent rhythm
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24
- Container max-width: max-w-7xl with mx-auto

### Grid Strategy
- **Hero Sections**: Full-width with centered content, max-w-6xl inner container
- **Feature Grids**: 3-column on desktop (lg:grid-cols-3), 2-column tablet (md:grid-cols-2), single mobile
- **Statistics**: 4-column layout for impact numbers
- **Use Cases**: 2-column layout with image-text alternating patterns

## Core Components

### Voice Interface Elements
- **Microphone Button**: Circular, pulsing animation when active, purple gradient background
- **Sound Wave Animation**: Animated bars synced to voice input, purple-to-blue gradient
- **Chat Bubbles**: User queries (right-aligned, blue background), AI responses (left-aligned, white with shadow)
- **Voice Command Cards**: Display sample queries in both Bangla and English with icons

### Dashboard Widgets
- **KPI Cards**: White background, colored accent border-top, number + label + trend indicator
- **Chart Components**: Line charts (cash flow), bar charts (sales), donut charts (expense breakdown)
- **Gauge Meters**: Credit-readiness score, circular progress with colored segments
- **Timeline Cards**: Compliance reminders with date markers, color-coded by urgency

### Feature Cards
- **Icon + Title + Description** format with hover lift effect
- Icons: Use Heroicons or Font Awesome (voice, chart, shield, globe, lightbulb, users, book)
- Background: Subtle gradient or glassmorphism effect
- Border: Thin accent border in brand colors

### Interactive Elements
- **Primary CTA**: Deep blue background, white text, medium shadow, hover lift
- **Secondary CTA**: Outline style with purple border, hover fill
- **Buttons on Images**: Blurred background (backdrop-blur-md), white text with subtle shadow

## Page-Specific Designs

### Landing Page Architecture
1. **Hero** (80vh): Voice wave animation center, headline + subheadline, dual CTAs, mobile app mockup
2. **Problem Section**: 4-column statistics grid with icons, red/orange accent for pain points
3. **Solution Section**: 2-column layout - left text, right animated dashboard preview
4. **Features Highlight**: 3-column grid for 7 AI features with icons and short descriptions
5. **Impact Numbers**: 4 large KPI cards with animations on scroll
6. **Final CTA**: Full-width banner with gradient background, centered message

### How It Works (Visual Flow)
- **Step Cards**: Horizontal timeline with 4 steps (Speak → Understand → Analyze → Advise)
- **Sample Queries Section**: Chat bubble interface showing Bangla/English questions with AI responses
- **Visual Flow Diagram**: Animated arrows connecting voice input → processing → output

### Features Page Organization
Create 7 distinct sections with consistent card design:
- Section header with icon
- 3-4 feature cards per section
- Alternating left-right layouts for visual variety

### Use Cases Pages
- Hero banner per business type (retail, pharmacy, clothing, etc.)
- **Before/After Layout**: Split screen showing problems vs HoloBiz solutions
- Sample voice commands specific to each business type
- Relevant dashboard mockups

### Technology Page
- **Architecture Diagram**: Visual flowchart showing AI stack components
- **Security Badges**: Encrypted data, offline mode, secure storage icons
- **Tech Stack Cards**: Logo + name + description for each technology

## Images & Media

### Hero Image Requirements
- **Landing Hero**: Animated voice wave visualization (custom SVG or Lottie animation) + Mobile app mockup showing HoloBiz interface
- **Use Case Heroes**: Authentic photos of Bangladeshi SME owners using mobile devices (retail shop, pharmacy counter, garment workshop, handicraft studio)
- **Technology Page**: Isometric illustration of AI/cloud architecture
- **Team Photos**: Professional headshots for About Us page

### Illustrations Style
- Modern, friendly 2D illustrations with brand color palette
- Use undraw.co or similar for consistency
- AI assistant avatar: Friendly, non-robotic character in purple/blue tones

## Animations & Interactions

### Key Animations
- **Voice Wave**: Pulsing bars that respond to "listening" state
- **Number Counters**: Impact statistics animate on scroll into view
- **Card Hover**: Subtle lift (translateY -4px) with shadow increase
- **Page Transitions**: Smooth fade-ins for content sections
- **Chart Animations**: Progressive data reveal on load

### Interaction States
- Hover: Slight scale or lift, color intensification
- Active: Pressed state with reduced shadow
- Loading: Spinner in brand purple
- Success: Green checkmark with fade-in
- Error: Yellow alert with shake animation

## Accessibility & Responsiveness

### Mobile Optimization
- Collapsible navigation with hamburger menu
- Stack all multi-column layouts to single column
- Increase touch target sizes (min 44px)
- Reduce hero heights (50vh on mobile)

### Language Support
- Display Bangla and English side-by-side in sample queries
- Use appropriate web fonts supporting Bengali script
- Right-to-left friendly spacing (no hardcoded margins)

## Navigation & Footer

### Header
- Logo left, navigation center (How It Works, Features, Use Cases, Technology, About, Contact)
- "Try HoloBiz" CTA button right
- Sticky header with glassmorphism background on scroll

### Footer
- 4-column layout: About, Features, Resources, Contact
- Newsletter signup with email input + purple CTA
- Social media icons (LinkedIn, GitHub, WhatsApp)
- Policy links and copyright

---

**Design Philosophy**: Create a premium, trustworthy fintech experience that feels cutting-edge yet accessible to non-technical SME owners. Every element should reinforce HoloBiz's value proposition: "complex business insights made conversational."