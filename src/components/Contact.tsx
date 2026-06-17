"use client";

export default function Contact() {
  return (
    <footer id="contact" className="max-w-7xl mx-auto px-8 md:px-16 py-24 border-t border-neutral-200/40 bg-[#fafaf8]">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
        
        {/* Large Editorial Serif Heading */}
        <h2 className="text-4xl md:text-6xl font-normal tracking-tight text-neutral-900 font-serif leading-tight">
          Let's build something <br />
          <span className="italic font-normal font-serif">meaningful.</span>
        </h2>

        {/* Subtext Paragraph */}
        <p className="text-neutral-500 text-base md:text-lg max-w-xl font-sans font-normal leading-relaxed">
          Open for new opportunities and collaborations. Reach out via email or message me directly for a quick chat.
        </p>

        {/* Primary Contact Email Link */}
        <div className="pt-4">
          <a
            href="mailto:your.email@example.com"
            className="text-xl md:text-2xl font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200 font-sans tracking-tight border-b-2 border-transparent hover:border-blue-600"
          >
             shimantacho18@gmail.com
          </a>
        </div>

        {/* Secondary Communication Channels */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-neutral-400 font-sans font-normal pt-4">
          <span>+880 1591144072</span>
          <span className="hidden sm:inline text-neutral-200">|</span>
          <a 
            href="https://wa.me/8801XXXXXXXXX" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-neutral-600 transition-colors"
          >
            WhatsApp: +880 1591144072
          </a>
        </div>

      </div>
    </footer>
  );
}