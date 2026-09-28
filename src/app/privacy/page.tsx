import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Shield, AlertCircle, Home, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy (Draft) | Little Plants",
  description: "Little Plants draft privacy and data protection policy for customer review.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-charcoal-muted">
        <Link href="/" className="hover:text-charcoal flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <span className="text-olive font-medium">Privacy Policy</span>
      </nav>

      {/* Draft Disclaimer Notice */}
      <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p>
          <strong>Notice:</strong> This document is a preliminary operational draft prepared for prototype demonstration. Final binding privacy terms require review by legal counsel prior to commercial live operations.
        </p>
      </div>

      <div className="space-y-3">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-olive">
          Privacy Policy
        </h1>
        <p className="text-xs text-charcoal-muted">Last Updated: September 2026 &bull; Version 1.0 (Draft)</p>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-olive">1. Information We Collect</h2>
          <p>
            When you interact with {siteConfig.brandName}, we collect contact and shipping details (name, email, delivery address, phone number) necessary to fulfill botanical orders across India and deliver care tracking notifications.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-olive">2. Payment Data Security</h2>
          <p>
            All online financial transactions are processed through certified third-party payment gateways (such as Razorpay). {siteConfig.brandName} never stores raw debit/credit card numbers or UPI MPIN credentials on our local servers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-olive">3. Courier and Logistics Sharing</h2>
          <p>
            We share recipient names, delivery addresses, and phone numbers with our verified botanical courier partners (Delhivery, Blue Dart) solely to enable safe transit navigation and OTP delivery handovers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-lg font-bold text-olive">4. Your Rights and Contact</h2>
          <p>
            You may request access to, correction of, or deletion of your saved customer profile information at any time by writing to <strong>{siteConfig.contact.email}</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
