# Little Plants (ಲಿಟಲ್ ಪ್ಲಾಂಟ್ಸ್) | Terracotta Botanical Studio

A responsive, complete plant and gardening ecommerce platform built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed for modern Indian homes with an original editorial identity ("Terracotta Botanical Studio"), authentic high-resolution brand assets, realistic botanical specifications, and end-to-end shopping workflows.

---

## 🌿 Brand Identity & Design System

- **Brand Name**: *Little Plants* (and Kannada trademark *ಲಿಟಲ್ ಪ್ಲಾಂಟ್ಸ್*, configured globally in `src/config/site.ts`).
- **Brand Assets**:
  - Official Green Logo: `public/images/brand/little-plants-logo-green.png`
  - Inverted White Logo: `public/images/brand/little-plants-logo-white.png`
  - Kannada Wordmark: `public/images/brand/little-plants-kannada-cropped.png`
  - Mobile QR Asset: `public/images/brand/lp-qr-cropped.png`
  - Studio Profile: `public/images/brand/dp.jpg`
- **Aesthetic**: *Terracotta Botanical Studio*
  - **Warm Cream** (`#F7F2E8`): Primary background and paper textures.
  - **Terracotta** (`#B95139`): Primary action buttons, discount tags, and active highlights.
  - **Deep Olive** (`#384333`): Navigation, editorial headings, and nature accents.
  - **Sand** (`#E8DCCB`): Secondary surfaces, card backgrounds, and subtle dividers.
  - **Charcoal** (`#252822`): High-contrast, accessible body typography.
- **Typography**: Editorial serif headings (`Cormorant Garamond`) paired with a clean, functional sans-serif (`Plus Jakarta Sans`) for descriptions, pricing, and forms.
- **Currency & Market**: Indian Rupee (`₹`, `INR`) with Indian GST breakdown and postal PIN code logistics support.

---

## 🚀 Key Features Implemented

### 1. Homepage Flow
- **Configurable Announcement Bar**: Rotating promotional ticker (Free eco-transit threshold, promo codes, quiz link).
- **Sticky Botanical Header**: Official Little Plants logo with Kannada badge, desktop mega menu, live search trigger, account profile, persistent wishlist counter, and cart badge.
- **Desktop Mega Menu & Mobile Drawer**: Rich categorization with thumbnail spotlights, room profiles, and quick links.
- **Editorial Split Hero**: "Make room for a little green" with nursery acclimatization badge, dual CTAs (*Shop Plants* & *Find My Plant*), and trust metrics (18,000+ PIN codes, 7-day guarantee).
- **Visual Category Navigation**: 6 core collections with curated plant photography (Plants, Pots & Planters, Seeds, Plant Care, Gardening Tools, Gifts).
- **Bestseller Grid**: With instant quick-add modal and hover image switching.
- **"Find Greenery for Your Space"**: Interactive tabbed room showcase (Balcony, Bedroom, Living Room, Workspace) with light/airflow parameters, styling advice, and matching plant specimens.
- **"The Perfectly Potted Pair" Bundles**: Pre-matched plant & planter pairings with 15% automatic bundle discount and 1-click bundle add.
- **Beginner-Friendly Collection**: Highlighted plants with clear sunlight, watering, and pet-safety indicators.
- **Plant Finder Quiz Teaser**: 60-second interactive matching preview banner.
- **Custom Corner Builder CTA**: Visual 3-step teaser.
- **Plant Parent Journal**: Editorial care articles for Indian climates and monsoon care.
- **Customer Reviews**: Testimonials from Bengaluru, Mumbai, Chennai, Delhi, Pune, and Hyderabad with verified status.
- **Eco-Transit Commitment**: Plastic-free coconut coir protective crating explanation.
- **Rich Botanical Footer**: Studio locations (Bengaluru Indiranagar, Mumbai Bandra, Pune Nursery), WhatsApp Concierge QR code, newsletter signup, payment provider logos, and legal drafts.

### 2. Collection & Search Architecture
- **Catalog Page (`/shop`) & Category Pages (`/category/[slug]`)**:
  - Breadcrumbs and product counters.
  - Desktop filter sidebar + slide-out mobile filter drawer.
  - Multi-attribute filters: Price range, light requirements (Direct Sun, Bright Indirect, Low Light), watering frequency (Weekly, Bi-weekly), plant size, in-stock only, beginner-friendly toggle, and certified pet-safe toggle.
  - Active filter chips with individual removal and "Clear all".
  - Sorting: Featured/Bestsellers, Price (Low to High, High to Low), Customer Rating, and New Arrivals.
  - Load-more pagination and empty state with 1-click filter reset.
- **Search Page (`/search`) & Instant Modal**:
  - Instant query matching across plant name, botanical Latin name, tags, and descriptions.
  - Suggested search pills (*Monstera*, *Air Purifying*, *Low Light*, *Terracotta Urn*, *Pet Safe*).
  - Category match shortcuts and empty state with recommendations.

