import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

import gardenCafe from "@/assets/garden-cafe.png";
import bedroomWalnut from "@/assets/bedroom-walnut.png";
import bathroomGrey from "@/assets/bathroom-grey-tiles.png";
import livingDining from "@/assets/living-dining.png";
import atticBedroom from "@/assets/attic-bedroom.png";
import cottageExterior from "@/assets/cottage-exterior-sign.png";
import commonLounge from "@/assets/common-lounge.png";
import cottageDusk from "@/assets/cottage-dusk-garden.png";
import bedroomValley from "@/assets/bedroom-valley-balcony.png";
import mountainValley from "@/assets/mountain-valley-landscape.png";

const PHOTOS = [
  {
    src: cottageDusk,
    alt: "Full cottage exterior at dusk with the lawn garden in front",
    span: "md:row-span-2",
  },
  {
    src: bedroomWalnut,
    alt: "Bright modern bedroom with white bedding and a walnut accent wall",
    span: "",
  },
  {
    src: mountainValley,
    alt: "Wide mountain valley landscape with snow peaks and a village below",
    span: "",
  },
  {
    src: livingDining,
    alt: "Living and dining room with pine wood ceiling, wooden staircase and dining table",
    span: "md:row-span-2",
  },
  {
    src: gardenCafe,
    alt: "Garden lawn with outdoor café seating, umbrellas and gazebo",
    span: "",
  },
  {
    src: bedroomValley,
    alt: "Wood-panelled bedroom with balcony doors opening to the valley",
    span: "",
  },
  {
    src: cottageExterior,
    alt: "Cottage exterior with black cladding and the Kyipo Khangg Cottage sign",
    span: "",
  },
  {
    src: atticBedroom,
    alt: "Attic-style bedroom with sloped wooden ceiling and mountain-view window",
    span: "",
  },
  {
    src: commonLounge,
    alt: "Lounge room with grey tufted sofas and a wooden slat wall",
    span: "",
  },
  {
    src: bathroomGrey,
    alt: "Bathroom with grey tiles, wooden window and granite counter basin",
    span: "",
  },
];

export function GallerySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + PHOTOS.length - 1) % PHOTOS.length)),
    [],
  );
  const showNext = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % PHOTOS.length)),
    [],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, showPrev, showNext]);

  return (
    <section id="gallery" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Photo Gallery"
          title="Moments at Kyipo Khangg Cottage"
          description="Real photographs of the cottage, its rooms, gardens and the valley around Khaknal."
        />

        <Reveal className="mt-14">
          <div className="grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[240px] md:grid-cols-4">
            {PHOTOS.map((photo, index) => (
              <button
                key={photo.alt}
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`Open photo: ${photo.alt}`}
                className={cn(
                  "group relative overflow-hidden rounded-2xl focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none",
                  photo.span,
                )}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span
                  className="absolute inset-0 bg-forest-deep/0 transition-colors duration-300 group-hover:bg-forest-deep/25"
                  aria-hidden="true"
                />
                <Expand
                  className="absolute right-3 bottom-3 size-5 text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      {openIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-forest-deep/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close photo viewer"
            className="absolute top-5 right-5 flex size-11 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream/15"
          >
            <X className="size-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream/15 sm:left-6"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>

          <figure onClick={(e) => e.stopPropagation()} className="max-h-[86vh] max-w-5xl">
            <img
              src={PHOTOS[openIndex].src}
              alt={PHOTOS[openIndex].alt}
              className="max-h-[78vh] w-auto max-w-full rounded-xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-cream/85">
              {PHOTOS[openIndex].alt}
              <span className="mt-1 block text-xs text-cream/50">
                {openIndex + 1} / {PHOTOS.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream/15 sm:right-6"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
