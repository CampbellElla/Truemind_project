/**
 * PromoBanner Component
 *
 * Full-width promotional banner with background image and left-aligned content.
 * Reuses the same structure as HeroBanner but positioned for promotional sections.
 *
 * Props:
 *  - heading: Main promotional heading (string)
 *  - description: Description paragraph (string)
 *  - buttonText: CTA button label (string)
 *  - onButtonClick: Handler function for button click
 *  - backgroundImage: Path to background image (string)
 *
 * Why Separate Component:
 *  - Allows slight styling differences from main hero if needed
 *  - Clear semantic purpose in code
 *  - Single source for promotional banner layout
 *
 * Responsiveness:
 *  - Text sizes scale with screen size
 *  - Padding and spacing adjust at breakpoints
 *  - Maintains vertical center alignment on all devices
 */

const PromoBanner = ({
  heading,
  description,
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
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            {heading}
          </h2>

          {/* Description Paragraph */}
          <p className="text-sm sm:text-base text-gray-100 mb-8 font-semibold leading-relaxed max-w-xl">
            {description}
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

export default PromoBanner;
