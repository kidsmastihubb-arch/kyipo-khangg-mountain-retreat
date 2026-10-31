import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CalendarDays, MessageCircle, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { createWhatsAppEnquiry, todayISO } from "@/lib/booking";

const ROOM_TYPES = [
  "Not sure yet — please suggest",
  "Standard / King Rooms",
  "Studio Apartments & Condos",
  "The Penthouse",
];

const enquirySchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Please enter your full name.")
      .max(100, "Name must be under 100 characters."),
    phone: z
      .string()
      .trim()
      .regex(/^[+]?[\d][\d\s-]{7,14}$/, "Please enter a valid phone number."),
    email: z
      .union([z.string().trim().email("Please enter a valid email address.").max(255), z.literal("")])
      .optional(),
    checkIn: z.string().min(1, "Please select a check-in date."),
    checkOut: z.string().min(1, "Please select a check-out date."),
    adults: z.coerce.number().int().min(1, "At least 1 adult.").max(20),
    children: z.coerce.number().int().min(0).max(20),
    rooms: z.coerce.number().int().min(1, "At least 1 room.").max(10),
    roomType: z.string().min(1, "Please choose a category."),
    specialRequests: z.string().trim().max(1000, "Please keep it under 1000 characters.").optional(),
  })
  .superRefine((data, ctx) => {
    if (data.checkIn && data.checkIn < todayISO()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["checkIn"],
        message: "Check-in cannot be in the past.",
      });
    }
    if (data.checkIn && data.checkOut && data.checkOut <= data.checkIn) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["checkOut"],
        message: "Check-out must be after check-in.",
      });
    }
  });

type EnquiryForm = z.infer<typeof enquirySchema>;

const labelCls = "mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground";
const fieldCls =
  "w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30";
const errorCls = "mt-1.5 text-xs font-medium text-destructive";

