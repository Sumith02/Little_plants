"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { formatPrice } from "@/config/site";
import { Product } from "@/types";
import { Search, X, ArrowRight, Sparkles } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const popularSearches = [
    "Monstera",
    "Air Purifying",
    "Low Light",
    "Terracotta Urn",
    "Pet Safe",
    "Ceramic Planters",
    "Heirloom Seeds",
  ];

  const trimmed = query.trim().toLowerCase();

  const filteredProducts: Product[] = trimmed
    ? products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(trimmed) ||
            p.botanicalName?.toLowerCase().includes(trimmed) ||
            p.subcategory.toLowerCase().includes(trimmed) ||
            p.tags.some((t) => t.toLowerCase().includes(trimmed)) ||
            p.description.toLowerCase().includes(trimmed)
        )
        .slice(0, 6)
    : [];

  const matchedCategories = trimmed
    ? categories.filter(
        (c) =>
          c.name.toLowerCase().includes(trimmed) ||
          c.subcategories.some((s) => s.toLowerCase().includes(trimmed))
      )
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 bg-charcoal/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-cream rounded-2xl max-w-2xl w-full shadow-2xl border border-sand-dark overflow-hidden flex flex-col max-h-[85vh]">
        {/* Search Input Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="relative flex items-center p-4 border-b border-sand bg-cream-50"
        >
          <Search className="w-5 h-5 text-olive shrink-0 ml-1" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search plants, terracotta pots, seeds, organic care..."
            className="w-full bg-transparent px-3 py-2 text-charcoal placeholder:text-charcoal-muted/60 text-base focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="p-1 rounded-full text-charcoal-muted hover:text-charcoal mr-2"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-charcoal-muted hover:bg-sand text-xs font-medium uppercase tracking-wider"
          >
            Esc
          </button>
        </form>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {!trimmed ? (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-olive uppercase tracking-wider block mb-2">
                  Popular Searches
                </span>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 text-xs rounded-full bg-sand-light hover:bg-sand text-charcoal border border-sand transition-colors cursor-pointer"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-sand">
                <span className="text-xs font-semibold text-olive uppercase tracking-wider block mb-3">
                  Shop by Core Collections
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {categories.map((c) => (
                    <Link
                      key={c.id}
                      href={`/category/${c.slug}`}
                      onClick={onClose}
                      className="p-2.5 rounded-lg bg-cream-50 hover:bg-sand border border-sand transition-colors text-xs font-medium text-charcoal flex items-center justify-between"
                    >
                      <span>{c.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-terracotta" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Matched Categories */}
              {matchedCategories.length > 0 && (
                <div>
                  <span className="text-xs font-semibold text-olive uppercase tracking-wider block mb-2">
                    Matching Categories
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {matchedCategories.map((c) => (
                      <Link
                        key={c.id}
                        href={`/category/${c.slug}`}
                        onClick={onClose}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md bg-olive-light text-olive border border-olive-subtle font-medium hover:bg-olive hover:text-white transition-colors"
                      >
                        <span>{c.name}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Products */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-olive uppercase tracking-wider">
                    Product Matches ({filteredProducts.length})
                  </span>
                  {filteredProducts.length > 0 && (
                    <Link
                      href={`/search?q=${encodeURIComponent(trimmed)}`}
                      onClick={onClose}
                      className="text-xs font-medium text-terracotta hover:underline inline-flex items-center gap-1"
                    >
                      <span>View all results</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>

                {filteredProducts.length === 0 ? (
                  <div className="text-center py-8 bg-sand-light/50 rounded-xl p-4">
                    <p className="text-sm font-medium text-charcoal">
                      No matching botanical products found for &ldquo;{trimmed}&rdquo;
                    </p>
                    <p className="text-xs text-charcoal-muted mt-1">
                      Try searching for broader terms like &ldquo;Snake Plant&rdquo;, &ldquo;Low Light&rdquo;, or &ldquo;Pots&rdquo;.
                    </p>
                  </div>
                ) : (
                  <div className="divide-y divide-sand">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        onClick={onClose}
                        className="flex items-center gap-3 py-3 px-2 rounded-lg hover:bg-sand-light transition-colors group"
                      >
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-sand">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            sizes="48px"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-charcoal group-hover:text-terracotta transition-colors truncate">
                            {product.name}
                          </div>
                          {product.botanicalName && (
                            <div className="text-xs italic text-charcoal-muted truncate">
                              {product.botanicalName}
                            </div>
                          )}
                          <div className="text-xs text-olive-dark font-medium mt-0.5">
                            {product.subcategory}
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-sm font-semibold text-charcoal">
                            {formatPrice(product.price)}
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="text-xs line-through text-charcoal-muted block">
                              {formatPrice(product.originalPrice)}
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Plant Finder Quiz banner in search */}
              <div className="p-3.5 rounded-xl bg-sand border border-sand-dark flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-terracotta shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold text-charcoal block">Not sure what fits?</span>
                    <span className="text-charcoal-muted">Take our 60-second Plant Finder Quiz</span>
                  </div>
                </div>
                <Link
                  href="/quiz"
                  onClick={onClose}
                  className="px-3 py-1.5 rounded-md bg-terracotta hover:bg-terracotta-dark text-white text-xs font-medium shrink-0 transition-colors"
                >
                  Take Quiz
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
