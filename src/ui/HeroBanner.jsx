/**
 * HeroBanner Component
 *
 * Reusable full-width hero section with background image and dark overlay.
 * Used for hero banners across the application.
 *
 * Props:
 *  - heading: Main title text (string)
 *  - subheading: Subtitle text (string)
 *  - buttonText: CTA button label (string)
 *  - onButtonClick: Handler function for button click
 *  - backgroundImage: Path to background image (string)
 *
 * Why Reusable:
 *  - Avoids code duplication for similar hero sections
 *  - Props allow different content while maintaining consistent styling
 *  - Single source of truth for hero section layout
 */

const HeroBanner = ({
  heading,
  subheading,
  buttonText,
  onButtonClick,
  backgroundImage,
}) => {
  return (
    <section
      className="relative w-full h-80 sm:h-96 lg:h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content - Left Aligned */}
      <div className="relative h-full flex flex-col justify-center items-start z-10 px-6 sm:px-8 lg:px-16">
        <div className="max-w-2xl">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {heading}
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base text-gray-100 mb-8 font-semibold leading-relaxed">
            {subheading}
          </p>

          {/* CTA Button */}
          <button
            onClick={onButtonClick}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded transition duration-200"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