export function BookingEnquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string>("");
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryForm>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      checkIn: "",
      checkOut: "",
      adults: 2,
      children: 0,
      rooms: 1,
      roomType: ROOM_TYPES[0],
      specialRequests: "",
    },
  });

  // Pre-select a room category when a room card's "Enquire" button is used.
  useEffect(() => {
    const onSelectRoom = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail;
      if (typeof detail === "string") {
        setValue("roomType", detail);
      }
    };
    window.addEventListener("kyipo:select-room", onSelectRoom);
    return () => window.removeEventListener("kyipo:select-room", onSelectRoom);
  }, [setValue]);

  const onSubmit = (values: EnquiryForm) => {
    const parsed = enquirySchema.safeParse(values);
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if (field) {
          setError(field as keyof EnquiryForm, {
            type: "manual",
            message: issue.message,
          });
        }
      }
      return;
    }
    const v = parsed.data;
    const url = createWhatsAppEnquiry({
      name: v.name,
      phone: v.phone,
      checkIn: v.checkIn,
      checkOut: v.checkOut,
      adults: v.adults,
      children: v.children,
      rooms: v.rooms,
      roomType: v.roomType,
      message: [v.specialRequests, v.email ? `Email: ${v.email}` : null]
        .filter(Boolean)
        .join(" · ") || "Please share current rates and availability.",
    });
    setWhatsappUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="enquire" className="scroll-mt-24 bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Booking Enquiry"
          title="Plan Your Stay at Kyipo Khangg Cottage"
          description="Share your dates and preferences — your enquiry opens in WhatsApp so the hosts can reply with rates and availability."
        />

        <Reveal className="mt-12">
          {submitted ? (
            <div className="rounded-3xl border border-gold/35 bg-card p-10 text-center shadow-lg">
              <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-gold/20">
                <MessageCircle className="size-6 text-forest" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-3xl font-semibold text-foreground">
                Your enquiry is ready to send
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                WhatsApp should have opened with your details filled in. Please press
                send in the WhatsApp app to share your enquiry with the cottage.
              </p>
              <p className="mx-auto mt-4 max-w-md rounded-xl bg-secondary px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                This is a booking <strong>enquiry</strong> only — your stay is
                confirmed once the property responds and confirms availability and
                rates.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                {whatsappUrl ? (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-forest-deep"
                  >
                    <MessageCircle className="size-4" aria-hidden="true" />
                    Open WhatsApp Again
                  </a>
                ) : null}
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-gold"
                >
                  Edit My Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-3xl border border-border bg-card p-6 shadow-[0_30px_60px_-35px_rgba(20,40,30,0.4)] sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="enq-name" className={labelCls}>
                    Full Name *
                  </label>
                  <input id="enq-name" type="text" autoComplete="name" className={fieldCls} {...register("name")} />
                  {errors.name ? <p className={errorCls}>{errors.name.message}</p> : null}
                </div>
                <div>
                  <label htmlFor="enq-phone" className={labelCls}>
                    Phone Number *
                  </label>
                  <input id="enq-phone" type="tel" autoComplete="tel" placeholder="+91 ..." className={fieldCls} {...register("phone")} />
                  {errors.phone ? <p className={errorCls}>{errors.phone.message}</p> : null}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="enq-email" className={labelCls}>
                    Email (optional)
                  </label>
                  <input id="enq-email" type="email" autoComplete="email" className={fieldCls} {...register("email")} />
                  {errors.email ? <p className={errorCls}>{errors.email.message}</p> : null}
                </div>

                <div>
                  <label htmlFor="enq-checkin" className={labelCls}>
                    Check-in Date *
                  </label>
                  <input id="enq-checkin" type="date" min={todayISO()} className={fieldCls} {...register("checkIn")} />
                  {errors.checkIn ? <p className={errorCls}>{errors.checkIn.message}</p> : null}
                </div>
                <div>
                  <label htmlFor="enq-checkout" className={labelCls}>
                    Check-out Date *
                  </label>
                  <input id="enq-checkout" type="date" min={todayISO()} className={fieldCls} {...register("checkOut")} />
                  {errors.checkOut ? <p className={errorCls}>{errors.checkOut.message}</p> : null}
                </div>

                <div className="grid grid-cols-3 gap-3 sm:col-span-2">
                  <div>
                    <label htmlFor="enq-adults" className={labelCls}>
                      Adults
                    </label>
                    <select id="enq-adults" className={fieldCls} {...register("adults")}>
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="enq-children" className={labelCls}>
                      Children
                    </label>
                    <select id="enq-children" className={fieldCls} {...register("children")}>
                      {Array.from({ length: 9 }, (_, i) => i).map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="enq-rooms" className={labelCls}>
                      Rooms
                    </label>
                    <select id="enq-rooms" className={fieldCls} {...register("rooms")}>
                      {Array.from({ length: 5 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="enq-roomtype" className={labelCls}>
                    Preferred Accommodation Category *
                  </label>
                  <select id="enq-roomtype" className={fieldCls} {...register("roomType")}>
                    {ROOM_TYPES.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.roomType ? <p className={errorCls}>{errors.roomType.message}</p> : null}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="enq-requests" className={labelCls}>
                    Special Requests
                  </label>
                  <textarea
                    id="enq-requests"
                    rows={4}
                    placeholder="Anything the hosts should know — pets, early arrival, celebrations..."
                    className={fieldCls}
                    {...register("specialRequests")}
                  />
                  {errors.specialRequests ? <p className={errorCls}>{errors.specialRequests.message}</p> : null}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CalendarDays className="size-4 text-gold" aria-hidden="true" />
                  An enquiry only — bookings are confirmed by the property.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={createWhatsAppEnquiry()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-gold"
                  >
                    <MessageCircle className="size-4" aria-hidden="true" />
                    WhatsApp Enquiry
                  </a>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3 text-sm font-semibold text-forest-deep transition-all hover:-translate-y-0.5 hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Send className="size-4" aria-hidden="true" />
                    {isSubmitting ? "Preparing…" : "Send Booking Enquiry"}
                  </button>
                </div>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
