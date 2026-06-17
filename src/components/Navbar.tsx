"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/site";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FBFBFA]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-8 md:px-16 h-24 flex items-center justify-between">
        
        {/* Monogram Logo Style */}
        <a href="#home" className="text-xl font-bold tracking-tight text-neutral-900 font-sans">
          SC<span className="text-neutral-400">.</span>
        </a>

        {/* Minimalist Middle Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-neutral-600 hover:text-neutral-900 text-[15px] font-normal transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Premium Solid Capsule Button */}
      <div className="hidden md:block">
  <a
    href={profile.resumeUrl}
    download="resume.pdf" // Automatically prompts a file download when clicked
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-2.5 text-sm font-medium rounded-full bg-[#171717] text-[#FBFBFA] hover:bg-neutral-800 transition-all duration-200 shadow-sm"
  >
    Resume
  </a>
</div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-900 p-1"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Layer */}
      {isOpen && (
        <div className="absolute top-24 left-0 w-full bg-[#FBFBFA] border-b border-neutral-100 px-8 py-8 flex flex-col gap-6 md:hidden shadow-sm">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-neutral-600 text-lg font-normal"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#resume"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 bg-[#171717] text-white rounded-full font-medium text-sm"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}