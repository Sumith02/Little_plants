"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Product, ProductCategory } from "@/types";
import { ProductCard } from "@/components/product/ProductCard";
import { categories } from "@/data/categories";
import {
  SlidersHorizontal,
  X,
  ChevronDown,
  RotateCcw,
  Sparkles,
  Search,
} from "lucide-react";

interface ProductGridWithFiltersProps {
  initialProducts: Product[];
  currentCategory?: ProductCategory | "all";
  initialSubcategory?: string;
  initialSpace?: string;
  initialFilter?: string;
  title: string;
  subtitle?: string;
}

export const ProductGridWithFilters: React.FC<ProductGridWithFiltersProps> = ({
  initialProducts,
  currentCategory = "all",
  initialSubcategory,
  initialSpace,
  initialFilter,
  title,
  subtitle,
}) => {
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">(currentCategory);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>(initialSubcategory || "all");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [selectedLight, setSelectedLight] = useState<string>("all");
  const [selectedWatering, setSelectedWatering] = useState<string>("all");
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [beginnerOnly, setBeginnerOnly] = useState<boolean>(initialFilter?.toLowerCase().includes("beginner") || false);
  const [petSafeOnly, setPetSafeOnly] = useState<boolean>(initialFilter?.toLowerCase().includes("pet") || false);
  const [sortBy, setSortBy] = useState<string>("featured");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Mobile filter drawer state
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Pagination state
  const [displayCount, setDisplayCount] = useState(12);

  // Subcategories available for active category
  const activeCategoryObj = categories.find((c) => c.id === selectedCategory);
  const availableSubcategories = activeCategoryObj?.subcategories || [];

  // Filter products logic
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      // Category filter
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false;
      }

      // Subcategory filter
      if (selectedSubcategory !== "all" && product.subcategory !== selectedSubcategory) {
        return false;
      }

      // Space filter (if set via initialSpace)
      if (initialSpace && !product.tags.includes(initialSpace)) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match =
          product.name.toLowerCase().includes(q) ||
          product.botanicalName?.toLowerCase().includes(q) ||
          product.tags.some((t) => t.toLowerCase().includes(q)) ||
          product.description.toLowerCase().includes(q);
        if (!match) return false;
      }

      // Price filter
      if (priceRange === "under-500" && product.price >= 500) return false;
      if (priceRange === "500-1000" && (product.price < 500 || product.price > 1000)) return false;
      if (priceRange === "1000-2000" && (product.price < 1000 || product.price > 2000)) return false;
      if (priceRange === "above-2000" && product.price <= 2000) return false;

      // Light filter
      if (selectedLight !== "all" && product.careGuide?.light !== selectedLight) {
        return false;
      }

      // Watering filter
      if (selectedWatering !== "all" && product.careGuide?.watering !== selectedWatering) {
        return false;
      }

      // In stock
      if (inStockOnly && !product.inStock) return false;

      // Beginner
      if (beginnerOnly && !product.isBeginnerFriendly) return false;

      // Pet safe
      if (petSafeOnly && !product.isPetSafe) return false;

      return true;
    });
  }, [
    initialProducts,
    selectedCategory,
    selectedSubcategory,
    initialSpace,
    searchQuery,
    priceRange,
    selectedLight,
    selectedWatering,
    inStockOnly,
    beginnerOnly,
    petSafeOnly,
  ]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === "price-asc") {
      return list.sort((a, b) => a.price - b.price);
    }
    if (sortBy === "price-desc") {
      return list.sort((a, b) => b.price - a.price);
    }
    if (sortBy === "rating") {
      return list.sort((a, b) => b.rating - a.rating);
    }
    if (sortBy === "newest") {
      return list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }
    // Default featured: bestsellers first
    return list.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
  }, [filteredProducts, sortBy]);

  // Count active filters
  const activeFilterCount =
    (selectedCategory !== (currentCategory || "all") ? 1 : 0) +
    (selectedSubcategory !== "all" ? 1 : 0) +
    (priceRange !== "all" ? 1 : 0) +
    (selectedLight !== "all" ? 1 : 0) +
    (selectedWatering !== "all" ? 1 : 0) +
    (inStockOnly ? 1 : 0) +
    (beginnerOnly ? 1 : 0) +
    (petSafeOnly ? 1 : 0);

  const clearAllFilters = () => {
    setSelectedCategory(currentCategory || "all");
    setSelectedSubcategory("all");
    setPriceRange("all");
    setSelectedLight("all");
    setSelectedWatering("all");
    setInStockOnly(false);
    setBeginnerOnly(false);
    setPetSafeOnly(false);
    setSearchQuery("");
  };

  const paginatedProducts = sortedProducts.slice(0, displayCount);

  return (
    <div className="space-y-8">
      {/* Header and Category Navigation Pills */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-sand pb-6">
          <div className="space-y-1">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-olive">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xs sm:text-sm text-charcoal-muted max-w-2xl">{subtitle}</p>
            )}
          </div>

          <div className="text-xs text-charcoal-muted font-medium shrink-0">
            Showing <strong className="text-olive">{sortedProducts.length}</strong> botanical specimens
          </div>
        </div>

        {/* Category Filter Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSelectedSubcategory("all");
            }}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === "all"
                ? "bg-olive text-cream shadow-2xs"
                : "bg-cream-50 hover:bg-sand border border-sand text-charcoal"
            }`}
          >
            All Collections
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedCategory(c.id);
                setSelectedSubcategory("all");
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === c.id
                  ? "bg-olive text-cream shadow-2xs"
                  : "bg-cream-50 hover:bg-sand border border-sand text-charcoal"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Subcategory Pills if a specific category is chosen */}
        {availableSubcategories.length > 0 && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-olive/80 mr-1 shrink-0">
              Subcategory:
            </span>
            <button
              onClick={() => setSelectedSubcategory("all")}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer shrink-0 ${
                selectedSubcategory === "all"
                  ? "bg-terracotta text-white"
                  : "bg-sand-light text-charcoal hover:bg-sand"
              }`}
            >
              All {activeCategoryObj?.name}
            </button>
            {availableSubcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubcategory(sub)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer shrink-0 ${
                  selectedSubcategory === sub
                    ? "bg-terracotta text-white"
                    : "bg-sand-light text-charcoal hover:bg-sand"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Layout: Desktop Sidebar Filters + Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* ============================================================
            DESKTOP FILTER SIDEBAR
           ============================================================ */}
        <aside className="hidden lg:block space-y-6 p-5 rounded-2xl bg-cream-50 border border-sand">
          <div className="flex items-center justify-between border-b border-sand pb-3">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-olive" />
              <span className="text-xs font-bold uppercase tracking-wider text-olive">
                Refine Botanicals
              </span>
            </div>
            {activeFilterCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="text-xs text-terracotta hover:underline font-medium cursor-pointer"
              >
                Clear all ({activeFilterCount})
              </button>
            )}
          </div>

          {/* Keyword Search within category */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-olive block">
              Filter by Name / Trait
            </label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-charcoal-muted absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g. Variegated, Sansevieria..."
                className="w-full pl-8 pr-3 py-1.5 bg-white border border-sand rounded-lg text-xs placeholder:text-charcoal-muted/60 focus:outline-none focus:border-terracotta"
              />
            </div>
          </div>

          {/* Quick Attribute Toggles */}
          <div className="space-y-2 border-b border-sand pb-4">
            <label className="text-[11px] font-bold uppercase tracking-wider text-olive block">
              Special Preferences
            </label>
            <div className="space-y-2 text-xs">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={beginnerOnly}
                  onChange={(e) => setBeginnerOnly(e.target.checked)}
                  className="rounded border-sand text-terracotta focus:ring-terracotta"
                />
                <span className="text-charcoal font-medium">Beginner-Friendly Only</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={petSafeOnly}
                  onChange={(e) => setPetSafeOnly(e.target.checked)}
                  className="rounded border-sand text-terracotta focus:ring-terracotta"
                />
                <span className="text-charcoal font-medium">🐾 Certified Pet-Safe</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="rounded border-sand text-terracotta focus:ring-terracotta"
                />
                <span className="text-charcoal font-medium">In Stock Only</span>
              </label>
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-2 border-b border-sand pb-4">
            <label className="text-[11px] font-bold uppercase tracking-wider text-olive block">
              Price Range
            </label>
            <div className="space-y-1.5 text-xs text-charcoal">
              {[
                { id: "all", label: "All Prices" },
                { id: "under-500", label: "Under ₹500" },
                { id: "500-1000", label: "₹500 – ₹1,000" },
                { id: "1000-2000", label: "₹1,000 – ₹2,000" },
                { id: "above-2000", label: "₹2,000 & Above" },
              ].map((opt) => (
                <label key={opt.id} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    value={opt.id}
                    checked={priceRange === opt.id}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="text-terracotta focus:ring-terracotta"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sunlight Requirements */}
          <div className="space-y-2 border-b border-sand pb-4">
            <label className="text-[11px] font-bold uppercase tracking-wider text-olive block">
              Light Requirements
            </label>
            <div className="space-y-1.5 text-xs text-charcoal">
              {[
                { id: "all", label: "Any Light Profile" },
                { id: "Bright Indirect", label: "Bright Indirect Light" },
                { id: "Low Light", label: "Low Light & Shaded" },
                { id: "Medium Light", label: "Medium / Filtered" },
                { id: "Direct Sun", label: "Direct Sunlight" },
              ].map((opt) => (
                <label key={opt.id} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="light"
                    value={opt.id}
                    checked={selectedLight === opt.id}
                    onChange={(e) => setSelectedLight(e.target.value)}
                    className="text-terracotta focus:ring-terracotta"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Watering Frequency */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-olive block">
              Watering Frequency
            </label>
            <div className="space-y-1.5 text-xs text-charcoal">
              {[
                { id: "all", label: "Any Watering Routine" },
                { id: "Weekly", label: "Weekly (Once every 7 days)" },
                { id: "Every 10-14 Days", label: "Every 10-14 Days (Low Care)" },
                { id: "Every 2-3 Days", label: "Every 2-3 Days" },
              ].map((opt) => (
                <label key={opt.id} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="watering"
                    value={opt.id}
                    checked={selectedWatering === opt.id}
                    onChange={(e) => setSelectedWatering(e.target.value)}
                    className="text-terracotta focus:ring-terracotta"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* ============================================================
            PRODUCT GRID & CONTROLS
           ============================================================ */}
        <div className="lg:col-span-3 space-y-6">
          {/* Top Bar: Active Chips & Sort Dropdown */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-3 rounded-2xl bg-cream-50 border border-sand">
            {/* Mobile Filter Toggle Button */}
            <button
              onClick={() => setIsMobileFiltersOpen(true)}
              className="lg:hidden px-4 py-2 rounded-xl bg-sand hover:bg-sand-dark text-charcoal text-xs font-medium flex items-center justify-center gap-2 cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
            </button>

            {/* Active Chips (if any) */}
            <div className="flex flex-wrap items-center gap-1.5 flex-1">
              {beginnerOnly && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-olive-light text-olive text-xs font-medium">
                  <span>Beginner Friendly</span>
                  <button onClick={() => setBeginnerOnly(false)} className="hover:text-terracotta">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {petSafeOnly && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-olive-light text-olive text-xs font-medium">
                  <span>Pet Safe</span>
                  <button onClick={() => setPetSafeOnly(false)} className="hover:text-terracotta">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {priceRange !== "all" && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-sand text-charcoal text-xs font-medium">
                  <span>Price: {priceRange}</span>
                  <button onClick={() => setPriceRange("all")} className="hover:text-terracotta">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedLight !== "all" && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-sand text-charcoal text-xs font-medium">
                  <span>Light: {selectedLight}</span>
                  <button onClick={() => setSelectedLight("all")} className="hover:text-terracotta">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedWatering !== "all" && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-sand text-charcoal text-xs font-medium">
                  <span>Watering: {selectedWatering}</span>
                  <button onClick={() => setSelectedWatering("all")} className="hover:text-terracotta">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {activeFilterCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-terracotta hover:underline ml-1"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Sort Selection */}
            <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
              <span className="text-xs text-charcoal-muted">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-white border border-sand text-xs font-medium text-charcoal focus:outline-none focus:border-terracotta cursor-pointer"
              >
                <option value="featured">Featured & Bestsellers</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">New Arrivals</option>
              </select>
            </div>
          </div>

          {/* Product Grid or Empty State */}
          {sortedProducts.length === 0 ? (
            <div className="text-center py-16 px-4 rounded-3xl bg-cream-50 border border-sand space-y-4">
              <div className="w-16 h-16 rounded-full bg-sand flex items-center justify-center mx-auto text-olive">
                <SlidersHorizontal className="w-8 h-8 opacity-60" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-bold text-olive">
                  No matching botanical items found
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted max-w-md mx-auto">
                  Try clearing some filter criteria, broadening your price range, or searching for a different keyword.
                </p>
              </div>
              <button
                onClick={clearAllFilters}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white text-xs font-medium transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* Load More Button */}
          {displayCount < sortedProducts.length && (
            <div className="text-center pt-8">
              <button
                onClick={() => setDisplayCount((prev) => prev + 12)}
                className="px-8 py-3 rounded-xl bg-sand hover:bg-sand-dark text-olive font-medium text-xs tracking-wide transition-colors cursor-pointer"
              >
                Load More Specimens ({sortedProducts.length - displayCount} remaining)
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ============================================================
          MOBILE FILTER DRAWER
         ============================================================ */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          <div
            onClick={() => setIsMobileFiltersOpen(false)}
            className="fixed inset-0 bg-charcoal/60 backdrop-blur-xs transition-opacity"
          />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-xs bg-cream p-5 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-sand pb-3">
                  <h3 className="font-serif text-lg font-bold text-olive">Filter Catalog</h3>
                  <button
                    onClick={() => setIsMobileFiltersOpen(false)}
                    className="p-1 rounded-full text-charcoal-muted hover:bg-sand"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Filters Content */}
                <div className="space-y-4 text-xs">
                  <div>
                    <span className="font-bold uppercase tracking-wider text-olive block mb-2">
                      Preferences
                    </span>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={beginnerOnly}
                          onChange={(e) => setBeginnerOnly(e.target.checked)}
                          className="rounded text-terracotta"
                        />
                        <span>Beginner-Friendly</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={petSafeOnly}
                          onChange={(e) => setPetSafeOnly(e.target.checked)}
                          className="rounded text-terracotta"
                        />
                        <span>Certified Pet-Safe</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={inStockOnly}
                          onChange={(e) => setInStockOnly(e.target.checked)}
                          className="rounded text-terracotta"
                        />
                        <span>In Stock Only</span>
                      </label>
                    </div>
                  </div>

                  <div className="border-t border-sand pt-3">
                    <span className="font-bold uppercase tracking-wider text-olive block mb-2">
                      Light Requirement
                    </span>
                    <div className="space-y-1.5">
                      {["all", "Bright Indirect", "Low Light", "Direct Sun"].map((l) => (
                        <label key={l} className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="m-light"
                            checked={selectedLight === l}
                            onChange={() => setSelectedLight(l)}
                            className="text-terracotta"
                          />
                          <span>{l === "all" ? "Any Light" : l}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-sand pt-3">
                    <span className="font-bold uppercase tracking-wider text-olive block mb-2">
                      Watering Routine
                    </span>
                    <div className="space-y-1.5">
                      {["all", "Weekly", "Every 10-14 Days"].map((w) => (
                        <label key={w} className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="m-watering"
                            checked={selectedWatering === w}
                            onChange={() => setSelectedWatering(w)}
                            className="text-terracotta"
                          />
                          <span>{w === "all" ? "Any Routine" : w}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-sand flex gap-2">
                <button
                  onClick={clearAllFilters}
                  className="flex-1 py-2.5 rounded-xl border border-sand text-xs font-medium text-charcoal hover:bg-sand"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="flex-1 py-2.5 rounded-xl bg-terracotta text-white text-xs font-medium hover:bg-terracotta-dark"
                >
                  Apply ({sortedProducts.length})
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
