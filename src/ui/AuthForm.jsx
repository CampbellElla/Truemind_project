import { useState } from "react";
import { FaEye, FaEyeSlash, FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

/**
 * AuthForm Component
 *
 * Authentication form with split-screen layout:
 * - Left side: Image with orange overlay and "Chuks Kitchen" image logo
 * - Right side: Togglable Login/Create Account form
 *
 * State Management:
 * - Uses useState to toggle between 'login' and 'signup' modes
 * - Simple form state management for inputs (no validation needed per requirements)
 *
 * Responsive Behavior:
 * - Desktop (lg+): Flex row with 50/50 split
 * - Tablet/Mobile: Stacks vertically with full width
 * - grid grid-cols-1 lg:grid-cols-2: Controls responsive layout
 * - px-4 sm:px-6 lg:px-12: Responsive horizontal padding
 *
 * Design Rationale:
 * - Orange gradient overlay creates visual hierarchy
 * - Toggle buttons use Tailwind conditionals for active/inactive states
 * - Google sign-in button is UI-only (no functionality per requirements)
 * - Form fields have consistent styling with shadow and padding
 * - Uses border utilities for outlined look
 */
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="w-full flex-1 flex flex-col lg:flex-row">
      {/* LEFT SIDE - IMAGE WITH ORANGE OVERLAY */}
      <div className="relative w-full lg:w-1/2 h-full lg:h-screen">
        <img
          src="/food2.png"
          alt="Chuks Kitchen"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-orange-500 bg-opacity-80 flex items-center px-8 lg:px-16">
          <div className="text-white max-w-md space-y-4">
            {/* IMPROVEMENT: Replaced text with image logo, increased size */}
            <img 
              src="/Chuks Kitchen.png" 
              alt="Chuks Kitchen" 
              style={{ width: '240px', height: 'auto', marginBottom: '16px' }}
            />
            <p className="text-sm leading-relaxed">
              Your journey to delicious, authentic Nigerian meals starts here.
              Sign up or log in to explore your favorites today.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="w-full lg:w-1/2 flex items-center px-6 sm:px-10 lg:px-20 py-12 bg-white">
        <div className="w-full max-w-md space-y-4">
          {/* TITLE */}
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            {isLogin ? "Login your Account" : "Create Your Account"}
          </h2>

          {/* FORM */}
          <div className="space-y-4 ">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {isLogin ? "Email or phone number" : "Email"}
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-orange-500"
              />
            </div>
            {!isLogin && (
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full border border-gray-300 px-4 py-3 pl-10 rounded focus:outline-none focus:border-orange-500"
                  />
                  <FaPhoneAlt
                    className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={12}
                  />
                </div>
              </div>
            )}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full border border-gray-300 px-4 py-3 pr-10 rounded focus:outline-none focus:border-orange-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <FaEye size={20} />
                  ) : (
                    <FaEyeSlash size={20} />
                  )}
                </button>
              </div>
            </div>
            {!isLogin && (
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>
            )}
            {isLogin && (
              <span className="flex text-blue-400 justify-end text-sm">
                Forget password?
              </span>
            )}
            {!isLogin && (
              <label className="flex items-center gap-2 text-gray-600 text-xs">
                <input type="checkbox" />I agree to the{" "}
                <span className="text-blue-400">Terms & Conditions</span> and
                <span className="text-blue-400">Privacy Policy</span>
              </label>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded mt-2">
            {isLogin ? "Continue" : "Continue"}
          </button>

          {/* DIVIDER */}
          <div className="flex items-center justify-center gap-4 mt-1">
            <span className="text-sm text-gray-600">or continue with</span>
          </div>

          {/* GOOGLE BUTTON */}
          <button className="w-full border border-gray-300 py-3 rounded text-sm hover:bg-gray-50 flex items-center justify-center gap-2">
            <FcGoogle size={20} />
            Continue with Google
          </button>

          {/* FACEBOOK BUTTON */}
          <button className="w-full border border-gray-300 py-3 rounded text-sm hover:bg-gray-50 flex items-center justify-center gap-1">
            <FaFacebookF size={20} className="text-blue-600" />
            Continue with Facebook
          </button>

          {/* SWITCH LINK */}
          <p className="text-sm text-gray-600 text-center">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-blue-500 font-normal"
                >
                  Create an account
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-blue-400 font-medium"
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
