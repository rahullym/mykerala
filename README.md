# Make My Kerala

A fully responsive, interactive Astro rebuild of the Make My Kerala travel site.
All content (copy, packages, itineraries, destinations, stays, testimonials, FAQs,
contact details) is taken from https://make-my-kerala.vercel.app/.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
npm run preview
```

## Structure

```
src/
  data/
    site.ts        # brand, nav, destinations, stays, testimonials, FAQs, contact
    packages.ts    # tour packages, day-by-day itineraries, inclusions
  layouts/Base.astro       # shell + global behaviours (nav, reveal, counters)
  components/              # one component per page section
  pages/
    index.astro
    packages/index.astro       # searchable / filterable / sortable listing
    packages/[slug].astro      # itinerary, stay options, booking rail
    destinations/[slug].astro
    about-us.astro
    404.astro
  styles/global.css        # design tokens + shared component styles
public/images, public/video
```

Content lives in `src/data/*.ts` — edit there and every page updates.

## Interactive pieces

- Slide-in mobile drawer with focus trap and Escape-to-close
- Sticky header that flips light→dark and auto-hides on scroll down
- Scroll-reveal animations and animated stat counters
- Destination filter chips, package search + theme filter + price/duration sort
- Experience carousel (arrows, dots, swipe, keyboard)
- Testimonial carousel on mobile, three-up grid on desktop
- FAQ accordion, itinerary accordion with expand/collapse-all
- Stay lightbox, stay-option selector wired to the booking rail
- Validating enquiry form that hands off to WhatsApp or email
- Sticky mobile booking bar, WhatsApp/call/back-to-top floating actions

## Notes on the data

- The **Kerala Nature & Backwater Tour** day plan is the one published on the
  source site, reproduced verbatim.
- The other three packages publish only route, duration and price. Their day
  plans are assembled from the same documented activity blocks and are labelled
  **"Sample day plan"** in the UI. Replace them in `src/data/packages.ts` with the
  real itineraries when you have them.
- Phone, email and testimonials are the placeholder values from the source site.

## Verified

Checked with Playwright against the built output:

- No horizontal overflow at 320 / 390 / 430 / 768 / 1024 / 1440 px
- 23 interaction assertions passing (nav, filters, carousels, accordions,
  lightbox, form validation, sort/search, booking rail)
