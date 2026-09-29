"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { categories as defaultCategories } from "@/data/categories";
import { products as defaultProducts } from "@/data/products";
import { useCatalog } from "@/context/CatalogContext";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { SearchModal } from "./SearchModal";
import { MobileNavDrawer } from "./MobileNavDrawer";
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu,
  Sparkles,
  ChevronDown,
  Layers,
  Sprout,
} from "lucide-react";

export const Header: React.FC = () => {
  const { categories, products } = useCatalog();
  const { openDrawer: openCartDrawer, itemCount } = useCart();
  const { count: wishlistCount } = useWishlist();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Featured plant for mega menu highlight
  const featuredPlant = products.find((p) => p.isBestseller && p.category === "plants") || products[0];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-cream/95 backdrop-blur-md shadow-xs border-b border-sand"
            : "bg-cream border-b border-sand/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Mobile Hamburger & Search (Mobile only) */}
            <div className="flex items-center gap-1 lg:hidden">
              <button
                onClick={() => setIsMobileNavOpen(true)}
                className="p-2 rounded-lg text-charcoal hover:text-terracotta hover:bg-sand/60 transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-lg text-charcoal hover:text-terracotta hover:bg-sand/60 transition-colors"
                aria-label="Open search dialog"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Brand Logo & Name */}
            <div className="flex-1 lg:flex-none text-center lg:text-left">
              <Link href="/" className="inline-flex items-center gap-2 group py-1" aria-label="Little Plants Home">
                <div className="relative h-9 sm:h-11 w-32 sm:w-40 flex items-center">
                  <Image
                    src={siteConfig.logos.green}
                    alt={siteConfig.brandName}
                    fill
                    sizes="(max-width: 640px) 130px, 160px"
                    className="object-contain object-center lg:object-left group-hover:opacity-90 transition-opacity"
                    priority
                  />
                </div>
                <div className="hidden xl:flex flex-col border-l border-sand pl-2 text-left">
                  <span className="text-[11px] font-semibold text-olive tracking-wide">
                    {siteConfig.kannadaBrandName}
                  </span>
                  <span className="text-[8px] uppercase tracking-widest text-charcoal-muted">
                    Botanical Studio
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Desktop Mega Navigation */}
            <nav className="hidden lg:flex items-center gap-7 h-full">
              {/* Plants with Mega Menu */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveMegaMenu("plants")}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <Link
                  href="/category/plants"
                  className="text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-terracotta py-2 flex items-center gap-1 transition-colors"
                >
                  <span>Plants</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </Link>

                {/* Plants Mega Dropdown */}
                {activeMegaMenu === "plants" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-cream rounded-2xl shadow-xl border border-sand-dark p-6 grid grid-cols-3 gap-6 animate-in fade-in duration-150 z-50">
                    <div className="space-y-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-olive block pb-1 border-b border-sand">
                        By Space & Function
                      </span>
                      <div className="space-y-1.5 text-xs text-charcoal-muted">
                        <Link
                          href="/shop?category=plants&filter=Air+Purifying"
                          className="block hover:text-terracotta transition-colors py-1"
                        >
                          Air Purifying Plants
                        </Link>
                        <Link
                          href="/shop?category=plants&filter=Low+Light"
                          className="block hover:text-terracotta transition-colors py-1"
                        >
                          Low Light & Shaded Rooms
                        </Link>
                        <Link
                          href="/shop?category=plants&filter=Large+Floor+Plants"
                          className="block hover:text-terracotta transition-colors py-1"
                        >
                          Large Floor & Statement Plants
                        </Link>
                        <Link
                          href="/shop?category=plants&filter=Pet-Safe"
                          className="block hover:text-terracotta transition-colors py-1 font-medium text-olive"
                        >
                          🐾 Certified Pet-Safe
                        </Link>
                        <Link
                          href="/shop?category=plants&filter=Succulents+%26+Cacti"
                          className="block hover:text-terracotta transition-colors py-1"
                        >
                          Succulents & Bonsai
                        </Link>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-olive block pb-1 border-b border-sand">
                        Curated Rooms
                      </span>
                      <div className="space-y-1.5 text-xs text-charcoal-muted">
                        <Link
                          href="/shop?space=living-room"
                          className="block hover:text-terracotta transition-colors py-1"
                        >
                          Living Room Sanctuaries
                        </Link>
                        <Link
                          href="/shop?space=bedroom"
                          className="block hover:text-terracotta transition-colors py-1"
                        >
                          Night-Oxygen Bedrooms
                        </Link>
                        <Link
                          href="/shop?space=balcony"
                          className="block hover:text-terracotta transition-colors py-1"
                        >
                          Sun-Drenched Balconies
                        </Link>
                        <Link
                          href="/shop?space=workspace"
                          className="block hover:text-terracotta transition-colors py-1"
                        >
                          Study & Work Desks
                        </Link>
                        <Link
                          href="/quiz"
                          className="inline-flex items-center gap-1.5 text-terracotta font-medium hover:underline pt-2 text-[11px]"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Take Plant Finder Quiz →</span>
                        </Link>
                      </div>
                    </div>

                    {/* Featured Product Card in Mega Menu */}
                    <div className="bg-sand-light rounded-xl p-3.5 border border-sand flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-terracotta block mb-1">
                          Botanical Highlight
                        </span>
                        <div className="relative aspect-4/3 rounded-lg overflow-hidden mb-2 bg-sand">
                          <Image
                            src={featuredPlant.images[0]}
                            alt={featuredPlant.name}
                            fill
                            sizes="200px"
                            className="object-cover"
                          />
                        </div>
                        <h4 className="text-xs font-semibold text-charcoal line-clamp-1">
                          {featuredPlant.name}
                        </h4>
                        <p className="text-[11px] text-charcoal-muted line-clamp-1">
                          {featuredPlant.shortDescription}
                        </p>
                      </div>
                      <Link
                        href={`/products/${featuredPlant.slug}`}
                        className="mt-2 text-xs font-semibold text-terracotta hover:underline block text-right"
                      >
                        Shop Now →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Pots & Planters */}
              <Link
                href="/category/pots-planters"
                className="text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-terracotta py-2 transition-colors"
              >
                Pots & Planters
              </Link>

              {/* Seeds */}
              <Link
                href="/category/seeds"
                className="text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-terracotta py-2 transition-colors"
              >
                Seeds
              </Link>

              {/* Plant Care */}
              <Link
                href="/category/plant-care"
                className="text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-terracotta py-2 transition-colors"
              >
                Care
              </Link>

              {/* Gardening Tools */}
              <Link
                href="/category/gardening-tools"
                className="text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-terracotta py-2 transition-colors"
              >
                Tools
              </Link>

              {/* Gifts */}
              <Link
                href="/category/gifts"
                className="text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-terracotta py-2 transition-colors"
              >
                Gifts
              </Link>

              {/* Custom Bundle Builder Pill */}
              <Link
                href="/bundle-builder"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand hover:bg-sand-dark text-charcoal text-xs font-medium transition-colors"
              >
                <Layers className="w-3.5 h-3.5 text-terracotta" />
                <span>Build Corner</span>
              </Link>

              {/* Plant Finder Quiz Pill */}
              <Link
                href="/quiz"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terracotta/10 hover:bg-terracotta/20 text-terracotta text-xs font-semibold transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Plant Quiz</span>
              </Link>
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Search button on Desktop */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="hidden lg:flex items-center gap-2 py-1.5 px-3 rounded-full bg-sand-light hover:bg-sand text-xs text-charcoal-muted border border-sand transition-colors cursor-pointer"
                aria-label="Search store"
              >
                <Search className="w-3.5 h-3.5 text-olive" />
                <span className="hidden xl:inline">Search botanicals...</span>
                <kbd className="hidden xl:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white rounded border border-sand">
                  /
                </kbd>
              </button>

              {/* Account Link */}
              <Link
                href="/account"
                className="p-2 rounded-full text-charcoal hover:text-terracotta hover:bg-sand/60 transition-colors relative"
                aria-label="Customer account"
              >
                <User className="w-5 h-5" />
              </Link>

              {/* Wishlist Link */}
              <Link
                href="/wishlist"
                className="p-2 rounded-full text-charcoal hover:text-terracotta hover:bg-sand/60 transition-colors relative"
                aria-label={`Wishlist with ${wishlistCount} items`}
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-terracotta text-white text-[10px] font-bold flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart Drawer Trigger */}
              <button
                onClick={openCartDrawer}
                className="p-2 rounded-full text-charcoal hover:text-terracotta hover:bg-sand/60 transition-colors relative cursor-pointer"
                aria-label={`Shopping cart with ${itemCount} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-olive text-white text-[10px] font-bold flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Instant Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Navigation Drawer */}
      <MobileNavDrawer
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />
    </>
  );
};
