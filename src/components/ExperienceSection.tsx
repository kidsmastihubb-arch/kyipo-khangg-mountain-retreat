import { Apple, MountainSnow, Trees, VolumeX } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import bedroomValley from "@/assets/bedroom-valley-balcony.png";
import cottageDusk from "@/assets/cottage-dusk-garden.png";

const EXPERIENCES = [
  {
    icon: Apple,
    title: "Apple orchards",
    text: "Wake up among the orchards that give the Khaknal valley its seasonal charm.",
  },
  {
    icon: Trees,
    title: "Cedar trees",
    text: "Tall deodars frame the cottage and fill the air with a mountain stillness.",
  },
  {
    icon: MountainSnow,
    title: "Valley surroundings",
    text: "Mountain and valley views set the pace for slow mornings and golden evenings.",
  },
  {
    icon: VolumeX,
    title: "A quieter side of Manali",
    text: "Village atmosphere away from the busy Manali tourist areas.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experiences" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Mountain Experience"
          title="Wake Up to the Rhythm of the Mountains"
          align="left"
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <Reveal className="relative">
            <img
              src={bedroomValley}
              alt="Wood-panelled bedroom with orange bed runner and balcony doors opening to the valley"
              className="aspect-[16/9] w-full rounded-3xl object-cover shadow-[0_35px_70px_-35px_rgba(20,40,30,0.5)]"
              loading="lazy"
            />
            <div className="absolute -bottom-10 -left-4 hidden w-44 overflow-hidden rounded-2xl border-4 border-cream shadow-xl sm:block lg:-left-10 lg:w-56">
              <img
                src={cottageDusk}
                alt="Full cottage exterior at dusk with the lawn garden in front"
                className="aspect-[9/16] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Life at Kyipo Khangg Cottage moves with the valley — mist over the
              ridgelines, birdsong through the cedars, and evenings that end beside
              the garden. The cottage sits in the rural calm of Khaknal, where the
              village way of life continues unhurried.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {EXPERIENCES.map((item) => (
                <div
                  key={item.title}
                  className="card-lift rounded-2xl border border-border bg-card p-5"
                >
                  <item.icon className="size-5 text-gold" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-gold/30 bg-gold/10 p-5">
              <p className="font-display text-2xl font-semibold text-forest-deep">
                ≈ 10.4 km from Manali Mall Road
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Approximate reported distance. Actual journey times depend on road
                and traffic conditions.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
