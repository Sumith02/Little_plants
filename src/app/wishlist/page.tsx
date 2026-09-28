"use client";

import React from "react";
import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { ProductCard } from "@/components/product/ProductCard";
import { Heart, ArrowRight, Trash2, Home, ChevronRight } from "lucide-react";

export default function WishlistPage() {
  const { wishlistProducts, clearWishlist, count } = useWishlist();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-charcoal-muted">
        <Link href="/" className="hover:text-charcoal flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <span className="text-olive font-medium">Wishlist</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-sand pb-6">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-olive">
            Your Botanical Wishlist
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
            Plants, planters, and botanical rituals saved to your personal sanctuary.
          </p>
        </div>

        {count > 0 && (
          <button
            onClick={clearWishlist}
            className="text-xs text-charcoal-muted hover:text-terracotta inline-flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Wishlist ({count})</span>
          </button>
        )}
      </div>

      {/* Wishlist Items or Empty State */}
      {count === 0 ? (
        <div className="text-center py-20 px-4 rounded-3xl bg-cream-50 border border-sand space-y-4 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-sand flex items-center justify-center mx-auto text-terracotta">
            <Heart className="w-8 h-8 opacity-50" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-olive">
              Your wishlist is currently peaceful
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-muted">
              Tap the heart icon on any plant or planter card to save it for later reflection or upcoming room renovations.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white text-xs font-medium transition-colors"
            >
              <span>Explore Botanical Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlistProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
