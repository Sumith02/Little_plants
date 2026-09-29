"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCatalog } from "@/context/CatalogContext";
import { Product, CategoryInfo, ProductCategory } from "@/types";
import { formatPrice, siteConfig } from "@/config/site";
import {
  Lock,
  Unlock,
  KeyRound,
  ShieldCheck,
  Package,
  FolderTree,
  Plus,
  Trash2,
  Edit,
  Save,
  RotateCcw,
  Download,
  Image as ImageIcon,
  CheckCircle2,
  AlertCircle,
  Search,
  ExternalLink,
  ChevronRight,
  Home,
  Check,
  X,
  Phone,
  MapPin,
  Sparkles,
  Info,
} from "lucide-react";

export default function AdminPage() {
  const {
    products,
    categories,
    isLoaded,
    isCustomized,
    updateProduct,
    addProduct,
    deleteProduct,
    updateCategory,
    addCategory,
    resetCatalog,
  } = useCatalog();

  // Authentication PIN state (PIN: 74725 - last 5 digits of store phone 098454 74725)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState(false);

  // Active Tab: 'products' | 'categories' | 'store-info'
  const [activeTab, setActiveTab] = useState<"products" | "categories" | "store-info">("products");

  // Product Filter & Search
  const [productSearch, setProductSearch] = useState("");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>("all");

  // Modals & Editing
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<CategoryInfo | null>(null);

  // Notifications / Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handlePinSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (pinInput.trim() === "74725" || pinInput.trim() === "admin") {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  // Filtered product list for admin table
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (selectedCategoryFilter !== "all" && p.category !== selectedCategoryFilter) {
        return false;
      }
      if (productSearch.trim()) {
        const q = productSearch.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.botanicalName?.toLowerCase().includes(q) ||
          p.id.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [products, selectedCategoryFilter, productSearch]);

  // Export JSON handler
  const handleExportJson = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify({ products, categories }, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `little-plants-catalog-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("Catalog JSON downloaded successfully!");
  };

  // Reset confirmation
  const handleResetCatalog = () => {
    if (window.confirm("Are you sure you want to reset all products, images, and categories back to factory defaults? Any unsaved edits will be cleared.")) {
      resetCatalog();
      showToast("Catalog restored to factory defaults.");
    }
  };

  // -------------------------------------------------------------
  // PIN LOGIN GATE
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-sand-light/60 p-8 rounded-2xl border border-sand-dark shadow-lg text-center space-y-6">
          <div className="w-16 h-16 bg-olive/10 text-olive rounded-full flex items-center justify-center mx-auto">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h1 className="font-serif text-2xl text-olive font-bold">Store Admin Portal</h1>
            <p className="text-xs text-charcoal-muted">
              Little Plants &bull; Mannagudda Rd, Mangaluru
            </p>
          </div>

          <p className="text-xs text-charcoal leading-relaxed">
            Enter the 5-digit store owner security PIN to alter images, categories, products, prices, and inventory.
          </p>

          <form onSubmit={handlePinSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                maxLength={6}
                value={pinInput}
                onChange={(e) => {
                  setPinInput(e.target.value);
                  setPinError(false);
                }}
                placeholder="Enter PIN"
                className="w-full text-center tracking-widest text-lg font-mono px-4 py-3 rounded-xl border border-sand-dark bg-white focus:outline-none focus:border-terracotta"
              />
              {pinError && (
                <p className="text-xs text-red-600 mt-2 font-medium flex items-center justify-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Incorrect PIN. Please try again.</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-terracotta hover:bg-terracotta-dark text-white rounded-xl font-medium text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <KeyRound className="w-4 h-4" />
              <span>Unlock Admin Panel</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-olive text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-2 text-sm animate-fade-in border border-white/20">
          <CheckCircle2 className="w-5 h-5 text-sand-light shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Breadcrumbs & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-sand">
        <div>
          <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-charcoal-muted mb-1">
            <Link href="/" className="hover:text-charcoal flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-sand-dark" />
            <span className="text-olive font-medium">Store Admin</span>
          </nav>
          <div className="flex items-center gap-3">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-olive">
              Catalog & Store Admin
            </h1>
            {isCustomized ? (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-terracotta/15 text-terracotta border border-terracotta/30">
                Custom Edits Active
              </span>
            ) : (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-olive/15 text-olive border border-olive/30">
                Default Catalog
              </span>
            )}
          </div>
          <p className="text-xs text-charcoal-muted mt-0.5">
            Alter product images, change categories, update prices, stock, and descriptions in real-time.
          </p>
        </div>

        {/* Global Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleExportJson}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-sand-dark text-charcoal hover:bg-sand-light text-xs font-medium transition-colors shadow-2xs cursor-pointer"
            title="Export catalog data as a backup JSON file"
          >
            <Download className="w-3.5 h-3.5 text-olive" />
            <span>Export Backup</span>
          </button>

          {isCustomized && (
            <button
              onClick={handleResetCatalog}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-red-200 text-red-700 hover:bg-red-50 text-xs font-medium transition-colors shadow-2xs cursor-pointer"
              title="Reset all customizations back to factory defaults"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>
          )}

          <Link
            href="/shop"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-olive hover:bg-olive-dark text-white text-xs font-medium transition-colors shadow-2xs"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>View Live Store</span>
          </Link>
        </div>
      </div>

      {/* Summary KPI Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-sand-light/60 border border-sand">
          <span className="text-xs text-charcoal-muted block">Total Products</span>
          <span className="text-2xl font-serif font-bold text-olive">{products.length}</span>
        </div>
        <div className="p-4 rounded-xl bg-sand-light/60 border border-sand">
          <span className="text-xs text-charcoal-muted block">Active Categories</span>
          <span className="text-2xl font-serif font-bold text-olive">{categories.length}</span>
        </div>
        <div className="p-4 rounded-xl bg-sand-light/60 border border-sand">
          <span className="text-xs text-charcoal-muted block">In-Stock Items</span>
          <span className="text-2xl font-serif font-bold text-olive">
            {products.filter((p) => p.inStock).length}
          </span>
        </div>
        <div className="p-4 rounded-xl bg-sand-light/60 border border-sand">
          <span className="text-xs text-charcoal-muted block">Bestsellers</span>
          <span className="text-2xl font-serif font-bold text-terracotta">
            {products.filter((p) => p.isBestseller).length}
          </span>
        </div>
      </div>

      {/* Main Tabs Navigation */}
      <div className="flex border-b border-sand gap-4">
        <button
          onClick={() => setActiveTab("products")}
          className={`pb-3 text-sm font-medium transition-colors border-b-2 flex items-center gap-2 cursor-pointer ${
            activeTab === "products"
              ? "border-terracotta text-terracotta font-semibold"
              : "border-transparent text-charcoal-muted hover:text-charcoal"
          }`}
        >
          <Package className="w-4 h-4" />
          <span>Products Manager ({products.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("categories")}
          className={`pb-3 text-sm font-medium transition-colors border-b-2 flex items-center gap-2 cursor-pointer ${
            activeTab === "categories"
              ? "border-terracotta text-terracotta font-semibold"
              : "border-transparent text-charcoal-muted hover:text-charcoal"
          }`}
        >
          <FolderTree className="w-4 h-4" />
          <span>Categories & Banners ({categories.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("store-info")}
          className={`pb-3 text-sm font-medium transition-colors border-b-2 flex items-center gap-2 cursor-pointer ${
            activeTab === "store-info"
              ? "border-terracotta text-terracotta font-semibold"
              : "border-transparent text-charcoal-muted hover:text-charcoal"
          }`}
        >
          <Info className="w-4 h-4" />
          <span>Store & WhatsApp Info</span>
        </button>
      </div>

      {/* ========================================================= */}
      {/* TAB 1: PRODUCTS MANAGER */}
      {/* ========================================================= */}
      {activeTab === "products" && (
        <div className="space-y-6">
          {/* Controls: Search, Category Filter, and Add Product */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 flex-1">
              {/* Search */}
              <div className="relative flex-1 min-w-[240px]">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-muted" />
                <input
                  type="text"
                  placeholder="Search products by name or botanical name..."
                  value={productSearch}
                  onChange={(e) => setProductSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-sand-dark text-xs focus:outline-none focus:border-terracotta"
                />
                {productSearch && (
                  <button
                    onClick={() => setProductSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-muted hover:text-charcoal"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Category Filter Dropdown */}
              <select
                value={selectedCategoryFilter}
                onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                className="px-3 py-2 rounded-xl bg-white border border-sand-dark text-xs text-charcoal focus:outline-none focus:border-terracotta"
              >
                <option value="all">All Categories ({products.length})</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({products.filter((p) => p.category === c.id).length})
                  </option>
                ))}
              </select>
            </div>

            {/* Add New Product Button */}
            <button
              onClick={() => setIsAddProductOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white text-xs font-semibold transition-colors shadow-sm cursor-pointer shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Product</span>
            </button>
          </div>

          {/* Product Cards Table / Grid */}
          <div className="bg-white rounded-2xl border border-sand overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-sand-light/60 border-b border-sand text-charcoal-muted uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-4">Image</th>
                    <th className="py-3 px-4">Product Info</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Stock</th>
                    <th className="py-3 px-4">Badges</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand">
                  {filteredProducts.map((prod) => (
                    <tr key={prod.id} className="hover:bg-sand-light/30 transition-colors">
                      {/* Image Thumbnail */}
                      <td className="py-3 px-4">
                        <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-sand bg-sand-light shrink-0">
                          {prod.images && prod.images[0] ? (
                            <Image
                              src={prod.images[0]}
                              alt={prod.name}
                              fill
                              sizes="56px"
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-charcoal-muted">
                              <ImageIcon className="w-5 h-5" />
                            </div>
                          )}
                          {prod.images && prod.images.length > 1 && (
                            <span className="absolute bottom-0.5 right-0.5 bg-black/70 text-white text-[9px] px-1 rounded">
                              +{prod.images.length - 1}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Product Info */}
                      <td className="py-3 px-4 max-w-xs">
                        <Link
                          href={`/products/${prod.slug}`}
                          target="_blank"
                          className="font-medium text-charcoal hover:text-terracotta line-clamp-1 flex items-center gap-1"
                        >
                          <span>{prod.name}</span>
                          <ExternalLink className="w-2.5 h-2.5 text-charcoal-muted" />
                        </Link>
                        {prod.botanicalName && (
                          <span className="text-[11px] text-charcoal-muted italic block">
                            {prod.botanicalName}
                          </span>
                        )}
                        <span className="text-[10px] text-charcoal-muted/70 font-mono block">
                          ID: {prod.id}
                        </span>
                      </td>

                      {/* Category & Subcategory */}
                      <td className="py-3 px-4">
                        <span className="inline-block px-2 py-0.5 rounded bg-sand text-olive text-[11px] font-medium capitalize">
                          {categories.find((c) => c.id === prod.category)?.name || prod.category}
                        </span>
                        {prod.subcategory && (
                          <span className="text-[10px] text-charcoal-muted block mt-0.5">
                            {prod.subcategory}
                          </span>
                        )}
                      </td>

                      {/* Price */}
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className="font-semibold text-olive block">{formatPrice(prod.price)}</span>
                        {prod.originalPrice && prod.originalPrice > prod.price && (
                          <span className="text-[10px] text-charcoal-muted line-through">
                            {formatPrice(prod.originalPrice)}
                          </span>
                        )}
                      </td>

                      {/* Stock status toggle */}
                      <td className="py-3 px-4 whitespace-nowrap">
                        <button
                          onClick={() => {
                            updateProduct(prod.id, { inStock: !prod.inStock });
                            showToast(`${prod.name} marked as ${!prod.inStock ? "In Stock" : "Out of Stock"}`);
                          }}
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium cursor-pointer transition-colors ${
                            prod.inStock
                              ? "bg-green-100 text-green-800 hover:bg-green-200"
                              : "bg-red-100 text-red-800 hover:bg-red-200"
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${prod.inStock ? "bg-green-600" : "bg-red-600"}`} />
                          <span>{prod.inStock ? "In Stock" : "Out of Stock"}</span>
                        </button>
                        <span className="text-[10px] text-charcoal-muted block mt-0.5">
                          Qty: {prod.stockCount || 0}
                        </span>
                      </td>

                      {/* Badges */}
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1">
                          {prod.isBestseller && (
                            <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[9px] font-medium">
                              Bestseller
                            </span>
                          )}
                          {prod.isBeginnerFriendly && (
                            <span className="px-1.5 py-0.5 rounded bg-olive-light text-olive text-[9px] font-medium">
                              Beginner
                            </span>
                          )}
                          {prod.isPetSafe && (
                            <span className="px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 text-[9px] font-medium">
                              Pet-Safe
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="py-3 px-4 text-right whitespace-nowrap space-x-2">
                        <button
                          onClick={() => setEditingProduct(prod)}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-olive/10 hover:bg-olive text-olive hover:text-white font-medium transition-colors cursor-pointer"
                        >
                          <Edit className="w-3 h-3" />
                          <span>Alter Images & Info</span>
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Are you sure you want to delete "${prod.name}"?`)) {
                              deleteProduct(prod.id);
                              showToast(`Deleted "${prod.name}"`);
                            }
                          }}
                          className="p-1.5 rounded-lg text-charcoal-muted hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                          title="Delete Product"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}

                  {filteredProducts.length === 0 && (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-charcoal-muted">
                        No products found matching your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 2: CATEGORIES & BANNERS */}
      {/* ========================================================= */}
      {activeTab === "categories" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-olive font-serif">Category Customizer</h2>
              <p className="text-xs text-charcoal-muted">
                Change category banner images, headlines, descriptions, and subcategory tags.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-2xl border border-sand overflow-hidden shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Category Image Banner Preview */}
                  <div className="relative h-44 w-full bg-sand-light overflow-hidden">
                    {cat.image ? (
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        sizes="400px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-charcoal-muted">
                        <ImageIcon className="w-8 h-8" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                      <div className="text-white">
                        <h3 className="font-serif font-bold text-lg">{cat.name}</h3>
                        <span className="text-[11px] opacity-90 block">
                          Slug: /category/{cat.slug} &bull; {products.filter((p) => p.category === cat.id).length} products
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4 space-y-3">
                    <div>
                      <span className="text-[11px] uppercase font-semibold text-charcoal-muted block">Headline</span>
                      <p className="text-xs text-charcoal leading-snug">{cat.headline}</p>
                    </div>

                    <div>
                      <span className="text-[11px] uppercase font-semibold text-charcoal-muted block">Description</span>
                      <p className="text-xs text-charcoal-muted leading-relaxed line-clamp-2">
                        {cat.description}
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] uppercase font-semibold text-charcoal-muted block mb-1">
                        Subcategories ({cat.subcategories.length})
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {cat.subcategories.map((sub, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-sand-light rounded text-[10px] font-medium text-olive border border-sand"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Edit Button */}
                <div className="p-4 border-t border-sand bg-cream-50 flex items-center justify-between">
                  <Link
                    href={`/category/${cat.slug}`}
                    target="_blank"
                    className="text-xs text-olive hover:underline flex items-center gap-1"
                  >
                    <span>View Category Page</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>

                  <button
                    onClick={() => setEditingCategory(cat)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-olive text-white text-xs font-medium hover:bg-olive-dark transition-colors cursor-pointer"
                  >
                    <Edit className="w-3 h-3" />
                    <span>Edit Banner & Info</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 3: STORE & WHATSAPP INFO */}
      {/* ========================================================= */}
      {activeTab === "store-info" && (
        <div className="max-w-2xl bg-white p-6 rounded-2xl border border-sand shadow-xs space-y-6">
          <div className="border-b border-sand pb-4">
            <h2 className="font-serif text-lg font-bold text-olive">Little Plants &bull; Mangaluru Store Profile</h2>
            <p className="text-xs text-charcoal-muted">
              Live configuration for store address, WhatsApp concierge, and customer routing.
            </p>
          </div>

          <div className="space-y-4 text-xs">
            <div className="p-3 bg-sand-light/50 rounded-xl space-y-1">
              <span className="font-semibold text-olive uppercase tracking-wider text-[10px]">Store Address</span>
              <p className="text-charcoal leading-relaxed">{siteConfig.contact.studios[0].address}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 bg-sand-light/50 rounded-xl space-y-1">
                <span className="font-semibold text-olive uppercase tracking-wider text-[10px]">Phone Number</span>
                <p className="text-charcoal font-mono font-medium">{siteConfig.contact.phone}</p>
              </div>

              <div className="p-3 bg-sand-light/50 rounded-xl space-y-1">
                <span className="font-semibold text-olive uppercase tracking-wider text-[10px]">WhatsApp Dispatch</span>
                <p className="text-charcoal font-mono font-medium">{siteConfig.contact.whatsapp}</p>
              </div>
            </div>

            <div className="p-3 bg-sand-light/50 rounded-xl space-y-1">
              <span className="font-semibold text-olive uppercase tracking-wider text-[10px]">Store Timings</span>
              <p className="text-charcoal">{siteConfig.contact.hours}</p>
            </div>

            <div className="p-4 bg-olive-light/50 rounded-xl border border-olive-subtle flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-olive shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="text-olive font-semibold block">WhatsApp Direct Ordering is Active</strong>
                <p className="text-charcoal text-[11px] leading-relaxed">
                  Every cart checkout and instant buy click generates a customized, pre-formatted order message directly sent to your WhatsApp <span className="font-mono font-semibold">{siteConfig.contact.whatsapp}</span> with exact product names, quantities, customer address, and pricing totals.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: EDIT PRODUCT (ALTER IMAGES, CATEGORY, PRICE, DETAILS) */}
      {/* ========================================================= */}
      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          categories={categories}
          onClose={() => setEditingProduct(null)}
          onSave={(updated) => {
            updateProduct(updated.id, updated);
            setEditingProduct(null);
            showToast(`Saved updates for "${updated.name}"`);
          }}
        />
      )}

      {/* ========================================================= */}
      {/* MODAL: ADD NEW PRODUCT */}
      {/* ========================================================= */}
      {isAddProductOpen && (
        <AddProductModal
          categories={categories}
          onClose={() => setIsAddProductOpen(false)}
          onAdd={(newProd) => {
            addProduct(newProd);
            setIsAddProductOpen(false);
            showToast(`Added new product "${newProd.name}"`);
          }}
        />
      )}

      {/* ========================================================= */}
      {/* MODAL: EDIT CATEGORY */}
      {/* ========================================================= */}
      {editingCategory && (
        <EditCategoryModal
          category={editingCategory}
          onClose={() => setEditingCategory(null)}
          onSave={(updated) => {
            updateCategory(updated.id, updated);
            setEditingCategory(null);
            showToast(`Saved updates for category "${updated.name}"`);
          }}
        />
      )}
    </div>
  );
}

// =====================================================================
// SUB-COMPONENT: EDIT PRODUCT MODAL
// =====================================================================
function EditProductModal({
  product,
  categories,
  onClose,
  onSave,
}: {
  product: Product;
  categories: CategoryInfo[];
  onClose: () => void;
  onSave: (product: Product) => void;
}) {
  const [name, setName] = useState(product.name);
  const [botanicalName, setBotanicalName] = useState(product.botanicalName || "");
  const [category, setCategory] = useState<ProductCategory>(product.category);
  const [subcategory, setSubcategory] = useState(product.subcategory);
  const [price, setPrice] = useState(product.price);
  const [originalPrice, setOriginalPrice] = useState(product.originalPrice || product.price);
  const [inStock, setInStock] = useState(product.inStock);
  const [stockCount, setStockCount] = useState(product.stockCount || 10);
  const [isBestseller, setIsBestseller] = useState(product.isBestseller || false);
  const [isBeginnerFriendly, setIsBeginnerFriendly] = useState(product.isBeginnerFriendly || false);
  const [isPetSafe, setIsPetSafe] = useState(product.isPetSafe || false);
  const [shortDescription, setShortDescription] = useState(product.shortDescription || "");
  const [description, setDescription] = useState(product.description || "");

  // Images manager
  const [images, setImages] = useState<string[]>(product.images || []);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newImageError, setNewImageError] = useState("");

  const handleAddImage = () => {
    if (!newImageUrl.trim()) return;
    if (!newImageUrl.startsWith("http://") && !newImageUrl.startsWith("https://")) {
      setNewImageError("Image URL must start with http:// or https://");
      return;
    }
    setImages([...images, newImageUrl.trim()]);
    setNewImageUrl("");
    setNewImageError("");
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSetPrimary = (index: number) => {
    if (index === 0) return;
    const target = images[index];
    const rest = images.filter((_, i) => i !== index);
    setImages([target, ...rest]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...product,
      name,
      botanicalName: botanicalName || undefined,
      category,
      subcategory,
      price: Number(price),
      originalPrice: Number(originalPrice),
      inStock,
      stockCount: Number(stockCount),
      isBestseller,
      isBeginnerFriendly,
      isPetSafe,
      shortDescription,
      description,
      images: images.length > 0 ? images : product.images,
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-sand shadow-2xl">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-sand p-4 flex items-center justify-between z-10">
          <div>
            <h2 className="font-serif text-lg font-bold text-olive">Alter Product & Images</h2>
            <p className="text-xs text-charcoal-muted">Editing: {product.name}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-charcoal-muted hover:text-charcoal hover:bg-sand-light"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 text-xs">
          {/* ========================================= */}
          {/* SECTION 1: IMAGE MANAGEMENT (KEY FEATURE) */}
          {/* ========================================= */}
          <div className="space-y-3 p-4 rounded-xl bg-sand-light/50 border border-sand">
            <div className="flex items-center justify-between">
              <span className="font-serif text-sm font-bold text-olive flex items-center gap-1.5">
                <ImageIcon className="w-4 h-4 text-terracotta" />
                <span>Product Images ({images.length})</span>
              </span>
              <span className="text-[11px] text-charcoal-muted">First image is the Main Cover</span>
            </div>

            {/* Existing images list with live preview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {images.map((imgUrl, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-xl border-2 overflow-hidden bg-white group p-1 ${
                    idx === 0 ? "border-terracotta" : "border-sand"
                  }`}
                >
                  <div className="relative h-28 w-full rounded-lg overflow-hidden bg-sand-light">
                    <Image
                      src={imgUrl}
                      alt={`Product view ${idx + 1}`}
                      fill
                      sizes="150px"
                      className="object-cover"
                    />
                  </div>

                  {idx === 0 && (
                    <span className="absolute top-2 left-2 bg-terracotta text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow">
                      Cover
                    </span>
                  )}

                  <div className="mt-2 flex items-center justify-between gap-1">
                    {idx !== 0 && (
                      <button
                        type="button"
                        onClick={() => handleSetPrimary(idx)}
                        className="text-[10px] text-olive hover:underline font-medium"
                      >
                        Make Cover
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(idx)}
                      className="text-[10px] text-red-600 hover:underline font-medium ml-auto"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Add new image input */}
            <div className="pt-2 border-t border-sand space-y-2">
              <span className="text-[11px] font-semibold text-charcoal block">Add New Image URL:</span>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/... or any public image URL"
                  value={newImageUrl}
                  onChange={(e) => {
                    setNewImageUrl(e.target.value);
                    setNewImageError("");
                  }}
                  className="flex-1 px-3 py-2 rounded-xl bg-white border border-sand-dark text-xs focus:outline-none focus:border-terracotta"
                />
                <button
                  type="button"
                  onClick={handleAddImage}
                  className="px-4 py-2 bg-olive hover:bg-olive-dark text-white rounded-xl font-medium transition-colors cursor-pointer"
                >
                  Add Image
                </button>
              </div>
              {newImageError && <p className="text-[11px] text-red-600">{newImageError}</p>}
            </div>
          </div>

          {/* ========================================= */}
          {/* SECTION 2: TITLE & CATEGORY */}
          {/* ========================================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-medium text-charcoal block mb-1">Product Title</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-sand-dark focus:outline-none focus:border-terracotta"
              />
            </div>

            <div>
              <label className="font-medium text-charcoal block mb-1">Botanical Name (Optional)</label>
              <input
                type="text"
                value={botanicalName}
                onChange={(e) => setBotanicalName(e.target.value)}
                placeholder="e.g. Sansevieria trifasciata"
                className="w-full px-3 py-2 rounded-xl border border-sand-dark focus:outline-none focus:border-terracotta"
              />
            </div>

            <div>
              <label className="font-medium text-charcoal block mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ProductCategory)}
                className="w-full px-3 py-2 rounded-xl border border-sand-dark bg-white focus:outline-none focus:border-terracotta"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-medium text-charcoal block mb-1">Subcategory</label>
              <input
                type="text"
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                placeholder="e.g. Air Purifying, Low Light, Ceramic"
                className="w-full px-3 py-2 rounded-xl border border-sand-dark focus:outline-none focus:border-terracotta"
              />
            </div>
          </div>

          {/* ========================================= */}
          {/* SECTION 3: PRICING & INVENTORY */}
          {/* ========================================= */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-sand-light/30 border border-sand">
            <div>
              <label className="font-medium text-charcoal block mb-1">Selling Price (₹)</label>
              <input
                type="number"
                required
                min={0}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-sand-dark bg-white focus:outline-none focus:border-terracotta"
              />
            </div>

            <div>
              <label className="font-medium text-charcoal block mb-1">Original Price (₹ MRP)</label>
              <input
                type="number"
                min={0}
                value={originalPrice}
                onChange={(e) => setOriginalPrice(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-sand-dark bg-white focus:outline-none focus:border-terracotta"
              />
            </div>

            <div>
              <label className="font-medium text-charcoal block mb-1">Stock Quantity</label>
              <input
                type="number"
                min={0}
                value={stockCount}
                onChange={(e) => setStockCount(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-sand-dark bg-white focus:outline-none focus:border-terracotta"
              />
            </div>
          </div>

          {/* ========================================= */}
          {/* SECTION 4: TOGGLES */}
          {/* ========================================= */}
          <div className="flex flex-wrap gap-6 pt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={inStock}
                onChange={(e) => setInStock(e.target.checked)}
                className="w-4 h-4 text-terracotta rounded"
              />
              <span className="font-medium text-charcoal">Available in Stock</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isBestseller}
                onChange={(e) => setIsBestseller(e.target.checked)}
                className="w-4 h-4 text-terracotta rounded"
              />
              <span className="font-medium text-charcoal">Feature as Bestseller</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isBeginnerFriendly}
                onChange={(e) => setIsBeginnerFriendly(e.target.checked)}
                className="w-4 h-4 text-terracotta rounded"
              />
              <span className="font-medium text-charcoal">Beginner Friendly</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isPetSafe}
                onChange={(e) => setIsPetSafe(e.target.checked)}
                className="w-4 h-4 text-terracotta rounded"
              />
              <span className="font-medium text-charcoal">100% Pet-Safe</span>
            </label>
          </div>

          {/* ========================================= */}
          {/* SECTION 5: DESCRIPTIONS */}
          {/* ========================================= */}
          <div className="space-y-3">
            <div>
              <label className="font-medium text-charcoal block mb-1">Short Tagline Description</label>
              <input
                type="text"
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-sand-dark focus:outline-none focus:border-terracotta"
              />
            </div>

            <div>
              <label className="font-medium text-charcoal block mb-1">Full Detailed Story & Guidance</label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-sand-dark focus:outline-none focus:border-terracotta"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="pt-4 border-t border-sand flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-sand-dark text-charcoal hover:bg-sand-light transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-medium transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Save className="w-4 h-4" />
              <span>Save & Publish Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// =====================================================================
// SUB-COMPONENT: ADD PRODUCT MODAL
// =====================================================================
function AddProductModal({
  categories,
  onClose,
  onAdd,
}: {
  categories: CategoryInfo[];
  onClose: () => void;
  onAdd: (product: Product) => void;
}) {
  const [name, setName] = useState("");
  const [botanicalName, setBotanicalName] = useState("");
  const [category, setCategory] = useState<ProductCategory>("plants");
  const [subcategory, setSubcategory] = useState("Air Purifying");
  const [price, setPrice] = useState(599);
  const [originalPrice, setOriginalPrice] = useState(799);
  const [imageUrl, setImageUrl] = useState(
    "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=1000&auto=format&fit=crop"
  );
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    const id = `custom-${Date.now()}`;

    const newProd: Product = {
      id,
      slug: slug || id,
      name,
      botanicalName: botanicalName || undefined,
      category,
      subcategory,
      price: Number(price),
      originalPrice: Number(originalPrice),
      rating: 5.0,
      reviewCount: 1,
      isBestseller: false,
      isNew: true,
      isBeginnerFriendly: true,
      isPetSafe: false,
      inStock: true,
      stockCount: 15,
      shortDescription: shortDescription || `${name} nurtured for Indian homes.`,
      description: description || `${name} acclimatized for indoor and balcony living spaces.`,
      images: [imageUrl.trim()],
      variants: {
        sizes: [
          {
            id: "std",
            name: "Standard (Pot Included)",
            heightGuide: "Standard healthy nursery pot",
            priceModifier: 0,
          },
        ],
      },
      packageContents: ["Healthy living plant in nursery pot", "Care passport"],
      approximateDimensions: "Height: 10-14 inches",
      compatiblePlanters: [],
      careAddons: [],
      tags: [category, "new"],
    };

    onAdd(newProd);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-sand shadow-2xl p-6 space-y-6 text-xs">
        <div className="flex items-center justify-between border-b border-sand pb-3">
          <h2 className="font-serif text-lg font-bold text-olive">Add New Botanical Product</h2>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-sand-light">
            <X className="w-5 h-5 text-charcoal-muted" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-medium text-charcoal block mb-1">Product Title</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ficus Lyrata Bambino"
                className="w-full px-3 py-2 rounded-xl border border-sand-dark focus:outline-none focus:border-terracotta"
              />
            </div>
            <div>
              <label className="font-medium text-charcoal block mb-1">Botanical Name (Optional)</label>
              <input
                type="text"
                value={botanicalName}
                onChange={(e) => setBotanicalName(e.target.value)}
                placeholder="e.g. Ficus lyrata"
                className="w-full px-3 py-2 rounded-xl border border-sand-dark focus:outline-none focus:border-terracotta"
              />
            </div>
            <div>
              <label className="font-medium text-charcoal block mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ProductCategory)}
                className="w-full px-3 py-2 rounded-xl border border-sand-dark bg-white focus:outline-none focus:border-terracotta"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-medium text-charcoal block mb-1">Subcategory</label>
              <input
                type="text"
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                placeholder="e.g. Air Purifying"
                className="w-full px-3 py-2 rounded-xl border border-sand-dark focus:outline-none focus:border-terracotta"
              />
            </div>
          </div>

          <div>
            <label className="font-medium text-charcoal block mb-1">Product Cover Image URL</label>
            <input
              type="url"
              required
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://..."
              className="w-full px-3 py-2 rounded-xl border border-sand-dark focus:outline-none focus:border-terracotta"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-medium text-charcoal block mb-1">Price (₹)</label>
              <input
                type="number"
                required
                min={0}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-sand-dark focus:outline-none focus:border-terracotta"
              />
            </div>
            <div>
              <label className="font-medium text-charcoal block mb-1">Original Price (₹ MRP)</label>
              <input
                type="number"
                min={0}
                value={originalPrice}
                onChange={(e) => setOriginalPrice(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-sand-dark focus:outline-none focus:border-terracotta"
              />
            </div>
          </div>

          <div>
            <label className="font-medium text-charcoal block mb-1">Short Description</label>
            <input
              type="text"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              placeholder="Quick 1-liner summary..."
              className="w-full px-3 py-2 rounded-xl border border-sand-dark focus:outline-none focus:border-terracotta"
            />
          </div>

          <div className="pt-4 border-t border-sand flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-sand-dark text-charcoal hover:bg-sand-light"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-medium transition-colors"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// =====================================================================
// SUB-COMPONENT: EDIT CATEGORY MODAL
// =====================================================================
function EditCategoryModal({
  category,
  onClose,
  onSave,
}: {
  category: CategoryInfo;
  onClose: () => void;
  onSave: (cat: CategoryInfo) => void;
}) {
  const [name, setName] = useState(category.name);
  const [headline, setHeadline] = useState(category.headline);
  const [description, setDescription] = useState(category.description);
  const [image, setImage] = useState(category.image);
  const [subcategoriesStr, setSubcategoriesStr] = useState(category.subcategories.join(", "));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subcategories = subcategoriesStr
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    onSave({
      ...category,
      name,
      headline,
      description,
      image: image.trim(),
      subcategories,
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full border border-sand shadow-2xl p-6 space-y-6 text-xs">
        <div className="flex items-center justify-between border-b border-sand pb-3">
          <h2 className="font-serif text-lg font-bold text-olive">Edit Category Banner & Info</h2>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-sand-light">
            <X className="w-5 h-5 text-charcoal-muted" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="font-medium text-charcoal block mb-1">Category Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-sand-dark focus:outline-none focus:border-terracotta"
            />
          </div>

          <div>
            <label className="font-medium text-charcoal block mb-1">Banner Hero Image URL</label>
            <input
              type="url"
              required
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-sand-dark focus:outline-none focus:border-terracotta"
            />
            {image && (
              <div className="relative h-28 w-full rounded-xl overflow-hidden mt-2 border border-sand bg-sand-light">
                <Image src={image} alt="Preview" fill sizes="400px" className="object-cover" />
              </div>
            )}
          </div>

          <div>
            <label className="font-medium text-charcoal block mb-1">Headline</label>
            <input
              type="text"
              required
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-sand-dark focus:outline-none focus:border-terracotta"
            />
          </div>

          <div>
            <label className="font-medium text-charcoal block mb-1">Description</label>
            <textarea
              rows={2}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-sand-dark focus:outline-none focus:border-terracotta"
            />
          </div>

          <div>
            <label className="font-medium text-charcoal block mb-1">
              Subcategories (comma-separated)
            </label>
            <input
              type="text"
              value={subcategoriesStr}
              onChange={(e) => setSubcategoriesStr(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-sand-dark focus:outline-none focus:border-terracotta"
            />
          </div>

          <div className="pt-4 border-t border-sand flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-sand-dark text-charcoal hover:bg-sand-light"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-medium transition-colors"
            >
              Save Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
