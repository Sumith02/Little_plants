import Link from "next/link";
import Image from "next/image";
import { journalPosts } from "@/data/journal";
import { Home, ChevronRight, ArrowRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "The Plant Parent Journal | Little Plants",
  description:
    "Expert botanical guides, Indian monsoon houseplant care, repotting rituals, and apartment gardening wisdom.",
};

export default function JournalPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-charcoal-muted">
        <Link href="/" className="hover:text-charcoal flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <span className="text-olive font-medium">Plant Care Journal</span>
      </nav>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand text-xs font-semibold text-terracotta">
          <BookOpen className="w-3.5 h-3.5" />
          <span>The Botanical Journal</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-olive">
          Wisdom for the Modern Plant Parent
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
          Horticultural masterclasses, seasonal monsoon watering guides, and apartment care rituals crafted for Indian homes by our Pune nursery botanists.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {journalPosts.map((post) => (
          <Link
            key={post.id}
            href={`/journal/${post.slug}`}
            className="group bg-cream-50 rounded-3xl border border-sand hover:border-sand-dark overflow-hidden flex flex-col transition-all duration-300 shadow-2xs hover:shadow-md"
          >
            <div className="relative aspect-16/10 bg-sand overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-cream/90 backdrop-blur-xs text-olive border border-sand">
                {post.category}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="text-[11px] text-charcoal-muted flex items-center gap-2">
                  <span>{post.date}</span>
                  <span>&bull;</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="font-serif text-xl font-bold text-olive group-hover:text-terracotta transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-xs text-charcoal-muted line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-sand flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden bg-sand">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-medium text-charcoal">{post.author.name}</span>
                </div>
                <span className="font-semibold text-terracotta group-hover:underline inline-flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
