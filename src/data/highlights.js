export const highlightCategories = [
  { key: 'Indian', label: 'Indian' },
  { key: 'Sri Lankan', label: 'Sri Lankan' },
  { key: 'Chinese', label: 'Chinese' },
  { key: 'Café', label: 'Café' },
  { key: 'Desserts', label: 'Desserts' },
  { key: 'Drinks', label: 'Drinks' },
]

export const highlights = [
  // Indian (6)
  {
    id: 'ind-1',
    category: 'Indian',
    name: 'Butter Masala Paneer',
    description:
      'Silky tomato-butter gravy with house spice blend; finished with a light charcoal kiss.',
    spice: 'mild',
    dietary: ['Veg', 'Contains dairy'],
  },
  {
    id: 'ind-2',
    category: 'Indian',
    name: 'Tandoori Chicken (Layer3 style)',
    description:
      'Yogurt marinade, roasted aromatics, smoky edges — made for sharing at the table.',
    spice: 'medium',
    dietary: ['Halal-friendly (ask)'],
  },
  {
    id: 'ind-3',
    category: 'Indian',
    name: 'Pepper Prawn Roast',
    description:
      'Black pepper forward, glossy roast masala, finished with curry leaves and lime.',
    spice: 'hot',
    dietary: ['Seafood'],
  },
  {
    id: 'ind-4',
    category: 'Indian',
    name: 'Jeera Rice Bowl',
    description:
      'Fluffy cumin rice with a warm, toasted aroma — pairs with anything on the table.',
    spice: 'mild',
    dietary: ['Veg', 'Gluten-free (ask)'],
  },
  {
    id: 'ind-5',
    category: 'Indian',
    name: 'Garlic Naan + Signature Dip',
    description:
      'Soft, blistered naan with roasted garlic; served with a premium house dip.',
    spice: 'mild',
    dietary: ['Veg', 'Contains gluten'],
  },
  {
    id: 'ind-6',
    category: 'Indian',
    name: 'Hyderabadi-Style Dum Biryani',
    description:
      'Slow-cooked layers of rice and spice — fragrant, balanced, and deeply satisfying.',
    spice: 'medium',
    dietary: ['Halal-friendly (ask)'],
  },

  // Sri Lankan (6)
  {
    id: 'sl-1',
    category: 'Sri Lankan',
    name: 'Jaffna Crab Curry (seasonal)',
    description:
      'Bold roast spice, tamarind brightness, and a clean finish — ask for availability.',
    spice: 'hot',
    dietary: ['Seafood'],
  },
  {
    id: 'sl-2',
    category: 'Sri Lankan',
    name: 'Kottu — Classic Street to Premium',
    description:
      'A Layer3 take on a local favourite: crisp, aromatic, and made to order.',
    spice: 'medium',
    dietary: ['Contains gluten (ask)'],
  },
  {
    id: 'sl-3',
    category: 'Sri Lankan',
    name: 'Coconut Sambol & Pol Roti',
    description:
      'Fresh coconut, lime, chilli; paired with warm pol roti for a comforting start.',
    spice: 'medium',
    dietary: ['Veg'],
  },
  {
    id: 'sl-4',
    category: 'Sri Lankan',
    name: 'Brinjal Moju',
    description:
      'Sweet-sour eggplant with gentle spice and crunch — a perfect side for rice.',
    spice: 'mild',
    dietary: ['Veg'],
  },
  {
    id: 'sl-5',
    category: 'Sri Lankan',
    name: 'Chicken Curry — Jaffna Roast Masala',
    description:
      'A deeper, roast-forward curry with a balanced heat and a clean, modern finish.',
    spice: 'hot',
    dietary: ['Halal-friendly (ask)'],
  },
  {
    id: 'sl-6',
    category: 'Sri Lankan',
    name: 'Cashew & Green Peas Curry',
    description:
      'Creamy cashew base, gentle spice, and a soft sweetness — comfort done right.',
    spice: 'mild',
    dietary: ['Veg', 'Contains nuts'],
  },

  // Chinese (6)
  {
    id: 'cn-1',
    category: 'Chinese',
    name: 'Chilli Chicken (Jaffna heat option)',
    description:
      'Crisp chicken tossed with garlic, spring onion, and sauce that clings perfectly.',
    spice: 'medium',
    dietary: ['Halal-friendly (ask)'],
  },
  {
    id: 'cn-2',
    category: 'Chinese',
    name: 'Sichuan Pepper Prawns',
    description:
      'Bright, peppery aromatics with a warming bite — bold but balanced.',
    spice: 'hot',
    dietary: ['Seafood'],
  },
  {
    id: 'cn-3',
    category: 'Chinese',
    name: 'Wok-Fried Vegetable Noodles',
    description:
      'High-heat wok char, crisp vegetables, and a clean sauce — light, satisfying.',
    spice: 'mild',
    dietary: ['Veg', 'Contains gluten'],
  },
  {
    id: 'cn-4',
    category: 'Chinese',
    name: 'Fried Rice — Trio Style',
    description:
      'A Layer3 signature: subtle aromatics, clean wok finish, and generous texture.',
    spice: 'mild',
    dietary: ['Gluten-free (ask)'],
  },
  {
    id: 'cn-5',
    category: 'Chinese',
    name: 'Hot Garlic Beef (or Mushroom)',
    description:
      'Saucy, garlicky, and glossy — served with rice or noodles. Ask for veg option.',
    spice: 'medium',
    dietary: ['Contains soy (ask)'],
  },
  {
    id: 'cn-6',
    category: 'Chinese',
    name: 'Sweet & Sour — Premium Pineapple',
    description:
      'Bright sweet-sour glaze with crisp bite — a crowd-pleaser for family tables.',
    spice: 'mild',
    dietary: ['Contains gluten (ask)'],
  },

  // Café (6)
  {
    id: 'cf-1',
    category: 'Café',
    name: 'Specialty Flat White',
    description:
      'Smooth, velvety microfoam with premium espresso — simple, clean, and crafted right.',
    spice: 'mild',
    dietary: ['Contains dairy', 'Veg'],
  },
  {
    id: 'cf-2',
    category: 'Café',
    name: 'Cinnamon Roll (fresh-baked)',
    description:
      'Soft, fluffy, and sticky-sweet — topped with cream cheese glaze, served warm.',
    spice: 'mild',
    dietary: ['Contains gluten', 'Contains dairy'],
  },
  {
    id: 'cf-3',
    category: 'Café',
    name: 'Layer3 Signature Brownie',
    description:
      'Dense, fudgy chocolate with a crackled top — slightly warm, rich finish.',
    spice: 'mild',
    dietary: ['Contains gluten', 'Contains dairy', 'Contains egg'],
  },
  {
    id: 'cf-4',
    category: 'Café',
    name: 'Iced Caramel Macchiato',
    description:
      'Espresso over cold milk with smooth caramel swirl — refreshing and balanced.',
    spice: 'mild',
    dietary: ['Contains dairy', 'Veg'],
  },
  {
    id: 'cf-5',
    category: 'Café',
    name: 'Croissant Sandwich (chicken or veg)',
    description:
      'Flaky buttery croissant filled with fresh greens, premium fillings, and light mayo.',
    spice: 'mild',
    dietary: ['Contains gluten', 'Ask for veg option'],
  },
  {
    id: 'cf-6',
    category: 'Café',
    name: 'Fresh Fruit Smoothie Bowl',
    description:
      'Thick smoothie base topped with granola, fresh fruit, honey drizzle — vibrant, light.',
    spice: 'mild',
    dietary: ['Veg', 'Contains nuts (ask)'],
  },

  // Drinks (4)
  {
    id: 'dr-1',
    category: 'Drinks',
    name: 'Iced Lime & Mint Cooler',
    description: 'Fresh lime, mint, and a clean sparkle — the Layer3 refresh.',
    spice: 'mild',
    dietary: ['Veg'],
  },
  {
    id: 'dr-2',
    category: 'Drinks',
    name: 'Ginger Tamarind Fizz',
    description: 'Tangy tamarind, warming ginger, and a crisp finish.',
    spice: 'mild',
    dietary: ['Veg'],
  },
  {
    id: 'dr-3',
    category: 'Drinks',
    name: 'Creamy Mango Lassi',
    description: 'Classic, thick, and smooth — made with ripe mango and yogurt.',
    spice: 'mild',
    dietary: ['Veg', 'Contains dairy'],
  },
  {
    id: 'dr-4',
    category: 'Drinks',
    name: 'Iced Ceylon Tea',
    description: 'Bold tea brewed strong, lightly sweetened, served over ice.',
    spice: 'mild',
    dietary: ['Veg'],
  },

  // Desserts (4)
  {
    id: 'ds-1',
    category: 'Desserts',
    name: 'Watalappan (house style)',
    description: 'Creamy jaggery custard with warm spice — rich, but not heavy.',
    spice: 'mild',
    dietary: ['Contains dairy', 'Contains egg (ask)'],
  },
  {
    id: 'ds-2',
    category: 'Desserts',
    name: 'Pistachio Kulfi',
    description: 'Slow-frozen, dense, and aromatic with a premium nut finish.',
    spice: 'mild',
    dietary: ['Contains dairy', 'Contains nuts'],
  },
  {
    id: 'ds-3',
    category: 'Desserts',
    name: 'Chocolate Lava (warm)',
    description: 'Soft center, crisp edges — served warm for a classic finish.',
    spice: 'mild',
    dietary: ['Contains gluten', 'Contains dairy'],
  },
  {
    id: 'ds-4',
    category: 'Desserts',
    name: 'Coconut Panna Cotta',
    description: 'Light coconut set cream with a tropical note and clean sweetness.',
    spice: 'mild',
    dietary: ['Veg', 'Contains dairy'],
  },
]
