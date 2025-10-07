# AI Legal Advisor - Design Guidelines

## Design Approach
**Selected Approach**: Hybrid - Professional Productivity System with Legal Authority Theme

Drawing inspiration from Linear's clean professionalism and Notion's interface clarity, combined with authoritative legal aesthetics. The design balances AI-forward innovation with the gravitas expected in legal services.

## Core Design Elements

### A. Color Palette

**Primary Colors (Dark Mode Default)**:
- Background Base: 15 8% 10% (deep charcoal)
- Surface: 220 15% 15% (elevated dark surface)
- Primary Legal Blue: 220 90% 56% (authoritative blue)
- AI Accent Purple: 270 75% 60% (intelligent purple)
- Gold Accent: 45 90% 65% (justice gold - used sparingly for CTAs)

**Gradients**:
- Hero Gradient: Linear gradient from 270 75% 20% to 220 90% 25% (purple-blue depth)
- Card Hover: Radial gradient with 270 75% 60% at 0% opacity to 40% opacity
- AI Elements: Linear from 270 75% 60% to 220 90% 56% with subtle glow
- Button Primary: 45 90% 65% to 35 85% 55% (gold authority)

**Text Colors**:
- Primary: 0 0% 95% (high contrast white)
- Secondary: 0 0% 70% (muted for descriptions)
- Muted: 0 0% 50% (timestamps, labels)

### B. Typography

**Font Families**:
- Headers: 'Inter', sans-serif (600-700 weight) - professional authority
- Body: 'Inter', sans-serif (400-500 weight) - clean readability
- AI Chat: 'Inter', sans-serif (400 weight) - conversational clarity

**Type Scale**:
- Hero Headline: 3.5rem (desktop) / 2.25rem (mobile), font-weight: 700
- Section Headers: 2.5rem (desktop) / 1.875rem (mobile), font-weight: 600
- Card Titles: 1.5rem, font-weight: 600
- Body Text: 1.125rem, font-weight: 400, line-height: 1.7
- Chat Messages: 1rem, font-weight: 400
- Buttons: 1rem, font-weight: 500, letter-spacing: 0.5px

### C. Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistency
- Section Padding: py-20 (desktop) / py-12 (mobile)
- Card Padding: p-8 (desktop) / p-6 (mobile)
- Element Spacing: gap-6 to gap-8 for grids
- Chat Margins: my-4 between messages

**Container Strategy**:
- Landing Sections: max-w-7xl mx-auto px-6
- Chat Interface: max-w-5xl for conversation area
- Sidebar: w-72 fixed with conversation list

### D. Component Library

**Navigation & Authentication**:
- Top Navigation: Fixed header with backdrop-blur, gradient border-bottom
- Login/Logout Buttons: Gold gradient with white text, rounded-lg, shadow-lg on hover
- User Avatar: Circular with gradient border ring

**Hero Section**:
- Layout: Two-column grid (60/40 split) on desktop, stacked mobile
- Left: Headline + subtitle + CTA button
- Right: Lady Justice statue image with subtle glow effect
- Background: Dark gradient with animated particle effect (CSS only)
- CTA Button: Large gold gradient button with hover lift effect (translateY(-2px))

**Feature Cards (3-4 Cards Grid)**:
- Layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Card Design: Dark surface with gradient border (1px)
- Icon Area: 64x64 gradient circle background with white icon
- Hover State: Lift with translateY(-8px), shadow elevation, gradient intensity increase
- Content: Icon + Title (1.25rem) + Description (1rem muted)

**How It Works Section**:
- Layout: Three-column grid with connecting lines
- Step Cards: Numbered circles (gradient) + title + description
- Visual Flow: Dotted connecting lines between steps

**Chat Interface**:
- Layout: Sidebar (w-72) + Main Chat Area (flex-1)
- User Messages: Right-aligned, blue gradient background, rounded-2xl, shadow-md
- AI Messages: Left-aligned, purple gradient accent border, rounded-2xl, shadow-sm, subtle glow
- Input Area: Fixed bottom, gradient border-top, large textarea with gradient focus ring
- Send Button: Icon button with gradient on hover

**Sidebar Components**:
- New Chat Button: Full-width gradient button with icon, hover scale(1.02)
- Conversation List: Stacked items with hover background change
- Conversation Item: Title + timestamp, truncated text, border-b separator
- Hover State: Background lightens, slight left padding increase (pl-4 to pl-5)

**About Constitution Page**:
- Hero Banner: Indian Constitution imagery with gradient overlay
- Content: Two-column layout (content + legal imagery)
- Download Button: Gold gradient CTA with download icon, pulse animation hint
- Info Cards: Key facts in grid layout with subtle borders

**Footer**:
- Layout: Three-column grid (Links | Logo | Social/Contact)
- Links: Hover underline effect with color transition
- Background: Subtle gradient darker than page background

### E. Interactive Elements & Animations

**Hover Effects**:
- Cards: `transform: translateY(-8px)`, `box-shadow: 0 20px 40px rgba(120, 40, 200, 0.3)`
- Buttons: `transform: scale(1.05)`, shadow intensity increase
- Links: Color shift to gold (45 90% 65%), underline slide-in animation
- Sidebar Items: `padding-left: 1.25rem`, background color lightening

**Focus States**:
- Input Fields: 2px gradient ring, glow effect
- Buttons: Outline with gold color, offset shadow

**Transition Timing**:
- Standard: `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- Hover Lifts: `transition: transform 0.2s ease-out`
- Color Shifts: `transition: color 0.3s ease`

**Glow Effects** (AI Elements):
- Chat Input: `box-shadow: 0 0 20px rgba(168, 85, 247, 0.15)` on focus
- AI Message Bubbles: `box-shadow: 0 4px 12px rgba(120, 40, 200, 0.2)`

### F. Images

**Hero Section**:
- Large Lady Justice statue image (provided) positioned on right side
- Treatment: Subtle glow effect, slightly desaturated background
- Size: Covers 40% of hero width on desktop, full-width on mobile

**Throughout Application**:
- Courts: Architectural shots of courtrooms in About Constitution section
- Judges: Silhouette imagery in How It Works section
- Lawyers: Professional consultation imagery in Features cards
- Legal Documents: Scrolls, gavels, law books as decorative elements

**Image Style**: Professional photography with subtle overlays, never clip-art

### G. Responsive Breakpoints

- Mobile: < 768px (single column, stacked layout, sidebar drawer)
- Tablet: 768px - 1024px (2-column grids, adjusted spacing)
- Desktop: > 1024px (full multi-column layouts, sidebar visible)

### H. Accessibility

- Minimum touch targets: 44x44px
- Color contrast: WCAG AA compliant (4.5:1 for body text)
- Focus indicators: Always visible with 2px outline
- Font sizes: Minimum 16px for body text, 18px for chat

This design system creates a professional, AI-enhanced legal platform with dynamic interactions that convey both authority and innovation.