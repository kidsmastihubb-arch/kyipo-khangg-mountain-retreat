import { BadgeIndianRupee, MessageCircle, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { createWhatsAppEnquiry } from "@/lib/booking";

function Stars() {
  return (
    <div className="flex justify-center gap-1" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className="size-6 fill-gold text-gold" />
      ))}
    </div>
  );
}

export function RatingSection() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <Reveal>
          <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-border bg-card p-10 text-center shadow-[0_30px_60px_-35px_rgba(20,40,30,0.4)]">
            <Stars />
            <p className="mt-6 font-display text-7xl font-semibold text-forest-deep">
              4.8<span className="text-3xl text-muted-foreground"> / 5</span>
            </p>
            <h2 className="mt-3 text-lg font-semibold text-foreground">
              Reported Guest Rating
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              119 reviews — as supplied in the property information.
            </p>
            <p className="mt-5 max-w-sm text-xs leading-relaxed text-muted-foreground">
              Ratings can change over time. Please check the latest reviews on the
              relevant listing platform before booking.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex h-full flex-col justify-center rounded-3xl border border-gold/35 bg-forest p-10 text-cream shadow-[0_30px_60px_-35px_rgba(20,40,30,0.55)]">
            <BadgeIndianRupee className="size-7 text-gold" aria-hidden="true" />
            <p className="mt-5 font-display text-5xl font-semibold sm:text-6xl">
              from ₹1,669*
            </p>
            <p className="mt-3 text-sm leading-relaxed text-cream/85">
              *Indicative listing price as supplied. Actual prices vary by date,
              room category, guest count, platform, and availability.
            </p>
            <div className="my-6 h-px bg-cream/20" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-cream/85">
              Contact the property directly for the final rate and current room
              availability.
            </p>
            <a
              href={createWhatsAppEnquiry({ message: "Please share your current rates and availability." })}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-forest-deep transition-all hover:-translate-y-0.5 hover:bg-gold-soft"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Ask for Today's Rates
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
