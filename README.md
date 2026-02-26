# Chuks Kitchen - Frontend Website

A modern, responsive food delivery website built with React.js, Vite, and Tailwind CSS. This is a frontend-only application showcasing an authentic Nigerian food brand with a landing page and authentication interface.

## 🎯 Project Overview

**Chuks Kitchen** is a sleek, professional website designed to introduce users to authentic Nigerian cuisine and facilitate order placement. The application features:

- **Landing Page**: Hero section with call-to-action buttons
- **Authentication Page**: Login/Sign-up interface with split-screen design
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design using orange as the primary brand color

## 📁 Project Structure

```
foodwebsite/
├── src/
│   ├── ui/                  # Reusable UI components
│   │   ├── HeroSection.jsx  # Landing page split-screen hero (includes header/logo)
│   │   ├── AuthForm.jsx     # Login/signup form with toggle
│   │   └── Footer.jsx       # Multi-column footer (hidden on mobile, visible on lg+)
│   │
│   ├── pages/               # Page components (route targets)
│   │   ├── Home.jsx         # Landing page (/)
│   │   └── Auth.jsx         # Authentication page (/auth)
│   │
│   ├── App.jsx              # Main app with routing setup
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind directives
│
├── public/                  # Static assets
├── index.html              # HTML entry point
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── eslint.config.js        # ESLint configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Open in browser:**
   - The application will typically run on `http://localhost:5174`
   - Check your terminal for the exact URL

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design Decisions

## 🛠 Recent UI Updates

- Removed the separate `Navbar.jsx` component. The small header (logo + `Sign In`) is now embedded inside `HeroSection.jsx`.
- `HeroSection` header: logo displayed plainly; `Sign In` is a bordered blue button placed at the top with additional top margin. CTA buttons (`Start Your Order`, `Learn More About Us`) are stacked full-width on the hero and a divider + ©2024 / policy links are placed under the secondary CTA.
- `AuthForm.jsx` updates:
  - Email label is dynamic: shows "Email or phone number" in Login mode and "Email" in Create Account mode.
  - Phone number field added for Create Account with a phone icon inside the input.
  - Password field now has a floating label and a show/hide icon inside the input to toggle visibility.
  - Confirm password field present on Create Account and placed after Password.
  - Google sign-in button icon aligned and sized; social buttons use consistent flex centering.
  - Spacing tightened between form sections for a more compact layout.
- `Footer.jsx` updated to be hidden on mobile and visible at `lg` and above (Tailwind `hidden lg:block`).

These UI changes are primarily presentational; no backend/auth logic was added.

### Color Scheme

- **Primary Color**: Orange (`#FF6B35`) - Used for CTA buttons and accents
- **Background**: White - Clean, minimal aesthetic
- **Text**: Gray shades - High contrast and readability
- **Footer**: Dark gray/charcoal - Visual separation and hierarchy

### Typography

- **Headings**: Bold, larger font sizes for visual hierarchy
- **Body Text**: Medium weight for readability
- **Font Sizes**: Responsive scaling using Tailwind breakpoints

### Layout Approach

#### Desktop (lg: 1024px and up)

- Split-screen layouts (50/50)
- Side-by-side content arrangement
- Full utilization of horizontal space

#### Tablet (md: 768px - 1023px)

- Adjusted spacing and padding
- Flexible grid layouts
- Optimized for touch interaction

#### Mobile (sm: 0px - 767px)

- Stacked vertical layouts
- Full-width elements
- Touch-friendly button sizes
- Optimized images for faster loading

### Component Philosophy

1. **Separation of Concerns**: Each component has a single responsibility
2. **Reusability**: Footer appears on all pages consistently
3. **Composition**: Pages are composed of smaller, manageable components
4. **Documentation**: Every component includes detailed comments
5. **Responsiveness**: Tailwind utilities handle all breakpoints

## 🛣️ Routing

The application uses **React Router v7** for client-side routing:

| Route   | Component | Purpose                        |
| ------- | --------- | ------------------------------ |
| `/`     | `Home`    | Landing page with hero section |
| `/auth` | `Auth`    | Login/signup page              |

