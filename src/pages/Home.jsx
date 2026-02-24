import HeroSection from "../ui/HeroSection.jsx";
import Footer from "../ui/Footer.jsx";

/**
 * Home Page Component
 *
 * Main landing page that combines HeroSection, and Footer.
 * This page showcases the Chuks Kitchen brand and encourages users to place an order.
 *
 * Component Structure:
 * - HeroSection:Top navigation with Sign In button and Split-screen layout with food image and content
 * - Footer: Three-column footer with About, Links, and Contact
 *
 * Layout Flow:
 * - Uses semantic HTML structure with proper component composition
 * - All child components handle their own responsiveness via Tailwind
 * - No additional styling needed here; composition is the key
 *
 * User Journey:
 * - User lands on homepage
 * - Can click "Sign In" button or "Start Your Order" button in hero
 * - Both navigate to the Auth page (/auth route)
 */

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content - Hero Section */}
      <main className="flex-grow">
        <HeroSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
