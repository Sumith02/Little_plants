export type ProductCategory =
  | "plants"
  | "pots-planters"
  | "seeds"
  | "plant-care"
  | "gardening-tools"
  | "gifts";

export interface PlantCareGuide {
  light: "Direct Sun" | "Bright Indirect" | "Medium Light" | "Low Light";
  lightDetail: string;
  watering: "Every 2-3 Days" | "Weekly" | "Every 10-14 Days" | "When Top 2 Inches Dry";
  wateringDetail: string;
  humidity: "Average Home" | "High (Misting Helpful)" | "Tolerant of Dry Air";
  petFriendly: boolean;
  petNote?: string;
  difficulty: "Beginner Friendly" | "Moderate Care" | "Experienced Plant Parent";
  idealPlacement: string[];
  feed: string;
  repotting: string;
  commonIssues: string;
}

export interface ProductVariantSize {
  id: string;
  name: string; // e.g., "Small (10-14 inches)", "Medium (16-22 inches)", "Large (24-32 inches)"
  heightGuide: string;
  priceModifier: number; // additional cost in INR
}

export interface ProductVariantMaterial {
  id: string;
  name: string; // e.g., "Handcrafted Terracotta", "Glazed Ceramic", "Hydro Self-Watering"
  priceModifier: number;
}

export interface ProductVariantColor {
  id: string;
  name: string; // e.g., "Terracotta Rust", "Sand Dune", "Olive Leaf", "Charcoal"
  hex: string;
}

export interface ProductVariants {
  sizes?: ProductVariantSize[];
  planterMaterials?: ProductVariantMaterial[];
  planterColors?: ProductVariantColor[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  botanicalName?: string;
  category: ProductCategory;
  subcategory: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  isBestseller?: boolean;
  isNew?: boolean;
  isBeginnerFriendly?: boolean;
  isPetSafe?: boolean;
  inStock: boolean;
  stockCount: number;
  shortDescription: string;
  description: string;
  images: string[];
  careGuide?: PlantCareGuide;
  variants?: ProductVariants;
  packageContents: string[];
  approximateDimensions: string;
  compatiblePlanters?: string[]; // IDs of recommended pots
  careAddons?: string[]; // IDs of soil, fertilizer, mister
  tags: string[];
}

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  slug: string;
  headline: string;
  description: string;
  image: string;
  productCount: number;
  subcategories: string[];
}

export interface CartItem {
  id: string; // unique item id composed of productId + variant ids
  productId: string;
  product: Product;
  selectedSize?: ProductVariantSize;
  selectedPlanterMaterial?: ProductVariantMaterial;
  selectedPlanterColor?: ProductVariantColor;
  quantity: number;
  unitPrice: number;
}

export interface RoomSpace {
  id: string;
  name: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  idealConditions: {
    light: string;
    airflow: string;
    temperature: string;
  };
  stylingTip: string;
  recommendedPlantIds: string[];
}

export interface BundleProduct {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  plantId: string;
  planterId: string;
  addonIds: string[];
  discountPercent: number;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  verifiedBuyer: boolean;
  rating: number;
  title: string;
  comment: string;
  date: string;
  productName: string;
  productSlug?: string;
  helpfulCount: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  coverImage: string;
  category: string;
  tags: string[];
  relatedProductIds: string[];
}

export interface QuizQuestion {
  id: string;
  step: number;
  question: string;
  subtitle: string;
  options: {
    id: string;
    label: string;
    description: string;
    iconName: string;
    matchTags: string[];
  }[];
}

export interface OrderTimelineEvent {
  step: string;
  status: "completed" | "current" | "upcoming";
  date: string;
  description: string;
  location?: string;
}

export interface OrderRecord {
  id: string;
  orderNumber: string;
  createdAt: string;
  customer: {
    fullName: string;
    email: string;
    phone: string;
    addressLine1: string;
    addressLine2?: string;
    landmark?: string;
    city: string;
    state: string;
    pincode: string;
  };
  items: CartItem[];
  subtotal: number;
  couponDiscount: number;
  couponCode?: string;
  shippingFee: number;
  shippingMethod: "standard" | "express";
  total: number;
  paymentMethod: "razorpay_simulated" | "cod_simulated";
  paymentStatus: "paid" | "pending_cod";
  fulfillmentStatus: "processing" | "packed" | "in_transit" | "delivered";
  trackingNumber: string;
  carrierName: string;
  estimatedDelivery: string;
  giftMessage?: string;
  timeline: OrderTimelineEvent[];
}

export interface ProductFilters {
  searchQuery: string;
  category: ProductCategory | "all";
  subcategory?: string;
  minPrice?: number;
  maxPrice?: number;
  light?: string;
  watering?: string;
  size?: string;
  inStockOnly?: boolean;
  beginnerOnly?: boolean;
  petSafeOnly?: boolean;
  sortBy: "featured" | "price-asc" | "price-desc" | "rating" | "newest";
}
