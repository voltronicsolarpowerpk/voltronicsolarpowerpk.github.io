import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
// import logo from "../../assets/logo.png";
import { companyConfig } from "../../config/companyConfig";
import { navLinks, navCta } from "../../config/navConfig";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-surface shadow-sm">
      <div className="container-custom flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 shrink-0 cursor-pointer"
        >
          <span className="w-20 h-20 flex items-center justify-center">
            <img
              src={companyConfig.logo}
              alt={companyConfig.alt}
              className="w-full h-full object-contain"
            />
          </span>

          <div className="flex flex-col md:mt-2 lg:mt-3">
            <span className="font-heading font-bold text-lg leading-tight">
              {companyConfig.name}
            </span>
            <span className="hidden sm:block text-xs text-slate-500 dark:text-slate-400">
              {companyConfig.tagline}
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center justify-end gap-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-text transition-all duration-200 hover:text-primary-dark hover:-translate-y-0.5 hover:border-b-2 hover:border-primary-dark pb-1"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={navCta.href}
          className="hidden lg:inline-flex rounded-lg bg-primary hover:bg-primary-dark text-surface font-semibold text-sm px-6 py-2.5 transition-colors"
        >
          {navCta.label}
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-text hover:bg-background transition-colors"
        >
          {isOpen ? (
            <FaXmark className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-text/10 bg-surface">
          <div className="container-custom py-4 flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className="py-2.5 text-sm font-medium text-text hover:text-primary-dark transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href={navCta.href}
              onClick={() => setIsOpen(false)}
              className="mt-3 inline-flex justify-center rounded-lg bg-primary hover:bg-primary-dark text-surface font-semibold text-sm px-6 py-3 transition-colors"
            >
              {navCta.label}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
