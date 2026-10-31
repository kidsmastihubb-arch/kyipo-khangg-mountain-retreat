# Kyipo Khangg Mountain Retreat

# PREMIUM SINGLE-PAGE WEBSITE — KYIPO KHANGG COTTAGE, MANALI

Act as a world-class hospitality website designer, senior React developer, and UI/UX specialist. Build a visually stunning, premium, modern, fully responsive single-page website for **Kyipo Khangg Cottage – A Mountain Retreat**, located in Khaknal, Manali, Himachal Pradesh.

The website must look like a premium boutique mountain resort website with beautiful layouts, refined typography, elegant animations, immersive sections, and an excellent booking enquiry experience.

**IMPORTANT: Build ONE SINGLE-PAGE APPLICATION with substantial homepage content. Do not create multiple pages.**

# 1. ABSOLUTE IMAGE RULE — NEVER USE JSON IMAGES

This requirement is extremely important and must be followed throughout the entire project.

- NEVER use JSON images.
- NEVER create `images.json`, `image.json`, `gallery.json`, or any JSON-based image mapping.
- NEVER store image paths or image URLs in JSON arrays or objects.
- NEVER use Base64 images.
- NEVER use Unsplash, Pexels, stock photos, random internet images, or external image URLs.
- NEVER automatically fetch or generate photographs.
- Use ONLY the real photographs supplied by the website owner.
- Import every supplied image directly from `src/assets/` using standard JavaScript ES module imports.
- Use imported image variables directly inside React JSX.
- Use the exact filenames that actually exist.
- Never invent filenames or import nonexistent files.
- If photographs have not been provided, create beautiful CSS-based sections with neutral placeholders, gradients, icons, and elegant design elements. Do not insert random images.

The supplied owner photographs are attached to this project request as 10 PNG images (the chat attachments with IDs uploads/fcc42f73-504f-489b-a435-89bf0a9b019c through uploads/470c9df9-9984-4c5e-a5c8-9d01d8b7d572). Place them in `src/assets/` with descriptive real filenames matching what they show, and import them with standard ES module imports. What each photo shows, in attachment order:
1. Garden lawn with outdoor café seating, umbrellas, gazebo and red-brick building.
2. Bright modern bedroom with white bedding, walnut accent wall and abstract artwork.
3. Bathroom with grey tiles, wooden window and door, geyser and granite counter basin.
4. Living/dining room with pine wood ceiling, wooden staircase, sofa and dining table.
5. Attic/penthouse-style bedroom with sloped wooden ceiling and mountain-view window.
6. Cottage exterior with black cladding and "KYIPO KHANGG COTTAGE" sign, parking with cars.
7. Lounge room with grey tufted sofas, wooden slat wall and TV.
8. Full cottage exterior at dusk with lawn garden (tall portrait orientation).
9. Wood-paneled bedroom with orange bed runner and balcony doors opening to valley view.
10. Wide mountain valley landscape with snow peaks and village below.

Before final delivery, inspect the entire project and verify that:
- No JSON image files exist.
- No JSON image mappings are used.
- No random or external photographs are used.
- Every displayed photograph comes from an actual owner-provided image imported from `src/assets/`.

# 2. PROPERTY INFORMATION

Use the following supplied business information consistently throughout the website.

**Property Name:** Kyipo Khangg Cottage – A Mountain Retreat

**Address:** Kullu - Naggar - Manali Road, Khaknal, Manali, Himachal Pradesh 175143, India.

**Phone:** +91 85447 94883

**Reported Listing Details:**
- Property category: 2-star hotel.
- Reported rating: 4.8/5 from 119 reviews.
- Indicative listing price: approximately ₹1,669, subject to dates, room category, and availability.
- Established: 2016.
- Renovated: 2022.
- Reported management: Anubhav.
- Approximate distance from Manali Mall Road: 10.4 km.
- Reported check-in: 1:00 PM.
- Reported check-out: 11:00 AM.

