/**
 * FoodCard Component
 *
 * Reusable card component for displaying individual food items.
 * Each card shows image, name, description, price, and add-to-cart button.
 *
 * Props:
 *  - image: Path to food item image (string)
 *  - name: Dish name (string)
 *  - description: Short description of the dish (string)
 *  - price: Price text/display (string, e.g., "₦2,500")
 *  - onAddToCart: Click handler for add-to-cart button
 *
 * Why Reusable:
 *  - Multiple identical cards rendered using .map()
 *  - Props allow different food items with consistent styling
 *  - Single source for card layout and button styling
 *
 * Responsiveness:
 *  - Grid layouts adjust at different breakpoints
 *  - Text sizes scale with Tailwind breakpoints
 *  - Card maintains proper spacing on all devices
 */

import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const FoodCard = ({ id, image, name, description, price, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="w-full h-48 sm:h-56 overflow-hidden">
        {id ? (
          <Link to={`/food/${id}`} className="block w-full h-full">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover hover:scale-110 transition duration-300"
            />
          </Link>
        ) : (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover hover:scale-110 transition duration-300"
          />
        )}
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-6 flex flex-col gap-3 flex-grow">
        {/* Food Name */}
        {id ? (
          <Link
            to={`/food/${id}`}
            className="text-lg sm:text-xl font-bold text-gray-900 hover:underline"
          >
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              {name}
            </h3>
          </Link>
        ) : (
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">{name}</h3>
        )}

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Price and Add to Cart Button */}
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold text-orange-500">{price}</div>
          <button
            onClick={onAddToCart}
            className="bg-orange-500 hover:bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-200"
          >
            <FiPlus className="text-white text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
