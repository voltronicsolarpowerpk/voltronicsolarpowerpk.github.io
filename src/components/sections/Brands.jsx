import { motion } from "framer-motion";
import { FaShield } from "react-icons/fa6";
import { brandsData } from "../../data/brands";

export default function brands() {
  // Triple the array to ensure seamless infinite looping on ultra-wide screens
  const sliderBrands = [...brandsData, ...brandsData, ...brandsData];

  return (
    <section className="py-4 bg-background overflow-hidden">
      <div className="container-custom px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-primary/10 text-primary-dark text-xs sm:text-sm font-medium mb-2.5 sm:mb-3">
            <FaShield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
            <span>100% Genuine & Certified Equipment</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text tracking-tight">
            Authorized Dealer & Partner Brands
          </h2>
          <p className="mt-1.5 sm:mt-2 text-text-light text-xs sm:text-sm lg:text-base max-w-xl">
            We partner directly with leading global Tier-1 manufacturers to
            deliver top-tier solar solutions.
          </p>
        </div>

        {/* Infinite Slider Wrapper */}
        <div className="relative w-full overflow-hidden mask-image:_linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-32px),transparent_100%) sm:mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%) lg:mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)">
          <motion.div
            className="flex shrink-0 gap-3 sm:gap-4 lg:gap-6 w-max"
            animate={{
              x: ["0%", "-33.33%"],
            }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            }}
          >
            {sliderBrands.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="w-32 sm:w-40 lg:w-48 shrink-0 flex items-center justify-center p-3 sm:p-4 lg:p-6 bg-surface rounded-card shadow-card border border-text/5 hover:border-primary/20 transition-all duration-300 group h-16 sm:h-20 lg:h-24"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-h-8 sm:max-h-10 lg:max-h-12 w-auto object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
