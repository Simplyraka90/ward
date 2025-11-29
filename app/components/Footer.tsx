"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#060a13] text-gray-300 pt-28 pb-12 overflow-hidden">

      {/* TOP WAVE SVG */}
      <div className="absolute top-0 left-0 w-full opacity-20">
        <svg viewBox="0 0 1440 120">
          <path
            fill="url(#grad)"
            d="M0,96L60,74.7C120,53,240,11,360,16C480,21,600,75,720,96C840,117,960,107,1080,112C1200,117,1320,139,1380,150L1440,160V0H0Z"
          ></path>
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4f7cff" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Glow Lights */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="w-[420px] h-[420px] bg-blue-600/40 blur-[140px] rounded-full absolute -top-10 -left-20" />
        <div className="w-[380px] h-[380px] bg-purple-600/40 blur-[130px] rounded-full absolute bottom-0 right-0" />
      </div>

      {/* GRID CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-14">

        {/* BRAND */}
        <div className="group">
          <h2 className="text-3xl font-extrabold text-white tracking-wide group-hover:text-blue-400 transition-all duration-300">
            AI Smart Wardrobe
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Your personal AI fashion stylist. Upload your outfit and get smart,
            stylish suggestions powered by machine intelligence.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5 border-l-4 border-blue-500 pl-3">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-400">
            {[
              { name: "Home", href: "#" },
              { name: "Upload", href: "#suggestion" },
              { name: "AI Looks", href: "#" },
              { name: "About", href: "#about" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="hover:text-blue-400 hover:translate-x-2 inline-block transition-all duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5 border-l-4 border-purple-500 pl-3">
            Resources
          </h3>
          <ul className="space-y-3 text-gray-400">
            {["Docs", "Pricing", "FAQs", "Support"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-purple-400 hover:translate-x-2 inline-block transition-all duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5 border-l-4 border-blue-400 pl-3">
            Connect With Us
          </h3>

          <div className="flex items-center gap-4 text-2xl mt-3">
            {[
              { icon: "fa-facebook", color: "hover:text-blue-400" },
              { icon: "fa-instagram", color: "hover:text-pink-500" },
              { icon: "fa-github", color: "hover:text-gray-200" },
              { icon: "fa-linkedin", color: "hover:text-blue-500" },
            ].map((item, i) => (
              <a
                key={i}
                href="#"
                className={`transition-all duration-300 ${item.color} hover:scale-125`}
              >
                <i className={`fa-brands ${item.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="relative mt-20 text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
        © {new Date().getFullYear()}  
        <span className="text-gray-400"> AI Smart Wardrobe</span> — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
