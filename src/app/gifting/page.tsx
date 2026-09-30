"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { formatPrice } from "@/config/site";
import { useCart } from "@/context/CartContext";
import { ProductCard } from "@/components/product/ProductCard";
import {
  Gift,
  CheckCircle2,
  Briefcase,
  Calendar,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  ChevronRight,
  Home,
  ShieldCheck,
  Send,
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { getCleanWhatsAppNumber } from "@/utils/whatsapp";

export default function GiftingPage() {
  const { addItem } = useCart();
  const giftProducts = products.filter((p) => p.category === "gifts");

  // Corporate inquiry form state
  const [corpForm, setCorpForm] = useState({
    companyName: "",
    contactPerson: "",
    workEmail: "",
    phone: "",
    quantity: "25-50 units",
    budgetPerUnit: "₹1,000 – ₹2,000",
    eventDate: "",
    customizationNeeds: "Custom laser-engraved wooden planter tags with our logo",
  });

  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  const handleCorporateWhatsApp = () => {
    let msg = `🌿 *Corporate Gifting Enquiry - Little Plants*\n\n`;
    if (corpForm.companyName) msg += `🏢 *Company:* ${corpForm.companyName}\n`;
    if (corpForm.contactPerson) msg += `👤 *Contact Person:* ${corpForm.contactPerson}\n`;
    if (corpForm.phone) msg += `📞 *Phone:* ${corpForm.phone}\n`;
    if (corpForm.workEmail) msg += `✉️ *Email:* ${corpForm.workEmail}\n`;
    msg += `📦 *Quantity Needed:* ${corpForm.quantity}\n`;
    msg += `💰 *Target Budget:* ${corpForm.budgetPerUnit}\n`;
    if (corpForm.eventDate) msg += `📅 *Expected Date:* ${corpForm.eventDate}\n`;
    if (corpForm.customizationNeeds) msg += `📝 *Notes:* ${corpForm.customizationNeeds}\n`;
    msg += `\nPlease share your corporate catalog and corporate quotation. Thank you!`;

    const phone = getCleanWhatsAppNumber();
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-charcoal-muted">
        <Link href="/" className="hover:text-charcoal flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <span className="text-olive font-medium">Gifting & Corporate Rituals</span>
      </nav>

      {/* Hero Banner */}
      <div className="rounded-3xl bg-sand-light p-8 sm:p-12 lg:p-16 border border-sand grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream border border-sand text-xs font-semibold text-terracotta">
            <Gift className="w-3.5 h-3.5" />
            <span>Living Tokens of Regard</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-olive">
            Gifts that grow and breathe with time.
          </h1>

          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed max-w-xl">
            Move beyond cut flowers that wither in days. Little Plants presents hand-potted living
            arrangements in artisan earthenware, accompanied by personal wax-sealed cards and care certificates.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-charcoal">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-olive" />
              <span>Sustainable Pine Crates</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-olive" />
              <span>Handwritten Seeded Paper Note</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-olive" />
              <span>Pan-India Safe Transit</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative aspect-4/3 rounded-2xl overflow-hidden bg-sand border border-sand shadow-sm">
          <Image
            src="/images/gifts/air-purifier-verdant-trio.jpg"
            alt="Curated botanical gift crate"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Curated Gifting Hampers Grid */}
      <section className="space-y-6">
        <div className="border-b border-sand pb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
            Signature Hampers
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-olive mt-1">
            Curated Botanical Gift Sets
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {giftProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Artisanal Gift-Wrapping Services Section */}
      <section className="rounded-3xl bg-cream-50 border border-sand p-6 sm:p-10 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
            In-Store &amp; Online Services
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-olive">
            Artisanal Gift-Wrapping Services
          </h3>
          <p className="text-xs text-charcoal-muted leading-relaxed">
            At our relaxed Mannagudda plant shop, we take special pride in dressing up living gifts with mindful, plastic-free presentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="space-y-2 p-5 rounded-2xl bg-cream border border-sand">
            <div className="w-8 h-8 rounded-lg bg-terracotta/10 text-terracotta flex items-center justify-center font-bold mb-2">
              <Gift className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-base font-bold text-olive">On-The-Spot Wrapping</h4>
            <p className="text-charcoal-muted leading-relaxed">
              Visiting our Mangaluru store? Select any indoor or potted plant and our florists will hand-wrap it in textured brown kraft paper, jute twine ribbons, and dried botanical sprigs.
            </p>
          </div>

          <div className="space-y-2 p-5 rounded-2xl bg-cream border border-sand">
            <div className="w-8 h-8 rounded-lg bg-olive/10 text-olive flex items-center justify-center font-bold mb-2">
              <CheckCircle2 className="w-4 h-4 text-olive" />
            </div>
            <h4 className="font-serif text-base font-bold text-olive">Handwritten Seeded Paper Notes</h4>
            <p className="text-charcoal-muted leading-relaxed">
              Every gift includes an artisanal plantable seed card. Provide your message during WhatsApp order or checkout, and we will handwrite it in archival ink.
            </p>
          </div>

          <div className="space-y-2 p-5 rounded-2xl bg-cream border border-sand">
            <div className="w-8 h-8 rounded-lg bg-sand text-charcoal flex items-center justify-center font-bold mb-2">
              <ShieldCheck className="w-4 h-4 text-olive" />
            </div>
            <h4 className="font-serif text-base font-bold text-olive">Discreet Delivery &amp; Care Guide</h4>
            <p className="text-charcoal-muted leading-relaxed">
              Prices and tax receipts are excluded from recipient boxes. Each gift crate comes with a botanical care card to ensure the recipient can nurture their new companion with ease.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Gifting Inquiry Form Section */}
      <section className="rounded-3xl bg-cream-50 border border-sand p-6 sm:p-12 space-y-8">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-olive/10 text-olive flex items-center justify-center mx-auto mb-2">
            <Briefcase className="w-6 h-6" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
            Enterprise & Event Celebrations
          </span>
          <h2 className="font-serif text-3xl font-bold text-olive">
            Corporate Gifting & Bulk Enquiries
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            Delight your leadership team, festive conference guests, or clients with bespoke
            botanical arrangements. Custom corporate logo pots, bespoke message sleeves, and direct multi-city doorstep deliveries available.
          </p>
        </div>

        {inquirySubmitted ? (
          <div className="max-w-lg mx-auto p-8 rounded-2xl bg-olive-light border border-olive-subtle text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-olive mx-auto" />
            <h3 className="font-serif text-xl font-bold text-olive">
              Corporate Enquiry Received
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Thank you, <strong>{corpForm.contactPerson}</strong>. Our corporate botanical consultant will review your estimated requirement of <strong>{corpForm.quantity}</strong> and get back with a tailored catalog proposal within 4 business hours.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleCorporateWhatsApp}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Open Corporate Chat on WhatsApp</span>
              </button>
              <button
                onClick={() => setInquirySubmitted(false)}
                className="text-xs text-terracotta font-semibold hover:underline"
              >
                Submit another inquiry
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmitInquiry}
            className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs"
          >
            <div className="space-y-1">
              <label className="font-semibold text-charcoal">Company / Organization Name *</label>
              <input
                type="text"
                required
                value={corpForm.companyName}
                onChange={(e) => setCorpForm({ ...corpForm, companyName: e.target.value })}
                placeholder="e.g. Acme Studio Pvt Ltd"
                className="w-full p-2.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-terracotta"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-charcoal">Contact Person Name *</label>
              <input
                type="text"
                required
                value={corpForm.contactPerson}
                onChange={(e) => setCorpForm({ ...corpForm, contactPerson: e.target.value })}
                placeholder="e.g. Rohini Iyer"
                className="w-full p-2.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-terracotta"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-charcoal">Official Work Email *</label>
              <input
                type="email"
                required
                value={corpForm.workEmail}
                onChange={(e) => setCorpForm({ ...corpForm, workEmail: e.target.value })}
                placeholder="rohini@acmestudio.in"
                className="w-full p-2.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-terracotta"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-charcoal">Mobile Number (+91) *</label>
              <input
                type="tel"
                required
                value={corpForm.phone}
                onChange={(e) => setCorpForm({ ...corpForm, phone: e.target.value })}
                placeholder="10-digit number"
                className="w-full p-2.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-terracotta"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-charcoal">Estimated Units Needed *</label>
              <select
                value={corpForm.quantity}
                onChange={(e) => setCorpForm({ ...corpForm, quantity: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-terracotta cursor-pointer"
              >
                <option value="10-25 units">10 – 25 units</option>
                <option value="25-50 units">25 – 50 units</option>
                <option value="50-100 units">50 – 100 units</option>
                <option value="100-500 units">100 – 500 units</option>
                <option value="500+ units">500+ units (Custom Sourcing)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-charcoal">Target Budget per Gift *</label>
              <select
                value={corpForm.budgetPerUnit}
                onChange={(e) => setCorpForm({ ...corpForm, budgetPerUnit: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-terracotta cursor-pointer"
              >
                <option value="₹500 – ₹1,000">₹500 – ₹1,000 per hamper</option>
                <option value="₹1,000 – ₹2,000">₹1,000 – ₹2,000 per hamper</option>
                <option value="₹2,000 – ₹3,500">₹2,000 – ₹3,500 per hamper (Executive)</option>
                <option value="₹3,500+">₹3,500+ (Artisan Pine Chests)</option>
              </select>
            </div>

            <div className="sm:col-span-2 space-y-1">
              <label className="font-semibold text-charcoal">
                Event / Gifting Occasion & Requirements
              </label>
              <textarea
                rows={3}
                value={corpForm.customizationNeeds}
                onChange={(e) => setCorpForm({ ...corpForm, customizationNeeds: e.target.value })}
                placeholder="Describe your event (e.g. Diwali festive gifting, annual offsite, employee welcome kit)..."
                className="w-full p-3 rounded-xl bg-white border border-sand focus:outline-none focus:border-terracotta"
              />
            </div>

            <div className="sm:col-span-2 pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Proposal Request</span>
              </button>
              <button
                type="button"
                onClick={handleCorporateWhatsApp}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Instant WhatsApp Enquiry</span>
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}
