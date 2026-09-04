// src/app/experience-timeline/page.tsx
"use client";

import experienceData from "@/data/experience.json";
import config from "@/data/config.json";

interface TimelineEvent {
  year: string;
  title: string;
  company: string;
  description: string;
  imageUrl: string;
}

const typedExperienceData: TimelineEvent[] = experienceData as TimelineEvent[];

const TimelineEventCard: React.FC<TimelineEvent & { index: number }> = ({
  year,
  title,
  company,
  description,
  imageUrl,
  index,
}) => {
  const isImageLeft = index % 2 === 0;
  const imageOrderClass = isImageLeft ? "md:order-1" : "md:order-2";
  const contentOrderClass = isImageLeft ? "md:order-2" : "md:order-1";

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 md:gap-x-20 mb-16">
      {/* Image half: image + year label */}
      <div
        className={`${imageOrderClass} flex items-center gap-8 mb-6 md:mb-0 ${
          isImageLeft ? "md:justify-end" : "md:justify-start"
        }`}
      >
        {/* Square image block with olive shadow peeking out bottom-left */}
        <div
          className={`relative flex-shrink-0 w-64 h-64 ${
            isImageLeft ? "order-1" : "order-2"
          }`}
        >
          <div className="absolute inset-0 bg-primary" />
          <img
            src={imageUrl}
            alt={`${title} at ${company}`}
            className="absolute inset-0 w-full h-full object-cover block -translate-y-3 translate-x-3"
          />
        </div>

        {/* Fixed-width year so it lines up across all rows, same distance from the line on both sides */}
        <p
          className={`w-24 flex-shrink-0 text-center text-primary text-sm font-semibold uppercase tracking-wider ${
            isImageLeft ? "order-2" : "order-1"
          }`}
        >
          {year}
        </p>
      </div>

      {/* Text half: solid olive card */}
      <div
        className={`${contentOrderClass} bg-primary text-on-dark p-8 flex flex-col justify-center`}
      >
        <h3 className="text-3xl font-medium mb-1">{title}</h3>
        <p className="font-heading italic text-sm mb-4 opacity-90">{company}</p>
        <p className="leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default function ExperienceTimelinePage() {
  const { resumePdfPath, resumeDownloadName } = config.siteMetadata;

  return (
    <div className="bg-app-background min-h-screen text-app-text pt-16 pb-24">
      <main className="container mx-auto max-w-6xl px-4">
        {/* Header Section */}
        <header className="text-center mb-12 pb-8 border-b border-border-secondary">
          <h3 className="text-6xl font-heading text-high-contrast-text mb-2">
            My Professional Timeline
          </h3>
          <p className="text-secondary-text text-lg">
            A comprehensive look at my career path, key roles, and major
            educational milestones.
          </p>
        </header>

        <section className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border-secondary -translate-x-1/2" />

          {typedExperienceData.map((event, index) => (
            <TimelineEventCard key={index} {...event} index={index} />
          ))}
        </section>

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
      </main>
    </div>
  );
}