### Navigation Flow

1. User lands on `/` (Home page)
2. User sees "Sign In" button in Navbar or "Start Your Order" button in Hero
3. Either button navigates to `/auth` (Auth page)
4. Auth page displays Login/Create Account toggle form
5. User can navigate back via browser back button or logo click

## 📱 Responsiveness Implementation

All responsiveness is achieved using **Tailwind CSS breakpoints**:

### Tailwind Breakpoints Used

- **sm** (640px): Small screens (large phones)
- **md** (768px): Medium screens (tablets)
- **lg** (1024px): Large screens (desktops)

### Example: Responsive Layout

```jsx
{
  /* Grid: 1 column on mobile, 2 on desktop */
}
<div className="grid grid-cols-1 lg:grid-cols-2">{/* Content */}</div>;

{
  /* Padding: smaller on mobile, larger on desktop */
}
<div className="px-4 sm:px-6 lg:px-12">{/* Content */}</div>;

{
  /* Font size: scales from mobile to desktop */
}
<h1 className="text-3xl sm:text-4xl lg:text-5xl">Heading</h1>;
```

### Key Responsive Features

1. **Flexible Grid System**: `grid grid-cols-1 lg:grid-cols-2`
2. **Responsive Spacing**: `px-4 sm:px-6 lg:px-12` and `py-4 lg:py-8`
3. **Responsive Typography**: Text sizes scale across breakpoints
4. **Image Scaling**: `max-w-md lg:max-w-lg` for responsive images
5. **Flexbox Ordering**: `order-2 lg:order-1` to reorder content on different screens

## 🎯 Features

### Landing Page (Home)

- **Navbar**: Sticky navigation with Chuks Kitchen branding
- **Hero Section**:
  - Left: Food image (responsive sizing)
  - Right: Heading, description, 3 feature highlights, 2 CTA buttons
- **Footer**: About section, Quick Links, Contact information

### Authentication Page

- **Split Screen Design** (Desktop):
  - Left: Branded image with orange overlay
  - Right: Login/Signup form
- **Form Toggle**: Easy switching between Login and Create Account modes
- **Responsive**: Stacks vertically on mobile/tablet
- **Google Sign-In Button**: UI-only (no functionality)
- **Footer**: Consistent with landing page

## 🧩 Component Details

### Navbar Component

- Sticky positioning for constant visibility
- Sign In button triggers navigation to `/auth`
- Orange accent color matches brand identity
- Responsive padding adjusts on different screen sizes

### HeroSection Component

- Grid layout with responsive columns
- Image container with max-width constraints
- Content area with proper spacing hierarchy
- Feature highlights in a responsive 3-column grid
- Two CTA buttons: primary (orange) and secondary (outlined)

### AuthForm Component

- useState hook manages login/signup toggle
- Form inputs without validation (UI-only)
- Toggle buttons with active state styling
- Google sign-in button as visual element
- Responsive split-screen on desktop

### Footer Component

- 3-column layout on desktop
- Single column on mobile
- Consistent styling across all pages
- Social links and company information
- Copyright and policy links

## 💡 State Management

The application uses **React's built-in `useState` hook** for minimal state management:

```javascript
// AuthForm component - Toggle between login and signup
const [isLogin, setIsLogin] = useState(true);

const toggleMode = () => {
  setIsLogin(!isLogin);
};
```

**Why no global state?**

- Simple application with limited state requirements
- Navigation handled by React Router
- No complex data sharing between pages
- Easy to scale with Redux/Context if needed later

## 📝 Code Documentation

Every component includes:

1. **File-level JSDoc**: Explains purpose and key features
2. **Inline Comments**: Clarify design decisions and Tailwind usage
3. **Section Comments**: Label major layout sections
4. **Responsive Notes**: Explain how breakpoints are used

Example:

```jsx
/**
 * HeroSection Component
 *
 * Main landing page hero section with a split-screen layout
 *
 * Responsive Behavior:
 * - Desktop (lg+): Flex row layout with 50/50 split
 * - Tablet (md): Flex row with adjusted spacing
 * - Mobile (sm): Stacks vertically with full width
 */
```

