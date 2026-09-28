"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { ProductCard } from "@/components/product/ProductCard";
import {
  Search as SearchIcon,
  X,
  ChevronRight,
  Home,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const cleanQuery = query.trim().toLowerCase();

  const matchingProducts = cleanQuery
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(cleanQuery) ||
          p.botanicalName?.toLowerCase().includes(cleanQuery) ||
          p.category.toLowerCase().includes(cleanQuery) ||
          p.subcategory.toLowerCase().includes(cleanQuery) ||
          p.tags.some((t) => t.toLowerCase().includes(cleanQuery)) ||
          p.description.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchingCategories = cleanQuery
    ? categories.filter(
        (c) =>
          c.name.toLowerCase().includes(cleanQuery) ||
          c.subcategories.some((s) => s.toLowerCase().includes(cleanQuery))
      )
    : [];

  const popularTags = [
    "Air Purifying",
    "Monstera",
    "Low Light",
    "Terracotta Urn",
    "Pet Safe",
    "Ceramic Pots",
    "Neem Oil",
    "Heirloom Seeds",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-charcoal-muted">
        <Link href="/" className="hover:text-charcoal flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <span className="text-olive font-medium">Search</span>
        {cleanQuery && (
          <>
            <ChevronRight className="w-3 h-3 text-sand-dark" />
            <span className="text-terracotta truncate max-w-xs">&ldquo;{query}&rdquo;</span>
          </>
        )}
      </nav>

      {/* Search Input Box */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-olive">
          Search the Botanical Studio
        </h1>

        <form onSubmit={handleSearchSubmit} className="relative flex items-center shadow-xs">
          <SearchIcon className="w-5 h-5 text-olive absolute left-4" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search plants by name, botanical species, room, or care..."
            className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-cream-50 border border-sand-dark text-charcoal placeholder:text-charcoal-muted/60 text-sm focus:outline-none focus:border-terracotta"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                router.push("/search");
              }}
              className="absolute right-4 p-1 text-charcoal-muted hover:text-charcoal"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </form>

        {/* Suggestion Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs">
          <span className="text-charcoal-muted">Suggested:</span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setQuery(tag);
                router.push(`/search?q=${encodeURIComponent(tag)}`);
              }}
              className="px-3 py-1 rounded-full bg-sand-light hover:bg-sand text-charcoal border border-sand transition-colors cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Search Results Area */}
      {cleanQuery ? (
        <div className="space-y-8">
          {/* Matched Categories row */}
          {matchingCategories.length > 0 && (
            <div className="p-4 rounded-2xl bg-cream-50 border border-sand space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-olive block">
                Related Categories
              </span>
              <div className="flex flex-wrap gap-2">
                {matchingCategories.map((c) => (
                  <Link
                    key={c.id}
                    href={`/category/${c.slug}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-olive-light text-olive text-xs font-medium hover:bg-olive hover:text-white transition-colors border border-olive-subtle"
                  >
                    <span>{c.name} ({c.productCount})</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between border-b border-sand pb-4">
            <h2 className="text-sm font-semibold text-charcoal">
              Found <strong className="text-olive">{matchingProducts.length}</strong> results for &ldquo;{query}&rdquo;
            </h2>
            {matchingProducts.length > 0 && (
              <span className="text-xs text-charcoal-muted">Acclimatized stock available</span>
            )}
          </div>

          {/* Products Grid */}
          {matchingProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {matchingProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16 px-4 rounded-3xl bg-cream-50 border border-sand space-y-5 max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-sand flex items-center justify-center mx-auto text-olive">
                <SearchIcon className="w-8 h-8 opacity-60" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-bold text-olive">
                  No direct botanical matches
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  We couldn&apos;t find products matching &ldquo;{query}&rdquo;. Check spelling, try general terms like &ldquo;succulent&rdquo;, or let our quiz find a plant for you.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/quiz"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Take Plant Finder Quiz</span>
                </Link>
                <Link
                  href="/shop"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-sand hover:bg-sand-dark text-olive text-xs font-medium transition-colors"
                >
                  Browse All Collections
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Zero Query Showcase: Curated Bestsellers */
        <div className="space-y-6 pt-6 border-t border-sand">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl font-bold text-olive">
              Popular Botanical Selections
            </h3>
            <Link href="/shop" className="text-xs font-semibold text-terracotta hover:underline">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-charcoal-muted">Loading search...</div>}>
      <SearchContent />
    </Suspense>
  );
}
