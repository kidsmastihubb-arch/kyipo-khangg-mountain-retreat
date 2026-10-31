import { Check, MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { createWhatsAppEnquiry } from "@/lib/booking";
import bedroomWalnut from "@/assets/bedroom-walnut.png";
import livingDining from "@/assets/living-dining.png";
import atticBedroom from "@/assets/attic-bedroom.png";

const ROOMS = [
  {
    name: "Standard / King Rooms",
    image: bedroomWalnut,
    alt: "Bright modern bedroom with white bedding, a walnut accent wall and abstract artwork",
    description:
      "Comfortable accommodation options designed for travellers seeking a relaxing stay in the Manali region.",
    features: [
      "Private ensuite bathroom",
      "Balcony",
      "Calm, restful interiors",
    ],
    note: "Ensuite bathrooms and balconies are reported for this room category — confirm the configuration for your chosen room when booking.",
  },
  {
    name: "Studio Apartments & Condos",
    image: livingDining,
    alt: "Open-plan living and dining space with pine wood ceiling and dining table",
    description:
      "Open-plan accommodation options reported to include kitchen spaces and shared living areas, suitable for longer stays and family groups.",
    features: [
      "Open-plan layout",
      "Kitchen space (reported)",
      "Shared living areas",
      "Suited to longer stays and families",
    ],
    note: "Appliance details and occupancy limits are not specified — please confirm directly with the cottage.",
  },
  {
    name: "The Penthouse",
    image: atticBedroom,
    alt: "Attic-style penthouse bedroom with sloped wooden ceiling and a mountain-view window",
    description:
      "A spacious top-floor accommodation option described in the supplied information as offering panoramic mountain views.",
    features: [
      "Top-floor accommodation",
      "Panoramic mountain views (as described)",
      "Characterful sloped-ceiling interiors",
    ],
    note: "Floor area, bedroom count and terrace access are not specified — please confirm details with the cottage.",
  },
];

export function RoomsSection() {
  const selectRoom = (name: string) => {
    window.dispatchEvent(new CustomEvent("kyipo:select-room", { detail: name }));
    document.getElementById("enquire")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="stay" className="scroll-mt-24 bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Stay With Us"
          title="Find Your Perfect Mountain Stay"
          description="Choose from the reported accommodation categories and contact the cottage to confirm room availability, configuration, and current rates."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {ROOMS.map((room, index) => (
            <Reveal key={room.name} delay={index * 120} className="h-full">
              <article className="card-lift flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card">
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.alt}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-cream/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-forest-deep backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {room.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {room.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {room.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 rounded-xl bg-secondary/70 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                    {room.note}
                  </p>

                  <div className="mt-auto flex items-center gap-3 pt-6">
                    <button
                      type="button"
                      onClick={() => selectRoom(room.name)}
                      className="flex-1 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream transition-all hover:bg-forest-deep"
                    >
                      Enquire About This Room
                    </button>
                    <a
                      href={createWhatsAppEnquiry({ roomType: room.name })}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Enquire about ${room.name} on WhatsApp`}
                      className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold hover:text-gold"
                    >
                      <MessageCircle className="size-5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center text-xs text-muted-foreground" delay={80}>
          Rates and availability are not displayed live. Please contact the property for current pricing.
        </Reveal>
      </div>
    </section>
  );
}
