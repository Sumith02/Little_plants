"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useOrders } from "@/context/OrderContext";
import { formatPrice } from "@/config/site";
import { OrderRecord } from "@/types";
import {
  Truck,
  Search,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  AlertCircle,
  Home,
  ChevronRight,
  ShieldCheck,
  Package,
} from "lucide-react";

function TrackContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("tracking") || searchParams.get("order") || "";

  const { getOrderByTracking, orders } = useOrders();

  const [inputVal, setInputVal] = useState(initialQuery || "LP-IND-89421");
  const [matchedOrder, setMatchedOrder] = useState<OrderRecord | undefined>(
    getOrderByTracking(initialQuery || "LP-IND-89421") || orders[0]
  );
  const [searched, setSearched] = useState(true);

  useEffect(() => {
    if (initialQuery) {
      setInputVal(initialQuery);
      const res = getOrderByTracking(initialQuery);
      setMatchedOrder(res);
      setSearched(true);
    }
  }, [initialQuery, getOrderByTracking]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const res = getOrderByTracking(inputVal.trim());
    setMatchedOrder(res);
    setSearched(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-charcoal-muted">
        <Link href="/" className="hover:text-charcoal flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <span className="text-olive font-medium">Track Shipment</span>
      </nav>

      {/* Header */}
      <div className="text-center space-y-2">
        <div className="w-12 h-12 rounded-full bg-olive/10 text-olive flex items-center justify-center mx-auto mb-2">
          <Truck className="w-6 h-6" />
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-olive">
          Live Botanical Transit Tracking
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-muted max-w-md mx-auto">
          Enter your Order Number (e.g. <code>LP-IND-89421</code>) or your 10-digit mobile number to follow your plant&apos;s journey.
        </p>
      </div>

      {/* Search Input Box */}
      <div className="max-w-xl mx-auto space-y-2">
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Enter Order ID or Mobile Number"
              className="w-full pl-10 pr-3 py-3 rounded-xl bg-white border border-sand-dark text-xs sm:text-sm font-mono text-charcoal focus:outline-none focus:border-terracotta"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-olive hover:bg-olive-dark text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer shrink-0"
          >
            Track
          </button>
        </form>

        <div className="text-center text-[11px] text-charcoal-muted">
          <span>Sample consignment tracking: </span>
          <button
            onClick={() => {
              setInputVal("LP-IND-89421");
              setMatchedOrder(getOrderByTracking("LP-IND-89421"));
              setSearched(true);
            }}
            className="text-terracotta font-mono underline hover:text-terracotta-dark ml-1"
          >
            LP-IND-89421
          </button>
        </div>
      </div>

      {/* Search Result Showcase */}
      {matchedOrder ? (
        <div className="space-y-6">
          {/* Order Header Card */}
          <div className="p-6 rounded-2xl bg-cream-50 border border-sand space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-sand pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-terracotta block">
                  Consignment #{matchedOrder.orderNumber}
                </span>
                <h2 className="font-serif text-2xl font-bold text-olive">
                  {matchedOrder.carrierName}
                </h2>
                <span className="text-xs text-charcoal-muted font-mono">
                  AWB Tracking: {matchedOrder.trackingNumber}
                </span>
              </div>

              <div className="text-left sm:text-right">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-olive/10 text-olive capitalize inline-block">
                  Status: {matchedOrder.fulfillmentStatus.replace("_", " ")}
                </span>
                <span className="text-xs text-charcoal-muted block mt-1">
                  Est. Delivery: {matchedOrder.estimatedDelivery}
                </span>
              </div>
            </div>

            {/* Visual Timeline Stepper */}
            <div className="space-y-6 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-olive">
                Shipment History & Milestones
              </h3>

              <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-sand-dark">
                {matchedOrder.timeline.map((event, idx) => (
                  <div key={idx} className="relative space-y-1">
                    {/* Dot */}
                    <div
                      className={`absolute -left-6 sm:-left-8 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        event.status === "completed"
                          ? "bg-olive border-olive text-cream"
                          : event.status === "current"
                          ? "bg-terracotta border-terracotta text-white animate-pulse"
                          : "bg-cream border-sand-dark text-charcoal-muted"
                      }`}
                    >
                      {event.status === "completed" ? (
                        <CheckCircle2 className="w-3 h-3" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-semibold text-charcoal text-sm">{event.step}</span>
                      <span className="text-xs text-charcoal-muted font-mono">{event.date}</span>
                    </div>

                    <p className="text-xs text-charcoal-muted leading-relaxed">
                      {event.description}
                    </p>

                    {event.location && (
                      <div className="text-[11px] text-olive font-medium flex items-center gap-1 pt-0.5">
                        <MapPin className="w-3 h-3" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Consignment Items Snapshot */}
          <div className="p-6 rounded-2xl bg-cream-50 border border-sand space-y-4">
            <h3 className="font-serif text-lg font-bold text-olive border-b border-sand pb-3">
              Botanical Items in this Consignment
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {matchedOrder.items.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-xl bg-cream border border-sand flex items-center gap-3 text-xs"
                >
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-sand shrink-0 border border-sand">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold text-charcoal block truncate">
                      {item.product.name}
                    </span>
                    <span className="text-charcoal-muted text-[11px]">
                      Qty: {item.quantity} &bull; {item.selectedSize?.name.split("(")[0] || "Standard"}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-sand flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal-muted">
              <div className="flex items-center gap-1.5 text-olive font-medium">
                <ShieldCheck className="w-4 h-4 text-olive" />
                <span>Protected by 7-Day Transit Damage Guarantee</span>
              </div>

              <Link
                href={`/order-success/${matchedOrder.id}`}
                className="text-terracotta hover:underline font-semibold"
              >
                View Full Order Receipt →
              </Link>
            </div>
          </div>
        </div>
      ) : (
        searched && (
          <div className="text-center py-12 px-4 rounded-2xl bg-cream-50 border border-sand space-y-3">
            <AlertCircle className="w-8 h-8 text-charcoal-muted mx-auto" />
            <h3 className="font-serif text-lg font-bold text-olive">Consignment Not Found</h3>
            <p className="text-xs text-charcoal-muted max-w-sm mx-auto">
              We couldn&apos;t find an order matching &ldquo;{inputVal}&rdquo;. Please verify the order ID or try the test consignment <code>LP-IND-89421</code>.
            </p>
          </div>
        )
      )}
    </div>
  );
}

export default function TrackPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-charcoal-muted">Loading tracking...</div>}>
      <TrackContent />
    </Suspense>
  );
}
