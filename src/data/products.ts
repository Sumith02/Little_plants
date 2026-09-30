import { Product } from "@/types";

export const products: Product[] = [
  // ==========================================
  // 1. INDOOR PLANTS (Authentic Ugaoo Catalog)
  // ==========================================
  {
    id: "plant-monstera-deliciosa",
    slug: "monstera-deliciosa-swiss-cheese-plant",
    name: "Monstera Deliciosa Plant",
    botanicalName: "Monstera deliciosa",
    category: "plants",
    subcategory: "Large Floor Plants",
    price: 1259,
    originalPrice: 1849,
    rating: 4.9,
    reviewCount: 148,
    isBestseller: true,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: false,
    inStock: true,
    stockCount: 14,
    shortDescription: "Iconic split-leaf tropical beauty that brings lush jungle drama into living rooms and well-lit corners.",
    description: "The Monstera Deliciosa, often called the Swiss Cheese Plant, is an architectural marvel native to the tropical rainforests of Central America. In Indian homes, it thrives with vibrant energy, unfurling perforated fenestrated leaves that catch soft ambient daylight. Shipped in our breathable protective root wrap.",
    images: [
      "/images/plants/monstera-deliciosa-plant-31793362174084.jpg",
      "/images/plants/monstera-deliciosa-plant-31793362272388.jpg",
      "/images/plants/monstera-deliciosa-plant-31793362337924.jpg",
      "/images/plants/monstera-deliciosa-plant-31793362370692.jpg",
    ],
    careGuide: {
      light: "Bright Indirect",
      lightDetail: "Flourishes near east or north-facing windows. Keep away from harsh midday direct sun which scorches foliage.",
      watering: "Weekly",
      wateringDetail: "Water thoroughly when the top 2 inches of soil feel dry to the touch. Reduce frequency slightly in winter.",
      humidity: "High (Misting Helpful)",
      petFriendly: false,
      petNote: "Contains insoluble calcium oxalates; keep out of reach of curious cats and dogs.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Living Room Corner", "Study Balcony", "Double-height Foyer"],
      feed: "Nourish once every 3 weeks during monsoon and spring with balanced organic seaweed liquid tonic.",
      repotting: "Repot every 18-24 months into a pot 2 inches wider with our chunky porous potting mix.",
      commonIssues: "Yellowing lower leaves usually indicate overwatering; brown crispy edges indicate low humidity.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-m",
                      "name": "Mature Floor (18-24 inches)",
                      "heightGuide": "Well-branched architectural foliage",
                      "priceModifier": 0
                },
                {
                      "id": "size-l",
                      "name": "Statement Specimen (30-38 inches)",
                      "heightGuide": "Towering statement floor piece",
                      "priceModifier": 600
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Monstera Deliciosa Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 22-26 inches (including pot) | Pot Diameter: 7.5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["air-purifying", "living-room", "statement-plant", "bestseller", "indoor"],
  },

  {
    id: "plant-snake-golden-hahnii",
    slug: "snake-plant-golden-hahnii",
    name: "Snake Plant Golden Hahnii",
    botanicalName: "Sansevieria trifasciata 'Golden Hahnii'",
    category: "plants",
    subcategory: "Air Purifying",
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviewCount: 215,
    isBestseller: true,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: false,
    inStock: true,
    stockCount: 32,
    shortDescription: "Virtually indestructible bedside companion that releases fresh oxygen through the night.",
    description: "The Bird's Nest Snake Plant Golden Hahnii features compact, spiraling rosettes of deep sage green bordered with golden-butter margins. Renowned by NASA for absorbing airborne toxins like formaldehyde and xylene, this architectural succulent is the ultimate forgiving plant for busy modern lifestyles.",
    images: [
      "/images/plants/snake-plant-golden-hahnii-31771655864452.jpg",
      "/images/plants/snake-plant-golden-hahnii-31771656028292.jpg",
      "/images/plants/snake-plant-golden-hahnii-31771656192132.jpg",
      "/images/plants/snake-plant-golden-hahnii-32076154273924.jpg",
    ],
    careGuide: {
      light: "Low Light",
      lightDetail: "Highly adaptable. Survives dim bedroom corners as happily as brightly filtered window sills.",
      watering: "Every 10-14 Days",
      wateringDetail: "Allow potting soil to dry out completely between waterings. Highly sensitive to soggy roots.",
      humidity: "Tolerant of Dry Air",
      petFriendly: false,
      petNote: "Mild toxicity if ingested; keep elevated on shelves or study desks.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Bedside Nightstand", "Home Office Desk", "Powder Room Vanity"],
      feed: "Light feed once every 6 weeks with mild vermicompost extract during summer months.",
      repotting: "Very slow root growth; only needs potting transition every 3 years.",
      commonIssues: "Mushy leaves at base mean overwatering; wrinkling foliage means it is time for a thorough soak.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Snake Plant Golden Hahnii in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 7-9 inches (including pot) | Pot Diameter: 4 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["air-purifying", "bedroom", "low-light", "hardy", "tabletop"],
  },

  {
    id: "plant-snake-golden",
    slug: "snake-plant-golden-laurentii",
    name: "Snake Plant Golden (Laurentii)",
    botanicalName: "Sansevieria trifasciata 'Laurentii'",
    category: "plants",
    subcategory: "Air Purifying",
    price: 349,
    originalPrice: 499,
    rating: 4.8,
    reviewCount: 182,
    isBestseller: true,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: false,
    inStock: true,
    stockCount: 24,
    shortDescription: "Tall upright sword-like foliage edged with vivid yellow margins. Supreme night-time oxygen generator.",
    description: "The Golden Snake Plant (Laurentii) is one of the most celebrated indoor foliage plants globally. Its stately, erect architectural leaves feature silvery-green horizontal banding framed by bright sunny gold borders. Perfectly adapted to modern apartments with minimal watering requirements.",
    images: [
      "/images/plants/snake-plant-golden-31911045267588.jpg",
      "/images/plants/snake-plant-golden-31911045300356.jpg",
      "/images/plants/snake-plant-golden-31911045333124.jpg",
      "/images/plants/snake-plant-golden-31911045365892.jpg",
    ],
    careGuide: {
      light: "Low Light",
      lightDetail: "Thrives in low light to bright indirect sunlight. Adapts effortlessly to dim interior spaces.",
      watering: "Every 10-14 Days",
      wateringDetail: "Water only when the potting mix is bone dry. Overwatering is the only true threat.",
      humidity: "Tolerant of Dry Air",
      petFriendly: false,
      petNote: "Mildly toxic to pets; best placed on elevated pedestals or console tables.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Bedroom Corner", "Hallway Console", "Conference Room"],
      feed: "Feed once every two months with a mild organic foliar tonic.",
      repotting: "Slow-growing; repot only every 2-3 years.",
      commonIssues: "Base rot from standing moisture; ensure potting soil drains instantly.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Snake Plant Golden (Laurentii) in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 14-18 inches (including pot) | Pot Diameter: 5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["air-purifying", "low-maintenance", "bedroom", "statement-plant"],
  },

  {
    id: "plant-fiddle-leaf-fig",
    slug: "fiddle-leaf-fig-bambino",
    name: "Fiddle Leaf Fig Plant",
    botanicalName: "Ficus lyrata",
    category: "plants",
    subcategory: "Large Floor Plants",
    price: 699,
    originalPrice: 899,
    rating: 4.7,
    reviewCount: 98,
    isBestseller: false,
    isNew: false,
    isBeginnerFriendly: false,
    isPetSafe: false,
    inStock: true,
    stockCount: 12,
    shortDescription: "Dramatic, sculptural violin-shaped foliage that anchors modern spaces with architectural presence.",
    description: "Prized by interior architects worldwide, Ficus Lyrata stands as the reigning monarch of statement indoor greenery. Its broad, waxy scalloped leaves reflect indoor lighting, creating striking silhouettes against minimalist walls.",
    images: [
      "/images/plants/fiddle-leaf-fig-plant-31793606754436.jpg",
      "/images/plants/fiddle-leaf-fig-plant-31793606787204.jpg",
      "/images/plants/fiddle-leaf-fig-plant-31793606852740.jpg",
      "/images/plants/fiddle-leaf-fig-plant-32065347518596.jpg",
    ],
    careGuide: {
      light: "Bright Indirect",
      lightDetail: "Demands generous pools of consistent, bright indirect light. Direct morning sun is very beneficial.",
      watering: "When Top 2 Inches Dry",
      wateringDetail: "Water deeply until moisture runs freely from drainage ports, then empty drip trays completely.",
      humidity: "High (Misting Helpful)",
      petFriendly: false,
      petNote: "Sap can irritate skin and cause oral discomfort in animals if chewed.",
      difficulty: "Moderate Care",
      idealPlacement: ["Living Room Bay Window", "Bright Home Studio", "Sunlit Reading Nook"],
      feed: "Feed monthly with nitrogen-rich organic vermicompost tea during spring and monsoon growth spurts.",
      repotting: "Repot every 2 years into a stable, weighted terracotta planter to prevent top-heaviness.",
      commonIssues: "Brown leaf spotting occurs from cold drafts or chlorinated tap water; wipe foliage regularly.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-m",
                      "name": "Mature Floor (18-24 inches)",
                      "heightGuide": "Well-branched architectural foliage",
                      "priceModifier": 0
                },
                {
                      "id": "size-l",
                      "name": "Statement Specimen (30-38 inches)",
                      "heightGuide": "Towering statement floor piece",
                      "priceModifier": 600
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Fiddle Leaf Fig Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 20-24 inches (including pot) | Pot Diameter: 6.5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["statement-plant", "living-room", "architectural", "indoor"],
  },

  {
    id: "plant-zz-plant-emerald",
    slug: "zz-plant-zamioculcas-zamiifolia",
    name: "ZZ Plant (Emerald Palm)",
    botanicalName: "Zamioculcas zamiifolia",
    category: "plants",
    subcategory: "Low Light",
    price: 599,
    originalPrice: 749,
    rating: 4.9,
    reviewCount: 264,
    isBestseller: true,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: false,
    inStock: true,
    stockCount: 40,
    shortDescription: "Mirror-gloss leaves with potato-like underground rhizomes that store moisture for weeks.",
    description: "Hailing from drought-prone eastern Africa, the ZZ plant is the ultimate survivor in contemporary indoor horticulture. Its upright fleshy stems carry glossy, dark-emerald leaflets that look naturally polished. Equipped with subterranean tuberous rhizomes, it thrives even if forgotten for weeks.",
    images: [
      "/images/plants/zz-plant-31792473505924.jpg",
      "/images/plants/zz-plant-31792473604228.jpg",
      "/images/plants/zz-plant-31792473735300.jpg",
      "/images/plants/zz-plant-31792473768068.jpg",
    ],
    careGuide: {
      light: "Low Light",
      lightDetail: "Thrives exceptionally well in windowless offices, hallways, and deep interior rooms under LED lighting.",
      watering: "Every 10-14 Days",
      wateringDetail: "Water sparingly once every 2 to 3 weeks. Tubers hold reservoirs of moisture.",
      humidity: "Tolerant of Dry Air",
      petFriendly: false,
      petNote: "High calcium oxalate content; keep elevated if curious pets share your space.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Cubicle Desk", "Dim Living Room Corner", "Windowless Powder Room"],
      feed: "Minimal feeding needed; once every 8 weeks in summer with diluted balanced fertilizer.",
      repotting: "Only repot when the heavy rhizomes visibly press against and distort the plastic nursery pot.",
      commonIssues: "Yellowing leaves indicate too frequent watering. Leaf drop is rare and indicates prolonged drought.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized ZZ Plant (Emerald Palm) in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 14-18 inches (including pot) | Pot Diameter: 5.5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["low-light", "desk-plant", "indestructible", "air-purifying", "bestseller"],
  },

  {
    id: "plant-zamia-zz-black",
    slug: "zamia-zz-black-raven-plant",
    name: "Zamia ZZ Black Plant (ZZ Raven)",
    botanicalName: "Zamioculcas zamiifolia 'Raven'",
    category: "plants",
    subcategory: "Low Light",
    price: 699,
    originalPrice: 899,
    rating: 4.9,
    reviewCount: 112,
    isBestseller: true,
    isNew: true,
    isBeginnerFriendly: true,
    isPetSafe: false,
    inStock: true,
    stockCount: 18,
    shortDescription: "Rare, dramatic gothic beauty whose leaves emerge bright lime-green and mature into obsidian black.",
    description: "The ZZ Black (also celebrated as ZZ Raven) is a showstopping cultivar discovered in Germany. Fresh shoots unfurl in an electric bright green before gradually maturing into an inky, mirror-gloss purple-black foliage that creates unmatched contrast in modern interior decor.",
    images: [
      "/images/plants/zamia-zz-black-plant-31792532422788.jpg",
      "/images/plants/zamia-zz-black-plant-31792532455556.jpg",
      "/images/plants/zamia-zz-black-plant-31792532521092.jpg",
    ],
    careGuide: {
      light: "Low Light",
      lightDetail: "Maintains its dark pigmentation in medium to low indirect light. Avoid scorching midday sun.",
      watering: "Every 10-14 Days",
      wateringDetail: "Water deeply only after the soil has completely dried out.",
      humidity: "Tolerant of Dry Air",
      petFriendly: false,
      petNote: "Keep out of reach of pets due to insoluble oxalates.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Monochrome Modern Shelving", "Executive Desk", "Study Credenza"],
      feed: "Nourish once every 2 months with mild organic seaweed fertilizer.",
      repotting: "Repot every 2 to 3 years when rhizomes fill the pot.",
      commonIssues: "Overwatering causes stem softness; dry neglect is tolerated easily.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Zamia ZZ Black Plant (ZZ Raven) in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 12-16 inches (including pot) | Pot Diameter: 5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["rare-plants", "low-light", "collector", "statement-plant"],
  },

  {
    id: "plant-peace-lily-pure",
    slug: "peace-lily-spathiphyllum",
    name: "Peace Lily Plant",
    botanicalName: "Spathiphyllum wallisii",
    category: "plants",
    subcategory: "Flowering",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviewCount: 178,
    isBestseller: true,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: false,
    inStock: true,
    stockCount: 26,
    shortDescription: "Graceful ribbed emerald foliage paired with pristine porcelain-white flower spathes.",
    description: "Among the most beloved flowering indoor plants, Peace Lilies bring serene purity to any room. Celebrated for its dramatic communication (drooping softly when thirsty and perking up within an hour of water), it serves as a natural indoor humidity regulator and air filter.",
    images: [
      "/images/plants/peace-lily-plant-set-of-2-31818398957700.jpg",
      "/images/plants/peace-lily-plant-set-of-2-31818401185924.jpg",
      "/images/plants/peace-lily-plant-set-of-2-31818401218692.jpg",
    ],
    careGuide: {
      light: "Medium Light",
      lightDetail: "Flourishes in medium to low indirect light. Direct sun causes leaf scorch.",
      watering: "Weekly",
      wateringDetail: "Keep soil evenly moist. Water as soon as the top inch feels dry or when leaves start drooping.",
      humidity: "High (Misting Helpful)",
      petFriendly: false,
      petNote: "Toxic to pets; keep off floor levels.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Living Room Coffee Table", "Bathroom Counter", "Study Corner"],
      feed: "Feed every 4 weeks during spring and monsoon with a mild bloom booster.",
      repotting: "Repot annually in spring with rich, moisture-retentive potting mix.",
      commonIssues: "Brown tips occur from fluoride in hard tap water; use filtered or rested water.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Peace Lily Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 12-15 inches (including pot) | Pot Diameter: 5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["flowering", "air-purifying", "living-room", "bestseller"],
  },

  {
    id: "plant-calathea-orbifolia",
    slug: "calathea-orbifolia-medium",
    name: "Calathea Orbifolia Medium",
    botanicalName: "Goeppertia orbifolia",
    category: "plants",
    subcategory: "Pet-Safe",
    price: 599,
    originalPrice: 799,
    rating: 4.7,
    reviewCount: 73,
    isBestseller: false,
    isNew: true,
    isBeginnerFriendly: false,
    isPetSafe: true,
    inStock: true,
    stockCount: 15,
    shortDescription: "Spectacular circular foliage striped with metallic silver brushstrokes. 100% pet-safe.",
    description: "One of the most sought-after prayer plants from the tropical understory of Bolivia. Calathea Orbifolia commands attention with broad, plate-like circular leaves etched with delicate silver pin-striping that fold upward gracefully in evening reverence.",
    images: [
      "/images/plants/calathea-orbifolia-medium-31778201370756.jpg",
      "/images/plants/calathea-orbifolia-medium-31778201403524.jpg",
      "/images/plants/calathea-orbifolia-medium-31778201436292.jpg",
      "/images/plants/calathea-orbifolia-medium-31778201469060.jpg",
    ],
    careGuide: {
      light: "Bright Indirect",
      lightDetail: "Requires soft, diffused indirect daylight. Never place in harsh direct beams.",
      watering: "Weekly",
      wateringDetail: "Maintain consistently lightly moist soil; never let it dry out completely.",
      humidity: "High (Misting Helpful)",
      petFriendly: true,
      petNote: "Completely non-toxic and 100% safe for cats and dogs.",
      difficulty: "Moderate Care",
      idealPlacement: ["Humid Master Bathroom", "Living Room Console", "Bedroom Stand"],
      feed: "Feed monthly in spring with diluted organic seaweed extract.",
      repotting: "Repot gently every 18 months using a peat-perlite airy mix.",
      commonIssues: "Crispy edges signal low humidity or hard tap water. Mist frequently.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Calathea Orbifolia Medium in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 12-16 inches (including pot) | Pot Diameter: 6 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["pet-safe", "statement-plant", "air-purifying", "prayer-plant"],
  },

  {
    id: "plant-areca-palm-classic",
    slug: "areca-palm-indoor-air-purifier",
    name: "Areca Palm Plant",
    botanicalName: "Dypsis lutescens",
    category: "plants",
    subcategory: "Large Floor Plants",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviewCount: 160,
    isBestseller: true,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: true,
    inStock: true,
    stockCount: 28,
    shortDescription: "Feathery golden cane palm fronds that introduce tropical relaxation and natural humidity.",
    description: "Known as the Golden Cane Palm, the Areca Palm is the undisputed champion of indoor tropical ambience. Its arching, delicate feather-like fronds soften rigid room corners while transpiring nearly a litre of moisture daily into dry, air-conditioned rooms.",
    images: [
      "/images/plants/areca-palm-plant-31828365279364.jpg",
      "/images/plants/areca-palm-plant-31828365312132.jpg",
      "/images/plants/areca-palm-plant-31828365377668.jpg",
      "/images/plants/areca-palm-plant-31828365410436.jpg",
    ],
    careGuide: {
      light: "Bright Indirect",
      lightDetail: "Thrives best in bright filtered light; tolerates medium light well.",
      watering: "When Top 2 Inches Dry",
      wateringDetail: "Water thoroughly once the top 2 inches feel dry. Keep roots evenly moist.",
      humidity: "High (Misting Helpful)",
      petFriendly: true,
      petNote: "Certified non-toxic to all companion pets.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Living Room Corner", "Office Reception", "Balcony Foyer"],
      feed: "Apply slow-release organic fertilizer every 2 months during the growing season.",
      repotting: "Repot every 2 to 3 years when roots crowd the container.",
      commonIssues: "Brown leaf tips are natural with older fronds; trim neatly with clean shears.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-m",
                      "name": "Mature Floor (18-24 inches)",
                      "heightGuide": "Well-branched architectural foliage",
                      "priceModifier": 0
                },
                {
                      "id": "size-l",
                      "name": "Statement Specimen (30-38 inches)",
                      "heightGuide": "Towering statement floor piece",
                      "priceModifier": 600
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Areca Palm Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 24-30 inches (including pot) | Pot Diameter: 7 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["pet-safe", "air-purifying", "floor-plant", "tropical", "bestseller"],
  },

  {
    id: "plant-satin-pothos",
    slug: "satin-pothos-scindapsus-pictus",
    name: "Satin Pothos Argyraeus",
    botanicalName: "Scindapsus pictus 'Argyraeus'",
    category: "plants",
    subcategory: "Air Purifying",
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviewCount: 139,
    isBestseller: true,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: false,
    inStock: true,
    stockCount: 35,
    shortDescription: "Heart-shaped velvety matte leaves brushed with iridescent silver specks. Cascades gorgeously.",
    description: "Satin Pothos Argyraeus is one of the most tactile trailing indoor vines. Its heart-shaped foliage features a velvety matte texture dappled with metallic silver speckles that shimmer in soft daylight, cascading down bookshelves and macrame planters.",
    images: [
      "/images/plants/satin-pothos-argyraeus-31792719036548.jpg",
      "/images/plants/satin-pothos-argyraeus-31792719069316.jpg",
      "/images/plants/satin-pothos-argyraeus-31792719134852.jpg",
      "/images/plants/satin-pothos-argyraeus-32076152438916.jpg",
    ],
    careGuide: {
      light: "Medium Light",
      lightDetail: "Prefers medium to bright indirect light to maintain its vivid silver variegation.",
      watering: "When Top 2 Inches Dry",
      wateringDetail: "Allow the top half of soil to dry out between waterings. Leaves curl when thirsty.",
      humidity: "Average Home",
      petFriendly: false,
      petNote: "Contains calcium oxalates; keep elevated on floating shelves.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["High Bookshelf Edge", "Hanging Macrame", "Cabinet Top"],
      feed: "Feed monthly with balanced foliage fertilizer during summer.",
      repotting: "Repot every 2 years into a hanging pot or tabletop pot with trellis.",
      commonIssues: "Leaves curl inwards when dehydrated; water deeply to revive.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Satin Pothos Argyraeus in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Trailing vine: 10-14 inches vine length | Pot Diameter: 4.5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["trailing-plant", "hanging-plant", "air-purifying", "bookshelf", "bestseller"],
  },

  {
    id: "plant-money-plant-golden",
    slug: "golden-money-plant-epipremnum",
    name: "Golden Money Plant (Pothos)",
    botanicalName: "Epipremnum aureum",
    category: "plants",
    subcategory: "Air Purifying",
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviewCount: 240,
    isBestseller: true,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: false,
    inStock: true,
    stockCount: 45,
    shortDescription: "The classic auspicious indoor vine with heart-shaped golden-splashed leaves that thrives everywhere.",
    description: "The quintessential Indian houseplant, Golden Money Plant brings prosperous energy, vibrant green vitality, and legendary resilience to homes. It cascades gracefully from shelves or climbs vigorously up moss poles, absorbing household toxins with ease.",
    images: [
      "/images/plants/money-plant-golden-31774507368580.jpg",
      "/images/plants/money-plant-golden-31774507401348.jpg",
      "/images/plants/money-plant-golden-31774507565188.jpg",
      "/images/plants/money-plant-golden-32076256379012.jpg",
    ],
    careGuide: {
      light: "Low Light",
      lightDetail: "Highly versatile; flourishes anywhere from low light to bright indirect sunshine.",
      watering: "Weekly",
      wateringDetail: "Water when top 1-2 inches of soil are dry. Very forgiving of occasional neglect.",
      humidity: "Average Home",
      petFriendly: false,
      petNote: "Keep out of reach of cats and dogs.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Study Desk", "Balcony Trellis", "Living Room Wall Unit"],
      feed: "Feed every 4 weeks in growing season with organic vermicompost.",
      repotting: "Repot every 2 years or propagate freely in water vases.",
      commonIssues: "Yellowing leaves can result from old age or excessive standing water.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Golden Money Plant (Pothos) in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 10-14 inches | Pot Diameter: 4.5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["air-purifying", "trailing", "auspicious", "beginner-friendly", "bestseller"],
  },

  {
    id: "plant-money-plant-variegated",
    slug: "variegated-money-plant-marble",
    name: "Variegated Money Plant",
    botanicalName: "Epipremnum aureum 'Variegata'",
    category: "plants",
    subcategory: "Air Purifying",
    price: 329,
    originalPrice: 449,
    rating: 4.8,
    reviewCount: 115,
    isBestseller: false,
    isNew: true,
    isBeginnerFriendly: true,
    isPetSafe: false,
    inStock: true,
    stockCount: 20,
    shortDescription: "Marbled creamy-white and emerald trailing vines that brighten compact desk and shelf corners.",
    description: "A striking variegated variant of the classic money plant featuring splashes and brushstrokes of cream and ivory on rich forest green foliage. Perfect for adding high-contrast visual texture to modern indoor plant collections.",
    images: [
      "/images/plants/money-plant-variegated-31808468549764.jpg",
      "/images/plants/money-plant-variegated-31808468648068.jpg",
      "/images/plants/money-plant-variegated-31808468811908.jpg",
      "/images/plants/money-plant-variegated-32076245336196.jpg",
    ],
    careGuide: {
      light: "Bright Indirect",
      lightDetail: "Requires medium to bright indirect light to preserve its bright white marbling.",
      watering: "Weekly",
      wateringDetail: "Water when the top 2 inches dry out completely.",
      humidity: "Average Home",
      petFriendly: false,
      petNote: "Contains oxalates; place elevated.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Bookshelf Edge", "Kitchen Island", "Study Desk"],
      feed: "Feed once monthly during monsoon with seaweed foliage tonic.",
      repotting: "Repot every 18-24 months into fresh potting soil.",
      commonIssues: "Loss of white variegation indicates insufficient indirect daylight.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Variegated Money Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 10-12 inches | Pot Diameter: 4.5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["trailing", "variegated", "air-purifying", "tabletop"],
  },

  {
    id: "plant-jade-mini-bonsai",
    slug: "jade-plant-mini-crassula-ovata",
    name: "Jade Plant Mini",
    botanicalName: "Crassula ovata",
    category: "plants",
    subcategory: "Succulents & Cacti",
    price: 249,
    originalPrice: 349,
    rating: 4.8,
    reviewCount: 192,
    isBestseller: true,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: false,
    inStock: true,
    stockCount: 38,
    shortDescription: "Auspicious 'Dollar Plant' with plump jade-green teardrop leaves symbolizing fortune and growth.",
    description: "Known in Vastu and Feng Shui as the quintessential Money Tree or Friendship Plant, the miniature Jade Plant is a succulent treasure. Its plump, coin-shaped jade leaves store moisture effortlessly, forming thick woody miniature tree trunks over time.",
    images: [
      "/images/plants/jade-plant-mini-31800078172292.jpg",
      "/images/plants/jade-plant-mini-31800078565508.jpg",
      "/images/plants/jade-plant-mini-32065298858116.jpg",
    ],
    careGuide: {
      light: "Bright Indirect",
      lightDetail: "Thrives on sun-drenched sills and bright windows. Welcomes 2-3 hours of direct morning sun.",
      watering: "Every 10-14 Days",
      wateringDetail: "Water thoroughly only after potting mix is completely dry. Less is more.",
      humidity: "Tolerant of Dry Air",
      petFriendly: false,
      petNote: "Keep out of reach of household pets.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["South/East Facing Sill", "Home Office Desk", "Balcony Shelf"],
      feed: "Feed once every 6-8 weeks with mild succulent fertilizer in summer.",
      repotting: "Repot every 2-3 years into a heavy terracotta pot with fast-draining gritty mix.",
      commonIssues: "Soft, shriveled leaves mean underwatering; yellow translucent dropping leaves mean overwatering.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (4-6 inches)",
                      "heightGuide": "Ideal for sunny sills and desk corners",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Established (7-9 inches)",
                      "heightGuide": "Plump multi-stem specimen",
                      "priceModifier": 120
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Jade Plant Mini in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 6-8 inches (including pot) | Pot Diameter: 4 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["succulent", "auspicious", "vastu", "desk-plant", "bestseller"],
  },

  {
    id: "plant-variegated-jade-mini",
    slug: "variegated-jade-mini-plant",
    name: "Variegated Jade Mini Plant",
    botanicalName: "Portulacaria afra 'Variegata'",
    category: "plants",
    subcategory: "Succulents & Cacti",
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviewCount: 87,
    isBestseller: false,
    isNew: true,
    isBeginnerFriendly: true,
    isPetSafe: true,
    inStock: true,
    stockCount: 22,
    shortDescription: "Charming rainbow elephant bush with magenta-tinged stems and creamy edged succulent foliage.",
    description: "Also cherished as the Rainbow Elephant Bush, this delightful miniature succulent displays reddish-pink branching stems clad in tiny cream-and-green variegated leaves. Naturally drought-hardy and an exceptional carbon sponge.",
    images: [
      "/images/plants/variegated-jade-mini-plant-32125253910660.jpg",
      "/images/plants/variegated-jade-mini-plant-32125253943428.jpg",
      "/images/plants/variegated-jade-mini-plant-32125253976196.jpg",
      "/images/plants/variegated-jade-mini-plant-32125254041732.jpg",
    ],
    careGuide: {
      light: "Bright Indirect",
      lightDetail: "Prefers bright light with gentle morning sun to maintain vivid pink stem accents.",
      watering: "Every 10-14 Days",
      wateringDetail: "Water only when soil is bone dry. Prone to root rot in soggy soil.",
      humidity: "Tolerant of Dry Air",
      petFriendly: true,
      petNote: "Safe and non-toxic for domestic animals.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Sunny Window Ledge", "Workstation Table", "Living Room Balcony"],
      feed: "Feed twice a year with organic cactus & succulent fertilizer.",
      repotting: "Repot into shallow succulent planters with volcanic pumice and coarse sand.",
      commonIssues: "Leaf drop occurs if overwatered in poorly draining soil.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (4-6 inches)",
                      "heightGuide": "Ideal for sunny sills and desk corners",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Established (7-9 inches)",
                      "heightGuide": "Plump multi-stem specimen",
                      "priceModifier": 120
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Variegated Jade Mini Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 6-8 inches (including pot) | Pot Diameter: 4 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["succulent", "pet-safe", "variegated", "tabletop"],
  },

  {
    id: "plant-aglaonema-pink",
    slug: "aglaonema-pink-beauty-plant",
    name: "Aglaonema Pink Beauty Plant",
    botanicalName: "Aglaonema commutatum 'Pink Beauty'",
    category: "plants",
    subcategory: "Air Purifying",
    price: 499,
    originalPrice: 699,
    rating: 4.9,
    reviewCount: 142,
    isBestseller: true,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: false,
    inStock: true,
    stockCount: 25,
    shortDescription: "Pastel pink foliage with olive green speckling. The most colorful low-maintenance indoor plant.",
    description: "Chinese Evergreens (Aglaonema) are celebrated as the crown jewels of colorful foliage. The Pink Beauty cultivar showcases lush pastel pink center leaves framed by deep forest-green margins, thriving effortlessly in indoor ambient conditions.",
    images: [
      "/images/plants/aglaonema-pink-beauty-plant-32220868247684.jpg",
      "/images/plants/aglaonema-pink-beauty-plant-32220868542596.jpg",
      "/images/plants/aglaonema-pink-beauty-plant-32220868608132.jpg",
      "/images/plants/aglaonema-pink-beauty-plant-32220868673668.jpg",
    ],
    careGuide: {
      light: "Low Light",
      lightDetail: "Performs remarkably in low to medium indirect light. Keeps pink colors bright near soft light.",
      watering: "Weekly",
      wateringDetail: "Water once every 7 to 10 days when the top 2 inches dry out.",
      humidity: "Average Home",
      petFriendly: false,
      petNote: "Keep away from chewing cats or dogs.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Living Room Credenza", "Bedside Table", "Office Reception"],
      feed: "Feed once monthly during monsoon with seaweed foliage tonic.",
      repotting: "Repot every 2 years in fresh well-draining potting mixture.",
      commonIssues: "Yellowing leaves indicate overwatering; brown tips indicate dry AC drafts.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Aglaonema Pink Beauty Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 10-14 inches (including pot) | Pot Diameter: 5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["colorful-foliage", "air-purifying", "low-light", "bestseller"],
  },

  {
    id: "plant-aglaonema-red",
    slug: "aglaonema-red-plant",
    name: "Aglaonema Red Plant (Red Anjamani)",
    botanicalName: "Aglaonema commutatum 'Red Valentine'",
    category: "plants",
    subcategory: "Air Purifying",
    price: 499,
    originalPrice: 699,
    rating: 4.8,
    reviewCount: 98,
    isBestseller: false,
    isNew: true,
    isBeginnerFriendly: true,
    isPetSafe: false,
    inStock: true,
    stockCount: 19,
    shortDescription: "Crimson red leaves edged with dark green. Vibrant living accent for interior living spaces.",
    description: "Aglaonema Red brings fiery crimson radiance directly into indoor rooms without requiring harsh sunlight. Its thick, waxy foliage purifies indoor air of benzene and formaldehyde while needing very little attention.",
    images: [
      "/images/plants/aglaonema-red-plant-32220893053060.jpg",
      "/images/plants/aglaonema-red-plant-32220893544580.jpg",
      "/images/plants/aglaonema-red-plant-32220894953604.jpg",
    ],
    careGuide: {
      light: "Medium Light",
      lightDetail: "Medium to bright indirect light helps retain the intense crimson leaf saturation.",
      watering: "Weekly",
      wateringDetail: "Water when top 1-2 inches are dry. Avoid waterlogged soil.",
      humidity: "Average Home",
      petFriendly: false,
      petNote: "Contains calcium oxalate crystals.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Dining Table Centerpiece", "Living Room Coffee Table", "Study Room"],
      feed: "Feed once every 4 weeks in warm months with organic liquid fertilizer.",
      repotting: "Repot every 2 years.",
      commonIssues: "Drooping foliage usually resolves after a thorough bottom soak.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Aglaonema Red Plant (Red Anjamani) in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 10-13 inches (including pot) | Pot Diameter: 5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["colorful-foliage", "air-purifying", "low-light", "tabletop"],
  },

  {
    id: "plant-aglaonema-cutlass",
    slug: "aglaonema-cutlass-plant",
    name: "Aglaonema Cutlass Plant",
    botanicalName: "Aglaonema 'Cutlass'",
    category: "plants",
    subcategory: "Air Purifying",
    price: 499,
    originalPrice: 699,
    rating: 4.8,
    reviewCount: 65,
    isBestseller: false,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: false,
    inStock: true,
    stockCount: 16,
    shortDescription: "Slender dagger-like silvery pale green leaves with dark green center veins and margins.",
    description: "The Cutlass Chinese Evergreen is distinguished by its narrow, sword-like silver-green blades that sprout in dense clusters. Unmatched for low-light endurance and modern minimalist aesthetics.",
    images: [
      "/images/plants/aglaonema-cutlass-plant-32220863168644.jpg",
      "/images/plants/aglaonema-cutlass-plant-32220863266948.jpg",
      "/images/plants/aglaonema-cutlass-plant-32220863332484.jpg",
      "/images/plants/aglaonema-cutlass-plant-32220863430788.jpg",
    ],
    careGuide: {
      light: "Low Light",
      lightDetail: "Survives in low light corners as well as fluorescent office lighting.",
      watering: "Every 10-14 Days",
      wateringDetail: "Allow soil to dry halfway down before watering.",
      humidity: "Average Home",
      petFriendly: false,
      petNote: "Mildly toxic to pets.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Office Desk", "Corner Plant Stand", "Hallway Console"],
      feed: "Feed every 6 weeks during spring and monsoon.",
      repotting: "Repot every 2-3 years.",
      commonIssues: "Root rot from soggy soil; make sure pot drains cleanly.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Aglaonema Cutlass Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 11-14 inches (including pot) | Pot Diameter: 5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["air-purifying", "low-light", "architectural", "tabletop"],
  },

  {
    id: "plant-rubber-plant-burgundy",
    slug: "rubber-plant-burgundy-ficus-elastica",
    name: "Rubber Plant Burgundy",
    botanicalName: "Ficus elastica 'Burgundy'",
    category: "plants",
    subcategory: "Large Floor Plants",
    price: 549,
    originalPrice: 699,
    rating: 4.8,
    reviewCount: 134,
    isBestseller: true,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: false,
    inStock: true,
    stockCount: 18,
    shortDescription: "Deep burgundy-bronze glossy leaves with ruby-red leaf sheaths. Dramatic architectural statement.",
    description: "Ficus Elastica Burgundy is an imposing ornamental indoor tree. Its thick, leathery leaves emerge wrapped in fiery crimson sheaths, unfurling into dark bronze-green foliage with a natural lacquered sheen.",
    images: [
      "/images/plants/rubber-plant-31800175526020.jpg",
      "/images/plants/rubber-plant-31800175558788.jpg",
      "/images/plants/rubber-plant-31800175624324.jpg",
      "/images/plants/rubber-plant-31800175755396.jpg",
    ],
    careGuide: {
      light: "Bright Indirect",
      lightDetail: "Needs bright indirect light to preserve the deep rich burgundy tones.",
      watering: "When Top 2 Inches Dry",
      wateringDetail: "Water thoroughly once the top 2 inches dry out. Reduce watering in winter.",
      humidity: "Average Home",
      petFriendly: false,
      petNote: "Milky latex sap can irritate skin and cause mild pet toxicity.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Living Room Corner", "Study Balcony", "Entry Foyer"],
      feed: "Feed monthly in spring and monsoon with seaweed foliar tonic.",
      repotting: "Repot every 2 years into a heavy clay planter.",
      commonIssues: "Dust accumulation reduces photosynthesis; wipe leaves with a damp cloth monthly.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-m",
                      "name": "Mature Floor (18-24 inches)",
                      "heightGuide": "Well-branched architectural foliage",
                      "priceModifier": 0
                },
                {
                      "id": "size-l",
                      "name": "Statement Specimen (30-38 inches)",
                      "heightGuide": "Towering statement floor piece",
                      "priceModifier": 600
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Rubber Plant Burgundy in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 18-24 inches (including pot) | Pot Diameter: 6.5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["statement-plant", "living-room", "air-purifying", "bestseller"],
  },

  {
    id: "plant-anthurium-red",
    slug: "anthurium-red-flowering-plant",
    name: "Anthurium Red Plant",
    botanicalName: "Anthurium andraeanum",
    category: "plants",
    subcategory: "Flowering",
    price: 699,
    originalPrice: 899,
    rating: 4.9,
    reviewCount: 104,
    isBestseller: true,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: false,
    inStock: true,
    stockCount: 20,
    shortDescription: "Heart-shaped glossy red spathes with yellow spadix blooms that last up to 8 weeks per flower.",
    description: "The Red Anthurium, or Flamingo Flower, is NASA's top air-purifying flowering plant. Its waxy lacquer-red heart spathes remain vibrant for months, contrasting magnificently against lush arrow-shaped dark emerald foliage.",
    images: [
      "/images/plants/anthurium-red-plant-31798804414596.jpg",
      "/images/plants/anthurium-red-plant-31798804480132.jpg",
      "/images/plants/anthurium-red-plant-31798804578436.jpg",
      "/images/plants/anthurium-red-plant-32076159975556.jpg",
    ],
    careGuide: {
      light: "Bright Indirect",
      lightDetail: "Bright indirect light encourages continuous blooming throughout the year.",
      watering: "Weekly",
      wateringDetail: "Water when the top inch of soil feels dry. Never let potting mix sit waterlogged.",
      humidity: "High (Misting Helpful)",
      petFriendly: false,
      petNote: "Toxic if chewed by pets; keep elevated.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Dining Table Console", "Living Room Coffee Table", "Bright Study"],
      feed: "Feed every 3 weeks with high-potassium organic bloom tonic.",
      repotting: "Repot every 2 years with a coarse, airy orchid bark and coco-chip mix.",
      commonIssues: "Green spathes indicate low light; move closer to filtered daylight.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Anthurium Red Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 14-17 inches (including pot) | Pot Diameter: 5.5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["flowering", "air-purifying", "living-room", "bestseller", "gifting"],
  },

  {
    id: "plant-anthurium-million-flowers",
    slug: "anthurium-million-flowers-plant",
    name: "Anthurium Million Flowers Plant",
    botanicalName: "Anthurium andraeanum 'Million Flowers'",
    category: "plants",
    subcategory: "Flowering",
    price: 749,
    originalPrice: 999,
    rating: 4.9,
    reviewCount: 78,
    isBestseller: false,
    isNew: true,
    isBeginnerFriendly: true,
    isPetSafe: false,
    inStock: true,
    stockCount: 15,
    shortDescription: "Prolific blooming dwarf anthurium covered in multiple vibrant scarlet blooms simultaneously.",
    description: "Anthurium Million Flowers is celebrated for its dense, bushy growth habit and phenomenal flower count. Rather than producing 2-3 blooms at a time, it reliably displays a profusion of bright red flowers against deep green foliage.",
    images: [
      "/images/plants/anthurium-million-flowers-31911038713988.jpg",
      "/images/plants/anthurium-million-flowers-31911038746756.jpg",
      "/images/plants/anthurium-million-flowers-31911038779524.jpg",
      "/images/plants/anthurium-million-flowers-31911038812292.jpg",
    ],
    careGuide: {
      light: "Bright Indirect",
      lightDetail: "Thrives best with generous indirect sunlight near east-facing windows.",
      watering: "Weekly",
      wateringDetail: "Keep root zone evenly moist without standing in excess water.",
      humidity: "High (Misting Helpful)",
      petFriendly: false,
      petNote: "Toxic to companion animals.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Coffee Table Centerpiece", "Office Desk", "Bedroom Window Stand"],
      feed: "Feed every 3 weeks with flowering plant nutrient solution.",
      repotting: "Repot every 2 years into fresh airy soil mix.",
      commonIssues: "Yellowing leaves mean root saturation; ensure drainage hole remains clear.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Anthurium Million Flowers Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 12-15 inches (including pot) | Pot Diameter: 5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["flowering", "prolific-blooms", "air-purifying", "tabletop"],
  },

  {
    id: "plant-spider-chlorophytum",
    slug: "chlorophytum-spider-plant",
    name: "Chlorophytum Spider Plant",
    botanicalName: "Chlorophytum comosum",
    category: "plants",
    subcategory: "Air Purifying",
    price: 249,
    originalPrice: 349,
    rating: 4.9,
    reviewCount: 164,
    isBestseller: true,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: true,
    inStock: true,
    stockCount: 35,
    shortDescription: "Fountain-like arching ribbon foliage that produces baby spiderettes. 100% pet-safe.",
    description: "The Spider Plant is one of the most resilient, forgiving, and pet-friendly indoor houseplants ever discovered. Its arching ribbon leaves boast bright ivory center bands edged with lime green, shooting out long runners bearing miniature plantlets.",
    images: [
      "/images/plants/chlorophytum-spider-plant-31800232607876.jpg",
      "/images/plants/chlorophytum-spider-plant-31800232738948.jpg",
      "/images/plants/chlorophytum-spider-plant-32065401159812.jpg",
    ],
    careGuide: {
      light: "Medium Light",
      lightDetail: "Thrives in moderate to bright indirect light. Avoid scorching direct sun.",
      watering: "Weekly",
      wateringDetail: "Water when the top 1 inch dries out. Tolerates missed waterings effortlessly.",
      humidity: "Average Home",
      petFriendly: true,
      petNote: "100% certified non-toxic and pet-safe for cats and dogs.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Hanging Macrame", "Study Bookshelf", "Kids Bedroom Desk"],
      feed: "Feed once a month in warm season with mild liquid organic fertilizer.",
      repotting: "Repot annually or propagate runner spiderettes in water.",
      commonIssues: "Brown leaf tips from tap chlorine; use filtered water or trim tips.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Chlorophytum Spider Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 8-11 inches (including pot) | Pot Diameter: 4.5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["pet-safe", "air-purifying", "hanging-plant", "beginner-friendly", "bestseller"],
  },

  {
    id: "plant-ficus-bonsai",
    slug: "ficus-bonsai-plant-medium",
    name: "Ficus Bonsai Plant",
    botanicalName: "Ficus microcarpa (Ginseng)",
    category: "plants",
    subcategory: "Succulents & Cacti",
    price: 749,
    originalPrice: 999,
    rating: 4.8,
    reviewCount: 118,
    isBestseller: true,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: false,
    inStock: true,
    stockCount: 16,
    shortDescription: "Living sculptural miniature tree with thick aerial banyan roots and dense emerald canopy.",
    description: "Trained with traditional bonsai techniques, Ficus Microcarpa features thick, sculptural bulbous roots that elevate above the soil line like ancient banyan trunks. Topped with a dense crown of deep green glossy leaves, it infuses zen tranquility into home and office spaces.",
    images: [
      "/images/plants/ficus-bonsai-plant-31792241410180.jpg",
      "/images/plants/ficus-bonsai-plant-31792241508484.jpg",
      "/images/plants/ficus-bonsai-plant-31792241606788.jpg",
      "/images/plants/ficus-bonsai-plant-31792241803396.jpg",
    ],
    careGuide: {
      light: "Bright Indirect",
      lightDetail: "Requires bright indirect daylight; enjoys 2-3 hours of gentle morning sun.",
      watering: "Weekly",
      wateringDetail: "Water thoroughly when top soil dries out. Avoid completely drying out.",
      humidity: "High (Misting Helpful)",
      petFriendly: false,
      petNote: "Keep out of reach of curious cats and dogs.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Zen Meditation Room", "Workstation Credenza", "Living Room Centerpiece"],
      feed: "Feed every 4 weeks with organic bonsai plant food during active growth.",
      repotting: "Repot every 2-3 years into a shallow bonsai container with root trimming.",
      commonIssues: "Leaf drop can occur when moved suddenly; keep in a consistent bright location.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (4-6 inches)",
                      "heightGuide": "Ideal for sunny sills and desk corners",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Established (7-9 inches)",
                      "heightGuide": "Plump multi-stem specimen",
                      "priceModifier": 120
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Ficus Bonsai Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 12-16 inches (including pot) | Pot Diameter: 6 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["bonsai", "zen", "statement-plant", "desk-plant", "bestseller"],
  },

  {
    id: "plant-fittonia-nerve",
    slug: "fittonia-green-nerve-plant",
    name: "Fittonia Green Nerve Plant",
    botanicalName: "Fittonia albivenis",
    category: "plants",
    subcategory: "Low Light",
    price: 249,
    originalPrice: 349,
    rating: 4.8,
    reviewCount: 94,
    isBestseller: false,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: true,
    inStock: true,
    stockCount: 28,
    shortDescription: "Intricate mosaic white veins tracing deep forest-green leaves. Perfect terrarium companion.",
    description: "Fittonia, fondly named the Nerve Plant or Mosaic Plant, is a compact rainforest understory groundcover from South America. Its leaves feature delicate silver-white web-like venation, making it a favorite for desktop planters and glass terrariums.",
    images: [
      "/images/plants/fittonia-green-plant-nerve-plant-31774473027716.jpg",
      "/images/plants/fittonia-green-plant-nerve-plant-31774473060484.jpg",
      "/images/plants/fittonia-green-plant-nerve-plant-31774473158788.jpg",
      "/images/plants/fittonia-green-plant-nerve-plant-32076090540164.jpg",
    ],
    careGuide: {
      light: "Low Light",
      lightDetail: "Thrives in medium to low indirect light. Direct sun bleaches and scorches leaves.",
      watering: "Every 2-3 Days",
      wateringDetail: "Enjoys consistently moist soil. Faints dramatically when thirsty, perking back up within an hour of watering.",
      humidity: "High (Misting Helpful)",
      petFriendly: true,
      petNote: "100% pet-friendly and non-toxic.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Desk Terrarium", "Bathroom Sill", "Bookshelf"],
      feed: "Feed monthly with diluted liquid plant food during monsoon.",
      repotting: "Repot every 18 months into shallow containers.",
      commonIssues: "Wilting indicates dry soil; water immediately to revive.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Fittonia Green Nerve Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 4-6 inches (including pot) | Pot Diameter: 3.5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["pet-safe", "terrarium", "tabletop", "low-light"],
  },

  {
    id: "plant-fittonia-pink",
    slug: "fittonia-pink-nerve-plant",
    name: "Fittonia Pink Plant",
    botanicalName: "Fittonia albivenis 'Pink Forest Flame'",
    category: "plants",
    subcategory: "Low Light",
    price: 249,
    originalPrice: 349,
    rating: 4.9,
    reviewCount: 76,
    isBestseller: false,
    isNew: true,
    isBeginnerFriendly: true,
    isPetSafe: true,
    inStock: true,
    stockCount: 24,
    shortDescription: "Bright magenta-pink netted venation over olive-green foliage. Eye-catching tabletop gem.",
    description: "The Pink Nerve Plant captivates with electric magenta-pink netted veins that radiate across deep emerald leaves. It thrives in high indoor humidity and adds a splash of color to small desks, terrariums, and windowsills.",
    images: [
      "/images/plants/fittonia-pink-plant-31793595613316.jpg",
      "/images/plants/fittonia-pink-plant-31793595646084.jpg",
      "/images/plants/fittonia-pink-plant-31793595711620.jpg",
      "/images/plants/fittonia-pink-plant-31793595744388.jpg",
    ],
    careGuide: {
      light: "Low Light",
      lightDetail: "Prefers medium indirect light to maintain vibrant pink coloration.",
      watering: "Every 2-3 Days",
      wateringDetail: "Keep soil moist but not waterlogged. Mist regularly.",
      humidity: "High (Misting Helpful)",
      petFriendly: true,
      petNote: "Completely non-toxic to cats and dogs.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Work Desk", "Terrarium Bottle", "Bathroom Vanity"],
      feed: "Feed monthly with diluted seaweed fertilizer in spring.",
      repotting: "Repot annually into moist organic potting mix.",
      commonIssues: "Crisp leaves mean low air humidity; mist daily.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Fittonia Pink Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 4-6 inches (including pot) | Pot Diameter: 3.5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["pet-safe", "colorful-foliage", "tabletop", "low-light"],
  },

  {
    id: "plant-syngonium-pink",
    slug: "syngonium-pink-arrowhead-plant",
    name: "Syngonium Pink Plant",
    botanicalName: "Syngonium podophyllum 'Neon Robusta'",
    category: "plants",
    subcategory: "Air Purifying",
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviewCount: 136,
    isBestseller: true,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: false,
    inStock: true,
    stockCount: 30,
    shortDescription: "Arrowhead-shaped foliage dipped in soft pastel baby pink. Incredibly easy to grow.",
    description: "The Pink Arrowhead Vine is celebrated for its blush pastel pink arrow-shaped foliage that stays vibrantly colorful without fading. Highly adaptable to Indian household temperatures, it absorbs VOCs and airborne dust.",
    images: [
      "/images/plants/syngonium-pink-plant-31792667656324.jpg",
      "/images/plants/syngonium-pink-plant-31792667721860.jpg",
      "/images/plants/syngonium-pink-plant-31792667754628.jpg",
      "/images/plants/syngonium-pink-plant-31792667885700.jpg",
    ],
    careGuide: {
      light: "Medium Light",
      lightDetail: "Medium to bright indirect light helps retain optimal pink coloration.",
      watering: "Weekly",
      wateringDetail: "Water when top 1-2 inches of soil feel dry to the touch.",
      humidity: "Average Home",
      petFriendly: false,
      petNote: "Keep out of reach of domestic pets.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Bedside Nightstand", "Living Room Shelf", "Study Desk"],
      feed: "Feed every 4 weeks in monsoon and summer with organic foliage tonic.",
      repotting: "Repot every 2 years or insert a moss pole for upright climbing.",
      commonIssues: "Reversion to green leaves happens if light levels are too dark.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Syngonium Pink Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 8-12 inches (including pot) | Pot Diameter: 4.5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["colorful-foliage", "air-purifying", "beginner-friendly", "bestseller"],
  },

  {
    id: "plant-syngonium-white-butterfly",
    slug: "syngonium-white-butterfly-plant",
    name: "Syngonium White Butterfly Plant",
    botanicalName: "Syngonium podophyllum 'White Butterfly'",
    category: "plants",
    subcategory: "Air Purifying",
    price: 279,
    originalPrice: 379,
    rating: 4.8,
    reviewCount: 89,
    isBestseller: false,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: false,
    inStock: true,
    stockCount: 26,
    shortDescription: "Creamy white butterfly-wing leaves edged with delicate mint green. Lush and bushy.",
    description: "Syngonium White Butterfly features arrowhead leaves with glowing creamy-white centers outlined by soft jade margins, resembling butterfly wings in flight. One of the top air-purifying indoor foliage selections for modern apartments.",
    images: [
      "/images/plants/syngonium-white-butterfly-plant-31792589963396.jpg",
      "/images/plants/syngonium-white-butterfly-plant-31792589996164.jpg",
      "/images/plants/syngonium-white-butterfly-plant-31792590028932.jpg",
      "/images/plants/syngonium-white-butterfly-plant-31792590094468.jpg",
    ],
    careGuide: {
      light: "Medium Light",
      lightDetail: "Flourishes in medium to bright filtered daylight.",
      watering: "Weekly",
      wateringDetail: "Water once every 6 to 8 days as topsoil dries.",
      humidity: "Average Home",
      petFriendly: false,
      petNote: "Mildly toxic to pets.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Work Desk", "Balcony Shelf", "Living Room Table"],
      feed: "Feed every 4-6 weeks with balanced plant food.",
      repotting: "Repot every 2 years.",
      commonIssues: "Pale limp leaves indicate overwatering; allow soil to dry between waterings.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Syngonium White Butterfly Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 8-11 inches (including pot) | Pot Diameter: 4.5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["air-purifying", "tabletop", "beginner-friendly", "foliage"],
  },

  {
    id: "plant-the-china-doll-xl",
    slug: "the-china-doll-plant-xl",
    name: "The China Doll Plant XL",
    botanicalName: "Radermachera sinica",
    category: "plants",
    subcategory: "Large Floor Plants",
    price: 1499,
    originalPrice: 1899,
    rating: 4.8,
    reviewCount: 62,
    isBestseller: false,
    isNew: true,
    isBeginnerFriendly: false,
    isPetSafe: true,
    inStock: true,
    stockCount: 10,
    shortDescription: "Stately floor tree with glossy, bipinnate emerald leaflets that create a delicate canopy.",
    description: "Native to the subtropical mountain forests of southern China and Taiwan, the China Doll is a sophisticated indoor ornamental tree. Its finely divided, lace-like emerald foliage reflects light with an exquisite gloss, bringing architectural elegance to spacious interiors.",
    images: [
      "/images/plants/the-china-doll-plant-xl-31799955456132.jpg",
      "/images/plants/the-china-doll-plant-xl-31799955488900.jpg",
      "/images/plants/the-china-doll-plant-xl-31799955521668.jpg",
      "/images/plants/the-china-doll-plant-xl-32075992924292.jpg",
    ],
    careGuide: {
      light: "Bright Indirect",
      lightDetail: "Demands abundant bright indirect sunlight. Rotate regularly for balanced canopy growth.",
      watering: "Weekly",
      wateringDetail: "Keep root zone evenly moist; never allow to dry out completely or stand in water.",
      humidity: "High (Misting Helpful)",
      petFriendly: true,
      petNote: "Certified non-toxic and pet safe.",
      difficulty: "Moderate Care",
      idealPlacement: ["Spacious Living Room Foyer", "Double Height Window Area", "Executive Office"],
      feed: "Feed monthly during warm spring and monsoon months with organic foliage fertilizer.",
      repotting: "Repot every 2 years in a large, weighted ceramic or stone planter.",
      commonIssues: "Leaf drop occurs if relocated frequently or subjected to dry heating drafts.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-m",
                      "name": "Mature Floor (18-24 inches)",
                      "heightGuide": "Well-branched architectural foliage",
                      "priceModifier": 0
                },
                {
                      "id": "size-l",
                      "name": "Statement Specimen (30-38 inches)",
                      "heightGuide": "Towering statement floor piece",
                      "priceModifier": 600
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized The China Doll Plant XL in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 32-38 inches (including pot) | Pot Diameter: 9 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["floor-plant", "statement-plant", "pet-safe", "architectural"],
  },

  {
    id: "plant-zebra-haworthia",
    slug: "zebra-haworthia-succulent-plant",
    name: "Zebra Haworthia Plant",
    botanicalName: "Haworthiopsis fasciata",
    category: "plants",
    subcategory: "Succulents & Cacti",
    price: 249,
    originalPrice: 349,
    rating: 4.9,
    reviewCount: 145,
    isBestseller: true,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: true,
    inStock: true,
    stockCount: 35,
    shortDescription: "Miniature rosette succulent studded with raised porcelain-white zebra stripes. Non-toxic.",
    description: "Zebra Haworthia is a miniature succulent masterpiece. Its upright, dark green pointed leaves are banded horizontally with embossed, chalk-white ridges that resemble zebra stripes. Completely harmless to companion animals.",
    images: [
      "/images/plants/zebra-haworthia-plant-31791683174532.jpg",
      "/images/plants/zebra-haworthia-plant-31791683240068.jpg",
      "/images/plants/zebra-haworthia-plant-31791683272836.jpg",
      "/images/plants/zebra-haworthia-plant-32076011405444.jpg",
    ],
    careGuide: {
      light: "Bright Indirect",
      lightDetail: "Thrives on bright windowsills with gentle early sun or bright indirect light.",
      watering: "Every 10-14 Days",
      wateringDetail: "Water only after soil dries out thoroughly. Overwatering is the only danger.",
      humidity: "Tolerant of Dry Air",
      petFriendly: true,
      petNote: "100% non-toxic and safe around curious cats and dogs.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Office Desk", "Sunny Sill", "Bookshelf"],
      feed: "Feed twice a year with diluted succulent tonic.",
      repotting: "Repot every 2-3 years in gritty cactus potting mix.",
      commonIssues: "Reddish tinge means intense sun; soft base leaves mean excess moisture.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (4-6 inches)",
                      "heightGuide": "Ideal for sunny sills and desk corners",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Established (7-9 inches)",
                      "heightGuide": "Plump multi-stem specimen",
                      "priceModifier": 120
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Zebra Haworthia Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 5-7 inches (including pot) | Pot Diameter: 3.5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["succulent", "pet-safe", "tabletop", "bestseller", "low-maintenance"],
  },

  {
    id: "plant-aloe-vera-mini",
    slug: "aloe-vera-mini-plant",
    name: "Aloe Vera Mini Plant",
    botanicalName: "Aloe barbadensis miller",
    category: "plants",
    subcategory: "Succulents & Cacti",
    price: 199,
    originalPrice: 299,
    rating: 4.9,
    reviewCount: 188,
    isBestseller: true,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: false,
    inStock: true,
    stockCount: 42,
    shortDescription: "Medicinal healing succulent with thick fleshy spears filled with cooling restorative gel.",
    description: "The miracle plant of botanical medicine, Aloe Vera is an ancient, drought-tolerant succulent known for its soothing gel. Compact and self-sufficient, it purifies indoor air of benzene while sitting proudly on sunny sills.",
    images: [
      "/images/plants/aloe-vera-mini-plant-31774051565700.jpg",
      "/images/plants/aloe-vera-mini-plant-31774051631236.jpg",
      "/images/plants/aloe-vera-mini-plant-31774051664004.jpg",
      "/images/plants/aloe-vera-mini-plant-31774051696772.jpg",
    ],
    careGuide: {
      light: "Bright Indirect",
      lightDetail: "Enjoys bright sunshine. Requires at least 3-4 hours of bright light daily.",
      watering: "Every 10-14 Days",
      wateringDetail: "Soak deeply, then allow soil to dry completely before watering again.",
      humidity: "Tolerant of Dry Air",
      petFriendly: false,
      petNote: "Latex beneath rind can cause mild digestive upset in animals if chewed.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Kitchen Window Sill", "Balcony Table", "Sunlit Study Desk"],
      feed: "Feed once in spring with balanced organic liquid fertilizer.",
      repotting: "Repot every 2 years into terracotta with gritty soil.",
      commonIssues: "Brown droopy leaves mean root saturation; ensure pot has unobstructed drainage.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (4-6 inches)",
                      "heightGuide": "Ideal for sunny sills and desk corners",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Established (7-9 inches)",
                      "heightGuide": "Plump multi-stem specimen",
                      "priceModifier": 120
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Aloe Vera Mini Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 7-9 inches (including pot) | Pot Diameter: 4 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["succulent", "medicinal", "air-purifying", "bestseller"],
  },

  {
    id: "plant-peacock-calathea",
    slug: "peacock-plant-calathea-makoyana",
    name: "Peacock Plant (Calathea Makoyana)",
    botanicalName: "Calathea makoyana",
    category: "plants",
    subcategory: "Pet-Safe",
    price: 499,
    originalPrice: 649,
    rating: 4.8,
    reviewCount: 81,
    isBestseller: false,
    isNew: false,
    isBeginnerFriendly: false,
    isPetSafe: true,
    inStock: true,
    stockCount: 14,
    shortDescription: "Translucent patterned leaves resembling peacock tail feathers with purple undersides.",
    description: "Calathea Makoyana is renowned as the Peacock Plant for its striking feathered foliage that looks hand-painted by nature. At dusk, the plant draws its leaves upward in prayer, exposing rich burgundy-purple undersides.",
    images: [
      "/images/plants/peacock-plant-31778230993028.jpg",
      "/images/plants/peacock-plant-31778231124100.jpg",
      "/images/plants/peacock-plant-31778231189636.jpg",
      "/images/plants/peacock-plant-31778231255172.jpg",
    ],
    careGuide: {
      light: "Medium Light",
      lightDetail: "Prefers medium to bright indirect light. Avoid direct harsh sun.",
      watering: "Weekly",
      wateringDetail: "Keep potting soil evenly moist; never waterlogged and never bone dry.",
      humidity: "High (Misting Helpful)",
      petFriendly: true,
      petNote: "100% pet-friendly and non-toxic to all companion pets.",
      difficulty: "Moderate Care",
      idealPlacement: ["Bathroom Vanity", "Living Room Console", "Side Table"],
      feed: "Feed monthly during warm season with gentle foliage tonic.",
      repotting: "Repot every 18 months into moisture-retentive peat mix.",
      commonIssues: "Curling leaves indicate low ambient humidity or dry potting soil.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Peacock Plant (Calathea Makoyana) in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 10-14 inches (including pot) | Pot Diameter: 5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["pet-safe", "prayer-plant", "colorful-foliage", "air-purifying"],
  },

  {
    id: "plant-boston-fern",
    slug: "boston-compacta-fern-plant",
    name: "Boston Compacta Fern Plant",
    botanicalName: "Nephrolepis exaltata 'Compacta'",
    category: "plants",
    subcategory: "Pet-Safe",
    price: 399,
    originalPrice: 549,
    rating: 4.8,
    reviewCount: 84,
    isBestseller: false,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: true,
    inStock: true,
    stockCount: 20,
    shortDescription: "Lush cascading fronds that cleanse airborne toxins and restore indoor humidity.",
    description: "Boston Compacta is a refined, bushier cultivar of the classic sword fern. Its arching fronds are densely packed with emerald leaflets, acting as a natural living humidifier and air scrubber that is entirely non-toxic to pets.",
    images: [
      "/images/plants/boston-compacta-31774400512132.jpg",
      "/images/plants/boston-compacta-31774400544900.jpg",
      "/images/plants/boston-compacta-32076103680132.jpg",
    ],
    careGuide: {
      light: "Medium Light",
      lightDetail: "Prefers dappled or filtered indirect light. Avoid direct harsh sunshine.",
      watering: "When Top 2 Inches Dry",
      wateringDetail: "Water whenever the surface soil feels slightly dry. Mist fronds regularly.",
      humidity: "High (Misting Helpful)",
      petFriendly: true,
      petNote: "Completely non-toxic to cats and dogs.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Humid Master Bathroom", "Hanging Macrame", "Shaded Balcony"],
      feed: "Feed once every 4 weeks in warm months with diluted seaweed extract.",
      repotting: "Repot every 2 years in rich, porous organic mix.",
      commonIssues: "Browning leaflets signal dry indoor air; mist fronds twice weekly.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Boston Compacta Fern Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 12-15 inches (including pot) | Pot Diameter: 5.5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["pet-safe", "air-purifying", "hanging-plant", "fern"],
  },

  {
    id: "plant-golden-fern",
    slug: "golden-fern-plant",
    name: "Golden Fern Plant",
    botanicalName: "Nephrolepis cordifolia 'Duffii'",
    category: "plants",
    subcategory: "Pet-Safe",
    price: 349,
    originalPrice: 499,
    rating: 4.8,
    reviewCount: 57,
    isBestseller: false,
    isNew: true,
    isBeginnerFriendly: true,
    isPetSafe: true,
    inStock: true,
    stockCount: 18,
    shortDescription: "Bright chartreuse button-like fronds that bring radiant texture to indoor corners.",
    description: "Also known as the Lemon Button Fern, Golden Fern features arching fronds with tiny, rounded golden-green pinnae that emit a subtle citrus fragrance when brushed. Safe for playful pets and delightfully compact.",
    images: [
      "/images/plants/golden-fern-plant-31793589584004.jpg",
      "/images/plants/golden-fern-plant-31793589649540.jpg",
      "/images/plants/golden-fern-plant-31793589682308.jpg",
      "/images/plants/golden-fern-plant-32076361793668.jpg",
    ],
    careGuide: {
      light: "Medium Light",
      lightDetail: "Flourishes in medium to bright indirect light.",
      watering: "Weekly",
      wateringDetail: "Keep potting soil lightly moist; do not allow roots to sit submerged.",
      humidity: "High (Misting Helpful)",
      petFriendly: true,
      petNote: "100% pet safe.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Desk Shelf", "Bathroom Counter", "Plant Stand"],
      feed: "Feed once monthly during monsoon.",
      repotting: "Repot every 2 years.",
      commonIssues: "Crisp tips mean low humidity; mist periodically.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Golden Fern Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 9-12 inches (including pot) | Pot Diameter: 4.5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["pet-safe", "fern", "tabletop", "air-purifying"],
  },

  {
    id: "plant-stromanthe-triostar",
    slug: "stromanthe-triostar-plant",
    name: "Stromanthe Triostar Plant",
    botanicalName: "Stromanthe thalia 'Triostar'",
    category: "plants",
    subcategory: "Pet-Safe",
    price: 449,
    originalPrice: 599,
    rating: 4.9,
    reviewCount: 92,
    isBestseller: false,
    isNew: true,
    isBeginnerFriendly: false,
    isPetSafe: true,
    inStock: true,
    stockCount: 16,
    shortDescription: "Dramatic tricolor foliage painted with pastel pink, ivory, and emerald with ruby undersides.",
    description: "Stromanthe Triostar is an exotic Brazilian relative of the prayer plant family. Its lance-shaped leaves are splashed with swirls of cream, pastel pink, and forest green, backed by vivid magenta-pink undersides.",
    images: [
      "/images/plants/stromanthe-triostar-plant-31800251875460.jpg",
      "/images/plants/stromanthe-triostar-plant-31800251908228.jpg",
      "/images/plants/stromanthe-triostar-plant-32076001968260.jpg",
    ],
    careGuide: {
      light: "Bright Indirect",
      lightDetail: "Bright indirect light is required to maintain its tricolor pink-and-white splashes.",
      watering: "Weekly",
      wateringDetail: "Keep soil evenly moist using room temperature filtered water.",
      humidity: "High (Misting Helpful)",
      petFriendly: true,
      petNote: "Completely non-toxic to all pets.",
      difficulty: "Moderate Care",
      idealPlacement: ["Living Room Console", "Bright Bathroom", "Side Table"],
      feed: "Feed once every 3 weeks in spring and monsoon with mild liquid tonic.",
      repotting: "Repot every 2 years in spring.",
      commonIssues: "Brown leaf edges from dry air or fluoride; mist regularly.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Stromanthe Triostar Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 12-16 inches (including pot) | Pot Diameter: 5.5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["pet-safe", "colorful-foliage", "prayer-plant", "statement-plant"],
  },

  {
    id: "plant-aechmea-fasciata",
    slug: "aechmea-fasciata-silver-vase-bromeliad",
    name: "Aechmea Fasciata Bromeliad Plant",
    botanicalName: "Aechmea fasciata",
    category: "plants",
    subcategory: "Flowering",
    price: 699,
    originalPrice: 899,
    rating: 4.9,
    reviewCount: 49,
    isBestseller: false,
    isNew: true,
    isBeginnerFriendly: true,
    isPetSafe: true,
    inStock: true,
    stockCount: 12,
    shortDescription: "Silver Vase Bromeliad with frosted silver foliage and a striking exotic pink bloom.",
    description: "Aechmea Fasciata, the Silver Vase Plant, is one of the most exotic tropical epiphytes. It forms an urn-shaped rosette of arching leathery leaves frosted in silver horizontal banding, from which emerges a dramatic pink bract that remains stunning for up to 6 months.",
    images: [
      "/images/plants/aechmea-fasciata-plant-32220864643204.jpg",
      "/images/plants/aechmea-fasciata-plant-32220864741508.jpg",
      "/images/plants/aechmea-fasciata-plant-32220865036420.jpg",
      "/images/plants/aechmea-fasciata-plant-32220865134724.jpg",
    ],
    careGuide: {
      light: "Bright Indirect",
      lightDetail: "Enjoys bright indirect light; tolerates morning sun.",
      watering: "Weekly",
      wateringDetail: "Keep the central cup (urn) filled with fresh water; lightly moisten soil once weekly.",
      humidity: "High (Misting Helpful)",
      petFriendly: true,
      petNote: "Non-toxic to companion animals.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Coffee Table Feature", "Living Room Centerpiece", "Covered Balcony"],
      feed: "Light foliar feed misted onto leaves once every 2 months in warm season.",
      repotting: "Rarely needs repotting; propagates via base pups (offsets).",
      commonIssues: "Flush and replace the central urn water every 2-3 weeks to keep it clean.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Aechmea Fasciata Bromeliad Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 14-18 inches (including pot) | Pot Diameter: 6 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["flowering", "pet-safe", "exotic", "statement-plant"],
  },

  {
    id: "plant-philodendron-ceylon-golden",
    slug: "philodendron-ceylon-golden-plant",
    name: "Philodendron Ceylon Golden Plant",
    botanicalName: "Philodendron 'Ceylon Gold'",
    category: "plants",
    subcategory: "Air Purifying",
    price: 349,
    originalPrice: 499,
    rating: 4.8,
    reviewCount: 73,
    isBestseller: false,
    isNew: true,
    isBeginnerFriendly: true,
    isPetSafe: false,
    inStock: true,
    stockCount: 22,
    shortDescription: "Vibrant chartreuse-yellow tropical leaves that illuminate dimly lit interior living spaces.",
    description: "Philodendron Ceylon Gold instantly enlivens indoor rooms with its neon chartreuse and golden-lime heart-shaped leaves. Fast-growing and resilient, it cleanses interior air of airborne pollutants effortlessly.",
    images: [
      "/images/plants/philodendron-ceylon-golden-plant-31779600040068.jpg",
      "/images/plants/philodendron-ceylon-golden-plant-31779600203908.jpg",
      "/images/plants/philodendron-ceylon-golden-plant-31779600236676.jpg",
      "/images/plants/philodendron-ceylon-golden-plant-32076062490756.jpg",
    ],
    careGuide: {
      light: "Bright Indirect",
      lightDetail: "Prefers medium to bright indirect light to maintain its neon yellow brilliance.",
      watering: "Weekly",
      wateringDetail: "Water when top 1-2 inches of soil feel dry.",
      humidity: "Average Home",
      petFriendly: false,
      petNote: "Keep out of reach of pets.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Living Room Corner", "Study Bookcase", "Balcony Shelf"],
      feed: "Feed monthly with balanced seaweed liquid tonic.",
      repotting: "Repot every 2 years in fresh potting mix.",
      commonIssues: "Dull greenish foliage means light is too dim; move closer to filtered daylight.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Philodendron Ceylon Golden Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 10-14 inches (including pot) | Pot Diameter: 5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["air-purifying", "colorful-foliage", "beginner-friendly", "indoor"],
  },

  {
    id: "plant-philodendron-brasil",
    slug: "philodendron-brasil-plant",
    name: "Philodendron Brasil Plant",
    botanicalName: "Philodendron hederaceum 'Brasil'",
    category: "plants",
    subcategory: "Low Light",
    price: 349,
    originalPrice: 499,
    rating: 4.9,
    reviewCount: 118,
    isBestseller: true,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: false,
    inStock: true,
    stockCount: 26,
    shortDescription: "Lush heart-shaped leaves striped with electric lime center brushstrokes. Vigorous trailer.",
    description: "Philodendron Brasil is a beloved trailing houseplant featuring heart-shaped leaves with an electric lime-yellow stripe down each leaf center. Incredibly tolerant of varying light levels and missed waterings.",
    images: [
      "/images/plants/philodendron-brasil-plant-31793323344004.jpg",
      "/images/plants/philodendron-brasil-plant-31793323376772.jpg",
      "/images/plants/philodendron-brasil-plant-31793323409540.jpg",
      "/images/plants/philodendron-brasil-plant-32076050530436.jpg",
    ],
    careGuide: {
      light: "Medium Light",
      lightDetail: "Thrives in low to bright indirect light.",
      watering: "Weekly",
      wateringDetail: "Water when the top half of soil dries out.",
      humidity: "Average Home",
      petFriendly: false,
      petNote: "Keep elevated on hanging hooks or bookshelves.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Bookshelf Edge", "Hanging Macrame", "Office Desk"],
      feed: "Feed once monthly during monsoon.",
      repotting: "Repot every 2 years.",
      commonIssues: "Leaves curl slightly when thirsty; recovers quickly after watering.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Philodendron Brasil Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Trailing vine length: 12-16 inches | Pot Diameter: 4.5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["trailing", "hanging-plant", "low-light", "bestseller"],
  },

  {
    id: "plant-sansevieria-superba",
    slug: "sansevieria-superba-green-snake-plant",
    name: "Sansevieria Superba Green Snake Plant",
    botanicalName: "Sansevieria trifasciata 'Futura Superba'",
    category: "plants",
    subcategory: "Air Purifying",
    price: 349,
    originalPrice: 499,
    rating: 4.8,
    reviewCount: 89,
    isBestseller: false,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: false,
    inStock: true,
    stockCount: 24,
    shortDescription: "Compact, wide-leaved architectural snake plant with silvery cross-banding and creamy edges.",
    description: "Futura Superba is a mid-sized snake plant cultivar that strikes the perfect balance between dwarf hahnii and tall laurentii varieties. Its wide, twisting sword leaves feature mottled green centers framed by gold borders.",
    images: [
      "/images/plants/sansevieria-superba-green-snake-plant-31793037475972.jpg",
      "/images/plants/sansevieria-superba-green-snake-plant-31793037508740.jpg",
      "/images/plants/sansevieria-superba-green-snake-plant-31793037574276.jpg",
      "/images/plants/sansevieria-superba-green-snake-plant-31793037607044.jpg",
    ],
    careGuide: {
      light: "Low Light",
      lightDetail: "Highly tolerant of dark bedrooms, office corners, and bright living rooms.",
      watering: "Every 10-14 Days",
      wateringDetail: "Water only when potting medium is bone dry.",
      humidity: "Tolerant of Dry Air",
      petFriendly: false,
      petNote: "Mild pet toxicity; best kept on elevated tables.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Bedside Nightstand", "Console Table", "Conference Room"],
      feed: "Feed every 8 weeks in summer with mild liquid food.",
      repotting: "Repot every 3 years.",
      commonIssues: "Soft leaf base indicates overwatering.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Sansevieria Superba Green Snake Plant in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 11-14 inches (including pot) | Pot Diameter: 5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["air-purifying", "low-light", "hardy", "bedroom"],
  },

  {
    id: "plant-peperomia-green",
    slug: "peperomia-green-baby-rubber-plant",
    name: "Peperomia Green Plant (Baby Rubber)",
    botanicalName: "Peperomia obtusifolia",
    category: "plants",
    subcategory: "Pet-Safe",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviewCount: 68,
    isBestseller: false,
    isNew: true,
    isBeginnerFriendly: true,
    isPetSafe: true,
    inStock: true,
    stockCount: 22,
    shortDescription: "Plump rounded spoon leaves with succulent glossy texture. 100% pet-safe tabletop green.",
    description: "Peperomia Obtusifolia, affectionately termed the Baby Rubber Plant, displays thick, waxy spoon-shaped foliage that retains moisture like a succulent. Completely safe for companion animals and very easy to care for.",
    images: [
      "/images/plants/peperomia-green-plant-31793195614340.jpg",
      "/images/plants/peperomia-green-plant-31793195679876.jpg",
      "/images/plants/peperomia-green-plant-31793195778180.jpg",
      "/images/plants/peperomia-green-plant-32076237832324.jpg",
    ],
    careGuide: {
      light: "Medium Light",
      lightDetail: "Performs best in medium to bright indirect light.",
      watering: "Weekly",
      wateringDetail: "Allow top 2 inches of soil to dry before watering again.",
      humidity: "Average Home",
      petFriendly: true,
      petNote: "100% non-toxic to cats and dogs.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Coffee Table", "Kitchen Island", "Study Desk"],
      feed: "Feed every 6 weeks during spring and monsoon.",
      repotting: "Repot every 2-3 years into well-draining succulent soil.",
      commonIssues: "Blackened stems mean overwatering; let soil dry between waterings.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Peperomia Green Plant (Baby Rubber) in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 8-11 inches (including pot) | Pot Diameter: 4.5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["pet-safe", "succulent-like", "tabletop", "air-purifying"],
  },

  {
    id: "plant-money-tree",
    slug: "money-tree-pachira-aquatica",
    name: "Money Tree Plant (Pachira Aquatica)",
    botanicalName: "Pachira aquatica",
    category: "plants",
    subcategory: "Low Light",
    price: 499,
    originalPrice: 699,
    rating: 4.9,
    reviewCount: 97,
    isBestseller: true,
    isNew: false,
    isBeginnerFriendly: true,
    isPetSafe: true,
    inStock: true,
    stockCount: 20,
    shortDescription: "Braided woody trunk crowned by umbrella-like palmate leaves. Symbol of wealth and harmony.",
    description: "The Money Tree (Pachira Aquatica) is renowned in Feng Shui for locking in financial prosperity and positive energy. Its intertwining braided woody trunk supports a lush canopy of bright green palmate leaves. Non-toxic to pets and remarkably forgiving.",
    images: [
      "/images/plants/money-tree-31793237524612.jpg",
      "/images/plants/money-tree-31793237622916.jpg",
      "/images/plants/money-tree-31793237655684.jpg",
      "/images/plants/money-tree-31793237753988.jpg",
    ],
    careGuide: {
      light: "Bright Indirect",
      lightDetail: "Thrives in medium to bright indirect light. Avoid scorching direct sun.",
      watering: "Weekly",
      wateringDetail: "Water when top 2-3 inches of soil are dry. Empty excess drip water.",
      humidity: "High (Misting Helpful)",
      petFriendly: true,
      petNote: "Non-toxic and pet safe.",
      difficulty: "Beginner Friendly",
      idealPlacement: ["Living Room Corner", "Home Office", "Wealth Vastu Corner"],
      feed: "Feed monthly in spring and monsoon with organic fertilizer.",
      repotting: "Repot every 2 years into a stable, weighted pot.",
      commonIssues: "Leaf drop can occur when overwatered or placed in chilly drafts.",
    },
    variants: {
          "sizes": [
                {
                      "id": "size-s",
                      "name": "Compact (8-12 inches)",
                      "heightGuide": "Perfect for tabletops, side tables and shelves",
                      "priceModifier": 0
                },
                {
                      "id": "size-m",
                      "name": "Mature Bushy (14-18 inches)",
                      "heightGuide": "Dense bushy growth with established root ball",
                      "priceModifier": 200
                }
          ],
          "planterMaterials": [
                {
                      "id": "mat-nursery",
                      "name": "Recyclable Nursery Pot",
                      "priceModifier": 0
                },
                {
                      "id": "mat-terracotta",
                      "name": "Handcrafted Terracotta Urn",
                      "priceModifier": 499
                },
                {
                      "id": "mat-ceramic",
                      "name": "Artisan Sand Glazed Ceramic",
                      "priceModifier": 699
                },
                {
                      "id": "mat-selfwater",
                      "name": "Hydro-Reservoir Self-Watering",
                      "priceModifier": 599
                }
          ],
          "planterColors": [
                {
                      "id": "col-terracotta",
                      "name": "Terracotta Rust",
                      "hex": "#B95139"
                },
                {
                      "id": "col-sand",
                      "name": "Warm Sand",
                      "hex": "#E8DCCB"
                },
                {
                      "id": "col-olive",
                      "name": "Olive Leaf",
                      "hex": "#384333"
                },
                {
                      "id": "col-charcoal",
                      "name": "Charcoal Slate",
                      "hex": "#252822"
                }
          ]
    },
    packageContents: [
          "Healthy acclimatized Money Tree Plant (Pachira Aquatica) in nursery grow pot",
          "Curated pot selection with drainage saucer",
          "Botanical care passport with seasonal watering schedule",
          "Complimentary pouch of slow-release organic seaweed pellets"
    ],
    approximateDimensions: "Height: 14-18 inches (including pot) | Pot Diameter: 5.5 inches",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted", "pot-hydro-selfwatering"],
    careAddons: ["care-potting-mix-5kg", "care-neem-oil-spray", "care-brass-mister"],
    tags: ["vastu", "feng-shui", "pet-safe", "statement-plant", "bestseller"],
  },

  // ==========================================
  // 2. POTS & PLANTERS
  // ==========================================
  {
    id: "pot-terracotta-urn",
    slug: "handcrafted-terracotta-urn-planter",
    name: "Handcrafted Terracotta Studio Urn",
    category: "pots-planters",
    subcategory: "Handmade Terracotta",
    price: 999,
    originalPrice: 1499,
    rating: 4.95,
    reviewCount: 162,
    isBestseller: true,
    isNew: false,
    inStock: true,
    stockCount: 40,
    shortDescription: "Wheel-thrown porous red clay planter with matching drainage saucer for optimal root aeration.",
    description: "Crafted by generational potter families using natural unglazed earthenware clay, this Terracotta Studio Urn allows plant roots to breathe freely through microscopic pores. The natural thermal regulation protects roots during scorching Indian summers while developing a gorgeous aged patina over time.",
    images: [
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/1_d87323cc-bf70-4799-a66d-7ff965c8cb2b.jpg?v=1709701882",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/6_66d33a7b-f4ed-4502-bffc-66561d4ae463.png?v=1770027606",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/2_908ceb44-4faf-4eb6-b12b-4769ebf5ee54.png?v=1770027606",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/3_ae7fdfaf-41fe-48d2-a5c4-0d387babf1e5.png?v=1770027606",
    ],
    variants: {
      sizes: [
        { id: "size-6", name: "6-inch Diameter", heightGuide: "Ideal for succulents, pothos & small plants", priceModifier: 0 },
        { id: "size-8", name: "8-inch Diameter", heightGuide: "Best for Monstera, Peace Lily, Snake plants", priceModifier: 200 },
        { id: "size-10", name: "10-inch Diameter", heightGuide: "Accommodates floor palms & mature ficus", priceModifier: 450 },
      ],
      planterColors: [
        { id: "col-terracotta", name: "Natural Terracotta Rust", hex: "#B95139" },
        { id: "col-sand", name: "Chalk Sand Wash", hex: "#E8DCCB" },
      ],
    },
    packageContents: [
      "1x Hand-thrown porous clay planter",
      "1x Matching terracotta drainage saucer with non-scratch silicone feet",
      "1x Mesh drainage hole screen",
    ],
    approximateDimensions: "Diameter: 8 inches | Height: 7.5 inches | Weight: 1.4 kg",
    compatiblePlanters: [],
    careAddons: ["care-potting-mix-5kg"],
    tags: ["bestseller", "handcrafted", "terracotta", "breathable"],
  },

  {
    id: "pot-sandstone-fluted",
    slug: "ribbed-sandstone-fluted-pedestal-planter",
    name: "Fluted Sandstone Pedestal Planter",
    category: "pots-planters",
    subcategory: "Ceramic & Stone",
    price: 1299,
    originalPrice: 1799,
    rating: 4.88,
    reviewCount: 94,
    isBestseller: true,
    isNew: true,
    inStock: true,
    stockCount: 20,
    shortDescription: "Sculptural ribbed stone composite planter that elevates tabletop foliage to gallery art.",
    description: "Featuring tactile vertical architectural fluting inspired by neoclassical columns, this planter is cast from durable crushed sandstone and mineral composite. Finished in a warm matte stone texture that blends effortlessly into minimalist, Japandi, and contemporary Indian interiors.",
    images: [
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Artboard_1_f270f819-14c2-4f80-ab44-e56ad0550a84.jpg?v=1789048274",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/tokyo-round-planter-32010534289572.jpg?v=1789048274",
    ],
    variants: {
      sizes: [
        { id: "size-7", name: "7-inch Diameter", heightGuide: "Tabletop elegance", priceModifier: 0 },
        { id: "size-9", name: "9.5-inch Diameter", heightGuide: "Mid-size floor accent", priceModifier: 350 },
      ],
      planterColors: [
        { id: "col-sand", name: "Warm Dune Sand", hex: "#E8DCCB" },
        { id: "col-olive", name: "Olive Slate", hex: "#384333" },
        { id: "col-charcoal", name: "Charcoal Basalt", hex: "#252822" },
      ],
    },
    packageContents: [
      "1x Fluted sandstone composite planter",
      "Internal silicone plug for versatile indoor/outdoor use",
      "Felt surface protectors",
    ],
    approximateDimensions: "Diameter: 7.5 inches | Height: 8.5 inches | Weight: 1.8 kg",
    compatiblePlanters: [],
    careAddons: ["care-potting-mix-5kg"],
    tags: ["sculptural", "stone", "living-room", "bestseller"],
  },

  {
    id: "pot-ceramic-bowl",
    slug: "olive-glazed-ceramic-bowl-planter",
    name: "Artisan Glazed Ceramic Bowl Planter",
    category: "pots-planters",
    subcategory: "Ceramic & Stone",
    price: 299,
    originalPrice: 499,
    rating: 4.82,
    reviewCount: 71,
    isBestseller: false,
    isNew: false,
    inStock: true,
    stockCount: 25,
    shortDescription: "High-fired ceramic with reactive olive glaze and raw earthen unglazed base.",
    description: "Each bowl is individually dip-glazed by studio ceramicists in Khurja, producing organic speckled variations in earthy olive and moss tones. High-fired at 1200°C for exceptional durability and frost-resistance.",
    images: [
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Roman_5_inch-01.jpg?v=1758278420",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/AImagewithplant_971e1e09-f0ca-4a9f-8414-efbeda26c674.jpg?v=1758278420",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Sizemeup_af15bc22-5c43-48ee-9f8c-3616fb6b9200.jpg?v=1770029059",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Detail_7098f910-57b1-400d-a8a9-7b18f6c8a69c.jpg?v=1770029059",
    ],
    variants: {
      sizes: [
        { id: "size-6", name: "6.5-inch Wide", heightGuide: "Ideal for trailing pothos & calathea", priceModifier: 0 },
        { id: "size-8", name: "8.5-inch Wide", heightGuide: "Accommodates bushy plants", priceModifier: 250 },
      ],
      planterColors: [
        { id: "col-olive", name: "Earthy Olive Moss", hex: "#384333" },
        { id: "col-sand", name: "Speckled Oatmeal", hex: "#E8DCCB" },
      ],
    },
    packageContents: [
      "1x High-fired glazed ceramic planter",
      "Integrated matching ceramic drip tray",
    ],
    approximateDimensions: "Diameter: 7 inches | Height: 6.5 inches | Weight: 1.2 kg",
    compatiblePlanters: [],
    careAddons: ["care-potting-mix-5kg"],
    tags: ["ceramic", "handcrafted", "tabletop"],
  },

  {
    id: "pot-hydro-selfwatering",
    slug: "hydro-reservoir-self-watering-planter",
    name: "Hydro-Reservoir Self-Watering Planter",
    category: "pots-planters",
    subcategory: "Self-Watering",
    price: 399,
    originalPrice: 599,
    rating: 4.9,
    reviewCount: 112,
    isBestseller: true,
    isNew: false,
    inStock: true,
    stockCount: 35,
    shortDescription: "Sub-irrigation wicking system that keeps plants perfectly hydrated for up to 14 days.",
    description: "Never worry about overwatering or leaving plants unattended during holidays. Features an engineered capillary sub-irrigation basin that allows plants to drink water naturally from below via osmosis, preventing root rot while saving up to 40% water.",
    images: [
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/AImage_15828f4a-e15b-40d5-9d17-241fe701088f.jpg?v=1695717092",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/AImage_df337456-2133-47b6-af96-6fcc14b4ffaf.jpg?v=1695717092",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/AImageWithoutPlant.jpg?v=1695717092",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/3_42d51344-c292-4966-a751-a3cb66c7750b.jpg?v=1695717092",
    ],
    variants: {
      sizes: [
        { id: "size-7", name: "7-inch Planter", heightGuide: "Holds 400ml water reservoir (7-10 days)", priceModifier: 0 },
        { id: "size-9", name: "9-inch Planter", heightGuide: "Holds 850ml water reservoir (12-16 days)", priceModifier: 300 },
      ],
      planterColors: [
        { id: "col-sand", name: "Matte Dune Sand", hex: "#E8DCCB" },
        { id: "col-olive", name: "Matte Olive", hex: "#384333" },
        { id: "col-charcoal", name: "Matte Charcoal", hex: "#252822" },
      ],
    },
    packageContents: [
      "1x Outer reservoir casing in matte finish",
      "1x Inner aerated planting liner with cotton wicking cord",
      "1x Visual water level float gauge",
    ],
    approximateDimensions: "Diameter: 7.5 inches | Height: 7.8 inches",
    compatiblePlanters: [],
    careAddons: ["care-potting-mix-5kg"],
    tags: ["self-watering", "travel-friendly", "bestseller", "workspace"],
  },

  // ==========================================
  // 3. ORGANIC PLANT CARE
  // ==========================================
  {
    id: "care-potting-mix-5kg",
    slug: "enriched-organic-potting-mix-5kg",
    name: "Enriched Organic Potting Mix (5kg)",
    category: "plant-care",
    subcategory: "Soil & Media",
    price: 379,
    originalPrice: 599,
    rating: 4.96,
    reviewCount: 240,
    isBestseller: true,
    isNew: false,
    inStock: true,
    stockCount: 75,
    shortDescription: "100% soil-less, fungus-free aerated blend of washed coco peat, perlite, vermicompost & neem cake.",
    description: "Standard garden mud compacts like concrete inside indoor pots, suffocating plant roots. Our proprietary Little Plants soil-less blend is steam-sterilized and crafted with washed low-EC coconut coir, horticultural perlite for air channels, aged vermicompost for organic nutrition, and organic neem cake to ward off root fungus and gnats.",
    images: [
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Pot-O-Mix-5Kg.jpg?v=1747483880",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/MG_0042.jpg?v=1747479116",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/MG_0041.jpg?v=1747479116",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/MG_0112.jpg?v=1747479116",
    ],
    packageContents: [
      "5kg resealable zip-lock heavy-duty botanical craft pouch",
      "Formula composition: 40% Coco Coir, 25% Vermicompost, 15% Perlite, 10% Leaf Mold, 10% Neem Cake",
    ],
    approximateDimensions: "Weight: 5.0 kg | pH: 6.2 - 6.8 (ideal for Indian houseplants)",
    compatiblePlanters: ["pot-terracotta-urn", "pot-sandstone-fluted"],
    careAddons: ["care-neem-oil-spray"],
    tags: ["soil", "organic", "plant-care", "bestseller"],
  },

  {
    id: "care-neem-oil-spray",
    slug: "pure-cold-pressed-neem-oil-shield-spray",
    name: "Cold-Pressed Neem Oil Shield (250ml)",
    category: "plant-care",
    subcategory: "Organic Protection",
    price: 199,
    originalPrice: 299,
    rating: 4.91,
    reviewCount: 180,
    isBestseller: true,
    isNew: false,
    inStock: true,
    stockCount: 55,
    shortDescription: "Ready-to-use organic emulsion that repels mealybugs, spider mites, and scale insects naturally.",
    description: "Extracted from organic Indian neem kernels with cold-press milling to preserve active azadirachtin compounds. Pre-emulsified with bio-surfactants and subtle organic eucalyptus essential oil so it sprays in a uniform microscopic mist with zero harsh sulfur odor.",
    images: [
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Neem_Oil_100_ML.jpg?v=1747289957",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/DSC_1027_871dba9a-ac74-41d2-884b-580ac3c28f46.jpg?v=1747285633",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/2_5a3a360a-8c70-456c-9044-e748b87b900d.jpg?v=1747285633",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/3_d437c983-eaaa-4fc3-a636-6c9812476ff9.jpg?v=1747285633",
    ],
    packageContents: [
      "250ml recyclable amber UV-protective bottle with adjustable trigger mist sprayer",
      "Application instruction card for prevention & infestation rescue",
    ],
    approximateDimensions: "Volume: 250ml | 100% Biodegradable & Pet-safe when dry",
    compatiblePlanters: [],
    careAddons: ["care-brass-mister"],
    tags: ["organic", "pest-control", "plant-care", "bestseller"],
  },

  {
    id: "care-foliage-tonic",
    slug: "seaweed-liquid-foliage-tonic-200ml",
    name: "Liquid Seaweed Foliage Tonic (200ml)",
    category: "plant-care",
    subcategory: "Fertilizers & Nutrients",
    price: 199,
    originalPrice: 299,
    rating: 4.88,
    reviewCount: 124,
    isBestseller: false,
    isNew: false,
    inStock: true,
    stockCount: 42,
    shortDescription: "Bio-active kelp extract packed with 60+ micronutrients, encouraging rapid new leaf unfurling.",
    description: "Sourced sustainably from cold-water kelp, this rich bio-stimulant boosts chlorophyll production, fortifies cell walls against heat stress, and stimulates dormant growth nodes. Dilute just 5ml per liter of water for watering or foliar spraying.",
    images: [
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Vermicompost-5Kg.jpg?v=1770887843",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/PDP-14.jpg?v=1770887843",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Vermicompost_A_-08_68d6df5e-cdff-4381-ae7e-4ed0b03374b0.jpg?v=1770887843",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Vermicompost_A_-09.jpg?v=1770887843",
    ],
    packageContents: [
      "200ml concentrated kelp tonic with graduated measuring cap",
      "Dilution and seasonal feeding schedule",
    ],
    approximateDimensions: "Volume: 200ml | Yields up to 40 liters of plant tonic",
    compatiblePlanters: [],
    careAddons: ["care-potting-mix-5kg"],
    tags: ["fertilizer", "organic", "plant-care"],
  },

  // ==========================================
  // 4. GARDENING TOOLS
  // ==========================================
  {
    id: "care-brass-mister",
    slug: "antique-brass-botanical-mist-sprayer",
    name: "Dom Metallic Botanical Mister (500ml)",
    category: "gardening-tools",
    subcategory: "Watering & Misting",
    price: 560,
    originalPrice: 799,
    rating: 4.95,
    reviewCount: 142,
    isBestseller: true,
    isNew: true,
    inStock: true,
    stockCount: 24,
    shortDescription: "Handcrafted metallic mister that delivers an ultra-fine velvet fog for ferns and tropicals.",
    description: "An heirloom gardening accessory worthy of displaying prominently on open shelving. Made of powder-coated metal with an elegant gold metallic pump and handle. The precision plunger mechanism produces an ultra-fine micro-droplet mist that humidifies tropical foliage without soaking leaves or staining wooden furniture.",
    images: [
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Dom_Metallic_Mister.jpg?v=1751825271",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Metal_WateringCan_5.jpg?v=1751823688",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/InUse_74416d62-f1ce-49f6-bf4f-b56fe8a6f14b.jpg?v=1751823688",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/45_a7a6186d-d694-4615-b031-ca561999474f.jpg?v=1751823688",
    ],
    packageContents: [
      "1x Solid brass 300ml misting reservoir",
      "1x Precision brass plunger with ergonomic ring handle",
      "Spare rubber gasket seal",
    ],
    approximateDimensions: "Height: 6.2 inches | Diameter: 3.5 inches | Capacity: 300ml | Weight: 260g",
    compatiblePlanters: [],
    careAddons: [],
    tags: ["brass", "gift", "gardening-tools", "bestseller"],
  },

  {
    id: "tool-forged-pruners",
    slug: "carbon-steel-precision-bypass-pruners",
    name: "Hand-Forged Carbon Steel Pruners",
    category: "gardening-tools",
    subcategory: "Pruning & Cutting",
    price: 449,
    originalPrice: 999,
    rating: 4.92,
    reviewCount: 88,
    isBestseller: true,
    isNew: false,
    inStock: true,
    stockCount: 30,
    shortDescription: "Razor-sharp Japanese SK-5 high carbon steel blades with warm ashwood ergonomic handle inlays.",
    description: "Clean pruning cuts allow houseplants and bonsai to heal quickly without bruising plant tissues. These precision bypass pruners slice effortlessly through branches up to 18mm thick with smooth scissor action, secured by a solid brass safety locking latch.",
    images: [
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Heavy_Duty_Anvil_Pruner.jpg?v=1751815004",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/heavy-duty-anvil-pruner-32010533306500.jpg?v=1751815004",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/heavy-duty-anvil-pruner-32010533273732.jpg?v=1751815004",
    ],
    packageContents: [
      "1x Japanese SK-5 carbon steel bypass pruner",
      "Protective oiled leather blade sheath",
      "Blade sharpening & cleaning guide",
    ],
    approximateDimensions: "Length: 7.8 inches | Cutting Capacity: up to 18mm | Weight: 220g",
    compatiblePlanters: [],
    careAddons: [],
    tags: ["tools", "pruning", "heirloom", "bestseller"],
  },

  {
    id: "tool-copper-watering-can",
    slug: "long-spout-terracotta-copper-watering-can",
    name: "Precision Long-Spout Watering Can (5L)",
    category: "gardening-tools",
    subcategory: "Watering & Misting",
    price: 399,
    originalPrice: 799,
    rating: 4.96,
    reviewCount: 76,
    isBestseller: false,
    isNew: true,
    inStock: true,
    stockCount: 18,
    shortDescription: "Elegant slender spout that directs water precisely to the root zone without splashing.",
    description: "Designed specifically for plant parents, the extended slender spout reaches through dense foliage to deliver a steady, non-spill stream right into compact pot rims. Ergonomically balanced and durable for both indoor and balcony garden care.",
    images: [
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Premium_Garden_Watering_Can_For_Plants_5_Litre.jpg?v=1751821081",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/premium-garden-watering-can-for-plants-5-litre-32010535010468.jpg?v=1751821081",
    ],
    packageContents: [
      "1x 5-liter precision watering can",
      "Detachable fine-spray rose head for delicate seedlings",
    ],
    approximateDimensions: "Capacity: 5 Liters | Ergonomic Grip | Lightweight Polymer",
    compatiblePlanters: [],
    careAddons: [],
    tags: ["watering-can", "tools", "gift", "bestseller"],
  },

  {
    id: "tool-hori-hori-knife",
    slug: "japanese-hori-soil-weeding-trowel",
    name: "Mini Garden Bonsai Tool Set (3-Piece)",
    category: "gardening-tools",
    subcategory: "Potting & Soil Tools",
    price: 399,
    originalPrice: 599,
    rating: 4.87,
    reviewCount: 65,
    isBestseller: false,
    isNew: false,
    inStock: true,
    stockCount: 22,
    shortDescription: "Precision miniature garden trowel and rake set for repotting, loosening soil, and succulent care.",
    description: "The ideal toolkit for indoor plants, bonsai styling, and container gardening. Features rust-resistant carbon steel heads and ergonomic wooden handles for gentle soil aeration, transplanting, and root maintenance without damaging root balls.",
    images: [
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Mini_bonsai_kit.jpg?v=1747289956",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/mini-garden-bonsai-set-31263107055780.jpg?v=1747289956",
    ],
    packageContents: [
      "1x Mini Shovel / Trowel",
      "1x Mini Spade",
      "1x Mini Cultivator / Rake",
    ],
    approximateDimensions: "Tool Length: ~7 inches each | Beechwood handle & forged steel",
    compatiblePlanters: [],
    careAddons: ["care-potting-mix-5kg"],
    tags: ["tools", "repotting", "bonsai", "succulent"],
  },

  // ==========================================
  // 5. CURATED GIFTS
  // ==========================================
  {
    id: "gift-new-home-oasis",
    slug: "housewarming-green-oasis-gift-box",
    name: "Lucky Bamboo 3-Layer Auspicious Gift",
    category: "gifts",
    subcategory: "Curated Hampers",
    price: 399,
    originalPrice: 499,
    rating: 4.98,
    reviewCount: 92,
    isBestseller: true,
    isNew: true,
    inStock: true,
    stockCount: 15,
    shortDescription: "A traditional symbol of prosperity, luck, and positive energy arranged in 3 verdant tiers.",
    description: "The ultimate living blessing for friends and family moving into a new home or starting a new venture. Believed in Feng Shui and Vastu to invite good fortune, peace, and health, this 3-tier Lucky Bamboo comes carefully potted in a glass vessel with decorative stones.",
    images: [
      "/images/plants/lucky-bamboo-plant-3-layer-31793708138628.jpg",
      "/images/plants/lucky-bamboo-plant-3-layer-31793708171396.jpg",
      "/images/plants/lucky-bamboo-plant-2-layer-31793705746564.jpg"
],
    packageContents: [
      "1x 3-Layer Living Lucky Bamboo Arrangement",
      "1x Elegant Clear Glass Planter Bowl",
      "Polished decorative river pebbles",
      "Bespoke festive greeting card",
    ],
    approximateDimensions: "Height: 8-10 inches | Bowl Diameter: 4.5 inches",
    compatiblePlanters: [],
    careAddons: [],
    tags: ["gift", "lucky-bamboo", "housewarming", "vastu", "bestseller"],
  },

  {
    id: "gift-desk-ritual-kit",
    slug: "mindful-desk-ritual-greenery-set",
    name: "The Mindful Desk Greenery Ritual Set",
    category: "gifts",
    subcategory: "Tabletop Sets",
    price: 399,
    originalPrice: 599,
    rating: 4.9,
    reviewCount: 64,
    isBestseller: true,
    isNew: false,
    inStock: true,
    stockCount: 20,
    shortDescription: "Designed for work desks: lush Jade Plant in Roma Ceramic Planter.",
    description: "Transform daily desk hours into a mindful sanctuary. Studies show that having living greenery in line of sight reduces screen fatigue and anxiety by 37%. Features a compact, resilient Jade Plant paired with our minimalist Roma Ceramic Planter.",
    images: [
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/1_c9aaa3ce-c3d3-45f5-b3a9-6ef48498b3e2.jpg?v=1770026404",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Roman_5_inch-01.jpg?v=1758278420",
    ],
    packageContents: [
      "1x Desk-sized Jade Mini Plant",
      "1x 5-inch Roma Glazed Ceramic Planter with drainage",
      "1x Hand-pressed botanical desk quote postcard",
    ],
    approximateDimensions: "Height: 8 inches | Planter: 5 x 5 inches",
    compatiblePlanters: [],
    careAddons: [],
    tags: ["gift", "workspace", "desk-decor", "mindfulness"],
  },

  {
    id: "gift-corporate-verdant-trio",
    slug: "corporate-verdant-tabletop-trio",
    name: "Air-Purifier Verdant Trio (Bulk & Gifting)",
    category: "gifts",
    subcategory: "Corporate Gifting",
    price: 649,
    originalPrice: 899,
    rating: 4.93,
    reviewCount: 45,
    isBestseller: false,
    isNew: true,
    inStock: true,
    stockCount: 25,
    shortDescription: "A harmonized set of three miniature air-purifiers: Jade, Golden Money Plant, and Snake Plant.",
    description: "Ideal for festive corporate rewards, employee appreciation, and Diwali or New Year corporate hampers. Three resilient tabletop plants in matching self-watering planters with custom branding sleeve options available for orders over 10 units.",
    images: [
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/website-small-8jul-498.jpg?v=1785592392",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/website-small-8jul-726.jpg?v=1785491591",
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/1_c9aaa3ce-c3d3-45f5-b3a9-6ef48498b3e2.jpg?v=1770026404",
    ],
    packageContents: [
      "3x Living plants (Jade Plant, Snake Plant, Golden Money Plant)",
      "3x Matching tabletop pots with moisture-control wicks",
      "3x Individual botanical care passports",
      "Eco-carry luxury kraft gift packaging with cotton handles",
    ],
    approximateDimensions: "Box: 16 x 6 x 6 inches | Weight: 1.8 kg",
    compatiblePlanters: [],
    careAddons: [],
    tags: ["corporate", "gift", "air-purifying", "bulk-available"],
  },

];
