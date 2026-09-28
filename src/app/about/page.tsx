import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  Sprout,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Home,
  ChevronRight,
  Heart,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "About Us | Little Plants (ಲಿಟಲ್ ಪ್ಲಾಂಟ್ಸ್)",
  description:
    "Discover how Little Plants acclimatizes living tropicals, champions earthen pottery craft, and safely ships across India.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-16">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-charcoal-muted">
        <Link href="/" className="hover:text-charcoal flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <span className="text-olive font-medium">About Our Nursery</span>
      </nav>

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand text-xs font-semibold text-terracotta">
          <Sprout className="w-3.5 h-3.5" />
          <span>The Little Plants (ಲಿಟಲ್ ಪ್ಲಾಂಟ್ಸ್) Philosophy</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-olive">
          Bringing the grounding calm of nature into modern Indian homes.
        </h1>
        <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
          We believe having living greenery in your daily view is not merely home decor—it is a daily mindfulness ritual that calms screen fatigue, cleanses indoor air, and grounds busy urban lives.
        </p>
      </div>

      {/* Split Story 1: Nursery Acclimatization */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 relative aspect-4/3 sm:aspect-16/10 rounded-3xl overflow-hidden bg-sand border border-sand shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1200&auto=format&fit=crop"
            alt="Pune nursery acclimatization polyhouse"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
            Why Standard Plants Suffer
          </span>
          <h2 className="font-serif text-3xl font-bold text-olive">
            Acclimatized for true apartment resilience.
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            Many commercial plants sold online are forced under artificial chemical stimulants in high-tech climate vaults. When they arrive in a typical Indian apartment with ceiling fans, air conditioning, and fluctuating monsoon humidity, they enter shock and shed leaves within weeks.
          </p>
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            At Little Plants, every specimen spends 8 to 12 weeks in our semi-shaded polyhouses near Pune and Bengaluru. They adapt naturally to ambient Indian temperatures, robust root aeration, and natural light cycles, so they transition effortlessly into your living room.
          </p>
        </div>
      </div>

      {/* Split Story 2: Handcrafted Earthenware */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
            Generational Craft
          </span>
          <h2 className="font-serif text-3xl font-bold text-olive">
            Hand-thrown terracotta that lets roots breathe.
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            Plastic pots trap moisture and bake plant roots during 40°C Indian summers. Our studio urns and bowls are handcrafted using natural earthenware clay by generational artisans in Rajasthan, Maharashtra, and Uttar Pradesh.
          </p>
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            Porous earthenware allows oxygen exchange through microscopic sidewall pores, regulates root temperatures, and wicks away excess stagnant moisture naturally.
          </p>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 relative aspect-4/3 sm:aspect-16/10 rounded-3xl overflow-hidden bg-sand border border-sand shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1200&auto=format&fit=crop"
            alt="Hand-thrown terracotta pottery"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Studios Location Row */}
      <div className="p-8 sm:p-12 rounded-3xl bg-cream-50 border border-sand space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
            Visit Us in Person
          </span>
          <h3 className="font-serif text-3xl font-bold text-olive">Our Flagship Store &amp; Studio</h3>
          <p className="text-xs text-charcoal-muted leading-relaxed">
            Relaxed shop offering a wide assortment of plants – indoor and potted – as well as bespoke gift-wrapping services.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {siteConfig.contact.studios.map((studio) => (
            <div
              key={studio.city}
              className="p-6 sm:p-8 rounded-2xl bg-cream border border-sand space-y-3 text-xs text-center shadow-xs"
            >
              <div className="inline-flex items-center gap-1.5 font-bold text-base text-olive">
                <MapPin className="w-4 h-4 text-terracotta" />
                <span>{studio.city}</span>
              </div>
              <p className="text-charcoal sm:text-sm font-medium leading-relaxed max-w-lg mx-auto">
                {studio.address}
              </p>
              <span className="text-terracotta font-medium block">
                {studio.landmark}
              </span>
              <div className="pt-2 border-t border-sand flex flex-wrap items-center justify-center gap-4 text-charcoal-muted">
                <span>🕒 <strong>Timing:</strong> {studio.timing}</span>
                <span>📞 <strong>Phone:</strong> {siteConfig.contact.phone}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center pt-4 space-y-4">
        <h3 className="font-serif text-2xl font-bold text-olive">
          Ready to invite nature indoors?
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/shop"
            className="px-7 py-3.5 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-semibold text-xs transition-colors flex items-center gap-2"
          >
            <span>Explore Living Plants</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/quiz"
            className="px-7 py-3.5 rounded-xl bg-sand hover:bg-sand-dark text-olive font-semibold text-xs transition-colors"
          >
            Take 60-Second Plant Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}
