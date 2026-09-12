// Tour packages. `sourceItinerary: true` marks the day plan published on the
// original site; the others are marked as sample plans in the UI because only
// their route, duration and price are published.

export type Day = {
  title: string;
  summary: string;
  items: string[];
};

export type Pkg = {
  slug: string;
  name: string;
  kicker: string;
  nights: string;
  days: number;
  route: string;
  places: string[];
  price: number;
  image: string;
  theme: 'Family' | 'Honeymoon' | 'Backwaters' | 'Hills & Nature';
  description: string;
  sourceItinerary: boolean;
  itinerary: Day[];
  options: { tag: string; label: string; name: string; nights: string[]; note: string }[];
  inclusions: { icon: string; title: string; items: string[] }[];
};

const transport = {
  icon: '🚗',
  title: 'Transportation',
  items: [
    'Pickup & Drop from Cochin Airport / Railway Station',
    'Private AC Vehicle',
    'Driver Allowance',
    'Fuel & Parking',
    'Toll & Parking Charges',
  ],
};

const optionalActivities = {
  icon: '🎭',
  title: 'Optional Activities',
  items: ['Elephant Ride – Optional', 'Kathakali – Optional', 'Kalaripayattu – Optional'],
};

export const packages: Pkg[] = [
  {
    slug: 'kerala-nature-backwater-tour',
    name: 'Kerala Nature & Backwater Tour',
    kicker: 'Nature, Hills & Backwaters',
    nights: '5 Days & 4 Nights',
    days: 5,
    route: 'Munnar – Thekkady – Alappuzha',
    places: ['Munnar', 'Thekkady', 'Alappuzha'],
    price: 15000,
    image: '/images/itenary AMT.png',
    theme: 'Hills & Nature',
    description:
      'Explore the misty hills of Munnar, discover the wildlife and spice plantations of Thekkady, and experience the peaceful backwaters of Alappuzha.',
    sourceItinerary: true,
    itinerary: [
      {
        title: 'Arrival & Transfer to Munnar',
        summary:
          "Arrive in Kerala and begin your scenic journey towards Munnar, one of Kerala's most beautiful hill stations.",
        items: [
          'Pickup from Cochin Airport / Railway Station',
          'Drive to Munnar',
          'Visit Cheeyappara Waterfalls',
          'Visit Valara Waterfalls',
          'Visit Spice Plantation',
          'Check-in at hotel',
          'Overnight stay at Munnar',
        ],
      },
      {
        title: 'Munnar Sightseeing',
        summary:
          "Spend the day exploring Munnar's scenic attractions, tea plantations, viewpoints, lakes and beautiful landscapes.",
        items: [
          'Mattupetty Dam',
          'Echo Point',
          'Kundala Lake',
          'Tea Museum',
          'Rose Garden',
          'Eravikulam National Park',
          'Overnight stay at Munnar',
        ],
      },
      {
        title: 'Munnar to Thekkady',
        summary:
          "Travel from Munnar to Thekkady and experience Kerala's wildlife, spice plantations and cultural attractions.",
        items: [
          'Breakfast at hotel',
          'Drive to Thekkady',
          'Visit Periyar Lake',
          'Enjoy Spice Plantation Tour',
          'Elephant Ride – Optional',
          'Kathakali – Optional',
          'Kalaripayattu – Optional',
          'Overnight stay at Thekkady',
        ],
      },
      {
        title: 'Thekkady to Alappuzha',
        summary:
          'Travel to Alappuzha and enjoy the famous Kerala backwaters aboard a traditional houseboat.',
        items: [
          'Breakfast at hotel',
          'Drive to Alappuzha',
          'Check-in to houseboat',
          'Enjoy backwater cruise',
          'Visit Alleppey Beach',
          'Enjoy sunset view',
          'Overnight stay in Houseboat',
        ],
      },
      {
        title: 'Alleppey to Cochin Departure',
        summary:
          'Enjoy your final morning in Kerala before checking out and proceeding to Cochin for your departure.',
        items: [
          'Breakfast at houseboat',
          'Check-out from houseboat',
          'Drive to Cochin',
          'Drop at Cochin Airport / Railway Station',
        ],
      },
    ],
    options: [
      {
        tag: 'Package 1',
        label: 'Economy',
        name: 'Kerala Classic Getaway',
        nights: ['2 Nights Munnar', '1 Night Thekkady', '1 Night Alleppey'],
        note: 'Ideal for budget travellers looking for a comfortable and scenic Kerala experience.',
      },
      {
        tag: 'Package 2',
        label: 'Deluxe Houseboat Experience',
        name: 'Kerala Premium Escape',
        nights: ['2 Nights Munnar', '1 Night Thekkady', '1 Night Deluxe Houseboat Alleppey'],
        note: 'Ideal for travellers seeking a premium experience with a memorable houseboat stay.',
      },
    ],
    inclusions: [
      transport,
      {
        icon: '🏨',
        title: 'Accommodation',
        items: [
          '4 Nights Accommodation',
          '2 Nights Munnar',
          '1 Night Thekkady',
          '1 Night Alleppey Houseboat',
        ],
      },
      {
        icon: '🍴',
        title: 'Meals Included',
        items: ['Breakfast – Every Day', 'Dinner – Day 1 to Day 4', 'Day 5 – Breakfast'],
      },
      optionalActivities,
    ],
  },
  {
    slug: 'kerala-family-holiday',
    name: 'Kerala Family Holiday',
    kicker: 'Hills, Wildlife & Houseboat',
    nights: '5 Days / 4 Nights',
    days: 5,
    route: 'Munnar – Thekkady – Alleppey',
    places: ['Munnar', 'Thekkady', 'Alleppey'],
    price: 14999,
    image: '/images/kerala-family-holiday.jpg',
    theme: 'Family',
    description:
      'A comfortable, well-paced Kerala holiday for families — hill views in Munnar, spice plantations and wildlife in Thekkady, and a houseboat night on the Alleppey backwaters.',
    sourceItinerary: false,
    itinerary: [
      {
        title: 'Arrival & Transfer to Munnar',
        summary: 'Arrive at Cochin and drive up to the tea hills of Munnar, stopping at waterfalls along the way.',
        items: [
          'Pickup from Cochin Airport / Railway Station',
          'Drive to Munnar',
          'Visit Cheeyappara Waterfalls',
          'Visit Valara Waterfalls',
          'Check-in at hotel',
          'Overnight stay at Munnar',
        ],
      },
      {
        title: 'Munnar Sightseeing',
        summary: 'A full day around Munnar’s lakes, viewpoints and tea gardens — easy stops that suit all ages.',
        items: [
          'Mattupetty Dam',
          'Echo Point',
          'Kundala Lake',
          'Tea Museum',
          'Rose Garden',
          'Overnight stay at Munnar',
        ],
      },
      {
        title: 'Munnar to Thekkady',
        summary: 'Travel to Thekkady for spice plantations, Periyar Lake and Kerala’s cultural performances.',
        items: [
          'Breakfast at hotel',
          'Drive to Thekkady',
          'Visit Periyar Lake',
          'Spice Plantation Tour',
          'Elephant Ride – Optional',
          'Kathakali – Optional',
          'Overnight stay at Thekkady',
        ],
      },
      {
        title: 'Thekkady to Alleppey',
        summary: 'Board a traditional houseboat and cruise the backwaters as the sun sets.',
        items: [
          'Breakfast at hotel',
          'Drive to Alleppey',
          'Check-in to houseboat',
          'Enjoy backwater cruise',
          'Enjoy sunset view',
          'Overnight stay in Houseboat',
        ],
      },
      {
        title: 'Alleppey to Cochin Departure',
        summary: 'A final backwater morning before your transfer back to Cochin.',
        items: [
          'Breakfast at houseboat',
          'Check-out from houseboat',
          'Drive to Cochin',
          'Drop at Cochin Airport / Railway Station',
        ],
      },
    ],
    options: [
      {
        tag: 'Package 1',
        label: 'Economy',
        name: 'Family Classic',
        nights: ['2 Nights Munnar', '1 Night Thekkady', '1 Night Alleppey'],
        note: 'Comfortable family rooms with a scenic, easy-paced route.',
      },
      {
        tag: 'Package 2',
        label: 'Deluxe Houseboat Experience',
        name: 'Family Premium',
        nights: ['2 Nights Munnar', '1 Night Thekkady', '1 Night Deluxe Houseboat Alleppey'],
        note: 'Upgraded stays with a deluxe houseboat night on the backwaters.',
      },
    ],
    inclusions: [
      transport,
      {
        icon: '🏨',
        title: 'Accommodation',
        items: ['4 Nights Accommodation', '2 Nights Munnar', '1 Night Thekkady', '1 Night Alleppey Houseboat'],
      },
      {
        icon: '🍴',
        title: 'Meals Included',
        items: ['Breakfast – Every Day', 'Dinner – Day 1 to Day 4', 'Day 5 – Breakfast'],
      },
      optionalActivities,
    ],
  },
  {
    slug: 'kerala-honeymoon-escape',
    name: 'Kerala Honeymoon Escape',
    kicker: 'Romance in the Hills & Backwaters',
    nights: '6 Days / 5 Nights',
    days: 6,
    route: 'Munnar – Thekkady – Kumarakom',
    places: ['Munnar', 'Thekkady', 'Kumarakom'],
    price: 18999,
    image: '/images/kerala-honeymoon-escape.jpg',
    theme: 'Honeymoon',
    description:
      'A slow, romantic Kerala escape — misty mornings in Munnar, spice-scented Thekkady and quiet lakeside evenings at Kumarakom.',
    sourceItinerary: false,
    itinerary: [
      {
        title: 'Arrival & Transfer to Munnar',
        summary: 'Arrive at Cochin and drive to Munnar through waterfalls and spice country.',
        items: [
          'Pickup from Cochin Airport / Railway Station',
          'Drive to Munnar',
          'Visit Cheeyappara Waterfalls',
          'Visit Spice Plantation',
          'Check-in at hotel',
          'Overnight stay at Munnar',
        ],
      },
      {
        title: 'Munnar Sightseeing',
        summary: 'Tea gardens, lakes and viewpoints at an unhurried pace.',
        items: ['Mattupetty Dam', 'Echo Point', 'Kundala Lake', 'Tea Museum', 'Overnight stay at Munnar'],
      },
      {
        title: 'Munnar at Leisure',
        summary: 'A free day for the Rose Garden, Eravikulam National Park or simply the view from your room.',
        items: [
          'Breakfast at hotel',
          'Rose Garden',
          'Eravikulam National Park – Optional',
          'Leisure time at resort',
          'Overnight stay at Munnar',
        ],
      },
      {
        title: 'Munnar to Thekkady',
        summary: 'Periyar Lake, spice plantations and an evening of Kerala’s classical arts.',
        items: [
          'Breakfast at hotel',
          'Drive to Thekkady',
          'Visit Periyar Lake',
          'Spice Plantation Tour',
          'Kathakali – Optional',
          'Kalaripayattu – Optional',
          'Overnight stay at Thekkady',
        ],
      },
      {
        title: 'Thekkady to Kumarakom',
        summary: 'Continue to the shores of Vembanad Lake for a calm backwater evening.',
        items: [
          'Breakfast at hotel',
          'Drive to Kumarakom',
          'Check-in at backwater resort',
          'Enjoy backwater cruise',
          'Enjoy sunset view',
          'Overnight stay at Kumarakom',
        ],
      },
      {
        title: 'Kumarakom to Cochin Departure',
        summary: 'A last lakeside breakfast before your transfer to Cochin.',
        items: [
          'Breakfast at resort',
          'Check-out from resort',
          'Drive to Cochin',
          'Drop at Cochin Airport / Railway Station',
        ],
      },
    ],
    options: [
      {
        tag: 'Package 1',
        label: 'Economy',
        name: 'Honeymoon Classic',
        nights: ['3 Nights Munnar', '1 Night Thekkady', '1 Night Kumarakom'],
        note: 'A comfortable romantic getaway with the essential Kerala highlights.',
      },
      {
        tag: 'Package 2',
        label: 'Deluxe Experience',
        name: 'Honeymoon Premium',
        nights: ['3 Nights Munnar', '1 Night Thekkady', '1 Night Deluxe Lakeside Kumarakom'],
        note: 'Premium rooms, lakeside views and a private candlelight dinner on request.',
      },
    ],
    inclusions: [
      transport,
      {
        icon: '🏨',
        title: 'Accommodation',
        items: ['5 Nights Accommodation', '3 Nights Munnar', '1 Night Thekkady', '1 Night Kumarakom'],
      },
      {
        icon: '🍴',
        title: 'Meals Included',
        items: ['Breakfast – Every Day', 'Dinner – Day 1 to Day 5', 'Day 6 – Breakfast'],
      },
      optionalActivities,
    ],
  },
  {
    slug: 'kerala-backwater-experience',
    name: 'Kerala Backwater Experience',
    kicker: 'Heritage & Backwaters',
    nights: '4 Days / 3 Nights',
    days: 4,
    route: 'Kochi – Alleppey – Kumarakom',
    places: ['Kochi', 'Alleppey', 'Kumarakom'],
    price: 11999,
    image: '/images/kerala-backwater-experience.jpg',
    theme: 'Backwaters',
    description:
      'A short, restful Kerala break — colonial Fort Kochi, a night aboard an Alleppey houseboat and lakeside calm at Kumarakom.',
    sourceItinerary: false,
    itinerary: [
      {
        title: 'Arrival & Fort Kochi',
        summary: 'Arrive at Cochin and spend the day among Fort Kochi’s streets, churches and Chinese fishing nets.',
        items: [
          'Pickup from Cochin Airport / Railway Station',
          'Check-in at hotel',
          'Explore Fort Kochi',
          'Chinese Fishing Nets',
          'Kathakali – Optional',
          'Overnight stay at Kochi',
        ],
      },
      {
        title: 'Kochi to Alleppey',
        summary: 'Board a traditional houseboat and cruise the Alleppey backwaters.',
        items: [
          'Breakfast at hotel',
          'Drive to Alleppey',
          'Check-in to houseboat',
          'Enjoy backwater cruise',
          'Visit Alleppey Beach',
          'Enjoy sunset view',
          'Overnight stay in Houseboat',
        ],
      },
      {
        title: 'Alleppey to Kumarakom',
        summary: 'Continue along Vembanad Lake to Kumarakom for a quiet evening by the water.',
        items: [
          'Breakfast at houseboat',
          'Check-out from houseboat',
          'Drive to Kumarakom',
          'Check-in at backwater resort',
          'Leisure time by the lake',
          'Overnight stay at Kumarakom',
        ],
      },
      {
        title: 'Kumarakom to Cochin Departure',
        summary: 'A final backwater morning before your transfer back to Cochin.',
        items: [
          'Breakfast at resort',
          'Check-out from resort',
          'Drive to Cochin',
          'Drop at Cochin Airport / Railway Station',
        ],
      },
    ],
    options: [
      {
        tag: 'Package 1',
        label: 'Economy',
        name: 'Backwater Classic',
        nights: ['1 Night Kochi', '1 Night Alleppey Houseboat', '1 Night Kumarakom'],
        note: 'A compact backwater break, ideal for a long weekend.',
      },
      {
        tag: 'Package 2',
        label: 'Deluxe Houseboat Experience',
        name: 'Backwater Premium',
        nights: ['1 Night Kochi', '1 Night Deluxe Houseboat Alleppey', '1 Night Lakeside Kumarakom'],
        note: 'Upgraded houseboat and lakeside resort for a more indulgent stay.',
      },
    ],
    inclusions: [
      transport,
      {
        icon: '🏨',
        title: 'Accommodation',
        items: ['3 Nights Accommodation', '1 Night Kochi', '1 Night Alleppey Houseboat', '1 Night Kumarakom'],
      },
      {
        icon: '🍴',
        title: 'Meals Included',
        items: ['Breakfast – Every Day', 'Dinner – Day 1 to Day 3', 'Day 4 – Breakfast'],
      },
      optionalActivities,
    ],
  },
];

export const packageHighlights = [
  { icon: '🚗', title: 'Pickup & Drop', body: 'Cochin Airport / Railway Station' },
  { icon: '🛏', title: 'Comfortable Stay', body: 'Comfortable accommodation throughout the tour' },
  { icon: '📷', title: 'Scenic Sightseeing', body: "Explore Kerala's beautiful destinations" },
  { icon: '🍴', title: 'Delicious Food', body: 'Selected meals included' },
  { icon: '✓', title: 'Safe & Memorable', body: 'Enjoy a comfortable Kerala journey' },
];
