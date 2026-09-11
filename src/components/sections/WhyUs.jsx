import { motion } from "framer-motion";
import {
  FaCircleCheck,
  FaShieldHalved,
  FaUsers,
  FaFileCircleCheck,
  FaAward,
  FaHeadset,
} from "react-icons/fa6";

import whyVideo from "../../assets/videos/why-us.mp4";

const reasons = [
  {
    icon: FaCircleCheck,
    title: "Quality material",
    description: "Panels and inverters sourced from certified manufacturers.",
  },
  {
    icon: FaShieldHalved,
    title: "Fully insured",
    description: "Every installation is covered from day one to handover.",
  },
  {
    icon: FaUsers,
    title: "Trained technicians",
    description: "Our crews are certified and re-trained every year.",
  },
  {
    icon: FaFileCircleCheck,
    title: "Accredited",
    description: "Licensed to design and install grid-tied systems.",
  },
  {
    icon: FaAward,
    title: "Workmanship guarantee",
    description: "Every install is backed by a written performance guarantee.",
  },
  {
    icon: FaHeadset,
    title: "Ongoing support",
    description:
      "A dedicated line for maintenance questions, long after install.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-6 sm:py-8 lg:py-10 bg-surface overflow-hidden"
    >
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        {/* ======================= */}
        {/* 1. SECTION HEADER      */}
        {/* ======================= */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-10 sm:mb-12 lg:mb-16"
        >
          <p className="text-primary-dark font-semibold tracking-wide uppercase text-xs sm:text-sm">
            Why Choose Us
          </p>
          <h2 className="mt-2 sm:mt-3 text-text text-1xl sm:text-2xl lg:text-3xl font-bold tracking-tight whitespace-nowrap">
            Built for Systems That Will Last
          </h2>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Reasons list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              {reasons.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-dark" />
                  </div>
                  <div>
                    <p className="font-semibold text-text">{title}</p>
                    <p className="text-sm text-text-light mt-1 leading-snug">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Video */}
            <div className="relative mx-auto w-full max-w-sm lg:max-w-md order-first lg:order-last">
              <div className="relative aspect-square">
                <div className="absolute inset-4 rounded-full bg-secondary/15" />
                <video
                  src={whyVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover rounded-full shadow-card"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
