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
      name: string;
      city: string;
      address: string;
      landmark: string;
      timing: string;
      phone: string;
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
  tagline: "Relaxed shop offering a wide assortment of plants – indoor and potted – as well as gift-wrapping services.",
  shortDescription:
    "Relaxed shop offering a wide assortment of plants – indoor and potted – as well as gift-wrapping services. Visit our stores at Mannagudda Rd and Fiza By Nexus Mall in Mangaluru, or order online for safe doorstep delivery across India.",
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
      id: "store-visit",
      text: "🪴 Visit our relaxed plant shop on Mannagudda Rd, Mangaluru • Open 9:30 AM – 8:30 PM",
      link: "/contact",
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
    phone: "098454 74725",
    whatsapp: "+91 79917 99135",
    whatsappNumber: "917991799135",
    hours: "Monday – Sunday, 9:30 AM – 8:30 PM IST",
    studios: [
      {
        name: "Mannagudda Store & Studio (Flagship)",
        city: "Mangaluru - Mannagudda",
        address: "Door No : 5, Vijaya Complex, 12-1214/4, Mannagudda Rd, Kudroli, Kodailbail, Mangaluru, Karnataka 575003",
        landmark: "Near Atomm Fitness Club",
        phone: "098454 74725",
        timing: "9:30 AM – 8:30 PM (All days)",
      },
      {
        name: "Fiza By Nexus Mall Branch",
        city: "Mangaluru - Pandeshwar",
        address: "UG Entrance, Fiza By Nexus Mall, Mangaladevi Temple Rd, Pandeshwar, Mangaluru, Karnataka 575001",
        landmark: "UG Entrance, Fiza By Nexus Mall",
        phone: "7676236369",
        timing: "10:00 AM – 9:30 PM (All days)",
      },
    ],
  },
  demoMode: {
    isDemo: true,
    samplePincodes: [
      { pincode: "575003", city: "Mangaluru", state: "Karnataka", days: "Same-Day / Next-Day Delivery" },
      { pincode: "560038", city: "Bengaluru", state: "Karnataka", days: "2-3 business days" },
      { pincode: "400050", city: "Mumbai", state: "Maharashtra", days: "2-3 business days" },
      { pincode: "110001", city: "New Delhi", state: "Delhi", days: "3-4 business days" },
      { pincode: "500034", city: "Hyderabad", state: "Telangana", days: "3-4 business days" },
      { pincode: "600028", city: "Chennai", state: "Tamil Nadu", days: "3-5 business days" },
      { pincode: "700019", city: "Kolkata", state: "West Bengal", days: "4-5 business days" },
      { pincode: "411001", city: "Pune", state: "Maharashtra", days: "2-3 business days" },
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
