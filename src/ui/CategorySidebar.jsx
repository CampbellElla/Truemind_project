/**
 * CategorySidebar Component
 *
 * Sidebar for menu categories on the Explore page.
 * White card with vertical list of categories.
 * One category highlighted (Popular).
 */

const CategorySidebar = () => {
  const categories = [
    "Popular",
    "Jollof Rice & Entrees",
    "Swallow & Soups",
    "Grills & BBQ",
    "Snacks & Sides",
  ];

  const handleCategoryClick = (category) => {
    if (category === "Popular") {
      document.getElementById("popular").scrollIntoView({ behavior: "smooth" });
    } else if (category === "Jollof Rice & Entrees") {
      document
        .getElementById("jollof-entrees")
        .scrollIntoView({ behavior: "smooth" });
    } else if (category === "Swallow & Soups") {
      document
        .getElementById("swallow-soups")
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4 mx-3">
        Menu Categories
      </h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            className="py-2 px-3 rounded cursor-pointer text-gray-700 hover:bg-orange-100 hover:text-orange-500"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
