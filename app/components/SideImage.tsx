"use client";
import React from "react";

const SideImage: React.FC = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0a0d16] via-[#0f1323] to-[#10172b] text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-80 h-80 bg-blue-600/40 blur-3xl rounded-full -top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-600/40 blur-3xl rounded-full bottom-0 right-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT TEXT */}
        <div>
          <h3 className="text-5xl font-extrabold leading-tight drop-shadow-lg">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              AI Visual Harmony
            </span>{" "}
            Engine
          </h3>

          <p className="text-gray-300 text-lg mt-4">
            Experience next-level visual matching with blue-purple neural AI that
            analyzes texture, contrast, color balance & emotional tone.
          </p>

          <p className="text-gray-400 mt-3 text-base">
            Inspired by futuristic UI & holographic interface design.
          </p>
        </div>

        {/* RIGHT PANEL – GLASS CARD + NEW PYRAMID LOADER */}
        <div className="relative p-4">
          <div
            className="rounded-3xl p-10 bg-white/5 backdrop-blur-xl border border-white/10 
            hover:border-blue-400/40 transition-all shadow-[0_0_35px_rgba(66,133,244,0.25)]
            hover:shadow-[0_0_45px_rgba(66,133,244,0.45)]"
          >
            <div className="h-64 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#1b2338] to-[#111827] border border-white/10">

              {/* NEW PYRAMID LOADER */}
              <div className="pyramid-loader">
                <div className="wrapper">
                  <span className="side side1"></span>
                  <span className="side side2"></span>
                  <span className="side side3"></span>
                  <span className="side side4"></span>
                  <span className="shadow"></span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* LOADER CSS */}
      <style>{`
        .pyramid-loader {
          position: relative;
          width: 150px;
          height: 150px;
          transform-style: preserve-3d;
          transform: rotateX(-20deg);
        }

        .wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: spin 4s linear infinite;
        }

        @keyframes spin {
          100% { transform: rotateY(360deg); }
        }

        .pyramid-loader .wrapper .side {
          width: 90px;
          height: 90px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          transform-origin: center top;
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }

        .side1 {
          transform: rotateZ(-30deg) rotateY(90deg);
          background: conic-gradient(#2BDEAC, #F028FD, #D8CCE6, #2F2585);
        }

        .side2 {
          transform: rotateZ(30deg) rotateY(90deg);
          background: conic-gradient(#2F2585, #D8CCE6, #F028FD, #2BDEAC);
        }

        .side3 {
          transform: rotateX(30deg);
          background: conic-gradient(#2F2585, #D8CCE6, #F028FD, #2BDEAC);
        }

        .side4 {
          transform: rotateX(-30deg);
          background: conic-gradient(#2BDEAC, #F028FD, #D8CCE6, #2F2585);
        }

        .shadow {
          width: 70px;
          height: 70px;
          background: #8B5AD5;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          transform: rotateX(90deg) translateZ(-40px);
          filter: blur(12px);
          opacity: 0.5;
        }
      `}</style>

    </section>
  );
};

export default SideImage;
