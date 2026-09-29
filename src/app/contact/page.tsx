"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Home,
  ChevronRight,
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "Plant Care & Health Question",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-12">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-charcoal-muted">
        <Link href="/" className="hover:text-charcoal flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <span className="text-olive font-medium">Contact & Studio Care</span>
      </nav>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand text-xs font-semibold text-terracotta">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Always Here for Plant Parents</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-olive">
          Get in Touch with our Studio Botanists
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
          Need help diagnosing a yellow leaf, curious about custom corporate hampers, or looking to visit our Mangaluru store? We respond with care.
        </p>
      </div>

      {/* Main Grid: Form on Left, Contact Cards on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Contact Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-cream-50 border border-sand space-y-6">
          <h2 className="font-serif text-2xl font-bold text-olive">
            Send a Botanical Note
          </h2>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-olive-light border border-olive-subtle text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-olive mx-auto" />
              <h3 className="font-serif text-xl font-bold text-olive">Message Received</h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. A dedicated horticulturist from our studio will review your query regarding <strong>{formData.topic}</strong> and write back within 2-4 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-terracotta font-semibold hover:underline pt-2 cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-charcoal">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rohini Iyer"
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-charcoal">Mobile Number (+91)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit number"
                    className="w-full p-2.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-terracotta"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-charcoal">Inquiry Category *</label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-terracotta cursor-pointer"
                  >
                    <option value="Plant Care & Health Question">Plant Care & Health Question</option>
                    <option value="Order Tracking & Transit Query">Order Tracking & Transit Query</option>
                    <option value="7-Day Transit Replacement">7-Day Transit Replacement</option>
                    <option value="Corporate & Bulk Gifting">Corporate & Bulk Gifting</option>
                    <option value="Studio Workshop Inquiry">Studio Workshop Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-charcoal">How can we help? *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your space, plant condition, or order details..."
                  className="w-full p-3 rounded-xl bg-white border border-sand focus:outline-none focus:border-terracotta"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3.5 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to Botanists</span>
              </button>
            </form>
          )}
        </div>

        {/* Right: Quick Direct Support & Studios */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-3xl bg-cream-50 border border-sand space-y-4">
            <h3 className="font-serif text-lg font-bold text-olive border-b border-sand pb-3">
              Direct Contact
            </h3>
            <div className="space-y-3 text-xs text-charcoal">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-olive/10 text-olive flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block">Email Support</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-terracotta hover:underline">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block">Contact Phone</span>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-charcoal font-medium hover:text-terracotta">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block">WhatsApp Orders & Help</span>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline font-medium"
                  >
                    {siteConfig.contact.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sand text-charcoal flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block">Operating Hours</span>
                  <span className="text-charcoal-muted">{siteConfig.contact.hours}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-cream-50 border border-sand space-y-4">
            <h3 className="font-serif text-lg font-bold text-olive border-b border-sand pb-3">
              Visit Our Store
            </h3>
            <div className="space-y-4 text-xs">
              {siteConfig.contact.studios.map((st) => (
                <div key={st.city} className="space-y-1.5">
                  <span className="font-bold text-olive text-sm block">{st.city}</span>
                  <p className="text-charcoal leading-relaxed">{st.address}</p>
                  <span className="text-[11px] text-terracotta block">{st.landmark}</span>
                  <span className="text-[11px] text-charcoal-muted block font-medium">🕒 {st.timing}</span>
                  <span className="text-[11px] text-olive font-medium block">📞 Contact Phone: {siteConfig.contact.phone}</span>
                  <span className="text-[11px] text-[#25D366] font-medium block">💬 WhatsApp: {siteConfig.contact.whatsapp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
