"use client";

export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-8 md:px-16 pt-12 pb-24 md:min-h-[80vh] flex items-center">
      <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center w-full">
        
        {/* Left Column Content Layout (Spans 7 structural columns) */}
        <div className="md:col-span-7 flex flex-col justify-center">
          
          {/* Small Category Capsule Tag */}
          <div>
            <span className="inline-block text-[11px] font-semibold tracking-[0.15em] uppercase text-blue-600 bg-blue-50/60 px-3 py-1 rounded-full mb-8">
              Full Stack Developer
            </span>
          </div>
          
          {/* Main Serif Typographic Display Headline */}
          <h1 className="text-5xl md:text-[68px] lg:text-[76px] font-normal tracking-tight text-neutral-900 leading-[1.08] font-serif">
            Crafting digital <br />
            <span className="text-neutral-400 italic font-light">experiences</span> that scale.
          </h1>
          
          <p className="mt-8 text-neutral-500 text-lg md:text-xl max-w-xl leading-relaxed font-normal">
            Hi, I'm Shimanta. A web developer specializing in building clean, high-performance web applications with exceptional user interfaces.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <a 
              href="#projects" 
              className="text-sm font-semibold border-b-2 border-neutral-900 pb-1 text-neutral-900 hover:text-neutral-600 hover:border-neutral-400 transition-all duration-200"
            >
              See My Work
            </a>
          </div>
        </div>

        {/* Right Column Image Layout with Smooth Rounded Borders (Spans 5 structural columns) */}
        <div className="md:col-span-5 w-full">
          <div className="relative aspect-[4/5] w-full rounded-[32px] overflow-hidden bg-neutral-100 shadow-sm border border-neutral-200/40">
            <img 
              src="/projects/me.png" 
              alt="Shimanta"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}