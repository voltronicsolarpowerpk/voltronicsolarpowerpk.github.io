import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Reusable EmailJS function
 *
 * Required:
 * - email
 *
 * Optional:
 * - name
 * - message
 * - phone
 * - subject
 * - type
 */
export async function sendEmail({
  email,
  name = "",
  message = "",
  phone = "",
  subject = "",
  type = "Contact Form",
}) {
  if (!email) {
    throw new Error("Email is required.");
  }

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error("EmailJS environment variables are missing.");
  }

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      email,
      name,
      message,
      phone,
      subject,
      type,
    },
    {
      publicKey: PUBLIC_KEY,
    },
  );
}
