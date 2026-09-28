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
      "A mature Monstera Deliciosa paired with our wheel-thrown 8-inch Terracotta Studio Urn, ready-potted with organic soil and accompanied by our Cold-Pressed Neem Oil Shield. Save 15% when purchased as a harmonized bundle.",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000&auto=format&fit=crop",
    plantId: "plant-monstera-deliciosa",
    planterId: "pot-terracotta-urn",
    addonIds: ["care-neem-oil-spray"],
    plantName: "Monstera Deliciosa (Mature Floor)",
    planterName: "Handcrafted Terracotta Urn (8-inch)",
    addonNames: ["Cold-Pressed Neem Oil Shield (250ml)"],
    originalPrice: 2447,
    bundlePrice: 2079,
    discountPercent: 15,
  },
  {
    id: "bundle-zen-desk-sanctuary",
    slug: "zen-desk-sanctuary-bundle",
    name: "The Zen Work Desk Sanctuary",
    tagline: "Zero-maintenance greenery to calm busy workdays.",
    description:
      "A drought-hardy ZZ Plant potted into our warm Dune Sand Glazed Ceramic Bowl, complemented by our heirloom Solid Brass Mist Sprayer. Keeps desk air fresh and screens less tiring.",
    image:
      "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=1000&auto=format&fit=crop",
    plantId: "plant-zz-plant-emerald",
    planterId: "pot-ceramic-bowl",
    addonIds: ["care-brass-mister"],
    plantName: "ZZ Plant 'Emerald Feather'",
    planterName: "Artisan Sand Glazed Ceramic Bowl",
    addonNames: ["Solid Brass Mist Sprayer (300ml)"],
    originalPrice: 2347,
    bundlePrice: 1995,
    discountPercent: 15,
  },
  {
    id: "bundle-balcony-bounty",
    slug: "balcony-kitchen-garden-starter-kit",
    name: "The Balcony Kitchen Garden Bounty",
    tagline: "Sun-drenched herbs and heirloom cherry tomatoes.",
    description:
      "Everything needed to kickstart fresh home harvests: Italian Genovese Basil Seeds, Heirloom Cherry Tomatoes, 5kg Enriched Organic Potting Mix, and Hand-Forged Carbon Steel Pruners.",
    image:
      "https://images.unsplash.com/photo-1592417817098-8f3d69109853?q=80&w=1000&auto=format&fit=crop",
    plantId: "seeds-sweet-basil",
    planterId: "pot-terracotta-urn",
    addonIds: ["seeds-cherry-tomato", "care-potting-mix-5kg", "tool-forged-pruners"],
    plantName: "Italian Sweet Basil & Cherry Tomato Seeds",
    planterName: "Handcrafted Terracotta Urn (8-inch)",
    addonNames: ["5kg Organic Soil", "Carbon Steel Pruners"],
    originalPrice: 2176,
    bundlePrice: 1849,
    discountPercent: 15,
  },
];
