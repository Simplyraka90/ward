"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#0a0d16] text-white py-28 md:py-40"
    >
      {/* Background Circuits */}
      <div className="absolute inset-0 opacity-10 bg-[url('/circuit.png')] bg-cover bg-center"></div>

      {/* Gradient Glows */}
      <div className="absolute -top-10 left-0 w-80 h-80 bg-blue-600/40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/40 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT TEXT AREA */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Your AI Wardrobe
            </span>{" "}
            Re-Invented
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-xl">
            Upload your outfit & get hyper-personalized AI fashion matches 
            based on global trend analysis.
          </p>

          <a
            href="#suggestion"
            className="inline-block px-12 py-4 text-lg font-semibold rounded-full
            bg-gradient-to-r from-blue-600 to-purple-600 shadow-[0_0_25px_rgba(59,130,246,0.7)]
            hover:shadow-[0_0_35px_rgba(59,130,246,0.9)]
            hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Start Now
          </a>
        </div>

        {/* RIGHT: GENERATING LOADER */}
        <div className="relative flex items-center justify-center">

          <div className="loader-wrapper">
            <span className="loader-letter">G</span>
            <span className="loader-letter">e</span>
            <span className="loader-letter">n</span>
            <span className="loader-letter">e</span>
            <span className="loader-letter">r</span>
            <span className="loader-letter">a</span>
            <span className="loader-letter">t</span>
            <span className="loader-letter">i</span>
            <span className="loader-letter">n</span>
            <span className="loader-letter">g</span>

            <div className="loader" />
          </div>

        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        .loader-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 120px;
          margin: 2rem auto;

          font-family: "Poppins", sans-serif;
          font-size: 1.6em;
          font-weight: 600;
          user-select: none;
          color: #fff;

          transform: scale(1.6);
        }

        .loader {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          z-index: 1;

          background-color: transparent;
          mask: repeating-linear-gradient(
            90deg,
            transparent 0,
            transparent 6px,
            black 7px,
            black 8px
          );
        }

        .loader::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          background-image: radial-gradient(circle at 50% 50%, #ff0 0%, transparent 50%),
            radial-gradient(circle at 45% 45%, #f00 0%, transparent 45%),
            radial-gradient(circle at 55% 55%, #0ff 0%, transparent 45%),
            radial-gradient(circle at 45% 55%, #0f0 0%, transparent 45%),
            radial-gradient(circle at 55% 45%, #00f 0%, transparent 45%);
          mask: radial-gradient(
            circle at 50% 50%,
            transparent 0%,
            transparent 10%,
            black 25%
          );
          animation:
            transform-animation 2s infinite alternate,
            opacity-animation 4s infinite;
          animation-timing-function: cubic-bezier(0.6, 0.8, 0.5, 1);
        }

        @keyframes transform-animation {
          0% { transform: translate(-55%); }
          100% { transform: translate(55%); }
        }

        @keyframes opacity-animation {
          0%,100% { opacity: 0; }
          15% { opacity: 1; }
          65% { opacity: 0; }
        }

        .loader-letter {
          display: inline-block;
          opacity: 0;
          animation: loader-letter-anim 4s infinite linear;
          z-index: 2;
        }
        .loader-letter:nth-child(1) { animation-delay: 0.1s; }
        .loader-letter:nth-child(2) { animation-delay: 0.205s; }
        .loader-letter:nth-child(3) { animation-delay: 0.31s; }
        .loader-letter:nth-child(4) { animation-delay: 0.415s; }
        .loader-letter:nth-child(5) { animation-delay: 0.521s; }
        .loader-letter:nth-child(6) { animation-delay: 0.626s; }
        .loader-letter:nth-child(7) { animation-delay: 0.731s; }
        .loader-letter:nth-child(8) { animation-delay: 0.837s; }
        .loader-letter:nth-child(9) { animation-delay: 0.942s; }
        .loader-letter:nth-child(10){ animation-delay: 1.047s; }

        @keyframes loader-letter-anim {
          0% { opacity:0; }
          5% { opacity:1; text-shadow:0 0 6px #fff; transform:scale(1.1) translateY(-2px); }
          20% { opacity:0.2; }
          100% { opacity:0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
