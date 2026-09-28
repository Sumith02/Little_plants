"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Product, ProductVariantSize, ProductVariantMaterial, ProductVariantColor } from "@/types";
import { formatPrice } from "@/config/site";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { PincodeChecker } from "@/components/product/PincodeChecker";
import { ProductCard } from "@/components/product/ProductCard";
import {
  Heart,
  ShoppingBag,
  Sun,
  Droplets,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  Home,
  Check,
  Sparkles,
  Info,
  RotateCcw,
  Truck,
  Box,
  Compass,
  ArrowRight,
} from "lucide-react";

interface ProductDetailViewProps {
  product: Product;
  compatiblePlanterProducts: Product[];
  careAddonProducts: Product[];
  relatedProducts: Product[];
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  compatiblePlanterProducts,
  careAddonProducts,
  relatedProducts,
}) => {
  const router = useRouter();
  const { addItem, openDrawer } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  // Active gallery image
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Variant selections
  const [selectedSize, setSelectedSize] = useState<ProductVariantSize | undefined>(
    product.variants?.sizes?.[0]
  );
  const [selectedMaterial, setSelectedMaterial] = useState<ProductVariantMaterial | undefined>(
    product.variants?.planterMaterials?.[0]
  );
  const [selectedColor, setSelectedColor] = useState<ProductVariantColor | undefined>(
    product.variants?.planterColors?.[0]
  );
  const [quantity, setQuantity] = useState(1);

  // Accordion active state
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({
    care: true,
    specs: false,
    shipping: false,
    contents: false,
  });

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Pricing calculation based on variants
  let unitPrice = product.price;
  if (selectedSize) unitPrice += selectedSize.priceModifier;
  if (selectedMaterial) unitPrice += selectedMaterial.priceModifier;
  const totalPrice = unitPrice * quantity;

  // Add to cart handler
  const handleAddToCart = () => {
    addItem(product, selectedSize, selectedMaterial, selectedColor, quantity);
  };

  // Buy now handler
  const handleBuyNow = () => {
    addItem(product, selectedSize, selectedMaterial, selectedColor, quantity);
    router.push("/checkout");
  };

  const isFavorite = isInWishlist(product.id);

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-charcoal-muted">
        <Link href="/" className="hover:text-charcoal flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <Link href={`/category/${product.category}`} className="hover:text-charcoal capitalize">
          {product.category.replace("-", " & ")}
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <span className="text-olive font-medium truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* ============================================================
            LEFT COLUMN: IMAGE GALLERY WITH THUMBNAILS
           ============================================================ */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Stage Image */}
          <div className="relative aspect-4/5 w-full rounded-3xl overflow-hidden bg-sand/30 border border-sand shadow-xs group">
            <Image
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
              {product.isBestseller && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-olive text-cream shadow-2xs">
                  <Sparkles className="w-3 h-3" />
                  <span>Bestseller</span>
                </span>
              )}
              {product.isPetSafe && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-cream/90 backdrop-blur-xs text-olive border border-olive/30 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-olive" />
                  <span>Certified Pet Safe</span>
                </span>
              )}
            </div>

            {/* Wishlist button */}
            <button
              onClick={() => toggleWishlist(product.id)}
              aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
              className="absolute top-4 right-4 p-3 rounded-full bg-cream/90 backdrop-blur-xs hover:bg-cream text-charcoal transition-all shadow-sm z-10 cursor-pointer"
            >
              <Heart
                className={`w-5 h-5 ${
                  isFavorite ? "fill-terracotta text-terracotta" : "text-charcoal"
                }`}
              />
            </button>
          </div>

          {/* Thumbnail Strip */}
          {product.images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden bg-sand shrink-0 border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? "border-terracotta ring-2 ring-terracotta/20 scale-102"
                      : "border-sand hover:border-sand-dark opacity-75 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Living Plant Disclaimer Notice */}
          <div className="p-4 rounded-2xl bg-sand-light/60 border border-sand text-xs text-charcoal-muted flex items-start gap-3">
            <Info className="w-4 h-4 text-olive shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-olive font-semibold">Living Organism Note:</strong> Because each botanical specimen is naturally propagated and hand-nurtured in our nurseries, natural variations in leaf count, height, foliage markings, and stem curve are completely normal.
            </p>
          </div>
        </div>

        {/* ============================================================
            RIGHT COLUMN: DETAILS, VARIANTS, ACTIONS
           ============================================================ */}
        <div className="lg:col-span-5 space-y-6">
          {/* Header Info */}
          <div className="space-y-2 border-b border-sand pb-4">
            <div className="flex items-center justify-between text-xs text-charcoal-muted">
              <span>{product.subcategory}</span>
              <div className="flex items-center gap-1 font-medium text-charcoal">
                <span className="text-terracotta">★</span>
                <span>{product.rating.toFixed(1)}</span>
                <span className="text-charcoal-muted/80">({product.reviewCount} verified reviews)</span>
              </div>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-olive">
              {product.name}
            </h1>

            {product.botanicalName && (
              <p className="text-sm italic font-serif text-charcoal-muted">
                {product.botanicalName}
              </p>
            )}

            {/* Price and Stock status */}
            <div className="flex items-baseline justify-between pt-2">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-charcoal font-sans">
                  {formatPrice(unitPrice)}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-sm line-through text-charcoal-muted">
                    {formatPrice(product.originalPrice + (selectedSize?.priceModifier || 0))}
                  </span>
                )}
                {product.originalPrice > product.price && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-terracotta/10 text-terracotta">
                    Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>

              <div>
                {product.inStock ? (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-olive">
                    <span className="w-2 h-2 rounded-full bg-olive animate-pulse" />
                    <span>In Stock ({product.stockCount} left)</span>
                  </span>
                ) : (
                  <span className="text-xs font-medium text-red-700">Currently Acclimatizing</span>
                )}
              </div>
            </div>
            <div className="text-[11px] text-charcoal-muted">Inclusive of all GST & taxes</div>
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Plant Care Quick Matrix (if plant) */}
          {product.careGuide && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-2xl bg-cream-50 border border-sand text-xs">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-[11px] text-terracotta font-semibold">
                  <Sun className="w-3.5 h-3.5" />
                  <span>Sunlight</span>
                </div>
                <div className="text-charcoal font-medium text-[11px] truncate">
                  {product.careGuide.light}
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-[11px] text-olive font-semibold">
                  <Droplets className="w-3.5 h-3.5" />
                  <span>Watering</span>
                </div>
                <div className="text-charcoal font-medium text-[11px] truncate">
                  {product.careGuide.watering}
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-[11px] text-charcoal font-semibold">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Difficulty</span>
                </div>
                <div className="text-charcoal font-medium text-[11px] truncate">
                  {product.careGuide.difficulty.split(" ")[0]}
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-[11px] text-olive font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Pets</span>
                </div>
                <div className="text-charcoal font-medium text-[11px]">
                  {product.isPetSafe ? "Non-Toxic" : "Curious Pets"}
                </div>
              </div>
            </div>
          )}

          {/* ============================================================
              VARIANT SELECTION: SIZE, PLANTER, COLOR
             ============================================================ */}
          <div className="space-y-4 pt-2 border-t border-sand">
            {/* Size Selector */}
            {product.variants?.sizes && product.variants.sizes.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-olive">
                    Select Plant Size
                  </label>
                  {selectedSize && (
                    <span className="text-xs text-charcoal-muted">{selectedSize.heightGuide}</span>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {product.variants.sizes.map((size) => (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedSize?.id === size.id
                          ? "border-terracotta bg-terracotta/5 shadow-2xs font-semibold"
                          : "border-sand bg-cream-50 hover:border-sand-dark"
                      }`}
                    >
                      <div className="text-xs text-charcoal">{size.name.split("(")[0]}</div>
                      <div className="text-[10px] text-charcoal-muted">
                        {size.priceModifier > 0 ? `+${formatPrice(size.priceModifier)}` : "Standard"}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Planter Material Selector */}
            {product.variants?.planterMaterials && product.variants.planterMaterials.length > 0 && (
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-olive block">
                  Select Planter Material
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.variants.planterMaterials.map((mat) => (
                    <button
                      key={mat.id}
                      type="button"
                      onClick={() => setSelectedMaterial(mat)}
                      className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                        selectedMaterial?.id === mat.id
                          ? "border-terracotta bg-terracotta/5 shadow-2xs font-semibold"
                          : "border-sand bg-cream-50 hover:border-sand-dark"
                      }`}
                    >
                      <span className="text-xs text-charcoal">{mat.name}</span>
                      <span className="text-[11px] text-charcoal-muted">
                        {mat.priceModifier === 0 ? "Inc." : `+${formatPrice(mat.priceModifier)}`}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Planter Color Selector */}
            {product.variants?.planterColors && product.variants.planterColors.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-olive">
                    Planter Color Tone
                  </label>
                  {selectedColor && (
                    <span className="text-xs text-charcoal-muted">{selectedColor.name}</span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  {product.variants.planterColors.map((col) => (
                    <button
                      key={col.id}
                      type="button"
                      onClick={() => setSelectedColor(col)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                        selectedColor?.id === col.id
                          ? "ring-2 ring-terracotta ring-offset-2 scale-105"
                          : "border border-sand-dark hover:scale-105"
                      }`}
                      style={{ backgroundColor: col.hex }}
                      aria-label={`Select color ${col.name}`}
                    >
                      {selectedColor?.id === col.id && (
                        <Check
                          className={`w-4 h-4 ${
                            col.id === "col-sand" ? "text-charcoal" : "text-white"
                          }`}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quantity & Purchase CTAs */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              {/* Stepper */}
              <div className="flex items-center border border-sand rounded-xl bg-white px-2 py-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 text-charcoal hover:bg-sand rounded"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-4 text-sm font-semibold font-mono">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2 text-charcoal hover:bg-sand rounded"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Add to Cart button */}
              <button
                onClick={handleAddToCart}
                className="flex-1 py-3.5 px-6 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Basket &bull; {formatPrice(totalPrice)}</span>
              </button>
            </div>

            {/* Buy Now button */}
            <button
              onClick={handleBuyNow}
              className="w-full py-3 px-6 rounded-xl bg-olive hover:bg-olive-dark text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-sm cursor-pointer"
            >
              Buy Now with Instant Express Dispatch
            </button>
          </div>

          {/* Delivery PIN Code Checker */}
          <PincodeChecker />

          {/* ============================================================
              DETAILED ACCORDIONS
             ============================================================ */}
          <div className="space-y-3 pt-4 border-t border-sand">
            {/* 1. Plant Care Guidance */}
            {product.careGuide && (
              <div className="border border-sand rounded-2xl overflow-hidden bg-cream-50">
                <button
                  onClick={() => toggleAccordion("care")}
                  className="w-full p-4 flex items-center justify-between text-left text-xs font-bold uppercase tracking-wider text-olive cursor-pointer"
                >
                  <span>Botanical Care Ritual</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openAccordions.care ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openAccordions.care && (
                  <div className="p-4 pt-0 text-xs text-charcoal-muted space-y-3 border-t border-sand/50">
                    <div>
                      <strong className="text-olive block mb-0.5">Light:</strong>
                      <p>{product.careGuide.lightDetail}</p>
                    </div>
                    <div>
                      <strong className="text-olive block mb-0.5">Watering:</strong>
                      <p>{product.careGuide.wateringDetail}</p>
                    </div>
                    <div>
                      <strong className="text-olive block mb-0.5">Humidity:</strong>
                      <p>{product.careGuide.humidity}</p>
                    </div>
                    <div>
                      <strong className="text-olive block mb-0.5">Seasonal Nutrition:</strong>
                      <p>{product.careGuide.feed}</p>
                    </div>
                    <div>
                      <strong className="text-olive block mb-0.5">Troubleshooting Common Issues:</strong>
                      <p>{product.careGuide.commonIssues}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 2. Specifications & Dimensions */}
            <div className="border border-sand rounded-2xl overflow-hidden bg-cream-50">
              <button
                onClick={() => toggleAccordion("specs")}
                className="w-full p-4 flex items-center justify-between text-left text-xs font-bold uppercase tracking-wider text-olive cursor-pointer"
              >
                <span>Dimensions & Placement</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openAccordions.specs ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordions.specs && (
                <div className="p-4 pt-0 text-xs text-charcoal-muted space-y-2 border-t border-sand/50">
                  <p>
                    <strong className="text-olive">Approximate Dimensions:</strong>{" "}
                    {product.approximateDimensions}
                  </p>
                  {product.careGuide && (
                    <div>
                      <strong className="text-olive block mb-1">Recommended Placements:</strong>
                      <ul className="list-disc pl-4 space-y-0.5">
                        {product.careGuide.idealPlacement.map((place, idx) => (
                          <li key={idx}>{place}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 3. What's Inside the Box */}
            <div className="border border-sand rounded-2xl overflow-hidden bg-cream-50">
              <button
                onClick={() => toggleAccordion("contents")}
                className="w-full p-4 flex items-center justify-between text-left text-xs font-bold uppercase tracking-wider text-olive cursor-pointer"
              >
                <span>What&apos;s Inside the Box</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openAccordions.contents ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordions.contents && (
                <div className="p-4 pt-0 text-xs text-charcoal-muted space-y-2 border-t border-sand/50">
                  <ul className="space-y-1.5">
                    {product.packageContents.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-olive shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* 4. Shipping & 7-Day Replacement Policy */}
            <div className="border border-sand rounded-2xl overflow-hidden bg-cream-50">
              <button
                onClick={() => toggleAccordion("shipping")}
                className="w-full p-4 flex items-center justify-between text-left text-xs font-bold uppercase tracking-wider text-olive cursor-pointer"
              >
                <span>Transit Guarantee & Returns</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openAccordions.shipping ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordions.shipping && (
                <div className="p-4 pt-0 text-xs text-charcoal-muted space-y-2.5 border-t border-sand/50 leading-relaxed">
                  <p>
                    <strong>Eco-Transit Packaging:</strong> Dispatched within 24 hours in ventilated, biodegradable coconut coir cushioning that protects roots and retains moisture for up to 8 days.
                  </p>
                  <p>
                    <strong>7-Day Replacement Guarantee:</strong> If your plant or planter arrives damaged, dry, or with broken stems, simply WhatsApp us a photo within 7 days of delivery for an immediate free replacement.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          COMPATIBLE PLANTERS & CARE ADD-ONS CROSS-SELL
         ============================================================ */}
      {(compatiblePlanterProducts.length > 0 || careAddonProducts.length > 0) && (
        <section className="space-y-6 pt-10 border-t border-sand">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
              Complete Your Ritual
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-olive mt-1">
              Compatible Planters & Organic Care
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...compatiblePlanterProducts, ...careAddonProducts].slice(0, 4).map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}

      {/* ============================================================
          RELATED PRODUCTS
         ============================================================ */}
      {relatedProducts.length > 0 && (
        <section className="space-y-6 pt-10 border-t border-sand">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
                You May Also Admire
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-olive mt-1">
                Complementary Botanicals
              </h2>
            </div>
            <Link href="/shop" className="text-xs font-semibold text-terracotta hover:underline">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.slice(0, 4).map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}

      {/* ============================================================
          STICKY MOBILE PURCHASE BAR (Mobile Only)
         ============================================================ */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-cream/95 backdrop-blur-md border-t border-sand p-3 shadow-lg flex items-center justify-between gap-3">
        <div>
          <div className="text-xs font-bold text-charcoal">{formatPrice(unitPrice)}</div>
          <div className="text-[10px] text-charcoal-muted truncate max-w-[140px]">
            {selectedSize?.name.split("(")[0] || "Standard"} &bull;{" "}
            {selectedMaterial?.name.split(" ")[0] || "Nursery"}
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="flex-1 py-2.5 px-4 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white text-xs font-medium tracking-wide flex items-center justify-center gap-1.5 shadow-sm"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Add to Basket</span>
        </button>
      </div>
    </div>
  );
};