### 3. Product Details Page (`/products/[slug]`)
- Multi-angle image gallery with thumbnail switcher and hover zoom.
- Botanical name, star ratings with verified review counter, and in-stock inventory count.
- **Interactive Variant Selection**:
  - Plant size (Compact, Mature Floor, Statement Floor with height guides).
  - Planter material (Nursery pot, Hand-thrown Terracotta Urn, Fluted Sandstone, Hydro Self-Watering).
  - Planter color tones (Terracotta Rust, Dune Sand, Olive Leaf, Charcoal).
  - Dynamic variant pricing and SKU updates.
- Quantity stepper, **Add to Basket**, and **Buy Now** (instant checkout redirect).
- **Indian PIN-Code Delivery Checker**: Live validation with transit days and COD availability across Indian pin codes.
- **Living Plant Disclaimer**: Clarifying natural biological variations in leaf size and variegation.
- Detailed accordions:
  - Botanical Care Ritual (Light, Watering, Humidity, Seasonal Nutrition, Common Issues).
  - Dimensions & Ideal Placement.
  - What's Inside the Box checklist.
  - Shipping & 7-Day Transit Damage Replacement Guarantee.
- **Compatible Planters & Care Add-ons cross-sell** with 1-click addition.
- **Sticky Purchase Bar on Mobile**: Persistent bottom action bar for small viewports.

### 4. Shopping & Customer Flows
- **Cart Drawer & Full Cart Page (`/cart`)**:
  - Itemized table with variant tags, quantity steppers, and deletion.
  - **Free Shipping Progress Bar** with live threshold calculation (free above ₹999).
  - Coupon code validator supporting demo codes (`LITTLE10`, `WELCOME10`, `GREENROOF`, `LITTLE20`).
  - Complimentary handwritten gift message / delivery instructions input.
  - Standard Eco-Transit vs Express Botanical Air Care options.
- **Checkout Flow (`/checkout`)**:
  - Guest checkout & contact collection.
  - Delivery address collection with 6-digit Indian PIN code validation (auto-fills city and state for major hubs).
  - Delivery method selection.
  - **Payment Verification Step**:
    - Simulated **Razorpay Payment Gateway** supporting UPI (VPA IDs), Debit/Credit Cards, and NetBanking.
    - Simulated **Cash on Delivery (COD)** with OTP/doorstep reminder.
    - Verified payment check before placing orders.
- **Order Confirmation Page (`/order-success/[id]`)**:
  - Order ID (e.g. `LP-IND-89421`), invoice breakdown, delivery address, carrier AWB, milestone steps preview, and printable invoice.
- **Order Tracking Page (`/track`)**:
  - Look up by Order ID or Phone number.
  - Interactive status timeline (Order Placed & Verified → Packed in Coir Crate in Pune → Dispatched via Delhivery Botanical → Out for Delivery → Delivered).
  - Active test order `LP-IND-89421` seeded for instant demonstration.
- **Customer Account (`/account`)**:
  - Patron profile, saved delivery addresses manager, order history with status pills, and saved wishlist.
- **Wishlist Page (`/wishlist`)**:
  - Persistent saved items with 1-click add to cart.

### 5. Distinctive Features
1. **"Find My Plant" Quiz (`/quiz`)**:
   - 5-step guided wizard: Room environment, natural light level, plant parenting routine, pet safety needs, and budget.
   - Calculates custom match percentages and gives **explicit reasons why each plant fits your space**.
   - 1-click Add to Basket with recommended planter.
2. **"Build Your Green Corner" Builder (`/bundle-builder`)**:
   - Step 1: Choose Plant → Step 2: Choose Planter → Step 3: Choose Care Essentials → Step 4: Review Bundle.
   - Automatic **15% bundle savings** with 1-click Add All to Basket.
3. **Gifting & Corporate Bulk Enquiries (`/gifting`)**:
   - Curated gift hampers (New Homeowner Crate, Mindful Desk Set, Corporate Verdant Trio).
   - Corporate bulk inquiry form with budget, unit count, and event date calculator.

---

## 🛠 Project Structure

