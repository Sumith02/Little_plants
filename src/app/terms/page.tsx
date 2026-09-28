import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Scale, AlertCircle, Home, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Terms of Service (Draft) | Little Plants",
  description: "Little Plants draft terms and conditions of commerce for customer review.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-charcoal-muted">
        <Link href="/" className="hover:text-charcoal flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <span className="text-olive font-medium">Terms of Service</span>
      </nav>

      {/* Draft Disclaimer Notice */}
      <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p>
          <strong>Notice:</strong> This draft terms agreement is prepared for prototype demonstration. Final terms require formal merchant review by legal counsel.
        </p>
      </div>

      <div className="space-y-3">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-olive">
          Terms & Conditions of Service
        </h1>
        <p className="text-xs text-charcoal-muted">Last Updated: September 2026 &bull; Version 1.0 (Draft)</p>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-olive">1. Botanical Living Cargo</h2>
          <p>
            Plants are living organisms subject to natural biological variations in stem shape, leaf count, variegation patterning, and height. Photographs on this website reflect representative healthy mature specimens nurtured in our Pune and Bengaluru facilities.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-olive">2. 7-Day Transit Damage Guarantee</h2>
          <p>
            In the event that living cargo arrives damaged, dehydrated, or with cracked earthenware pottery, the customer must submit photographic evidence via WhatsApp or email within 7 days of verified carrier delivery. Verified claims receive immediate free replacements.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-olive">3. Pricing & Currency</h2>
          <p>
            All prices listed on {siteConfig.brandName} are in Indian Rupees (INR, ₹) and include applicable Goods and Services Tax (GST). Shipping charges are calculated at checkout in accordance with configured delivery thresholds.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-olive">4. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of the Republic of India. Disputes shall be subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka.
          </p>
        </section>
      </div>
    </div>
  );
}
