export const HOTEL_PHONE = "918544794883";
export const HOTEL_PHONE_DISPLAY = "+91 85447 94883";
export const HOTEL_TEL = "tel:+918544794883";

export const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.960470034023!2d77.19081981125737!3d32.17834067381081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390462759ae1541f%3A0xec49d99b7b6956a8!2sKyipo%20Khangg%20Cottage!5e0!3m2!1sen!2sin!4v1793419643078!5m2!1sen!2sin";

export const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Kyipo%20Khangg%20Cottage%2C%20Khaknal%2C%20Manali%2C%20Himachal%20Pradesh%20175143";

export const HOTEL_ADDRESS =
  "Kullu - Naggar - Manali Road, Khaknal, Manali, Himachal Pradesh 175143, India";

export interface EnquiryDetails {
  name?: string;
  phone?: string;
  checkIn?: string;
  checkOut?: string;
  adults?: number;
  children?: number;
  rooms?: number;
  roomType?: string;
  message?: string;
}

function dateLabel(iso?: string): string {
  if (!iso) return "Not selected";
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return "Not selected";
  return `${String(d).padStart(2, "0")}/${String(m).padStart(2, "0")}/${y}`;
}

export function todayISO(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function createWhatsAppEnquiry(details: EnquiryDetails = {}): string {
  const lines = [
    "Hello Kyipo Khangg Cottage,",
    "I would like to enquire about a stay.",
    `Name: ${details.name || "Not provided"}`,
    details.phone ? `Phone: ${details.phone}` : null,
    `Check-in: ${dateLabel(details.checkIn)}`,
    `Check-out: ${dateLabel(details.checkOut)}`,
    `Adults: ${details.adults ?? 2}`,
    `Children: ${details.children ?? 0}`,
    `Rooms: ${details.rooms ?? 1}`,
    `Accommodation: ${details.roomType || "Please share available options"}`,
    `Message: ${details.message || "Please share current rates and availability."}`,
  ].filter((line): line is string => line !== null);

  return `https://wa.me/${HOTEL_PHONE}?text=${encodeURIComponent(lines.join("\n"))}`;
}
