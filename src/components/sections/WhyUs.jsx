import {
  FaCircleCheck,
  FaShieldHalved,
  FaUsers,
  FaFileCircleCheck,
  FaAward,
  FaHeadset,
} from "react-icons/fa6";

import whyImg from "../../assets/images/why-us.jpg";

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
    <section id="why-us" className="py-4 bg-surface">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-primary-dark font-semibold tracking-wide">
              Why us
            </p>
            <h2 className="mt-3 text-text text-3xl sm:text-4xl font-bold leading-tight">
              Built for a solar system that lasts
            </h2>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

          {/* Image */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none order-first lg:order-last">
            <div className="relative aspect-square">
              <div className="absolute inset-4 rounded-full bg-secondary/15" />
              <img
                src={whyImg}
                alt="Solar installer giving a thumbs up on site"
                className="absolute inset-0 w-full h-full object-cover rounded-full shadow-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
