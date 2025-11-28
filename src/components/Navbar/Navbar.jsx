import React, { useState, useRef } from "react";
import {
  Building2,
  Rocket,
  Wallet,
  Smartphone,
  ShoppingCart,
  Store,
  Layers,
  LayoutGrid,
  BarChart3,
  Cloud,
  Globe,
  Sparkles,
  Play,
  Lightbulb,
  Heart,
  Plane,
  ShoppingBag,
  Umbrella,
  Package,
  Users,
  ChevronDown,
} from "lucide-react";

const solutionsSections = [
  {
    title: "BY STAGE",
    items: [
      { label: "Enterprises", icon: "building" },
      { label: "Startups", icon: "rocket" },
    ],
  },
  {
    title: "BY USE CASE",
    items: [
      { label: "Crypto", icon: "crypto" },
      { label: "In-app payments", icon: "mobile" },
      { label: "E-commerce", icon: "cart" },
      { label: "Marketplaces", icon: "store" },
      { label: "Embedded finance", icon: "layers" },
      { label: "Platforms", icon: "grid" },
      { label: "Finance automation", icon: "chart" },
      { label: "SaaS", icon: "cloud" },
      { label: "Global businesses", icon: "globe" },
    ],
  },
  {
    title: "BY INDUSTRY",
    items: [
      { label: "AI companies", icon: "ai" },
      { label: "Media and entertainment", icon: "play" },
      { label: "Creator economy", icon: "creator" },
      { label: "Non-profits", icon: "heart" },
      { label: "Hospitality, travel and leisure", icon: "plane" },
      { label: "Retail", icon: "bag" },
      { label: "Insurance", icon: "umbrella" },
    ],
  },
  {
    title: "ECOSYSTEM",
    items: [
      { label: "Stripe App Marketplace", icon: "marketplace" },
      { label: "Partners", icon: "partners" },
    ],
  },
];

const iconMap = {
  building: Building2,
  rocket: Rocket,
  crypto: Wallet,
  mobile: Smartphone,
  cart: ShoppingCart,
  store: Store,
  layers: Layers,
  grid: LayoutGrid,
  chart: BarChart3,
  cloud: Cloud,
  globe: Globe,
  ai: Sparkles,
  play: Play,
  creator: Lightbulb,
  heart: Heart,
  plane: Plane,
  bag: ShoppingBag,
  umbrella: Umbrella,
  marketplace: Package,
  partners: Users,
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const closeTimeout = useRef(null);

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpen(false);
    }, 200); // Delay of 200ms before closing
  };

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 animated-gradient bg-white relative z-50">
      {/* <nav className="w-full flex items-center justify-between py-4 px-8 bg-gradient-to-r from-[#ff8a00] via-[#f83f74] to-[#246bff] saturate-150 brightness-110 relative z-50"> */}

      {/* Logo */}
      <div className="text-xl text-white font-semibold">Stripe</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium relative">
        <li className="cursor-pointer hover:text-gray-300 text-white">
          Products
          
        </li>

        {/* Solutions */}
        <li
          className="cursor-pointer hover:text-gray-300 text-white relative flex items-center gap-1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          tabIndex={0}
        >
          Solutions
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
          {/* Mega Menu */}
          <div
            className={`absolute left-0 top-8 w-[600px] bg-white shadow-xl rounded-lg p-6 grid grid-cols-2 gap-6
              transition-all duration-300 ease-in-out
              transform origin-top
              ${
                open
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }
            `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {solutionsSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-gray-800 mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => {
                    const Icon = iconMap[item.icon];
                    return (
                      <li
                        key={item.label}
                        className="flex items-center gap-2 text-gray-600 hover:text-black cursor-pointer transition-colors duration-200"
                      >
                        {Icon && <Icon size={16} />}
                        <span className="text-[14px]">{item.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </li>

        <li className="cursor-pointer hover:text-gray-300 text-white">
          Developers
        </li>
        <li className="cursor-pointer hover:text-gray-300 text-white">
          Resources
        </li>
        <li className="cursor-pointer hover:text-gray-300 text-white">
          Pricing
        </li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button className="text-white text-[15px] hover:text-black">
          Sign in
        </button>
        <button className="bg-white text-orange-500 px-4 py-2 rounded-full text-[15px] hover:bg-black/80">
          Contact sales
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="text-xl text-blue-500 font-bold">Stripe</div>

            <button onClick={() => setMobileMenuOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <hr className="border-t-1 border-gray-300 border-dashed my-4" />

          {!mobileSolutionsOpen ? (
            <ul className="space-y-4 text-[16px] font-medium">
              <li>Products</li>
              <li
                onClick={() => setMobileSolutionsOpen(true)}
                className="flex justify-between items-center cursor-pointer"
              >
                Solutions <span>&gt;</span>
              </li>
              <li>Developers</li>
              <li>Resources</li>
              <li>Pricing</li>
              <li className="mt-6">
                <button className="w-full bg-white text-orange-500 px-4 py-2 rounded-full mb-2">
                  Contact sales
                </button>
                <button className="w-full text-gray-700 px-4 py-2 rounded-full border border-gray-300">
                  Sign in
                </button>
              </li>
            </ul>
          ) : (
            <div>
              <button
                onClick={() => setMobileSolutionsOpen(false)}
                className="mb-4 flex items-center gap-2 text-gray-700"
              >
                &lt; Back
              </button>
              {solutionsSections.map((section) => (
                <div key={section.title} className="mb-4">
                  <h3 className="font-semibold mb-2">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => {
                      const Icon = iconMap[item.icon];
                      return (
                        <li
                          key={item.label}
                          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200"
                        >
                          {Icon && <Icon size={16} />}
                          {item.label}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
