# 🎨 Visual Reference Guide & Cheat Sheet

## 📌 Quick Visual Reference

### Feature Cards - Before & After

#### ❌ BEFORE (Without Icons & Hover)

```
┌─────────────────┐
│ Fresh Ing.      │
│ Hand-picked...  │
└─────────────────┘
```

#### ✅ AFTER (With Icons & Hover Effects)

```
Normal State:
┌─────────────────┐
│        🍃        │ ← Icon (FiLeaf)
│ Fresh Ing.      │
│ Hand-picked...  │
└─────────────────┘

Hover State:
┌──────────────────┐
│ 🍃 (Larger)      │ ← Scales up
│ Fresh Ing.       │
│ Hand-picked...   │
└──────────────────┘
↑ Darker background
↑ Bigger shadow
↑ Slightly larger card
```

---

## 🎨 Tailwind Classes Cheat Sheet

### Colors Used

```
PRIMARY (Orange)
bg-orange-500      → #F97316 (button background)
bg-orange-600      → #EA580C (button hover)
bg-orange-50       → #FFF7ED (light feature card)
bg-orange-100      → #FFEDD5 (darker on feature card hover)
text-orange-500    → #F97316 (icon color)

NEUTRAL
bg-white           → #FFFFFF (main background)
bg-gray-900        → #111827 (footer)
text-gray-900      → #111827 (headings)
text-gray-700      → #374151 (body text)
text-gray-600      → #4B5563 (small text)
text-gray-400      → #9CA3AF (light text)
```

### Spacing Scale

```
px-4    → 1rem padding horizontal (mobile)
px-6    → 1.5rem padding horizontal (tablet)
px-12   → 3rem padding horizontal (desktop)

py-3    → 0.75rem padding vertical (buttons)
py-12   → 3rem padding vertical (sections)

gap-4   → 1rem gap between items
gap-8   → 2rem gap (larger sections)
gap-12  → 3rem gap (major sections)

p-4     → 1rem padding all sides
```

### Text Sizing

```
text-sm      → 0.875rem (small text, descriptions)
text-base    → 1rem (body text)
text-lg      → 1.125rem (larger text)
text-2xl     → 1.5rem (brand name)
text-3xl     → 1.875rem (mobile heading)
text-4xl     → 2.25rem (tablet heading)
text-5xl     → 3rem (desktop heading)
```

---

## 🎯 Responsive Breakpoints Reference

### Mobile-First Approach

```
NO PREFIX  (Mobile)   | 0px   - 639px
sm:        (Small)    | 640px - 767px
md:        (Medium)   | 768px - 1023px
lg:        (Large)    | 1024px+
```

### Common Patterns

```
Display
├─ hidden md:block      → Hidden on mobile, visible on tablet+
├─ block md:hidden      → Visible on mobile, hidden on tablet+
└─ flex md:grid         → Flex on mobile, grid on tablet+

Grid Columns
├─ grid-cols-1          → 1 column (mobile default)
├─ sm:grid-cols-2       → 2 columns on small screens
└─ lg:grid-cols-3       → 3 columns on large screens

Padding/Margin
├─ px-4 sm:px-6 lg:px-12 → Scales based on screen size
└─ py-6 lg:py-12         → Vertical padding scales

Text
├─ text-xl sm:text-2xl lg:text-3xl → Font size scales
└─ text-center lg:text-left → Text alignment changes
```

---

## 🎨 Component Layout Diagrams

### Navbar - All Screen Sizes

```
┌──────────────────────────────┐
│ Chuks Kitchen    [Sign In]   │  ← Same on all sizes
└──────────────────────────────┘
```

### Hero Section - Mobile

```
┌──────────────┐
│   Navbar     │
├──────────────┤
│              │
│    Image     │  grid-cols-1 (1 column)
│   (100vw)    │  order-2 (image below)
├──────────────┤
│   Heading    │
│ Description  │
├──────────────┤
│ Feature 1    │
├──────────────┤
│ Feature 2    │
├──────────────┤
│ Feature 3    │
├──────────────┤
│  Buttons     │
├──────────────┤
│   Footer     │
└──────────────┘
```

### Hero Section - Tablet (600px - 1024px)

