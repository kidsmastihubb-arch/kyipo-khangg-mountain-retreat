import { BedDouble, MapPinned, TreePine, UtensilsCrossed } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const REASONS = [
  {
    icon: TreePine,
    title: "Peaceful Village Setting",
    text: "Khaknal offers orchards, cedars and valley calm — away from the rush of Manali's tourist core.",
  },
  {
    icon: BedDouble,
    title: "Multiple Accommodation Categories",
    text: "Standard and king rooms, studio apartments and condos, plus a top-floor penthouse option.",
  },
  {
    icon: UtensilsCrossed,
    title: "Fresh Home-Cooked Dining",
    text: "An on-site restaurant serving home-cooked meals, with room service reported.",
  },
  {
    icon: MapPinned,
    title: "A Base for Exploring",
    text: "Sajla Waterfall a short walk away, with Naggar Castle, Sethan and Manali sights within reach.",
  },
];

export function WhyChooseSection() {
  return (
    <section id="why" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose Kyipo Khangg Cottage"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {REASONS.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 100} className="h-full">
              <article className="card-lift flex h-full flex-col rounded-3xl border border-border bg-card p-7">
                <span className="flex size-12 items-center justify-center rounded-full bg-gold/15">
                  <reason.icon className="size-5 text-forest" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {reason.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
