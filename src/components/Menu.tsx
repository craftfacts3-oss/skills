"use client";

import { useState } from "react";

type MenuItem = { name: string; description: string; price: string };
type Category = { id: string; label: string; items: MenuItem[] };

const categories: Category[] = [
  {
    id: "breakfast",
    label: "Breakfast",
    items: [
      {
        name: "Chilaquiles Verdes",
        description: "Crispy tortillas in salsa verde, crema, queso fresco, and a fried egg",
        price: "$12",
      },
      {
        name: "Huevos Rancheros",
        description: "Two eggs on corn tortillas, ranchera salsa, refried beans, and cotija",
        price: "$11",
      },
      {
        name: "Machaca con Huevo",
        description: "Shredded beef scrambled with eggs, peppers, onions, and tomato",
        price: "$13",
      },
      {
        name: "Pan Dulce Plate",
        description: "Selection of fresh pan dulce with café de olla",
        price: "$8",
      },
      {
        name: "Breakfast Burrito",
        description: "Scrambled eggs, chorizo, potato, cheese, and salsa in a flour tortilla",
        price: "$10",
      },
      {
        name: "Tamales de Elote",
        description: "Sweet corn tamales topped with crema and honey",
        price: "$9",
      },
    ],
  },
  {
    id: "garnachas",
    label: "Garnachas",
    items: [
      {
        name: "Tostadas de Tinga",
        description: "Chipotle chicken tinga on a crispy tostada with avocado and pickled onion",
        price: "$14",
      },
      {
        name: "Sopes Trio",
        description: "Three hand-pressed sopes with your choice of filling",
        price: "$15",
      },
      {
        name: "Enchiladas Rojas",
        description: "Three enchiladas in ancho chili sauce, topped with queso and crema",
        price: "$16",
      },
      {
        name: "Tacos de Canasta",
        description: "Three basket-style tacos: potato, bean, and chicharrón",
        price: "$10",
      },
      {
        name: "Gorditas de Chicharrón",
        description: "Thick masa pockets stuffed with pork crackling and salsa verde",
        price: "$12",
      },
      {
        name: "Tlayuda",
        description: "Large crispy tortilla with beans, Oaxacan cheese, and your choice of protein",
        price: "$18",
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    items: [
      {
        name: "Agua de Jamaica",
        description: "House hibiscus water with a hint of cinnamon",
        price: "$4",
      },
      {
        name: "Horchata",
        description: "Classic rice and cinnamon horchata",
        price: "$4",
      },
      {
        name: "Café de Olla",
        description: "Traditional Mexican coffee brewed with cinnamon and piloncillo",
        price: "$4",
      },
      {
        name: "Mezcal Paloma",
        description: "Mezcal, grapefruit juice, lime, and a salted rim",
        price: "$13",
      },
      {
        name: "Michelada",
        description: "House-spiced beer cocktail with clamato and fresh lime",
        price: "$9",
      },
      {
        name: "Margarita de la Casa",
        description: "Blanco tequila, lime, agave, and a Tajín rim",
        price: "$12",
      },
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState("breakfast");
  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-[var(--color-brand-teal)] text-xs tracking-[0.3em] uppercase mb-3">
            What We Serve
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white tracking-wider">
            THE MENU
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-12 bg-[var(--color-brand-gold)]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[var(--color-brand-gold)]" />
            <div className="h-px w-12 bg-[var(--color-brand-gold)]" />
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-6 py-2.5 text-sm font-medium tracking-widest uppercase rounded-full transition-colors ${
                active === cat.id
                  ? "bg-[var(--color-brand-gold)] text-black"
                  : "border border-white/20 text-white/60 hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {current.items.map((item) => (
            <div
              key={item.name}
              className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[var(--color-brand-teal)]/40 transition-colors"
            >
              <div className="flex justify-between items-start gap-3 mb-2">
                <h3 className="font-semibold text-white text-base leading-tight">{item.name}</h3>
                <span className="shrink-0 text-[var(--color-brand-gold)] font-medium text-sm">
                  {item.price}
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-sm mt-10">
          Menu items subject to change · Please inform your server of any allergies
        </p>
      </div>
    </section>
  );
}
