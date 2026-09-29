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
            src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Bigslot1-31aug26-189.jpg?v=1788501330"
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
            src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/1_d87323cc-bf70-4799-a66d-7ff965c8cb2b.jpg?v=1709701882"
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
          <h3 className="font-serif text-3xl font-bold text-olive">Our Stores &amp; Studios in Mangaluru</h3>
          <p className="text-xs text-charcoal-muted leading-relaxed">
            Relaxed shops offering a wide assortment of plants – indoor and potted – as well as bespoke gift-wrapping services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {siteConfig.contact.studios.map((studio) => (
            <div
              key={studio.name}
              className="p-6 sm:p-7 rounded-2xl bg-cream border border-sand space-y-3 text-xs text-center shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 font-bold text-base text-olive">
                  <MapPin className="w-4 h-4 text-terracotta shrink-0" />
                  <span>{studio.name}</span>
                </div>
                <p className="text-charcoal sm:text-xs font-medium leading-relaxed max-w-sm mx-auto">
                  {studio.address}
                </p>
                <span className="text-terracotta font-medium block text-[11px]">
                  {studio.landmark}
                </span>
              </div>
              <div className="pt-3 border-t border-sand space-y-1 text-charcoal-muted text-[11px]">
                <div>🕒 <strong>Timing:</strong> {studio.timing}</div>
                <div>📞 <strong>Phone:</strong> <a href={`tel:${studio.phone}`} className="text-olive font-semibold hover:underline">{studio.phone}</a></div>
                <div>💬 <strong>WhatsApp:</strong> <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-semibold hover:underline">{siteConfig.contact.whatsapp}</a></div>
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