## 🎨 Tailwind CSS Usage

### Key Utilities

| Utility                                    | Purpose                   |
| ------------------------------------------ | ------------------------- |
| `grid` / `flex`                            | Layout structure          |
| `grid-cols-1` / `lg:grid-cols-2`           | Responsive columns        |
| `px-4` / `sm:px-6` / `lg:px-12`            | Responsive padding        |
| `text-3xl` / `sm:text-4xl` / `lg:text-5xl` | Responsive fonts          |
| `bg-orange-500` / `hover:bg-orange-600`    | Colors and states         |
| `rounded` / `shadow-lg`                    | Border radius and shadows |
| `transition` / `duration-200`              | Smooth animations         |

## 🔧 Configuration Files

### vite.config.js

Vite build configuration for fast development and optimized production builds.

### tailwind.config.js

Tailwind CSS customization (uses default theme plus custom extensions).

### postcss.config.js

PostCSS plugins for CSS processing (Tailwind plugin included).

### eslint.config.js

ESLint configuration for code quality and consistency.

## 🚦 No Backend Required

This is a **frontend-only application**:

- ❌ No API calls
- ❌ No authentication logic
- ❌ No database
- ❌ No form submission
- ✅ Pure UI and state management

All form inputs and buttons are **UI elements only** for demonstration purposes.

## 📦 Dependencies

### Core Dependencies

- **react** (v19): UI library
- **react-dom** (v19): React DOM rendering
- **react-router-dom** (v7): Client-side routing
- **react-icons** (v5): Icon library

### Dev Dependencies

- **vite**: Build tool and dev server
- **tailwindcss**: Utility-first CSS framework
- **postcss**: CSS transformation tool
- **autoprefixer**: CSS vendor prefixes
- **eslint**: Code quality tool

## 🎓 Learning Resources

To understand the implementation better:

1. **React Basics**: Components, JSX, Hooks (`useState`)
2. **React Router**: Routing, `useNavigate`, `<Route>`
3. **Tailwind CSS**: Utility classes, responsive design, breakpoints
4. **Responsive Design**: Mobile-first approach, flexible layouts
5. **Component Architecture**: Props, composition, separation of concerns

## 🤝 Code Quality

- **Consistent Formatting**: Proper indentation and spacing
- **Meaningful Names**: Clear component and variable names
- **Comments**: Detailed explanations throughout code
- **Best Practices**: React hooks conventions, semantic HTML
- **Accessibility**: Proper button labels, semantic elements

## 🎉 Future Enhancements

Possible improvements without breaking current structure:

1. **Menu Page**: Add a third route for menu browsing
2. **Global State**: Implement Context API or Redux for state management
3. **Form Validation**: Add form validation library
4. **API Integration**: Connect to backend for real authentication
5. **Animation**: Add Framer Motion for page transitions
6. **Testing**: Implement Jest and React Testing Library
7. **SEO**: Add meta tags and structured data
8. **Dark Mode**: Implement theme toggle using Tailwind
9. **Internationalization**: Add multi-language support
10. **Performance**: Image optimization, lazy loading

## 📄 License

This project is created as a demonstration. Feel free to use and modify for learning purposes.

---

## 🆘 Troubleshooting

### Port Already in Use

If port 5173 is already in use:

```bash
npm run dev -- --port 3000
```

### Dependencies Not Installing

Clear npm cache and reinstall:

```bash
npm cache clean --force
rm -rf node_modules
npm install
```

### Tailwind Styles Not Applied

Ensure `index.css` is imported in `main.jsx`:

```javascript
import "./index.css";
```

---

## 📚 IMPLEMENTATION GUIDE & COMPONENT DOCUMENTATION

This section provides detailed documentation for all components and implementation details.

### 1. App.jsx - Main Application Root

**Purpose**: Sets up routing structure for the entire application using React Router.

**File Location**: `src/App.jsx`

**Routing Structure**:

```
/ → Home page (landing page)
/auth → Authentication page (login/signup)
```

**Key Features**:

