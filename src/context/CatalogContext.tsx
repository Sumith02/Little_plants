"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, CategoryInfo } from "@/types";
import { products as defaultProducts } from "@/data/products";
import { categories as defaultCategories } from "@/data/categories";

const STORAGE_KEY_PRODUCTS = "little_plants_catalog_products_v3";
const STORAGE_KEY_CATEGORIES = "little_plants_catalog_categories_v3";

interface CatalogContextType {
  products: Product[];
  categories: CategoryInfo[];
  isLoaded: boolean;
  isCustomized: boolean;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  addProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  updateCategory: (id: string, updates: Partial<CategoryInfo>) => void;
  addCategory: (category: CategoryInfo) => void;
  resetCatalog: () => void;
  getProductById: (id: string) => Product | undefined;
  getProductBySlug: (slug: string) => Product | undefined;
}

const CatalogContext = createContext<CatalogContextType | undefined>(undefined);

export const CatalogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(defaultProducts);
  const [categories, setCategories] = useState<CategoryInfo[]>(defaultCategories);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCustomized, setIsCustomized] = useState(false);

  // Hydrate from localStorage on client mount
  useEffect(() => {
    try {
      // Clear legacy storage versions
      localStorage.removeItem("little_plants_catalog_products_v1");
      localStorage.removeItem("little_plants_catalog_categories_v1");
      localStorage.removeItem("little_plants_catalog_products_v2");
      localStorage.removeItem("little_plants_catalog_categories_v2");

      const storedProds = localStorage.getItem(STORAGE_KEY_PRODUCTS);
      const storedCats = localStorage.getItem(STORAGE_KEY_CATEGORIES);

      let custom = false;
      if (storedProds) {
        const parsedProds = JSON.parse(storedProds);
        if (Array.isArray(parsedProds) && parsedProds.length > 0) {
          setProducts(parsedProds);
          custom = true;
        }
      }

      if (storedCats) {
        const parsedCats = JSON.parse(storedCats);
        if (Array.isArray(parsedCats) && parsedCats.length > 0) {
          setCategories(parsedCats);
          custom = true;
        }
      }

      setIsCustomized(custom);
    } catch (e) {
      console.error("Failed to load catalog from localStorage", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const saveProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
    try {
      localStorage.setItem(STORAGE_KEY_PRODUCTS, JSON.stringify(newProducts));
      setIsCustomized(true);
    } catch (e) {
      console.error("Failed to save products to localStorage", e);
    }
  };

  const saveCategories = (newCategories: CategoryInfo[]) => {
    setCategories(newCategories);
    try {
      localStorage.setItem(STORAGE_KEY_CATEGORIES, JSON.stringify(newCategories));
      setIsCustomized(true);
    } catch (e) {
      console.error("Failed to save categories to localStorage", e);
    }
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    const updated = products.map((prod) => {
      if (prod.id === id) {
        return { ...prod, ...updates };
      }
      return prod;
    });
    saveProducts(updated);
  };

  const addProduct = (product: Product) => {
    const updated = [product, ...products];
    saveProducts(updated);
  };

  const deleteProduct = (id: string) => {
    const updated = products.filter((p) => p.id !== id);
    saveProducts(updated);
  };

  const updateCategory = (id: string, updates: Partial<CategoryInfo>) => {
    const updated = categories.map((cat) => {
      if (cat.id === id) {
        return { ...cat, ...updates };
      }
      return cat;
    });
    saveCategories(updated);
  };

  const addCategory = (category: CategoryInfo) => {
    const updated = [...categories, category];
    saveCategories(updated);
  };

  const resetCatalog = () => {
    try {
      localStorage.removeItem(STORAGE_KEY_PRODUCTS);
      localStorage.removeItem(STORAGE_KEY_CATEGORIES);
    } catch (e) {
      console.error("Failed to clear localStorage catalog", e);
    }
    setProducts(defaultProducts);
    setCategories(defaultCategories);
    setIsCustomized(false);
  };

  const getProductById = (id: string) => products.find((p) => p.id === id);
  const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);

  return (
    <CatalogContext.Provider
      value={{
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
        getProductById,
        getProductBySlug,
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
};

export const useCatalog = () => {
  const context = useContext(CatalogContext);
  if (!context) {
    // Provide a safe fallback using default arrays if used outside CatalogProvider
    return {
      products: defaultProducts,
      categories: defaultCategories,
      isLoaded: true,
      isCustomized: false,
      updateProduct: () => {},
      addProduct: () => {},
      deleteProduct: () => {},
      updateCategory: () => {},
      addCategory: () => {},
      resetCatalog: () => {},
      getProductById: (id: string) => defaultProducts.find((p) => p.id === id),
      getProductBySlug: (slug: string) => defaultProducts.find((p) => p.slug === slug),
    };
  }
  return context;
};