```
┌──────────────────────────┐
│      Navbar              │
├──────────────────────────┤
│                          │
│    Image   |  Heading    │  grid-cols-1 sm:grid-cols-2
│  (50vw)    |  Description│  Features in 3-col grid
│            |  Features   │
│            |  (3 cards)  │
│            |  Buttons    │
├──────────────────────────┤
│         Footer           │
└──────────────────────────┘
```

### Hero Section - Desktop (1024px+)

```
┌────────────────────────────────┐
│          Navbar                │
├────────────────┬───────────────┤
│                │    Heading    │
│    Image       │  Description  │
│  (50% width)   │               │
│                │  Feature Cds  │
│                │ [1] [2] [3]  │
│                │               │
│                │   Buttons     │
├────────────────┴───────────────┤
│           Footer               │
└────────────────────────────────┘
```

### Feature Cards - Grid Layout

```
MOBILE (1 column)      TABLET (3 columns)     DESKTOP (3 columns)
┌──────────┐          ┌─────┬─────┬──────┐   ┌─────┬─────┬──────┐
│Feature 1 │          │  1  │  2  │  3   │   │  1  │  2  │  3   │
├──────────┤          ├─────┴─────┴──────┤   ├─────┴─────┴──────┤
│Feature 2 │          │      Grid         │   │      Grid        │
├──────────┤
│Feature 3 │
└──────────┘
```

---

## 🎯 Feature Card Details

### Card Structure

```
┌────────────────────┐
│       Icon         │ ← Centered, orange, 3xl size
│  (FiLeaf/Zap/Chef) │
├────────────────────┤
│    Card Title      │ ← Centered, semibold
├────────────────────┤
│  Card Description  │ ← Centered, gray-600
└────────────────────┘
```

### Hover Effects Layer by Layer

**Layer 1: Scale**

```
Before: 100%
After:  105%  (5% larger)
```

**Layer 2: Shadow**

```
Before: shadow-sm
After:  shadow-lg  (more depth)
```

**Layer 3: Background Color**

```
Before: bg-orange-50  (very light)
After:  bg-orange-100 (slightly darker)
```

**Layer 4: Transition**

```
transition duration-300
= All changes animate over 300ms
```

---

## 📱 Responsive Icons in Feature Cards

```
Mobile View (sm: grid-cols-1):
┌──────────────┐
│    Icon      │ 100% width
│    Title     │ Easy to read
│ Description  │
└──────────────┘

Tablet View (sm: grid-cols-3):
┌─────┬─────┬─────┐
│Icon │Icon │Icon │ 3 cards side-by-side
└─────┴─────┴─────┘

Desktop View (sm: grid-cols-3):
┌─────┬─────┬─────┐
│Icon │Icon │Icon │ Optimally spaced
└─────┴─────┴─────┘
```

---

## 🔄 Button Styles Reference

### Primary Button (Orange)

```
Default State:
┌────────────────────┐
│ Start Your Order   │
│ bg-orange-500      │
│ text-white         │
└────────────────────┘

Hover State:
┌────────────────────┐
│ Start Your Order   │
│ bg-orange-600      │ (darker)
│ text-white         │
└────────────────────┘
```

### Secondary Button (Outlined)

```
Default State:
┌────────────────────┐
│ Learn More         │
│ border-2 gray-900  │
│ text-gray-900      │
└────────────────────┘

Hover State:
┌────────────────────┐
│ Learn More         │
│ border-2 gray-900  │
│ bg-gray-50         │ (light bg)
│ text-gray-900      │
└────────────────────┘
```

---

## 🎨 Icon Reference

### Icons Used (react-icons/fi)

**FiLeaf** - Fresh Ingredients

```
    /\
   /  \
  |    |
   \  /
    \/
```

**FiZap** - Fast Delivery

```
   /\
  /  \
 |    |
  \  /
   \/
```

**FiChef** - Authentic Taste

```
   ___
  /   \
  | |
  \_/
```

All rendered as: `text-orange-500 text-3xl`

---

## 📊 Color Palette Visual

