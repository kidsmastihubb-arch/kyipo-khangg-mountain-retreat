import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import {
  createWhatsAppEnquiry,
  HOTEL_ADDRESS,
  HOTEL_PHONE_DISPLAY,
  HOTEL_TEL,
  MAPS_DIRECTIONS_URL,
  MAPS_EMBED_URL,
} from "@/lib/booking";

export function LocationSection() {
  return (
    <section id="location" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Getting Here"
          title="Find Your Way to Kyipo Khangg Cottage"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-12">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-8">
              <span className="flex size-12 items-center justify-center rounded-full bg-gold/15">
                <MapPin className="size-5 text-forest" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
                Kyipo Khangg Cottage
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Kullu - Naggar - Manali Road, Khaknal,
                <br />
                Manali, Himachal Pradesh 175143, India
              </p>

              <a
                href={HOTEL_TEL}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-gold"
              >
                <Phone className="size-4" aria-hidden="true" />
                {HOTEL_PHONE_DISPLAY}
              </a>

              <div className="mt-auto flex flex-col gap-3 pt-8">
                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream transition-all hover:-translate-y-0.5 hover:bg-forest-deep"
                >
                  <Navigation className="size-4" aria-hidden="true" />
                  Get Directions
                </a>
                <a
                  href={HOTEL_TEL}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-gold"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  Call the Cottage
                </a>
                <a
                  href={createWhatsAppEnquiry({ message: "Hello, I would like to enquire about a stay and directions to the cottage." })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest-deep transition-all hover:-translate-y-0.5 hover:bg-gold-soft"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full overflow-hidden rounded-3xl border border-border shadow-[0_30px_60px_-35px_rgba(20,40,30,0.4)]">
              <iframe
                src={MAPS_EMBED_URL}
                title="Google Map showing the location of Kyipo Khangg Cottage, Khaknal, Manali"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-[420px] w-full border-0 lg:h-full lg:min-h-[520px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
