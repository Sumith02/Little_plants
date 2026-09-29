"use client";

import React from "react";
import { CatalogProvider } from "@/context/CatalogContext";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { OrderProvider } from "@/context/OrderContext";

export const RootProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <CatalogProvider>
      <OrderProvider>
        <WishlistProvider>
          <CartProvider>{children}</CartProvider>
        </WishlistProvider>
      </OrderProvider>
    </CatalogProvider>
  );
};
