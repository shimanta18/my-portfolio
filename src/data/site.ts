// ─────────────────────────────────────────────────────────────────────────
// SITE CONTENT — edit everything here. This is the only file you need to
// touch to make the portfolio yours: name, bio, skills, projects, links...
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Shimanta Chodhury",
  role: "Full-Stack Web Developer",
  rolesRotating: [
    "Full-Stack Developer",
    "MERN Stack Specialist",
    "UI/UX Engineer",
    "Competitive Programmer",
  ],
  tagline:
    "I build fast, accessible, and well-crafted web applications — from pixel to production.",
  location: "Chattogram, Bangladesh",
  email: "shimantacho18@gmail.com",
  phone: "+880 1591144072",
  whatsapp: "+8801591144072",
  photo: "/profile/photo.png",
  resumeUrl: "https://drive.google.com/file/d/1vJih4C95AEjjc3hVlvZCG9SWsPyqKlfv/view?usp=drive_link", // Drop your resume.pdf into public/resume/
  availableForWork: true,
};

export const socials = [
  { label: "GitHub", href: "https://github.com/shimanta18", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/shimanta18", icon: "linkedin" }, // Replace with your real LinkedIn username tail when ready
  { label: "Twitter", href: "https://twitter.com/yourusername", icon: "twitter" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  paragraphs: [
    "I am a Computer Systems Technology student and an engineering mind driven by a genuine obsession with full-stack systems architecture. What began as an entry point into tweaking frontend layouts evolved into building production-ready web platforms, writing optimized database queries, and keeping performance targets sharp.",
    "These days, I specialize heavily across the MERN stack ecosystem, pairing Node.js and Express servers with robust layout frameworks like Tailwind CSS and DaisyUI. I love the technical challenges behind multi-role authentication platforms, real-time sync states, and routing gateways that remove visual layout friction before it hits the client.",
    "Outside of writing code, you'll find me solving algorithmic puzzles and logic challenges on LeetCode and CodeChef, exploring automated AI applications, or coordinating community outreach tasks with computer club teammates. I believe sharpening your problem-solving foundations through competitive coding changes how you design practical software frameworks.",
  ],
  highlights: [
    { label: "Based in", value: "Chattogram, BD" },
    { label: "Focus", value: "MERN Stack & Next.js" },
    { label: "Community", value: "Computer Club PR Lead" },
  ],
};

export type SkillCategory = {
  title: string;
  description: string;
  skills: { name: string; level: number }[]; // level: 0–100
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Building crisp, fluid interfaces people enjoy interacting with.",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "DaisyUI", level: 90 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend & Database",
    description: "Designing fast API architectures and maintaining reliable data layers.",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 85 },
      { name: "MongoDB", level: 82 },
     
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    title: "Tools & Problem Solving",
    description: "The systems, runtime engines, and paradigms that keep builds secure.",
    skills: [
      { name: "Git & GitHub", level: 90 },
      
      { name: "VS Code", level: 95 },
      { name: "Netlify / Vercel", level: 88 },
    ],
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  details?: string;
};

export const education: EducationItem[] = [
  {
    degree: "Diploma in Computer Systems Technology (CST)",
    institution: "Chittagong Polytechnic Institute",
    period: "2022 — Present",
    details:
      "Deepening skills in data structures, systems analysis, object-oriented concepts, database engineering, and practical hardware architectures.",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer / Team Leader",
    company: "Academic Projects & Freelance",
    period: "2024 — Present",
    points: [
      "Acted as lead developer and architect for complex multi-role web services like eTuitionBd, managing design states and pipeline deliveries for a team of 5 developers.",
      "Built, maintained, and deployed full-stack products via modular Git branching, shifting architecture patterns from manual file pipelines to automated cloud integration builds.",
      "Integrated secure authentication tokens with client-side gateway filters to remove loading state layout jumps and flickering windows.",
    ],
  },
  {
    role: "Public Relations & Outreach Lead",
    company: "Computer Club",
    period: "2025 — Present",
    points: [
      "Co-founded and launched an active computer club environment alongside technical partners to drive peer developer growth.",
      "Leading institutional communication, tech events coordination, and student engagement pipelines to connect developers to local mentoring resources.",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  image: string;
  tags: string[];
  stack: string[];
  description: string;
  liveUrl: string;
  githubUrl: string;
  challenges: string;
  improvements: string;
};

export const projects: Project[] = [
  {
    slug: "etuitionbd",
    name: "eTuitionBd — Find & Manage Tuitions and Tutors",
    shortDescription:
      "A complete tuition and tutor matching platform featuring multi-role authentication dashboard redirects for students, tutors, and administrators.",
    image: "/projects/etuitionbd.png", // Corrected back to lowercase to fix the identical asset loading bug
    tags: ["React", "Tailwind CSS", "MongoDB", "DaisyUI"],
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "DaisyUI"],
    description:
      "eTuitionBd is a highly optimized full-stack web application built specifically for streamlining online and offline tutor matching in Bangladesh. It incorporates intelligent multi-role dashboard routing logic to dynamically manage personalized user journeys for students and educators.",
    liveUrl: "https://etuition.netlify.app/", 
    githubUrl: "https://github.com/shimanta18/eTution-client-side.git", 
    challenges:
      "Implementing smart multi-role routing at the base dashboard path was complex—improper handling caused dashboard flickering during token validation. I resolved this by building a dedicated client-side redirect gateway component that cleanly evaluates user authentication claims before mounting dashboard views.",
    improvements:
      "Planning to add real-time location-based tutor filtering maps, SMS notification gateways for instant match confirmations, and an automated session tracker to securely manage study hours.",
  },
  {
    slug: "maison-marketplace",
    name: "Maison — Premium Marketplace UI Kit",
    shortDescription:
      "A fluid, highly responsive luxury e-commerce storefront featuring persistent state management and decoupled checkout pipelines.",
    image: "/projects/maison.png", // Uses dedicated maison.png inside public/projects/
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    stack: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Stripe API"],
    description:
      "Maison is an editorial-grade storefront user interface built to simulate a seamless, luxury digital asset marketplace. The application features intricate fluid product category filtering, a persistent local storage shopping cart structure, elegant contextual page entry animations, and a decoupled checkout flow integration matching high-end design specifications.",
    liveUrl: "https://maison24-taupe.vercel.app",
    githubUrl: "https://github.com/shimanta18/Maison.git",
    challenges:
      "Maintaining high-frame-rate layout transitions during multi-attribute product filtering was a bottleneck on lower-spec hardware configurations due to unnecessary DOM reflows. I mitigated this layout jank by leveraging Framer Motion's layout projection mode combined with component-level memoization hooks.",
    improvements:
      "Intending to migrate the frontend system to a fully server-rendered architecture to dramatically accelerate initial content visibility, optimize metadata index tracking for search engines, and establish an automated content API layer.",
  },
  {
    slug: "hero-io",
    name: "Hero.Io — Productive Utilities Engine",
    shortDescription:
      "A minimalist web suite and application platform housing customizable micro-tools tailored to simplify day-to-day workflow tasks.",
    image: "/projects/hero.png", // Uses dedicated hero.png inside public/projects/
    tags: ["JavaScript", "HTML5", "Tailwind CSS", "DaisyUI"],
    stack: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "DaisyUI"],
    description:
      "Hero.Io is a dedicated client-side dashboard ecosystem crafted to provide instant access to useful digital tools. The interface uses a responsive configuration system designed to keep script operations rapid and interactive overhead lightweight, serving as an architectural sandbox to explore pure utility optimization metrics.",
    liveUrl: "https://hero-appsio.netlify.app/",
    githubUrl: "https://github.com/shimanta18/Hero-apps.git",
    challenges:
      "Balancing rapid DOM paint calculations across multi-widget workspaces while serving files cleanly from static cloud spaces meant removing large third-party helper logic modules and relying strictly on vanilla layout pipelines.",
    improvements:
      "Planning to migrate the utility layout to React/Next.js architectures, incorporate complex state history trackers, and add a local encrypted database to save settings offline.",
  },
];

export const contact = {
  heading: "Let's build something meaningful",
  subheading:
    "Have a project in mind, a question, or want to discuss structural systems engineering? My inbox is open.",
};