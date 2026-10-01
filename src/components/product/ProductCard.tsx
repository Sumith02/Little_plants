"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { formatPrice } from "@/config/site";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { QuickAddModal } from "./QuickAddModal";
import {
  Heart,
  Sun,
  Droplets,
  ShieldCheck,
  ShoppingBag,
  Check,
  Sparkles,
} from "lucide-react";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
  layout?: "grid" | "list";
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  priority = false,
  layout = "grid",
}) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addItem } = useCart();

  const [isHovered, setIsHovered] = useState(false);
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const isFavorite = isInWishlist(product.id);

  // Discount calculation
  const discountPercent =
    product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;

  // Secondary image on hover if available
  const displayImage =
    isHovered && product.images.length > 1 ? product.images[1] : product.images[0];

  const handleDirectAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // If product has complex variant choices, open modal
    const hasVariants =
      (product.variants?.sizes && product.variants.sizes.length > 1) ||
      (product.variants?.planterMaterials && product.variants.planterMaterials.length > 1);

    if (hasVariants) {
      setIsQuickAddOpen(true);
    } else {
      addItem(
        product,
        product.variants?.sizes?.[0],
        product.variants?.planterMaterials?.[0],
        product.variants?.planterColors?.[0],
        1
      );
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 2000);
    }
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  // ==========================================
  // 1. LIST VIEW (Full-width row on mobile/desktop)
  // ==========================================
  if (layout === "list") {
    return (
      <>
        <div
          className="group relative flex flex-row bg-cream-50 rounded-2xl border border-sand overflow-hidden hover:border-sand-dark hover:shadow-md transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left: Square Image */}
          <Link
            href={`/products/${product.slug}`}
            className="relative w-28 sm:w-40 aspect-square bg-sand/40 overflow-hidden shrink-0 block"
          >
            <Image
              src={displayImage}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 120px, 160px"
              priority={priority}
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            {discountPercent > 0 && (
              <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-terracotta text-white shadow-2xs">
                {discountPercent}% OFF
              </span>
            )}
          </Link>

          {/* Right: Info */}
          <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between min-w-0">
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-charcoal-muted">
                <span className="truncate">{product.subcategory}</span>
                {product.rating && (
                  <div className="flex items-center gap-1 font-medium text-charcoal shrink-0">
                    <span className="text-terracotta">★</span>
                    <span>{product.rating.toFixed(1)}</span>
                    <span className="text-charcoal-muted/70 hidden sm:inline">({product.reviewCount})</span>
                  </div>
                )}
              </div>

              <h3 className="font-serif text-sm sm:text-base font-bold text-olive group-hover:text-terracotta transition-colors line-clamp-1">
                <Link href={`/products/${product.slug}`}>{product.name}</Link>
              </h3>

              {product.botanicalName && (
                <p className="text-[10px] sm:text-xs italic text-charcoal-muted line-clamp-1">
                  {product.botanicalName}
                </p>
              )}

              {product.careGuide && (
                <div className="flex items-center gap-1.5 pt-1 text-[10px] text-charcoal-muted">
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-sand-light border border-sand/70 truncate max-w-[100px]">
                    <Sun className="w-2.5 h-2.5 text-terracotta shrink-0" />
                    <span className="truncate">{product.careGuide.light}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-sand-light border border-sand/70 truncate max-w-[100px]">
                    <Droplets className="w-2.5 h-2.5 text-olive shrink-0" />
                    <span className="truncate">{product.careGuide.watering}</span>
                  </span>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-sand/70 flex items-center justify-between">
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm sm:text-base font-bold text-charcoal font-sans">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-[10px] sm:text-xs line-through text-charcoal-muted">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleWishlistToggle}
                  aria-label={isFavorite ? "Remove from wishlist" : "Save to wishlist"}
                  className="p-1.5 rounded-lg bg-cream hover:bg-sand text-charcoal transition-all shadow-xs cursor-pointer"
                >
                  <Heart
                    className={`w-3.5 h-3.5 ${
                      isFavorite ? "fill-terracotta text-terracotta" : "text-charcoal"
                    }`}
                  />
                </button>
                <button
                  onClick={handleDirectAdd}
                  className="px-3 py-1.5 rounded-lg bg-terracotta hover:bg-terracotta-dark text-white text-xs font-medium transition-colors flex items-center gap-1 shadow-2xs cursor-pointer"
                >
                  {justAdded ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <QuickAddModal
          product={product}
          isOpen={isQuickAddOpen}
          onClose={() => setIsQuickAddOpen(false)}
        />
      </>
    );
  }

  // ==========================================
  // 2. GRID VIEW (Optimized for 2-column mobile)
  // ==========================================
  return (
    <>
      <div
        className="group relative flex flex-col bg-cream-50 rounded-xl sm:rounded-2xl border border-sand overflow-hidden hover:border-sand-dark hover:shadow-md transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container with Badges */}
        <Link
          href={`/products/${product.slug}`}
          className="relative aspect-4/5 w-full bg-sand/40 overflow-hidden block"
        >
          <Image
            src={displayImage}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={priority}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Badges Overlay */}
          <div className="absolute top-1.5 sm:top-2.5 left-1.5 sm:left-2.5 flex flex-col gap-1 z-10">
            {product.isBestseller && (
              <span className="inline-flex items-center gap-0.5 px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider bg-olive text-cream shadow-2xs">
                <Sparkles className="w-2.5 h-2.5" />
                <span className="hidden xs:inline">Bestseller</span>
                <span className="xs:hidden">Top</span>
              </span>
            )}
            {discountPercent > 0 && (
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-terracotta text-white shadow-2xs w-fit">
                {discountPercent}% OFF
              </span>
            )}
            {product.isPetSafe && (
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-medium bg-cream/90 backdrop-blur-xs text-olive border border-olive/30 shadow-2xs w-fit">
                <ShieldCheck className="w-2.5 h-2.5 text-olive shrink-0" />
                <span className="hidden xs:inline">Pet Safe</span>
              </span>
            )}
          </div>

          {/* Wishlist Heart Button */}
          <button
            onClick={handleWishlistToggle}
            aria-label={isFavorite ? "Remove from wishlist" : "Save to wishlist"}
            className="absolute top-1.5 sm:top-2.5 right-1.5 sm:right-2.5 p-1.5 sm:p-2 rounded-full bg-cream/80 backdrop-blur-xs hover:bg-cream text-charcoal transition-all shadow-xs cursor-pointer z-10"
          >
            <Heart
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${
                isFavorite
                  ? "fill-terracotta text-terracotta scale-110"
                  : "text-charcoal hover:text-terracotta"
              }`}
            />
          </button>

          {/* Hover Quick Add Overlay Button for Desktop */}
          <div className="absolute inset-x-3 bottom-3 hidden sm:block opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
            <button
              onClick={handleDirectAdd}
              className="w-full py-2.5 px-4 rounded-xl bg-cream/95 backdrop-blur-md hover:bg-terracotta hover:text-white text-olive font-medium text-xs tracking-wide border border-sand shadow-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-olive group-hover:text-white" />
                  <span>Added to Basket</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Quick Add</span>
                </>
              )}
            </button>
          </div>
        </Link>

        {/* Product Details Card Body */}
        <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between space-y-1.5 sm:space-y-3">
          <div>
            {/* Category / Subcategory & Botanical name */}
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-charcoal-muted">
              <span className="truncate">{product.subcategory}</span>
              {product.rating && (
                <div className="flex items-center gap-0.5 font-medium text-charcoal shrink-0">
                  <span className="text-terracotta text-[10px]">★</span>
                  <span>{product.rating.toFixed(1)}</span>
                </div>
              )}
            </div>

            {/* Product Title */}
            <h3 className="font-serif text-xs sm:text-base font-bold text-olive group-hover:text-terracotta transition-colors mt-0.5 line-clamp-1">
              <Link href={`/products/${product.slug}`}>{product.name}</Link>
            </h3>

            {/* Botanical Latin Name */}
            {product.botanicalName && (
              <p className="text-[10px] sm:text-xs italic text-charcoal-muted line-clamp-1">
                {product.botanicalName}
              </p>
            )}

            {/* Plant Care Indicator Pills (if plant) */}
            {product.careGuide && (
              <div className="flex items-center gap-1 pt-1 text-[10px] sm:text-[11px] text-charcoal-muted">
                <div
                  className="flex items-center gap-0.5 px-1 sm:px-1.5 py-0.5 rounded bg-sand-light border border-sand/70 truncate"
                  title={`Light: ${product.careGuide.light}`}
                >
                  <Sun className="w-2.5 h-2.5 text-terracotta shrink-0" />
                  <span className="truncate max-w-[60px] sm:max-w-[80px]">{product.careGuide.light}</span>
                </div>
                <div
                  className="flex items-center gap-0.5 px-1 sm:px-1.5 py-0.5 rounded bg-sand-light border border-sand/70 truncate"
                  title={`Watering: ${product.careGuide.watering}`}
                >
                  <Droplets className="w-2.5 h-2.5 text-olive shrink-0" />
                  <span className="truncate max-w-[60px] sm:max-w-[80px]">{product.careGuide.watering}</span>
                </div>
              </div>
            )}
          </div>

          {/* Price & Mobile Add */}
          <div className="pt-1.5 sm:pt-2 border-t border-sand/70 flex items-center justify-between">
            <div className="flex items-baseline gap-1 sm:gap-2">
              <span className="text-xs sm:text-base font-bold text-charcoal font-sans">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-[10px] sm:text-xs line-through text-charcoal-muted">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Mobile-only Quick Add Button */}
            <button
              onClick={handleDirectAdd}
              aria-label={`Add ${product.name} to cart`}
              className="sm:hidden p-1.5 rounded-lg bg-terracotta hover:bg-terracotta-dark text-white cursor-pointer transition-colors"
            >
              {justAdded ? <Check className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Quick Add Modal */}
      <QuickAddModal
        product={product}
        isOpen={isQuickAddOpen}
        onClose={() => setIsQuickAddOpen(false)}
      />
    </>
  );
};