**Location and surroundings:**
- Khaknal village.
- Apple orchards.
- Cedar trees.
- Mountain and valley surroundings.
- Near the route toward Sethan village.
- Sajla Waterfall is reported to be approximately a 7-minute walk or short trek from the cottage gates.

**Reported accommodation options:**
- Standard / King Rooms.
- Studio Apartments and Condos.
- Penthouse.

**Reported facilities:**
- On-site restaurant.
- Home-cooked meals.
- Breakfast.
- Free high-speed Wi-Fi.
- Complimentary parking.
- Common lounge.
- Second-floor sun deck.
- Game room.
- Garden fireplace / bonfire setup.
- Room service.
- Pet-friendly environment.
- Child-friendly environment.
- LGBTQ+ inclusive environment.
- Laundry service.
- Room heaters available at an additional charge.

Do not invent room counts, dimensions, bed configurations, exact occupancy limits, or unverified amenities.

# 3. TECHNOLOGY

Build using:

- React with Vite.
- JavaScript and JSX.
- Tailwind CSS or well-structured custom CSS.
- Lucide React icons.
- React hooks for form state and interactions.
- Reusable components.
- Semantic HTML.

Suggested structure:

```text
src/
  assets/
    [actual owner-provided photographs only]
  components/
    Navbar.jsx
    Hero.jsx
    BookingBar.jsx
    AboutSection.jsx
    RoomsSection.jsx
    ExperienceSection.jsx
    DiningSection.jsx
    AmenitiesSection.jsx
    GallerySection.jsx
    LocationSection.jsx
    FAQSection.jsx
    Footer.jsx
  App.jsx
  main.jsx
  index.css
```

Keep all website sections on one homepage. Use IDs and smooth scrolling for navigation.

# 4. PREMIUM UI/UX DESIGN DIRECTION

Create an elegant mountain-retreat aesthetic.

**Color palette:**
- Deep forest green.
- Warm walnut brown.
- Cream and ivory.
- Soft beige.
- Muted champagne gold.
- Charcoal for typography.

**Typography:**
- Elegant serif font for main headings.
- Modern sans-serif for body text.
- Large but balanced hero typography.
- Clear section headings and readable descriptions.

**Visual design:**
- Premium editorial-style layouts.
- Large immersive hero.
- Beautiful overlapping content sections.
- Elegant room cards.
- Spacious white-space.
- Subtle shadows and borders.
- Rounded corners used consistently.
- Sophisticated icons.
- Smooth scroll animations.
- Micro-interactions on buttons and cards.
- Attractive mobile layouts.

Avoid generic hotel templates, excessive gradients, neon colors, clutter, and cheap-looking components.

The website should feel like an independent boutique Himalayan retreat.

# 5. SINGLE-PAGE HOMEPAGE CONTENT

## SECTION A — NAVIGATION

Build a premium sticky navigation bar.

Left side:
- Kyipo Khangg Cottage wordmark.
- Small subtitle: A Mountain Retreat.

Navigation:
- Home
- About
- Stay
- Dining
- Experiences
- Amenities
- Gallery
- Location

Right side:
- Call button.
- Book Your Stay button.

Requirements:
- Transparent header over the hero initially.
- Header changes to a solid elegant background when scrolling.
- Smooth scrolling to each section.
- Responsive mobile menu.
- Subtle hover animations.
- Keep the booking CTA prominent.

## SECTION B — HERO

Create a visually stunning, immersive hero section.

Use an actual owner-provided cottage or mountain photograph imported directly from `src/assets/` (the mountain valley landscape or the cottage exteriors are strong candidates).

Small eyebrow text:

"YOUR PRIVATE CORNER OF THE HIMALAYAS"

Main heading:

"Escape to the Quiet Beauty of the Mountains"

Supporting content:

