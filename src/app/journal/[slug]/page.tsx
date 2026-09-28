import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { journalPosts } from "@/data/journal";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { Home, ChevronRight, ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";

interface JournalDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: JournalDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Little Plants Journal`,
    description: post.excerpt,
  };
}

export default async function JournalDetailPage({ params }: JournalDetailPageProps) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedProducts = products.filter((p) => post.relatedProductIds?.includes(p.id));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-charcoal-muted">
        <Link href="/" className="hover:text-charcoal flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <Link href="/journal" className="hover:text-charcoal">
          Journal
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <span className="text-olive font-medium truncate max-w-xs">{post.title}</span>
      </nav>

      {/* Article Header */}
      <div className="space-y-4 text-center sm:text-left">
        <div className="inline-block px-3 py-1 rounded-full bg-olive-light border border-olive-subtle text-xs font-semibold text-olive uppercase tracking-wider">
          {post.category}
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-olive leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-charcoal-muted pt-2 border-b border-sand pb-4">
          <div className="flex items-center gap-2">
            <div className="relative w-7 h-7 rounded-full overflow-hidden bg-sand">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-semibold text-charcoal block">{post.author.name}</span>
              <span className="text-[10px] text-charcoal-muted">{post.author.role}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      <div className="relative aspect-16/9 rounded-3xl overflow-hidden bg-sand border border-sand shadow-sm">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      {/* Article Body */}
      <article className="prose prose-olive max-w-none text-charcoal-muted text-sm sm:text-base leading-relaxed space-y-6">
        <div className="p-4 sm:p-6 rounded-2xl bg-sand-light/60 border border-sand font-serif text-base sm:text-lg text-olive italic leading-relaxed">
          &ldquo;{post.excerpt}&rdquo;
        </div>

        <div className="space-y-4 text-charcoal whitespace-pre-line leading-relaxed">
          {post.content}
        </div>
      </article>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="pt-6 border-t border-sand flex flex-wrap items-center gap-2 text-xs">
          <span className="font-semibold text-olive uppercase tracking-wider text-[11px]">
            Tagged Under:
          </span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-sand-light border border-sand text-charcoal"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Related Products from Article */}
      {relatedProducts.length > 0 && (
        <section className="pt-10 border-t border-sand space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
              Featured In This Guide
            </span>
            <h3 className="font-serif text-2xl font-bold text-olive mt-1">
              Recommended Botanical Essentials
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Back button */}
      <div className="pt-6 text-center">
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sand hover:bg-sand-dark text-olive font-semibold text-xs transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Journal Archive</span>
        </Link>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return journalPosts.map((p) => ({
    slug: p.slug,
  }));
}
