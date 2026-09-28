import { notFound } from "next/navigation";
import Link from "next/link";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { ProductGridWithFilters } from "@/components/shop/ProductGridWithFilters";
import { ChevronRight, Home } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ sub?: string }>;
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params;
  const { sub } = await searchParams;

  const category = categories.find((c) => c.slug === slug);
  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((p) => p.category === category.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-6">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-charcoal-muted">
        <Link href="/" className="hover:text-charcoal flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <Link href="/shop" className="hover:text-charcoal">
          Shop
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <span className="text-olive font-medium">{category.name}</span>
        {sub && (
          <>
            <ChevronRight className="w-3 h-3 text-sand-dark" />
            <span className="text-terracotta font-medium">{sub}</span>
          </>
        )}
      </nav>

      {/* Main Grid with Category Focus */}
      <ProductGridWithFilters
        initialProducts={categoryProducts}
        currentCategory={category.id}
        initialSubcategory={sub}
        title={category.name}
        subtitle={category.description}
      />
    </div>
  );
}

export function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}
