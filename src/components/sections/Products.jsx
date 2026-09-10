import { motion } from "framer-motion";
import { productsData } from "../../data/products";
import { FaCheck } from "react-icons/fa6";

// Container variant controls staggering of child cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Replace cardVariants with this spring config:
const cardVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export default function Products() {
  return (
    <section
      id="products"
      className="py-6 sm:py-8 lg:py-10 bg-surface overflow-hidden"
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
            What We Sell
          </p>
          <h2 className="mt-2 sm:mt-3 text-text text-1xl sm:text-2xl lg:text-3xl font-bold tracking-tight whitespace-nowrap">
            Tier-1 Equipment for Max Efficiency
          </h2>
          {/* <p className="mt-3 sm:mt-4 text-text-light text-sm sm:text-base leading-relaxed">
            Explore our curated selection of top-rated solar panels, advanced
            inverters, and durable battery storage.
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
          <div className="space-y-16">
            {productsData.map((group) => {
              const GroupIcon = group.icon;
              return (
                <div key={group.category}>
                  {/* Category Header */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center space-x-3 mb-8"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <GroupIcon className="w-5 h-5 text-primary-dark" />
                    </div>
                    <h3 className="text-2xl font-bold text-text font-heading">
                      {group.category}
                    </h3>
                  </motion.div>

                  {/* Staggered Grid Container */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                  >
                    {group.items.map((item) => (
                      <motion.div
                        key={item.title}
                        variants={cardVariants}
                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                        className="flex flex-col justify-between overflow-hidden rounded-card bg-surface text-text shadow-card"
                      >
                        <div>
                          {/* Image Container with Zoom Effect */}
                          <div className="w-full h-44 bg-surface-light overflow-hidden flex items-center justify-center p-3">
                            <motion.img
                              src={item.image}
                              alt={item.title}
                              whileHover={{ scale: 1.08 }}
                              transition={{ duration: 0.3 }}
                              className="w-full h-full object-contain"
                            />
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            <h4 className="text-xl font-bold font-heading text-text">
                              {item.title}
                            </h4>

                            <br />

                            <ul className="mt-2 space-y-0.5">
                              {item.features.map((feature) => (
                                <li
                                  key={feature}
                                  className="flex items-center text-sm font-medium text-text-light"
                                >
                                  <FaCheck className="w-4 h-4 mr-2.5 shrink-0 text-primary" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Action Link */}
                        <div className="px-6 pb-4">
                          <motion.a
                            href="#contact"
                            whileHover={{ x: 3 }}
                            className="inline-block text-sm font-semibold border-b-2 pb-0.5 border-primary text-primary-dark"
                          >
                            Inquire now
                          </motion.a>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
