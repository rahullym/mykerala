// Central content store. Every page/component reads from here, so copy changes
// in one place propagate across the whole site.

export const site = {
  name: 'Make My Kerala',
  wordmark: 'MakeMyKerala',
  tagline: 'Kerala, Beyond Ordinary',
  description:
    'Curated journeys through misty hills, serene backwaters and sun-kissed shores. 25 years of personalised South India travel.',
  years: 25,
  phone: '+91 98765 43210',
  phoneHref: '+919876543210',
  email: 'hello@makemykerala.com',
  location: 'Kochi, Kerala, India',
  owners: ['Anitha Murali', 'Muraleedhara Shenoy'],
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Packages', href: '/packages' },
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Experiences', href: '/#experiences' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact', href: '/#contact' },
];

export const stats = [
  { value: 500, suffix: '+', label: 'Happy Travellers' },
  { value: 50, suffix: '+', label: 'Experiences' },
  { value: 4.9, suffix: '/5', label: 'Traveller Rating', decimals: 1 },
];

export const marqueePlaces = [
  'Munnar', 'Alappuzha', 'Wayanad', 'Thekkady',
  'Varkala', 'Kovalam', 'Fort Kochi', 'Kumarakom',
];

export type Destination = {
  slug: string;
  name: string;
  blurb: string;
  image: string;
  region: 'Hills' | 'Backwaters' | 'Beaches' | 'Wildlife' | 'Heritage';
  highlights: string[];
};

export const destinations: Destination[] = [
  {
    slug: 'munnar',
    name: 'Munnar',
    blurb: 'Misty mountains, endless tea gardens and refreshing hill views.',
    image: '/images/munnar.jpg',
    region: 'Hills',
    highlights: [
      'Mattupetty Dam', 'Echo Point', 'Kundala Lake', 'Tea Museum',
      'Rose Garden', 'Eravikulam National Park',
    ],
  },
  {
    slug: 'alleppey',
    name: 'Alleppey',
    blurb: 'Cruise through peaceful backwaters aboard a traditional houseboat.',
    image: '/images/allapey.jpg',
    region: 'Backwaters',
    highlights: [
      'Houseboat stay', 'Backwater cruise', 'Alleppey Beach', 'Sunset views',
    ],
  },
  {
    slug: 'wayanad',
    name: 'Wayanad',
    blurb: 'Explore forests, waterfalls, wildlife and beautiful landscapes.',
    image: '/images/wayanad.jpg',
    region: 'Wildlife',
    highlights: ['Forest trails', 'Waterfalls', 'Wildlife spotting', 'Green landscapes'],
  },
  {
    slug: 'kovalam',
    name: 'Kovalam',
    blurb: "Relax along Kerala's beautiful coastline and enjoy the sea.",
    image: '/images/kovalam.jpg',
    region: 'Beaches',
    highlights: ['Lighthouse Beach', 'Coastal sunsets', 'Ayurvedic retreats', 'Seaside dining'],
  },
];

export type Stay = {
  tag: string;
  name: string;
  place: string;
  blurb: string;
  image: string;
};

export const stays: Stay[] = [
  {
    tag: 'Luxury Stay',
    name: 'Premium Kerala Resort',
    place: 'Kochi, Kerala',
    blurb: 'Relax in elegant surroundings with comfortable rooms and a peaceful atmosphere.',
    image: '/images/hotel1.jpg',
  },
  {
    tag: 'Resort Stay',
    name: 'Backwater Resort',
    place: 'Alleppey, Kerala',
    blurb: "Enjoy a relaxing stay surrounded by Kerala's beautiful backwaters and natural scenery.",
    image: '/images/hotel2.jpg',
  },
  {
    tag: 'Nature Stay',
    name: 'Munnar Mountain Resort',
    place: 'Munnar, Kerala',
    blurb: 'Wake up to misty hills, fresh mountain air and the peaceful beauty of Munnar.',
    image: '/images/hotel3.webp',
  },
  {
    tag: 'Beach Stay',
    name: 'Kerala Beach Resort',
    place: 'Kovalam, Kerala',
    blurb: 'Unwind by the coast with comfortable rooms, beautiful views and a relaxing beach atmosphere.',
    image: '/images/hotel4.jpg',
  },
];

export const whyUs = [
  {
    title: 'We plan around you.',
    body: 'Personalised itineraries designed around your interests, time and travel style.',
  },
  {
    title: 'Kerala, authentically.',
    body: 'Discover local experiences, traditions, cuisine and destinations beyond the usual routes.',
  },
  {
    title: 'Beyond the itinerary.',
    body: 'From peaceful backwaters to misty hills, every journey is planned for meaningful memories.',
  },
  {
    title: 'Support throughout.',
    body: 'Reliable assistance before and during your Kerala holiday, whenever you need it.',
  },
];

export const testimonials = [
  {
    rating: 5.0,
    quote: 'Our Kerala honeymoon was beautifully organised. Munnar and Alleppey were unforgettable.',
    name: 'Rahul & Ananya',
    city: 'Mumbai',
  },
  {
    rating: 5.0,
    quote: 'Everything was well planned from the hotel to transportation. The children enjoyed every part of the trip.',
    name: 'Priya Family',
    city: 'Bengaluru',
  },
  {
    rating: 5.0,
    quote: 'A wonderful Kerala experience with a perfect balance of sightseeing, relaxation and local experiences.',
    name: 'Arjun',
    city: 'Delhi',
  },
];

export const faqs = [
  {
    q: 'What is the best time to visit Kerala?',
    a: 'Kerala can be visited throughout the year. The best period depends on the destinations and experiences you want to include in your holiday.',
  },
  {
    q: 'Can I customise my Kerala tour package?',
    a: 'Yes. You can customise destinations, duration, accommodation, transportation and experiences according to your requirements.',
  },
  {
    q: 'Which places should I visit in Kerala?',
    a: 'Popular destinations include Munnar, Alleppey, Thekkady, Wayanad, Kochi, Kovalam and Kumarakom. Your itinerary can be planned around your interests.',
  },
  {
    q: 'Do you provide family and honeymoon packages?',
    a: 'Yes. Kerala holidays can be planned for couples, families, friends, groups and private customised tours.',
  },
];

export const enquiryPackages = [
  'Kerala Family Holiday',
  'Kerala Honeymoon Package',
  'Kerala Backwater Tour',
  'Kerala Hill Station Tour',
  'Custom Kerala Tour',
];

export const travellerOptions = [
  '1–2 Travellers', '3–5 Travellers', '6–10 Travellers', '10+ Travellers',
];