```
ORANGE SHADES
bg-orange-50   ████████ #FFF7ED (Light - Card Background)
bg-orange-100  ███████░ #FFEDD5 (Hover - Card Background)
bg-orange-500  ████████ #F97316 (Primary - Buttons/Icons)
bg-orange-600  ███████░ #EA580C (Hover - Button)

GRAY SHADES
bg-white       ████████ #FFFFFF (Main Background)
text-gray-900  ░░░░░░░░ #111827 (Headings/Text)
text-gray-700  ░░░░░░░░ #374151 (Body Text)
text-gray-600  ░░░░░░░░ #4B5563 (Small Text)
text-gray-400  ░░░░░░░░ #9CA3AF (Light Text)
bg-gray-900    ░░░░░░░░ #111827 (Footer Background)
```

---

## ⏱️ Timing & Transitions

```
Default Transitions:
transition duration-200  → 200ms (buttons, links)
transition duration-300  → 300ms (feature cards, hover)

Easing:
ease-in-out → Natural acceleration/deceleration
cubic-bezier(...) → More complex animations
```

---

## 🎯 Common Tailwind Patterns

### Center Content

```jsx
<div className="flex justify-center items-center">
  Content is centered both ways
</div>
```

### Responsive Grid

```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  Mobile: 1 column Tablet: 2 columns Desktop: 3 columns
</div>
```

### Responsive Text

```jsx
<h1 className="text-3xl sm:text-4xl lg:text-5xl">
  Scales from 30px → 36px → 48px
</h1>
```

### Hover Effects

```jsx
<button className="bg-orange-500 hover:bg-orange-600 transition duration-200">
  Color changes smoothly on hover
</button>
```

### Responsive Padding

```jsx
<div className="px-4 sm:px-6 lg:px-12">Padding increases on larger screens</div>
```

---

## 📋 Quick Copy-Paste Classes

### Feature Card Classes

```
bg-orange-50 p-4 rounded-lg transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer hover:bg-orange-100
```

### Heading Classes

```
text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight
```

### Button Classes (Primary)

```
bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded transition duration-200 ease-in-out
```

### Button Classes (Secondary)

```
border-2 border-gray-900 text-gray-900 hover:bg-gray-50 font-semibold px-8 py-3 rounded transition duration-200
```

### Grid Container

```
max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-6 lg:px-12 py-12 lg:py-20
```

---

## 🎯 Common Use Cases

### Make Something Responsive

1. Add `grid grid-cols-1 lg:grid-cols-2`
2. Or use `flex flex-col lg:flex-row`
3. Test on different screen sizes

### Add Hover Effect

1. Add `transition duration-300`
2. Add `hover:` variant (e.g., `hover:bg-orange-600`)
3. Test by hovering in browser

### Scale Content on Screen Size

1. Use `sm:`, `md:`, `lg:` prefixes
2. Example: `text-sm sm:text-base lg:text-lg`
3. Test with browser zoom/resize

### Adjust Spacing

1. Use `p-*`, `m-*`, `px-*`, `py-*` classes
2. Add breakpoint prefixes: `sm:px-6 lg:px-12`
3. Test spacing visually

---

## 🧪 Testing Checklist

### Visual Testing

- [ ] Feature cards hover effects work
- [ ] Colors match design
- [ ] Icons display correctly
- [ ] Text is readable

### Responsive Testing

- [ ] Mobile view (< 640px) looks good
- [ ] Tablet view (640px - 1024px) looks good
- [ ] Desktop view (> 1024px) looks good
- [ ] No horizontal scrolling

### Interaction Testing

- [ ] Buttons are clickable
- [ ] Hover effects are smooth
- [ ] Transitions are visible
- [ ] Navigation works

---

## 📌 Remember These!

```
1. Mobile-first: Code for mobile, add larger screen styles
2. Responsive: Use breakpoint prefixes (sm:, md:, lg:)
3. Transitions: Add transition duration-X for smooth effects
4. Consistency: Use the same classes throughout
5. Spacing: Use Tailwind's spacing scale (consistent sizing)
6. Colors: Stick to defined color palette
7. Testing: Check on multiple screen sizes
```

---

**This visual reference covers all the styling patterns used in the project.**

Built with ❤️ using React, Vite, and Tailwind CSS
