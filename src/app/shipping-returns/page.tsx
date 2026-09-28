import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Truck, RotateCcw, ShieldCheck, CheckCircle2, Home, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Shipping & Replacement Policy | Little Plants",
  description:
    "Learn about our plastic-free coconut coir transit packaging, delivery timelines across India, and our 7-day plant health guarantee.",
};

export default function ShippingReturnsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-10">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-charcoal-muted">
        <Link href="/" className="hover:text-charcoal flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <span className="text-olive font-medium">Shipping & Replacements</span>
      </nav>

      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand text-xs font-semibold text-terracotta">
          <Truck className="w-3.5 h-3.5" />
          <span>Eco-Transit Protocol</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-olive">
          Shipping, Unboxing & 7-Day Replacement Guarantee
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
          How we ensure your living botanical companions arrive safe, hydrated, and ready to thrive in your space.
        </p>
      </div>

      {/* Core Policy Details */}
      <div className="space-y-8 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
        {/* Section 1: 7-Day Guarantee */}
        <div className="p-6 rounded-3xl bg-cream-50 border border-sand space-y-3">
          <div className="flex items-center gap-2 text-olive">
            <RotateCcw className="w-5 h-5 text-terracotta" />
            <h2 className="font-serif text-xl font-bold">The 7-Day Plant Health Guarantee</h2>
          </div>
          <p>
            We take complete responsibility for your plant until it is safely in your hands. If your plant arrives wilted, broken, dried out, or suffering from transit shock, we replace it completely free of charge.
          </p>
          <div className="p-4 rounded-xl bg-sand/50 border border-sand space-y-2">
            <strong className="text-olive block text-xs uppercase tracking-wider">
              How to Claim a Replacement in 3 Steps:
            </strong>
            <ol className="list-decimal pl-5 space-y-1 text-xs">
              <li>Take 2-3 clear photographs of the damaged foliage or cracked planter.</li>
              <li>WhatsApp the photos along with your Order ID to <strong>{siteConfig.contact.phone}</strong> or email <strong>{siteConfig.contact.email}</strong> within 7 days of delivery.</li>
              <li>Our botanists will approve the replacement within 4 hours and dispatch a fresh specimen from our nursery.</li>
            </ol>
          </div>
        </div>

        {/* Section 2: Delivery Timelines */}
        <div className="p-6 rounded-3xl bg-cream-50 border border-sand space-y-3">
          <div className="flex items-center gap-2 text-olive">
            <Truck className="w-5 h-5 text-terracotta" />
            <h2 className="font-serif text-xl font-bold">Delivery Timelines & Indian PIN Codes</h2>
          </div>
          <p>
            Orders are packed Monday through Thursday to prevent plants from sitting in courier holding warehouses over Sunday weekends.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
            <div className="p-4 bg-cream rounded-xl border border-sand space-y-1">
              <span className="font-bold text-olive block">Tier 1 Metros ({siteConfig.shipping.estimatedMetroDays})</span>
              <p className="text-charcoal-muted">Bengaluru, Mumbai, Pune, Delhi NCR, Hyderabad, Chennai, Kolkata</p>
            </div>
            <div className="p-4 bg-cream rounded-xl border border-sand space-y-1">
              <span className="font-bold text-olive block">Tier 2 & 3 Cities ({siteConfig.shipping.estimatedNonMetroDays})</span>
              <p className="text-charcoal-muted">Chandigarh, Jaipur, Ahmedabad, Kochi, Coimbatore, Lucknow, Indore, etc.</p>
            </div>
          </div>
        </div>

        {/* Section 3: Safe Unboxing Guide */}
        <div className="p-6 rounded-3xl bg-cream-50 border border-sand space-y-3">
          <div className="flex items-center gap-2 text-olive">
            <ShieldCheck className="w-5 h-5 text-terracotta" />
            <h2 className="font-serif text-xl font-bold">Safe Unboxing & Acclimatization Checklist</h2>
          </div>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-olive shrink-0 mt-0.5" />
              <span><strong>Cut Tape from the Top:</strong> Do not shake or invert the box. Cut the top seals and slide out the inner coir protective frame upright.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-olive shrink-0 mt-0.5" />
              <span><strong>Inspect Moisture:</strong> Roots are hydrated before dispatch. If the coir wrap feels slightly damp, avoid watering on day one.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-olive shrink-0 mt-0.5" />
              <span><strong>Rest in Gentle Shade:</strong> Keep the plant in bright, indirect light away from harsh noon sunshine or direct draft from air conditioners for 48 hours.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
