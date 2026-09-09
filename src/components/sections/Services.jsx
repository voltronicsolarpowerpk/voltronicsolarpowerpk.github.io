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
    <section id="services" className="py-4 bg-background">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-primary-dark font-semibold tracking-wide">
            What we do
          </p>
          <h2 className="mt-3 text-text text-3xl sm:text-4xl font-bold leading-tight">
            Solar systems for every kind of building
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
