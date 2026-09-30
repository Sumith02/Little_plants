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
      "/images/plants/monstera-deliciosa-plant-31793362174084.jpg",
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
      "/images/plants/snake-plant-golden-hahnii-31771655864452.jpg",
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
    name: "Sunroom & Window Nook",
    slug: "balcony",
    title: "Sunlit Window Nooks & Indoor Balconies",
    subtitle: "Sun-loving indoor tropicals, hardy palms, and architectural foliage.",
    description:
      "Enclosed balconies and large sunny window nooks provide glorious bright natural light. These hardy indoor specimens thrive with filtered sun, gentle air breezes, and indoor room comfort.",
    image:
      "/images/plants/areca-palm-plant-31828365279364.jpg",
    idealConditions: {
      light: "3 to 5 hours of bright morning sunlight or filtered afternoon light",
      airflow: "Open window breezes and natural cross-ventilation",
      temperature: "20°C – 32°C",
    },
    stylingTip:
      "Group porous terracotta pots along window ledges where daylight is plentiful. Mix lush Areca Palms in corners with architectural Jade Plants and Rubber Plants.",
    recommendedPlantIds: [
      "plant-areca-palm-classic",
      "plant-jade-mini-bonsai",
      "plant-rubber-plant-burgundy",
      "plant-monstera-deliciosa",
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
      "/images/plants/zz-plant-31792473505924.jpg",
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