"Discover Kyipo Khangg Cottage, a peaceful mountain retreat in Khaknal, Manali. Surrounded by the charm of village life, apple orchards, and cedar trees, experience a slower and more memorable side of the Himalayas."

Buttons:
- Explore the Cottage
- Enquire About Your Stay

Add an elegant location label:
"Khaknal · Manali · Himachal Pradesh"

Add a small bottom highlight bar:
- 4.8/5 reported guest rating.
- Boutique mountain stay.
- On-site dining.
- Sajla Waterfall nearby.

Do not claim private mountain views from every room.

## SECTION C — QUICK BOOKING BAR

Create a stylish horizontal booking bar below the hero.

Fields:
- Check-in.
- Check-out.
- Adults.
- Children.
- Rooms.

CTA:
"Check Availability"

When clicked, take the visitor to the booking enquiry form or open WhatsApp with the entered details.

Validate dates and guest numbers.

Do not display fake live availability.

## SECTION D — ABOUT THE COTTAGE

Section heading:

"A Stay Inspired by the Mountains"

Create a premium two-column layout.

Use an actual owner-provided cottage photograph if available.

Content:

"Kyipo Khangg Cottage is a family-run mountain retreat located in the peaceful village surroundings of Khaknal, Manali. Established in 2016 and renovated in 2022, the property offers travelers an opportunity to experience a quieter side of the Manali region.

Surrounded by apple orchards, cedar trees, and the natural charm of the valley, the cottage provides a welcoming base for guests looking to slow down, enjoy local food, and explore the surrounding mountains."

Add three highlight cards:
- Established in 2016.
- Renovated in 2022.
- Managed by Anubhav, according to the supplied information.

Do not invent personal biography or ownership history.

## SECTION E — ROOMS AND ACCOMMODATION

Section heading:

"Find Your Perfect Mountain Stay"

Supporting text:

"Choose from the reported accommodation categories and contact the cottage to confirm room availability, configuration, and current rates."

Create three premium room cards.

### 1. Standard / King Rooms

Description:

"Comfortable accommodation options designed for travelers seeking a relaxing stay in the Manali region."

Show only confirmed features. The supplied information mentions private ensuite bathrooms and balconies for the standard/king room category. Do not assume these features apply to every room.

### 2. Studio Apartments & Condos

Description:

"Open-plan accommodation options reported to include kitchen spaces and shared living areas, suitable for longer stays and family groups."

Do not invent kitchen appliances, equipment, or occupancy limits.

### 3. The Penthouse

Description:

"A spacious top-floor accommodation option described in the supplied information as offering panoramic mountain views."

Do not invent floor area, bedroom count, private terrace access, or other features.

Each room card should contain:
- Room photograph, only if supplied (the supplied bedroom, lounge, living/dining and attic-bedroom photos are good candidates — match photos to categories sensibly).
- Room category.
- Concise description.
- Confirmed features.
- Enquire About This Room button.
- WhatsApp CTA.

Use elegant image layouts and premium cards.

Do not invent prices or room availability.

## SECTION F — THE MOUNTAIN EXPERIENCE

Create a beautiful editorial-style section.

Heading:

"Wake Up to the Rhythm of the Mountains"

Describe the surroundings using the supplied information:
- Apple orchards.
- Cedar trees.
- Rural village atmosphere.
- Valley surroundings.
- Quiet environment away from busy Manali tourist areas.

Use warm, evocative language without making unsupported claims.

Add a subtle statistic/highlight:
"Approximately 10.4 km from Manali Mall Road."

Clarify that this is an approximate reported distance and actual journey times depend on road conditions.

## SECTION G — DINING EXPERIENCE

Heading:

"Homemade Flavours, Mountain Hospitality"

Create an elegant restaurant section.

Content:

"Enjoy fresh, home-cooked meals during your stay at Kyipo Khangg Cottage. The on-site restaurant is reported to serve freshly prepared food, offering guests a convenient dining experience in the peaceful surroundings of Khaknal."

