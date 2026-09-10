import { motion } from "framer-motion";

import { useState } from "react";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

import { companyData } from "../../data/company";
import { useNotification } from "../../context/useNotification";
import { sendEmail } from "../../services/emailService";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const { showNotification } = useNotification();

  // Format dynamic contact details from company
  const contactDetails = [
    companyData.contact.phones01 && {
      icon: FaPhone,
      label: "Call us",
      value: companyData.contact.phones01,
      href: `tel:${companyData.contact.phones01.replace(/\s+/g, "")}`,
    },

    companyData.contact.email && {
      icon: FaEnvelope,
      label: "Email us",
      value: companyData.contact.email,
      href: `mailto:${companyData.contact.email}`,
    },

    companyData.contact.address && {
      icon: FaLocationDot,
      label: "Visit us",
      value: `${companyData.contact.address.street}, ${companyData.contact.address.city}`,
      href: null,
    },
  ].filter(Boolean);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);

    try {
      await sendEmail({
        name: form.name,
        email: form.email,
        message: form.message,
        type: "Contact Form",
        subject: "New Solar Quote Request",
      });

      showNotification(
        `Thanks, ${form.name.split(" ")[0] || "there"}! We will be in touch shortly.`,
        true,
      );

      // Reset form
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      showNotification(
        "Sorry, we couldn't send your message. Please try again.",
        false,
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="py-6 sm:py-8 lg:py-10 bg-surface overflow-hidden"
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
            Get In Touch
          </p>
          <h2 className="mt-2 sm:mt-3 text-text text-1xl sm:text-2xl lg:text-3xl font-bold tracking-tight whitespace-nowrap">
            Request Your Free Solar Estimate
          </h2>
          {/* <p className="mt-3 sm:mt-4 text-text-light text-sm sm:text-base leading-relaxed">
            Tell us about your property location and energy needs, and we will
            respond within 24 hours.
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
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={value} className="flex gap-4">
                  {/* Icon */}
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-dark" />
                  </div>

                  {/* Details */}
                  <div>
                    <p className="text-sm text-text-light">{label}</p>

                    {href ? (
                      <a
                        href={href}
                        className="font-semibold text-text mt-0.5 block hover:text-primary transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-semibold text-text mt-0.5">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-text mb-2"
                    >
                      Full name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      disabled={isSending}
                      className="w-full rounded-lg border border-text-light/20 px-4 py-3 text-text placeholder:text-text-light/60 focus:border-primary focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-text mb-2"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      disabled={isSending}
                      className="w-full rounded-lg border border-text-light/20 px-4 py-3 text-text placeholder:text-text-light/60 focus:border-primary focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-text mb-2"
                  >
                    Tell us about your site
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Building type, rough roof size, monthly bill..."
                    disabled={isSending}
                    className="w-full rounded-lg border border-text-light/20 px-4 py-3 text-text placeholder:text-text-light/60 focus:border-primary focus:outline-none resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full sm:w-auto rounded-lg bg-primary hover:bg-primary-dark text-surface font-semibold px-8 py-3.5 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSending ? "Sending..." : "Send message"}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