- Uses BrowserRouter for client-side routing
- Routes container defines all route paths
- Route component pairs paths with page components
- No global layout wrapper for flexibility

**Code Structure**:

```jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

### 2. Navbar Component - Top Navigation Bar

**Purpose**: Displays top navigation with Chuks Kitchen branding and Sign In button.

**File Location**: `src/ui/Navbar.jsx`

**Features**:

- Sticky positioning for constant visibility (sticky top-0 z-50)
- Sign In button navigates to `/auth` route
- Orange button matches brand identity
- Responsive padding: `px-6 sm:px-8 lg:px-12`

**Key Classes**:

- `sticky top-0 z-50`: Keeps navbar at top while scrolling
- `bg-white shadow-sm`: Clean white background with subtle shadow
- `flex justify-between items-center`: Aligns logo and button on opposite ends
- `text-orange-500`: Orange accent color for brand

**Hover Effects**:

- Button: `hover:bg-orange-600` (darker orange on hover)
- Smooth transition: `transition duration-200 ease-in-out`

---

### 3. HeroSection Component - Main Landing Content

**Purpose**: Split-screen hero section with food image and content, including feature highlights.

**File Location**: `src/ui/HeroSection.jsx`

**Layout Structure** (Responsive):

- **Desktop (lg+)**: 2-column grid (50/50 split)
- **Tablet (md)**: Adjusted grid with responsive spacing
- **Mobile (sm)**: Single column, stacked vertically

**Key Features**:

#### Image Section (Left)

- Responsive sizing: `max-w-md lg:max-w-lg`
- Order control: `order-2 lg:order-1` (swaps position on mobile)
- Rounded corners: `rounded-lg`
- Shadow effect: `shadow-lg`

#### Content Section (Right)

- Main heading: Text scales from 3xl (mobile) → 4xl (tablet) → 5xl (desktop)
- Description text with `max-w-md` constraint
- Responsive spacing: `space-y-6 lg:space-y-8`

#### Feature Cards - NEW IMPLEMENTATION

**Feature Cards with Icons & Hover Effects**:

```jsx
{
  /* Feature 1 - Fresh Ingredients */
}
<div className="bg-orange-50 p-4 rounded-lg transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer hover:bg-orange-100">
  <div className="flex justify-center mb-3">
    <FiLeaf className="text-orange-500 text-3xl" />
  </div>
  <h3 className="font-semibold text-gray-900 mb-2 text-center">
    Fresh Ingredients
  </h3>
  <p className="text-sm text-gray-600 text-center">
    Hand-picked quality ingredients sourced locally
  </p>
</div>;
```

**Icons Used** (from react-icons/fi):

1. **FiLeaf** - Fresh Ingredients (leaf icon)
2. **FiZap** - Fast Delivery (lightning bolt icon)
3. **FiChef** - Authentic Taste (chef hat icon)

**Hover Effects Applied**:

- `hover:scale-105`: Card enlarges by 5% on hover
- `hover:shadow-lg`: Enhanced shadow on hover
- `hover:bg-orange-100`: Darker orange background on hover
- `transition duration-300`: Smooth 300ms transition for all effects
- `cursor-pointer`: Indicates interactivity

**Tailwind Classes Breakdown**:

- `bg-orange-50`: Light orange background
- `p-4`: Padding on all sides
- `rounded-lg`: Rounded corners
- `grid grid-cols-1 sm:grid-cols-3 gap-4`: 1 column on mobile, 3 on desktop

#### Call-to-Action Buttons

- Primary Button: Orange (`bg-orange-500 hover:bg-orange-600`)
- Secondary Button: Outlined (`border-2 border-gray-900`)
- Both responsive: `flex flex-col sm:flex-row` for mobile stacking

---

### 4. AuthForm Component - Authentication Interface

**Purpose**: Login/Sign-up form with toggle functionality and split-screen design.

**File Location**: `src/ui/AuthForm.jsx`

**State Management**:

```javascript
const [isLogin, setIsLogin] = useState(true);

