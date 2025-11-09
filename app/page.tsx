"use client";
import { useState } from "react";
import "./globals.css";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="main-bg text-white min-h-screen flex flex-col items-center">
      {/* ==== HEADER ==== */}
      <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
            MR NIPUN OFC / TECH-WEB
          </h1>
          <div className="hidden md:flex space-x-4">
            {["Home", "About", "Projects", "Skills", "Social", "Contact"].map((link) => (
              <button key={link} className="px-4 py-2 rounded bg-black/30 hover:bg-red-500 transition">
                {link}
              </button>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-between w-8 h-6 focus:outline-none"
            onClick={() => setMenuOpen(true)}
          >
            <span className="block w-full h-[3px] bg-red-500 rounded"></span>
            <span className="block w-full h-[3px] bg-red-500 rounded"></span>
            <span className="block w-full h-[3px] bg-red-500 rounded"></span>
          </button>
        </div>
      </header>

      {/* ==== MOBILE MENU ==== */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex flex-col items-center justify-center animate-fadeIn">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-3xl bg-red-500/40 w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 transition"
          >
            ×
          </button>
          <h2 className="text-2xl mb-6 font-semibold">Menu</h2>
          <div className="flex flex-col space-y-4 w-48">
            {["Home", "About", "Projects", "Skills", "Social", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => setMenuOpen(false)}
                className="py-3 rounded-xl bg-white/10 text-white hover:bg-red-600 transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ==== HERO SECTION ==== */}
      <section className="mt-28 flex flex-col items-center text-center px-4">
        <div className="relative w-44 h-44 mb-6">
          <div className="absolute inset-0 rounded-full animate-spin-slow bg-[conic-gradient(var(--tw-gradient-stops))] from-red-500 via-purple-500 to-red-500"></div>
          <img
            src="https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/MR%20NIPUN%20OFC.png"
            alt="MR NIPUN"
            className="w-full h-full rounded-full border-4 border-black object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
          MR NIPUN OFC / TECH-WEB
        </h1>
        <p className="mt-2 text-gray-300">
          Full Stack Developer | UI/UX Designer | Tech Enthusiast
        </p>
      </section>

      {/* ==== PERSONAL INFO ==== */}
      <section className="max-w-3xl w-full mt-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Personal Information</h2>
        <div className="space-y-3">
          <p><strong>Name:</strong> H.M. NIPUN DHANUJAYA</p>
          <p><strong>Age:</strong> 18</p>
          <p><strong>From:</strong> Sri Lanka</p>
          <p>
            <strong>Contact:</strong>{" "}
            <a href="https://wa.me/+94757255903" className="text-red-400">
              +94 75 725 5903
            </a>
          </p>
        </div>
      </section>

      {/* ==== PROJECTS ==== */}
      <section className="max-w-5xl w-full mt-10 text-center px-4">
        <h2 className="text-3xl font-bold mb-6">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["MHT Website", "A modern responsive site with interactive features."],
            ["E-commerce Platform", "Full-stack e-commerce with admin dashboard."],
            ["IoT Home Automation", "Smart-home using Arduino + mobile app."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-red-400 mb-2">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==== SKILLS ==== */}
      <section className="max-w-5xl w-full mt-10 text-center px-4 mb-10">
        <h2 className="text-3xl font-bold mb-6">My Skills</h2>
        <div className="skills-grid">
          {[
            ["fab fa-java", "Java", "Backend Development"],
            ["fab fa-python", "Python", "Scripting & Automation"],
            ["fas fa-server", "Web Server", "Server Management"],
            ["fas fa-microchip", "Arduino Micro Devices", "IoT Development"],
            ["fab fa-html5", "HTML/CSS", "Frontend Development"],
            ["fab fa-react", "NextJS", "React Framework"],
            ["fas fa-camera", "Photography", "Creative Photography"],
            ["fas fa-film", "Animation", "Motion Graphics"],
            ["fas fa-palette", "Logo Design", "Brand Identity"],
          ].map(([icon, title, sub]) => (
            <div
              key={title}
              className="skill-card bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-md hover:scale-105 transition shadow-lg"
            >
              <i className={`${icon} text-4xl text-red-400 mb-3`} aria-hidden="true"></i>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-gray-300">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==== FOOTER ==== */}
      <footer className="w-full border-t border-white/10 py-6 text-center text-gray-400 text-sm mt-auto">
        <div className="space-x-4 mb-2">
          <a href="#" className="hover:text-red-400">Home</a>
          <a href="#" className="hover:text-red-400">About</a>
          <a href="#" className="hover:text-red-400">Contact</a>
          <a href="#" className="hover:text-red-400">Social</a>
        </div>
        © 2025 MR NIPUN OFC / TECH-WEB. All Rights Reserved.
      </footer>
    </main>
  );
      }
