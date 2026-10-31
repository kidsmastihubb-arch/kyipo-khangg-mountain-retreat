import { MessageCircle, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import {
  createWhatsAppEnquiry,
  HOTEL_PHONE_DISPLAY,
  HOTEL_TEL,
} from "@/lib/booking";
import mountainValley from "@/assets/mountain-valley-landscape.png";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      <img
        src={mountainValley}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 -z-10 bg-forest-deep/85" aria-hidden="true" />

      <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="eyebrow text-gold-soft">Your Mountain Escape Awaits</p>
        <h2 className="mt-4 font-display text-4xl leading-tight font-semibold text-cream sm:text-6xl">
          Find Your Little Mountain Escape
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/85">
          Make your next Manali getaway memorable with a peaceful stay at Kyipo
          Khangg Cottage. Contact the hosts to enquire about rooms, meals, and
          availability.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#enquire"
            className="inline-flex items-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-forest-deep transition-all hover:-translate-y-0.5 hover:bg-gold-soft"
          >
            Book Your Stay
          </a>
          <a
            href={createWhatsAppEnquiry()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/50 bg-cream/10 px-8 py-3.5 text-sm font-semibold text-cream backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-cream"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp the Cottage
          </a>
          <a
            href={HOTEL_TEL}
            className="inline-flex items-center gap-2 rounded-full border border-cream/50 px-8 py-3.5 text-sm font-semibold text-cream transition-all hover:-translate-y-0.5 hover:border-cream hover:bg-cream/10"
          >
            <Phone className="size-4" aria-hidden="true" />
            {HOTEL_PHONE_DISPLAY}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
