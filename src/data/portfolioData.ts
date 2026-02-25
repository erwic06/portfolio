export const personalInfo = {
  name: "Eric Wong",
  title: "Software Engineer",
  email: "eric@example.com",
  bio: "I'm a software engineer passionate about building products that make a difference. Currently exploring the intersection of technology and design.",
  roles: [
    { title: "Software Engineer", org: "Company Name" },
    { title: "CS Student", org: "University Name" },
  ],
  socials: {
    github: "https://github.com/ericwong",
    linkedin: "https://linkedin.com/in/ericwong",
    twitter: "https://twitter.com/ericwong",
  },
};

export interface Project {
  name: string;
  award?: string;
  date: string;
  description: string;
  tech: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    name: "Project Alpha",
    award: "1st Place — Hackathon 2025",
    date: "Jan 2025",
    description:
      "A full-stack web application that helps users track and visualize their daily habits with AI-powered insights.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    link: "https://github.com/ericwong/project-alpha",
  },
  {
    name: "Project Beta",
    date: "Oct 2024",
    description:
      "A real-time collaborative markdown editor with live preview and syntax highlighting.",
    tech: ["Next.js", "WebSocket", "Tailwind CSS"],
    link: "https://github.com/ericwong/project-beta",
  },
  {
    name: "Project Gamma",
    date: "Jul 2024",
    description:
      "CLI tool for automating development environment setup across different operating systems.",
    tech: ["Rust", "Shell"],
    link: "https://github.com/ericwong/project-gamma",
  },
];

export const archiveItems = [
  { name: "v1 — HTML/CSS Static Site", year: "2022" },
  { name: "v2 — Next.js Portfolio", year: "2023" },
  { name: "v3 — React + Vite (current)", year: "2025" },
];
