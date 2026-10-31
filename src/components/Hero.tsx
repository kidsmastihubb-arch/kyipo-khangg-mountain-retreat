import { ArrowDown, MapPin, MessageCircle, Star } from "lucide-react";
import { createWhatsAppEnquiry } from "@/lib/booking";
import mountainValley from "@/assets/mountain-valley-landscape.png";

const HIGHLIGHTS = [
  { label: "4.8/5 reported guest rating" },
  { label: "Boutique mountain stay" },
  { label: "On-site dining" },
  { label: "Sajla Waterfall nearby" },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      {/* Backdrop */}
      <img
        src={mountainValley}
        alt="Wide mountain valley near Kyipo Khangg Cottage in Manali, with snow peaks above a village"
        className="absolute inset-0 -z-10 size-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-deep/75 via-forest-deep/45 to-forest-deep/85"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-forest-deep to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pt-32 pb-16 sm:px-6 lg:px-8">
        <p className="eyebrow text-gold-soft">Your Private Corner of the Himalayas</p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] font-semibold text-cream sm:text-6xl lg:text-7xl">
          Escape to the Quiet Beauty of the Mountains
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
          Discover Kyipo Khangg Cottage, a peaceful mountain retreat in Khaknal, Manali.
          Surrounded by the charm of village life, apple orchards, and cedar trees,
          experience a slower and more memorable side of the Himalayas.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-forest-deep transition-all hover:-translate-y-0.5 hover:bg-gold-soft"
          >
            Explore the Cottage
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#enquire"
            className="inline-flex items-center gap-2 rounded-full border border-cream/50 bg-cream/10 px-7 py-3.5 text-sm font-semibold text-cream backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-cream hover:bg-cream/20"
          >
            Enquire About Your Stay
          </a>
          <a
            href={createWhatsAppEnquiry()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enquire on WhatsApp"
            className="inline-flex size-12 items-center justify-center rounded-full border border-cream/40 text-cream transition-all hover:-translate-y-0.5 hover:border-cream hover:bg-cream/15"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
          </a>
        </div>
        <p className="mt-8 inline-flex items-center gap-2 text-sm tracking-[0.2em] text-cream/70 uppercase">
          <MapPin className="size-4 text-gold-soft" aria-hidden="true" />
          Khaknal · Manali · Himachal Pradesh
        </p>
      </div>

      {/* Bottom highlight bar */}
      <div className="relative border-t border-cream/15 bg-forest-deep/55 backdrop-blur-md">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-3 px-4 py-5 sm:px-6 md:grid-cols-4 lg:px-8">
          {HIGHLIGHTS.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2.5 text-sm text-cream/90"
            >
              <Star className="size-4 shrink-0 text-gold" aria-hidden="true" />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
