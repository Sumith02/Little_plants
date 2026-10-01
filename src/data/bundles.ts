import { BundleProduct } from "@/types";

export const featuredBundles: (BundleProduct & {
  originalPrice: number;
  bundlePrice: number;
  plantName: string;
  planterName: string;
  addonNames: string[];
})[] = [
  {
    id: "bundle-bedroom-purifier",
    slug: "air-purifying-bedroom-sanctuary-bundle",
    name: "The Air-Purifying Bedroom Sanctuary",
    tagline: "Night-oxygen indoor plants for deeper, restful sleep.",
    description:
      "A resilient Snake Plant Golden Hahnii in a Roma Ceramic Planter, paired with organic vermicompost foliage tonic. Clean indoor air around the clock with zero fuss.",
    image:
      "/images/plants/snake-plant-golden-hahnii-31771655864452.jpg",
    plantId: "plant-snake-golden-hahnii",
    planterId: "pot-ceramic-bowl",
    addonIds: ["care-foliage-tonic"],
    plantName: "Snake Plant Golden Hahnii",
    planterName: "Roma Ceramic Pot",
    addonNames: ["Vermicompost Organic Tonic (1kg)"],
    originalPrice: 747,
    bundlePrice: 635,
    discountPercent: 15,
  },
  {
    id: "bundle-zen-desk-sanctuary",
    slug: "zen-desk-sanctuary-bundle",
    name: "The Zen Work Desk Sanctuary",
    tagline: "Zero-maintenance greenery to calm busy workdays.",
    description:
      "A drought-hardy ZZ Plant potted into our warm Roma Ceramic Planter, complemented by our Dom Metallic Botanical Mister. Keeps desk air fresh and screens less tiring.",
    image:
      "/images/plants/zz-plant-31792473505924.jpg",
    plantId: "plant-zz-plant-emerald",
    planterId: "pot-ceramic-bowl",
    addonIds: ["care-brass-mister"],
    plantName: "ZZ Plant",
    planterName: "Roma Ceramic Pot",
    addonNames: ["Dom Metallic Botanical Mister (500ml)"],
    originalPrice: 1358,
    bundlePrice: 1154,
    discountPercent: 15,
  },
  {
    id: "bundle-monstera-terracotta",
    slug: "the-architectural-monstera-ritual",
    name: "The Sculptural Monstera & Terracotta Ritual",
    tagline: "The living room centerpiece ready to unbox and display.",
    description:
      "A mature Monstera Deliciosa paired with our wheel-thrown Sienna Terracotta Pots, ready-potted with organic soil and accompanied by our Cold-Pressed Neem Oil Shield. Save 15% when purchased as a harmonized bundle.",
    image:
      "/images/plants/monstera-deliciosa-plant-31793362174084.jpg",
    plantId: "plant-monstera-deliciosa",
    planterId: "pot-terracotta-urn",
    addonIds: ["care-neem-oil-spray"],
    plantName: "Monstera Deliciosa Plant",
    planterName: "Sienna Terracotta Pots - Set of 3",
    addonNames: ["Cold-Pressed Neem Oil Shield (100ml)"],
    originalPrice: 2457,
    bundlePrice: 2089,
    discountPercent: 15,
  },
];