Include:
- On-site restaurant.
- Home-cooked meals.
- Breakfast.
- Room service.
- Breakfast hours reported as 7:30 AM to 10:00 PM.

The supplied breakfast timing is unusual. Display it as "Reported breakfast hours: 7:30 AM–10:00 PM" and recommend confirming current meal timings directly with the property.

Do not invent a menu, exact food prices, or specific dishes.

Use supplied food photographs only. No food photos were supplied, so create an elegant text-and-icon layout (the garden seating photo may illustrate the outdoor setting, but do not present it as food).

## SECTION H — AMENITIES AND FACILITIES

Heading:

"Everything You Need for a Relaxing Stay"

Create an elegant responsive grid of icon cards.

Include the supplied amenities:

- Free High-Speed Wi-Fi.
- Complimentary On-Site Parking.
- On-Site Restaurant.
- Home-Cooked Meals.
- Room Service.
- Common Lounge.
- Second-Floor Sun Deck.
- Game Room.
- Garden Fireplace / Bonfire Setup.
- Laundry Service.
- Pet-Friendly Environment.
- Child-Friendly Environment.
- LGBTQ+ Inclusive Environment.

Add a separate note:

"Room heaters are reported to be available at an additional charge. Please confirm the current price and availability before arrival."

Do not claim 24-hour services or facilities not listed in the supplied information.

## SECTION I — SUN DECK, LOUNGE AND BONFIRE

Create an attractive lifestyle section showcasing the reported shared spaces.

Three feature blocks:

**The Sun Deck**

"Spend some relaxed time outdoors on the property's reported second-floor sun deck."

**The Common Lounge**

"A shared space where guests can unwind during their stay."

**Garden Fireplace Setup**

"An outdoor fireplace / bonfire setup is reported among the property's facilities. Confirm availability, timing, and any applicable charges with the hosts."

Do not guarantee bonfires every evening or claim private-use facilities.

## SECTION J — NEARBY EXPERIENCES

Heading:

"Explore More Around Khaknal and Manali"

Create visually attractive attraction cards.

### Sajla Waterfall

"Discover Sajla Waterfall, reported to be approximately a 7-minute walk or short trek from the cottage gates. Confirm the current walking route and local conditions before setting out."

### Sethan Village

"Explore the route toward Sethan, known for its offbeat village setting and seasonal winter experiences."

### Naggar Castle

"Plan a visit to Naggar Castle and discover another side of the wider Manali region."

### Hidimba Devi Temple

"Include Hidimba Devi Temple in your Manali sightseeing plans."

Do not invent exact travel times to Sethan, Naggar Castle, or Hidimba Devi Temple.

Use attractive CSS-based attraction cards with icons.

## SECTION K — WHY CHOOSE KYIPO KHANGG COTTAGE

Create a premium four-card section.

- Peaceful Village Setting.
- Multiple Accommodation Categories.
- Fresh Home-Cooked Dining.
- A Base for Exploring Manali and Nearby Attractions.

Use concise descriptions and tasteful icons.

Avoid unsupported guarantees.

## SECTION L — GUEST RATING AND BOOKING PRICE

Display:

"4.8 / 5 — Reported Guest Rating"

"119 reviews — as supplied in the property information."

Make clear that ratings can change and should be checked on the relevant listing platform.

For pricing:
- Supplied indicative listing price: approximately ₹1,669.
- Actual prices vary by date, room category, guest count, platform, and availability.

Do not guarantee this rate. Add a clear note:

"Contact the property directly for the final rate and current room availability."

Do not fabricate guest testimonials or review quotations.

## SECTION M — PHOTO GALLERY

Create an elegant responsive gallery.

MANDATORY:
- Use only actual photographs supplied by the owner (all 10 attached photos).
- Import images directly from `src/assets/`.
- Use normal ES imports.
- No JSON image collections.
- No external URLs.
- No automatic image fetching.
- No fabricated filenames.

