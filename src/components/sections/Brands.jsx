import { motion } from "framer-motion";
import { brandsData } from "../../data/brands";

export default function brands() {
  // Triple the array to ensure seamless infinite looping on ultra-wide screens
  const sliderBrands = [...brandsData, ...brandsData, ...brandsData];

  return (
    <section
      id="brands"
      className="py-6 sm:py-8 lg:py-10 bg-background overflow-hidden"
    >
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        {/* ======================= */}
        {/* 1. SECTION HEADER       */}
        {/* ======================= */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-10 sm:mb-12 lg:mb-16"
        >
          {/* PASTE YOUR HEADER CODE HERE (e.g., "What we do", "Why us") */}
          <p className="text-primary-dark font-semibold tracking-wide uppercase text-xs sm:text-sm">
            Authorized Partners
          </p>
          <h2 className="mt-2 sm:mt-3 text-text text-1xl sm:text-2xl lg:text-3xl font-bold tracking-tight whitespace-nowrap">
            Premium Equipment from Global Brands
          </h2>
          {/* <p className="mt-3 sm:mt-4 text-text-light text-sm sm:text-base leading-relaxed">
            We partner directly with Tier-1 manufacturers to bring you reliable,
            high-performance solar technology.
          </p> */}
        </motion.div>
        {/* ======================= */}
        {/* 2. SECTION CONTENT      */}
        {/* ======================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full"
        >
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0,black_32px,black_calc(100%-32px),transparent_100%)] sm:[mask-image:linear-gradient(to_right,transparent_0,black_64px,black_calc(100%-64px),transparent_100%)] lg:[mask-image:linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
            <motion.div
              className="flex shrink-0 gap-3 sm:gap-4 lg:gap-6 w-max py-4"
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
        </motion.div>
      </div>
    </section>
  );
}
