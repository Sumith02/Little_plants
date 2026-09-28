"use client";

import React, { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { useOrders } from "@/context/OrderContext";
import { formatPrice } from "@/config/site";
import {
  CheckCircle2,
  Package,
  Truck,
  MapPin,
  Calendar,
  ArrowRight,
  Printer,
  ShieldCheck,
  Home,
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { buildCheckoutWhatsAppUrl } from "@/utils/whatsapp";

export default function OrderSuccessPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { getOrderById } = useOrders();

  const order = getOrderById(id);

  if (!order) {
    return (
      <div className="max-w-md mx-auto py-24 px-4 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold text-olive">Order Reference Not Found</h2>
        <p className="text-xs text-charcoal-muted">
          We could not locate an order matching ID &ldquo;{id}&rdquo;.
        </p>
        <Link
          href="/"
          className="inline-flex px-6 py-2.5 rounded-xl bg-terracotta text-white text-xs font-medium"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-8">
      {/* Top Success Banner */}
      <div className="text-center space-y-3 bg-cream-50 p-6 sm:p-10 rounded-3xl border border-sand shadow-xs">
        <div className="w-16 h-16 rounded-full bg-olive-light text-olive flex items-center justify-center mx-auto mb-2">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <span className="text-xs font-semibold uppercase tracking-widest text-terracotta block">
          Order Confirmed &bull; Nursery Team Notified
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-olive">
          Thank you for making room for green.
        </h1>

        <p className="text-xs sm:text-sm text-charcoal-muted max-w-lg mx-auto leading-relaxed">
          Your order has been received at our Pune Acclimatization Center. We will carefully hydrate the roots and pack them in our breathable coconut coir crate before courier dispatch.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs">
          <span className="font-mono font-bold bg-sand px-3 py-1.5 rounded-lg text-charcoal">
            Order Reference: #{order.orderNumber}
          </span>
          <span className="bg-[#25D366]/15 text-[#128C7E] px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5">
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>Direct WhatsApp Order</span>
          </span>
        </div>

        <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
          <a
            href={buildCheckoutWhatsAppUrl(order)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Chat with Owner on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Shipment & Tracking Snapshot */}
      <div className="p-6 rounded-2xl bg-cream-50 border border-sand space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-sand pb-4">
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-terracotta" />
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-olive">
                Botanical Shipment Status
              </h3>
              <span className="text-xs text-charcoal-muted">
                Carrier: {order.carrierName} &bull; AWB: {order.trackingNumber}
              </span>
            </div>
          </div>

          <Link
            href={`/track?tracking=${encodeURIComponent(order.trackingNumber)}`}
            className="px-4 py-2 rounded-xl bg-olive hover:bg-olive-dark text-white text-xs font-medium transition-colors flex items-center justify-center gap-1.5 shrink-0"
          >
            <span>Track Live Shipment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Milestone Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2 text-xs">
          {order.timeline.map((event, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-xl border space-y-1 ${
                event.status === "completed"
                  ? "bg-olive-light/60 border-olive-subtle text-olive"
                  : event.status === "current"
                  ? "bg-terracotta/10 border-terracotta/30 text-terracotta font-semibold"
                  : "bg-cream border-sand text-charcoal-muted"
              }`}
            >
              <div className="text-[10px] uppercase tracking-wider font-bold">
                Step {idx + 1}
              </div>
              <div className="font-semibold text-charcoal">{event.step}</div>
              <div className="text-[11px] opacity-80">{event.date}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer & Address Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-5 rounded-2xl bg-cream-50 border border-sand text-xs space-y-2">
          <div className="flex items-center gap-2 text-olive font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-terracotta" />
            <span>Delivery Destination</span>
          </div>
          <div className="font-semibold text-charcoal text-sm">{order.customer.fullName}</div>
          <p className="text-charcoal-muted leading-relaxed">
            {order.customer.addressLine1}
            {order.customer.addressLine2 && `, ${order.customer.addressLine2}`}
            <br />
            {order.customer.landmark && `Near: ${order.customer.landmark}`}
            <br />
            {order.customer.city}, {order.customer.state} - {order.customer.pincode}
          </p>
          <div className="pt-1 text-charcoal-muted">Phone: {order.customer.phone}</div>
        </div>

        <div className="p-5 rounded-2xl bg-cream-50 border border-sand text-xs space-y-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-olive font-bold uppercase tracking-wider mb-2">
              <Calendar className="w-4 h-4 text-terracotta" />
              <span>Transit & Warranty</span>
            </div>
            <p className="text-charcoal-muted leading-relaxed">
              <strong>Expected Delivery:</strong> {order.estimatedDelivery}
            </p>
            <p className="text-charcoal-muted leading-relaxed mt-1">
              <strong>7-Day Transit Warranty:</strong> Protected against any shipping shock, broken foliage, or pot cracks.
            </p>
          </div>

          <div className="pt-2 border-t border-sand flex items-center gap-2 text-olive font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span>Plastic-free ventilated packaging guaranteed</span>
          </div>
        </div>
      </div>

      {/* Itemized Order Receipt */}
      <div className="p-6 rounded-2xl bg-cream-50 border border-sand space-y-4">
        <h3 className="font-serif text-lg font-bold text-olive border-b border-sand pb-3">
          Itemized Receipt
        </h3>

        <div className="divide-y divide-sand">
          {order.items.map((item) => (
            <div key={item.id} className="py-3 flex items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-sand shrink-0 border border-sand">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="font-semibold text-charcoal block">{item.product.name}</span>
                  <span className="text-charcoal-muted text-[11px]">
                    Qty: {item.quantity} &bull;{" "}
                    {item.selectedSize?.name.split("(")[0] || "Standard"}
                  </span>
                </div>
              </div>

              <div className="font-semibold text-charcoal">
                {formatPrice(item.unitPrice * item.quantity)}
              </div>
            </div>
          ))}
        </div>

        {/* Breakdown */}
        <div className="pt-3 border-t border-sand space-y-1.5 text-xs text-charcoal-muted">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatPrice(order.subtotal)}</span>
          </div>
          {order.couponDiscount > 0 && (
            <div className="flex justify-between text-terracotta">
              <span>Coupon Savings</span>
              <span>-{formatPrice(order.couponDiscount)}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>{order.shippingFee === 0 ? "FREE" : formatPrice(order.shippingFee)}</span>
          </div>
          <div className="pt-2 border-t border-sand flex justify-between text-base font-bold text-charcoal">
            <span>Total Paid</span>
            <span className="text-xl text-olive font-serif">{formatPrice(order.total)}</span>
          </div>
        </div>
      </div>

      {/* Bottom Nav Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-sand">
        <button
          onClick={() => window.print()}
          className="text-xs text-charcoal-muted hover:text-charcoal flex items-center gap-1.5 cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span>Print Tax Invoice</span>
        </button>

        <div className="flex gap-3">
          <Link
            href="/account"
            className="px-5 py-2.5 rounded-xl border border-sand bg-cream hover:bg-sand text-xs font-semibold text-charcoal transition-colors"
          >
            My Account Orders
          </Link>
          <Link
            href="/shop"
            className="px-6 py-2.5 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