Gallery design:
- Large featured image.
- Smaller supporting images.
- Responsive grid.
- Click-to-open lightbox.
- Smooth transitions.
- Accessible controls.
- Descriptive alt text.

## SECTION N — BOOKING ENQUIRY FORM

Create a premium booking enquiry section.

Heading:

"Plan Your Stay at Kyipo Khangg Cottage"

Fields:
- Full Name.
- Phone Number.
- Email (optional).
- Check-in Date.
- Check-out Date.
- Adults.
- Children.
- Number of Rooms.
- Preferred Accommodation Category.
- Special Requests.

Requirements:
- Validate required fields.
- Validate phone number.
- Prevent past check-in dates.
- Check-out must be later than check-in.
- Show helpful error messages.
- Show a clear submission state.
- Include a WhatsApp enquiry button.

Do not claim that the booking is confirmed. Label the form action "Send Booking Enquiry" unless a genuine reservation system is integrated.

## SECTION O — LOCATION AND GOOGLE MAPS

Heading:

"Find Your Way to Kyipo Khangg Cottage"

Display:

Kyipo Khangg Cottage  
Kullu - Naggar - Manali Road, Khaknal, Manali, Himachal Pradesh 175143, India.

Phone:
+91 85447 94883

Use the following exact Google Maps embed URL:

```text
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.960470034023!2d77.19081981125737!3d32.17834067381081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390462759ae1541f%3A0xec49d99b7b6956a8!2sKyipo%20Khangg%20Cottage!5e0!3m2!1sen!2sin!4v1793419643078!5m2!1sen!2sin
```

Render it in a responsive iframe with:
- `loading="lazy"`.
- Descriptive title.
- Accessible markup.
- Responsive width and height.

Add:
- Get Directions.
- Call the Cottage.
- WhatsApp Enquiry.

Directions link:

`https://www.google.com/maps/dir/?api=1&destination=Kyipo%20Khangg%20Cottage%2C%20Khaknal%2C%20Manali%2C%20Himachal%20Pradesh%20175143`

Do not replace the supplied map location.

## SECTION P — FREQUENTLY ASKED QUESTIONS

Build an attractive FAQ accordion.

**Where is Kyipo Khangg Cottage located?**

The cottage is located on Kullu–Naggar–Manali Road in Khaknal, Manali, Himachal Pradesh 175143.

**What are the check-in and check-out timings?**

The supplied information lists check-in from 1:00 PM and check-out by 11:00 AM.

**Does the property have a restaurant?**

An on-site restaurant serving home-cooked meals is reported. Contact the property for current food options and timings.

**Is Wi-Fi available?**

Free high-speed Wi-Fi is reported among the property facilities.

**Are pets allowed?**

The supplied information describes the property as pet-friendly. Confirm current pet rules before booking.

**Is parking available?**

Complimentary on-site parking is reported.

**Are room heaters available?**

Room heaters are reported to be available at an additional charge. Confirm the current charge with the property.

**How far is the cottage from Manali Mall Road?**

The supplied information reports approximately 10.4 km. Actual travel time depends on road and traffic conditions.

**Is Sajla Waterfall nearby?**

Sajla Waterfall is reported to be approximately a 7-minute walk or short trek from the cottage gates. Confirm the route and current conditions locally.

## SECTION Q — FINAL CTA

Create a stunning final booking section.

Heading:

"Find Your Little Mountain Escape"

Supporting text:

"Make your next Manali getaway memorable with a peaceful stay at Kyipo Khangg Cottage. Contact the hosts to enquire about rooms, meals, and availability."

Buttons:
- Book Your Stay.
- WhatsApp the Cottage.
- Call +91 85447 94883.

## SECTION R — FOOTER

Include:
- Kyipo Khangg Cottage name.
- Short description.
- Full address.
- Phone number.
- Quick links to homepage sections.
- Booking enquiry CTA.
- Copyright with current year.

