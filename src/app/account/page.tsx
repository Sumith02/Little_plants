"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useOrders } from "@/context/OrderContext";
import { useWishlist } from "@/context/WishlistContext";
import { formatPrice } from "@/config/site";
import { ProductCard } from "@/components/product/ProductCard";
import {
  User,
  Package,
  MapPin,
  Heart,
  ChevronRight,
  Home,
  Truck,
  ExternalLink,
  Plus,
} from "lucide-react";

export default function AccountPage() {
  const { orders } = useOrders();
  const { wishlistProducts } = useWishlist();

  const [activeTab, setActiveTab] = useState<"orders" | "addresses" | "wishlist" | "profile">(
    "orders"
  );

  const [addresses] = useState([
    {
      id: "addr-1",
      tag: "Home (Primary)",
      fullName: "Ananya Deshmukh",
      phone: "+91 98200 12345",
      line1: "Flat 402, Magnolia Residency, 12th Main Road",
      line2: "HAL 2nd Stage, Indiranagar",
      landmark: "Near Defense Colony Park",
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "560038",
    },
    {
      id: "addr-2",
      tag: "Design Studio (Work)",
      fullName: "Ananya Deshmukh",
      phone: "+91 98200 12345",
      line1: "Studio 18, WeWork Galaxy, Residency Road",
      line2: "Shanthala Nagar, Ashok Nagar",
      landmark: "Opposite Opera House",
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "560025",
    },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-charcoal-muted">
        <Link href="/" className="hover:text-charcoal flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <span className="text-olive font-medium">Customer Sanctuary</span>
      </nav>

      {/* Account Profile Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-cream-50 border border-sand flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-olive text-cream font-serif text-2xl font-bold flex items-center justify-center shadow-xs">
            AD
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-terracotta">
              Verified Patron
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-olive">
              Ananya Deshmukh
            </h1>
            <span className="text-xs text-charcoal-muted">ananya.d@example.com &bull; Member since 2026</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/track"
            className="px-4 py-2.5 rounded-xl bg-sand hover:bg-sand-dark text-charcoal text-xs font-semibold transition-colors flex items-center gap-1.5"
          >
            <Truck className="w-3.5 h-3.5 text-olive" />
            <span>Track AWB Courier</span>
          </Link>
          <Link
            href="/shop"
            className="px-5 py-2.5 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white text-xs font-semibold transition-colors"
          >
            Browse Nursery
          </Link>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 border-b border-sand overflow-x-auto pb-1">
        <button
          onClick={() => setActiveTab("orders")}
          className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border-b-2 whitespace-nowrap flex items-center gap-2 ${
            activeTab === "orders"
              ? "border-terracotta text-terracotta"
              : "border-transparent text-charcoal-muted hover:text-charcoal"
          }`}
        >
          <Package className="w-4 h-4" />
          <span>Order History ({orders.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("addresses")}
          className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border-b-2 whitespace-nowrap flex items-center gap-2 ${
            activeTab === "addresses"
              ? "border-terracotta text-terracotta"
              : "border-transparent text-charcoal-muted hover:text-charcoal"
          }`}
        >
          <MapPin className="w-4 h-4" />
          <span>Saved Addresses ({addresses.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("wishlist")}
          className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border-b-2 whitespace-nowrap flex items-center gap-2 ${
            activeTab === "wishlist"
              ? "border-terracotta text-terracotta"
              : "border-transparent text-charcoal-muted hover:text-charcoal"
          }`}
        >
          <Heart className="w-4 h-4" />
          <span>Saved Wishlist ({wishlistProducts.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("profile")}
          className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border-b-2 whitespace-nowrap flex items-center gap-2 ${
            activeTab === "profile"
              ? "border-terracotta text-terracotta"
              : "border-transparent text-charcoal-muted hover:text-charcoal"
          }`}
        >
          <User className="w-4 h-4" />
          <span>Profile Settings</span>
        </button>
      </div>

      {/* Tab Content Panels */}
      {activeTab === "orders" && (
        <div className="space-y-6">
          {orders.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-cream-50 border border-sand space-y-2">
              <Package className="w-8 h-8 text-charcoal-muted mx-auto" />
              <p className="font-serif text-lg font-bold text-olive">No orders recorded yet</p>
              <p className="text-xs text-charcoal-muted">Your ordered plants will appear here.</p>
            </div>
          ) : (
            orders.map((order) => (
              <div
                key={order.id}
                className="p-6 rounded-2xl bg-cream-50 border border-sand space-y-4 hover:border-sand-dark transition-all"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-sand pb-4 text-xs">
                  <div>
                    <span className="font-bold font-mono text-sm text-charcoal block">
                      Order #{order.orderNumber}
                    </span>
                    <span className="text-charcoal-muted text-[11px]">{order.createdAt}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${
                        order.fulfillmentStatus === "delivered"
                          ? "bg-green-100 text-green-800"
                          : order.fulfillmentStatus === "in_transit"
                          ? "bg-olive-light text-olive"
                          : "bg-terracotta/10 text-terracotta"
                      }`}
                    >
                      {order.fulfillmentStatus.replace("_", " ")}
                    </span>

                    <span className="font-bold text-sm text-charcoal font-sans">
                      {formatPrice(order.total)}
                    </span>
                  </div>
                </div>

                {/* Items in order */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="p-2.5 rounded-xl bg-cream border border-sand flex items-center gap-3 text-xs"
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
                      <span className="font-semibold text-charcoal">
                        {formatPrice(item.unitPrice * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer Controls */}
                <div className="pt-3 border-t border-sand flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <span className="text-charcoal-muted">
                    Carrier: {order.carrierName} &bull; Est. Delivery: {order.estimatedDelivery}
                  </span>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/track?tracking=${encodeURIComponent(order.trackingNumber)}`}
                      className="px-4 py-2 rounded-xl bg-olive hover:bg-olive-dark text-white font-medium transition-colors"
                    >
                      Track Shipment
                    </Link>
                    <Link
                      href={`/order-success/${order.id}`}
                      className="px-4 py-2 rounded-xl bg-sand hover:bg-sand-dark text-charcoal font-medium transition-colors flex items-center gap-1"
                    >
                      <span>Invoice</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {activeTab === "addresses" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-xl font-bold text-olive">Saved Delivery Addresses</h2>
            <button className="px-3.5 py-1.5 rounded-xl bg-terracotta text-white text-xs font-semibold flex items-center gap-1">
              <Plus className="w-3.5 h-3.5" />
              <span>Add New Address</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {addresses.map((addr) => (
              <div
                key={addr.id}
                className="p-6 rounded-2xl bg-cream-50 border border-sand space-y-3 relative text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-sand font-bold text-[10px] uppercase tracking-wider text-charcoal">
                    {addr.tag}
                  </span>
                  <span className="text-terracotta font-medium hover:underline cursor-pointer">
                    Edit
                  </span>
                </div>

                <div className="font-bold text-sm text-charcoal">{addr.fullName}</div>

                <p className="text-charcoal-muted leading-relaxed">
                  {addr.line1}
                  <br />
                  {addr.line2}
                  <br />
                  Landmark: {addr.landmark}
                  <br />
                  {addr.city}, {addr.state} - {addr.pincode}
                </p>

                <div className="text-charcoal-muted pt-2 border-t border-sand">
                  Phone: {addr.phone}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "wishlist" && (
        <div className="space-y-6">
          {wishlistProducts.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-cream-50 border border-sand space-y-2">
              <Heart className="w-8 h-8 text-charcoal-muted mx-auto" />
              <p className="font-serif text-lg font-bold text-olive">Your wishlist is empty</p>
              <Link href="/shop" className="text-xs text-terracotta hover:underline font-semibold">
                Explore plants to save →
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {wishlistProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === "profile" && (
        <div className="max-w-xl p-6 rounded-2xl bg-cream-50 border border-sand space-y-4 text-xs">
          <h2 className="font-serif text-xl font-bold text-olive border-b border-sand pb-3">
            Account Preferences
          </h2>
          <div className="space-y-3">
            <div>
              <label className="font-semibold text-charcoal block mb-1">Full Name</label>
              <input
                type="text"
                defaultValue="Ananya Deshmukh"
                className="w-full p-2.5 rounded-xl bg-white border border-sand"
              />
            </div>
            <div>
              <label className="font-semibold text-charcoal block mb-1">Email Address</label>
              <input
                type="email"
                defaultValue="ananya.d@example.com"
                className="w-full p-2.5 rounded-xl bg-white border border-sand"
              />
            </div>
            <div>
              <label className="font-semibold text-charcoal block mb-1">Phone Number</label>
              <input
                type="tel"
                defaultValue="+91 98200 12345"
                className="w-full p-2.5 rounded-xl bg-white border border-sand"
              />
            </div>
            <div className="pt-2">
              <button className="px-5 py-2.5 rounded-xl bg-olive text-white font-medium hover:bg-olive-dark transition-colors">
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
