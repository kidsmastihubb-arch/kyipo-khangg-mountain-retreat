import {
  Baby,
  BellRing,
  CarFront,
  ChefHat,
  Flame,
  Gamepad2,
  HeartHandshake,
  Shirt,
  MessageCircle,
  PawPrint,
  Sofa,
  Sun,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { createWhatsAppEnquiry } from "@/lib/booking";
import loungeImg from "@/assets/common-lounge.png";

const AMENITIES = [
  { icon: Wifi, label: "Free High-Speed Wi-Fi" },
  { icon: CarFront, label: "Complimentary On-Site Parking" },
  { icon: UtensilsCrossed, label: "On-Site Restaurant" },
  { icon: ChefHat, label: "Home-Cooked Meals" },
  { icon: BellRing, label: "Room Service" },
  { icon: Sofa, label: "Common Lounge" },
  { icon: Sun, label: "Second-Floor Sun Deck" },
  { icon: Gamepad2, label: "Game Room" },
  { icon: Flame, label: "Garden Fireplace / Bonfire Setup" },
  { icon: Shirt, label: "Laundry Service" },
  { icon: PawPrint, label: "Pet-Friendly Environment" },
  { icon: Baby, label: "Child-Friendly Environment" },
  { icon: HeartHandshake, label: "LGBTQ+ Inclusive Environment" },
];

const SHARED_SPACES = [
  {
    icon: Sun,
    title: "The Sun Deck",
    text: "Spend some relaxed time outdoors on the property's reported second-floor sun deck — a spot for morning sunshine or slow evening views.",
  },
  {
    icon: Sofa,
    title: "The Common Lounge",
    text: "A shared space where guests can unwind during their stay — comfortable seating for reading, conversation or a quiet film night.",
  },
  {
    icon: Flame,
    title: "Garden Fireplace Setup",
    text: "An outdoor fireplace / bonfire setup is reported among the property's facilities. Confirm availability, timing, and any applicable charges with the hosts.",
  },
];

export function AmenitiesSection() {
  return (
    <>
      <section id="amenities" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Amenities & Facilities"
            title="Everything You Need for a Relaxing Stay"
          />

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {AMENITIES.map((amenity, index) => (
              <Reveal key={amenity.label} delay={(index % 4) * 70} className="h-full">
                <div className="card-lift flex h-full flex-col items-center rounded-2xl border border-border bg-card p-6 text-center">
                  <span className="flex size-12 items-center justify-center rounded-full bg-secondary">
                    <amenity.icon className="size-5 text-forest" aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-sm font-medium leading-snug text-foreground">
                    {amenity.label}
                  </p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={70} className="h-full">
              <div className="flex h-full flex-col justify-center rounded-2xl border border-gold/35 bg-gold/10 p-6 text-center">
                <p className="text-sm leading-relaxed text-foreground">
                  Room heaters are reported to be available at an additional charge.
                  Please confirm the current price and availability before arrival.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Shared spaces */}
      <section className="bg-forest py-20 text-cream sm:py-28" aria-labelledby="shared-spaces-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-gold-soft">Shared Spaces</p>
            <h2 id="shared-spaces-heading" className="mt-3 font-display text-4xl leading-tight font-semibold sm:text-5xl">
              Made for Slow Mornings &amp; Warm Evenings
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr_1fr]">
            {SHARED_SPACES.map((space, index) => (
              <Reveal
                key={space.title}
                delay={index * 120}
                className={index === 1 ? "lg:-mt-10" : ""}
              >
                <article className="card-lift flex h-full flex-col rounded-3xl border border-cream/15 bg-cream/8 p-7 backdrop-blur-sm">
                  {index === 1 ? (
                    <img
                      src={loungeImg}
                      alt="Lounge room with grey tufted sofas, wooden slat wall and TV"
                      className="mb-6 aspect-[16/10] w-full rounded-2xl object-cover"
                      loading="lazy"
                    />
                  ) : null}
                  <space.icon className="size-6 text-gold" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-2xl font-semibold">{space.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/80">{space.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center" delay={80}>
            <a
              href={createWhatsAppEnquiry({ message: "Please share availability and details about the sun deck, lounge and bonfire setup." })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-forest-deep transition-all hover:-translate-y-0.5 hover:bg-gold-soft"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Ask About the Shared Spaces
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
