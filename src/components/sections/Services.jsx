import { motion } from "framer-motion";

import { FaCheck } from "react-icons/fa6";
import { servicesData } from "../../data/services";

function ServiceCard({
  icon: Icon,
  title,
  description,
  servicesList,
  highlighted,
}) {
  return (
    <div
      className={`flex flex-col justify-between rounded-card p-8 shadow-card transition-transform hover:-translate-y-1 ${
        highlighted ? "bg-text text-surface" : "bg-surface text-text"
      }`}
    >
      <div>
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            highlighted ? "bg-surface/10" : "bg-primary/10"
          }`}
        >
          <Icon
            className={`w-6 h-6 ${
              highlighted ? "text-primary-light" : "text-primary-dark"
            }`}
          />
        </div>
        <h3 className="mt-6 text-xl font-bold font-heading">{title}</h3>
        <p
          className={`mt-3 text-sm leading-relaxed ${
            highlighted ? "text-surface/80" : "text-text-light"
          }`}
        >
          {description}
        </p>

        <br />

        {/* Services List */}
        {servicesList && servicesList.length > 0 && (
          <ul className="mt-6 space-y-2.5">
            {servicesList.map((item) => (
              <li key={item} className="flex items-center text-sm font-medium">
                <FaCheck
                  className={`w-4 h-4 mr-2.5 shrink-0 ${
                    highlighted ? "text-primary-light" : "text-primary"
                  }`}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <a
        href="#contact"
        className={`mt-8 inline-block self-start text-sm font-semibold border-b-2 pb-0.5 transition-colors ${
          highlighted
            ? "border-primary-light text-primary-light hover:text-primary"
            : "border-primary text-primary-dark hover:border-primary-dark"
        }`}
      >
        Get a quote
      </a>
    </div>
  );
}

// Main Services Component
export default function Services() {
  return (
    <section
      id="services"
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
            Our Expertise
          </p>
          <h2 className="mt-2 sm:mt-3 text-text text-1xl sm:text-2xl lg:text-3xl font-bold tracking-tight whitespace-nowrap">
            Solar Solutions for Every Building
          </h2>
          {/* <p className="mt-3 sm:mt-4 text-text-light text-sm sm:text-base leading-relaxed">
            We design, install, and maintain custom energy systems for
            residential, commercial, and industrial properties.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
