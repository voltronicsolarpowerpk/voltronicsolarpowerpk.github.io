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
    <section id="about" className="py-4 bg-surface">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image collage */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-4/5 sm:aspect-5/4 lg:aspect-4/5">
              <img
                src={aboutMain}
                alt="Solar technician installing rooftop panels"
                className="absolute inset-0 w-4/5 h-4/5 object-cover rounded-card shadow-card"
              />
              <img
                src={aboutSmall}
                alt="Close-up of a solar panel array"
                className="absolute bottom-0 right-0 w-1/2 h-1/2 object-cover rounded-card shadow-card border-4 border-surface"
              />
              {/* Accent block */}
              <div className="absolute top-0 right-4 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-secondary/90" />
              <div className="absolute -bottom-3 left-6 w-10 h-10 rounded-xl bg-primary/20" />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary-dark font-semibold tracking-wide">
              About
            </p>
            <h2 className="mt-3 text-text text-3xl sm:text-4xl lg:text-heading-lg font-bold leading-tight max-w-md">
              We help businesses switch to solar energy
            </h2>
            <p className="mt-5 text-text-light text-base sm:text-lg leading-relaxed max-w-md">
              Voltronic designs, supplies, and installs solar power systems for
              homes, offices, and factories. Our team handles everything from
              the first site visit to the final connection, so switching to
              solar stays simple.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md">
              {stats.map(({ icon: Icon, value, label, description }) => (
                <div key={label} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-dark" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-text font-heading">
                      {value}
                    </p>
                    <p className="text-sm font-semibold text-text mt-0.5">
                      {label}
                    </p>
                    <p className="text-sm text-text-light mt-1 leading-snug">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
