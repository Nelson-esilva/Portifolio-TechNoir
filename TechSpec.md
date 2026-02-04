# Technical Specification: Nelson Emeliano Portfolio

## 1. COMPONENT INVENTORY

### shadcn/ui Components (Built-in)
| Component | Purpose | Customization |
|-----------|---------|---------------|
| Button | CTA buttons, navigation | Neon border styling, magnetic hover |
| Card | Project cards | Dark theme, glow hover effect |
| Badge | Tech stack tags | Neon border, small pills |
| Separator | Section dividers | Subtle dark line |

### Third-Party Registry Components
| Component | Registry | Purpose |
|-----------|----------|---------|
| None required | - | Custom implementations preferred for this design |

### Custom Components
| Component | Purpose | Location |
|-----------|---------|----------|
| CustomCursor | Data hunter cursor effect | `components/CustomCursor.tsx` |
| MatrixRain | Background particle effect | `components/MatrixRain.tsx` |
| Terminal | Animated terminal window | `components/Terminal.tsx` |
| TextScramble | Text decrypt effect | `components/TextScramble.tsx` |
| SkillBar | Animated progress bars | `components/SkillBar.tsx` |
| ProjectCard | Project showcase cards | `components/ProjectCard.tsx` |
| TypeWriter | Character-by-character typing | `components/TypeWriter.tsx` |

---

## 2. ANIMATION IMPLEMENTATION TABLE

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Custom Cursor (Data Hunter) | Vanilla JS + RAF | Track mouse, transform cursor elements, magnetic snap to buttons | High |
| Matrix Rain Background | Canvas 2D | RequestAnimationFrame loop, falling characters, opacity fade | Medium |
| Terminal Typing | Custom Hook | useTypeWriter hook with character delay | Medium |
| Text Scramble | Vanilla JS | Character replacement with random symbols | Medium |
| Skill Bar Fill | GSAP | ScrollTrigger with width animation | Low |
| Project Card Hover | CSS + GSAP | Border color transition, box-shadow glow | Low |
| Section Fade In | GSAP | ScrollTrigger with opacity/y transform | Low |
| Nav Link Hover | CSS | Underline glow, color transition | Low |
| Button Magnetic | Vanilla JS | Transform button position based on cursor | Medium |
| Page Load Sequence | GSAP | Timeline with staggered reveals | Medium |

---

## 3. ANIMATION LIBRARY CHOICES

### Primary: GSAP (GreenSock)
**Rationale**: Industry-standard for complex scroll-triggered animations. Excellent performance, precise control.

**Plugins Needed**:
- `ScrollTrigger` - For scroll-based animations
- `SplitText` (optional) - For character-level text animations

### Secondary: CSS Animations
**Rationale**: For simple hover effects and transitions where JS is overkill.

**Use For**:
- Button hover states
- Link underlines
- Basic transitions

### Canvas 2D API
**Rationale**: Lightweight solution for Matrix rain effect without Three.js overhead.

**Use For**:
- Matrix rain background
- Particle effects

---

## 4. PROJECT FILE STRUCTURE

