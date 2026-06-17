"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "../data/site";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);
  const [loadedProjects, setLoadedProjects] = useState<typeof projects>([]);

  useEffect(() => {
    setLoadedProjects(projects);
  }, []);

  // Keyboard shortcut listener and body scroll freeze
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    
    if (activeProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeProject]);

  if (loadedProjects.length === 0) {
    return (
      <section id="projects" className="py-25 bg-[#121110] text-neutral-400">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center text-sm">
          Loading Selected Works...
        </div>
      </section>
    );
  }

  return (
    /* PREMIUM DARK BACKGROUND APPLIED HERE */
    <section id="projects" className="py-24 bg-[#121110] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="mb-16">
          <span className="inline-block text-[11px] font-semibold tracking-[0.15em] uppercase text-blue-400 bg-blue-950/40 border border-blue-900/30 px-3 py-1 rounded-full mb-3">
            My Portfolio
          </span>
          {/* Text changed to white for dark mode contrast */}
          <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white font-serif">
            Selected Work
          </h2>
        </div>

        {/* Project Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loadedProjects.map((project, index) => {
            const directImgUrl = `${project.image}?v=${index}-${project.slug}`;

            return (
              <div 
                key={`project-card-${project.slug}-${index}`} 
                /* Cards styled with a dark transparent surface layer */
                className="group rounded-[32px] border border-neutral-800/40 bg-[#1A1917]/60 p-6 flex flex-col justify-between hover:border-neutral-700/60 transition-all duration-300 hover:shadow-xl"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-neutral-900 mb-6 border border-neutral-800/50">
                    <Image
                      src={directImgUrl}
                      alt={project.name}
                      fill 
                      unoptimized 
                      sizes="(max-w-7xl) 33vw, 100vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-103"
                      priority={index === 0} 
                    />
                  </div>

                  {/* Clean white typography for project headings */}
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-100 font-sans">{project.name}</h3>
                  <p className="text-sm text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                  
                  {/* Skill Badge Elements */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.tags.map((t) => (
                      <span 
                        key={t} 
                        className="text-[11px] bg-neutral-900 border border-neutral-800/60 px-2 py-0.5 rounded-md text-neutral-400 font-sans"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Premium Action Button styled to look elegant against dark space */}
                <button 
                  onClick={() => setActiveProject(project)}
                  className="mt-6 w-full text-center py-2.5 bg-neutral-100 text-neutral-900 rounded-full font-medium text-sm hover:bg-white transition duration-200"
                >
                  View Details
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for Detailed Project View */}
      {activeProject && (
        <div 
          onClick={() => setActiveProject(null)} 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()} 
            className="bg-[#161514] border border-neutral-800 rounded-[32px] max-w-2xl w-full p-8 max-h-[85vh] overflow-y-auto shadow-2xl"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-2xl md:text-3xl font-normal tracking-tight text-white font-serif">{activeProject.name}</h3>
              <button 
                onClick={() => setActiveProject(null)} 
                className="text-neutral-400 hover:text-neutral-200 text-xs font-sans tracking-wider uppercase bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-md"
              >
                esc
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-neutral-900 my-6 border border-neutral-800/40">
              <Image
                src={`${activeProject.image}?v=modal-${activeProject.slug}`}
                alt={activeProject.name}
                fill
                unoptimized
                sizes="(max-w-2xl) 100vw"
                className="object-cover object-center"
              />
            </div>

            <div className="space-y-5 text-sm text-neutral-300 leading-relaxed">
              <p>{activeProject.description}</p>
              <div>
                <h4 className="font-semibold text-white font-sans">Tech Stack:</h4>
                <p className="text-blue-400 mt-1 font-medium">{activeProject.stack.join(", ")}</p>
              </div>
              <div>
                <h4 className="font-semibold text-white font-sans">Challenges Faced:</h4>
                <p className="mt-1 bg-neutral-900 p-4 rounded-xl border border-neutral-800/60 text-xs italic text-neutral-400">
                  {activeProject.challenges}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white font-sans">Future Improvements:</h4>
                <p className="mt-1 text-xs text-neutral-400">{activeProject.improvements}</p>
              </div>
            </div>

            <div className="mt-8 flex gap-3 border-t border-neutral-800/60 pt-5">
              <a 
                href={activeProject.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-5 py-2.5 bg-white text-neutral-900 rounded-full text-xs font-medium hover:bg-neutral-100 transition"
              >
                <ExternalLink size={14}/> Live Link
              </a>
              <a 
                href={activeProject.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-5 py-2.5 border border-neutral-800 text-neutral-300 bg-neutral-900 rounded-full text-xs font-medium hover:bg-neutral-800 transition"
              >
                <FaGithub size={14}/> GitHub Repo
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}