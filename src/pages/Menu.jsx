import { ImSearch } from "react-icons/im";
import Navbar from "../ui/Navbar.jsx";
import HeroBanner from "../ui/HeroBanner.jsx";
import PromoBanner from "../ui/PromoBanner.jsx";
import CategoryCard from "../ui/CategoryCard.jsx";
import FoodCard from "../ui/FoodCard.jsx";
import Footer from "../ui/Footer.jsx";
import OrderSummary from "../ui/OrderSummary.jsx";
import useAddToCart from "../hooks/useAddToCart.js";

/**
 * Menu Page Component
 *
 * Main menu/food page displaying food categories and chef's specials.
 * Accessed via /menu route when clicking "Learn More About Us" from home page.
 *
 * Page Structure:
 * 1. Hero Banner - Full-width banner with search input below
 * 2. Popular Categories - 3-column grid of food categories (responsive)
 * 3. Chef's Specials - Grid of food items with descriptions and prices
 * 4. Promotional Banner - Secondary full-width banner
 * 5. Order Summary - Shows when item is clicked
 * 6. Footer - Reused footer component
 *
 * Component Reusability:
 *  - CategoryCard: Reusable component for each category (uses .map())
 *  - FoodCard: Reusable component for each special item (uses .map())
 *  - HeroBanner & PromoBanner: Reusable banner components with different props
 *  - useAddToCart: Consolidated hook for cart functionality
 *
 * Responsiveness:
 *  - Categories: 3 columns (lg) → 2 columns (md) → 1 column (sm/mobile)
 *  - Specials: Same responsive grid behavior
 *  - All text and spacing scales with screen size
 */

const Menu = () => {
  // Use consolidated hook for cart functionality with redirect
  const { cartMessage, handleAddToCart, redirectToOrderSummary } = useAddToCart();

  // Helper to parse price string to number
  const parsePrice = (priceStr) =>
    parseInt((priceStr || "").replace(/[^0-9]/g, ""), 10) || 0;

  // Data for popular categories
  const categories = [
    {
      id: 1,
      title: "Jollof Delights",
      image: "/food11.png",
    },
    {
      id: 2,
      title: "Swallow & Soups",
      image: "/food12.png",
    },
    {
      id: 3,
      title: "Grills & BBQ",
      image: "/food15.png",
    },
    {
      id: 4,
      title: "Snacks & Sides",
      image: "/food13.png",
    },
    {
      id: 5,
      title: "Grills & BBQ",
      image: "/food15.png",
    },
    {
      id: 6,
      title: "Jollof Delights",
      image: "/food9.png",
    },
  ];

  // Data for chef's specials
  const specials = [
    {
      id: 1,
      name: "Jollof Rice with Grilled Chicken",
      description:
        "Aromatic rice cooked in tomato sauce with perfectly grilled chicken",
      price: "₦2,500",
      priceValue: 2500,
      image: "/food11.png",
    },
    {
      id: 2,
      name: "Jollof Rice with Chicken Nuggets",
      description:
        "With plantain, extra pepper sauce",
      price: "₦2,500",
      priceValue: 2500,
      image: "/food10.png",
    },
    {
      id: 3,
      name: "Suya & Spicy Rice",
      description:
        "Aromatic rice cooked in tomato sauce with perfectly fried fish.",
      price: "₦2,800",
      priceValue: 2800,
      image: "/food6.png",
    },
    {
      id: 4,
      name: "Egusi Soup with Pounded Yam",
      description:
        "Creamy egusi soup with meat and fish, served with smooth pounded yam",
      price: "₦2,200",
      priceValue: 2200,
      image: "/food12.png",
    },
    {
      id: 41,
      name: "Egusi Soup with Pounded Yam",
      description:
        "Creamy egusi soup with meat and fish, served with smooth pounded yam",
      price: "₦2,200",
      priceValue: 2200,
      image: "/food12.png",
    },
    {
      id: 11,
      name: "Jollof Rice with Grilled Chicken",
      description:
        "Aromatic rice cooked in tomato sauce with perfectly grilled chicken",
      price: "₦2,500",
      priceValue: 2500,
      image: "/food11.png",
    },
  ];

  /**
   * Handle search submit
   * Currently UI-only with no backend logic
   */
  const handleSearch = (e) => {
    e.preventDefault();
    // Placeholder for search functionality
  };

  /**
   * Handle category card click
   * Placeholder for category filtering
   */
  const handleCategoryClick = (categoryId) => {
    console.log("Category clicked:", categoryId);
  };

  /**
   * Handle add to cart from FoodCard
   * Uses consolidated hook for consistent behavior
   * IMPROVEMENT: Added redirect to Order Summary after adding item
   */
  const onAddToCart = (item) => {
    handleAddToCart(item.name, {
      id: item.id,
      name: item.name,
      image: item.image,
      description: item.description,
      unitPrice: item.priceValue || parsePrice(item.price),
      qty: 1,
      options: {},
    }, redirectToOrderSummary); // Redirect to Order Summary after add
  };

  return (
    <div className="min-h-screen flex flex-col pt-16">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 1. HERO BANNER SECTION */}
        <section className="relative">
          <HeroBanner
            heading="The Heart of Nigerian Home Cooking"
            subheading="Handcrafted with passion, delivered with care."
            buttonText="Discover what's new"
            onButtonClick={() => console.log("Hero button clicked")}
            backgroundImage="/food4.png"
          />

          {/* Search Input - Below Hero Section */}
          <div className="relative -mt-12 sm:-mt-16 lg:-mt-6 z-20 px-6 sm:px-8 lg:px-16 pb-12 sm:pb-16 lg:pb-20">
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="relative flex items-center">
                <ImSearch className="absolute left-4 text-gray-400 text-xl" />
                <input
                  type="text"
                  placeholder="What are you craving for today?"
                  className="w-full pl-12 pr-6 py-3 sm:py-4 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-500 shadow-lg"
                />
              </div>
            </form>
          </div>
        </section>

        {/* 2. POPULAR CATEGORIES SECTION */}
        <section className="w-full px-6 lg:px-16 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-2xl font-bold text-center mb-12">
              Popular Categories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  image={category.image}
                  title={category.title}
                  onClick={() => handleCategoryClick(category.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 3. CHEF'S SPECIALS SECTION */}
        <section className="w-full px-6 lg:px-16 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-2xl font-bold text-center mb-12">
              Chef's Specials
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
              {specials.map((item) => (
                <FoodCard
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  priceValue={item.priceValue}
                  onAddToCart={() => onAddToCart(item)}
                  buttonStyle="text"
                />
              ))}
            </div>

            {/* Cart Message Toast */}
            {cartMessage && (
              <div className="fixed bottom-8 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
                {cartMessage}
              </div>
            )}
          </div>
        </section>

        {/* 4. PROMOTIONAL BANNER SECTION */}
        <section>
          <PromoBanner
            heading="Introducing Our New Menu Additions!"
            description="Explore exciting new dishes, crafted with the freshest ingredients and authetic Nigerian flavors.Limited time offer!"
            buttonText="Discover what's new"
            onButtonClick={() => console.log("Promo button clicked")}
            backgroundImage="/food8.png"
          />
        </section>
      </main>

      {/* Order Summary - Shows when an item is clicked */}
      <OrderSummary />

      {/* 5. FOOTER */}
      <Footer />
    </div>
  );
};

export default Menu;
