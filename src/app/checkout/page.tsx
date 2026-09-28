"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useOrders } from "@/context/OrderContext";
import { siteConfig, formatPrice } from "@/config/site";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  ChevronRight,
  Home,
  CreditCard,
  QrCode,
  Banknote,
  AlertCircle,
  Truck,
  RotateCcw,
} from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const {
    items,
    subtotal,
    shippingFee,
    couponDiscount,
    couponCode,
    shippingMethod,
    setShippingMethod,
    giftMessage,
    total,
    clearCart,
  } = useCart();

  const { createOrder } = useOrders();

  // Form states
  const [formData, setFormData] = useState({
    fullName: "Ananya Deshmukh",
    email: "ananya.d@example.com",
    phone: "9820045123",
    addressLine1: "Flat 402, Magnolia Residency, 12th Main Road",
    addressLine2: "HAL 2nd Stage, Indiranagar",
    landmark: "Near Defense Colony Park",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560038",
  });

  const [paymentMethod, setPaymentMethod] = useState<"razorpay_simulated" | "cod_simulated">(
    "razorpay_simulated"
  );
  const [paymentSubtype, setPaymentSubtype] = useState<"upi" | "card" | "netbanking">("upi");
  const [upiId, setUpiId] = useState("ananya@okhdfcbank");
  const [cardNumber, setCardNumber] = useState("4111 2222 3333 4444");
  const [cardExpiry, setCardExpiry] = useState("09/28");
  const [cardCvv, setCardCvv] = useState("789");

  // Step state: 1 = Shipping & Address, 2 = Payment & Verification
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Auto-fill city/state when PIN code is entered
  const handlePincodeChange = (pin: string) => {
    const clean = pin.replace(/\D/g, "");
    setFormData((prev) => ({ ...prev, pincode: clean }));

    const match = siteConfig.demoMode.samplePincodes.find((p) => p.pincode === clean);
    if (match) {
      setFormData((prev) => ({
        ...prev,
        city: match.city,
        state: match.state,
      }));
    }
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.addressLine1 || !formData.pincode) {
      setErrorMessage("Please complete all mandatory delivery fields.");
      return;
    }

    if (!/^\d{6}$/.test(formData.pincode)) {
      setErrorMessage("Please enter a valid 6-digit Indian PIN code.");
      return;
    }

    setErrorMessage(null);
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFinalizeOrder = () => {
    setIsProcessing(true);
    setErrorMessage(null);

    // Simulate verified payment provider round-trip
    setTimeout(() => {
      try {
        const order = createOrder({
          customer: formData,
          items,
          subtotal,
          couponDiscount,
          couponCode: couponCode || undefined,
          shippingFee,
          shippingMethod,
          total,
          paymentMethod,
          giftMessage: giftMessage || undefined,
        });

        clearCart();
        setIsProcessing(false);
        router.push(`/order-success/${order.id}`);
      } catch (err) {
        setIsProcessing(false);
        setErrorMessage("Order creation failed. Please try again.");
      }
    }, 1800);
  };

  if (items.length === 0) {
    return (
      <div className="max-w-md mx-auto py-24 px-4 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold text-olive">Your basket is empty</h2>
        <p className="text-xs text-charcoal-muted">
          Please add plants or planters to your cart before proceeding to checkout.
        </p>
        <Link
          href="/shop"
          className="inline-flex px-6 py-2.5 rounded-xl bg-terracotta text-white text-xs font-medium"
        >
          Explore Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-charcoal-muted">
        <Link href="/" className="hover:text-charcoal flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <Link href="/cart" className="hover:text-charcoal">
          Cart
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <span className="text-olive font-medium">Checkout</span>
      </nav>

      {/* Checkout Progress Stepper */}
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center font-bold ${
                currentStep >= 1 ? "bg-olive text-cream" : "bg-sand text-charcoal"
              }`}
            >
              1
            </span>
            <span className={`font-semibold ${currentStep >= 1 ? "text-olive" : "text-charcoal-muted"}`}>
              Delivery Address
            </span>
          </div>

          <div className="flex-1 h-0.5 bg-sand mx-4" />

          <div className="flex items-center gap-2">
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center font-bold ${
                currentStep >= 2 ? "bg-olive text-cream" : "bg-sand text-charcoal"
              }`}
            >
              2
            </span>
            <span className={`font-semibold ${currentStep >= 2 ? "text-olive" : "text-charcoal-muted"}`}>
              Payment Verification
            </span>
          </div>
        </div>
      </div>

      {errorMessage && (
        <div className="max-w-4xl mx-auto p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        {/* Left Column: Form Steps */}
        <div className="lg:col-span-7 space-y-6">
          {currentStep === 1 ? (
            /* STEP 1: DELIVERY ADDRESS & SPEED */
            <form onSubmit={handleProceedToPayment} className="space-y-6">
              <div className="p-6 rounded-2xl bg-cream-50 border border-sand space-y-4">
                <div className="flex items-center justify-between border-b border-sand pb-3">
                  <h2 className="font-serif text-xl font-bold text-olive">
                    1. Contact & Indian Delivery Address
                  </h2>
                  <span className="text-[11px] text-charcoal-muted">Guest Checkout</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="sm:col-span-2 space-y-1">
                    <label className="font-semibold text-charcoal">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ananya Deshmukh"
                      className="w-full p-2.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-terracotta"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-charcoal">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full p-2.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-terracotta"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-charcoal">Mobile Phone (+91) *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full p-2.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-terracotta"
                    />
                  </div>

                  <div className="sm:col-span-2 space-y-1">
                    <label className="font-semibold text-charcoal">Street Address & Flat / House *</label>
                    <input
                      type="text"
                      required
                      value={formData.addressLine1}
                      onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
                      placeholder="Flat number, building name, street"
                      className="w-full p-2.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-terracotta"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-charcoal">Locality / Area</label>
                    <input
                      type="text"
                      value={formData.addressLine2}
                      onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
                      placeholder="e.g. Indiranagar, Bandra West"
                      className="w-full p-2.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-terracotta"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-charcoal">Nearby Landmark</label>
                    <input
                      type="text"
                      value={formData.landmark}
                      onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                      placeholder="e.g. Near Defense Colony Park"
                      className="w-full p-2.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-terracotta"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-charcoal">PIN Code (6 Digits) *</label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={formData.pincode}
                      onChange={(e) => handlePincodeChange(e.target.value)}
                      placeholder="560038"
                      className="w-full p-2.5 rounded-xl bg-white border border-sand font-mono focus:outline-none focus:border-terracotta"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-charcoal">City / District *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-terracotta"
                    />
                  </div>

                  <div className="sm:col-span-2 space-y-1">
                    <label className="font-semibold text-charcoal">State *</label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-terracotta"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Speed Selection */}
              <div className="p-6 rounded-2xl bg-cream-50 border border-sand space-y-3">
                <h3 className="font-serif text-lg font-bold text-olive">
                  2. Choose Delivery Method
                </h3>
                <div className="space-y-2 text-xs">
                  <label
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer ${
                      shippingMethod === "standard"
                        ? "border-terracotta bg-terracotta/5"
                        : "border-sand bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="shipOpt"
                        checked={shippingMethod === "standard"}
                        onChange={() => setShippingMethod("standard")}
                      />
                      <div>
                        <span className="font-semibold text-charcoal block">Standard Eco-Transit Courier</span>
                        <span className="text-[11px] text-charcoal-muted">3-5 business days via Delhivery</span>
                      </div>
                    </div>
                    <span className="font-semibold">{subtotal >= 999 ? "FREE" : formatPrice(99)}</span>
                  </label>

                  <label
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer ${
                      shippingMethod === "express"
                        ? "border-terracotta bg-terracotta/5"
                        : "border-sand bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="shipOpt"
                        checked={shippingMethod === "express"}
                        onChange={() => setShippingMethod("express")}
                      />
                      <div>
                        <span className="font-semibold text-charcoal block">Express Botanical Air Care</span>
                        <span className="text-[11px] text-charcoal-muted">1-2 business days with priority hydration</span>
                      </div>
                    </div>
                    <span className="font-semibold">{formatPrice(199)}</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-medium text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Continue to Payment Verification</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            /* STEP 2: PAYMENT METHOD & VERIFICATION GATEWAY */
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-cream-50 border border-sand space-y-5">
                <div className="flex items-center justify-between border-b border-sand pb-3">
                  <h2 className="font-serif text-xl font-bold text-olive">
                    Select & Verify Payment
                  </h2>
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="text-xs text-terracotta hover:underline font-medium"
                  >
                    Edit Address
                  </button>
                </div>

                {/* Delivery Address Summary */}
                <div className="p-3.5 rounded-xl bg-sand-light/60 border border-sand text-xs space-y-1">
                  <div className="font-semibold text-charcoal">
                    Shipping to: {formData.fullName} ({formData.phone})
                  </div>
                  <div className="text-charcoal-muted">
                    {formData.addressLine1}, {formData.addressLine2 && `${formData.addressLine2}, `}
                    {formData.city}, {formData.state} - {formData.pincode}
                  </div>
                </div>

                {/* Simulated Payment Providers */}
                <div className="space-y-3">
                  {/* Option 1: Razorpay Simulated Sandbox */}
                  <div
                    className={`p-4 rounded-xl border transition-all ${
                      paymentMethod === "razorpay_simulated"
                        ? "border-terracotta bg-cream shadow-2xs"
                        : "border-sand bg-white opacity-80"
                    }`}
                  >
                    <label className="flex items-center justify-between cursor-pointer mb-3">
                      <div className="flex items-center gap-2.5">
                        <input
                          type="radio"
                          name="payMethod"
                          checked={paymentMethod === "razorpay_simulated"}
                          onChange={() => setPaymentMethod("razorpay_simulated")}
                          className="text-terracotta"
                        />
                        <div>
                          <span className="font-semibold text-charcoal text-xs block">
                            Razorpay Payment Gateway (Instant UPI / Cards / NetBanking)
                          </span>
                          <span className="text-[10px] text-olive font-medium">
                            Simulated Indian Sandbox Gateway
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-olive/10 text-olive font-semibold">
                        Instant Capture
                      </span>
                    </label>

                    {paymentMethod === "razorpay_simulated" && (
                      <div className="pt-3 border-t border-sand space-y-4">
                        {/* Subtabs: UPI, Card, NetBanking */}
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => setPaymentSubtype("upi")}
                            className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors ${
                              paymentSubtype === "upi"
                                ? "bg-olive text-cream"
                                : "bg-sand-light text-charcoal hover:bg-sand"
                            }`}
                          >
                            <QrCode className="w-3.5 h-3.5" />
                            <span>UPI (GPay / PhonePe)</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setPaymentSubtype("card")}
                            className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors ${
                              paymentSubtype === "card"
                                ? "bg-olive text-cream"
                                : "bg-sand-light text-charcoal hover:bg-sand"
                            }`}
                          >
                            <CreditCard className="w-3.5 h-3.5" />
                            <span>Debit / Credit Card</span>
                          </button>
                        </div>

                        {paymentSubtype === "upi" ? (
                          <div className="space-y-2 p-3 bg-cream-50 rounded-xl border border-sand text-xs">
                            <label className="font-medium text-charcoal block">
                              Enter UPI VPA ID
                            </label>
                            <input
                              type="text"
                              value={upiId}
                              onChange={(e) => setUpiId(e.target.value)}
                              className="w-full p-2.5 rounded-lg bg-white border border-sand font-mono text-xs focus:outline-none focus:border-terracotta"
                              placeholder="e.g. username@okhdfcbank"
                            />
                            <p className="text-[11px] text-charcoal-muted">
                              A simulated verification prompt will confirm this payment upon clicking verify.
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-3 p-3 bg-cream-50 rounded-xl border border-sand text-xs">
                            <div className="space-y-1">
                              <label className="font-medium text-charcoal block">Card Number</label>
                              <input
                                type="text"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                className="w-full p-2.5 rounded-lg bg-white border border-sand font-mono text-xs"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <label className="font-medium text-charcoal block">Expiry</label>
                                <input
                                  type="text"
                                  value={cardExpiry}
                                  onChange={(e) => setCardExpiry(e.target.value)}
                                  className="w-full p-2 rounded-lg bg-white border border-sand font-mono text-xs"
                                />
                              </div>
                              <div>
                                <label className="font-medium text-charcoal block">CVV</label>
                                <input
                                  type="password"
                                  value={cardCvv}
                                  onChange={(e) => setCardCvv(e.target.value)}
                                  className="w-full p-2 rounded-lg bg-white border border-sand font-mono text-xs"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Option 2: Cash on Delivery */}
                  <div
                    className={`p-4 rounded-xl border transition-all ${
                      paymentMethod === "cod_simulated"
                        ? "border-terracotta bg-cream shadow-2xs"
                        : "border-sand bg-white opacity-80"
                    }`}
                  >
                    <label className="flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-2.5">
                        <input
                          type="radio"
                          name="payMethod"
                          checked={paymentMethod === "cod_simulated"}
                          onChange={() => setPaymentMethod("cod_simulated")}
                          className="text-terracotta"
                        />
                        <div>
                          <span className="font-semibold text-charcoal text-xs block">
                            Cash on Delivery (COD)
                          </span>
                          <span className="text-[10px] text-charcoal-muted">
                            Pay with cash or UPI QR directly to the courier upon delivery
                          </span>
                        </div>
                      </div>
                      <Banknote className="w-4 h-4 text-olive" />
                    </label>
                  </div>
                </div>

                {/* Verification Notice */}
                <div className="p-3.5 rounded-xl bg-olive-light/70 border border-olive-subtle text-xs text-olive space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Provider Confirmation Verification Required</span>
                  </div>
                  <p className="text-[11px] text-charcoal-muted">
                    In compliance with our safety protocol, payment is verified prior to dispatching living botanical cargo. Clicking below simulates the authenticated authorization hook.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="px-5 py-3.5 rounded-xl border border-sand text-xs font-semibold text-charcoal hover:bg-sand transition-colors"
                >
                  ← Back to Address
                </button>

                <button
                  type="button"
                  onClick={handleFinalizeOrder}
                  disabled={isProcessing}
                  className="flex-1 py-4 px-6 rounded-xl bg-terracotta hover:bg-terracotta-dark disabled:opacity-60 text-white font-medium text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      <span>Verifying with Payment Gateway...</span>
                    </span>
                  ) : (
                    <span>Verify & Place Order &bull; {formatPrice(total)}</span>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Order Summary Snapshot */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-cream-50 border border-sand space-y-4">
            <h3 className="font-serif text-lg font-bold text-olive border-b border-sand pb-3">
              Order Basket ({items.reduce((acc, i) => acc + i.quantity, 0)})
            </h3>

            <div className="max-h-60 overflow-y-auto divide-y divide-sand space-y-2 pr-1">
              {items.map((item) => (
                <div key={item.id} className="pt-2 first:pt-0 flex gap-3 text-xs">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-sand shrink-0 border border-sand">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-charcoal truncate">{item.product.name}</div>
                    <div className="text-[11px] text-charcoal-muted">Qty: {item.quantity}</div>
                    {item.selectedSize && (
                      <div className="text-[10px] text-charcoal-muted truncate">
                        {item.selectedSize.name.split("(")[0]}
                      </div>
                    )}
                  </div>
                  <div className="text-right font-semibold text-charcoal">
                    {formatPrice(item.unitPrice * item.quantity)}
                  </div>
                </div>
              ))}
            </div>

            {/* Price Calculations */}
            <div className="space-y-1.5 border-t border-sand pt-3 text-xs text-charcoal-muted">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-charcoal font-medium">{formatPrice(subtotal)}</span>
              </div>
              {couponDiscount > 0 && (
                <div className="flex justify-between text-terracotta">
                  <span>Discount ({couponCode})</span>
                  <span>-{formatPrice(couponDiscount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Delivery SLA ({shippingMethod})</span>
                <span>
                  {shippingFee === 0 ? (
                    <span className="text-olive font-semibold">FREE</span>
                  ) : (
                    formatPrice(shippingFee)
                  )}
                </span>
              </div>
              <div className="pt-2 border-t border-sand flex justify-between text-base font-bold text-charcoal">
                <span>Total Payable</span>
                <span className="text-xl text-olive font-serif">{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
