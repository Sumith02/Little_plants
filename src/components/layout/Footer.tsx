"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { categories as defaultCategories } from "@/data/categories";
import { useCatalog } from "@/context/CatalogContext";
import {
  Sprout,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Settings,
} from "lucide-react";

export const Footer: React.FC = () => {
  const { categories } = useCatalog();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-sand-light border-t border-sand-dark text-charcoal mt-auto">
      {/* Brand Value Pillars Bar */}
      <div className="border-b border-sand bg-cream-50/70 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-olive/10 text-olive flex items-center justify-center shrink-0">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-olive uppercase tracking-wide">
                Plastic-Free Eco Transit
              </h4>
              <p className="text-xs text-charcoal-muted mt-0.5">
                Ventilated coconut coir crates safeguard foliage across India.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0">
              <RotateCcw className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-olive uppercase tracking-wide">
                7-Day Health Guarantee
              </h4>
              <p className="text-xs text-charcoal-muted mt-0.5">
                Damaged in transit? Free doorstep replacement without quibbling.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-olive/10 text-olive flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-olive uppercase tracking-wide">
                Hand-Nurtured Sourcing
              </h4>
              <p className="text-xs text-charcoal-muted mt-0.5">
                Acclimatized in Pune polyhouses for true apartment resilience.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-olive uppercase tracking-wide">
                Earthen Craftsmanship
              </h4>
              <p className="text-xs text-charcoal-muted mt-0.5">
                Porous terracotta and stoneware hand-thrown by rural potters.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-36 sm:w-44 flex items-center">
                <Image
                  src={siteConfig.logos.green}
                  alt={siteConfig.brandName}
                  fill
                  sizes="180px"
                  className="object-contain object-left"
                />
              </div>
              <span className="text-xs font-semibold text-olive bg-sand/80 px-2 py-0.5 rounded-full border border-sand-dark/40">
                {siteConfig.kannadaBrandName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed max-w-md">
              {siteConfig.shortDescription}
            </p>

            {/* Newsletter */}
            <div className="pt-2">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-olive mb-2">
                Join the Botanical Circle
              </h5>
              <p className="text-xs text-charcoal-muted mb-3">
                Receive weekly seasonal watering reminders, apartment styling guides, and early access to rare tropical batches.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-olive-light border border-olive-subtle text-olive text-xs">
                  <CheckCircle2 className="w-4 h-4 text-olive" />
                  <span>Welcome to the circle! Check your inbox for your 10% welcome coupon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email address..."
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-white border border-sand-dark text-xs text-charcoal placeholder:text-charcoal-muted/60 focus:outline-none focus:border-terracotta"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white text-xs font-medium transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Catalog Column */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-olive">
              Botanical Collections
            </h5>
            <ul className="space-y-2 text-xs text-charcoal-muted">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="hover:text-terracotta transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/bundle-builder" className="hover:text-terracotta transition-colors font-medium text-terracotta">
                  Build Your Green Corner →
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="hover:text-terracotta transition-colors font-medium text-olive">
                  Find My Plant Quiz →
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Customer Care */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-olive">
              Care & Orders
            </h5>
            <ul className="space-y-2 text-xs text-charcoal-muted">
              <li>
                <Link href="/track" className="hover:text-terracotta transition-colors">
                  Track Live Shipment
                </Link>
              </li>
              <li>
                <Link href="/shipping-returns" className="hover:text-terracotta transition-colors">
                  Shipping & Replacement Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-terracotta transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-terracotta transition-colors">
                  Plant Care Journal
                </Link>
              </li>
              <li>
                <Link href="/gifting" className="hover:text-terracotta transition-colors">
                  Corporate & Festive Gifting
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-terracotta transition-colors">
                  Customer Account & Addresses
                </Link>
              </li>
            </ul>
          </div>

          {/* Studios & Contact */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-olive">
              Visit Our Store
            </h5>
            <div className="space-y-3 text-xs text-charcoal-muted">
              <div>
                <strong className="text-charcoal block">Little Plants Store (ಲಿಟಲ್ ಪ್ಲಾಂಟ್ಸ್)</strong>
                <span>Door No : 5, Vijaya Complex, 12-1214/4, Mannagudda Rd</span>
                <span className="block text-[11px] text-terracotta">Near Atomm Fitness Club, Kudroli, Kodailbail</span>
                <span className="block">Mangaluru, Karnataka 575003</span>
                <span className="text-[11px] text-olive font-medium mt-1 block">Open daily: 9:30 AM – 8:30 PM</span>
              </div>

              <div className="pt-2 border-t border-sand space-y-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-olive" />
                  <span>{siteConfig.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-olive" />
                  <span>{siteConfig.contact.email}</span>
                </div>
              </div>

              {/* QR Concierge */}
              <div className="mt-3 p-2 rounded-xl bg-white/70 border border-sand flex items-center gap-3">
                <div className="relative w-12 h-12 bg-white rounded-lg border border-sand p-0.5 shrink-0 overflow-hidden">
                  <Image
                    src={siteConfig.logos.qr}
                    alt="Little Plants Mobile QR"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-[11px] leading-tight">
                  <strong className="text-olive block font-medium">WhatsApp Concierge</strong>
                  <span className="text-charcoal-muted text-[10px]">Scan for instant plant care help</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Payment Methods, Policies */}
        <div className="pt-8 mt-8 border-t border-sand flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-charcoal-muted">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>
              &copy; {new Date().getFullYear()} {siteConfig.brandName} Private Limited. All rights reserved.
            </span>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <Link href="/privacy" className="hover:text-charcoal hover:underline">
                Privacy Policy
              </Link>
              <span>&bull;</span>
              <Link href="/terms" className="hover:text-charcoal hover:underline">
                Terms of Service
              </Link>
              <span>&bull;</span>
              <Link href="/about" className="hover:text-charcoal hover:underline">
                About Our Nursery
              </Link>
              <span>&bull;</span>
              <Link
                href="/admin"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sand/80 hover:bg-olive hover:text-white transition-all text-[11px] font-semibold text-olive border border-sand-dark/50 shadow-2xs"
                title="Store Owner Portal - Alter Images, Products & Categories"
              >
                <Settings className="w-3 h-3" />
                <span>Store Admin Access</span>
              </Link>
            </div>
          </div>

          {/* Payment badges */}
          <div className="flex items-center gap-2 text-[11px] font-mono bg-cream px-3 py-1.5 rounded-lg border border-sand text-charcoal/70">
            <span>UPI</span>
            <span>&bull;</span>
            <span>RuPay</span>
            <span>&bull;</span>
            <span>Visa</span>
            <span>&bull;</span>
            <span>Mastercard</span>
            <span>&bull;</span>
            <span>Cash on Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