```
website/
├── public/                 # Static assets & Little Plants brand logos
│   └── images/brand/       # Official SVG/PNG logos, QR code, avatar
├── src/
│   ├── app/                # Next.js App Router routes
│   │   ├── about/          # Brand story and nursery acclimatization
│   │   ├── account/        # Customer profile, orders, and addresses
│   │   ├── bundle-builder/ # 4-step custom corner builder (15% off)
│   │   ├── cart/           # Full basket review, coupons, gift notes
│   │   ├── category/       # Category-specific catalog ([slug])
│   │   ├── checkout/       # Address validation, Razorpay & COD verification
│   │   ├── contact/        # Contact form, direct helpline, studio hours
│   │   ├── faq/            # Searchable categorized FAQs
│   │   ├── gifting/        # Hampers and corporate bulk proposal form
│   │   ├── journal/        # Plant care articles & detail views ([slug])
│   │   ├── order-success/  # Order receipt and tracking timeline ([id])
│   │   ├── privacy/        # Draft privacy policy with legal notice
│   │   ├── products/       # Product details, image gallery, variants ([slug])
│   │   ├── quiz/           # 5-step Find My Plant interactive quiz
│   │   ├── search/         # Instant search with suggestions
│   │   ├── shipping-returns# 7-day transit damage replacement policy
│   │   ├── shop/           # Catalog with multi-attribute filtering & sort
│   │   ├── terms/          # Draft terms of service with legal notice
│   │   ├── track/          # Interactive shipment tracking & AWB status
│   │   ├── wishlist/       # Persistent customer wishlist
│   │   ├── globals.css     # Tailwind v4 theme variables & custom typography
│   │   ├── layout.tsx      # Root layout with fonts, header, drawer & footer
│   │   └── page.tsx        # Sequenced 13-section homepage
│   ├── components/
│   │   ├── common/         # DemoNoticeBanner, test code hints
│   │   ├── layout/         # Header, MegaMenu, MobileDrawer, SearchModal, CartDrawer, Footer
│   │   ├── product/        # ProductCard, QuickAddModal, PincodeChecker
│   │   ├── providers/      # RootProviders (Cart, Wishlist, Orders)
│   │   └── shop/           # ProductGridWithFilters
│   ├── config/
│   │   └── site.ts         # Brand settings, Indian shipping thresholds, test coupons
│   ├── context/
│   │   ├── CartContext.tsx # Persistent cart state, promo codes, free shipping bar
│   │   ├── OrderContext.tsx# Persistent order history, tracking events, sample order
│   │   └── WishlistContext.tsx # Persistent wishlist state
│   ├── data/
│   │   ├── bundles.ts      # Curated pre-configured bundles
│   │   ├── categories.ts   # 6 core visual categories and subcategories
│   │   ├── journal.ts      # Plant care guides for Indian climate
│   │   ├── products.ts     # 28+ rich botanical products with real pricing & care
│   │   ├── quiz.ts         # Plant finder quiz questions & matching algorithm
│   │   ├── reviews.ts      # Customer reviews from Indian metros
│   │   └── spaces.ts       # Room spaces (Balcony, Bedroom, Living Room, Workspace)
│   └── types/
│       └── index.ts        # Comprehensive TypeScript interfaces
├── next.config.ts          # Image domains and Next.js configuration
├── package.json
└── README.md
```

---

## 💻 Local Setup & Development

### 1. Prerequisites
- **Node.js**: v18.18+ or v20+
- **npm**: v9+ (or pnpm / yarn)

### 2. Installation
```bash
# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🧪 Interactive Demo Codes for Testing

The site runs in an interactive prototype mode with persistent local storage:

- **Coupons on Cart / Drawer**:
  - `LITTLE10`: 10% off entire order
  - `WELCOME10`: 10% off entire order
  - `GREENROOF`: Flat ₹200 off on orders above ₹1,200
  - `LITTLE20`: 20% off on botanical bundles & planters above ₹2,500
- **Supported PIN Codes (Delivery Checker & Checkout)**:
  - `560038`: Bengaluru, Karnataka (2-3 business days)
  - `400050`: Mumbai, Maharashtra (2-3 business days)
  - `110001`: New Delhi (3-4 business days)
  - `500034`: Hyderabad, Telangana (3-4 business days)
  - `411001`: Pune, Maharashtra (2 business days)
- **Active Order for Tracking (`/track`)**:
  - Enter Order ID: `LP-IND-89421` (or test mobile `9820012345`) to view the live multi-milestone shipment tracking timeline.

---

## 🔌 Checklist of Integrations Needed Before Commercial Production Launch

Before launching **Little Plants** commercially in India, the following backend and third-party provider integrations should replace the demo adapters:

1. **Payment Gateway**:
   - Connect live **Razorpay** / **Cashfree** / **PhonePe PG** API keys (`RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`).
   - Implement server-side Webhook verification (`/api/webhooks/razorpay`) to verify payment signatures before marking orders as `paid`.
   - Setup automated refund processing for returns.
2. **Logistics & 3PL Carrier Aggregator**:
   - Integrate with **Shiprocket**, **Delhivery One**, or **Blue Dart Apex** API for automated AWB generation, shipping label printing, and live webhook tracking events.
   - Connect live serviceable PIN-code check APIs to replace the simulated 6-digit checker.
3. **SMS & WhatsApp Business API**:
   - Integrate with **Gupshup**, **Twilio**, or **Meta Cloud API** for automated WhatsApp notifications (Order Confirmed, Dispatched with AWB, Out for Delivery, Plant Care Follow-up after 7 days).
4. **Transactional Email**:
   - Integrate with **Resend**, **SendGrid**, or **AWS SES** for branded HTML receipts, invoices with GSTIN, and tracking links.
5. **Database & Headless Commerce**:
   - Connect a headless commerce backend or database (e.g., PostgreSQL / Supabase, Shopify Storefront API, Medusa.js, or BigCommerce) to persist orders, customer accounts, and real-time inventory across Pune and Bengaluru fulfillment nurseries.
6. **Legal & Compliance Review**:
   - Have qualified legal counsel review the draft `/terms`, `/privacy`, and `/shipping-returns` pages to ensure full compliance with the Information Technology Act, 2000 and the Consumer Protection (E-Commerce) Rules, 2020 of India.
