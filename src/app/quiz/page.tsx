"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { quizQuestions, calculateQuizResults, QuizResultMatch } from "@/data/quiz";
import { formatPrice } from "@/config/site";
import { useCart } from "@/context/CartContext";
import {
  Sparkles,
  ArrowRight,
  RotateCcw,
  Check,
  ShoppingBag,
  Home,
  ChevronRight,
  Sun,
  Droplets,
  ShieldCheck,
  Compass,
  Sofa,
  Moon,
  Laptop,
  Heart,
  Gem,
  Crown,
  Cloud,
  Sunrise,
  SunMedium,
  CloudSun,
  Sprout,
  Flower,
} from "lucide-react";

export default function PlantQuizPage() {
  const { addItem } = useCart();

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<{
    room?: string;
    light?: string;
    experience?: string;
    pets?: string;
    budget?: string;
  }>({});

  const [quizCompleted, setQuizCompleted] = useState(false);
  const [results, setResults] = useState<QuizResultMatch[]>([]);
  const [addedItemIds, setAddedItemIds] = useState<{ [id: string]: boolean }>({});

  const currentQuestion = quizQuestions[currentStepIndex];

  const handleSelectOption = (optionId: string) => {
    const updatedAnswers = {
      ...answers,
      [currentQuestion.id]: optionId,
    };
    setAnswers(updatedAnswers);

    if (currentStepIndex < quizQuestions.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      // Last step: calculate results
      const matches = calculateQuizResults(updatedAnswers);
      setResults(matches);
      setQuizCompleted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentStepIndex(0);
    setQuizCompleted(false);
    setResults([]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddMatch = (match: QuizResultMatch) => {
    const p = match.product;
    addItem(
      p,
      p.variants?.sizes?.[0],
      p.variants?.planterMaterials?.[1] || p.variants?.planterMaterials?.[0],
      p.variants?.planterColors?.[0],
      1
    );
    setAddedItemIds((prev) => ({ ...prev, [p.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [p.id]: false }));
    }, 2500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-charcoal-muted">
        <Link href="/" className="hover:text-charcoal flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3 text-sand-dark" />
        <span className="text-olive font-medium">Plant Finder Quiz</span>
      </nav>

      {!quizCompleted ? (
        /* QUIZ WIZARD STEP */
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Progress Header */}
          <div className="space-y-3 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand text-xs font-semibold text-terracotta">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                Step {currentStepIndex + 1} of {quizQuestions.length}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-olive">
              {currentQuestion.question}
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-muted max-w-lg mx-auto">
              {currentQuestion.subtitle}
            </p>

            {/* Progress bar */}
            <div className="w-full bg-sand rounded-full h-1.5 overflow-hidden max-w-xs mx-auto">
              <div
                className="bg-terracotta h-full rounded-full transition-all duration-300"
                style={{
                  width: `${((currentStepIndex + 1) / quizQuestions.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleSelectOption(opt.id)}
                className="p-5 rounded-2xl bg-cream-50 hover:bg-sand border border-sand hover:border-sand-dark text-left transition-all duration-200 group flex items-start gap-4 shadow-2xs hover:shadow-sm cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-sand group-hover:bg-terracotta group-hover:text-white text-olive flex items-center justify-center shrink-0 transition-colors">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-serif text-base sm:text-lg font-bold text-olive group-hover:text-terracotta transition-colors">
                    {opt.label}
                  </div>
                  <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">
                    {opt.description}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-sand-dark group-hover:text-terracotta shrink-0 mt-2 transition-transform group-hover:translate-x-1" />
              </button>
            ))}
          </div>

          {/* Back Step */}
          {currentStepIndex > 0 && (
            <div className="text-center pt-2">
              <button
                onClick={() => setCurrentStepIndex((prev) => prev - 1)}
                className="text-xs text-charcoal-muted hover:text-charcoal underline"
              >
                ← Previous Question
              </button>
            </div>
          )}
        </div>
      ) : (
        /* QUIZ RESULTS VIEW */
        <div className="space-y-10">
          <div className="text-center space-y-3 bg-cream-50 p-8 sm:p-10 rounded-3xl border border-sand shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
              Your Personalized Botanical Matches
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-olive">
              Specimens engineered to thrive in your space
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-muted max-w-xl mx-auto leading-relaxed">
              Based on your sunlight profile, space acoustics, and care routine, our horticultural matching algorithm identified these optimal living companions.
            </p>

            <div className="pt-2 flex justify-center">
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sand hover:bg-sand-dark text-xs font-semibold text-charcoal transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz with Different Room</span>
              </button>
            </div>
          </div>

          {/* Match Cards List */}
          <div className="space-y-6">
            {results.slice(0, 4).map((match, idx) => (
              <div
                key={match.product.id}
                className="p-6 rounded-3xl bg-cream-50 border border-sand hover:border-sand-dark shadow-2xs hover:shadow-md transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                {/* Product Photo */}
                <div className="md:col-span-4 relative aspect-4/3 sm:aspect-square rounded-2xl overflow-hidden bg-sand border border-sand">
                  <Image
                    src={match.product.images[0]}
                    alt={match.product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-olive text-cream text-xs font-bold shadow-2xs flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-terracotta" />
                    <span>#{idx + 1} Best Match ({match.matchScore}%)</span>
                  </div>
                </div>

                {/* Match Information and Rationale */}
                <div className="md:col-span-8 space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-charcoal-muted mb-1">
                      <span>{match.product.subcategory}</span>
                      <span className="font-bold text-terracotta font-mono">
                        {match.matchScore}% Synergy Match
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl font-bold text-olive">
                      <Link href={`/products/${match.product.slug}`} className="hover:text-terracotta">
                        {match.product.name}
                      </Link>
                    </h2>

                    {match.product.botanicalName && (
                      <p className="text-xs italic text-charcoal-muted">
                        {match.product.botanicalName}
                      </p>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {match.product.shortDescription}
                  </p>

                  {/* Why this matches you */}
                  <div className="p-3.5 rounded-xl bg-sand/50 border border-sand space-y-1.5 text-xs">
                    <span className="font-bold uppercase tracking-wider text-olive text-[10px] block">
                      Why this thrives in your space:
                    </span>
                    {match.matchReasons.map((reason, rIdx) => (
                      <div key={rIdx} className="flex items-center gap-2 text-charcoal">
                        <Check className="w-3.5 h-3.5 text-olive shrink-0" />
                        <span>{reason}</span>
                      </div>
                    ))}
                  </div>

                  {/* Care tags */}
                  {match.product.careGuide && (
                    <div className="flex flex-wrap gap-2 text-[11px] text-charcoal-muted">
                      <span className="px-2 py-0.5 rounded bg-sand border border-sand-dark">
                        Light: {match.product.careGuide.light}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-sand border border-sand-dark">
                        Water: {match.product.careGuide.watering}
                      </span>
                      {match.product.isPetSafe && (
                        <span className="px-2 py-0.5 rounded bg-olive-light text-olive font-semibold border border-olive-subtle">
                          🐾 100% Pet-Safe
                        </span>
                      )}
                    </div>
                  )}

                  {/* Price and CTA */}
                  <div className="pt-2 border-t border-sand flex items-center justify-between gap-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-charcoal font-sans">
                        {formatPrice(match.product.price)}
                      </span>
                      {match.product.originalPrice > match.product.price && (
                        <span className="text-xs line-through text-charcoal-muted">
                          {formatPrice(match.product.originalPrice)}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/products/${match.product.slug}`}
                        className="px-4 py-2.5 rounded-xl border border-sand text-xs font-semibold text-charcoal hover:bg-sand transition-colors"
                      >
                        Specs & Care
                      </Link>

                      <button
                        onClick={() => handleAddMatch(match)}
                        className="px-5 py-2.5 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
                      >
                        {addedItemIds[match.product.id] ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added!</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Add with Planter</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
