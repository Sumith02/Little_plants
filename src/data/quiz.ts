import { QuizQuestion, Product } from "@/types";
import { products } from "./products";

export const quizQuestions: QuizQuestion[] = [
  {
    id: "room",
    step: 1,
    question: "Where will your new green companion live?",
    subtitle: "Every space has its own microclimate of light, drafts, and daily activity.",
    options: [
      {
        id: "living-room",
        label: "Living Room",
        description: "Bright, airy focal point with space for sculptural or tabletop greenery",
        iconName: "Sofa",
        matchTags: ["living-room", "statement-plant", "air-purifying"],
      },
      {
        id: "bedroom",
        label: "Bedroom",
        description: "Restful sanctuary where night-time oxygen release and calm aesthetics matter",
        iconName: "Moon",
        matchTags: ["bedroom", "low-light", "air-purifying"],
      },
      {
        id: "workspace",
        label: "Home Office or Study Desk",
        description: "Compact desk companions to soothe screen fatigue and purify indoor air",
        iconName: "Laptop",
        matchTags: ["workspace", "low-light", "beginner-friendly"],
      },
      {
        id: "balcony",
        label: "Balcony or Verandah",
        description: "Open air zone with breezy ventilation and seasonal temperature shifts",
        iconName: "Sun",
        matchTags: ["balcony", "statement-plant", "succulent"],
      },
      {
        id: "bathroom",
        label: "Bathroom or Powder Room",
        description: "High humidity, warm steam, and soft ambient or frosted window light",
        iconName: "Droplets",
        matchTags: ["bathroom", "trailing", "air-purifying"],
      },
    ],
  },
  {
    id: "light",
    step: 2,
    question: "How would you describe the natural daylight in that exact spot?",
    subtitle: "Light is plant food. Be realistic about what your spot receives on average days.",
    options: [
      {
        id: "direct-sun",
        label: "Direct Sun (3+ hours)",
        description: "Warm, uninhibited sunbeams stream across the floor or balcony",
        iconName: "SunMedium",
        matchTags: ["direct-sun", "succulent", "balcony"],
      },
      {
        id: "bright-indirect",
        label: "Bright Indirect Light",
        description: "Lively, well-illuminated room where you can easily read without artificial lamps",
        iconName: "Sunrise",
        matchTags: ["bright-indirect", "statement-plant", "air-purifying"],
      },
      {
        id: "medium-filtered",
        label: "Medium / Filtered Light",
        description: "Soft daylight filtered through sheer curtains or set 8-10 feet back from windows",
        iconName: "CloudSun",
        matchTags: ["medium-light", "air-purifying"],
      },
      {
        id: "low-light",
        label: "Low Light or Mostly Artificial",
        description: "Shaded corner, north-facing room, or space reliant on overhead LED bulbs",
        iconName: "Cloud",
        matchTags: ["low-light", "beginner-friendly"],
      },
    ],
  },
  {
    id: "experience",
    step: 3,
    question: "What is your gardening routine and plant parenting style?",
    subtitle: "Be honest—there are marvelous plants engineered for every lifestyle!",
    options: [
      {
        id: "beginner-forgetful",
        label: "The Busy Traveler / Forgetful Beginner",
        description: "I travel often or forget watering for weeks. I need an unkillable buddy.",
        iconName: "Compass",
        matchTags: ["beginner-friendly", "low-light"],
      },
      {
        id: "weekend-caregiver",
        label: "The Mindful Weekend Caregiver",
        description: "I enjoy a 15-minute weekend check-in to water, mist, and inspect new leaves.",
        iconName: "Sprout",
        matchTags: ["beginner-friendly", "moderate-care"],
      },
      {
        id: "botanical-enthusiast",
        label: "The Green Thumb Enthusiast",
        description: "I love pruning, misting, soil-blending, and caring for rare tropicals.",
        iconName: "Flower",
        matchTags: ["moderate-care", "rare", "statement-plant"],
      },
    ],
  },
  {
    id: "pets",
    step: 4,
    question: "Do you share your home with inquisitive pets or toddlers?",
    subtitle: "Safety first! Many common tropical plants contain calcium oxalate crystals.",
    options: [
      {
        id: "pets-yes",
        label: "Yes, I have curious cats or dogs",
        description: "Show me only certified 100% pet-friendly, non-toxic plants",
        iconName: "ShieldCheck",
        matchTags: ["pet-safe"],
      },
      {
        id: "pets-no",
        label: "No pets (or plants are placed well out of reach)",
        description: "I am free to explore all architectural and air-purifying varieties",
        iconName: "Heart",
        matchTags: ["all"],
      },
    ],
  },
  {
    id: "budget",
    step: 5,
    question: "What is your comfortable investment budget?",
    subtitle: "Prices include our protective bio-transit packaging and plant care certificate.",
    options: [
      {
        id: "budget-starter",
        label: "Under ₹699",
        description: "Accessible starters and hardy tabletop companions",
        iconName: "Sparkles",
        matchTags: ["budget-low"],
      },
      {
        id: "budget-mid",
        label: "₹700 – ₹1,499",
        description: "Mature plants in handcrafted terracotta or ceramic planters",
        iconName: "Gem",
        matchTags: ["budget-mid"],
      },
      {
        id: "budget-luxe",
        label: "₹1,500 and above",
        description: "Show-stopping mature floor statements and curated botanical gift crates",
        iconName: "Crown",
        matchTags: ["budget-high"],
      },
    ],
  },
];

