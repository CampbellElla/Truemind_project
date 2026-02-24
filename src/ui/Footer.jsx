/**
 * Footer Component
 *
 * Three-column footer layout with About, Quick Links, and Contact sections.
 * Responsive design stacks columns on mobile devices.
 *
 * Responsive Behavior:
 * - Desktop: 3-column grid layout (grid-cols-1 md:grid-cols-3)
 * - Tablet/Mobile: Full width single column
 * - Padding scales responsively (px-4 sm:px-6 lg:px-12)
 *
 * Tailwind Structure:
 * - grid grid-cols-1 md:grid-cols-3: Responsive column layout
 * - gap-8 md:gap-12: Responsive spacing between columns
 * - border-t border-gray-200: Subtle top border separator
 *
 * Design Rationale:
 * - Dark background (bg-gray-900) provides contrast with main content
 * - White text for accessibility and readability
 * - Uses orange for brand color consistency
 * - Links have hover states for user feedback
 * - Footer is commonly positioned at bottom across all pages
 */

const Footer = () => {
  return (
    <footer className="hidden lg:block bg-[#6B4226] text-gray-200">
      <div className="w-full px-6 sm:px-10 lg:px-20 py-12">
        {/* 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-300">
              Chuks Kitchen
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Bringing the authentic flavors of Nigerian home cooking to your
              table, with passion and care.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Menu</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>+234 801 234 5678</li>
              <li>hello@chukskitchen.com</li>
              <li>123 Food Street, Lagos</li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2 text-sm">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Linkedin</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>

        {/* Bottom small copyright text */}
        <div className="mt-10 text-xs text-gray-300">
          © 2024 Chuks Kitchen. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
