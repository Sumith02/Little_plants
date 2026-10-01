import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/data/products";
import { ProductDetailView } from "./ProductDetailView";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name} | Little Plants`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Resolve compatible planters (sorted low to high price)
  const compatiblePlanterProducts = products
    .filter((p) => product.compatiblePlanters?.includes(p.id))
    .sort((a, b) => a.price - b.price);

  // Resolve care addons (sorted low to high price)
  const careAddonProducts = products
    .filter((p) => product.careAddons?.includes(p.id))
    .sort((a, b) => a.price - b.price);

  // Related products from same category or subcategory (sorted low to high price)
  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.subcategory === product.subcategory))
    .sort((a, b) => a.price - b.price)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <ProductDetailView
        product={product}
        compatiblePlanterProducts={compatiblePlanterProducts}
        careAddonProducts={careAddonProducts}
        relatedProducts={relatedProducts}
      />
    </div>
  );
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}
