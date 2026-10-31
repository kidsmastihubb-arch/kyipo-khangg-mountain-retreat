import { MapPin, MessageCircle, Phone } from "lucide-react";
import {
  createWhatsAppEnquiry,
  HOTEL_ADDRESS,
  HOTEL_PHONE_DISPLAY,
  HOTEL_TEL,
} from "@/lib/booking";

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Stay", href: "#stay" },
  { label: "Dining", href: "#dining" },
  { label: "Experiences", href: "#experiences" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "FAQs", href: "#faq" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-deep text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-display text-2xl font-semibold">Kyipo Khangg Cottage</p>
            <p className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-gold">
              A Mountain Retreat
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/75">
              A family-run mountain retreat in Khaknal, Manali — apple orchards,
              cedar trees, home-cooked meals and a quiet village setting on the
              Kullu–Naggar–Manali Road.
            </p>
            <a
              href="#enquire"
              className="mt-6 inline-flex items-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest-deep transition-all hover:-translate-y-0.5 hover:bg-gold-soft"
            >
              Booking Enquiry
            </a>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Explore
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Contact
            </h3>
            <address className="mt-4 flex items-start gap-2.5 text-sm leading-relaxed text-cream/75 not-italic">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              {HOTEL_ADDRESS}
            </address>
            <a
              href={HOTEL_TEL}
              className="mt-4 inline-flex items-center gap-2.5 text-sm text-cream/75 transition-colors hover:text-cream"
            >
              <Phone className="size-4 shrink-0 text-gold" aria-hidden="true" />
              {HOTEL_PHONE_DISPLAY}
            </a>
            <a
              href={createWhatsAppEnquiry()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2.5 text-sm text-cream/75 transition-colors hover:text-cream"
            >
              <MessageCircle className="size-4 shrink-0 text-gold" aria-hidden="true" />
              WhatsApp Enquiry
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/15 pt-6 text-xs text-cream/55 sm:flex-row">
          <p>© {year} Kyipo Khangg Cottage — A Mountain Retreat. All rights reserved.</p>
          <p>Khaknal · Manali · Himachal Pradesh</p>
        </div>
      </div>
    </footer>
  );
}
