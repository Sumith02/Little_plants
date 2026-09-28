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
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, priority = false }) => {
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

    // If product has complex variant choices (e.g. multiple sizes or materials), open modal
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

  return (
    <>
      <div
        className="group relative flex flex-col bg-cream-50 rounded-2xl border border-sand overflow-hidden hover:border-sand-dark hover:shadow-md transition-all duration-300"
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
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Badges Overlay */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
            {product.isBestseller && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-olive text-cream shadow-2xs">
                <Sparkles className="w-2.5 h-2.5" />
                <span>Bestseller</span>
              </span>
            )}
            {discountPercent > 0 && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-terracotta text-white shadow-2xs">
                {discountPercent}% OFF
              </span>
            )}
            {product.isPetSafe && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-cream/90 backdrop-blur-xs text-olive border border-olive/30 shadow-2xs">
                <ShieldCheck className="w-3 h-3 text-olive" />
                <span>Pet Safe</span>
              </span>
            )}
          </div>

          {/* Wishlist Heart Button */}
          <button
            onClick={handleWishlistToggle}
            aria-label={isFavorite ? "Remove from wishlist" : "Save to wishlist"}
            className="absolute top-2.5 right-2.5 p-2 rounded-full bg-cream/80 backdrop-blur-xs hover:bg-cream text-charcoal transition-all shadow-xs cursor-pointer z-10"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
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
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
          <div>
            {/* Category / Subcategory & Botanical name */}
            <div className="flex items-center justify-between text-[11px] text-charcoal-muted">
              <span>{product.subcategory}</span>
              {product.rating && (
                <div className="flex items-center gap-1 font-medium text-charcoal">
                  <span className="text-terracotta">★</span>
                  <span>{product.rating.toFixed(1)}</span>
                  <span className="text-charcoal-muted/70">({product.reviewCount})</span>
                </div>
              )}
            </div>

            {/* Product Title */}
            <h3 className="font-serif text-base sm:text-lg font-bold text-olive group-hover:text-terracotta transition-colors mt-1 line-clamp-1">
              <Link href={`/products/${product.slug}`}>{product.name}</Link>
            </h3>

            {/* Botanical Latin Name */}
            {product.botanicalName && (
              <p className="text-xs italic text-charcoal-muted line-clamp-1">
                {product.botanicalName}
              </p>
            )}

            {/* Plant Care Indicator Pills (if plant) */}
            {product.careGuide && (
              <div className="flex items-center gap-2 pt-2 text-[11px] text-charcoal-muted">
                <div
                  className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-sand-light border border-sand/70"
                  title={`Light: ${product.careGuide.light}`}
                >
                  <Sun className="w-3 h-3 text-terracotta" />
                  <span className="truncate max-w-[80px]">{product.careGuide.light}</span>
                </div>
                <div
                  className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-sand-light border border-sand/70"
                  title={`Watering: ${product.careGuide.watering}`}
                >
                  <Droplets className="w-3 h-3 text-olive" />
                  <span className="truncate max-w-[80px]">{product.careGuide.watering}</span>
                </div>
              </div>
            )}
          </div>

          {/* Price & Mobile Add */}
          <div className="pt-2 border-t border-sand/70 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-base font-bold text-charcoal font-sans">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs line-through text-charcoal-muted">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Mobile-only Quick Add Button */}
            <button
              onClick={handleDirectAdd}
              aria-label={`Add ${product.name} to cart`}
              className="sm:hidden p-2 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white cursor-pointer transition-colors"
            >
              {justAdded ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
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