const toggleMode = () => {
  setIsLogin(!isLogin);
};
```

**Features**:

- Toggle buttons switch between Login and Create Account
- Conditional rendering: Shows different fields based on mode
- Form inputs with focus states (`focus:border-orange-500`)
- Google sign-in button (UI-only)

**Form Fields**:

- Email input (both login & signup)
- Password input (both login & signup)
- Confirm Password (signup only)
- Full Name (signup only)

**Toggle Button Styling**:

```jsx
className={`flex-1 py-3 font-semibold rounded transition duration-200 ${
  isLogin
    ? 'bg-orange-500 text-white'
    : 'border-2 border-gray-300 text-gray-600 hover:border-orange-500'
}`}
```

**Layout** (Responsive):

- Desktop (lg+): Split screen with image on left
- Mobile/Tablet: Stacked layout, image hidden

---

### 5. Footer Component - Multi-Column Footer

**Purpose**: Three-column footer with About, Quick Links, and Contact sections.

**File Location**: `src/ui/Footer.jsx`

**Layout Structure**:

- **Desktop (md+)**: 3-column grid
- **Mobile**: Single column, stacked

**Columns**:

1. **About Section**
   - Brand name with orange highlight
   - Company description
   - Brand philosophy

2. **Quick Links**
   - Home
   - Menu
   - About Us
   - Contact

3. **Contact Us**
   - Address
   - Email
   - Phone number

**Tailwind Classes**:

- `grid grid-cols-1 md:grid-cols-3`: Responsive column layout
- `gap-8 md:gap-12`: Responsive spacing
- `bg-gray-900 text-white`: Dark background for contrast
- `border-t border-gray-800`: Subtle top separator

**Link Hover Effects**:

- `hover:text-orange-500`: Orange text on hover
- `transition duration-200`: Smooth color transition

---

### 6. Home Page - Landing Page Component

**Purpose**: Combines Navbar, HeroSection, and Footer on the landing page.

**File Location**: `src/pages/Home.jsx`

**Component Composition**:

```jsx
<div className="min-h-screen flex flex-col">
  <Navbar />
  <main className="flex-grow">
    <HeroSection />
  </main>
  <Footer />
</div>
```

**Key Concepts**:

- `flex flex-col`: Vertical flex layout
- `flex-grow`: HeroSection expands to fill available space
- `min-h-screen`: Ensures full viewport height

**User Journey**:

1. User lands on homepage
2. Sees Navbar with "Sign In" button
3. Views HeroSection with food image and features
4. Can click "Start Your Order" or "Sign In" to go to /auth
5. Footer is always visible at bottom

---

### 7. Auth Page - Authentication Page Component

**Purpose**: Authentication page with form and footer.

**File Location**: `src/pages/Auth.jsx`

**Component Composition**:

```jsx
<div className="min-h-screen flex flex-col">
  <AuthForm />
  <Footer />
</div>
```

**Features**:

- Login/Signup toggle (handled by AuthForm state)
- Consistent footer across pages
- Split-screen on desktop, stacked on mobile

---

## 🎨 Design Implementation Details

### Color Palette Used

| Color          | Usage                     | Tailwind Class                         |
| -------------- | ------------------------- | -------------------------------------- |
| Orange #FF6B35 | Primary CTA, Brand accent | `bg-orange-500`, `text-orange-500`     |
| Light Orange   | Feature card background   | `bg-orange-50`                         |
| Orange Hover   | Button hover state        | `bg-orange-600`, `hover:bg-orange-100` |
| Gray 900       | Text, Footer              | `text-gray-900`, `bg-gray-900`         |
| Gray 700       | Description text          | `text-gray-700`                        |
| White          | Backgrounds               | `bg-white`                             |

### Responsive Breakpoints Implementation

```
Mobile-First Approach:
sm: 640px   → Small phones and tablets
md: 768px   → Medium tablets
lg: 1024px  → Large screens and desktops
```

**Examples in Components**:

```jsx
{
  /* Padding scales responsively */
}
className = "px-4 sm:px-6 lg:px-12";

{
  /* Font size scales */
}
className = "text-3xl sm:text-4xl lg:text-5xl";

