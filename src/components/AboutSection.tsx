import { Award, Hammer, Sprout, UserRound } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import cottageExterior from "@/assets/cottage-exterior-sign.png";
import livingDining from "@/assets/living-dining.png";

const HIGHLIGHTS = [
  {
    icon: Sprout,
    title: "Established in 2016",
    text: "Welcoming mountain travellers to Khaknal for close to a decade.",
  },
  {
    icon: Hammer,
    title: "Renovated in 2022",
    text: "Refreshed spaces that blend comfort with the cottage's warm character.",
  },
  {
    icon: UserRound,
    title: "Managed by Anubhav",
    text: "Personal, family-run hospitality, according to the supplied information.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <SectionHeading
        eyebrow="About the Cottage"
        title="A Stay Inspired by the Mountains"
      />

      <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image collage */}
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-[0_35px_70px_-35px_rgba(20,40,30,0.5)]">
            <img
              src={cottageExterior}
              alt="Cottage exterior with black cladding and the Kyipo Khangg Cottage sign, with parking in front"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-52 overflow-hidden rounded-2xl border-4 border-cream shadow-xl sm:block lg:-right-8 lg:w-64">
            <img
              src={livingDining}
              alt="Living and dining room with pine wood ceiling and wooden staircase"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div
            className="absolute -top-4 -left-4 -z-10 size-40 rounded-3xl border border-gold/40 bg-gold/10"
            aria-hidden="true"
          />
        </Reveal>

        {/* Copy */}
        <Reveal delay={120}>
          <h3 className="font-display text-3xl leading-snug font-semibold text-forest-deep sm:text-4xl">
            A family-run retreat in the village of Khaknal
          </h3>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Kyipo Khangg Cottage is a family-run mountain retreat located in the
            peaceful village surroundings of Khaknal, Manali. Established in 2016
            and renovated in 2022, the property offers travellers an opportunity to
            experience a quieter side of the Manali region.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Surrounded by apple orchards, cedar trees, and the natural charm of the
            valley, the cottage provides a welcoming base for guests looking to slow
            down, enjoy local food, and explore the surrounding mountains.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="card-lift rounded-2xl border border-border bg-card p-5"
              >
                <item.icon className="size-6 text-gold" aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold text-foreground">{item.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-16 flex items-center justify-center gap-3 text-sm text-muted-foreground" delay={100}>
        <Award className="size-4 text-gold" aria-hidden="true" />
        A boutique cottage stay on the Kullu–Naggar–Manali Road
      </Reveal>
    </section>
  );
}
