import React, { useState, useRef } from "react";
import { ChevronRight, ArrowRight, ChevronLeft } from "lucide-react";

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
    }, 200);
  };

  return (
<nav className="w-full flex items-center justify-between px-8 py-4 animated-gradient bg-white relative z-50">


  {/* LOGO */}
      {/* <div className="text-xl text-white hover:text-gray-300 font-semibold">Stripe</div> */}
{/* LOGO */}
<div className="text-xl text-white font-bold text-[24px] mr-4 md:ml-50 ml-0 mb-1">
  Stripe
</div>



      {/* DESKTOP MENU */}
      {/* <ul className="hidden md:flex items-center gap-6 text-[15px] font-medium relative"> */}
      <ul className="hidden md:flex items-center gap-6 text-[15px] font-medium relative flex-1 mr-60   justify-center">


        <li className="cursor-pointer hover:text-gray-300 text-white flex items-center gap-1">
          Products <ChevronDown size={15} />
        </li>

        {/* SOLUTIONS MENU */}
        <li
          className="cursor-pointer hover:text-gray-300 text-white relative flex items-center gap-1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Solutions
          <ChevronDown
            size={15}
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />

          {/* MEGA MENU */}
          <div
            className={`absolute left-0 top-8 w-[720px] bg-white shadow-xl rounded-xl p-6 
            transition-all duration-300 ease-in-out transform origin-top 
            ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {solutionsSections.map((section, i) => (
              <div
                key={section.title}
                className={`pb-6 ${i !== solutionsSections.length - 1 ? "border-b border-gray-200" : ""}`}
              >
                <br />
                <h3 className="text-xs font-semibold text-black mb-4">{section.title}</h3>
                <div className="grid grid-cols-2 gap-y-4 gap-x-10 hover:text-black">
                  {section.items.map((item) => {
                    const Icon = iconMap[item.icon];
                    return (
                  
                      <div
                        key={item.label}
                        className="flex items-center gap-2 text-gray-700 cursor-pointer group"
                      >
                        
                        {Icon && (
                          <Icon
                            size={18}
                            className="text-gray-600 transition-colors duration-200 group-hover:text-black"
                          />
                        )}
                        <span className="text-[15px] transition-colors duration-200 group-hover:text-black">
                          {item.label}
                          
                        </span>
                        

                        
                      </div>
                      
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </li>

        <li className="cursor-pointer hover:text-gray-300 text-white flex items-center gap-1">
          Developers <ChevronDown size={15} />
        </li>
        <li className="cursor-pointer hover:text-gray-300 text-white flex items-center gap-1">
          Resources <ChevronDown size={15} />
        </li>
        <li className="cursor-pointer hover:text-gray-300 text-white flex items-center gap-1">
          Pricing <ChevronDown size={15} />
        </li>
      </ul>

      {/* DESKTOP BUTTONS */}
      <div className="hidden md:flex items-center gap-4 ml-auto">
        <button className="cursor-pointer font-semibold text-white flex items-center gap-1">
          <span className="text-white hover:text-gray-300 icon-switch flex items-center gap-2">
            Sign in
            <ChevronRight size={15} className="icon-default" />
            <ArrowRight size={15} className="icon-hover" />
          </span>
        </button>

        <button className="bg-white px-4 py-2 rounded-full font-semibold mr-50 text-[15px] text-blue-700 flex items-center gap-2">
          <span className="flex items-center gap-2 text-5sec-color icon-switch">
            Contact sales
            <ChevronRight size={15} className="icon-default" />
            <ArrowRight size={15} className="icon-hover" />
          </span>
        </button>
      </div>

      {/* MOBILE TOGGLE */}
<div className="md:hidden ml-auto">
  <button onClick={() => setMobileMenuOpen(true)}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  </button>
</div>


      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-xl  text-blue-500 font-bold">Stripe</div>
            <button onClick={() => setMobileMenuOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <hr className="border-t-1 border-gray-300 border-dashed mb-4" />

          {/* SCROLLABLE MENU ITEMS */}
          <div className="flex-1 overflow-y-auto">
            {!mobileSolutionsOpen ? (
              <ul className="space-y-4 text-[16px] font-medium">
                <li className="text-[20px] text-gray-600 hover:text-black">Products</li>
                <hr className="border-t-1 border-gray-300 border-dashed my-4" />
                <li
                  onClick={() => setMobileSolutionsOpen(true)}
                  className="text-[20px] text-gray-600 hover:text-black flex justify-between items-center cursor-pointer"
                >
                  Solutions
                  <ChevronRight size={20} className="icon-default" />
                </li>
                <hr className="border-t-1 border-gray-300 border-dashed my-4" />
                <li className="text-[20px] text-gray-600 hover:text-black">Developers</li>
                <hr className="border-t-1 border-gray-300 border-dashed my-4" />
                <li className="text-[20px] text-gray-600 hover:text-black">Resources</li>
                <hr className="border-t-1 border-gray-300 border-dashed my-4" />
                <li className="text-[20px] text-gray-600 hover:text-black">Pricing</li>
                <hr className="border-t-1 border-gray-300 border-dashed my-4" />
              </ul>
            ) : (
              <div>
               <button 
  onClick={() => setMobileSolutionsOpen(false)} 
  className="mb-4 flex items-center gap-2 text-blue-500 font-medium"
>
  <ChevronLeft size={15} className="icon-default text-blue-500" /> 
  Back
</button>


                {solutionsSections.map((section) => (
                  <div key={section.title} className="mb-4">
                    <h4 className="font-semibold text-[13px] text-gray-800">{section.title}</h4>
                    <ul className="mt-2 space-y-2">
                      {section.items.map((item) => {
                        const Icon = iconMap[item.icon];
                        return (
                          <li key={item.label} className="font-semibold text-[16px] flex items-center gap-2 text-black">
                            {Icon && <Icon className="text-gray-500" size={18} />}
                            {item.label}
                          </li>
                        );
                      })}
                    </ul>
                <hr className="border-t-4 border-gray-100  my-4" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* BOTTOM BUTTONS */}
    {/* BOTTOM BUTTONS */}
<div className="mt-6 flex justify-center gap-4">
    <button className="hover:bg-blue-950 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold text-[14px] transition-all duration-300">
      <span className="text-white  icon-switch flex items-center gap-2">
    Start now

    {/* Default icon */}
    <ChevronRight size={15} className="icon-default" />

    {/* Hover icon */}
     <ArrowRight size={15} className="icon-hover" />
   </span>
    
   </button>
 <button className="bg-white px-4 py-2 rounded-full font-semibold text-[15px]">
   <span className="text-blue-600 hover:text-gray-500 icon-switch flex items-center gap-2">
    Contact sales

   {/* Default icon */}
    <ChevronRight size={15} className="icon-default" />

    {/* Hover icon */}
     <ArrowRight size={15} className="icon-hover" />
   </span>
 </button>
</div>

        </div>
      )}
    </nav>
  );
}
