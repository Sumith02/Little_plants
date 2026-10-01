"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products as defaultProducts } from "@/data/products";
import { categories as defaultCategories } from "@/data/categories";
import { spaces } from "@/data/spaces";
import { featuredBundles } from "@/data/bundles";
import { journalPosts } from "@/data/journal";
import { demoReviews, googleReviewsConfig } from "@/data/reviews";
import { formatPrice } from "@/config/site";
import { ProductCard } from "@/components/product/ProductCard";
import { useCart } from "@/context/CartContext";
import { useCatalog } from "@/context/CatalogContext";
import {
  Sparkles,
  ArrowRight,
  Sun,
  Droplets,
  ShieldCheck,
  Check,
  Leaf,
  Layers,
  Heart,
  Star,
  ShoppingBag,
  MapPin,
  Phone,
  ExternalLink,
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";

const GoogleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
  </svg>
);

export default function HomePage() {
  const { addItem } = useCart();
  const { products, categories } = useCatalog();
  const [selectedSpaceId, setSelectedSpaceId] = useState(spaces[0].id);
  const [addedBundleId, setAddedBundleId] = useState<string | null>(null);

  // Filtered collections
  const bestsellerProducts = products.filter((p) => p.isBestseller).slice(0, 8);
  const beginnerProducts = products.filter((p) => p.isBeginnerFriendly && p.category === "plants").slice(0, 4);

  // Active room space
  const currentSpace = spaces.find((s) => s.id === selectedSpaceId) || spaces[0];
  const spaceProducts = products.filter((p) => currentSpace.recommendedPlantIds.includes(p.id)).slice(0, 4);

  // Quick bundle add handler
  const handleAddBundle = (bundle: typeof featuredBundles[0]) => {
    const mainPlant = products.find((p) => p.id === bundle.plantId);
    if (!mainPlant) return;

    addItem(
      mainPlant,
      mainPlant.variants?.sizes?.[1] || mainPlant.variants?.sizes?.[0],
      mainPlant.variants?.planterMaterials?.[1] || mainPlant.variants?.planterMaterials?.[0],
      mainPlant.variants?.planterColors?.[0],
      1
    );

    // Also add the care add-on if present
    if (bundle.addonIds && bundle.addonIds[0]) {
      const addon = products.find((p) => p.id === bundle.addonIds[0]);
      if (addon) addItem(addon, undefined, undefined, undefined, 1);
    }

    setAddedBundleId(bundle.id);
    setTimeout(() => setAddedBundleId(null), 2500);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* ============================================================
          1. EDITORIAL SPLIT HERO
         ============================================================ */}
      <section className="relative overflow-hidden pt-4 sm:pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Editorial Copy */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand border border-sand-dark text-xs text-charcoal font-medium">
                <Leaf className="w-3.5 h-3.5 text-terracotta" />
                <span>Relaxed Plant Shop &bull; Mannagudda Rd, Mangaluru</span>
              </div>

              <div className="space-y-3">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-olive leading-[1.12]">
                  Make room for a little green.
                </h1>
                <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Relaxed shop offering a wide assortment of plants – indoor and potted – as well as bespoke gift-wrapping services.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <Link
                  href="/category/plants"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-medium text-sm tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Shop Plants</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/quiz"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-sand-light hover:bg-sand text-olive font-medium text-sm tracking-wide border border-sand-dark transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-terracotta" />
                  <span>Find My Plant Quiz</span>
                </Link>
              </div>

              {/* Key Highlights Micro Bar */}
              <div className="pt-4 border-t border-sand grid grid-cols-3 gap-2 text-left">
                <div className="space-y-0.5">
                  <div className="font-serif font-bold text-lg text-olive">18,000+</div>
                  <div className="text-[11px] text-charcoal-muted">PIN codes served</div>
                </div>
                <div className="space-y-0.5">
                  <div className="font-serif font-bold text-lg text-olive">7-Day</div>
                  <div className="text-[11px] text-charcoal-muted">Plant health guarantee</div>
                </div>
                <div className="space-y-0.5">
                  <div className="font-serif font-bold text-lg text-olive">100%</div>
                  <div className="text-[11px] text-charcoal-muted">Plastic-free coir crates</div>
                </div>
              </div>
            </div>

            {/* Right Editorial Image Grid */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-4/5 border border-sand bg-sand/30">
                <Image
                  src="/images/plants/monstera-deliciosa-plant-31793362174084.jpg"
                  alt="Lush Monstera and indoor botanical sanctuary"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                {/* Floating Botanical Badge */}
                <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-xs bg-cream/95 backdrop-blur-md p-4 rounded-2xl border border-sand shadow-lg flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-sand overflow-hidden shrink-0 relative">
                    <Image
                      src="/images/plants/monstera-deliciosa-plant-31793362272388.jpg"
                      alt="Monstera Deliciosa leaf"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-terracotta block">
                      Curator&apos;s Selection
                    </span>
                    <span className="text-xs font-semibold text-charcoal block truncate">
                      Monstera in Terracotta Urn
                    </span>
                    <span className="text-[11px] text-charcoal-muted">
                      From {formatPrice(1259)} &bull; Ready to flourish
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. VISUAL CATEGORY NAVIGATION
         ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
            Explore Botanical Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive">
            Curated for mindful living
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted">
            From resilient indoor tropicals to hand-thrown earthenware and organic nutrition.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="group relative flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-cream-50 hover:bg-sand-light border border-sand hover:border-sand-dark transition-all duration-300 text-center"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-3 border-2 border-sand group-hover:border-terracotta/50 shadow-2xs transition-all duration-300">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="120px"
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-sm sm:text-base font-bold text-olive group-hover:text-terracotta transition-colors">
                {category.name}
              </h3>
              <span className="text-[11px] text-charcoal-muted mt-0.5">
                {category.productCount} varieties
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================================
          3. BESTSELLER COLLECTION WITH QUICK ADD
         ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-sand pb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
              Trusted by 12,000+ Plant Parents
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-olive mt-1">
              Bestsellers of the Season
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs font-semibold text-terracotta hover:underline inline-flex items-center gap-1 shrink-0"
          >
            <span>View all products ({products.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {bestsellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} layout="grid" />
          ))}
        </div>

        {/* View All Button at the bottom after viewing plant images */}
        <div className="text-center pt-6 sm:pt-8">
          <Link
            href="/category/plants"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-olive hover:bg-olive-dark text-cream font-medium text-xs sm:text-sm tracking-wide transition-all shadow-md hover:shadow-lg cursor-pointer group"
          >
            <span>View All Botanical Specimens ({products.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ============================================================
          4. FIND GREENERY FOR YOUR SPACE (Tabbed interactive section)
         ============================================================ */}
      <section className="bg-sand-light/60 py-12 sm:py-16 border-y border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
              Microclimate Matching
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive">
              Find greenery for your space
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted">
              Every room has its own natural light, humidity, and temperature. Select your space below to discover species that naturally thrive there.
            </p>
          </div>

          {/* Space Tabs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
            {spaces.map((space) => (
              <button
                key={space.id}
                onClick={() => setSelectedSpaceId(space.id)}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer shrink-0 ${
                  selectedSpaceId === space.id
                    ? "bg-olive text-cream shadow-sm"
                    : "bg-cream text-charcoal hover:bg-sand border border-sand"
                }`}
              >
                {space.name}
              </button>
            ))}
          </div>

          {/* Active Space Spotlight */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-cream rounded-3xl p-6 sm:p-8 border border-sand shadow-xs">
            <div className="lg:col-span-5 relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/5 rounded-2xl overflow-hidden border border-sand">
              <Image
                src={currentSpace.image}
                alt={currentSpace.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sand">
                    Space Profile
                  </span>
                  <h4 className="font-serif text-xl font-bold">{currentSpace.name}</h4>
                  <p className="text-xs text-sand-light opacity-90">{currentSpace.subtitle}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-olive">
                  {currentSpace.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mt-2">
                  {currentSpace.description}
                </p>
              </div>

              {/* Conditions Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-cream-50 border border-sand text-xs">
                <div>
                  <span className="font-semibold text-olive block mb-0.5">Light Window:</span>
                  <span className="text-charcoal-muted text-[11px]">
                    {currentSpace.idealConditions.light}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-olive block mb-0.5">Air Circulation:</span>
                  <span className="text-charcoal-muted text-[11px]">
                    {currentSpace.idealConditions.airflow}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-olive block mb-0.5">Comfort Zone:</span>
                  <span className="text-charcoal-muted text-[11px]">
                    {currentSpace.idealConditions.temperature}
                  </span>
                </div>
              </div>

              {/* Styling Tip */}
              <div className="p-3.5 rounded-xl bg-sand/60 border border-sand text-xs text-charcoal flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                <p>
                  <strong>Styling Advice:</strong> {currentSpace.stylingTip}
                </p>
              </div>

              {/* Recommended Plants Grid */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-olive">
                    Recommended Plants for {currentSpace.name}
                  </span>
                  <Link
                    href={`/shop?space=${encodeURIComponent(currentSpace.slug)}`}
                    className="text-xs text-terracotta font-medium hover:underline inline-flex items-center gap-1"
                  >
                    <span>View all matching</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {spaceProducts.map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${p.slug}`}
                      className="p-2.5 rounded-xl bg-cream-50 hover:bg-sand border border-sand transition-colors group flex flex-col"
                    >
                      <div className="relative aspect-square rounded-lg overflow-hidden bg-sand mb-2">
                        <Image
                          src={p.images[0]}
                          alt={p.name}
                          fill
                          sizes="150px"
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <span className="text-xs font-semibold text-charcoal group-hover:text-terracotta transition-colors line-clamp-1">
                        {p.name}
                      </span>
                      <span className="text-[11px] font-bold text-olive mt-1">
                        {formatPrice(p.price)}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. PLANT-AND-PLANTER BUNDLES SECTION
         ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-sand pb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
              The Perfectly Potted Pair
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-olive mt-1">
              Curated Botanical Bundles
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
              Harmonized plant and artisan planter pairings with organic nutrition. Enjoy 15% automatic bundle savings.
            </p>
          </div>

          <Link
            href="/bundle-builder"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-terracotta/10 text-terracotta font-medium text-xs hover:bg-terracotta/20 transition-colors shrink-0"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Custom Corner Builder →</span>
          </Link>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          {featuredBundles.map((bundle) => (
            <div
              key={bundle.id}
              className="w-[85vw] max-w-sm md:w-auto shrink-0 snap-center bg-cream-50 rounded-2xl border border-sand hover:border-sand-dark p-5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Bundle Image */}
                <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-sand border border-sand">
                  <Image
                    src={bundle.image}
                    alt={bundle.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-terracotta text-white text-[10px] font-bold shadow-2xs">
                    Save {bundle.discountPercent}%
                  </div>
                </div>

                {/* Bundle Details */}
                <div className="space-y-1.5">
                  <h3 className="font-serif text-lg font-bold text-olive">{bundle.name}</h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {bundle.description}
                  </p>
                </div>

                {/* Items Included Checklist */}
                <div className="p-3 rounded-xl bg-cream border border-sand text-xs space-y-1.5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-olive/80">
                    What&apos;s Inside this Ritual
                  </div>
                  <div className="flex items-center gap-1.5 text-charcoal">
                    <Check className="w-3.5 h-3.5 text-olive shrink-0" />
                    <span className="truncate">{bundle.plantName}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-charcoal">
                    <Check className="w-3.5 h-3.5 text-olive shrink-0" />
                    <span className="truncate">{bundle.planterName}</span>
                  </div>
                  {bundle.addonNames.map((addon) => (
                    <div key={addon} className="flex items-center gap-1.5 text-charcoal">
                      <Check className="w-3.5 h-3.5 text-olive shrink-0" />
                      <span className="truncate">{addon}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price and Add CTA */}
              <div className="pt-4 mt-4 border-t border-sand flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-charcoal font-sans">
                      {formatPrice(bundle.bundlePrice)}
                    </span>
                    <span className="text-xs line-through text-charcoal-muted">
                      {formatPrice(bundle.originalPrice)}
                    </span>
                  </div>
                  <span className="text-[10px] text-olive font-medium">
                    You save {formatPrice(bundle.originalPrice - bundle.bundlePrice)}
                  </span>
                </div>

                <button
                  onClick={() => handleAddBundle(bundle)}
                  className="px-4 py-2.5 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white text-xs font-medium transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
                >
                  {addedBundleId === bundle.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add Bundle</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          6. BEGINNER-FRIENDLY COLLECTION WITH CARE INFORMATION
         ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-sand pb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
              Unkillable Greenery
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-olive mt-1">
              Beginner-Friendly Essentials
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
              Forgiving of missed waterings and low apartment light. Clear care summaries with every specimen.
            </p>
          </div>

          <Link
            href="/shop?filter=Beginner"
            className="text-xs font-semibold text-terracotta hover:underline inline-flex items-center gap-1 shrink-0"
          >
            <span>View beginner collection</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {beginnerProducts.map((product) => (
            <ProductCard key={product.id} product={product} layout="grid" />
          ))}
        </div>

        {/* View All Button below beginner plant images */}
        <div className="text-center pt-6 sm:pt-8">
          <Link
            href="/shop?filter=Beginner"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-sand hover:bg-sand-dark text-olive font-medium text-xs sm:text-sm tracking-wide border border-sand-dark transition-all cursor-pointer group"
          >
            <span>View All Beginner-Friendly Plants</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ============================================================
          7. PROMOTIONAL SECTION: FIND MY PLANT QUIZ
         ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-olive text-cream overflow-hidden p-8 sm:p-12 lg:p-16 border border-olive-dark shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream/10 border border-cream/20 text-xs text-sand">
              <Sparkles className="w-3.5 h-3.5 text-sand" />
              <span>Personalized Botanical Algorithm</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Unsure what will thrive in your home?
            </h2>

            <p className="text-sm sm:text-base text-cream-200 leading-relaxed">
              Answer 5 simple questions about your room, daily natural light, pets, and care routine.
              Our interactive quiz analyses our nursery catalog to recommend species that flourish in your exact conditions.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                href="/quiz"
                className="px-8 py-4 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-medium text-sm tracking-wide transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Take the 60-Second Quiz</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs text-sand/80">No registration needed &bull; Instant results</span>
            </div>
          </div>

          {/* Decorative background foliage silhouette */}
          <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-20 pointer-events-none hidden lg:block">
            <Image
              src="/images/plants/snake-plant-golden-31911045267588.jpg"
              alt="Botanical background"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          8. PLANT CARE JOURNAL PREVIEWS
         ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-sand pb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
              The Plant Parent Journal
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-olive mt-1">
              Mindful Plant Care & Wisdom
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
              Practical horticultural advice tailored for Indian climates, apartment living, and monsoon cycles.
            </p>
          </div>

          <Link
            href="/journal"
            className="text-xs font-semibold text-terracotta hover:underline inline-flex items-center gap-1 shrink-0"
          >
            <span>Read all articles ({journalPosts.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          {journalPosts.slice(0, 3).map((post) => (
            <Link
              key={post.id}
              href={`/journal/${post.slug}`}
              className="w-[82vw] max-w-sm md:w-auto shrink-0 snap-center group bg-cream-50 rounded-2xl border border-sand hover:border-sand-dark overflow-hidden flex flex-col transition-all duration-300 shadow-2xs hover:shadow-md"
            >
              <div className="relative aspect-16/10 bg-sand overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-cream/90 backdrop-blur-xs text-olive border border-sand">
                  {post.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="text-[11px] text-charcoal-muted flex items-center gap-2">
                    <span>{post.date}</span>
                    <span>&bull;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-olive group-hover:text-terracotta transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-sand flex items-center justify-between text-xs">
                  <span className="font-medium text-charcoal">{post.author.name}</span>
                  <span className="font-semibold text-terracotta group-hover:underline inline-flex items-center gap-1">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================================
          9. GOOGLE REVIEWS & CUSTOMER PRAISE
         ============================================================ */}
      <section className="bg-sand-light/50 py-12 sm:py-16 border-y border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-sand pb-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream border border-sand shadow-2xs text-xs">
                <GoogleIcon className="w-4 h-4" />
                <span className="font-bold text-olive">{googleReviewsConfig.ratingDisplay}</span>
                <span className="text-amber-500 font-bold">★★★★★</span>
                <span className="text-charcoal-muted">&bull;</span>
                <span className="text-charcoal-muted font-medium">{googleReviewsConfig.reviewCountDisplay} Google Reviews</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-olive">
                Loved by plant parents on Google
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Authentic reviews from plant lovers visiting our Mannagudda &amp; Fiza by Nexus Mall stores, and receiving deliveries across Karnataka.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={googleReviewsConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-sand text-olive text-xs font-semibold border border-sand transition-all shadow-2xs inline-flex items-center gap-2 cursor-pointer"
              >
                <GoogleIcon className="w-3.5 h-3.5" />
                <span>Read All on Google</span>
                <ExternalLink className="w-3.5 h-3.5 text-charcoal-muted" />
              </a>
              <a
                href={googleReviewsConfig.writeReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white text-xs font-semibold transition-all shadow-xs inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>Write a Review</span>
              </a>
            </div>
          </div>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
            {demoReviews.map((review) => (
              <div
                key={review.id}
                className="w-[85vw] max-w-sm md:w-auto shrink-0 snap-center bg-cream rounded-2xl p-5 sm:p-6 border border-sand shadow-2xs space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="flex text-amber-500 text-sm">
                        {"★".repeat(review.rating)}
                      </div>
                      <span className="text-[10px] font-bold text-olive bg-sand/60 px-2 py-0.5 rounded-full border border-sand">
                        5.0
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1 text-[11px] text-charcoal-muted">
                      <GoogleIcon className="w-3.5 h-3.5" />
                      <span>{review.date}</span>
                    </div>
                  </div>

                  <h4 className="font-serif text-base font-bold text-olive">
                    &ldquo;{review.title}&rdquo;
                  </h4>

                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {review.comment}
                  </p>
                </div>

                <div className="pt-3 border-t border-sand flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-charcoal block">{review.author}</span>
                    <span className="text-[11px] text-charcoal-muted">{review.location}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] bg-olive-light text-olive font-medium">
                    <Check className="w-3 h-3 text-olive" />
                    <span>{review.badge || "Google Review"}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Trust Micro Bar */}
          <div className="text-center pt-2">
            <a
              href={googleReviewsConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-olive font-semibold hover:text-terracotta transition-colors group"
            >
              <span>See verified reviews on Google Maps for Little Plants Mangaluru</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          10. SUSTAINABLE TRANSIT COMMITMENT
         ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-cream-50 border border-sand p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
              Safe Journey Guarantee
            </span>
            <h3 className="font-serif text-3xl font-bold text-olive">
              How a living plant travels 1,200 km without losing a single leaf
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              Standard corrugated boxes collapse in humid courier vans. We engineered a proprietary
              breathable coconut coir crate that stabilizes the root ball, locks in moisture without
              rotting, and keeps leaves floating safely in air channels.
            </p>
            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-charcoal">
                <Check className="w-4 h-4 text-olive shrink-0" />
                <span>Zero plastic bubble wrap &bull; 100% biodegradable coir packaging</span>
              </div>
              <div className="flex items-center gap-2 text-charcoal">
                <Check className="w-4 h-4 text-olive shrink-0" />
                <span>Pre-conditioned root hydration for up to 8 days in transit</span>
              </div>
              <div className="flex items-center gap-2 text-charcoal">
                <Check className="w-4 h-4 text-olive shrink-0" />
                <span>7-Day no-questions-asked replacement if transit damage occurs</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/shipping-returns"
                className="text-xs font-semibold text-terracotta hover:underline inline-flex items-center gap-1"
              >
                <span>Read our transit & unboxing policy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-sand border border-sand">
            <Image
              src="/images/plants/rubber-plant-31800175526020.jpg"
              alt="Earthen terracotta and sustainable indoor plant packaging"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          11. VISIT OUR PHYSICAL STORE (Mangaluru)
         ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-olive-light/60 border border-olive-subtle p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
              Physical Stores &bull; Mangaluru, Karnataka
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-olive">
              Visit our leafy sanctuaries in Mangaluru.
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              Relaxed shops offering a wide assortment of plants – indoor and potted – as well as bespoke gift-wrapping services. Walk through curated displays of tropical foliage and tactile earthenware pottery with personalized care guidance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {/* Branch 1: Mannagudda */}
              <div className="p-3.5 rounded-2xl bg-cream border border-sand text-xs space-y-1.5 shadow-xs">
                <div className="font-bold text-olive flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0" />
                  <span>Mannagudda Store (Flagship)</span>
                </div>
                <div className="text-charcoal leading-snug">
                  Door No : 5, Vijaya Complex, 12-1214/4, Mannagudda Rd, near Atomm Fitness Club, Kudroli, Kodailbail, Mangaluru 575003
                </div>
                <div className="text-charcoal-muted pt-1 space-y-0.5 text-[11px]">
                  <div>🕒 Open daily: 9:30 AM – 8:30 PM</div>
                  <div className="text-olive font-semibold">📞 Call: <a href="tel:09845474725" className="hover:underline">098454 74725</a></div>
                </div>
              </div>

              {/* Branch 2: Fiza By Nexus Mall */}
              <div className="p-3.5 rounded-2xl bg-cream border border-sand text-xs space-y-1.5 shadow-xs">
                <div className="font-bold text-olive flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0" />
                  <span>Fiza By Nexus Mall Branch</span>
                </div>
                <div className="text-charcoal leading-snug">
                  UG Entrance, Fiza By Nexus Mall, Mangaladevi Temple Rd, Pandeshwar, Mangaluru, Karnataka 575001
                </div>
                <div className="text-charcoal-muted pt-1 space-y-0.5 text-[11px]">
                  <div>🕒 Open daily: 10:00 AM – 9:30 PM</div>
                  <div className="text-olive font-semibold">📞 Call: <a href="tel:7676236369" className="hover:underline">7676236369</a></div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="https://wa.me/917991799135?text=Hello%20Little%20Plants!%20I%20would%20like%20to%20visit%20your%20store%20in%20Mangaluru."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Chat on WhatsApp (+91 79917 99135)</span>
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-sand hover:bg-sand-dark text-olive text-xs font-semibold transition-colors inline-flex items-center gap-1.5"
              >
                <span>Store Details &amp; Directions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-4/3 rounded-2xl overflow-hidden bg-sand border border-sand shadow-sm">
            <Image
              src="/images/brand/dp.jpg"
              alt="Little Plants Mangaluru Store"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
