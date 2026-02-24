import { useState } from "react";
import Navbar from "../ui/Navbar.jsx";
import ExploreHero from "../ui/ExploreHero.jsx";
import CategorySidebar from "../ui/CategorySidebar.jsx";
import FoodCard from "../ui/FoodCard.jsx";
import Footer from "../ui/Footer.jsx";

/**
 * Explore Page Component
 *
 * Explore page displaying restaurant hero, categories sidebar, popular items, and category groups.
 * Accessed via /explore route from the Explore link in the header.
 *
 * Layout Structure:
 * 1. Navbar
 * 2. ExploreHero
 * 3. Categories sidebar + Popular grid
 * 4. Category group sections
 * 5. Footer
 */

const Explore = () => {
  // Data for popular items
  const popularItems = [
    {
      id: 1,
      name: "Jollof Rice & Fried Chicken",
      description:
        "Our signature jollof rice, served with crispy fried chicken and plantain.",
      price: "₦3,500",
      image: "/food11.png",
    },
    {
      id: 2,
      name: "Eba & Egusi Soup(Goat Meat)",
      description:
        "Hearty Egusi soup with tender goat meat, served with soft Eba.",
      price: "₦3,500",
      image: "/food21.png",
    },
    {
      id: 3,
      name: "Pounded Yam & Edika ikong",
      description: "Traditional pounded yam with rich, leafy Edika ikong soup.",
      price: "₦3,800",
      image: "/food20.png",
    },
    {
      id: 4,
      name: "Peppered Snail",
      description: "Spicy and Savory peppered snail, perfect as a starter.",
      price: "₦2,500",
      image: "/food8.png",
    },
    {
      id: 5,
      name: "Grilled Tilapia Fish",
      description: "Whole grilled tilapia seasoned with our special spices.",
      price: "₦4,500",
      image: "/food19.png",
    },
    {
      id: 6,
      name: "Jollof Rice & Fried Chicken",
      description:
        "Our signature jollof rice, served with crispy fried chicken and plantain.",
      price: "₦3,500",
      image: "/food11.png",
    },
  ];

  // Data for category groups
  const categoryGroups = [
    {
      title: "Jollof Rice & Entrees",
      items: [
        {
          id: 7,
          name: "Jollof Rice & Smoked Fish",
          description:
            "Flavorful Jollof rice served with perfectly smoked fish",
          price: "₦3,500",
          image: "/food6.png",
        },
        {
          id: 8,
          name: "Party Jollof Rice (Veg)",
          description: "Vegetarian party jollof, full of rich flavors",
          price: "₦2,800",
          image: "/food11.png",
        },
        {
          id: 8,
          name: "Party Jollof Rice (Veg)",
          description: "Vegetarian party jollof, full of rich flavors",
          price: "₦3,500",
          image: "/food11.png",
        },
      ],
    },
    {
      title: "Swallow & Soups",
      items: [
        {
          id: 9,
          name: "Amala with Gbegiri & Ewedu",
          description:
            "Classic amala served with Gbegiri(beans) and Ewedu (jute leaf) soup.",
          price: "₦3,100",
          image: "/food3.png",
        },
        {
          id: 10,
          name: "Fufu & Okra Soup (Fish)",
          description:
            "Light fufu served with fresh okra soup and tiliapia fish.",
          price: "₦3,300",
          image: "/food5.png",
        },
        {
          id: 10,
          name: "Fufu & Okra Soup (Fish)",
          description:
            "Light fufu served with fresh okra soup and tiliapia fish.",
          price: "₦3,300",
          image: "/food5.png",
        },
      ],
    },
  ];

  const [cartMessage, setCartMessage] = useState("");

  const handleAddToCart = (itemName) => {
    setCartMessage(`Added "${itemName}" to cart!`);
    setTimeout(() => setCartMessage(""), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <ExploreHero />

        {/* Categories Sidebar and Popular Section */}
        <section className="w-full px-6 lg:px-16 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8">
            {/* Sidebar */}
            <div>
              <CategorySidebar />
            </div>

            {/* Popular Grid */}
            <div id="popular">
              <h2 className="text-3xl lg:text-2xl font-bold mb-12">Popular</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {popularItems.map((item) => (
                  <FoodCard
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    onAddToCart={() => handleAddToCart(item.name)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Category Group Sections */}
        {categoryGroups.map((group, index) => (
          <section
            key={index}
            id={index === 0 ? "jollof-entrees" : "swallow-soups"}
            className="w-full px-6 lg:px-16 py-16"
          >
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl lg:text-2xl font-bold mb-12">
                {group.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.items.map((item) => (
                  <FoodCard
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    onAddToCart={() => handleAddToCart(item.name)}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Cart Message */}
        {cartMessage && (
          <div className="fixed bottom-8 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
            {cartMessage}
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Explore;
