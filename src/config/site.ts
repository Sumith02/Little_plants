export interface SiteConfig {
  brandName: string;
  kannadaBrandName: string;
  tagline: string;
  shortDescription: string;
  logos: {
    green: string;
    white: string;
    kannada: string;
    qr: string;
    avatar: string;
  };
  currency: {
    code: string;
    symbol: string;
    locale: string;
  };
  announcements: {
    id: string;
    text: string;
    link?: string;
  }[];
  shipping: {
    freeShippingThreshold: number; // in INR
    standardShippingFee: number;
    expressShippingFee: number;
    estimatedMetroDays: string;
    estimatedNonMetroDays: string;
  };
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    whatsappNumber: string;
    hours: string;
    studios: {
      city: string;
      address: string;
      landmark: string;
      timing: string;
    }[];
  };
  demoMode: {
    isDemo: boolean;
    samplePincodes: { pincode: string; city: string; state: string; days: string }[];
    sampleCoupons: { code: string; description: string; discountType: "percent" | "fixed"; value: number; minSpend?: number }[];
  };
  social: {
    instagram: string;
    pinterest: string;
    youtube: string;
  };
}

export const siteConfig: SiteConfig = {
  brandName: "Little Plants",
  kannadaBrandName: "ಲಿಟಲ್ ಪ್ಲಾಂಟ್ಸ್",
  tagline: "Curated greenery, handcrafted planters & botanical rituals for modern Indian homes.",
  shortDescription:
    "We nurture healthy, climate-acclimatized indoor plants, artisan-cast terracotta planters, and organic botanical care, packed plastic-free and shipped safely across 18,000+ PIN codes in India.",
  logos: {
    green: "/images/brand/little-plants-logo-green.png",
    white: "/images/brand/little-plants-logo-white.png",
    kannada: "/images/brand/little-plants-kannada-cropped.png",
    qr: "/images/brand/lp-qr-cropped.png",
    avatar: "/images/brand/dp.jpg",
  },
  currency: {
    code: "INR",
    symbol: "₹",
    locale: "en-IN",
  },
  announcements: [
    {
      id: "free-ship",
      text: "🌿 Complimentary Botanical Transit on all orders above ₹999 across India",
      link: "/shop",
    },
    {
      id: "coupon-welcome",
      text: "✨ Use code LITTLE10 for 10% off your first botanical purchase",
      link: "/shop",
    },
    {
      id: "quiz-cta",
      text: "🌱 Unsure what thrives in your space? Take the 60-second Plant Finder Quiz",
      link: "/quiz",
    },
  ],
  shipping: {
    freeShippingThreshold: 999,
    standardShippingFee: 99,
    expressShippingFee: 199,
    estimatedMetroDays: "2-4 business days",
    estimatedNonMetroDays: "4-6 business days",
  },
  contact: {
    email: "care@littleplants.in",
    phone: "+91 98200 45123",
    whatsapp: "+91 98200 45123",
    whatsappNumber: "919820045123",
    hours: "Monday – Saturday, 9:30 AM – 7:30 PM IST",
    studios: [
      {
        city: "Bengaluru",
        address: "Studio 14, 12th Main Road, HAL 2nd Stage, Indiranagar",
        landmark: "Near Defense Colony Park",
        timing: "10:30 AM – 8:00 PM (All days)",
      },
      {
        city: "Mumbai",
        address: "The Botanical Shed, Pali Hill, Bandra West",
        landmark: "Opposite Zig Zag Road",
        timing: "11:00 AM – 8:30 PM (Tue – Sun)",
      },
      {
        city: "Pune Nursery Hub",
        address: "Green Valley Acclimatization Farm, Uruli Kanchan",
        landmark: "Solapur Highway Exit",
        timing: "Wholesale & Nursery Visits by Appointment",
      },
    ],
  },
  demoMode: {
    isDemo: true,
    samplePincodes: [
      { pincode: "560038", city: "Bengaluru", state: "Karnataka", days: "2-3 business days" },
      { pincode: "400050", city: "Mumbai", state: "Maharashtra", days: "2-3 business days" },
      { pincode: "110001", city: "New Delhi", state: "Delhi", days: "3-4 business days" },
      { pincode: "500034", city: "Hyderabad", state: "Telangana", days: "3-4 business days" },
      { pincode: "600028", city: "Chennai", state: "Tamil Nadu", days: "3-5 business days" },
      { pincode: "700019", city: "Kolkata", state: "West Bengal", days: "4-5 business days" },
      { pincode: "411001", city: "Pune", state: "Maharashtra", days: "2 business days" },
    ],
    sampleCoupons: [
      { code: "LITTLE10", description: "10% off your entire order", discountType: "percent", value: 10 },
      { code: "WELCOME10", description: "10% off your entire order", discountType: "percent", value: 10 },
      { code: "GREENROOF", description: "Flat ₹200 off on orders above ₹1,200", discountType: "fixed", value: 200, minSpend: 1200 },
      { code: "LITTLE20", description: "20% off on botanical bundles & planters above ₹2,500", discountType: "percent", value: 20, minSpend: 2500 },
      { code: "RITUAL20", description: "20% off on botanical bundles & planters above ₹2,500", discountType: "percent", value: 20, minSpend: 2500 },
    ],
  },
  social: {
    instagram: "https://instagram.com/littleplants.in",
    pinterest: "https://pinterest.com/littleplants",
    youtube: "https://youtube.com/@littleplants",
  },
};

export const formatPrice = (amount: number): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};
