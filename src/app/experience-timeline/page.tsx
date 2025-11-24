// src/app/experience-timeline/page.tsx
"use client";

import Link from 'next/link';
import experienceData from '@/data/experience.json'; 
import config from '@/data/config.json'; 

// Define the structure for an individual timeline event
interface TimelineEvent {
  year: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}

const typedExperienceData: TimelineEvent[] = experienceData as TimelineEvent[];

const TimelineEventCard: React.FC<TimelineEvent> = ({ year, title, company, description, tags }) => (
  <div className="flex flex-col md:flex-row mb-12 relative">
    {/* Year / Timeline Dot */}
    <div className="flex-shrink-0 md:w-1/4 mb-4 md:mb-0 relative">
      <div className="md:absolute right-0 top-1/2 md:-translate-y-1/2 md:pr-10">
        <p className="text-primary text-lg font-bold uppercase tracking-wider md:text-right">
          {year}
        </p>
      </div>
      {/* Circle/Dot */}
      <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary-dark rounded-full border-2 border-app-background translate-x-[7px] z-10"></div>
    </div>

    {/* Content Card */}
    <div className="md:w-3/4 md:pl-10 relative">
      <div 
        className="bg-card-background p-6 rounded-xl shadow-md 
        border border-secondary-background hover:border-primary transition-colors duration-300"
      >
        <h3 className="text-2xl font-bold text-high-contrast-text mb-1">{title}</h3>
        <p className="text-primary font-semibold mb-3">{company}</p>
        
        <p className="text-secondary-text mb-4">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            // 🛑 FIX: Removed 'border border-primary'
            <span key={i} className="px-3 py-1 bg-accent-background text-app-text text-xs font-medium rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// --- 2. Main Page Component ---
export default function ExperienceTimelinePage() {
  const { resumePdfPath, resumeDownloadName } = config.siteMetadata;
  
  return (
    <div className="bg-app-background min-h-screen text-app-text pt-16 pb-24">
      <main className="container mx-auto max-w-5xl px-4">
        
        {/* Header Section */}
        <header className="text-center mb-12 pb-8 border-b border-border-secondary">
          <h1 className="text-5xl font-extrabold text-high-contrast-text mb-2">
            My Professional Timeline
          </h1>
          <p className="text-secondary-text text-lg">
            A comprehensive look at my career path, key roles, and major educational milestones.
          </p>
        </header>

        {/* Timeline Container */}
        <section className="relative">
          {/* Main vertical line for MD screens and up */}
          <div className="hidden md:block absolute left-1/4 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border-secondary"></div>

          {typedExperienceData.map((event, index) => (
            <TimelineEventCard key={index} {...event} />
          ))}
        </section>

        {/* Final CTA */}
        <div className="mt-16 text-center pt-8 border-t border-border-secondary">
          <a 
            href={resumePdfPath} 
            target="_blank"
            className="inline-block px-8 py-4 bg-primary-dark text-high-contrast-text font-bold uppercase tracking-wide rounded-lg shadow-lg hover:bg-primary-hover transition-colors duration-300 text-xl"
            download={resumeDownloadName} 
            rel="noopener noreferrer"
          >
            DOWNLOAD FORMAL RESUME (PDF)
          </a>
        </div>
      </main>
    </div>
  );
}