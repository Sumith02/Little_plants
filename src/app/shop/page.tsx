"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { products as defaultProducts } from "@/data/products";
import { useCatalog } from "@/context/CatalogContext";
import { ProductGridWithFilters } from "@/components/shop/ProductGridWithFilters";
import { ProductCategory } from "@/types";
import { ChevronRight, Home } from "lucide-react";

function ShopContent() {
  const { products } = useCatalog();
  const searchParams = useSearchParams();
  const categoryParam = (searchParams.get("category") as ProductCategory) || "all";
  const subcategoryParam = searchParams.get("sub") || undefined;
  const spaceParam = searchParams.get("space") || undefined;
  const filterParam = searchParams.get("filter") || undefined;

  let pageTitle = "All Botanical Collections";
  let pageSubtitle = "Explore our complete assortment of indoor greenery, handcrafted pottery, heirloom seeds, and organic plant care.";

  if (spaceParam) {
    const formatted = spaceParam.replace("-", " ");
    pageTitle = `Plants for Your ${formatted.charAt(0).toUpperCase() + formatted.slice(1)}`;
    pageSubtitle = `Specially selected botanical species matched for the light, airflow, and temperature of your ${formatted}.`;
  } else if (filterParam) {
    pageTitle = `${filterParam} Collection`;
    pageSubtitle = `Handpicked varieties aligned with your ${filterParam.toLowerCase()} lifestyle requirements.`;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-6">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-charcoal-muted">
        <Link href="/" className="hover:text-charcoal flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <span className="text-olive font-medium">Shop</span>
        {spaceParam && (
          <>
            <ChevronRight className="w-3 h-3 text-sand-dark" />
            <span className="text-olive capitalize">{spaceParam.replace("-", " ")}</span>
          </>
        )}
      </nav>

      {/* Main Grid with Filters */}
      <ProductGridWithFilters
        initialProducts={products}
        currentCategory={categoryParam}
        initialSubcategory={subcategoryParam}
        initialSpace={spaceParam}
        initialFilter={filterParam}
        title={pageTitle}
        subtitle={pageSubtitle}
      />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto p-12 text-center text-xs text-charcoal-muted">Loading botanical catalog...</div>}>
      <ShopContent />
    </Suspense>
  );
}
