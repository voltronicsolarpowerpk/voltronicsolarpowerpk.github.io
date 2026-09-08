import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteRight } from "react-icons/fa6";

import clientAvatar1 from "../../assets/images/profile/client-avatar-1.jpg";
import clientAvatar2 from "../../assets/images/profile/client-avatar-2.jpg";
import clientAvatar3 from "../../assets/images/profile/client-avatar-3.jpg";
import clientAvatar4 from "../../assets/images/profile/client-avatar-4.jpg";
import clientAvatar5 from "../../assets/images/profile/client-avatar-5.jpg";
import clientAvatar6 from "../../assets/images/profile/client-avatar-6.jpg";

const testimonials = [
  {
    id: 1,
    quote:
      "Switching to solar was the best decision for our factory in Faisalabad. System monitoring is seamless, and net metering approval was completely hassle-free.",
    name: "Mian Tariq Hassan",
    role: "Business Owner, Faisalabad",
    rating: 5,
    avatar: clientAvatar1,
  },
  {
    id: 2,
    quote:
      "Outstanding service and top-notch tier-1 panels. We no longer face load-shedding issues at our residence, and the backup performance during power outages is flawless.",
    name: "Dr. Ayesha Malik",
    role: "Resident, Islamabad",
    rating: 5,
    avatar: clientAvatar2,
  },
  {
    id: 3,
    quote:
      "Extremely professional engineers who performed a detailed load site audit before recommending our 10kW hybrid inverter system. Highly recommended across Punjab!",
    name: "Kamran Siddiqui",
    role: "Commercial Client, Karachi",
    rating: 5,
    avatar: clientAvatar3,
  },
  {
    id: 4,
    quote:
      "The entire solar installation process was smooth and well-managed. From the initial consultation to commissioning, the team was professional and kept us informed at every step.",
    name: "Usman Farooq",
    role: "Homeowner, Lahore",
    rating: 5,
    avatar: clientAvatar4,
  },
  {
    id: 5,
    quote:
      "Our electricity bills have dropped significantly since installing the solar system. The team provided excellent guidance on system sizing and delivered exactly what was promised.",
    name: "Sana Ahmed",
    role: "Business Owner, Multan",
    rating: 5,
    avatar: clientAvatar5,
  },
  {
    id: 6,
    quote:
      "Very impressed with the quality of equipment and after-sales support. The installation team was punctual, knowledgeable, and made sure everything was working perfectly before leaving.",
    name: "Misba Zafer",
    role: "Commercial Client, Rawalpindi",
    rating: 5,
    avatar: clientAvatar6,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : true,
  );

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Number of testimonials visible at once
  const visibleCount = isLargeScreen ? 2 : 1;

  // Automatically move to next testimonials every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + visibleCount;

        // Loop back to the beginning
        if (nextIndex >= testimonials.length) {
          return 0;
        }

        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [visibleCount]);

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + visibleCount,
  );

  // If we're near the end, fill remaining cards from the beginning
  if (visibleTestimonials.length < visibleCount) {
    visibleTestimonials.push(
      ...testimonials.slice(0, visibleCount - visibleTestimonials.length),
    );
  }

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-28 bg-surface">
      <FaQuoteRight className="absolute -bottom-6 right-4 sm:right-10 w-32 h-32 sm:w-44 sm:h-44 text-primary/10 pointer-events-none" />

      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-primary-dark font-semibold tracking-wide">
            What clients say
          </p>
          <h2 className="mt-3 text-text text-3xl sm:text-4xl font-bold leading-tight">
            Trusted by Homeowners & Businesses Across Pakistan
          </h2>
        </div>

        <div className="mt-12 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentIndex}-${visibleCount}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {visibleTestimonials.map((item) => (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.2 },
                  }}
                  className="p-8 rounded-2xl bg-white/5 border border-text-light/10 flex flex-col justify-between shadow-sm relative z-10"
                >
                  <div>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-5 h-5 ${
                            i < item.rating
                              ? "fill-secondary text-secondary"
                              : "text-text-light/20 fill-current"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="mt-6 text-text text-lg sm:text-xl font-medium leading-relaxed font-heading">
                      &quot;{item.quote}&quot;
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover border border-primary/20"
                    />

                    <div>
                      <p className="font-semibold text-text">{item.name}</p>

                      <p className="text-sm text-text-light">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
