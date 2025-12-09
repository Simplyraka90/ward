"use client";

import React, { useState } from "react";

const UploadSuggestion: React.FC = () => {
  const [shirtPreview, setShirtPreview] = useState<string | null>(null);
  const [pantPreview, setPantPreview] = useState<string | null>(null);

  const [shirtFile, setShirtFile] = useState<File | null>(null);
  const [pantFile, setPantFile] = useState<File | null>(null);

  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loadingAI, setLoadingAI] = useState(false);
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  // STORE 20 AI IMAGES HERE
 const aiImages = [
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765216867/ai_look_2_tekicf.jpg",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765216859/shirt2_goy0gt.jpg",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765216857/shiet90_lrmdft.jpg",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765216857/ai_look_7_e6wbdg.jpg",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765216857/ai_look1_jjo5wa.jpg",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765216857/off90_rng6o3.webp",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765216856/ailook3_nxshe6.jpg",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765216855/ailook4_sjra65.jpg",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765216855/shirt3_mp1rjg.webp",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765216854/off5_tbzqj5.webp",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765216853/shirt_e8puxv.webp",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765216852/off09_gyeaul.webp",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765216852/dhn_wxmczy.jpg",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765216850/off8_locdl5.webp",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765216848/off3_my8azc.webp",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765216848/sjhirtfg987_qyq91q.jpg",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765216847/off6_s43n4h.webp",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765216839/download_2_wkkrz2.jpg",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765216838/iff2_ylnx22.jpg",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765216838/iff2_ylnx22.jpg",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765216837/ai_look_5_it9k48.jpg",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765216836/shirt8_fclrwk.jpg",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765216835/shirt44_ujvo2t.webp",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765221128/loll_kut1nh.webp",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765221128/loll_kut1nh.webp",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765221128/loll9_hmpbbq.webp",
  "https://res.cloudinary.com/dfspozz8u/image/upload/v1765221128/lkjj_ywgswk.jpg",
];

  // SHUFFLE FUNCTION
  const shuffleArray = (array: string[]) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const handleShirtUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setShirtFile(file);
      setShirtPreview(URL.createObjectURL(file));
    }
  };

  const handlePantUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPantFile(file);
      setPantPreview(URL.createObjectURL(file));
    }
  };

  const generateAI = () => {
    if (!shirtPreview || !pantPreview) {
      alert("Upload both Shirt & Pant first.");
      return;
    }

    setLoadingAI(true);

    setTimeout(() => {
      setLoadingAI(false);

      // SHUFFLE 20 IMAGES THEN PICK TOP 6
      const randomized = shuffleArray(aiImages).slice(0, 6);
      setShuffledImages(randomized);

      setShowSuggestions(true);
    }, 1500);
  };

  return (
    <section
      id="suggestion"
      className="relative py-32 bg-gradient-to-b from-[#0a0e17] via-[#101623] to-[#0d162b] text-white"
    >
      {/* BG Glow */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute top-10 left-20 w-80 h-80 bg-blue-500/40 blur-[110px] rounded-full" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-600/40 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-6xl font-extrabold text-center mb-20 tracking-tight">
          Upload Your Outfit
          <span className="block text-blue-400 text-4xl mt-3">
            AI Smart Wardrobe Upgrade
          </span>
        </h2>

        {/* Upload Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <UploadCard
            title="Upload Shirt"
            color="blue"
            preview={shirtPreview}
            setFile={handleShirtUpload}
          />

          <UploadCard
            title="Upload Pant"
            color="purple"
            preview={pantPreview}
            setFile={handlePantUpload}
          />
        </div>

        {/* Button */}
        <div className="text-center mt-16">
          <button
            onClick={generateAI}
            className="px-16 py-4 text-lg rounded-full font-semibold
              bg-gradient-to-r from-blue-600 to-purple-600
              shadow-[0_0_20px_rgba(80,70,255,0.6)]
              hover:shadow-[0_0_35px_rgba(120,90,255,0.8)]
              hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Generate AI Style
          </button>
        </div>

        {/* Loader */}
        {loadingAI && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 animate-fadeInSoft">
            <div className="p-10 bg-white/10 border border-white/20 rounded-3xl text-center">
              <div className="loader mb-6"></div>
              <p className="text-xl text-blue-300 font-medium">
                AI is styling your outfit...
              </p>
            </div>
          </div>
        )}

        {/* AI Suggestions */}
        {showSuggestions && (
          <div className="mt-28 animate-fadeInSoft">
            <h3 className="text-4xl font-bold text-center text-blue-300 mb-12">
              AI Suggested Outfits
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {shuffledImages.map((img, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white/5 border border-white/10 
                  rounded-3xl backdrop-blur-xl transition-all duration-300
                  hover:border-blue-400/40 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="h-72 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center">
                    <img
                      src={img}
                      className="w-full h-full object-contain group-hover:scale-105 transition-all duration-500 rounded-xl"
                    />
                  </div>

                  <h4 className="mt-4 text-center text-xl font-bold text-blue-300">
                    Style Look {index + 1}
                  </h4>
                  <p className="mt-2 text-center text-gray-300">
                    AI generated styling idea
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInSoft {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0px); }
        }
        .animate-fadeInSoft {
          animation: fadeInSoft .6s ease-out forwards;
        }

        .loader {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 5px solid rgba(255,255,255,0.3);
          border-top-color: #70a3ff;
          animation: spin 1s linear infinite;
          margin: auto;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
};

/* ---------------- Upload Card ---------------- */

const UploadCard = ({
  title,
  preview,
  setFile,
  color,
}: {
  title: string;
  preview: string | null;
  setFile: (e: any) => void;
  color: string;
}) => {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  const handleImageLoad = (e: any) => {
    setAspectRatio(e.target.naturalWidth / e.target.naturalHeight);
  };

  return (
    <div
      className={`p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl 
      transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,0,0,0.4)]
      hover:border-${color}-400/40 hover:-translate-y-2`}
    >
      <h3 className={`text-xl font-semibold mb-4 text-${color}-300`}>
        {title}
      </h3>

      <input
        type="file"
        accept="image/*"
        onChange={setFile}
        className="w-full file:px-5 file:py-3 file:bg-white/10 
          file:text-white file:border-none file:rounded-lg cursor-pointer 
          file:hover:bg-white/20"
      />

      <div
        className="mt-6 bg-white/10 border border-white/10 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-500"
        style={{
          width: "100%",
          height: aspectRatio ? `${280 / aspectRatio}px` : "220px",
        }}
      >
        {preview ? (
          <img
            src={preview}
            onLoad={handleImageLoad}
            className="w-auto h-full object-contain transition-all duration-500 hover:scale-105"
          />
        ) : (
          <span className="text-gray-400">Upload Preview</span>
        )}
      </div>
    </div>
  );
};

export default UploadSuggestion;
