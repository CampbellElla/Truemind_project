/**
 * CategoryCard Component
 *
 * Reusable card component for displaying food categories.
 * Each card shows an image with a title overlay.
 *
 * Props:
 *  - image: Path to category image (string)
 *  - title: Category name/title (string)
 *  - onClick: Optional click handler function
 *
 * Why Reusable:
 *  - Multiple identical cards rendered using .map()
 *  - Props allow different data with consistent styling
 *  - Easy to maintain single version of this layout
 *
 * Responsiveness:
 *  - Grid layouts adjust number of columns at different breakpoints
 *  - Image scales responsively maintaining aspect ratio
 */

const CategoryCard = ({ image, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer overflow-hidden"
    >
      {/* Image */}
      <div className="w-full h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Title Section (White Background) */}
      <div className="py-4 text-center">
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
