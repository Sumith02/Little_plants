"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { Product } from "@/types";
import { formatPrice } from "@/config/site";
import { useCart } from "@/context/CartContext";
import {
  Layers,
  Check,
  ShoppingBag,
  ArrowRight,
  ChevronRight,
  Home,
  Sparkles,
  Sun,
  Droplets,
  RotateCcw,
} from "lucide-react";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import { buildBundleWhatsAppUrl } from "@/utils/whatsapp";

export default function BundleBuilderPage() {
  const { addItem, openDrawer } = useCart();

  // Plants available for bundle (sorted low to high price)
  const plantOptions = products
    .filter((p) => p.category === "plants")
    .sort((a, b) => a.price - b.price);
  // Planters available for bundle (sorted low to high price)
  const planterOptions = products
    .filter((p) => p.category === "pots-planters")
    .sort((a, b) => a.price - b.price);
  // Care products available for bundle (sorted low to high price)
  const careOptions = products
    .filter((p) => p.category === "plant-care" || p.id === "care-brass-mister")
    .sort((a, b) => a.price - b.price);

  // Selection states
  const [selectedPlant, setSelectedPlant] = useState<Product>(plantOptions[0]);
  const [selectedPlanter, setSelectedPlanter] = useState<Product>(planterOptions[0]);
  const [selectedCareIds, setSelectedCareIds] = useState<string[]>([careOptions[0].id]);
  const [activeStep, setActiveStep] = useState<1 | 2 | 3 | 4>(1);
  const [isAdded, setIsAdded] = useState(false);

  const toggleCareItem = (id: string) => {
    setSelectedCareIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Price calculations
  const plantPrice = selectedPlant.price;
  const planterPrice = selectedPlanter.price;
  const careTotal = careOptions
    .filter((c) => selectedCareIds.includes(c.id))
    .reduce((acc, c) => acc + c.price, 0);

  const rawTotal = plantPrice + planterPrice + careTotal;
  const bundleDiscountPercent = 15;
  const bundleSavings = Math.round((rawTotal * bundleDiscountPercent) / 100);
  const finalBundleTotal = rawTotal - bundleSavings;

  const handleAddBundleToCart = () => {
    // Add plant with planter options
    addItem(
      selectedPlant,
      selectedPlant.variants?.sizes?.[0],
      selectedPlant.variants?.planterMaterials?.[0],
      selectedPlant.variants?.planterColors?.[0],
      1
    );

    // Add selected planter standalone
    addItem(selectedPlanter, selectedPlanter.variants?.sizes?.[0], undefined, undefined, 1);

    // Add selected care products
    careOptions
      .filter((c) => selectedCareIds.includes(c.id))
      .forEach((careItem) => {
        addItem(careItem, undefined, undefined, undefined, 1);
      });

    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      openDrawer();
    }, 1500);
  };

  const handleOrderBundleWhatsApp = () => {
    const careItemNames = careOptions
      .filter((c) => selectedCareIds.includes(c.id))
      .map((c) => c.name);

    const url = buildBundleWhatsAppUrl({
      plantName: selectedPlant.name,
      planterName: selectedPlanter.name,
      careItems: careItemNames,
      total: finalBundleTotal,
      originalTotal: rawTotal,
    });
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-charcoal-muted">
        <Link href="/" className="hover:text-charcoal flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <span className="text-olive font-medium">Build Your Green Corner</span>
      </nav>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand text-xs font-semibold text-terracotta">
          <Layers className="w-3.5 h-3.5" />
          <span>Custom Botanical Corner Builder</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-olive">
          Craft Your Green Sanctuary
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
          Select your favorite plant, pair it with handcrafted pottery, and add organic nourishment.
          Receive an automatic <strong>15% bundle savings</strong> on all items!
        </p>
      </div>

      {/* Step Stepper Indicator */}
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-4 gap-2 text-center text-xs">
          {[
            { step: 1, label: "1. Choose Plant" },
            { step: 2, label: "2. Choose Planter" },
            { step: 3, label: "3. Care Essentials" },
            { step: 4, label: "4. Review & Save" },
          ].map((s) => (
            <button
              key={s.step}
              onClick={() => setActiveStep(s.step as 1 | 2 | 3 | 4)}
              className={`py-2.5 px-2 rounded-xl font-semibold border transition-all cursor-pointer ${
                activeStep === s.step
                  ? "bg-olive text-cream border-olive shadow-xs"
                  : activeStep > s.step
                  ? "bg-olive-light text-olive border-olive-subtle"
                  : "bg-cream-50 text-charcoal-muted border-sand hover:bg-sand"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Builder Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Step Panels */}
        <div className="lg:col-span-8 space-y-6">
          {/* STEP 1: CHOOSE PLANT */}
          {activeStep === 1 && (
            <div className="p-6 rounded-3xl bg-cream-50 border border-sand space-y-4">
              <div className="flex items-center justify-between border-b border-sand pb-3">
                <h2 className="font-serif text-xl font-bold text-olive">
                  Step 1: Pick Your Living Plant
                </h2>
                <span className="text-xs text-charcoal-muted">{plantOptions.length} available</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {plantOptions.map((plant) => {
                  const isSelected = selectedPlant.id === plant.id;
                  return (
                    <div
                      key={plant.id}
                      onClick={() => setSelectedPlant(plant)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex gap-3 text-xs ${
                        isSelected
                          ? "border-terracotta bg-terracotta/5 shadow-2xs ring-2 ring-terracotta/20"
                          : "border-sand bg-cream hover:border-sand-dark"
                      }`}
                    >
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-sand shrink-0 border border-sand">
                        <Image
                          src={plant.images[0]}
                          alt={plant.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="font-bold text-charcoal text-sm line-clamp-1">
                            {plant.name}
                          </div>
                          {plant.botanicalName && (
                            <div className="text-[11px] italic text-charcoal-muted truncate">
                              {plant.botanicalName}
                            </div>
                          )}
                          {plant.careGuide && (
                            <div className="flex items-center gap-2 mt-1 text-[10px] text-charcoal-muted">
                              <span>☀️ {plant.careGuide.light.split(" ")[0]}</span>
                              <span>💧 {plant.careGuide.watering.split(" ")[0]}</span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <span className="font-bold text-olive">{formatPrice(plant.price)}</span>
                          {isSelected && (
                            <span className="px-2 py-0.5 rounded bg-terracotta text-white font-semibold text-[10px] flex items-center gap-1">
                              <Check className="w-3 h-3" />
                              <span>Selected</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 text-right">
                <button
                  onClick={() => setActiveStep(2)}
                  className="px-6 py-3 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-medium text-xs transition-colors inline-flex items-center gap-2"
                >
                  <span>Next: Choose Planter</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: CHOOSE PLANTER */}
          {activeStep === 2 && (
            <div className="p-6 rounded-3xl bg-cream-50 border border-sand space-y-4">
              <div className="flex items-center justify-between border-b border-sand pb-3">
                <h2 className="font-serif text-xl font-bold text-olive">
                  Step 2: Choose Handcrafted Planter
                </h2>
                <span className="text-xs text-charcoal-muted">{planterOptions.length} vessels</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {planterOptions.map((pot) => {
                  const isSelected = selectedPlanter.id === pot.id;
                  return (
                    <div
                      key={pot.id}
                      onClick={() => setSelectedPlanter(pot)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex gap-3 text-xs ${
                        isSelected
                          ? "border-terracotta bg-terracotta/5 shadow-2xs ring-2 ring-terracotta/20"
                          : "border-sand bg-cream hover:border-sand-dark"
                      }`}
                    >
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-sand shrink-0 border border-sand">
                        <Image
                          src={pot.images[0]}
                          alt={pot.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="font-bold text-charcoal text-sm line-clamp-1">
                            {pot.name}
                          </div>
                          <div className="text-[11px] text-charcoal-muted line-clamp-2 mt-0.5">
                            {pot.shortDescription}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <span className="font-bold text-olive">{formatPrice(pot.price)}</span>
                          {isSelected && (
                            <span className="px-2 py-0.5 rounded bg-terracotta text-white font-semibold text-[10px] flex items-center gap-1">
                              <Check className="w-3 h-3" />
                              <span>Selected</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setActiveStep(1)}
                  className="px-5 py-2.5 rounded-xl border border-sand text-xs font-semibold text-charcoal hover:bg-sand"
                >
                  ← Back to Plant
                </button>
                <button
                  onClick={() => setActiveStep(3)}
                  className="px-6 py-3 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-medium text-xs transition-colors inline-flex items-center gap-2"
                >
                  <span>Next: Care Add-ons</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CARE ESSENTIALS */}
          {activeStep === 3 && (
            <div className="p-6 rounded-3xl bg-cream-50 border border-sand space-y-4">
              <div className="flex items-center justify-between border-b border-sand pb-3">
                <h2 className="font-serif text-xl font-bold text-olive">
                  Step 3: Add Organic Care Essentials
                </h2>
                <span className="text-xs text-charcoal-muted">Multi-select options</span>
              </div>

              <div className="space-y-3">
                {careOptions.map((care) => {
                  const isChecked = selectedCareIds.includes(care.id);
                  return (
                    <div
                      key={care.id}
                      onClick={() => toggleCareItem(care.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 text-xs ${
                        isChecked
                          ? "border-terracotta bg-terracotta/5 shadow-2xs"
                          : "border-sand bg-cream hover:border-sand-dark"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="rounded border-sand text-terracotta focus:ring-terracotta"
                      />
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-sand shrink-0 border border-sand">
                        <Image
                          src={care.images[0]}
                          alt={care.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-charcoal text-sm">{care.name}</div>
                        <div className="text-charcoal-muted text-[11px] line-clamp-1">
                          {care.shortDescription}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-olive text-sm font-sans">
                          {formatPrice(care.price)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setActiveStep(2)}
                  className="px-5 py-2.5 rounded-xl border border-sand text-xs font-semibold text-charcoal hover:bg-sand"
                >
                  ← Back to Planters
                </button>
                <button
                  onClick={() => setActiveStep(4)}
                  className="px-6 py-3 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-medium text-xs transition-colors inline-flex items-center gap-2"
                >
                  <span>Review Bundle (15% Off)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: REVIEW & CONFIRM BUNDLE */}
          {activeStep === 4 && (
            <div className="p-6 rounded-3xl bg-cream-50 border border-sand space-y-6">
              <div className="border-b border-sand pb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-terracotta block">
                  Harmonized Botanical Ensemble
                </span>
                <h2 className="font-serif text-2xl font-bold text-olive">
                  Your Custom Green Corner Bundle
                </h2>
              </div>

              {/* Items in bundle list */}
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-cream border border-sand flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-sand shrink-0">
                      <Image
                        src={selectedPlant.images[0]}
                        alt={selectedPlant.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="font-bold text-charcoal block">{selectedPlant.name}</span>
                      <span className="text-charcoal-muted text-[11px]">Primary Living Foliage</span>
                    </div>
                  </div>
                  <span className="font-bold text-charcoal">{formatPrice(selectedPlant.price)}</span>
                </div>

                <div className="p-4 rounded-xl bg-cream border border-sand flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-sand shrink-0">
                      <Image
                        src={selectedPlanter.images[0]}
                        alt={selectedPlanter.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="font-bold text-charcoal block">{selectedPlanter.name}</span>
                      <span className="text-charcoal-muted text-[11px]">Handcrafted Pottery Base</span>
                    </div>
                  </div>
                  <span className="font-bold text-charcoal">{formatPrice(selectedPlanter.price)}</span>
                </div>

                {careOptions
                  .filter((c) => selectedCareIds.includes(c.id))
                  .map((care) => (
                    <div
                      key={care.id}
                      className="p-4 rounded-xl bg-cream border border-sand flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-sand shrink-0">
                          <Image
                            src={care.images[0]}
                            alt={care.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <span className="font-bold text-charcoal block">{care.name}</span>
                          <span className="text-charcoal-muted text-[11px]">Nourishment & Care</span>
                        </div>
                      </div>
                      <span className="font-bold text-charcoal">{formatPrice(care.price)}</span>
                    </div>
                  ))}
              </div>

              <div className="p-4 rounded-2xl bg-olive-light/70 border border-olive-subtle text-xs text-olive flex items-center justify-between">
                <span>Bundle Discount Applied: 15% Savings</span>
                <span className="font-bold">-{formatPrice(bundleSavings)}</span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => setActiveStep(3)}
                  className="px-5 py-2.5 rounded-xl border border-sand text-xs font-semibold text-charcoal hover:bg-sand w-full sm:w-auto"
                >
                  ← Edit Selections
                </button>

                <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={handleOrderBundleWhatsApp}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Order on WhatsApp • {formatPrice(finalBundleTotal)}</span>
                  </button>

                  <button
                    onClick={handleAddBundleToCart}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Basket!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Basket</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Live Bundle Snapshot & Running Total */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-6 rounded-3xl bg-cream-50 border border-sand space-y-5 sticky top-28 shadow-xs">
            <h3 className="font-serif text-xl font-bold text-olive border-b border-sand pb-3">
              Bundle Snapshot
            </h3>

            {/* Visual Stack preview */}
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-olive/10 text-olive flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex-1 truncate">
                  <span className="text-[10px] text-charcoal-muted block">Plant</span>
                  <span className="font-semibold text-charcoal truncate block">{selectedPlant.name}</span>
                </div>
                <span className="font-medium text-charcoal">{formatPrice(selectedPlant.price)}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-terracotta/10 text-terracotta flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex-1 truncate">
                  <span className="text-[10px] text-charcoal-muted block">Planter</span>
                  <span className="font-semibold text-charcoal truncate block">{selectedPlanter.name}</span>
                </div>
                <span className="font-medium text-charcoal">{formatPrice(selectedPlanter.price)}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sand text-charcoal flex items-center justify-center font-bold">
                  3
                </div>
                <div className="flex-1 truncate">
                  <span className="text-[10px] text-charcoal-muted block">Care Essentials</span>
                  <span className="font-semibold text-charcoal truncate block">
                    {selectedCareIds.length} items selected
                  </span>
                </div>
                <span className="font-medium text-charcoal">{formatPrice(careTotal)}</span>
              </div>
            </div>

            {/* Calculations */}
            <div className="space-y-2 border-t border-sand pt-4 text-xs text-charcoal-muted">
              <div className="flex justify-between">
                <span>Standard Items Total</span>
                <span>{formatPrice(rawTotal)}</span>
              </div>

              <div className="flex justify-between text-terracotta font-medium">
                <span>Bundle Savings (15% OFF)</span>
                <span>-{formatPrice(bundleSavings)}</span>
              </div>

              <div className="pt-2 border-t border-sand flex items-baseline justify-between text-base font-bold text-charcoal">
                <span>Bundle Total</span>
                <span className="text-2xl text-olive font-serif font-bold">
                  {formatPrice(finalBundleTotal)}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleOrderBundleWhatsApp}
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Order on WhatsApp • {formatPrice(finalBundleTotal)}</span>
              </button>

              <button
                onClick={handleAddBundleToCart}
                className="w-full py-3 px-4 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-medium text-xs tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Basket!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Basket</span>
                  </>
                )}
              </button>
            </div>

            <div className="text-[11px] text-center text-charcoal-muted">
              🚚 Qualifies for complimentary eco-transit delivery
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
