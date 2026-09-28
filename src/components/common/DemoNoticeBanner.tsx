"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Info, X, Sparkles, Check } from "lucide-react";

export const DemoNoticeBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <>
      <div className="bg-sand-light border-b border-sand text-xs text-charcoal-muted px-4 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-between">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-terracotta/10 text-terracotta border border-terracotta/20">
              Demo Prototype
            </span>
            <span className="text-charcoal/80 hidden sm:inline">
              Interactive botanical shopping demo. Real-time cart, wishlist, and simulated checkout.
            </span>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="text-terracotta font-medium hover:underline flex items-center gap-1 cursor-pointer shrink-0"
          >
            <Sparkles className="w-3 h-3" />
            <span>Test Codes & Guide</span>
          </button>
        </div>
      </div>

      {/* Modal with Demo Details */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-cream rounded-xl max-w-md w-full p-6 shadow-xl border border-sand-dark space-y-4">
            <div className="flex items-center justify-between border-b border-sand pb-3">
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-terracotta" />
                <h3 className="font-serif text-lg font-semibold text-olive">
                  {siteConfig.demoMode.noticeTitle}
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-charcoal-muted hover:bg-sand transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-charcoal-muted leading-relaxed">
              {siteConfig.demoMode.noticeDescription} All product data, reviews, and tracking events are realistic interactive test states.
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-olive">
                Available Test Promo Codes
              </h4>
              <div className="space-y-1.5">
                {siteConfig.demoMode.sampleCoupons.map((coupon) => (
                  <div
                    key={coupon.code}
                    className="flex items-center justify-between p-2 rounded-lg bg-cream-50 border border-sand text-xs"
                  >
                    <div>
                      <span className="font-mono font-bold text-terracotta mr-2">
                        {coupon.code}
                      </span>
                      <span className="text-charcoal-muted">{coupon.description}</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(coupon.code)}
                      className="px-2 py-1 rounded bg-sand hover:bg-sand-dark text-charcoal font-medium transition-colors flex items-center gap-1"
                    >
                      {copiedCode === coupon.code ? (
                        <>
                          <Check className="w-3 h-3 text-olive" />
                          <span>Copied</span>
                        </>
                      ) : (
                        "Copy"
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-olive">
                Supported Test PIN Codes
              </h4>
              <p className="text-xs text-charcoal-muted">
                Try entering these in the product page delivery checker or checkout:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {siteConfig.demoMode.samplePincodes.slice(0, 4).map((p) => (
                  <div key={p.pincode} className="p-2 bg-cream-50 rounded border border-sand">
                    <div className="font-mono font-bold text-charcoal">{p.pincode}</div>
                    <div className="text-[11px] text-charcoal-muted">
                      {p.city} ({p.days})
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 px-4 rounded-lg bg-terracotta hover:bg-terracotta-dark text-white font-medium text-sm transition-colors cursor-pointer"
              >
                Got it, Start Exploring
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
