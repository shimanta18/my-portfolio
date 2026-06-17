"use client";

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-8 md:px-16 py-20 border-t border-neutral-200/40">
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
        
        {/* Left Side: Elegant Heading Element */}
        <div className="md:col-span-4 lg:col-span-3">
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-neutral-900 font-serif">
              My Journey
            </h2>
            {/* The structural under-accent line */}
            <div className="mt-3 h-[3px] w-12 bg-blue-600 rounded-full" />
          </div>
        </div>

        {/* Right Side: Narrative Editorial Text Layout */}
        <div className="md:col-span-8 lg:col-span-9 space-y-6 max-w-3xl">
          <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-normal">
            My fascination with the web started back in 2015, tweaking CSS for blog themes. 
            What began as a hobby evolved into a career driven by the intersection of logic and 
            aesthetics. I believe code is more than instructions — it's a medium for solving real-world friction.
          </p>
          
          <p className="text-neutral-600 text-base md:text-lg leading-relaxed font-normal">
            I enjoy building complex state-managed interfaces and squeezing latency out of servers. 
            When I'm not in VS Code, you'll find me analyzing algorithmic challenges, exploring new tech architectures, or coordinating computer club activities. These creative outlets keep my perspective fresh and my problem-solving intuitive.
          </p>
        </div>

      </div>
    </section>
  );
}