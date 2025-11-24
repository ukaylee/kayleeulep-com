// src/app/about/page.tsx
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa6'; 
import config from '@/data/config.json'; 
import aboutData from '@/data/about.json'; 
import { ReactNode } from 'react';

// Helper component for structured data lists (Principles and Skills)
const ListSection: React.FC<{ title: string; children: ReactNode; className?: string }> = ({ title, children, className = "" }) => (
  <section className={`mt-10 py-4 ${className}`}>
    {/* 🛑 REPLACED: text-white border-red-600 */}
    <h2 className="text-4xl font-extrabold text-high-contrast-text mb-6 border-b border-primary-dark pb-2">{title}</h2>
    {/* 🛑 REPLACED: text-gray-300 */}
    <div className="text-secondary-text space-y-4">
      {children}
    </div>
  </section>
);

export default function AboutPage() {
  const { email } = config.contact;
  // NOTE: Destructuring now includes aiPhilosophy
  const { header, intro, aiPhilosophy, principles, evidence, callToAction } = aboutData;
  // A helper to safely render HTML content from JSON, primarily for bolding
  const renderHtml = (html: string) => <span dangerouslySetInnerHTML={{ __html: html }} />;

  return (
    <div className="bg-app-background min-h-screen text-app-text pt-16 pb-24">
      <main className="container mx-auto max-w-5xl px-4">
        
        {/* Header Section */}
        <header className="text-center mb-12 pb-8 border-b border-border-secondary">
          <h1 className="text-5xl font-extrabold text-high-contrast-text mb-2">
            {header.title}
          </h1>
          <p className="text-secondary-text text-lg">
            {header.subtitle}
          </p>
        </header>

        {/* Intro */}
        <section className=""> 
          {/* Quote (will now use the readable font) */}
          <p className="text-xl italic text-text-base mb-6 border-l-4 border-secondary pl-4">{renderHtml(intro.quote)}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div>
              {/* Primary Accent Text */}
              <span className="text-xl font-bold text-primary mb-2 uppercase tracking-wide">My Mission</span>
              <p className="text-text-base text-lg">{intro.mission}</p>
            </div>
            <div>
              {/* Primary Accent Text */}
              <span className="text-xl font-bold text-primary mb-2 uppercase tracking-wide">My Vision</span>
              <p className="text-text-base text-lg">{intro.vision}</p>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <ListSection title="Guiding Principles">
          <ul className="space-y-3 text-lg">
            {principles.map((p, index) => (
              <li key={index}>
                {/* Primary Accent for Term */}
                <span className="text-primary font-bold uppercase">{p.term}:</span> {p.definition}
              </li>
            ))}
          </ul>
        </ListSection>
        
        {/* NEW AI Philosophy Section */}
        <ListSection title="My AI Integration Philosophy">
          <div className="space-y-4">
            {aiPhilosophy.map((paragraph, index) => (
              <p key={index} className="leading-relaxed text-lg">{renderHtml(paragraph)}</p>
            ))}
          </div>
        </ListSection>

        {/* Story */}
        <ListSection title="The Story Behind the Code">
          <div className="space-y-4">
            {evidence.story.map((paragraph, index) => (
              <p key={index} className="leading-relaxed text-lg">{renderHtml(paragraph)}</p>
            ))}
          </div>
        </ListSection>

        {/* Technical Skills */}
        <ListSection title="Technical Skills & Competencies">
          <div className="space-y-8 text-lg">
            <div>
              <h4 className="text-xl font-semibold text-high-contrast-text mb-3">TECHNICAL SKILLS</h4>
              <p className="text-secondary-text space-y-2">
                {evidence.technicalSkills.skills.map((skill, index) => (
                  <span key={index} className="block">
                    <span className="text-primary font-bold uppercase">{skill.area}:</span> {skill.list}
                  </span>
                ))}
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-high-contrast-text mb-3">AREAS OF EXPLORATION</h4>
              {/* NOTE: Updated rendering logic to iterate over explorationAreas array */}
              <div className="space-y-4 text-secondary-text">
                {evidence.technicalSkills.explorationAreas.map((area, index) => (
                  <div key={index}>
                    <span className="text-primary font-bold">{area.title}:</span> {area.description}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ListSection>

        {/* FINAL CALL TO ACTION WITH EMAIL BUTTON */}
        <div className="mt-16 text-center pt-8 border-t border-border-secondary">
          <p className="text-2xl font-bold text-primary mb-4">{callToAction.message}</p>
          <p className="text-secondary-text text-lg mb-6">{callToAction.subtext}</p>
          
          <Link 
            href={`mailto:${email}`}
            className="inline-flex items-center px-8 py-4 bg-primary-dark text-high-contrast-text font-bold uppercase tracking-wide rounded-lg shadow-lg hover:bg-primary-hover transition-colors duration-300 text-xl"
          >
            <FaEnvelope className="mr-3 w-6 h-6" />
            EMAIL ME
          </Link>
        </div>

      </main>
    </div>
  );
}