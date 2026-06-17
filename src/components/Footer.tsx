"use client";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-[#fafaf8] border-t border-neutral-200/60 py-8 px-8 md:px-16 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Copyright notice */}
        <p className="text-neutral-400 italic font-sans">
          © {new Date().getFullYear()} Shimanta Portfolio. Handcrafted with care.
        </p>

        {/* Right Side: Social Media Channels */}
        <div className="flex items-center gap-6 font-sans text-xs font-bold tracking-wider text-neutral-700 uppercase">
          <a 
            href="https://github.com/shimanta18" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-blue-600 transition-colors group"
          >
            <FiGithub className="text-base text-neutral-500 group-hover:text-blue-600 transition-colors" />
            <span>Github</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/shimanta-chowdhury-a5720b384/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-blue-600 transition-colors group"
          >
            <FiLinkedin className="text-base text-neutral-500 group-hover:text-blue-600 transition-colors" />
            <span>Linkedin</span>
          </a>

          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-blue-600 transition-colors group"
          >
            <FiTwitter className="text-base text-neutral-500 group-hover:text-blue-600 transition-colors" />
            <span>Twitter</span>
          </a>
        </div>

      </div>
    </footer>
  );
}