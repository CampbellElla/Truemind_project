# 📖 COMPONENT DOCUMENTATION & CODE EXAMPLES

## 📌 Complete Documentation Index

This document serves as a comprehensive guide to all components with code examples.

---

## 1️⃣ APP.JSX - Main Application Router

### File Location: `src/App.jsx`

### Purpose

Central routing hub that defines all application routes and their corresponding page components.

### Code Example

```jsx
/**
 * App Component - Main Application Root
 *
 * This component sets up the routing structure for the entire application using React Router.
 * It defines the main routes and their corresponding page components.
 *
 * Routing Structure:
 * - / : Home page (landing page)
 * - /auth : Authentication page (login/signup)
 *
 * Router Setup:
 * - BrowserRouter: Enables client-side routing
 * - Routes: Container for all route definitions
 * - Route: Individual route definitions with path and element
 */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<Home />} />

        {/* Authentication Page Route */}
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### Routing Flow Diagram

```
User enters URL
    ↓
BrowserRouter intercepts
    ↓
Routes checks path
    ↓
Matches path: "/"     Matches path: "/auth"
    ↓                          ↓
Returns <Home />      Returns <Auth />
    ↓                          ↓
Shows Landing Page    Shows Login/Signup Page
```

---

## 2️⃣ NAVBAR COMPONENT - Top Navigation

### File Location: `src/ui/Navbar.jsx`

### Purpose

Sticky navigation bar at the top of every page with brand name and Sign In button.

### Key Features

- 🔝 Sticky positioning (stays at top while scrolling)
- 🔐 Sign In button with navigation to /auth
- 📱 Responsive padding on all screen sizes
- ✨ Hover effect on button

### Code Structure

```jsx
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // Handle Sign In button click - navigate to auth page
  const handleSignIn = () => {
    navigate("/auth");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex justify-between items-center">
        {/* Brand Logo/Text */}
        <div className="text-2xl font-bold text-gray-900">
          Chuks <span className="text-orange-500">Kitchen</span>
        </div>

        {/* Sign In Button */}
        <button
          onClick={handleSignIn}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded transition duration-200 ease-in-out"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
```

### Tailwind Classes Explained

| Class                               | What It Does                        | Why Used                      |
| ----------------------------------- | ----------------------------------- | ----------------------------- |
| `sticky top-0`                      | Stays at top while scrolling        | Fixed navigation visibility   |
| `z-50`                              | High layering                       | Stays above other content     |
| `bg-white shadow-sm`                | White background with subtle shadow | Clean, modern look            |
| `flex justify-between`              | Items on opposite ends              | Logo left, button right       |
| `px-6 sm:px-8 lg:px-12`             | Responsive horizontal padding       | Scales from mobile to desktop |
| `bg-orange-500 hover:bg-orange-600` | Orange button, darker on hover      | Brand color + interactivity   |

---

## 3️⃣ HEROSECTION COMPONENT - Main Landing Content ⭐ UPDATED

### File Location: `src/ui/HeroSection.jsx`

### Purpose

Main hero section with split-screen layout (image + content), featuring interactive cards with icons.

### NEW Features (Updated)

- 🎨 Three feature cards with **professional icons** from react-icons
- ✨ **Hover effects**: Cards scale up, shadow enhances, background darkens
- 📱 **Fully responsive**: Single column on mobile, optimal layout on desktop

### Code Example - Feature Cards with Icons

```jsx
import { useNavigate } from "react-router-dom";
import { FiLeaf, FiZap, FiChef } from "react-icons/fi";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main container with responsive grid layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
        {/* Left Section - Hero Image */}
        <div className="flex justify-center lg:justify-start order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop"
            alt="Authentic Nigerian Food"
            className="w-full max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Section - Content */}
        <div className="flex flex-col justify-center order-1 lg:order-2 space-y-6 lg:space-y-8">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Your Authentic Taste of{" "}
            <span className="text-orange-500">Nigeria</span>
          </h1>

          {/* Description Text */}
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-md">
            Experience the rich flavors of authentic Nigerian cuisine delivered
            fresh to your doorstep. From traditional jollof rice to delicious
            suya, every dish is prepared with love and the finest ingredients.
          </p>

          {/* Feature Highlights - 3 Column Grid with Icons & Hover Effects */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
            {/* Feature 1 - Fresh Ingredients */}
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
            </div>

            {/* Feature 2 - Fast Delivery */}
            <div className="bg-orange-50 p-4 rounded-lg transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer hover:bg-orange-100">
              <div className="flex justify-center mb-3">
                <FiZap className="text-orange-500 text-3xl" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-center">
                Fast Delivery
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Hot meals delivered within 30 minutes
              </p>
            </div>

            {/* Feature 3 - Authentic Taste */}
            <div className="bg-orange-50 p-4 rounded-lg transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer hover:bg-orange-100">
              <div className="flex justify-center mb-3">
                <FiChef className="text-orange-500 text-3xl" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-center">
                Authentic Taste
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Recipes passed down through generations
              </p>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            {/* Primary Button - Order */}
            <button
              onClick={handleOrderClick}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded transition duration-200 ease-in-out text-center"
            >
              Start Your Order
            </button>

            {/* Secondary Button - Learn More */}
            <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-50 font-semibold px-8 py-3 rounded transition duration-200 ease-in-out text-center">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
```

### 🎨 Feature Card Hover Effects Breakdown

```jsx
className =
  "bg-orange-50 p-4 rounded-lg transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer hover:bg-orange-100";
```

| Class                 | Effect            | Duration | Result                 |
| --------------------- | ----------------- | -------- | ---------------------- |
| `transition`          | Enables animation | -        | Smooth changes         |
| `duration-300`        | Animation time    | 300ms    | Smooth but not slow    |
| `hover:scale-105`     | Grow on hover     | 300ms    | Card enlarges 5%       |
| `hover:shadow-lg`     | Enhanced shadow   | 300ms    | Depth effect           |
| `hover:bg-orange-100` | Darker background | 300ms    | Color shift            |
| `cursor-pointer`      | Cursor style      | -        | Indicates clickability |

### Icons Used from react-icons/fi

```javascript
import { FiLeaf, FiZap, FiChef } from 'react-icons/fi';

// FiLeaf - Leaf icon for Fresh Ingredients
<FiLeaf className="text-orange-500 text-3xl" />

// FiZap - Lightning bolt for Fast Delivery
<FiZap className="text-orange-500 text-3xl" />

// FiChef - Chef hat for Authentic Taste
<FiChef className="text-orange-500 text-3xl" />
```

### Responsive Behavior

```
MOBILE (< 640px)
┌─────────────────┐
│    Image        │
├─────────────────┤
│    Heading      │
│  Description    │
├─────────────────┤
│   Feature 1     │
├─────────────────┤
│   Feature 2     │
├─────────────────┤
│   Feature 3     │
├─────────────────┤
│    Buttons      │
└─────────────────┘

TABLET (640px - 1024px)
┌────────────────────┐
│    Image           │
├────────────────────┤
│    Heading         │
│  Description       │
├─────┬─────┬────────┤
│ F1  │ F2  │  F3    │
├────────────────────┤
│      Buttons       │
└────────────────────┘

DESKTOP (> 1024px)
┌──────────────┬────────────────┐
│              │    Heading     │
│    Image     │  Description   │
│              ├─────┬─────┬────┤
│              │ F1  │ F2  │ F3 │
│              ├──────────────────┤
│              │    Buttons      │
└──────────────┴────────────────┘
```

---

## 4️⃣ AUTHFORM COMPONENT - Login/Signup

### File Location: `src/ui/AuthForm.jsx`

### Purpose

Interactive authentication form with toggle between Login and Create Account modes.

### State Management

```javascript
// Track whether user is in login or signup mode
const [isLogin, setIsLogin] = useState(true);

// Toggle between login and signup modes
const toggleMode = () => {
  setIsLogin(!isLogin);
};
```

### Key Features

- 🔄 Toggle button to switch modes
- 📝 Conditional form fields (name only in signup)
- 🎨 Active state styling on toggle buttons
- 📱 Responsive split-screen design
- 🌐 Google sign-in button (UI only)

### Toggle Button Example

```jsx
<button
  onClick={() => setIsLogin(true)}
  className={`flex-1 py-3 font-semibold rounded transition duration-200 ${
    isLogin
      ? "bg-orange-500 text-white"
      : "border-2 border-gray-300 text-gray-600 hover:border-orange-500"
  }`}
>
  Login
</button>
```

### Form Fields Logic

```jsx
{
  /* Email Input - Both modes */
}
<input type="email" placeholder="Email Address" />;

{
  /* Password Input - Both modes */
}
<input type="password" placeholder="Password" />;

{
  /* Confirm Password - Signup only */
}
{
  !isLogin && <input type="password" placeholder="Confirm Password" />;
}

{
  /* Name Input - Signup only */
}
{
  !isLogin && <input type="text" placeholder="Full Name" />;
}
```

---

## 5️⃣ FOOTER COMPONENT - Multi-Column Footer

### File Location: `src/ui/Footer.jsx`

### Purpose

Consistent footer appearing on all pages with company info, links, and contact details.

### Three Columns

**Column 1: About**

- Brand name
- Company description
- Brand philosophy

**Column 2: Quick Links**

- Home
- Menu
- About Us
- Contact

**Column 3: Contact Us**

- Address
- Email
- Phone

### Code Example

```jsx
<div className="bg-gray-900 text-white mt-16 border-t border-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
    {/* Footer Grid - 3 Columns on Desktop, 1 on Mobile */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      {/* Column 1 - About Section */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-orange-500">
          Chuks Kitchen
        </h3>
        <p className="text-gray-400 leading-relaxed">
          Bringing authentic Nigerian flavors to your table...
        </p>
      </div>

      {/* Column 2 - Quick Links */}
      <div>
        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-orange-500 transition"
            >
              Home
            </a>
          </li>
          {/* More links... */}
        </ul>
      </div>

      {/* Column 3 - Contact Us */}
      <div>
        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
        <ul className="space-y-2 text-gray-400">
          <li>📍 123 Food Street, Lagos, Nigeria</li>
          <li>📧 info@chukskitchen.com</li>
          <li>📱 +234 (0) 123 456 7890</li>
        </ul>
      </div>
    </div>

    {/* Footer Divider & Copyright */}
    <div className="border-t border-gray-800 mt-8 pt-8">
      <p className="text-center text-gray-400 text-sm">
        &copy; 2024 Chuks Kitchen. All rights reserved.
      </p>
    </div>
  </div>
</div>
```

### Responsive Behavior

```
MOBILE: Single column (full width)
├─ About
├─ Links
└─ Contact

TABLET/DESKTOP: 3 columns
├─ About │ Links │ Contact
```

---

## 6️⃣ HOME PAGE - Landing Page

### File Location: `src/pages/Home.jsx`

### Purpose

Main landing page that combines all components.

### Component Composition

```jsx
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content - Hero Section with Features */}
      <main className="flex-grow">
        <HeroSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
```

### Flex Layout Explanation

- `min-h-screen`: Takes at least full viewport height
- `flex flex-col`: Vertical flex layout
- `flex-grow`: HeroSection expands to fill available space
- Result: Footer always at bottom, even on short screens

---

## 7️⃣ AUTH PAGE - Authentication Page

### File Location: `src/pages/Auth.jsx`

### Purpose

Authentication page with login/signup form.

### Component Composition

```jsx
const Auth = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Auth Form - Main Content */}
      <AuthForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};
```

---

## 🎯 Complete User Flow Diagram

```
┌─────────────────────────────────┐
│  User Opens Website             │
│  (http://localhost:5173/)       │
└──────────────┬──────────────────┘
               │
               ↓
        ┌──────────────┐
        │  App.jsx     │
        │ (Router)     │
        └──────┬───────┘
               │
               ↓
        ┌────────────────┐
        │ Home Page (/)  │
        │  ┌──────────┐  │
        │  │ Navbar   │  │
        │  ├──────────┤  │
        │  │  Hero    │  │
        │  │ Section  │  │
        │  │ ┌──────┐ │  │
        │  │ │Icons │ │  │← NEW: Feature Cards
        │  │ │Hover │ │  │   with Icons & Effects
        │  │ └──────┘ │  │
        │  ├──────────┤  │
        │  │ Footer   │  │
        │  └──────────┘  │
        └────────┬───────┘
                 │
      ┌──────────┼──────────┐
      │          │          │
      ↓          ↓          ↓
   Click    Click Image   Hover Cards
   "Sign In" or "Order"   (Scale up,
      │          │        Shadow,
      │          │        Color change)
      └──────────┴─────────────┘
              │
              ↓
        ┌──────────────┐
        │ Auth Page    │
        │ (/auth)      │
        │ ┌──────────┐ │
        │ │AuthForm  │ │
        │ │(Toggle)  │ │
        │ ├──────────┤ │
        │ │ Footer   │ │
        │ └──────────┘ │
        └──────────────┘
```

---

## 📊 Component Dependency Tree

```
App.jsx (Routing)
├── Home Page
│   ├── Navbar
│   ├── HeroSection (⭐ with icons & hover)
│   │   ├── Feature Cards (FiLeaf, FiZap, FiChef)
│   │   │   └── Hover effects
│   │   └── CTA Buttons
│   └── Footer
│
└── Auth Page
    ├── AuthForm (with toggle)
    │   ├── Toggle Buttons
    │   ├── Form Inputs
    │   └── Google Sign-in Button
    └── Footer
```

---

## ✨ All Tailwind Classes Used

### Layout Classes

- `flex`, `flex-col`, `flex-row`: Flexbox layouts
- `grid`, `grid-cols-*`: Grid layouts
- `gap-*`: Spacing between items
- `justify-*`, `items-*`: Alignment
- `order-*`: Flex item ordering

### Spacing Classes

- `p-*`: Padding
- `px-*`, `py-*`: Directional padding
- `m-*`: Margin
- `space-y-*`: Vertical spacing between children

### Typography Classes

- `text-*`: Font size
- `font-bold`, `font-semibold`: Font weight
- `leading-*`: Line height
- `text-center`: Text alignment

### Background & Border

- `bg-*`: Background color
- `border-*`: Border style
- `rounded-lg`: Border radius

### Effects & States

- `shadow-*`: Box shadow
- `transition`: Enable animation
- `duration-*`: Animation duration
- `hover:*`: Hover state
- `scale-*`: Transform scale
- `opacity-*`: Transparency

### Responsive

- `sm:`, `md:`, `lg:`: Breakpoint prefixes

---

## 🎓 Key Concepts Used

### React Concepts

- ✅ Functional Components
- ✅ React Hooks (useState, useNavigate)
- ✅ Component Composition
- ✅ Conditional Rendering
- ✅ Event Handlers

### Tailwind Concepts

- ✅ Utility-first CSS
- ✅ Responsive Design
- ✅ State Variants (hover, focus)
- ✅ Component Classes
- ✅ Spacing Scale

### Design Patterns

- ✅ Mobile-first approach
- ✅ Component-based architecture
- ✅ Separation of concerns
- ✅ Reusable components

---

**This documentation covers all components, their purposes, code examples, and responsive behavior.**

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
