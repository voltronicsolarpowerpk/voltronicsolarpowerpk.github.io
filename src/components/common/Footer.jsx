import { useState } from "react";
import { FaArrowRight, FaPhone, FaLocationDot } from "react-icons/fa6";
import { companyData } from "../../data/company";
import { useNotification } from "../../context/useNotification";
import { sendEmail } from "../../services/emailService";

export default function Footer({ onOpenAdmin }) {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);

  const { showNotification } = useNotification();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || isSending) return;

    setIsSending(true);

    try {
      await sendEmail({
        email: email,
        type: "Newsletter Subscription",
        subject: "New Newsletter Subscriber",
        message:
          "Please add me " +
          email +
          " to your subscription list so I can receive regular updates, solar news, special offers, and the latest information from VOLTRONIC SOLAR POWER.",
      });

      showNotification("Thank you for subscribing!", true);

      setEmail("");
    } catch (error) {
      console.error("Newsletter EmailJS Error:", error);

      showNotification(
        "Sorry, we couldn't subscribe you. Please try again.",
        false,
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <footer className="bg-text text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-8 md:py-10">
          {/* Newsletter */}
          <div className="flex flex-col items-center md:items-start justify-center gap-3 w-full md:w-auto md:flex-1 md:max-w-sm mx-auto md:mx-0">
            <span className="text-lg font-bold text-center md:text-left">
              Keep in contact
            </span>

            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-sm flex-col sm:flex-row gap-3 items-center sm:items-stretch"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                disabled={isSending}
                className="w-full flex-1 rounded bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary focus:outline-none text-center sm:text-left disabled:opacity-60 disabled:cursor-not-allowed"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                disabled={isSending}
                className="w-full sm:w-12 shrink-0 inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary-dark px-4 py-3 sm:px-0 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <FaArrowRight className="w-5 h-5 text-slate-900" />

                <span className="ml-2 sm:hidden font-semibold text-slate-900">
                  {isSending ? "Sending..." : "Subscribe"}
                </span>
              </button>
            </form>
          </div>

          {/* Logo + contact */}
          <div className="flex flex-col items-center md:items-end justify-center gap-3 w-full md:w-auto text-center md:text-right">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.history.pushState(null, "", window.location.origin);
              }}
              className="flex items-center gap-3"
            >
              <span className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center shrink-0">
                <img
                  src={companyData.logo}
                  alt={companyData.alt}
                  className="w-full h-full object-contain"
                />
              </span>

              <span className="text-lg font-bold">{companyData.name}</span>
            </a>

            <div className="flex flex-col items-center md:items-end gap-1 w-full max-w-xs md:max-w-none">
              <span className="flex items-center gap-2 text-sm flex-wrap justify-center md:justify-end">
                <FaPhone className="w-3 h-3 shrink-0" />

                <span className="wrap-break-word">
                  {companyData.contact.phones01}
                </span>

                <span className="hidden sm:inline">|</span>

                <span className="wrap-break-word">
                  {companyData.contact.phones02}
                </span>
              </span>

              <span className="flex items-start gap-2 text-sm text-center md:text-right">
                <FaLocationDot className="w-3 h-3 shrink-0 mt-0.5" />

                <span>
                  {companyData.contact.address.street},{" "}
                  {companyData.contact.address.city}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 px-4 text-center text-xs text-gray-400">
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

      <div className="border-t border-white/10 py-4 px-4 text-center text-xs text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} {companyData.name}. All rights
          reserved.
        </p>
        <button
          onClick={onOpenAdmin}
          className="text-slate-500 hover:text-slate-300 text-xs transition-colors"
        >
          Admin Portal
        </button>
      </div>
    </footer>
  );
}
