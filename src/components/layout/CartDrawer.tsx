"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/config/site";
import { products } from "@/data/products";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  ShoppingBag,
  Sparkles,
  Tag,
  Check,
} from "lucide-react";

export const CartDrawer: React.FC = () => {
  const {
    items,
    isDrawerOpen,
    closeDrawer,
    updateQuantity,
    removeItem,
    subtotal,
    shippingFee,
    couponDiscount,
    couponCode,
    applyCoupon,
    removeCoupon,
    total,
    amountNeededForFreeShipping,
    freeShippingPercentage,
    addItem,
  } = useCart();

  const [promoInput, setPromoInput] = useState("");
  const [promoFeedback, setPromoFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // Quick care addons (recommend 2 items not already in cart)
  const careAddons = products
    .filter(
      (p) =>
        (p.category === "plant-care" || p.id === "care-brass-mister") &&
        !items.some((item) => item.productId === p.id)
    )
    .slice(0, 2);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyCoupon(promoInput.trim());
    if (res.success) {
      setPromoFeedback({ type: "success", message: res.message });
      setPromoInput("");
    } else {
      setPromoFeedback({ type: "error", message: res.message });
    }
    setTimeout(() => setPromoFeedback(null), 4000);
  };

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeDrawer}
        className="fixed inset-0 bg-charcoal/50 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-cream border-l border-sand shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-sand bg-cream-50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-terracotta" />
              <h2 className="font-serif text-lg font-semibold text-olive">
                Your Botanical Basket ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={closeDrawer}
              aria-label="Close cart drawer"
              className="p-1.5 rounded-full text-charcoal-muted hover:text-charcoal hover:bg-sand transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-4 py-3 bg-sand-light border-b border-sand text-xs">
            <div className="flex items-center justify-between font-medium text-charcoal mb-1.5">
              <span>
                {amountNeededForFreeShipping === 0 ? (
                  <span className="text-olive font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-olive" />
                    Unlocked: Complimentary Eco-Transit across India!
                  </span>
                ) : (
                  <span>
                    Add{" "}
                    <strong className="text-terracotta">
                      {formatPrice(amountNeededForFreeShipping)}
                    </strong>{" "}
                    more for Free Delivery
                  </span>
                )}
              </span>
              <span className="text-charcoal-muted font-mono">{freeShippingPercentage}%</span>
            </div>
            <div className="w-full bg-sand rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-terracotta h-full rounded-full transition-all duration-500"
                style={{ width: `${freeShippingPercentage}%` }}
              />
            </div>
          </div>

          {/* Items Container */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-sand flex items-center justify-center mx-auto text-olive">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-semibold text-olive">
                    Your basket is empty
                  </h3>
                  <p className="text-xs text-charcoal-muted max-w-xs mx-auto">
                    Bring life into your home with our acclimatized indoor foliage and handcrafted terracotta urns.
                  </p>
                </div>
                <Link
                  href="/shop"
                  onClick={closeDrawer}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-terracotta hover:bg-terracotta-dark text-white text-xs font-medium transition-colors"
                >
                  <span>Explore Bestsellers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              <div className="divide-y divide-sand space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="pt-3 first:pt-0 flex gap-3.5">
                    {/* Item Image */}
                    <div className="relative w-18 h-18 rounded-lg overflow-hidden bg-sand shrink-0">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        sizes="72px"
                        className="object-cover"
                      />
                    </div>

                    {/* Item Info */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <Link
                            href={`/products/${item.product.slug}`}
                            onClick={closeDrawer}
                            className="text-xs font-semibold text-charcoal hover:text-terracotta transition-colors line-clamp-1"
                          >
                            {item.product.name}
                          </Link>
                          <button
                            onClick={() => removeItem(item.id)}
                            aria-label={`Remove ${item.product.name}`}
                            className="text-charcoal-muted hover:text-terracotta p-0.5"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Variants display */}
                        <div className="text-[11px] text-charcoal-muted mt-0.5 space-y-0.5">
                          {item.selectedSize && (
                            <div>Size: {item.selectedSize.name.split("(")[0]}</div>
                          )}
                          {item.selectedPlanterMaterial && (
                            <div>Planter: {item.selectedPlanterMaterial.name}</div>
                          )}
                          {item.selectedPlanterColor && (
                            <div className="flex items-center gap-1.5">
                              <span>Color:</span>
                              <span
                                className="w-2.5 h-2.5 rounded-full border border-sand-dark inline-block"
                                style={{ backgroundColor: item.selectedPlanterColor.hex }}
                              />
                              <span>{item.selectedPlanterColor.name}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Quantity Stepper and Unit Price */}
                      <div className="flex items-center justify-between mt-2 pt-1 border-t border-sand/50">
                        <div className="flex items-center border border-sand rounded bg-white">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-charcoal hover:bg-sand-light transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-medium font-mono">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-charcoal hover:bg-sand-light transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-xs font-semibold text-charcoal">
                          {formatPrice(item.unitPrice * item.quantity)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Quick Care Add-ons carousel if items exist */}
            {items.length > 0 && careAddons.length > 0 && (
              <div className="mt-4 pt-4 border-t border-sand">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-olive uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-terracotta" />
                  <span>Nourish & Protect Essentials</span>
                </div>
                <div className="space-y-2">
                  {careAddons.map((addon) => (
                    <div
                      key={addon.id}
                      className="p-2.5 rounded-lg bg-cream-50 border border-sand flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="relative w-10 h-10 rounded overflow-hidden bg-sand shrink-0">
                        <Image
                          src={addon.images[0]}
                          alt={addon.name}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-charcoal truncate">{addon.name}</div>
                        <div className="text-terracotta font-semibold text-[11px]">
                          {formatPrice(addon.price)}
                        </div>
                      </div>
                      <button
                        onClick={() => addItem(addon)}
                        className="px-2.5 py-1 rounded bg-sand hover:bg-terracotta hover:text-white text-charcoal font-medium text-[11px] transition-colors shrink-0"
                      >
                        + Add
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer with Breakdown and CTA */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-sand bg-cream-50 space-y-3">
              {/* Promo input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-charcoal-muted absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="Coupon code (e.g. WELCOME10)"
                    className="w-full pl-8 pr-3 py-1.5 bg-white border border-sand rounded-lg text-xs placeholder:text-charcoal-muted/60 focus:outline-none focus:border-terracotta uppercase"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-lg bg-olive text-white text-xs font-medium hover:bg-olive-dark transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </form>

              {promoFeedback && (
                <div
                  className={`text-[11px] p-2 rounded ${
                    promoFeedback.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {promoFeedback.message}
                </div>
              )}

              {couponCode && (
                <div className="flex items-center justify-between text-xs text-olive bg-olive-light/60 px-2.5 py-1.5 rounded border border-olive-subtle">
                  <div className="flex items-center gap-1.5">
                    <Tag className="w-3 h-3 text-terracotta" />
                    <span>
                      Coupon applied: <strong>{couponCode}</strong> (-
                      {formatPrice(couponDiscount)})
                    </span>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-terracotta hover:underline text-[11px]"
                  >
                    Remove
                  </button>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-charcoal-muted">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-charcoal font-medium">{formatPrice(subtotal)}</span>
                </div>

                {couponDiscount > 0 && (
                  <div className="flex justify-between text-terracotta">
                    <span>Promo Discount</span>
                    <span>-{formatPrice(couponDiscount)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span>
                    {shippingFee === 0 ? (
                      <span className="text-olive font-medium">FREE</span>
                    ) : (
                      formatPrice(shippingFee)
                    )}
                  </span>
                </div>

                <div className="pt-2 border-t border-sand flex justify-between text-sm font-semibold text-charcoal">
                  <span>Total (Incl. all taxes)</span>
                  <span className="text-base text-olive font-serif font-bold">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2 pt-1">
                <Link
                  href="/checkout"
                  onClick={closeDrawer}
                  className="w-full py-3 px-4 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-medium text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="text-center">
                  <Link
                    href="/cart"
                    onClick={closeDrawer}
                    className="text-xs text-charcoal-muted hover:text-terracotta underline transition-colors"
                  >
                    View detailed cart & gift options
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
