import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BookingBar } from "@/components/BookingBar";
import { AboutSection } from "@/components/AboutSection";
import { RoomsSection } from "@/components/RoomsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { DiningSection } from "@/components/DiningSection";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { NearbySection } from "@/components/NearbySection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { RatingSection } from "@/components/RatingSection";
import { GallerySection } from "@/components/GallerySection";
import { BookingEnquiry } from "@/components/BookingEnquiry";
import { LocationSection } from "@/components/LocationSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Kyipo Khangg Cottage — A Mountain Retreat",
  description:
    "A family-run mountain retreat in Khaknal, Manali, surrounded by apple orchards and cedar trees, offering an on-site restaurant, home-cooked meals and a peaceful village setting.",
  telephone: "+918544794883",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kullu - Naggar - Manali Road, Khaknal",
    addressLocality: "Manali",
    addressRegion: "Himachal Pradesh",
    postalCode: "175143",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.17834,
    longitude: 77.19082,
  },
  checkinTime: "13:00:00",
  checkoutTime: "11:00:00",
  petsAllowed: true,
  priceRange: "₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "119",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Kyipo Khangg Cottage — A Mountain Retreat in Khaknal, Manali",
      },
      {
        name: "description",
        content:
          "Boutique cottage in Khaknal, Manali near Sajla Waterfall — a mountain retreat with apple orchards, cedar trees, home-cooked dining, penthouse and studio stays. Enquire at +91 85447 94883.",
      },
      {
        property: "og:title",
        content: "Kyipo Khangg Cottage — A Mountain Retreat in Khaknal, Manali",
      },
      {
        property: "og:description",
        content:
          "A peaceful boutique cottage in Khaknal, Manali — stay near Sajla Waterfall with home-cooked meals, orchard surroundings and valley views.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[80] focus:rounded-full focus:bg-cream focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <BookingBar />
        <AboutSection />
        <RoomsSection />
        <ExperienceSection />
        <DiningSection />
        <AmenitiesSection />
        <NearbySection />
        <WhyChooseSection />
        <RatingSection />
        <GallerySection />
        <BookingEnquiry />
        <LocationSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
