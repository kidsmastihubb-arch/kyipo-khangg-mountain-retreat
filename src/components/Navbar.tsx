import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { HOTEL_TEL } from "@/lib/booking";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stay", href: "#stay" },
  { label: "Dining", href: "#dining" },
  { label: "Experiences", href: "#experiences" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "border-b border-border/70 bg-cream/95 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.35)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Wordmark */}
        <a href="#home" className="group flex items-center gap-3" aria-label="Kyipo Khangg Cottage — home">
          <span
            className={cn(
              "flex size-11 items-center justify-center rounded-full border font-display text-lg font-semibold transition-colors",
              solid
                ? "border-gold/60 bg-forest text-cream"
                : "border-cream/40 bg-cream/10 text-cream backdrop-blur-sm",
            )}
            aria-hidden="true"
          >
            K
          </span>
          <span className="leading-tight">
            <span
              className={cn(
                "block font-display text-xl font-semibold tracking-wide transition-colors sm:text-[1.35rem]",
                solid ? "text-forest-deep" : "text-cream",
              )}
            >
              Kyipo Khangg Cottage
            </span>
            <span
              className={cn(
                "block text-[0.65rem] font-medium uppercase tracking-[0.3em] transition-colors",
                solid ? "text-gold" : "text-gold-soft",
              )}
            >
              A Mountain Retreat
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium tracking-wide transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full",
                solid ? "text-foreground hover:text-forest" : "text-cream/90 hover:text-cream",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={HOTEL_TEL}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              solid
                ? "border-border text-foreground hover:border-forest hover:text-forest"
                : "border-cream/40 text-cream hover:border-cream hover:bg-cream/10",
            )}
          >
            <Phone className="size-4" aria-hidden="true" />
            <span className="hidden lg:inline">Call</span>
          </a>
          <a
            href="#enquire"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-forest-deep shadow-[0_10px_25px_-12px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-0.5 hover:bg-gold-soft"
          >
            Book Your Stay
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full border transition-colors md:hidden",
            solid ? "border-border text-foreground" : "border-cream/40 text-cream",
          )}
        >
          {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen ? (
        <nav
          aria-label="Mobile"
          className="border-t border-border/70 bg-cream/98 px-4 pb-6 backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-border/60 py-3 text-sm font-medium tracking-wide text-foreground transition-colors hover:text-forest"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="#enquire"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-forest-deep"
            >
              Book Your Stay
            </a>
            <a
              href={HOTEL_TEL}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call the Cottage
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