Do not invent an email address, website domain, or social media links.

# 6. WHATSAPP BOOKING INTEGRATION

Use this phone number in international format:

`918544794883`

Create a reusable WhatsApp helper:

```jsx
const HOTEL_PHONE = "918544794883";

function createWhatsAppEnquiry(form) {
  const message = [
    "Hello Kyipo Khangg Cottage,",
    "I would like to enquire about a stay.",
    `Name: ${form.name || "Not provided"}`,
    `Phone: ${form.phone || "Not provided"}`,
    `Check-in: ${form.checkIn || "Not selected"}`,
    `Check-out: ${form.checkOut || "Not selected"}`,
    `Adults: ${form.adults ?? 2}`,
    `Children: ${form.children ?? 0}`,
    `Rooms: ${form.rooms ?? 1}`,
    `Accommodation: ${form.roomType || "Please share available options"}`,
    `Message: ${form.message || "Please share current rates and availability."}`
  ].join("\n");

  return `https://wa.me/${HOTEL_PHONE}?text=${encodeURIComponent(message)}`;
}
```

Adapt it to the actual form state and validate all values.

Use the telephone link:

`tel:+918544794883`

Add WhatsApp enquiry options in the hero, accommodation section, booking form, and footer.

Do not claim a message has been sent until the guest actually sends it through WhatsApp. Do not falsely confirm a reservation.

# 7. SEO REQUIREMENTS

Optimize the homepage naturally for:

- Kyipo Khangg Cottage Manali.
- Cottage in Khaknal Manali.
- Mountain retreat in Manali.
- Homestay in Khaknal.
- Boutique cottage near Manali.
- Stay near Sajla Waterfall.

Implement:
- SEO-friendly title.
- Meta description.
- One H1 heading.
- Logical H2/H3 structure.
- Open Graph metadata.
- Descriptive alt text for actual supplied photos.
- Local business / lodging structured data using verified information only.
- `robots.txt`.
- `sitemap.xml` when appropriate for the deployed domain.
- Internal section links.
- Fast loading and accessible HTML.

Do not invent a domain, email address, or unsupported business details. Do not guarantee Google rankings.

# 8. FINAL UI/UX AND FUNCTIONALITY CHECKLIST

Before delivering the website:

1. Create one long, content-rich homepage only.
2. Ensure premium, visually impressive UI/UX.
3. Make every navigation link scroll to the correct section.
4. Make the layout responsive across mobile, tablet, and desktop.
5. Ensure the booking form validates correctly.
6. Test the phone call link.
7. Test WhatsApp enquiry generation.
8. Ensure the Google Maps embed uses the exact supplied URL.
9. Use the correct address and phone number.
10. Display pricing as indicative only.
11. Do not falsely confirm bookings.
12. Do not invent room details or facilities.
13. Do not fabricate reviews.
14. NEVER use JSON images.
15. NEVER create `images.json` or `image.json`.
16. NEVER use random or external stock photographs.
17. Import only actual owner-provided photographs directly from `src/assets/`.
18. If no photographs are supplied, use attractive CSS-based placeholders.
19. Ensure there are no broken imports or missing files.
20. Ensure the project builds successfully.

# FINAL NON-NEGOTIABLE INSTRUCTION

Build a premium, visually stunning, content-rich SINGLE-PAGE WEBSITE for Kyipo Khangg Cottage.

**NO JSON IMAGES. NO JSON IMAGE MAPPINGS. NO RANDOM IMAGES. NO EXTERNAL STOCK PHOTOS. ONLY IMPORT THE REAL PHOTOGRAPHS PROVIDED BY THE OWNER DIRECTLY FROM `src/assets/`.**

The final website should look like a premium Himalayan boutique cottage website with excellent UI/UX, elegant sections, smooth interactions, and a complete booking enquiry experience.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/99c96ab7-2852-4b1c-b2d9-bd6c3bd857bf).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
