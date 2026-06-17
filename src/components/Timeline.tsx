"use client";

const educationData = [
  {
    duration: "2023 — Present",
    title: "Diploma in Computer Systems Technology",
    institution: "Feni Computer Institute",
    description: "Deepening core knowledge in computer engineering, system architectures, network management, and modern software development pipelines.",
  },
  {
    duration: "2025 (Dec)",
    title: "Google 5-Day AI Intensive Graduate",
    institution: "Kaggle Training",
    description: "Completed machine learning and synthetic data modules alongside rigorous model optimization projects with industry peers.",
  }
];

const experienceData = [
  {
    duration: "2025 — Present",
    title: "PR & Outreach Lead",
    institution: "Computer Club",
    description: "Managing brand placement, scaling student network interactions, and setting up collaborative programming events and workshops.",
  },
  {
    duration: "2025 — 2026",
    title: "Full Stack Lead Developer",
    institution: "eTuitionBd Platform Project",
    description: "Architected multi-role authentication routing pipelines, dashboard view redirections, and custom student-tutor engagement modules using the MERN stack.",
  }
];

export default function Timeline() {
  return (
    <section id="resume" className="max-w-7xl mx-auto px-8 md:px-16 py-20 border-t border-neutral-200/40">
      <div className="grid md:grid-cols-2 gap-16 md:gap-12 items-start">
        
        {/* Left Track Column: Education */}
        <div className="space-y-10">
          <div>
            <h3 className="text-xs font-bold tracking-[0.15em] text-neutral-400 uppercase font-sans mb-8">
              Education
            </h3>
          </div>
          
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-neutral-200/60 group">
                {/* Tiny Bullet Indicator */}
                <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-neutral-300 group-hover:bg-blue-600 transition-colors" />
                
                <span className="text-xs font-bold text-blue-600 font-sans tracking-wide">
                  {item.duration}
                </span>
                <h4 className="text-xl font-normal tracking-tight text-neutral-900 font-serif mt-1.5">
                  {item.title}
                </h4>
                <p className="text-xs italic text-neutral-400 font-sans mt-0.5">
                  {item.institution}
                </p>
                <p className="text-sm text-neutral-500 mt-3 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Track Column: Experience */}
        <div className="space-y-10">
          <div>
            <h3 className="text-xs font-bold tracking-[0.15em] text-neutral-400 uppercase font-sans mb-8">
              Experience
            </h3>
          </div>
          
          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-neutral-200/60 group">
                {/* Tiny Bullet Indicator */}
                <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-neutral-300 group-hover:bg-blue-600 transition-colors" />
                
                <span className="text-xs font-bold text-blue-600 font-sans tracking-wide">
                  {item.duration}
                </span>
                <h4 className="text-xl font-normal tracking-tight text-neutral-900 font-serif mt-1.5">
                  {item.title}
                </h4>
                <p className="text-xs italic text-neutral-400 font-sans mt-0.5">
                  {item.institution}
                </p>
                <p className="text-sm text-neutral-500 mt-3 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}