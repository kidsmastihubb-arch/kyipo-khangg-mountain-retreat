import { Castle, Droplets, Landmark, MountainSnow } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const ATTRACTIONS = [
  {
    icon: Droplets,
    name: "Sajla Waterfall",
    text: "Discover Sajla Waterfall, reported to be approximately a 7-minute walk or short trek from the cottage gates. Confirm the current walking route and local conditions before setting out.",
  },
  {
    icon: MountainSnow,
    name: "Sethan Village",
    text: "Explore the route toward Sethan, known for its offbeat village setting and seasonal winter experiences.",
  },
  {
    icon: Castle,
    name: "Naggar Castle",
    text: "Plan a visit to Naggar Castle and discover another side of the wider Manali region.",
  },
  {
    icon: Landmark,
    name: "Hidimba Devi Temple",
    text: "Include Hidimba Devi Temple in your Manali sightseeing plans.",
  },
];

export function NearbySection() {
  return (
    <section id="nearby" className="scroll-mt-24 bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nearby Experiences"
          title="Explore More Around Khaknal and Manali"
          description="Waterfalls, villages and heritage sites make easy outings from the cottage — ask your hosts for current local guidance."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {ATTRACTIONS.map((attraction, index) => (
            <Reveal key={attraction.name} delay={index * 100} className="h-full">
              <article className="card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-7">
                <span
                  className="absolute top-0 right-0 size-24 translate-x-8 -translate-y-8 rounded-full bg-gold/15 transition-transform duration-500 group-hover:scale-125"
                  aria-hidden="true"
                />
                <span className="flex size-14 items-center justify-center rounded-2xl bg-forest text-cream">
                  <attraction.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
                  {attraction.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {attraction.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center text-xs text-muted-foreground" delay={60}>
          Travel times beyond Sajla Waterfall are not stated in the supplied information.
        </Reveal>
      </div>
    </section>
  );
}
