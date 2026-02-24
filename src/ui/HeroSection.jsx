import { useNavigate } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { MdElectricBike } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";

/**
 * HeroSection Component
 *
 * Main landing page hero section with a split-screen layout:
 * - Left side: Large food image (responsive)
 * - Right side: Content with heading, description, features, and CTAs
 *
 * Icons Used:
 * - FiLeaf: Fresh Ingredients icon from react-icons/fi
 * - FiZap: Fast Delivery icon from react-icons/fi
 * - FiChef: Authentic Taste icon from react-icons/fi
 *
 * Responsive Behavior:
 * - Desktop (lg+): Flex row layout with 50/50 split
 * - Tablet (md): Flex row with adjusted spacing
 * - Mobile (sm): Stacks vertically with full width
 *
 * Uses Tailwind breakpoints:
 * - grid grid-cols-1 lg:grid-cols-2: Stacks on mobile, 2 columns on large screens
 * - gap-8 lg:gap-12: Responsive spacing between sections
 * - px-4 sm:px-6 lg:px-12: Responsive horizontal padding
 *
 * Feature Cards:
 * - Hover effect: Scale up (hover:scale-105) and shadow enhancement
 * - Smooth transition with duration-300 for better UX
 * - Icons displayed above feature titles for visual clarity
 *
 * Design Rationale:
 * - Orange accent color (#FF6B35) for CTA buttons matches brand
 * - Content height adjusted with min-h for alignment
 * - Flexbox alignment centers content vertically on desktop
 */

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full flex-1 flex flex-col lg:flex-row">
      {/* LEFT SIDE - IMAGE (Full Height) */}
      <div className="w-full lg:w-1/2 h-full lg:h-screen">
        <img
          src="/food2.png"
          alt="Family enjoying meal"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT SIDE - CONTENT */}
      <div className="w-full lg:w-1/2 flex items-center px-6 sm:px-10 lg:px-20 py-12 lg:py-0 bg-white">
        <div className="max-w-md space-y-8">
          {/* Small header: Logo (plain) + Sign In (bordered) */}
          <div className="w-full flex items-center justify-end mt-3 mb-8 mx-2">
            <div>
              <button
                onClick={() => navigate("/auth")}
                className="border border-blue-400 text-blue-500 px-8 py-1 rounded font-semibold"
              >
                Sign In
              </button>
            </div>
          </div>

          <div className="text-2xl font-bold text-orange-500 text-center">
            Chuks Kitchen
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-3xl font-bold text-gray-900 leading-tight">
            Your Authentic Taste of Nigeria
          </h1>

          {/* Description */}
          <p className="text-gray-800 text-sm font-semibold leading-relaxed">
            Experience homemade flavors delivered fresh to your door. We bring
            the rich culinary heritage of Nigeria right to your doorstep.
          </p>

          {/* Features - INLINE (Not Cards) */}
          <div className="space-y-3 pt-4 font-semibold">
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <div className="bg-orange-200 rounded p-2 flex items-center justify-center">
                <FiSun className="text-orange-500 text-lg" />
              </div>
              <span>Freshly Prepared</span>

              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="bg-orange-200 rounded p-2 flex items-center justify-center">
                  <MdElectricBike className="text-orange-500 text-lg" />
                </div>
                <span>Fast & Reliable Delivery</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-700">
              <div className="bg-orange-200 rounded p-2 flex items-center justify-center">
                <ImSpoonKnife className="text-orange-500 text-lg" />
              </div>
              <span>Support Local Business</span>
            </div>
          </div>

          {/* Buttons (stacked full-width) */}
          <div className="flex flex-col gap-4 pt-6">
            <button
              onClick={() => navigate("/auth")}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded"
            >
              Start Your Order
            </button>

            <button
              onClick={() => navigate("/menu")}
              className="w-full border border-blue-700 text-blue-700 py-3 rounded font-semibold hover:bg-gray-50 mb-24"
            >
              Learn More About Us
            </button>
          </div>
          {/* Divider and copyright/links placed under Learn More About Us */}
          <div className="border-t border-gray-200 mt-6 pt-8 pb-9">
            <p className="text-center text-gray-800 text-xs font-semibold">
              © 2024 Chuks Kitchen.
              <a
                href="#"
                className="hover:text-orange-500 transition duration-200 ml-2 text-blue-500"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-orange-500 transition duration-200 ml-2 text-blue-500"
              >
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
