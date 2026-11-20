/**
 * Tent House — the only file a client needs to edit.
 * Business name, contact details, services, packages, gallery captions,
 * testimonials, FAQ, calls to action, and SEO all live here.
 * Pages and components read this object. Do not paste this copy into components.
 * Image paths point at files in public/images. Replace those files, or change the paths.
 */

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Service = {
  id: string;
  cardTitle: string;
  cardSummary: string;
  footerLabel: string;
  image: string;
  imageAlt: string;
  showOnHome: boolean;
  showInFooter: boolean;
  detail: {
    eyebrow: string;
    title: string;
    body: string;
    points: string[];
    enquireLabel: string;
    /** WhatsApp message. Null sends the visitor to the enquiry form instead. */
    enquireMessage: string | null;
  } | null;
};

export type GalleryItem = {
  id: string;
  title: string;
  caption: string;
  category: "tent" | "mandap" | "festive" | "corporate";
  homeCategoryLabel: string;
  pageCategoryLabel: string;
  image: string;
  imageAlt: string;
  showOnHome: boolean;
  showOnPage: boolean;
  homeColumns: 7 | 5 | 4;
  homeSize: "large" | "compact";
};

export type GalleryFilter = {
  id: "all" | GalleryItem["category"];
  label: string;
};

export type PromiseItem = {
  icon: string;
  title: string;
  body: string;
};

export type Step = {
  number: string;
  title: string;
  body: string;
};

export type Package = {
  id: string;
  name: string;
  guests: string;
  price: string;
  summary: string;
  includes: string[];
  enquireLabel: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FormCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  requirementsLabel: string;
  requirementsPlaceholder: string;
  success: string;
};

