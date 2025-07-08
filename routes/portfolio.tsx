import CollapsibleList from "../islands/CollapsibleList.tsx";
import { PortfolioLinks } from "../components/PortfolioLinks.tsx";
import ProjectCard from "../components/ProjectCard.tsx";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Club Data API: api.acmcsuf.com",
      description:
        "API in development for club to manage data about board members, announcements, and events. Created CI pipeline and branch protection rules to enable safe collaboration with a team.",
      technologies: "Go, Gin, SQLite, OpenAPI, Nix, GitHub Actions",
      githubLink: "https://github.com/acmcsufoss/api.acmcsuf.com",
    },
    {
      title: "Playlist Rating Web App: Dumps or Fire",
      description:
        "Full-stack web application that rates playlists, albums and songs using popularity data from Spotify. Created CI/CD pipeline to enforce code quality and ensure production is up to date.",
      technologies:
        "Django, Python, Bootstrap, Spotify API, fly.io, GitHub Actions, Docker",
      githubLink: "https://github.com/thejolman/dumps-or-fire",
    },
    {
      title: "Task Tracker CLI: Terminder",
      description:
        "Simple and fast CLI that keeps track of priorities. Uses file serialization and shortest string matching for easy use.",
      technologies: "C++, Cereal, Nix, pre-commit, GitHub Actions",
      githubLink: "https://github.com/TheJolman/terminder",
    },
    {
      title: "MediaWiki AWS",
      description:
        "Terraform Infrastructure as Code (IaC) for deploying MediaWiki on AWS with proper configuration and security.",
      technologies: "Terraform, AWS",
      githubLink: "https://github.com/TheJolman/mediawiki-aws",
    },
  ];

  const myData = [
    {
      title: "Relevant Coursework",
      content: [
        "Artifical Intelligence",
        "Machine Learning",
        "Data Science",
        "Database Systems",
        "Operating Systems",
      ],
    },
    {
      title: "Technical Interests",
      content: [
        "Programming Languages and Compilers",
        "Linux and Operating Systems",
        "DevOps",
        "System Administration",
      ],
    },
    {
      title: "Technical Skills",
      content: [
        "Python, C/C++, Java, Go, Lua, bash, SQL, Matlab",
        "Django, FastAPI, Python DS/ML libraries",
        "Nix/NixOS, Linux, Docker",
        "GitHub Actions, Vim",
      ],
    },
  ];

  const links = [
    {
      href: "https://www.github.com/TheJolman",
      content: "My Github",
    },
    {
      href: "https://www.linkedin.com/in/joshua-holman-685a39244/",
      content: "My Linkedin",
    },
    {
      href: "https://github.com/TheJolman/resume/blob/main/resume.pdf",
      content: "My Resume (PDF)",
    },
  ];
  return (
    <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
      <p class="font-bold mx-10 my-5">
        Hi there. I am a Computer Science student at CSU, Fullerton (Aug 2023 -
        Dec 2025 expected). I also work part-time as a math tutor. <br /> <br />
      </p>

      <PortfolioLinks links={links} />

      <div class="w-full">
        <h2 class="text-2xl font-bold text-center mb-6">Notable Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>

      <CollapsibleList items={myData} />
    </div>
  );
}
