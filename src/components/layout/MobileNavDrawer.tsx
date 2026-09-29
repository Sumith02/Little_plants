"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories as defaultCategories } from "@/data/categories";
import { useCatalog } from "@/context/CatalogContext";
import { siteConfig } from "@/config/site";
import {
  X,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Layers,
  Truck,
  BookOpen,
  MapPin,
  Heart,
  Phone,
  Settings,
} from "lucide-react";

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export const MobileNavDrawer: React.FC<MobileNavDrawerProps> = ({
  isOpen,
  onClose,
  onOpenSearch,
}) => {
  const { categories } = useCatalog();
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleCategory = (catId: string) => {
    setOpenCategory((prev) => (prev === catId ? null : catId));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-charcoal/60 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-cream border-r border-sand shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Top Bar */}
          <div className="p-4 border-b border-sand flex items-center justify-between bg-cream-50">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-2"
              aria-label="Little Plants Home"
            >
              <div className="relative h-8 w-28 flex items-center">
                <Image
                  src={siteConfig.logos.green}
                  alt={siteConfig.brandName}
                  fill
                  sizes="120px"
                  className="object-contain object-left"
                />
              </div>
              <span className="text-[10px] font-semibold text-olive bg-sand/60 px-1.5 py-0.5 rounded">
                {siteConfig.kannadaBrandName}
              </span>
            </Link>
            <button
              onClick={onClose}
              aria-label="Close navigation"
              className="p-1.5 rounded-full text-charcoal-muted hover:text-charcoal hover:bg-sand"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Search Bar trigger */}
          <div className="p-4 border-b border-sand">
            <button
              onClick={() => {
                onClose();
                onOpenSearch();
              }}
              className="w-full py-2.5 px-3 rounded-xl bg-white border border-sand text-left text-xs text-charcoal-muted flex items-center justify-between shadow-2xs"
            >
              <span>Search plants, pots, care...</span>
              <span className="p-1 rounded bg-sand text-charcoal text-[10px] font-medium">Search</span>
            </button>
          </div>

          {/* Core Interactive Highlights */}
          <div className="p-3 bg-sand-light/60 border-b border-sand space-y-1.5">
            <Link
              href="/quiz"
              onClick={onClose}
              className="flex items-center gap-2.5 p-2 rounded-lg bg-terracotta/10 text-terracotta font-medium text-xs hover:bg-terracotta/15 transition-colors"
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <div className="flex-1">
                <span className="block font-semibold">Find My Plant Quiz</span>
                <span className="text-[10px] opacity-80">60-second personalized match</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/bundle-builder"
              onClick={onClose}
              className="flex items-center gap-2.5 p-2 rounded-lg bg-olive/10 text-olive font-medium text-xs hover:bg-olive/15 transition-colors"
            >
              <Layers className="w-4 h-4 shrink-0" />
              <div className="flex-1">
                <span className="block font-semibold">Build Your Green Corner</span>
                <span className="text-[10px] opacity-80">Plant + Planter + Care (15% off)</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Navigation Accordion */}
          <div className="p-2 space-y-1">
            <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-olive/70">
              Botanical Catalog
            </div>

            {categories.map((cat) => (
              <div key={cat.id} className="border-b border-sand/40 last:border-none">
                <div className="flex items-center justify-between">
                  <Link
                    href={`/category/${cat.slug}`}
                    onClick={onClose}
                    className="flex-1 py-2.5 px-3 text-xs font-semibold text-charcoal hover:text-terracotta transition-colors"
                  >
                    {cat.name}
                  </Link>
                  {cat.subcategories.length > 0 && (
                    <button
                      onClick={() => toggleCategory(cat.id)}
                      className="p-2.5 text-charcoal-muted hover:text-charcoal"
                      aria-label={`Toggle ${cat.name} subcategories`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openCategory === cat.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {openCategory === cat.id && (
                  <div className="pl-6 pr-3 pb-2 space-y-1 bg-sand-light/40 rounded-b-lg">
                    {cat.subcategories.map((sub) => (
                      <Link
                        key={sub}
                        href={`/category/${cat.slug}?sub=${encodeURIComponent(sub)}`}
                        onClick={onClose}
                        className="block py-1.5 text-xs text-charcoal-muted hover:text-terracotta"
                      >
                        {sub}
                      </Link>
                    ))}
                    <Link
                      href={`/category/${cat.slug}`}
                      onClick={onClose}
                      className="block pt-1 text-[11px] font-semibold text-terracotta hover:underline"
                    >
                      View all {cat.name} →
                    </Link>
                  </div>
                )}
              </div>
            ))}

            {/* Shop by Room */}
            <div className="pt-3">
              <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-olive/70">
                Shop by Space
              </div>
              <div className="grid grid-cols-2 gap-1.5 px-2 pt-1">
                {["Living Room", "Bedroom", "Balcony", "Workspace"].map((sp) => (
                  <Link
                    key={sp}
                    href={`/shop?space=${encodeURIComponent(sp.toLowerCase().replace(" ", "-"))}`}
                    onClick={onClose}
                    className="p-2 rounded bg-sand-light text-[11px] font-medium text-charcoal hover:bg-sand text-center"
                  >
                    {sp}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="p-4 border-t border-sand bg-cream-50 space-y-2">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <Link
              href="/track"
              onClick={onClose}
              className="flex items-center gap-1.5 p-2 rounded bg-cream border border-sand text-charcoal hover:border-olive"
            >
              <Truck className="w-3.5 h-3.5 text-olive" />
              <span>Track Order</span>
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center gap-1.5 p-2 rounded bg-cream border border-sand text-charcoal hover:border-olive"
            >
              <Phone className="w-3.5 h-3.5 text-olive" />
              <span>Contact Store</span>
            </Link>
            <Link
              href="/wishlist"
              onClick={onClose}
              className="flex items-center gap-1.5 p-2 rounded bg-cream border border-sand text-charcoal hover:border-olive"
            >
              <Heart className="w-3.5 h-3.5 text-terracotta" />
              <span>Wishlist</span>
            </Link>
            <Link
              href="/journal"
              onClick={onClose}
              className="flex items-center gap-1.5 p-2 rounded bg-cream border border-sand text-charcoal hover:border-olive"
            >
              <BookOpen className="w-3.5 h-3.5 text-olive" />
              <span>Plant Journal</span>
            </Link>
          </div>

          {/* Store Owner Admin Link */}
          <Link
            href="/admin"
            onClick={onClose}
            className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-sand/80 hover:bg-olive hover:text-white border border-sand-dark text-olive text-xs font-semibold transition-colors shadow-2xs"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Store Admin Access</span>
          </Link>

          <div className="pt-2 text-center text-[11px] text-charcoal-muted flex items-center justify-center gap-1.5">
            <MapPin className="w-3 h-3 text-terracotta" />
            <span>Store at Mannagudda Rd, Mangaluru • 098454 74725</span>
          </div>
        </div>
      </div>
    </div>
  );
};
