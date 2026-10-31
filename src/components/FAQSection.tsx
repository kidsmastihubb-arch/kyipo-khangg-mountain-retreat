import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    question: "Where is Kyipo Khangg Cottage located?",
    answer:
      "The cottage is located on Kullu–Naggar–Manali Road in Khaknal, Manali, Himachal Pradesh 175143.",
  },
  {
    question: "What are the check-in and check-out timings?",
    answer:
      "The supplied information lists check-in from 1:00 PM and check-out by 11:00 AM.",
  },
  {
    question: "Does the property have a restaurant?",
    answer:
      "An on-site restaurant serving home-cooked meals is reported. Contact the property for current food options and timings.",
  },
  {
    question: "Is Wi-Fi available?",
    answer: "Free high-speed Wi-Fi is reported among the property facilities.",
  },
  {
    question: "Are pets allowed?",
    answer:
      "The supplied information describes the property as pet-friendly. Confirm current pet rules before booking.",
  },
  {
    question: "Is parking available?",
    answer: "Complimentary on-site parking is reported.",
  },
  {
    question: "Are room heaters available?",
    answer:
      "Room heaters are reported to be available at an additional charge. Confirm the current charge with the property.",
  },
  {
    question: "How far is the cottage from Manali Mall Road?",
    answer:
      "The supplied information reports approximately 10.4 km. Actual travel time depends on road and traffic conditions.",
  },
  {
    question: "Is Sajla Waterfall nearby?",
    answer:
      "Sajla Waterfall is reported to be approximately a 7-minute walk or short trek from the cottage gates. Confirm the route and current conditions locally.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Good to Know"
          title="Frequently Asked Questions"
        />

        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="rounded-3xl border border-border bg-card px-6 sm:px-8">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className={index === FAQS.length - 1 ? "border-b-0" : undefined}
              >
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-forest hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
