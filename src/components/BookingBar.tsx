import { useState, type FormEvent } from "react";
import { CalendarCheck, Users } from "lucide-react";
import { createWhatsAppEnquiry, todayISO } from "@/lib/booking";
import { cn } from "@/lib/utils";

const labelCls = "mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground";
const fieldCls =
  "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30";

interface BookingState {
  checkIn: string;
  checkOut: string;
  adults: string;
  children: string;
  rooms: string;
}

export function BookingBar() {
  const [form, setForm] = useState<BookingState>({
    checkIn: "",
    checkOut: "",
    adults: "2",
    children: "0",
    rooms: "1",
  });
  const [error, setError] = useState<string | null>(null);

  const update = (key: keyof BookingState) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!form.checkIn) {
      setError("Please choose a check-in date.");
      return;
    }
    if (form.checkIn < todayISO()) {
      setError("Check-in cannot be in the past.");
      return;
    }
    if (!form.checkOut) {
      setError("Please choose a check-out date.");
      return;
    }
    if (form.checkOut <= form.checkIn) {
      setError("Check-out must be after check-in.");
      return;
    }
    const adults = Number(form.adults);
    const children = Number(form.children);
    const rooms = Number(form.rooms);
    if (!Number.isFinite(adults) || adults < 1 || adults > 20) {
      setError("Please enter a valid number of adults.");
      return;
    }
    if (!Number.isFinite(children) || children < 0 || children > 20) {
      setError("Please enter a valid number of children.");
      return;
    }
    if (!Number.isFinite(rooms) || rooms < 1 || rooms > 10) {
      setError("Please enter a valid number of rooms.");
      return;
    }

    setError(null);
    const url = createWhatsAppEnquiry({
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      adults,
      children,
      rooms,
      message: "Please share current rates and availability for these dates.",
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section aria-label="Quick availability enquiry" className="relative z-20 -mt-14 px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-6xl rounded-3xl border border-gold/25 bg-card p-5 shadow-[0_30px_60px_-30px_rgba(20,40,30,0.45)] sm:p-7"
      >
        <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto_auto_auto] md:items-end">
          <div>
            <label htmlFor="bb-checkin" className={labelCls}>
              Check-in
            </label>
            <input
              id="bb-checkin"
              type="date"
              min={todayISO()}
              value={form.checkIn}
              onChange={(e) => update("checkIn")(e.target.value)}
              className={fieldCls}
            />
          </div>
          <div>
            <label htmlFor="bb-checkout" className={labelCls}>
              Check-out
            </label>
            <input
              id="bb-checkout"
              type="date"
              min={form.checkIn || todayISO()}
              value={form.checkOut}
              onChange={(e) => update("checkOut")(e.target.value)}
              className={fieldCls}
            />
          </div>
          <div>
            <label htmlFor="bb-adults" className={labelCls}>
              Adults
            </label>
            <select
              id="bb-adults"
              value={form.adults}
              onChange={(e) => update("adults")(e.target.value)}
              className={cn(fieldCls, "md:w-24")}
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="bb-children" className={labelCls}>
              Children
            </label>
            <select
              id="bb-children"
              value={form.children}
              onChange={(e) => update("children")(e.target.value)}
              className={cn(fieldCls, "md:w-24")}
            >
              {Array.from({ length: 9 }, (_, i) => i).map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="bb-rooms" className={labelCls}>
              Rooms
            </label>
            <select
              id="bb-rooms"
              value={form.rooms}
              onChange={(e) => update("rooms")(e.target.value)}
              className={cn(fieldCls, "md:w-24")}
            >
              {Array.from({ length: 5 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <Users className="size-4 text-gold" aria-hidden="true" />
            Your enquiry opens in WhatsApp — the cottage confirms rates and availability directly.
          </p>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-3 text-sm font-semibold text-cream transition-all hover:-translate-y-0.5 hover:bg-forest-deep"
          >
            <CalendarCheck className="size-4" aria-hidden="true" />
            Check Availability
          </button>
        </div>

        {error ? (
          <p role="alert" className="mt-3 text-sm font-medium text-destructive">
            {error}
          </p>
        ) : null}
      </form>
    </section>
  );
}
