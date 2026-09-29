import { RoomSpace } from "@/types";

export const spaces: RoomSpace[] = [
  {
    id: "space-living-room",
    name: "Living Room",
    slug: "living-room",
    title: "Sculptural Living Room Sanctuaries",
    subtitle: "Airy, bright focal points that anchor your gathering space in calm vitality.",
    description:
      "Living rooms typically offer generous ambient light and moderate air circulation. We recommend sculptural statement plants like Monstera Deliciosa, Fiddle Leaf Figs, and blooming Peace Lilies to create visual height and conversation-starting green focal points.",
    image:
      "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1200&auto=format&fit=crop",
    idealConditions: {
      light: "Bright indirect light 4-6 feet from windows",
      airflow: "Natural room circulation, away from direct AC vents",
      temperature: "22°C – 32°C (Typical Indian living zones)",
    },
    stylingTip:
      "Pair one tall floor plant (like Fiddle Leaf Fig or Areca Palm) in a handcrafted fluted pedestal with two staggered tabletop planters on sideboards or coffee tables to create natural visual rhythm.",
    recommendedPlantIds: [
      "plant-monstera-deliciosa",
      "plant-fiddle-leaf-fig",
      "plant-areca-palm-classic",
      "plant-peace-lily-pure",
      "plant-rubber-plant-burgundy",
    ],
  },
  {
    id: "space-bedroom",
    name: "Bedroom",
    slug: "bedroom",
    title: "Restful Night-Oxygen Bedrooms",
    subtitle: "Calming botanical species that release oxygen while you sleep.",
    description:
      "Unlike most plants that rest at night, CAM (Crassulacean Acid Metabolism) species like Snake Plants and ZZ Plants actively absorb carbon dioxide and emit fresh oxygen throughout the dark hours, naturally purifying your sleep environment.",
    image:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1200&auto=format&fit=crop",
    idealConditions: {
      light: "Soft morning light or curtain-filtered ambient light",
      airflow: "Gentle ceiling fan circulation",
      temperature: "20°C – 28°C",
    },
    stylingTip:
      "Keep bedside surfaces clean with a compact Snake Plant Golden Hahnii in a warm sand ceramic pot, and hang a trailing Satin Pothos on a curtain rod or high dresser.",
    recommendedPlantIds: [
      "plant-snake-golden-hahnii",
      "plant-zz-plant-emerald",
      "plant-peace-lily-pure",
      "plant-satin-pothos",
    ],
  },
  {
    id: "space-balcony",
    name: "Balcony & Verandah",
    slug: "balcony",
    title: "Sun-Drenched Balcony Paradises",
    subtitle: "Sun-loving tropicals, hardy palms, and organic kitchen garden planters.",
    description:
      "Indian balconies experience intense seasonal temperature shifts from blazing summer sunshine to lush monsoon downpours. These hardy specimens thrive with direct sun, open air, and natural weather rhythms.",
    image:
      "https://images.unsplash.com/photo-1509223197845-458d87318791?q=80&w=1200&auto=format&fit=crop",
    idealConditions: {
      light: "3 to 6 hours of direct morning or late afternoon sun",
      airflow: "Open atmospheric breezes and cross-ventilation",
      temperature: "18°C – 38°C",
    },
    stylingTip:
      "Group porous terracotta pots along balcony railings where excess water can drain freely. Mix lush Areca Palms in corners with trailing herbs and heirloom cherry tomato planters.",
    recommendedPlantIds: [
      "plant-areca-palm-classic",
      "plant-jade-mini-bonsai",
      "seeds-cherry-tomato",
      "seeds-sweet-basil",
    ],
  },
  {
    id: "space-workspace",
    name: "Workspace & Study",
    slug: "workspace",
    title: "Focus-Enhancing Workspaces",
    subtitle: "Compact, low-maintenance companions that reduce screen fatigue and mental clutter.",
    description:
      "Studies indicate that natural greenery in workspaces enhances concentration, reduces mental fatigue, and boosts creative output. These plants require almost zero maintenance and tolerate artificial office lighting with ease.",
    image:
      "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=1200&auto=format&fit=crop",
    idealConditions: {
      light: "Fluorescent, LED task lighting, or indirect room light",
      airflow: "Standard conditioned home or commercial office air",
      temperature: "20°C – 26°C",
    },
    stylingTip:
      "Position a ZZ Plant or Jade Plant just beyond your laptop screen at eye level to provide restful visual breaks during demanding zoom calls or long coding sessions.",
    recommendedPlantIds: [
      "plant-zz-plant-emerald",
      "plant-snake-golden-hahnii",
      "plant-satin-pothos",
      "plant-aglaonema-pink",
      "gift-desk-ritual-kit",
    ],
  },
];
