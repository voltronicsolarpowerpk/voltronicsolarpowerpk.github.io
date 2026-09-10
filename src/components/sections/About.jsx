import { motion } from "framer-motion";

import { FaSun, FaWrench } from "react-icons/fa6";

import aboutMain from "../../assets/images/about-main.jpg";
import aboutSmall from "../../assets/images/about-small.jpg";

const stats = [
  {
    icon: FaSun,
    value: "35+",
    label: "Years of experience",
    description: "Designing and installing solar systems across Pakistan.",
  },
  {
    icon: FaWrench,
    value: "99+",
    label: "Projects completed",
    description: "From single homes to full industrial rooftops.",
  },
];
export default function About() {
  return (
    <section
      id="about"
      className="py-6 sm:py-8 lg:py-10 bg-surface overflow-hidden"
    >
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout: Right Content (Text), Left Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ======================= */}
          {/* 1. SECTION IMAGES (LEFT) */}
          {/* ======================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Image composition stack */}
              <div className="relative aspect-4/5 sm:aspect-5/4 lg:aspect-4/5 w-full">
                <img
                  src={aboutMain}
                  alt="Solar technician installing rooftop panels"
                  className="absolute inset-0 w-4/5 h-4/5 object-cover rounded-2xl shadow-xl"
                />
                <img
                  src={aboutSmall}
                  alt="Close-up of a solar panel array"
                  className="absolute bottom-0 right-0 w-3/5 h-3/5 object-cover rounded-2xl shadow-2xl border-4 border-surface"
                />

                {/* Decorative accent blocks */}
                <div className="absolute top-0 right-4 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-secondary/90 shadow-md" />
                <div className="absolute -bottom-3 left-6 w-10 h-10 rounded-xl bg-primary/20" />
              </div>
            </div>
          </motion.div>

          {/* ======================= */}
          {/* 2. SECTION CONTENT (RIGHT) */}
          {/* ======================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <p className="text-primary-dark font-semibold tracking-wide uppercase text-xs sm:text-sm">
              About
            </p>

            <h2 className="mt-2 sm:mt-3 text-text text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              We help businesses switch to solar energy
            </h2>

            <p className="mt-3 sm:mt-4 text-text-light text-sm sm:text-base leading-relaxed">
              Voltronic designs, supplies, and installs solar power systems for
              homes, offices, and factories. Our team handles everything from
              the first site visit to the final connection, so switching to
              solar stays simple.
            </p>

            {/* Stats/Highlights Grid mapped from the stats array */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-text-light/10">
              {stats.map(({ icon: Icon, value, label, description }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary-dark">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text">{value}</h3>
                    <p className="text-xs sm:text-sm font-semibold text-text mt-0.5">
                      {label}
                    </p>
                    <p className="text-xs sm:text-sm text-text-light mt-1 leading-snug">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
