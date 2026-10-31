import { BellRing, ChefHat, Clock, UtensilsCrossed } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import gardenCafe from "@/assets/garden-cafe.png";

const DINING_POINTS = [
  {
    icon: UtensilsCrossed,
    title: "On-site restaurant",
    text: "Freshly prepared food served in the peaceful surroundings of Khaknal.",
  },
  {
    icon: ChefHat,
    title: "Home-cooked meals",
    text: "Simple, wholesome cooking prepared for guests during their stay.",
  },
  {
    icon: Clock,
    title: "Breakfast",
    text: "Reported breakfast hours: 7:30 AM–10:00 PM. Meal timings may change — please confirm directly with the property.",
  },
  {
    icon: BellRing,
    title: "Room service",
    text: "Reported among the property's facilities for in-room dining.",
  },
];

export function DiningSection() {
  return (
    <section id="dining" className="scroll-mt-24 bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl shadow-[0_35px_70px_-35px_rgba(20,40,30,0.5)]">
              <img
                src={gardenCafe}
                alt="Garden lawn with outdoor café seating, umbrellas and a gazebo beside the cottage"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <p className="absolute bottom-4 left-4 rounded-full bg-forest-deep/70 px-4 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-cream backdrop-blur-sm">
                Garden seating · outdoor café setting
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow text-gold">The Dining Experience</p>
            <h2 className="mt-3 font-display text-4xl leading-tight font-semibold text-foreground sm:text-5xl">
              Homemade Flavours, Mountain Hospitality
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Enjoy fresh, home-cooked meals during your stay at Kyipo Khangg
              Cottage. The on-site restaurant is reported to serve freshly prepared
              food, offering guests a convenient dining experience in the peaceful
              surroundings of Khaknal.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              On cool evenings, the garden lawn and its umbrella-shaded tables make
              a relaxed spot for tea and conversation.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {DINING_POINTS.map((point) => (
                <div
                  key={point.title}
                  className="card-lift rounded-2xl border border-border bg-card p-5"
                >
                  <point.icon className="size-5 text-gold" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold text-foreground">{point.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{point.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 rounded-xl border border-gold/30 bg-gold/10 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
              Menus, dishes and prices are not listed here. Please confirm current
              food options and timings with the hosts.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
