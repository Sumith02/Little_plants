"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { OrderRecord, CartItem } from "@/types";

interface OrderContextType {
  orders: OrderRecord[];
  createOrder: (orderData: {
    customer: OrderRecord["customer"];
    items: CartItem[];
    subtotal: number;
    couponDiscount: number;
    couponCode?: string;
    shippingFee: number;
    shippingMethod: "standard" | "express";
    total: number;
    paymentMethod: "razorpay_simulated" | "cod_simulated";
    giftMessage?: string;
  }) => OrderRecord;
  getOrderById: (orderId: string) => OrderRecord | undefined;
  getOrderByTracking: (trackingNumber: string) => OrderRecord | undefined;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

const STORAGE_KEY = "little_plants_orders_v1";

const initialSampleOrders: OrderRecord[] = [
  {
    id: "ord-lp-89421",
    orderNumber: "LP-IND-89421",
    createdAt: "24 Sep 2026, 03:45 PM IST",
    customer: {
      fullName: "Ananya Deshmukh",
      email: "ananya.d@example.com",
      phone: "+91 98200 12345",
      addressLine1: "Flat 402, Magnolia Residency, 12th Main",
      addressLine2: "HAL 2nd Stage, Indiranagar",
      landmark: "Near Defense Colony Park",
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "560038",
    },
    items: [
      {
        id: "plant-monstera-deliciosa_size-m_mat-terracotta_col-terracotta",
        productId: "plant-monstera-deliciosa",
        product: {
          id: "plant-monstera-deliciosa",
          slug: "monstera-deliciosa-swiss-cheese-plant",
          name: "Monstera Deliciosa",
          botanicalName: "Monstera deliciosa",
          category: "plants",
          subcategory: "Large Floor Plants",
          price: 1299,
          originalPrice: 1599,
          rating: 4.9,
          reviewCount: 148,
          inStock: true,
          stockCount: 14,
          shortDescription: "Iconic split-leaf tropical beauty that brings lush jungle drama into living rooms.",
          description: "Monstera Deliciosa",
          images: [
            "/images/plants/monstera-deliciosa-plant-31793362174084.jpg",
          ],
          packageContents: [],
          approximateDimensions: "Height: 24 inches",
          tags: ["living-room"],
        },
        selectedSize: {
          id: "size-m",
          name: "Mature Floor (22-28 inches)",
          heightGuide: "4-6 fenestrated mature leaves",
          priceModifier: 450,
        },
        selectedPlanterMaterial: {
          id: "mat-terracotta",
          name: "Handcrafted Terracotta Urn",
          priceModifier: 499,
        },
        selectedPlanterColor: {
          id: "col-terracotta",
          name: "Terracotta Rust",
          hex: "#B95139",
        },
        quantity: 1,
        unitPrice: 2248,
      },
      {
        id: "care-neem-oil-spray_default_default_default",
        productId: "care-neem-oil-spray",
        product: {
          id: "care-neem-oil-spray",
          slug: "pure-cold-pressed-neem-oil-shield-spray",
          name: "Cold-Pressed Neem Oil Shield (250ml)",
          category: "plant-care",
          subcategory: "Organic Protection",
          price: 199,
          originalPrice: 299,
          rating: 4.91,
          reviewCount: 180,
          inStock: true,
          stockCount: 55,
          shortDescription: "Ready-to-use organic emulsion that repels mealybugs and spider mites.",
          description: "Neem Oil Spray",
          images: [
            "/images/care/cold-pressed-neem-oil-spray.jpg",
          ],
          packageContents: [],
          approximateDimensions: "250ml",
          tags: ["plant-care"],
        },
        quantity: 1,
        unitPrice: 349,
      },
    ],
    subtotal: 2597,
    couponDiscount: 200,
    couponCode: "GREENROOF",
    shippingFee: 0,
    shippingMethod: "standard",
    total: 2397,
    paymentMethod: "razorpay_simulated",
    paymentStatus: "paid",
    fulfillmentStatus: "in_transit",
    trackingNumber: "DEL-RR-894210",
    carrierName: "Delhivery Botanical Express Care",
    estimatedDelivery: "28 Sep 2026 (Tomorrow by 5:00 PM)",
    giftMessage: "To an inspiring green new start in your beautiful Bangalore home! Warmest love.",
    timeline: [
      {
        step: "Order Placed & Payment Verified",
        status: "completed",
        date: "24 Sep 2026, 03:45 PM",
        description: "Payment captured via Razorpay Sandbox (ID: pay_test_9041285). Order sent to Pune acclimatization nursery.",
      },
      {
        step: "Hydrated & Packed in Coconut Coir Crate",
        status: "completed",
        date: "25 Sep 2026, 11:20 AM",
        description: "Plant health checked by Horticulturist; roots hydrated and nestled inside breathable plastic-free crate.",
        location: "Pune Nursery Fulfillment Center",
      },
      {
        step: "Dispatched via Botanical Air Courier",
        status: "completed",
        date: "26 Sep 2026, 06:10 PM",
        description: "Departed Pune Hub on temperature-monitored courier route toward Bengaluru sorting facility.",
        location: "Pune Air Cargo Hub",
      },
      {
        step: "Out for Delivery",
        status: "current",
        date: "27 Sep 2026, 09:30 AM",
        description: "Consignment loaded onto delivery van. Rider will contact before arrival.",
        location: "Indiranagar Hub, Bengaluru",
      },
      {
        step: "Delivered & Settled",
        status: "upcoming",
        date: "Expected by 28 Sep 2026",
        description: "Final doorstep hand-off with unboxing checklist and 7-day transit warranty.",
      },
    ],
  },
];

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<OrderRecord[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setOrders(JSON.parse(saved));
      } else {
        setOrders(initialSampleOrders);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialSampleOrders));
      }
    } catch (e) {
      console.error("Failed to load orders from storage", e);
      setOrders(initialSampleOrders);
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
    } catch (e) {
      console.error("Failed to persist orders", e);
    }
  }, [orders, isInitialized]);

  const createOrder = (orderData: {
    customer: OrderRecord["customer"];
    items: CartItem[];
    subtotal: number;
    couponDiscount: number;
    couponCode?: string;
    shippingFee: number;
    shippingMethod: "standard" | "express";
    total: number;
    paymentMethod: "razorpay_simulated" | "cod_simulated";
    giftMessage?: string;
  }): OrderRecord => {
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const orderNumber = `LP-IND-${randomSuffix}`;
    const id = `ord-${orderNumber.toLowerCase()}`;
    const trackingNumber = `DEL-LP-${randomSuffix}9`;

    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }) + " IST";

    const estDays = orderData.shippingMethod === "express" ? 2 : 4;
    const estDate = new Date(now.getTime() + estDays * 24 * 60 * 60 * 1000);
    const estDelivery = estDate.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }) + ` (${estDays} business days)`;

    const newOrder: OrderRecord = {
      id,
      orderNumber,
      createdAt: formattedDate,
      customer: orderData.customer,
      items: orderData.items,
      subtotal: orderData.subtotal,
      couponDiscount: orderData.couponDiscount,
      couponCode: orderData.couponCode,
      shippingFee: orderData.shippingFee,
      shippingMethod: orderData.shippingMethod,
      total: orderData.total,
      paymentMethod: orderData.paymentMethod,
      paymentStatus: orderData.paymentMethod === "razorpay_simulated" ? "paid" : "pending_cod",
      fulfillmentStatus: "processing",
      trackingNumber,
      carrierName: "Delhivery Botanical Express Care",
      estimatedDelivery: estDelivery,
      giftMessage: orderData.giftMessage,
      timeline: [
        {
          step: "Order Placed & Confirmed",
          status: "completed",
          date: formattedDate,
          description:
            orderData.paymentMethod === "razorpay_simulated"
              ? "Payment verified in simulated gateway. Order transmitted to nursery team."
              : "Cash on delivery order confirmed. Please keep exact cash or UPI ready at delivery.",
        },
        {
          step: "Botanical Conditioning & Eco Packing",
          status: "current",
          date: "In progress (within 24 hours)",
          description:
            "Plant horticulturist is inspecting root integrity and packing in ventilated coconut coir wrap.",
          location: "Pune Nursery Fulfillment Center",
        },
        {
          step: "Dispatched via Express Courier",
          status: "upcoming",
          date: "Upcoming",
          description: "Handover to temperature-regulated transit carrier.",
        },
        {
          step: "Delivered to Doorstep",
          status: "upcoming",
          date: estDelivery,
          description: "Safe doorstep delivery with 7-day plant health guarantee.",
        },
      ],
    };

    setOrders((prev) => [newOrder, ...prev]);
    return newOrder;
  };

  const getOrderById = (orderId: string) => {
    return orders.find(
      (o) =>
        o.id.toLowerCase() === orderId.toLowerCase() ||
        o.orderNumber.toLowerCase() === orderId.toLowerCase()
    );
  };

  const getOrderByTracking = (trackingNumber: string) => {
    const clean = trackingNumber.trim().toLowerCase();
    const normalized = clean.replace(/^rr-ind-/, "lp-ind-");
    return orders.find(
      (o) =>
        o.trackingNumber.toLowerCase() === clean ||
        o.orderNumber.toLowerCase() === clean ||
        o.orderNumber.toLowerCase() === normalized ||
        o.customer.phone.replace(/\s+/g, "").includes(clean)
    );
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        createOrder,
        getOrderById,
        getOrderByTracking,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders must be used within an OrderProvider");
  }
  return context;
};
