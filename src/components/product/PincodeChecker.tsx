"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Truck, CheckCircle2, AlertCircle, MapPin } from "lucide-react";

export const PincodeChecker: React.FC = () => {
  const [pincode, setPincode] = useState("");
  const [result, setResult] = useState<{
    status: "valid" | "invalid";
    city?: string;
    state?: string;
    days?: string;
    message?: string;
  } | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPin = pincode.trim();

    if (!/^\d{6}$/.test(cleanPin)) {
      setResult({
        status: "invalid",
        message: "Please enter a valid 6-digit Indian Postal PIN Code (e.g. 560038).",
      });
      return;
    }

    // Check against configured demo pincodes
    const match = siteConfig.demoMode.samplePincodes.find((p) => p.pincode === cleanPin);

    if (match) {
      setResult({
        status: "valid",
        city: match.city,
        state: match.state,
        days: match.days,
      });
    } else {
      // General Indian PIN code algorithmic estimation
      let estimatedDays = "3-5 business days";
      let detectedZone = "Rest of India";
      if (cleanPin.startsWith("56") || cleanPin.startsWith("57")) {
        estimatedDays = "2-3 business days";
        detectedZone = "Karnataka Hub";
      } else if (cleanPin.startsWith("40") || cleanPin.startsWith("41")) {
        estimatedDays = "2-3 business days";
        detectedZone = "Maharashtra Hub";
      } else if (cleanPin.startsWith("11")) {
        estimatedDays = "3-4 business days";
        detectedZone = "NCR Region";
      }

      setResult({
        status: "valid",
        city: detectedZone,
        state: "Verified Serviceable Route",
        days: estimatedDays,
      });
    }
  };

  return (
    <div className="p-4 rounded-2xl bg-cream-50 border border-sand space-y-3">
      <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4 text-terracotta" />
        <span className="text-xs font-semibold uppercase tracking-wider text-olive">
          Check Delivery & COD Availability
        </span>
      </div>

      <form onSubmit={handleCheck} className="flex gap-2">
        <input
          type="text"
          maxLength={6}
          value={pincode}
          onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))}
          placeholder="Enter 6-digit PIN code (e.g. 560038)"
          className="flex-1 px-3.5 py-2 rounded-xl bg-white border border-sand text-xs text-charcoal font-mono placeholder:text-charcoal-muted/60 focus:outline-none focus:border-terracotta"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-xl bg-olive hover:bg-olive-dark text-white text-xs font-medium transition-colors shrink-0 cursor-pointer"
        >
          Check PIN
        </button>
      </form>

      {result && (
        <div
          className={`p-3 rounded-xl text-xs space-y-1 ${
            result.status === "valid"
              ? "bg-olive-light/70 border border-olive-subtle text-olive"
              : "bg-red-50 border border-red-200 text-red-800"
          }`}
        >
          {result.status === "valid" ? (
            <>
              <div className="flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-olive shrink-0" />
                <span>
                  Delivers to {result.city} in {result.days}
                </span>
              </div>
              <p className="text-[11px] text-charcoal-muted pl-5">
                Complimentary 7-day plant health replacement & Cash on Delivery available on this PIN.
              </p>
            </>
          ) : (
            <div className="flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              <span>{result.message}</span>
            </div>
          )}
        </div>
      )}

      {/* Suggested demo PIN codes note */}
      <div className="text-[11px] text-charcoal-muted flex items-center justify-between flex-wrap gap-1">
        <span>Try Bangalore: <strong>560038</strong></span>
        <span>Mumbai: <strong>400050</strong></span>
        <span>Delhi: <strong>110001</strong></span>
      </div>
    </div>
  );
};
