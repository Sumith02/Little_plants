"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, Search, Home, ChevronRight, MessageSquare } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: "care" | "shipping" | "warranty" | "orders";
}

const faqs: FAQItem[] = [
  {
    category: "care",
    question: "How do I care for my plant immediately after it arrives in the mail?",
    answer:
      "When your package arrives, unbox it gently and place the plant in a shaded room with medium, indirect light for 24-48 hours to help it settle from transit vibrations. Check the topsoil with your finger; if it feels dry, give it a modest sip of water. Do not expose it to hot midday sun or repot it for the first 7-10 days while it acclimatizes.",
  },
  {
    category: "care",
    question: "Why are the leaves on my indoor plant turning yellow?",
    answer:
      "Yellowing leaves are most commonly caused by overwatering or soil that stays soggy without adequate drainage. Ensure the bottom saucer is emptied after watering and allow the top 2 inches of soil to dry out between drinks. If yellowing is accompanied by web-like residue, check for spider mites and spray our Cold-Pressed Neem Oil Shield.",
  },
  {
    category: "care",
    question: "How often should I feed my houseplants in Indian weather?",
    answer:
      "Houseplants grow actively during spring (February to April) and monsoon (June to September). Nourish them every 3-4 weeks with our Liquid Seaweed Foliage Tonic. Pause feeding during peak dry winter (December-January) when indoor growth naturally slows down.",
  },
  {
    category: "shipping",
    question: "How do plants survive multi-day courier transit without water or sunlight?",
    answer:
      "Before packing, our nursery team thoroughly hydrates the root ball and wraps it in breathable, damp coconut coir mesh. The foliage is suspended in ventilated corrugated structural chambers that prevent leaves from folding or crushing while permitting natural air exchange.",
  },
  {
    category: "shipping",
    question: "Which courier carriers do you use and what is the typical delivery timeline?",
    answer:
      "We partner with Delhivery Botanical Express and Blue Dart Air Cargo. Metro deliveries (Bengaluru, Mumbai, Pune, Delhi NCR, Hyderabad, Chennai) arrive in 2-4 business days. Non-metro cities take 4-6 business days. Real-time GPS tracking is sent via SMS and email.",
  },
  {
    category: "warranty",
    question: "What is your 7-Day Transit Damage & Plant Health Guarantee?",
    answer:
      "If your plant or handcrafted planter arrives with transit damage, broken main stems, or severe dehydration, take a quick photo of the box and plant within 7 days of delivery and send it to our WhatsApp helpline (+91 98200 45123) or care@littleplants.in. We will dispatch an immediate free replacement.",
  },
  {
    category: "warranty",
    question: "Can I return a live plant if I simply change my mind?",
    answer:
      "Because live plants are perishable living organisms that suffer stress during repeated shipping cycles, we do not accept returns for change of mind. However, our 7-day transit warranty fully protects you against any transit issues or defective nursery pots.",
  },
  {
    category: "orders",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major Indian payment methods through our secure gateway integration: UPI (Google Pay, PhonePe, Paytm), RuPay, Visa, Mastercard, NetBanking across 50+ Indian banks, and Cash on Delivery (COD) for supported PIN codes.",
  },
  {
    category: "orders",
    question: "Can I include a gift message and invoice removal for surprise gifts?",
    answer:
      "Yes! On both the cart and checkout pages, you can enter a personalized gift message. We handwrite this onto our artisanal seeded paper card, seal it in craft paper, and omit pricing from the delivery box.",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "care" | "shipping" | "warranty" | "orders">(
    "all"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndices, setOpenIndices] = useState<{ [key: number]: boolean }>({ 0: true });

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const filteredFaqs = faqs.filter((faq) => {
    if (activeCategory !== "all" && faq.category !== activeCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-10">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-charcoal-muted">
        <Link href="/" className="hover:text-charcoal flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <span className="text-olive font-medium">Frequently Asked Questions</span>
      </nav>

      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand text-xs font-semibold text-terracotta">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Knowledge & Guidance</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-olive">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-muted max-w-lg mx-auto">
          Everything you need to know about caring for our living specimens, plastic-free transit, and our 7-day health guarantee.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto pt-3">
          <Search className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2 mt-1.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g. watering, replacement, transit)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-sand text-xs text-charcoal focus:outline-none focus:border-terracotta"
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-1 text-xs">
        {[
          { id: "all", label: "All Questions" },
          { id: "care", label: "Plant Care" },
          { id: "shipping", label: "Eco-Transit & Packaging" },
          { id: "warranty", label: "7-Day Guarantee" },
          { id: "orders", label: "Orders & Payments" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id as typeof activeCategory)}
            className={`px-4 py-2 rounded-full font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === tab.id
                ? "bg-olive text-cream shadow-xs"
                : "bg-cream-50 hover:bg-sand text-charcoal border border-sand"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Accordions */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 p-4 rounded-2xl bg-cream-50 border border-sand">
            <p className="text-xs text-charcoal-muted">No questions found matching your search.</p>
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = !!openIndices[idx];
            return (
              <div
                key={idx}
                className="border border-sand rounded-2xl overflow-hidden bg-cream-50 transition-all"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-olive pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-olive shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-charcoal-muted leading-relaxed border-t border-sand/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still need help callout */}
      <div className="p-6 rounded-2xl bg-sand-light/60 border border-sand text-center space-y-2">
        <h4 className="font-serif text-lg font-bold text-olive">Have an unlisted question?</h4>
        <p className="text-xs text-charcoal-muted">
          Our botanists are available Monday through Saturday on email and WhatsApp.
        </p>
        <div className="pt-1">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white text-xs font-semibold transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contact Studio Care</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
