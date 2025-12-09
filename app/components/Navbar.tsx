"use client";

import React, { useState } from "react";
import Image from "next/image";
import Loader from "./Loader";

const Navbar = () => {
  const [loading, setLoading] = useState(false);

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const [user, setUser] = useState<any>(null);

  const [desktopMenu, setDesktopMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileProfile, setMobileProfile] = useState(false);

  /* GOOGLE SHEET API CALL */
 const sendToGoogleSheet = async (payload: any) => {
  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbyi14wGfJWBMwW0yk-P5kSCHFxcb9jLoZBa14ekad2EPj1t7xqXEM_VgUiy01vktOSoLg/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      }
    );

    console.log("Response:", res);

  } catch (err) {
    console.log("Google Sheet Error:", err);
  }
};


  /* Smooth Scroll */
  const handleNavClick = (target: string) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setMobileMenu(false);
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  /* LOGIN */
  const handleLogin = async () => {
    const email = (document.getElementById("login-email") as HTMLInputElement)
      ?.value;
    const pass = (document.getElementById("login-pass") as HTMLInputElement)
      ?.value;

    if (!email || !pass) return alert("Enter all fields");

    setUser({
      name: email.split("@")[0],
      gender: "male",
    });

    /* SAVE LOGIN DATA TO GOOGLE SHEET */
    await sendToGoogleSheet({
      type: "login",
      email,
      password: pass,
    });

    setShowLogin(false);
  };

  /* SIGNUP */
  const handleSignup = async () => {
    const name = (document.getElementById("sign-name") as HTMLInputElement)
      ?.value;
    const email = (document.getElementById("sign-email") as HTMLInputElement)
      ?.value;
    const pass = (document.getElementById("sign-pass") as HTMLInputElement)
      ?.value;
    const gender = (document.getElementById(
      "sign-gender"
    ) as HTMLSelectElement)?.value;

    if (!name || !email || !pass) return alert("Enter all fields");

    setUser({ name, email, gender });

    /* SAVE SIGNUP DATA TO GOOGLE SHEET */
    await sendToGoogleSheet({
      type: "signup",
      name,
      email,
      password: pass,
      gender,
    });

    setShowSignup(false);
  };

  /* LOGOUT */
  const handleLogout = () => {
    setUser(null);
    setMobileMenu(false);
    setDesktopMenu(false);
    setMobileProfile(false);
  };

  return (
    <>
      {loading && <Loader />}

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[9999]">
          <div className="bg-[#0d0f19] p-8 rounded-2xl w-80 border border-white/10 shadow-2xl">
            <h2 className="text-xl text-white mb-4 text-center">Login</h2>

            <input
              id="login-email"
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 mb-3 bg-[#151827] text-white rounded-lg border border-white/10"
            />

            <input
              id="login-pass"
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 mb-4 bg-[#151827] text-white rounded-lg border border-white/10"
            />

            <button
              onClick={handleLogin}
              className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-black font-bold"
            >
              Login
            </button>

            <button
              onClick={() => setShowLogin(false)}
              className="w-full py-2 mt-3 rounded-lg border border-red-400 text-red-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* SIGNUP MODAL */}
      {showSignup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[9999]">
          <div className="bg-[#0d0f19] p-8 rounded-2xl w-80 border border-white/10 shadow-2xl">
            <h2 className="text-xl text-white mb-4 text-center">
              Create Account
            </h2>

            <input
              id="sign-name"
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-2 mb-3 bg-[#151827] text-white rounded-lg border border-white/10"
            />

            <input
              id="sign-email"
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 mb-3 bg-[#151827] text-white rounded-lg border border-white/10"
            />

            <input
              id="sign-pass"
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 mb-4 bg-[#151827] text-white rounded-lg border border-white/10"
            />

            <select
              id="sign-gender"
              className="w-full px-3 py-2 mb-4 bg-[#151827] text-white rounded-lg border border-white/10"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <button
              onClick={handleSignup}
              className="w-full py-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-black font-bold"
            >
              Create Account
            </button>

            <button
              onClick={() => setShowSignup(false)}
              className="w-full py-2 mt-3 rounded-lg border border-red-400 text-red-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-[200] bg-gradient-to-r from-[#050816] via-[#19275a] to-[#4b2b7f] shadow-lg">
        <nav className="relative max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3 text-white">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={42}
              height={42}
              className="rounded-lg shadow-lg"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-sm sm:text-base">
                Smart Waradope
              </span>
              <span className="text-[11px] sm:text-xs text-slate-300">
                Style • Fit • Confidence
              </span>
            </div>
          </div>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { text: "Home", id: "#hero" },
              { text: "Upload", id: "#suggestion" },
              { text: "AI Looks", id: "#looks" },
              { text: "About", id: "#about" },
            ].map((l, i) => (
              <button
                key={i}
                onClick={() => handleNavClick(l.id)}
                className="text-slate-200/80 hover:text-white transition"
              >
                {l.text}
              </button>
            ))}
          </div>

          {/* DESKTOP USER */}
          {!user ? (
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setShowLogin(true)}
                className="px-4 py-2 bg-slate-900/60 text-white rounded-full"
              >
                Login
              </button>

              <button
                onClick={() => setShowSignup(true)}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-black font-semibold"
              >
                Signup
              </button>
            </div>
          ) : (
            <div className="relative hidden md:flex items-center cursor-pointer">
              <div
                className="flex items-center gap-2 text-white"
                onClick={() => setDesktopMenu(!desktopMenu)}
              >
                <Image
                  src={user.gender === "female" ? "/gg.png" : "/bb.png"}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full border border-white/20"
                />
                <span>{user.name}</span>
              </div>

              {desktopMenu && (
                <div className="absolute right-0 mt-2 bg-[#151827] w-40 rounded-lg border border-white/10 p-3">
                  <button
                    onClick={handleLogout}
                    className="px-3 py-2 w-full text-left hover:bg-white/10 rounded"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* MOBILE TOGGLE */}
          <div
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex flex-col gap-[6px] cursor-pointer md:hidden z-[300]"
          >
            <span
              className={`h-[3px] w-7 bg-purple-300 rounded transition ${
                mobileMenu ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-[3px] w-7 bg-purple-300 rounded transition ${
                mobileMenu ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[3px] w-7 bg-purple-300 rounded transition ${
                mobileMenu ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </nav>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden fixed left-0 w-full 
            bg-[#0d1224]/95 backdrop-blur-xl 
            border-t border-white/10 
            transition-all duration-300
            z-[250]
            ${
              mobileMenu
                ? "top-16 opacity-100"
                : "top-[-300px] opacity-0"
            }`}
        >
          {[
            { text: "Home", id: "#hero" },
            { text: "Upload", id: "#suggestion" },
            { text: "AI Looks", id: "#looks" },
            { text: "About", id: "#about" },
          ].map((l, i) => (
            <button
              key={i}
              onClick={() => handleNavClick(l.id)}
              className="w-full text-left px-6 py-3 text-slate-200 border-b border-white/10"
            >
              {l.text}
            </button>
          ))}

          {!user ? (
            <div className="px-6 py-4 space-y-3">
              <button
                onClick={() => {
                  setMobileMenu(false);
                  setShowLogin(true);
                }}
                className="w-full py-2 bg-blue-600 text-white rounded"
              >
                Login
              </button>

              <button
                onClick={() => {
                  setMobileMenu(false);
                  setShowSignup(true);
                }}
                className="w-full py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-black rounded font-semibold"
              >
                Signup
              </button>
            </div>
          ) : (
            <div className="px-6 py-4">
              <div
                className="flex items-center gap-3 text-white cursor-pointer"
                onClick={() => setMobileProfile(!mobileProfile)}
              >
                <Image
                  src={user.gender === "female" ? "/gg.png" : "/bb.png"}
                  width={40}
                  height={40}
                  alt="avatar"
                  className="rounded-full border border-white/20"
                />
                <span className="text-lg">{user.name}</span>
              </div>

              {mobileProfile && (
                <button
                  onClick={handleLogout}
                  className="mt-4 w-full py-2 bg-red-600/80 text-white rounded"
                >
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
      </header>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Navbar;
