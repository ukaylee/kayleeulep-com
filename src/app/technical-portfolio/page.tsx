// src/app/technical-portfolio/page.tsx
"use client";

import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa6";
import projects from "@/data/projects.json";
import config from "@/data/config.json";

// --- 1. Project Card Component Interfaces ---
interface Project {
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
}

// ProjectCard Component: Implements the Z-pattern (alternating image/text) layout
const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const isImageLeft = index % 2 === 0;
  const imageOrderClass = isImageLeft ? "md:order-1" : "md:order-2";
  const contentOrderClass = isImageLeft ? "md:order-2" : "md:order-1";

  return (
    <div className="bg-card-background shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-5 items-stretch">
        {/* Image bleeds flush to the card edge, full height, now 3/5 of the width */}
        <div
          className={`${imageOrderClass} md:col-span-3 h-full min-h-[24rem]`}
        >
          <img
            src={project.imageUrl}
            alt={`Demo of ${project.title}`}
            className="w-full h-full object-cover block"
          />
        </div>

        {/* Content, now 2/5 of the width */}
        <div className={`${contentOrderClass} md:col-span-2 p-8 flex flex-col`}>
          <h2 className="text-4xl font-medium text-high-contrast-text mb-3">
            {project.title}
          </h2>

          {project.subtitle && (
            <p className="font-heading italic text-primary text-lg mb-4">
              {project.subtitle}
            </p>
          )}

          <p className="text-app-text mb-4 leading-relaxed">
            {project.description}
          </p>

          <div className="flex space-x-4 mt-auto">
            <Link
              href={project.githubUrl}
              target="_blank"
              className="inline-flex items-center px-4 py-2 bg-accent-background text-app-text font-semibold rounded-lg hover:bg-accent-hover transition-colors"
            >
              <FaGithub className="mr-2 text-xl" />
              GitHub
            </Link>

            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                className="inline-flex items-center px-4 py-2 bg-accent-background text-app-text font-semibold rounded-lg hover:bg-accent-hover transition-colors"
              >
                <FaLink className="mr-2 text-xl" />
                Website
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 2. Main Page Component ---
export default function TechnicalPortfolioPage() {
  const { resumePdfPath, resumeDownloadName } = config.siteMetadata;

  return (
    <div className="bg-app-background min-h-screen text-app-text pt-16 pb-24">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Header Section */}
        <header className="text-center mb-12 pb-8 border-b border-border-secondary">
          <h3 className="text-6xl font-heading text-high-contrast-text mb-2">
            Technical Portfolio
          </h3>
          <p className="text-secondary-text text-lg">
            Showcasing a selection of projects built with modern technologies.
          </p>
        </header>

        <section className="mb-12 text-center max-w-4xl mx-auto">
          <p className="text-secondary-text text-xl leading-relaxed">
            These projects demonstrate my commitment to clean code, scalable
            architecture, and user-centric design. Click through to the GitHub
            repository for detailed documentation and implementation notes.
          </p>
        </section>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project as Project}
              index={index}
            />
          ))}
        </div>

        {/* Footer Link (Resume Button) */}
        <div className="mt-16 text-center pt-8 border-t border-border-secondary">
          <a
            href={resumePdfPath}
            target="_blank"
            className="inline-block px-8 py-4 bg-primary-dark text-on-dark font-bold uppercase tracking-wide rounded-lg shadow-lg hover:bg-primary-hover transition-colors duration-300 text-xl"
            download={resumeDownloadName}
            rel="noopener noreferrer"
          >
            DOWNLOAD FORMAL RESUME (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
