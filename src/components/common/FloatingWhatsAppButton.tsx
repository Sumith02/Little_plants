"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { buildGeneralWhatsAppUrl } from "@/utils/whatsapp";
import { X } from "lucide-react";

export const FloatingWhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = buildGeneralWhatsAppUrl(
    "Hi Little Plants! I am browsing your website and would like assistance with ordering plants."
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-end gap-2.5">
      {/* Help tooltip pill */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-cream-50 text-charcoal border border-sand-dark py-2 px-3.5 rounded-2xl shadow-lg animate-in fade-in slide-in-from-right duration-300">
          <div className="text-left text-xs leading-tight">
            <strong className="block text-olive font-semibold">Need help selecting?</strong>
            <span className="text-[11px] text-charcoal-muted">Chat & Order directly with Owner</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-charcoal-muted hover:text-charcoal p-0.5 rounded-full hover:bg-sand/60"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat and Order on WhatsApp"
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group shrink-0"
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
        <span className="sr-only">Order on WhatsApp</span>
      </a>
    </div>
  );
};
