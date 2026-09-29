import { BundleProduct } from "@/types";

export const featuredBundles: (BundleProduct & {
  originalPrice: number;
  bundlePrice: number;
  plantName: string;
  planterName: string;
  addonNames: string[];
})[] = [
  {
    id: "bundle-monstera-terracotta",
    slug: "the-architectural-monstera-ritual",
    name: "The Sculptural Monstera & Terracotta Ritual",
    tagline: "The living room centerpiece ready to unbox and display.",
    description:
      "A mature Monstera Deliciosa paired with our wheel-thrown Sienna Terracotta Pots, ready-potted with organic soil and accompanied by our Cold-Pressed Neem Oil Shield. Save 15% when purchased as a harmonized bundle.",
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/1_d2836da1-2292-4d2b-a45b-7b243be4f590.jpg?v=1747738221",
    plantId: "plant-monstera-deliciosa",
    planterId: "pot-terracotta-urn",
    addonIds: ["care-neem-oil-spray"],
    plantName: "Monstera Deliciosa (Mature Floor)",
    planterName: "Sienna Terracotta Pots - Set of 3",
    addonNames: ["Cold-Pressed Neem Oil Shield (100ml)"],
    originalPrice: 2457,
    bundlePrice: 2089,
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
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/1_9ebdfd59-d830-4e31-89a3-5c2fcda53344.jpg?v=1770025983",
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
    id: "bundle-balcony-bounty",
    slug: "balcony-kitchen-garden-starter-kit",
    name: "The Balcony Kitchen Garden Bounty",
    tagline: "Sun-drenched herbs and heirloom cherry tomatoes.",
    description:
      "Everything needed to kickstart fresh home harvests: Italian Genovese Basil Seeds, Heirloom Cherry Tomatoes, 5kg Enriched Organic Pot-O-Mix, and Heavy Duty Anvil Pruner.",
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/ugaoo_generate-a-hero-product-s_s76foTgl8e.jpg?v=1788875809",
    plantId: "seeds-sweet-basil",
    planterId: "pot-terracotta-urn",
    addonIds: ["seeds-cherry-tomato", "care-potting-mix-5kg", "tool-forged-pruners"],
    plantName: "Italian Sweet Basil & Cherry Tomato Seeds",
    planterName: "Sienna Terracotta Pots - Set of 3",
    addonNames: ["5kg Pot-O-Mix", "Heavy Duty Anvil Pruner"],
    originalPrice: 1096,
    bundlePrice: 930,
    discountPercent: 15,
  },
];