```
app/
├── src/
│   ├── components/
│   │   ├── CustomCursor.tsx      # Data hunter cursor
│   │   ├── MatrixRain.tsx        # Background effect
│   │   ├── Terminal.tsx          # Terminal window
│   │   ├── TypeWriter.tsx        # Typing animation
│   │   ├── TextScramble.tsx      # Text decrypt effect
│   │   ├── SkillBar.tsx          # Animated skill bars
│   │   ├── ProjectCard.tsx       # Project cards
│   │   ├── Navigation.tsx        # Top navigation
│   │   └── ui/                   # shadcn components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── badge.tsx
│   ├── sections/
│   │   ├── Hero.tsx              # Hero with terminal
│   │   ├── About.tsx             # About section
│   │   ├── Projects.tsx          # Projects showcase
│   │   ├── Skills.tsx            # Skills visualization
│   │   └── Contact.tsx           # Contact section
│   ├── hooks/
│   │   ├── useMousePosition.ts   # Mouse tracking
│   │   ├── useTypeWriter.ts      # Typing effect
│   │   └── useInView.ts          # Intersection observer
│   ├── lib/
│   │   ├── utils.ts              # Utilities
│   │   └── scramble.ts           # Text scramble logic
│   ├── styles/
│   │   └── globals.css           # Global styles
│   ├── App.tsx                   # Main app
│   └── main.tsx                  # Entry point
├── public/
│   └── (static assets)
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## 5. DEPENDENCIES TO INSTALL

### Core (Auto-installed by init)
- `react`
- `react-dom`
- `typescript`
- `vite`
- `tailwindcss`
- `@radix-ui/react-*` (shadcn dependencies)

### Animation Libraries
```bash
npm install gsap @gsap/react
```

### Fonts
```bash
# JetBrains Mono (headings)
# Inter (body)
# Loaded via Google Fonts CDN in index.html
```

### Utilities
```bash
npm install clsx tailwind-merge
```

---

## 6. KEY IMPLEMENTATION DETAILS

### Custom Cursor (Data Hunter)

```typescript
// hooks/useMousePosition.ts
import { useState, useEffect } from 'react';

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
};
```

### Matrix Rain Background

```typescript
// components/MatrixRain.tsx
// Canvas-based implementation
// - Character set: Katakana + Alphanumeric
// - Color: #00FF41 with varying opacity
// - Speed: 2-5px per frame
// - Density: ~50 columns on desktop, ~25 on mobile
```

### Terminal Typing

```typescript
// hooks/useTypeWriter.ts
// Returns: { text, isTyping, start }
// Config: speed (ms per char), delay before start
// Supports: Multiple lines with delays between
```

### Text Scramble

```typescript
// lib/scramble.ts
// Characters: '!<>-_\\/[]{}—=+*^?#________'
// Animation: Random char -> correct char
// Duration: ~30ms per iteration
```

### Skill Bar Animation

```typescript
// components/SkillBar.tsx
// Uses GSAP ScrollTrigger
// Animates width from 0% to target%
// Duration: 1s
// Easing: power2.out
```

---

## 7. PERFORMANCE CONSIDERATIONS

### Matrix Rain
- Use `requestAnimationFrame` (not setInterval)
- Limit to 60fps
- Reduce density on mobile
- Use Canvas 2D (not DOM elements)

### Custom Cursor
- Use `transform: translate()` (not top/left)
- Throttle updates to 60fps
- Disable on touch devices

### Scroll Animations
- Use `will-change: transform` on animated elements
- Prefer `transform` and `opacity` only
- Use GSAP's `scrub` for smooth scroll-linked animations

### General
- Lazy load images
- Code-split sections if needed
- Use Intersection Observer for triggering

---

## 8. RESPONSIVE BREAKPOINTS

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
}
```

### Mobile Adaptations
- Custom cursor: DISABLED
- Matrix rain: 50% density
- Typography: -20% size
- Layout: Single column
- Terminal: Full width

---

## 9. COLOR TOKENS (Tailwind Config)

```javascript
// tailwind.config.js
colors: {
  neon: {
    green: '#00FF41',
    purple: '#8B5CF6',
  },
  dark: {
    bg: '#0A0A0A',
    surface: '#111111',
    border: '#222222',
  },
  text: {
    primary: '#E0E0E0',
    muted: '#666666',
  },
}
```

---

## 10. BUILD COMMANDS

```bash
# Initialize project
bash /app/.kimi/skills/webapp-building/scripts/init-webapp.sh "Nelson Emeliano Portfolio"

# Install additional dependencies
cd /mnt/okcomputer/output/app
npm install gsap @gsap/react

# Development
npm run dev

# Production build
npm run build

# Deploy
cd /mnt/okcomputer/output/app/dist
# (deploy contents)
```

---

## 11. QUALITY CHECKLIST

### Animations
- [ ] Custom cursor follows mouse smoothly
- [ ] Matrix rain renders at 60fps
- [ ] Terminal types character-by-character
- [ ] Text scramble triggers on hover
- [ ] Skill bars animate on scroll
- [ ] Project cards glow on hover
- [ ] All animations reverse on scroll up

### Visual
- [ ] Dark theme with neon green accents
- [ ] JetBrains Mono for headings
- [ ] Inter for body text
- [ ] Consistent spacing (8px grid)
- [ ] Responsive on all breakpoints

### Performance
- [ ] No layout shifts
- [ ] 60fps animations
- [ ] Fast initial load
- [ ] Optimized images

### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Color contrast adequate
- [ ] Reduced motion support

---

## 12. SHADCN COMPONENTS TO ADD

```bash
# Add shadcn components
cd /mnt/okcomputer/output/app
npx shadcn add button card badge separator
```

---

## 13. GOOGLE FONTS SETUP

Add to `index.html` head:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## 14. IMPLEMENTATION ORDER

1. **Setup**: Initialize project, install deps, setup fonts
2. **Global Styles**: Configure Tailwind colors, base styles
3. **Layout**: Create main App structure with sections
4. **Hero**: Terminal + Matrix background
5. **Custom Cursor**: Implement data hunter cursor
6. **About**: Text content + scramble effect
7. **Projects**: Cards with hover effects
8. **Skills**: Animated skill bars
9. **Contact**: Final section + CTA
10. **Polish**: Scroll animations, transitions, mobile
11. **Test**: All breakpoints, performance
12. **Build & Deploy**
