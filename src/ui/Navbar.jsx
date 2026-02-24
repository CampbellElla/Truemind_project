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
          {/* Logo */}
          <Link to="/" className="text-lg font-bold text-orange-500">
            Chuks Kitchen
          </Link>

          {/* Hamburger Button (Mobile Only) */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks isActive={isActive} />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4">
            <NavLinks isActive={isActive} setIsOpen={setIsOpen} />
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = ({ isActive, setIsOpen }) => (
  <>
    <Link
      to="/menu"
      onClick={() => setIsOpen && setIsOpen(false)}
      className={`font-semibold ${
        isActive("/menu")
          ? "text-orange-500"
          : "text-gray-700 hover:text-orange-500"
      }`}
    >
      Home
    </Link>

    <Link
      to="/explore"
      onClick={() => setIsOpen && setIsOpen(false)}
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
      onClick={() => setIsOpen && setIsOpen(false)}
      className={`font-semibold ${
        isActive("/orders")
          ? "text-orange-500"
          : "text-gray-700 hover:text-orange-500"
      }`}
    >
      My Orders
    </Link>

    <Link
      to="/account"
      onClick={() => setIsOpen && setIsOpen(false)}
      className={`font-semibold ${
        isActive("/account")
          ? "text-orange-500"
          : "text-gray-700 hover:text-orange-500"
      }`}
    >
      Account
    </Link>

    <Link
      to="/auth"
      onClick={() => setIsOpen && setIsOpen(false)}
      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded"
    >
      Login
    </Link>
  </>
);

export default Navbar;
