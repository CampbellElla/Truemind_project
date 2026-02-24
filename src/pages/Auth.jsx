import AuthForm from "../ui/AuthForm.jsx";
import Footer from "../ui/Footer.jsx";

/**
 * Auth Page Component
 *
 * Authentication page with split-screen layout and footer.
 * This page allows users to either log in or create a new account.
 *
 * Component Structure:
 * - AuthForm: Main authentication component with login/signup toggle
 * - Footer: Consistent footer matching other pages
 * - Navigation via back button (optional - users can navigate back through browser or click nav)
 *
 * Layout Flow:
 * - Full height page with AuthForm as main content
 * - Footer positioned at bottom for consistency
 * - Responsive design handled by child components
 *
 * Features:
 * - Toggle between Login and Create Account modes
 * - Form inputs (no validation per requirements)
 * - Google sign-in button (UI only)
 * - Responsive split-screen on desktop, stacked on mobile
 *
 * Navigation:
 * - useNavigate hook available for future back button functionality
 * - Users can click Chuks Kitchen logo/branding to return home
 */

const Auth = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Auth Form - Main Content */}
      <AuthForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Auth;