{
  /* Grid layout changes */
}
className = "grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2";

{
  /* Flex direction changes */
}
className = "flex flex-col sm:flex-row";

{
  /* Content reordering */
}
className = "order-2 lg:order-1";
```

### Transition & Animation Classes

```
Smooth transitions used throughout:
- transition: Enable transition effect
- duration-200: 200ms duration (fast)
- duration-300: 300ms duration (standard)
- ease-in-out: Natural acceleration/deceleration

Hover effects:
- hover:bg-orange-600: Color change
- hover:scale-105: Slight enlargement
- hover:shadow-lg: Enhanced shadow
```

---

## 🔄 Component Data Flow

```
App.jsx
├── Route: /
│   └── Home.jsx
│       ├── Navbar.jsx (navigation)
│       ├── HeroSection.jsx (features with icons)
│       └── Footer.jsx
│
└── Route: /auth
    └── Auth.jsx
        ├── AuthForm.jsx (toggle state)
        └── Footer.jsx
```

---

## 📝 Code Documentation Standards Used

Every component includes:

1. **File-level JSDoc Comment**

   ```javascript
   /**
    * ComponentName Component
    *
    * What the component does
    * Key features
    * Props (if any)
    */
   ```

2. **Section Comments**

   ```javascript
   {
     /* Left Section - Image Container */
   }
   ```

3. **Inline Comments for Complex Logic**

   ```javascript
   // Navigate to auth page when button is clicked
   const handleOrderClick = () => {
     navigate("/auth");
   };
   ```

4. **Tailwind Utility Explanations**
   - Each major utility group explained in comments
   - Responsive behavior documented
   - Design rationale provided

---

## 🛠️ Technology Stack & Dependencies

### Core Libraries

- **React 19**: UI component library
- **React Router 7**: Client-side routing
- **Vite**: Build tool and dev server
- **Tailwind CSS 3**: Utility-first CSS framework
- **React Icons 5**: Icon library (FiLeaf, FiZap, FiChef)

### CSS Utilities Used

- Flexbox: `flex`, `flex-col`, `justify-center`, `items-center`
- Grid: `grid`, `grid-cols-*`, `gap-*`
- Spacing: `px-*`, `py-*`, `p-*`, `m-*`
- Typography: `text-*`, `font-*`, `leading-*`
- Colors: `bg-*`, `text-*`, `border-*`
- Effects: `shadow-*`, `rounded-*`, `transition-*`, `scale-*`

---

## 🚀 Feature Implementation Checklist

- [x] Responsive split-screen design (desktop/mobile/tablet)
- [x] React Router navigation between pages
- [x] Navbar with Sign In button
- [x] Hero section with image and content
- [x] Feature cards with icons (FiLeaf, FiZap, FiChef)
- [x] Feature card hover effects (scale-105, shadow-lg, bg color)
- [x] Login/Signup toggle in AuthForm
- [x] Three-column responsive footer
- [x] Orange brand color throughout
- [x] Smooth transitions and hover effects
- [x] Complete documentation and comments
- [x] Mobile-first responsive design
- [x] Icon integration with react-icons

---

## 📖 Learning Resources

### Tailwind CSS Concepts Used

- **Utility-First CSS**: Classes for styling (not custom CSS)
- **Responsive Prefixes**: `sm:`, `md:`, `lg:` for breakpoints
- **State Variants**: `hover:`, `focus:` for interactive states
- **Spacing Scale**: `p-4`, `px-6`, etc. for consistent spacing

### React Concepts Used

- **Functional Components**: No class components
- **Hooks**: `useState`, `useNavigate`
- **JSX**: HTML-like syntax in JavaScript
- **Component Composition**: Pages made of smaller components
- **Props & Event Handlers**: Button clicks triggering navigation

### Responsive Design Pattern

- **Mobile-First**: Start with mobile, add complexity for larger screens
- **Breakpoints**: Use Tailwind's sm, md, lg prefixes
- **Flexible Layouts**: Grid and flexbox for responsiveness
- **Scalable Typography**: Font sizes increase on larger screens

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