export const business = {
  name: "Tent House",
  monogram: "TH",
  tagline: "Tent House & Event Design",
  description:
    "Tent House designs weatherproof pavilions, ceremony mandaps, florals, and guest seating for weddings and private celebrations.",
  city: "Your City",
  phoneDisplay: "+91 98765 43210",
  phoneTel: "+919876543210",
  email: "hello@tenthous.example",
  whatsappNumber: "919876543210",
  whatsappDisplay: "+91 98765 43210",
  addressLine: "12 Celebration Lane, Green Park",
  country: "India",
  countryCode: "IN",
  hours: "Monday – Sunday: 9:00 AM – 9:00 PM",
  hoursShort: "Open Every Day: 9 AM – 9 PM",
  openingHoursSchema: "Mo-Su 09:00-21:00",
  priceRange: "$$$",
  siteUrl: "https://tent-house.example",
  mapsUrl: "https://maps.google.com/?q=Your+City",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Your%20City&z=12&output=embed",
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
  ] satisfies SocialLink[],

  seo: {
    title:
      "Tent House — Premium Tent House & Event Decoration | Weddings & Celebrations",
    description:
      "Wedding tents, mandap decoration, floral styling, and complete event setups for celebrations in Your City. Request a quote from Tent House.",
    pages: {
      about: {
        title: "About Tent House — Heritage Craftsmanship",
        description:
          "Meet Tent House, a tent and event styling studio for weddings, ceremonies, and private celebrations in Your City.",
      },
      services: {
        title: "Tent, Mandap & Event Services — Tent House",
        description:
          "German-style pavilions, sacred mandaps, guest furniture, florals, and lighting from Tent House.",
      },
      gallery: {
        title: "Event Gallery — Tent House",
        description:
          "Sample pavilion, mandap, haldi, sangeet, and corporate setups. Replace these photos with your own events.",
      },
      contact: {
        title: "Contact & Quote — Tent House",
        description:
          "Call, WhatsApp, or send an enquiry to plan a tent and decoration setup with Tent House in Your City.",
      },
      privacy: {
        title: "Privacy Policy — Tent House",
        description:
          "Placeholder privacy notice for enquiry details collected by Tent House.",
      },
      terms: {
        title: "Terms of Service — Tent House",
        description:
          "Placeholder terms for bookings and quotations from Tent House.",
      },
    },
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavLink[],

  cta: {
    getQuote: "Get a Quote",
    getQuoteShort: "Quote",
    planEvent: "Plan Your Event",
    exploreWork: "Explore Our Work",
    enquireWhatsapp: "Enquire on WhatsApp",
    callNow: "Call Now",
    aboutUs: "About Us",
    enquireCustom: "Enquire For Custom Requirements",
    submitEnquiry: "Submit Event Enquiry",
    whatsappUs: "WhatsApp Us",
    sendEnquiry: "Send Enquiry",
    enquireSetup: "Enquire For This Setup",
    viewGoogle: "View Verified Google Business Profile",
    skipToContent: "Skip to content",
    callAria: "Direct phone call",
    whatsappAria: "Chat on WhatsApp",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    closeLightbox: "Close gallery preview",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    quickContact: "Quick contact actions",
  },

  whatsappMessages: {
    plan: "Hello Tent House, I would like to enquire about event decoration and tent arrangements for my upcoming celebration.",
    quote:
      "Hi Tent House, I would like to discuss an event setup and request a quote.",
    floating:
      "Hello Tent House, I would like to enquire about event decoration and tent arrangements.",
    lightbox:
      "Hello Tent House, I saw the {title} setup in your gallery and would like to enquire about it.",
    package:
      "Hello Tent House, I would like a quote for the {package} package.",
    about:
      "Hello Tent House, I would like to discuss an event.",
    enquiry:
      "{intro}\n\nName: {name}\nPhone: {phone}\nEvent: {eventType}\nDate: {date}\nVenue: {location}\nNotes: {requirements}",
    notesEmpty: "Not specified",
  },

  hero: {
    eyebrow: "Weddings • Celebrations • Events",
    title: "Creating Beautiful Spaces for Unforgettable Celebrations",
    subtitle:
      "From elegant wedding setups to beautifully designed celebrations, we bring your special occasions to life with bespoke craftsmanship, royal canopies, and careful execution in Your City.",
    image: "/images/hero.jpg",
    imageAlt:
      "Evening celebration tables under warm light, a stand-in for a luxury tent pavilion",
  },

  philosophy: {
    eyebrow: "Our Philosophy",
    title: "Every Celebration Deserves a Beautiful Setting",
    paragraphs: [
      "At Tent House, we believe that grand celebrations are treasured milestones. Guided by a dedication to aesthetics and structural grace, our team transforms open lawns, banquet courtyards, and family estates into immersive pavilions.",
      "Whether curating an intimate ceremony, a floral mandap, or an expansive weatherproof tent, every detail is planned with care, reliability, and precision.",
    ],
    highlights: [
      { title: "Bespoke", text: "Custom Styling" },
      { title: "End-to-End", text: "Seamless Service" },
    ],
    image: "/images/artisans.jpg",
    imageAlt: "Floral and table styling prepared for a celebration",
    captionTitle: "Artisanal Dedication",
    captionBody: "Every drape, pillar, and floral string placed with deliberate care.",
  },

  servicesIntro: {
    eyebrow: "What We Offer",
    title: "Our Curated Services",
    intro:
      "Comprehensive infrastructure, luxury tent installations, and bespoke decor tailored to your venue and celebration scale.",
  },

  serviceExtras: {
    text: "Also Providing: Furniture & Seating, Private Celebrations, Corporate Events & Complete Turnkey Setups",
  },

  services: [
    {
      id: "tents",
      cardTitle: "Tent Arrangements",
      cardSummary:
        "Grand royal hangars, waterproof shamianas, elegant canopies, and tailored outdoor pavilions for grand gatherings.",
      footerLabel: "Wedding Tent Arrangements",
      image: "/images/tent.jpg",
      imageAlt: "Banquet-style event space used as a placeholder for a wedding tent",
      showOnHome: true,
      showInFooter: true,
      detail: {
        eyebrow: "Infrastructure",
        title: "Wedding Tent Arrangements & Pavilions",
        body: "We provide clear-span pavilions, waterproof aluminium tents, and royal shamianas. Structures are planned for sudden rain while keeping the interior calm and ceremonial.",
        points: [
          "Air-conditioned and climate-controlled tent setups",
          "Pleated ceiling linings and drapery",
          "Fire-retardant, certified fabrics",
        ],
        enquireLabel: "Enquire About Tent Sizing & Specs",
        enquireMessage:
          "Hello Tent House, I am enquiring about tent arrangements.",
      },
    },
    {
      id: "mandap",
      cardTitle: "Mandap & Stage Decor",
      cardSummary:
        "Sacred mandap sanctuaries, reception backdrops, floral domes, and traditional stage aesthetics.",
      footerLabel: "Stage & Mandap Decoration",
      image: "/images/mandap.jpg",
      imageAlt: "Ceremony aisle and floral arch used as a mandap placeholder",
      showOnHome: true,
      showInFooter: true,
      detail: {
        eyebrow: "Sacred Ceremonies",
        title: "Wedding Stage & Sacred Mandap Decoration",
        body: "The mandap is the heart of the vows. We build open-air mandaps, dome structures, and reception stages with floral pillars, seating for the couple, and a backdrop planned for photographs.",
        points: [
          "Custom seating for the couple and family",
          "Floral pillars and ceremony setups",
          "Photo backdrops planned for the wedding album",
        ],
        enquireLabel: "Enquire About Mandap Designs",
        enquireMessage: "Hello Tent House, I am enquiring about mandap setups.",
      },
    },
    {
      id: "floral",
      cardTitle: "Floral Styling",
      cardSummary:
        "Fresh florals, jasmine strings, marigold draping, and table arrangements prepared for each ritual.",
      footerLabel: "Bespoke Floral Decoration",
      image: "/images/floral.jpg",
      imageAlt: "Yellow flowers arranged for a daytime celebration",
      showOnHome: true,
      showInFooter: true,
      detail: null,
    },
    {
      id: "lighting",
      cardTitle: "Lighting & Ambience",
      cardSummary:
        "Fairy-light canopies, tree washes, chandeliers, and mood lighting designed for the evening.",
      footerLabel: "Lighting & Sound Ambience",
      image: "/images/lighting.jpg",
      imageAlt: "Warm string lights over an outdoor gathering",
      showOnHome: true,
      showInFooter: true,
      detail: null,
    },
    {
      id: "furniture",
      cardTitle: "Furniture & Seating",
      cardSummary:
        "Guest chairs, lounge seating, linens, and coordinated tables for rituals through dinner.",
      footerLabel: "Complete Event Arrangements",
      image: "/images/furniture.jpg",
      imageAlt: "Long banquet table set for a celebration dinner",
      showOnHome: false,
      showInFooter: true,
      detail: {
        eyebrow: "Comfort & Hospitality",
        title: "Furniture & Seating Arrangements",
        body: "Guest furniture for the full day: ceremony chairs, lounge seating, sofa clusters, and table linens chosen to match the tent and the theme.",
        points: [
          "Layouts for intimate rituals through large dinners",
          "Coordinated upholstery, covers, and table runners",
        ],
        enquireLabel: "Request Furniture Catalog",
        enquireMessage: null,
      },
    },
  ] satisfies Service[],

  gallery: {
    homeEyebrow: "Our Gallery",
    homeTitle: "Featured Celebrations & Setups",
    pageEyebrow: "Visual Inspiration",
    pageTitle: "Our Curated Event Portfolio",
    pageIntro:
      "Browse sample wedding pavilions, ceremonial mandaps, festive backdrops, and corporate gatherings. Replace these photographs with your own events.",
    homeNote:
      "Sample photographs are shown as placeholders. Replace the files in public/images with real setups by Tent House.",
    pageNote:
      "Sample photographs. Select any image to read the caption and start a WhatsApp enquiry. Replace them with your previous events.",
    empty: "No setups in this category yet. Choose another filter, or send an enquiry and we will share relevant work.",
    homeFilters: [
      { id: "all", label: "All Setups" },
      { id: "tent", label: "Tent Setups" },
      { id: "mandap", label: "Stage & Mandap" },
      { id: "festive", label: "Haldi & Mehendi" },
    ] satisfies GalleryFilter[],
    pageFilters: [
      { id: "all", label: "All Setups" },
      { id: "tent", label: "Tents & Canopies" },
      { id: "mandap", label: "Mandap & Stage" },
      { id: "festive", label: "Haldi & Sangeet" },
      { id: "corporate", label: "Corporate & Gala" },
    ] satisfies GalleryFilter[],
    items: [
      {
        id: "pavilion",
        title: "Grand Royal Tent Pavilion",
        caption:
          "A full-span weatherproof pavilion with draped canopies and warm evening light.",
        category: "tent",
        homeCategoryLabel: "Tent Setups",
        pageCategoryLabel: "Tents & Canopies",
        image: "/images/hero.jpg",
        imageAlt: "Reception tables glowing under warm evening light",
        showOnHome: true,
        showOnPage: true,
        homeColumns: 7,
        homeSize: "large",
      },
      {
        id: "haldi",
        title: "Sunshine Marigold Courtyard",
        caption:
          "A daytime celebration setting with fresh flowers and a relaxed table layout.",
        category: "festive",
        homeCategoryLabel: "Haldi & Mehendi",
        pageCategoryLabel: "Haldi & Sangeet",
        image: "/images/haldi.jpg",
        imageAlt: "Flower-covered table set for a daytime celebration",
        showOnHome: true,
        showOnPage: true,
        homeColumns: 5,
        homeSize: "large",
      },
      {
        id: "stage",
        title: "Imperial Reception Stage",
        caption:
          "A reception stage with a floral arch and seating arranged for photographs.",
        category: "mandap",
        homeCategoryLabel: "Stage Decoration",
        pageCategoryLabel: "Mandap & Stage",
        image: "/images/stage.jpg",
        imageAlt: "Floral ceremony arch and aisle",
        showOnHome: true,
        showOnPage: true,
        homeColumns: 4,
        homeSize: "compact",
      },
      {
        id: "lotus",
        title: "Sacred Lotus Mandap",
        caption:
          "A ceremony mandap framed with flowers and seating for the vows.",
        category: "mandap",
        homeCategoryLabel: "Mandap Architecture",
        pageCategoryLabel: "Mandap & Stage",
        image: "/images/mandap.jpg",
        imageAlt: "Wedding ceremony path leading to a floral arch",
        showOnHome: true,
        showOnPage: true,
        homeColumns: 4,
        homeSize: "compact",
      },
      {
        id: "starlight",
        title: "Starlight Lawn Canopy",
        caption: "Warm fairy lights suspended over an outdoor celebration lawn.",
        category: "tent",
        homeCategoryLabel: "Atmospheric Lighting",
        pageCategoryLabel: "Tents & Canopies",
        image: "/images/lighting.jpg",
        imageAlt: "Strings of warm lights over an outdoor lawn",
        showOnHome: true,
        showOnPage: false,
        homeColumns: 4,
        homeSize: "compact",
      },
      {
        id: "sangeet",
        title: "Dynamic Sangeet Stage",
        caption:
          "An evening stage and dance floor washed in gold light for a sangeet.",
        category: "festive",
        homeCategoryLabel: "Haldi & Mehendi",
        pageCategoryLabel: "Haldi & Sangeet",
        image: "/images/sangeet.jpg",
        imageAlt: "Stage lighting at an evening performance",
        showOnHome: false,
        showOnPage: true,
        homeColumns: 4,
        homeSize: "compact",
      },
      {
        id: "gala",
        title: "Executive Gala Hangar",
        caption:
          "A large clear-span interior dressed for a corporate dinner or gala.",
        category: "corporate",
        homeCategoryLabel: "Tent Setups",
        pageCategoryLabel: "Corporate & Gala",
        image: "/images/corporate.jpg",
        imageAlt: "Guests seated at a formal indoor gathering",
        showOnHome: false,
        showOnPage: true,
        homeColumns: 4,
        homeSize: "compact",
      },
    ] satisfies GalleryItem[],
  },

  promises: {
    eyebrow: "Our Promise",
    title: "Why Discerning Families Choose Us",
    intro:
      "We understand the weight of your celebration. Punctual crews, sound materials, and careful styling are how we keep the day calm.",
    items: [
      {
        icon: "auto_awesome",
        title: "Beautiful & Thoughtful Setups",
        body: "Every tent drape, flower arrangement, and light is placed to support your guests and your photographs.",
      },
      {
        icon: "workspace_premium",
        title: "Attention to Detail",
        body: "Clean fabrics, secure anchors, and concealed wiring are held to the same standard as the decoration you see.",
      },
      {
        icon: "schedule",
        title: "Reliable & Punctual Execution",
        body: "Setups are handed over ahead of the ceremony and guest arrival, so the family is not waiting on the tent.",
      },
      {
        icon: "palette",
        title: "Customised Options",
        body: "Colour, heritage themes, or a quieter modern palette are planned around your venue and family traditions.",
      },
      {
        icon: "groups",
        title: "Experienced Craftsmen",
        body: "A trained ground crew works with your venue team on structure, florals, and the order of the day.",
      },
      {
        icon: "support_agent",
        title: "End-to-End Event Support",
        body: "From the site visit and measurements to technicians on standby through the rituals.",
      },
    ] satisfies PromiseItem[],
  },

  steps: {
    eyebrow: "Seamless Process",
    title: "Four Steps to Your Dream Celebration",
    intro:
      "Planning your event infrastructure with us is transparent, personal, and straightforward.",
    items: [
      {
        number: "01",
        title: "Share Requirements",
        body: "Message us on WhatsApp, call, or use the form with your date, venue, guest count, and ideas.",
      },
      {
        number: "02",
        title: "Discuss Your Event",
        body: "We review the venue, suggest a layout, share references, and send a clear quotation.",
      },
      {
        number: "03",
        title: "Finalise Your Setup",
        body: "Confirm themes, fabrics, stage details, and lighting. The crew then schedules installation.",
      },
      {
        number: "04",
        title: "Celebrate with Ease",
        body: "Arrive to a finished venue, with a discreet on-ground team if you want them there.",
      },
    ] satisfies Step[],
  },

  finalCta: {
    eyebrow: "Begin Planning Today",
    title: "Let's Make Your Next Celebration Special",
    body: "Tell us about your event and let's plan something beautiful together. We can share a quote, references, and a venue visit.",
    image: "/images/cta.jpg",
    imageAlt: "Soft evening lights over a celebration space",
  },

  contactShared: {
    addressLabel: "Business Address",
    phoneLabel: "Direct Phone",
    phoneLabelAlt: "Phone Number",
    whatsappLabel: "WhatsApp Enquiries",
    whatsappLabelAlt: "WhatsApp Line",
    emailLabel: "Email",
    hoursLabel: "Business Hours",
    hoursLabelAlt: "Working Hours",
  },

  homeContact: {
    eyebrow: "Connect With Us",
    title: "Contact & Location Details",
    intro:
      "Visit the office, reach out on WhatsApp, or send an enquiry below to discuss dates and availability.",
    panelTitle: "Direct Contact",
    mapHeading: "Location Map",
  },

  contactPage: {
    eyebrow: "Direct Enquiries & Location",
    title: "Plan Your Event with Us",
    intro:
      "Whether you have final event dates or are still choosing them, the team can share layouts and a written quote.",
    panelTitle: "Office & Workshop Location",
    mapHeading: "Interactive Map",
  },

  formFields: {
    nameLabel: "Your Name *",
    namePlaceholder: "e.g. Anika Sharma",
    phoneLabel: "Phone Number (WhatsApp) *",
    phonePlaceholder: "+91 98765 43210",
    eventTypeLabel: "Event Type *",
    eventTypePlaceholder: "Select Event Type",
    dateLabel: "Event Date *",
    locationLabel: "Event Location / Venue Address *",
    locationPlaceholder: "e.g. Farmhouse / Lawn Name, Your City",
    eventTypes: [
      "Wedding Reception",
      "Mandap & Sacred Rituals",
      "Haldi / Mehendi / Sangeet",
      "Tent House & Clear-Span Pavilion",
      "Private / Birthday Celebration",
      "Corporate Event",
    ],
  },

  forms: {
    home: {
      eyebrow: "Quick Quote",
      title: "Share Your Event Requirements",
      intro:
        "Complete the form below. We will reply with a personal quote by WhatsApp or phone. Nothing is sent to a server — you will also get a WhatsApp message ready to send.",
      requirementsLabel: "Specific Requirements / Themes / Expected Guests",
      requirementsPlaceholder:
        "Tell us about your estimated guest count, tent size, floral theme, or mandap style.",
      success:
        "Thank you. Your enquiry is ready. Continue in WhatsApp, or wait for a call if you prefer to reach us that way.",
    },
    contact: {
      eyebrow: "Quick Quote Form",
      title: "Request a Tailored Event Quote",
      intro:
        "Share the celebration details you already know. A coordinator will follow up with layout ideas and a quote.",
      requirementsLabel: "Specific Requirements & Guest Count",
      requirementsPlaceholder:
        "Mention guest capacity, tent size, floral themes, or mandap styles.",
      success:
        "Thank you. Your quotation request is ready to send on WhatsApp. Our coordinator will connect with you there or by phone.",
    },
  } satisfies Record<"home" | "contact", FormCopy>,

  aboutPage: {
    eyebrow: "Our Heritage & Passion",
    title: "Architects of Memorable Celebrations",
    intro:
      "From a small craft workshop to a tent house families in Your City call for pavilions, mandaps, and event styling.",
    storyEyebrow: "Craftsmanship First",
    storyTitle: "Where Royal Tradition Meets Modern Precision",
    paragraphs: [
      "Every wedding or private celebration is a milestone of family and ritual. At Tent House, the work is more than putting up a tent. We shape the room the day will be remembered in.",
      "On a farmhouse lawn, a courtyard, or a hotel garden, the crew plans clean fabric, hidden rigging, and a structure that stays secure if the weather turns.",
    ],
    highlights: [
      { title: "Uncompromising", text: "Safety & Structure Standards" },
      { title: "Bespoke Artistry", text: "Custom Palette & Floral Design" },
    ],
    image: "/images/crew.jpg",
    imageAlt: "A couple on their wedding day, standing in for the celebration Tent House builds around",
    pillarsEyebrow: "Our Core Pillars",
    pillarsTitle: "The Standards We Stand By",
    pillarsIntro:
      "Every celebration handled by Tent House is backed by the same three commitments.",
    pillars: [
      {
        icon: "verified_user",
        title: "Pristine Fabric & Infrastructure",
        body: "Maintained linens, waterproof covers, sound trussing, and furnishings kept ready for the day you booked.",
      },
      {
        icon: "timer",
        title: "Punctual Handover Guarantee",
        body: "Setups are finished ahead of the ceremony or guest arrival, leaving time for photographs and last rituals.",
      },
      {
        icon: "engineering",
        title: "Dedicated On-Site Technicians",
        body: "A crew lead can stay through the event for power, lighting, and small adjustments you should not have to chase.",
      },
    ] satisfies PromiseItem[],
    ctaTitle: "Ready to Plan Your Next Grand Event?",
    ctaBody: "Speak directly with our senior event coordinator today.",
  },

  servicesPage: {
    eyebrow: "End-to-End Event Production",
    title: "Comprehensive Services & Infrastructure",
    intro:
      "From clear-span pavilions and waterproof shamianas to mandap styling, furniture, and evening lighting.",
  },

  packagesSection: {
    eyebrow: "Sample Packages",
    title: "Ways to Begin",
    intro:
      "These are starting shapes, not a price list. Guest counts are guides. Replace the names, inclusions, and prices with your real offerings.",
    items: [
      {
        id: "gathering",
        name: "Lawn Gathering",
        guests: "Up to 200 guests",
        price: "Quote on request",
        summary:
          "A canopy, seating, and lighting plan for an intimate ceremony or family gathering.",
        includes: [
          "Single canopy or shamiana",
          "Guest seating and basic linens",
          "Warm entrance and canopy lighting",
        ],
        enquireLabel: "Ask about Lawn Gathering",
      },
      {
        id: "pavilion",
        name: "Celebration Pavilion",
        guests: "Up to 500 guests",
        price: "Quote on request",
        summary:
          "A weatherproof pavilion with a stage or mandap, florals, and furniture for a full-day celebration.",
        includes: [
          "Clear-span or royal pavilion",
          "Mandap or reception stage",
          "Furniture, linens, and feature lighting",
        ],
        enquireLabel: "Ask about Celebration Pavilion",
      },
      {
        id: "grand",
        name: "Grand Wedding",
        guests: "500 guests and above",
        price: "Quote on request",
        summary:
          "Multi-day tents, ceremony and reception styling, and an on-site crew for a large wedding.",
        includes: [
          "More than one tented space",
          "Ceremony, festive, and reception styling",
          "On-site coordination through the events",
        ],
        enquireLabel: "Ask about Grand Wedding",
      },
    ] satisfies Package[],
  },

  testimonialsSection: {
    eyebrow: "Kind Words",
    title: "What Hosts Tell Us",
    intro:
      "Sample testimonials for the layout. Replace them with permissioned words from your own clients.",
    items: [
      {
        quote:
          "The pavilion was ready well before the guests arrived, and the draping matched the references we had chosen.",
        name: "A. Mehta",
        detail: "Wedding reception, Your City",
      },
      {
        quote:
          "They measured the courtyard twice, then built a mandap that still left room for the family to sit together.",
        name: "R. Iyer",
        detail: "Wedding ceremony, Your City",
      },
      {
        quote:
          "Our company dinner needed a tent that felt formal, not festive. The lighting and tables did exactly that.",
        name: "S. Kapoor",
        detail: "Corporate dinner, Your City",
      },
    ] satisfies Testimonial[],
  },

  faqSection: {
    eyebrow: "Before You Enquire",
    title: "Questions Families Ask",
    intro: "Short answers you can rewrite for how Tent House actually works.",
    items: [
      {
        question: "How early should we book?",
        answer:
          "Popular wedding dates go first. Share your date as soon as you know it, even if the guest count is still a range. We will tell you honestly if the crew is free.",
      },
      {
        question: "Do you work outside Your City?",
        answer:
          "Yes, for venues a reasonable drive from the workshop. Travel and an extra setup day are quoted before you confirm, not added later.",
      },
      {
        question: "What happens if it rains?",
        answer:
          "Waterproof tents, side walls, and a drainage plan are part of an outdoor booking. Tell us the venue surface — lawn, concrete, or farm track — when you enquire.",
      },
      {
        question: "Can furniture and lighting be booked with the tent?",
        answer:
          "Yes. Most celebrations take the tent, seating, linens, and lighting together. Florals and a mandap can be added or left to another vendor.",
      },
      {
        question: "How does a quote work?",
        answer:
          "Send the date, venue, and guest count. We reply with a layout note and a written quote. Nothing is reserved until you confirm in writing.",
      },
    ] satisfies FaqItem[],
  },

  footer: {
    blurb:
      "Curating wedding tent pavilions, mandaps, floral installations, and complete celebration setups in Your City.",
    servicesHeading: "Services",
    linksHeading: "Quick Links",
    officeHeading: "Head Office",
    phonePrefix: "Phone:",
    whatsappPrefix: "WhatsApp:",
    emailPrefix: "Email:",
    copyright:
      "© 2026 Tent House. All rights reserved. Crafted for celebrations.",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Portfolio Gallery", href: "/gallery" },
      { label: "Get a Quote", href: "/contact#enquiry-form" },
      { label: "Contact Details", href: "/contact" },
    ] satisfies NavLink[],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Location Map", href: "/contact#location-map" },
    ] satisfies NavLink[],
  },

  privacy: {
    eyebrow: "Your Enquiry",
    title: "Privacy Policy",
    updated: "Placeholder notice — replace before you publish.",
    sections: [
      {
        heading: "What this page is",
        body: "This is a starter privacy notice for Tent House. It is not legal advice. Have it reviewed before the site collects real enquiries.",
      },
      {
        heading: "What you might share",
        body: "The quote form asks for a name, phone number, event type, date, venue, and an optional note. Submitting it opens WhatsApp with that text. This website does not store the form on a server.",
      },
      {
        heading: "How to change this",
        body: "Edit the privacy sections in site.config.ts, and say clearly where enquiry messages are kept, who reads them, and how a guest can ask for them to be deleted.",
      },
    ],
  },

  terms: {
    eyebrow: "Bookings",
    title: "Terms of Service",
    updated: "Placeholder terms — replace before you take payments.",
    sections: [
      {
        heading: "What this page is",
        body: "These starter terms describe how a tent-house quote should work. They are not a contract. Replace them with terms your business actually uses.",
      },
      {
        heading: "Quotes",
        body: "A quotation from Tent House is an invitation to book. Dates are held only after you confirm in writing and pay the advance named on the quote.",
      },
      {
        heading: "On the day",
        body: "Access to the venue, power, and a safe ground surface remain the host's responsibility unless the quote says otherwise. Weather plans are limited to what the booked tent includes.",
      },
    ],
  },

  notFound: {
    title: "This page is not on the site",
    body: "The link may be old. Go back to the homepage, or send an enquiry and we will help you plan the setup.",
    home: "Back to home",
    contact: "Contact Tent House",
  },
};

export type Business = typeof business;
