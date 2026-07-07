"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 98 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: " MongoDB", level: 82 },
      
      
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Git / GitHub Actions", level: 92 },
      
      { name: "Figma", level: 85 },
      { name: "Vercel ", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-8 md:px-16 py-20 border-t border-neutral-200/40">
      {/* Centered Serif Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-neutral-900 font-serif">
          Core Expertise
        </h2>
      </div>

      {/* Responsive Three-Column Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-[32px] border border-neutral-200/50 bg-[#FDFCFA] p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)]"
          >
            {/* Category Header */}
            <h3 className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-8 font-sans">
              {category.title}
            </h3>

            {/* Progress Bar Stack */}
            <div className="space-y-6">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-neutral-800 font-sans">
                      {skill.name}
                    </span>
                    <span className="text-neutral-400 font-light font-sans">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Track Background */}
                  <div className="h-[4px] w-full bg-neutral-100 rounded-full overflow-hidden">
                    {/* Animated Progress Accent Line */}
                    <motion.div
                      className="h-full bg-blue-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}