import { FaPhone, FaEnvelope } from "react-icons/fa6";
import { companyData } from "../../data/company";

export default function Header() {
  return (
    <header className="bg-text text-white">
      <div className="container-custom flex flex-col-reverse lg:flex-row items-center justify-between py-1 lg:py-2  text-sm">
        <div className="flex flex-col sm:flex-row items-center justify-center pt-2 lg:pt-0 lg:justify-start lg:gap-10">
          {companyData.contact.phones01 && (
            <a
              href={`tel:${companyData.contact.phones01.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 hover:text-primary-light transition-colors"
            >
              <FaPhone className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              <span>{companyData.contact.phones01}</span>
            </a>
          )}

          {companyData.contact.email && (
            <a
              href={`mailto:${companyData.contact.email}`}
              className="inline-flex items-center gap-2 hover:text-primary-light transition-colors"
            >
              <FaEnvelope className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              <span>{companyData.contact.email}</span>
            </a>
          )}
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-2 lg:gap-4">
          {companyData.socials
            .filter(({ visible }) => visible)
            .map(({ id, icon: Icon, label, href, target, rel }) => (
              <a
                key={id}
                href={href}
                target={target}
                rel={rel}
                aria-label={label}
                className="text-gray-300 hover:text-primary-light transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
        </div>
      </div>
    </header>
  );
}
