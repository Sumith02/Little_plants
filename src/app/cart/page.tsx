"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/config/site";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Tag,
  Check,
  Home,
  ChevronRight,
  Gift,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";

export default function CartPage() {
  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    shippingFee,
    total,
    itemCount,
    couponCode,
    couponDiscount,
    applyCoupon,
    removeCoupon,
    shippingMethod,
    setShippingMethod,
    giftMessage,
    setGiftMessage,
    amountNeededForFreeShipping,
    freeShippingPercentage,
  } = useCart();

  const [promoInput, setPromoInput] = useState("");
  const [promoMessage, setPromoMessage] = useState<{ type: "success" | "error"; text: string } | null>(
    null
  );

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyCoupon(promoInput.trim());
    if (res.success) {
      setPromoMessage({ type: "success", text: res.message });
      setPromoInput("");
    } else {
      setPromoMessage({ type: "error", text: res.message });
    }
    setTimeout(() => setPromoMessage(null), 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-charcoal-muted">
        <Link href="/" className="hover:text-charcoal flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <span className="text-olive font-medium">Cart</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-sand pb-6">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-olive">
            Your Botanical Basket
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
            Review your living plants, custom planters, and organic care essentials before checkout.
          </p>
        </div>

        {items.length > 0 && (
          <button
            onClick={clearCart}
            className="text-xs text-charcoal-muted hover:text-terracotta inline-flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Empty Cart ({itemCount})</span>
          </button>
        )}
      </div>

      {items.length === 0 ? (
        /* Empty State */
        <div className="text-center py-20 px-4 rounded-3xl bg-cream-50 border border-sand space-y-5 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-sand flex items-center justify-center mx-auto text-olive">
            <ShoppingBag className="w-8 h-8 opacity-60" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-bold text-olive">Your basket is resting</h3>
            <p className="text-xs sm:text-sm text-charcoal-muted">
              You haven&apos;t added any botanical specimens yet. Explore our nursery collections or take the plant finder quiz.
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/shop"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white text-xs font-medium transition-colors flex items-center justify-center gap-2"
            >
              <span>Explore All Plants</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/quiz"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sand hover:bg-sand-dark text-olive text-xs font-medium transition-colors"
            >
              Take Plant Quiz
            </Link>
          </div>
        </div>
      ) : (
        /* Full Cart Grid */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Items List & Gift Note */}
          <div className="lg:col-span-8 space-y-6">
            {/* Free Shipping Bar */}
            <div className="p-4 rounded-2xl bg-cream-50 border border-sand space-y-2">
              <div className="flex items-center justify-between text-xs text-charcoal font-medium">
                <span>
                  {amountNeededForFreeShipping === 0 ? (
                    <span className="text-olive font-semibold flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-olive" />
                      Congratulations! You unlocked complimentary eco-transit delivery across India.
                    </span>
                  ) : (
                    <span>
                      Add{" "}
                      <strong className="text-terracotta font-semibold">
                        {formatPrice(amountNeededForFreeShipping)}
                      </strong>{" "}
                      more to qualify for Free Eco-Transit Delivery
                    </span>
                  )}
                </span>
                <span className="font-mono text-charcoal-muted">{freeShippingPercentage}%</span>
              </div>
              <div className="w-full bg-sand rounded-full h-2 overflow-hidden">
                <div
                  className="bg-terracotta h-full rounded-full transition-all duration-500"
                  style={{ width: `${freeShippingPercentage}%` }}
                />
              </div>
            </div>

            {/* Line Items Table/List */}
            <div className="rounded-2xl bg-cream-50 border border-sand divide-y divide-sand overflow-hidden">
              {items.map((item) => (
                <div key={item.id} className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* Item Image */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-sand shrink-0 border border-sand">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between space-y-2">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/products/${item.product.slug}`}
                          className="font-serif text-lg font-bold text-olive hover:text-terracotta transition-colors line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-charcoal-muted hover:text-terracotta p-1 transition-colors"
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {item.product.botanicalName && (
                        <p className="text-xs italic text-charcoal-muted">
                          {item.product.botanicalName}
                        </p>
                      )}

                      {/* Variant Badges */}
                      <div className="flex flex-wrap gap-2 pt-2 text-xs text-charcoal-muted">
                        {item.selectedSize && (
                          <span className="px-2 py-0.5 rounded bg-sand border border-sand-dark">
                            Size: {item.selectedSize.name.split("(")[0]}
                          </span>
                        )}
                        {item.selectedPlanterMaterial && (
                          <span className="px-2 py-0.5 rounded bg-sand border border-sand-dark">
                            Planter: {item.selectedPlanterMaterial.name}
                          </span>
                        )}
                        {item.selectedPlanterColor && (
                          <span className="px-2 py-0.5 rounded bg-sand border border-sand-dark inline-flex items-center gap-1.5">
                            <span
                              className="w-2.5 h-2.5 rounded-full border border-sand-dark"
                              style={{ backgroundColor: item.selectedPlanterColor.hex }}
                            />
                            <span>{item.selectedPlanterColor.name}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity Stepper and Line Price */}
                    <div className="flex items-center justify-between pt-3 border-t border-sand/50">
                      <div className="flex items-center border border-sand rounded-xl bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2.5 py-1.5 text-charcoal hover:bg-sand rounded-l-xl transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-semibold font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2.5 py-1.5 text-charcoal hover:bg-sand rounded-r-xl transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-base font-bold text-charcoal font-sans">
                          {formatPrice(item.unitPrice * item.quantity)}
                        </span>
                        <span className="text-xs text-charcoal-muted block">
                          ({formatPrice(item.unitPrice)} each)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gift Message / Delivery Instructions Section */}
            <div className="p-5 rounded-2xl bg-cream-50 border border-sand space-y-3">
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-terracotta" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-olive">
                  Add Handwritten Botanical Gift Card (Complimentary)
                </h3>
              </div>
              <p className="text-xs text-charcoal-muted">
                Sending this as a housewarming, birthday, or festive surprise? We will hand-write your personal message onto our handmade seeded paper card.
              </p>
              <textarea
                value={giftMessage}
                onChange={(e) => setGiftMessage(e.target.value)}
                placeholder="Write your personal gift message or delivery note (e.g. 'Leave with security if not home')..."
                rows={3}
                className="w-full p-3 bg-white border border-sand rounded-xl text-xs text-charcoal placeholder:text-charcoal-muted/60 focus:outline-none focus:border-terracotta"
              />
            </div>

            {/* Value Guarantees Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-sand-light/50 border border-sand text-xs space-y-1">
                <Truck className="w-4 h-4 text-olive" />
                <span className="font-semibold text-charcoal block">Plastic-Free Transit</span>
                <span className="text-charcoal-muted text-[11px]">Breathable coir cushioned crates</span>
              </div>
              <div className="p-4 rounded-xl bg-sand-light/50 border border-sand text-xs space-y-1">
                <RotateCcw className="w-4 h-4 text-terracotta" />
                <span className="font-semibold text-charcoal block">7-Day Guarantee</span>
                <span className="text-charcoal-muted text-[11px]">Hassle-free transit replacement</span>
              </div>
              <div className="p-4 rounded-xl bg-sand-light/50 border border-sand text-xs space-y-1">
                <ShieldCheck className="w-4 h-4 text-olive" />
                <span className="font-semibold text-charcoal block">Pune Nursery Acclimatized</span>
                <span className="text-charcoal-muted text-[11px]">Grown for Indian apartment conditions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary & Checkout */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-cream-50 border border-sand space-y-5 sticky top-28 shadow-xs">
              <h2 className="font-serif text-xl font-bold text-olive border-b border-sand pb-3">
                Order Summary
              </h2>

              {/* Coupon Code Input */}
              <form onSubmit={handleApplyPromo} className="space-y-2">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-charcoal-muted absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      placeholder="Promo Code"
                      className="w-full pl-9 pr-3 py-2 bg-white border border-sand rounded-xl text-xs uppercase placeholder:text-charcoal-muted/60 focus:outline-none focus:border-terracotta"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-olive hover:bg-olive-dark text-white text-xs font-medium transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </div>

                {promoMessage && (
                  <div
                    className={`text-[11px] p-2 rounded-lg ${
                      promoMessage.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {promoMessage.text}
                  </div>
                )}

                {couponCode && (
                  <div className="flex items-center justify-between text-xs text-olive bg-olive-light px-3 py-2 rounded-lg border border-olive-subtle">
                    <span>
                      Code: <strong>{couponCode}</strong> (-{formatPrice(couponDiscount)})
                    </span>
                    <button
                      onClick={removeCoupon}
                      className="text-terracotta hover:underline text-[11px] font-medium"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </form>

              {/* Shipping Method Selector */}
              <div className="space-y-2 border-t border-sand pt-4">
                <label className="text-xs font-bold uppercase tracking-wider text-olive block">
                  Shipping Option
                </label>
                <div className="space-y-2 text-xs">
                  <label
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                      shippingMethod === "standard"
                        ? "border-terracotta bg-terracotta/5"
                        : "border-sand bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="shipMethod"
                        checked={shippingMethod === "standard"}
                        onChange={() => setShippingMethod("standard")}
                        className="text-terracotta"
                      />
                      <div>
                        <span className="font-semibold text-charcoal block">Standard Eco-Transit</span>
                        <span className="text-[11px] text-charcoal-muted">3-5 business days</span>
                      </div>
                    </div>
                    <span className="font-medium">
                      {subtotal >= 999 ? "FREE" : formatPrice(99)}
                    </span>
                  </label>

                  <label
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                      shippingMethod === "express"
                        ? "border-terracotta bg-terracotta/5"
                        : "border-sand bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="shipMethod"
                        checked={shippingMethod === "express"}
                        onChange={() => setShippingMethod("express")}
                        className="text-terracotta"
                      />
                      <div>
                        <span className="font-semibold text-charcoal block">Express Botanical Air Care</span>
                        <span className="text-[11px] text-charcoal-muted">1-2 business days</span>
                      </div>
                    </div>
                    <span className="font-medium">{formatPrice(199)}</span>
                  </label>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 border-t border-sand pt-4 text-xs text-charcoal-muted">
                <div className="flex justify-between">
                  <span>Subtotal ({itemCount} items)</span>
                  <span className="text-charcoal font-medium">{formatPrice(subtotal)}</span>
                </div>

                {couponDiscount > 0 && (
                  <div className="flex justify-between text-terracotta">
                    <span>Coupon Savings</span>
                    <span>-{formatPrice(couponDiscount)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Shipping Fee</span>
                  <span>
                    {shippingFee === 0 ? (
                      <span className="text-olive font-semibold">FREE</span>
                    ) : (
                      formatPrice(shippingFee)
                    )}
                  </span>
                </div>

                <div className="pt-3 border-t border-sand flex items-baseline justify-between text-base font-bold text-charcoal">
                  <span>Total Amount</span>
                  <span className="text-2xl text-olive font-serif">{formatPrice(total)}</span>
                </div>
                <span className="text-[11px] text-charcoal-muted/80 block text-right">
                  Includes all applicable Indian GST & nursery levies
                </span>
              </div>

              {/* Checkout Button */}
              <Link
                href="/checkout"
                className="w-full py-4 px-6 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-medium text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Secure Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="text-center text-[11px] text-charcoal-muted">
                🔒 Simulated 256-bit SSL encrypted checkout
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
