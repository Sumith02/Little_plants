"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CartItem, Product, ProductVariantSize, ProductVariantMaterial, ProductVariantColor } from "@/types";
import { siteConfig } from "@/config/site";

interface CartContextType {
  items: CartItem[];
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  addItem: (
    product: Product,
    selectedSize?: ProductVariantSize,
    selectedPlanterMaterial?: ProductVariantMaterial,
    selectedPlanterColor?: ProductVariantColor,
    quantity?: number
  ) => void;
  updateQuantity: (itemId: string, newQuantity: number) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  couponCode: string | null;
  couponDiscount: number;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  shippingMethod: "standard" | "express";
  setShippingMethod: (method: "standard" | "express") => void;
  giftMessage: string;
  setGiftMessage: (msg: string) => void;
  subtotal: number;
  shippingFee: number;
  total: number;
  itemCount: number;
  freeShippingThreshold: number;
  amountNeededForFreeShipping: number;
  freeShippingPercentage: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "root_and_ritual_cart_v1";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [couponCode, setCouponCode] = useState<string | null>(null);
  const [couponDiscount, setCouponDiscount] = useState<number>(0);
  const [shippingMethod, setShippingMethod] = useState<"standard" | "express">("standard");
  const [giftMessage, setGiftMessage] = useState<string>("");
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load cart from storage", e);
    }
    setIsInitialized(true);
  }, []);

  // Save to localStorage when items change
  useEffect(() => {
    if (!isInitialized) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error("Failed to persist cart", e);
    }
  }, [items, isInitialized]);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const addItem = (
    product: Product,
    selectedSize?: ProductVariantSize,
    selectedPlanterMaterial?: ProductVariantMaterial,
    selectedPlanterColor?: ProductVariantColor,
    quantity = 1
  ) => {
    // Calculate unit price including variant modifiers
    let unitPrice = product.price;
    if (selectedSize) unitPrice += selectedSize.priceModifier;
    if (selectedPlanterMaterial) unitPrice += selectedPlanterMaterial.priceModifier;

    // Create unique ID for item with these specific variants
    const sizeId = selectedSize ? selectedSize.id : "default";
    const matId = selectedPlanterMaterial ? selectedPlanterMaterial.id : "default";
    const colId = selectedPlanterColor ? selectedPlanterColor.id : "default";
    const itemId = `${product.id}_${sizeId}_${matId}_${colId}`;

    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.id === itemId);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      } else {
        return [
          ...prevItems,
          {
            id: itemId,
            productId: product.id,
            product,
            selectedSize,
            selectedPlanterMaterial,
            selectedPlanterColor,
            quantity,
            unitPrice,
          },
        ];
      }
    });

    setIsDrawerOpen(true);
  };

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const removeItem = (itemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setItems([]);
    setCouponCode(null);
    setCouponDiscount(0);
    setGiftMessage("");
  };

  // Subtotal calculation
  const subtotal = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  // Free shipping calculations
  const freeShippingThreshold = siteConfig.shipping.freeShippingThreshold;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingPercentage = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  // Base shipping calculation
  const isFreeStandard = subtotal >= freeShippingThreshold;
  let shippingFee = 0;
  if (items.length > 0) {
    if (shippingMethod === "standard") {
      shippingFee = isFreeStandard ? 0 : siteConfig.shipping.standardShippingFee;
    } else {
      // express is ₹199 or standard discount
      shippingFee = siteConfig.shipping.expressShippingFee;
    }
  }

  // Recalculate coupon discount when subtotal changes
  useEffect(() => {
    if (!couponCode) {
      setCouponDiscount(0);
      return;
    }

    const matchedCoupon = siteConfig.demoMode.sampleCoupons.find(
      (c) => c.code.toUpperCase() === couponCode.toUpperCase()
    );

    if (matchedCoupon) {
      if (matchedCoupon.minSpend && subtotal < matchedCoupon.minSpend) {
        setCouponCode(null);
        setCouponDiscount(0);
        return;
      }

      if (matchedCoupon.discountType === "percent") {
        setCouponDiscount(Math.round((subtotal * matchedCoupon.value) / 100));
      } else {
        setCouponDiscount(Math.min(subtotal, matchedCoupon.value));
      }
    }
  }, [subtotal, couponCode]);

  const applyCoupon = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    const coupon = siteConfig.demoMode.sampleCoupons.find((c) => c.code === cleanCode);

    if (!coupon) {
      return { success: false, message: "Invalid promo code. Try WELCOME10 or GREENROOF" };
    }

    if (coupon.minSpend && subtotal < coupon.minSpend) {
      return {
        success: false,
        message: `This coupon requires a minimum subtotal of ₹${coupon.minSpend}.`,
      };
    }

    setCouponCode(coupon.code);
    if (coupon.discountType === "percent") {
      setCouponDiscount(Math.round((subtotal * coupon.value) / 100));
    } else {
      setCouponDiscount(Math.min(subtotal, coupon.value));
    }

    return {
      success: true,
      message: `Coupon ${coupon.code} applied! (${coupon.description})`,
    };
  };

  const removeCoupon = () => {
    setCouponCode(null);
    setCouponDiscount(0);
  };

  const total = Math.max(0, subtotal - couponDiscount + shippingFee);

  return (
    <CartContext.Provider
      value={{
        items,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        couponCode,
        couponDiscount,
        applyCoupon,
        removeCoupon,
        shippingMethod,
        setShippingMethod,
        giftMessage,
        setGiftMessage,
        subtotal,
        shippingFee,
        total,
        itemCount,
        freeShippingThreshold,
        amountNeededForFreeShipping,
        freeShippingPercentage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
