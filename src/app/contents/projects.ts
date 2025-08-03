import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Landing Page",
    description: "The website landing page uses HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/Spectrxx/landing-page-porto",
    demoLink: "https://romi-portfolio-landing-page.netlify.app/",
    image: "/projects/proyek1.webp",
  },
  {
    title: "Bimo Misadventures",
    description:
      "The game Bimo Misadventures was created using the Unity Engine.",
    technologies: ["Unity", "C#"],
    githubLink: "https://ngoeli-creative.itch.io/bimo-adventure",
    demoLink: "https://ngoeli-creative.itch.io/bimo-adventure",
    image: "/projects/proyek2.webp",
  },
  {
    title: "Shadcn Portofolio",
    description: "Portfolio website using libraries from shadcn.",
    technologies: ["Next.js", "Tailwind CSS", "shadcn"],
    githubLink: "https://github.com/Spectrxx/shadcn-portfolio",
    demoLink: "https://romi-shadcn-portfolio.vercel.app/",
    image: "/projects/proyek3.webp",
  },
];