export interface QuizResultMatch {
  product: Product;
  matchScore: number; // percentage, e.g. 96
  matchReasons: string[];
}

export const calculateQuizResults = (answers: {
  room?: string;
  light?: string;
  experience?: string;
  pets?: string;
  budget?: string;
}): QuizResultMatch[] => {
  const onlyPlants = products.filter((p) => p.category === "plants" || p.category === "gifts");

  const results: QuizResultMatch[] = onlyPlants.map((product) => {
    let score = 70; // baseline
    const reasons: string[] = [];

    // Pet check (hard filter preference)
    if (answers.pets === "pets-yes") {
      if (product.isPetSafe) {
        score += 25;
        reasons.push("100% Non-toxic & Pet Safe for curious cats and dogs");
      } else {
        score -= 50; // penalize toxic plants when pet safety is requested
      }
    } else {
      score += 10;
    }

    // Light check
    if (product.careGuide) {
      if (answers.light === "low-light") {
        if (product.careGuide.light === "Low Light" || product.careGuide.light === "Medium Light") {
          score += 20;
          reasons.push("Naturally thrives in low ambient light and artificial office lighting");
        }
      } else if (answers.light === "bright-indirect") {
        if (product.careGuide.light === "Bright Indirect") {
          score += 20;
          reasons.push("Optimized for bright indirect light and east/north windows");
        }
      } else if (answers.light === "direct-sun") {
        if (product.careGuide.light === "Direct Sun") {
          score += 25;
          reasons.push("Loves direct sunlight and warm sunny spots");
        }
      }
    }

    // Experience check
    if (answers.experience === "beginner-forgetful") {
      if (product.isBeginnerFriendly) {
        score += 20;
        reasons.push("Extremely forgiving of missed waterings and busy schedules");
      }
    } else if (answers.experience === "weekend-caregiver") {
      score += 15;
      reasons.push("Thrives with a peaceful weekly watering and misting rhythm");
    }

    // Room alignment
    if (answers.room) {
      if (product.tags.includes(answers.room)) {
        score += 15;
        const roomName = answers.room.replace("-", " ");
        reasons.push(`Tailor-matched for your ${roomName} environment`);
      }
    }

    // Budget alignment
    if (answers.budget === "budget-starter" && product.price <= 699) {
      score += 15;
      reasons.push("Comfortably aligns with your budget under ₹699");
    } else if (answers.budget === "budget-mid" && product.price > 699 && product.price <= 1499) {
      score += 15;
      reasons.push("Includes premium artisan pot within your ₹700–₹1,499 budget");
    } else if (answers.budget === "budget-luxe" && product.price > 1499) {
      score += 15;
      reasons.push("Substantial statement centerpiece matching your investment");
    }

    // Clamp score
    const finalScore = Math.min(99, Math.max(45, score));

    if (reasons.length === 0) {
      reasons.push("Adaptable tropical species acclimatized for Indian homes");
    }

    return {
      product,
      matchScore: finalScore,
      matchReasons: reasons.slice(0, 3),
    };
  });

  // Sort by match score descending
  return results.sort((a, b) => b.matchScore - a.matchScore);
};
