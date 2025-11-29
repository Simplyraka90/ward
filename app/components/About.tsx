"use client";
import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-[#0A0F1A] relative overflow-hidden text-white"
    >
      {/* Soft background shapes */}
      <div className="absolute -top-28 -left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute top-40 -right-20 w-72 h-72 bg-gray-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16
          bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          The Technology Behind Smart Waradope
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* CARD TEMPLATE */}
          {[
            {
              title: "Deep Color Intelligence",
              desc: "AI analyses outfit patterns and shades to always choose colors that visually match while enhancing your unique look.",
            },
            {
              title: "Smart Fabric Detection",
              desc: "Understands texture, material thickness and drape—ensuring every outfit combination feels natural and premium.",
            },
            {
              title: "Trend Forecasting",
              desc: "AI predicts upcoming fashion trends using global datasets, so your outfits are always future-ready.",
            },
            {
              title: "Face & Body Fit Engine",
              desc: "Identifies face shape & proportions to recommend silhouettes that match your natural style.",
            },
            {
              title: "Personal Style Memory",
              desc: "Learns your preferences, liked outfits, and past usage to deliver better recommendations every time.",
            },
            {
              title: "Mood-Based Outfits",
              desc: "Choose a mood—Minimal, Street, Classy, Formal—and AI auto-generates full outfit combinations.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl 
                bg-[#111827]/40 border border-white/10
                backdrop-blur-xl 
                shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]
                hover:-translate-y-2 hover:scale-[1.02]
                transition-all duration-400"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {card.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default About;
