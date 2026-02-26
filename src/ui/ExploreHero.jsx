/**
 * ExploreHero Component
 *
 * Hero section for the Explore page.
 * Full width banner with overlay, restaurant info, and avatar.
 *
 * Layout:
 * - Background image with overlay
 * - Restaurant name and rating on left
 * - Circular avatar on right
 */

const ExploreHero = () => {
  return (
    <section
      className="relative w-full h-72 sm:h-96 lg:h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/food16.jpeg')`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-between px-6 sm:px-8 lg:px-16">
        {/* Left: Restaurant Info */}
        <div>
          {/* IMPROVEMENT: Replaced text with image logo, increased size */}
          <img 
            src="/Chuks Kitchen.png" 
            alt="Chuks Kitchen" 
            className="mb-3"
            style={{ width: '240px', height: 'auto' }}
          />
          <p className="text-sm sm:text-base text-gray-100">
            Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExploreHero;
