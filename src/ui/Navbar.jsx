import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Navbar Component
 *
 * Reusable navigation bar with logo and menu links.
 * Includes active state styling for current page.
 *
 * Links:
 * - Home: /
 * - Explore: /explore
 * - My Orders: /orders
 * - Account: /account
 * - Login: /auth
 *
 * Active Styling:
 * - Orange color for active link
 * - Consistent with brand colors
 */

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Far Left */}
          <Link to="/" className="flex items-center">
            <img 
              src="/Chuks Kitchen.png" 
              alt="Chuks Kitchen" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Distributed Layout */}
          <div className="hidden md:flex items-center justify-between flex-1 max-w-xl mx-8">
            {/* Home - Left */}
            <Link
              to="/"
              className={`font-semibold transition-colors duration-200 ${
                isActive("/")
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              Home
            </Link>

            {/* Explore - Center */}
            <Link
              to="/explore"
              className={`font-semibold transition-colors duration-200 ${
                isActive("/explore")
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              Explore
            </Link>

            {/* My Orders - Slightly Right of Center */}
            <Link
              to="/orders"
              className={`font-semibold transition-colors duration-200 ${
                isActive("/orders")
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              My Orders
            </Link>

            {/* Account - Far Right */}
            <span
              className="font-semibold text-gray-400 cursor-not-allowed"
              title="Account page coming soon"
            >
              Account
            </span>
          </div>

          {/* Login Button - Far Right */}
          <div className="hidden md:block ml-8">
            <Link
              to="/auth"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded transition-colors duration-200"
            >
              Login
            </Link>
          </div>

          {/* Hamburger Button (Mobile Only) */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`font-semibold ${
                isActive("/")
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              Home
            </Link>
            <Link
              to="/explore"
              onClick={() => setIsOpen(false)}
              className={`font-semibold ${
                isActive("/explore")
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              Explore
            </Link>
            <Link
              to="/orders"
              onClick={() => setIsOpen(false)}
              className={`font-semibold ${
                isActive("/orders")
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              My Orders
            </Link>
            <span className="font-semibold text-gray-400">Account</span>
            <Link
              to="/auth"
              onClick={() => setIsOpen(false)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded w-fit"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
