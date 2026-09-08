import { FaWhatsapp } from "react-icons/fa6";
import { companyConfig } from "../../config/companyConfig";

export default function WhatsAppFloatingButton() {
  // Pull WhatsApp phone number from company config (fallback to primary contact phone)
  const rawPhone = companyConfig?.contact?.whatsapp;

  // Clean phone number (remove spaces, dashes, plus signs for clean URL format)
  const formattedPhone = rawPhone.replace(/\D/g, "");

  const handleWhatsAppClick = (e) => {
    e.preventDefault();

    if (!formattedPhone) return;

    // Detect mobile browser user-agent
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );

    const defaultMessage = encodeURIComponent(
      "Hello, Voltronic Solar Power. I would like to inquire about a solar system.",
    );

    // Dynamic URL based on device environment
    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${formattedPhone}&text=${defaultMessage}`
      : `https://web.whatsapp.com/send?phone=${formattedPhone}&text=${defaultMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <a
      href={`https://wa.me/${formattedPhone}`}
      onClick={handleWhatsAppClick}
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-16 right-2 lg:right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-surface shadow-card transition-all duration-300 hover:bg-primary-dark hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
}
