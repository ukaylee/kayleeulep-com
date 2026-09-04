// src/app/about/page.tsx
import Link from "next/link";
import { FaEnvelope, FaBriefcase } from "react-icons/fa6";
import config from "@/data/config.json";
import aboutData from "@/data/about.json";
import { ReactNode } from "react";
import Image from "next/image";

const ListSection: React.FC<{
  title: string;
  children: ReactNode;
  className?: string;
}> = ({ title, children, className = "" }) => (
  <section className={`mt-10 py-4 ${className}`}>
    <h2 className="text-4xl font-heading font-extrabold text-high-contrast-text mb-6 border-b border-primary-dark pb-2">
      {title}
    </h2>
    <div className="text-secondary-text space-y-4">{children}</div>
  </section>
);

export default function AboutPage() {
  const { email } = config.contact;
  const { header, intro, aiPhilosophy, principles, evidence, callToAction } =
    aboutData;
  const renderHtml = (html: string) => (
    <span dangerouslySetInnerHTML={{ __html: html }} />
  );

  return (
    <div className="bg-app-background min-h-screen text-app-text pt-16 pb-24">
      <main className="max-w-5xl mx-auto px-4">
        {/* Intro + Education + Oval image */}
        <section className="flex flex-col md:flex-row gap-12 pb-16">
          <div className="md:w-1/2 flex flex-col justify-center">
            <header className="mb-2 pt-4">
              <h3 className="text-6xl font-heading text-high-contrast-text mb-4">
                {header.title}
              </h3>
            </header>
            <p className="text-app-text text-base leading-relaxed mb-10 text-left">
              {renderHtml(intro.quote)}
            </p>

            <div className="text-right">
              <h3 className="text-6xl font-heading text-high-contrast-text mb-4">
                Education
              </h3>
              <p className="text-app-text text-base leading-relaxed mb-10 text-right">
                {renderHtml(intro.education)}
              </p>

              <a
                href={config.siteMetadata.resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                download={config.siteMetadata.resumeDownloadName}
                className="inline-block px-6 py-3 bg-primary text-on-dark font-heading italic rounded-none hover:bg-primary-hover transition-colors"
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>

          {/* Oval headshot with primary-colored ring border */}
          <div className="md:w-2/5 mx-auto aspect-[3/5] rounded-full bg-primary p-3">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src="/images/big_headshot2.jpeg"
                alt="Headshot"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Mission / Vision full-bleed banner */}
      <section className="bg-primary mt-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative h-[340px] md:h-[400px]">
          {/* Mission — pinned top-left */}
          <div className="absolute top-20 md:top-15 left-4 md:left-0 max-w-xs">
            <h2 className="text-6xl font-heading font-bold text-on-dark mb-4">
              Mission
            </h2>
            <p className="text-on-dark/90 text-sm">{intro.mission}</p>
          </div>

          {/* Vision — pinned bottom-right */}
          <div className="absolute bottom-20 md:bottom-15 right-4 md:right-0 max-w-xs text-right">
            <h2 className="text-6xl font-heading font-bold text-on-dark mb-4">
              Vision
            </h2>
            <p className="text-on-dark/90 text-sm ml-auto">{intro.vision}</p>
          </div>

          {/* Flower — bottom flush with container bottom, centered horizontally */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-0 w-[500px] h-[340px] md:h-[400px] max-w-full">
            <Image
              src="/images/decoration/flower.png"
              alt=""
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4">
        {/* Guiding Principles */}
        <section className="mt-16 flex flex-col md:flex-row gap-8">
          <h2 className="text-6xl font-heading text-high-contrast-text md:[writing-mode:vertical-rl] md:rotate-180 flex-shrink-0">
            Guiding Principles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 flex-1">
            {principles.map((p, index) => (
              <div
                key={index}
                className="bg-accent-background p-6 text-center flex flex-col items-center justify-center"
              >
                <span className="text-primary-dark font-bold uppercase text-sm tracking-wide mb-2">
                  {p.term}
                </span>
                <p className="text-app-text text-sm">{p.definition}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* The Evidence — full-bleed, title left / text right */}
      <section className="bg-primary-dark py-16 mt-12">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-8">
          <h2 className="text-6xl font-heading text-on-dark md:w-1/4 flex-shrink-0">
            The Evidence
          </h2>
          <div className="space-y-4 md:w-3/4">
            {evidence.story.map((paragraph, index) => (
              <p
                key={index}
                className="leading-relaxed text-lg text-on-dark/90"
              >
                {renderHtml(paragraph)}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* AI Integration Philosophy — full-bleed, image flush right */}
      <section className="bg-tertiary">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
          <div className="flex flex-col justify-center py-16 px-4 md:pl-[max(1rem,calc((100vw-64rem)/2+1rem))] md:pr-16">
            <h2 className="text-6xl font-heading text-on-dark mb-6 leading-tight">
              AI Integration Philosophy
            </h2>
            <div className="space-y-4">
              {aiPhilosophy.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-on-dark/90 text-sm leading-relaxed"
                >
                  {renderHtml(paragraph)}
                </p>
              ))}
            </div>
          </div>

          {/* Placeholder image — flush to right edge of viewport */}
          {/* Flower image — flush to right edge of viewport */}
          {/* Flower image — flush to right edge of viewport */}
          <div className="hidden md:block relative w-full aspect-[586/638] max-h-[38rem]">
            <Image
              src="/images/decoration/flowerbg1.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
      <main className="max-w-5xl mx-auto px-4">
        {/* Technical Skills */}
        <section className="mt-16 text-center">
          <h2 className="text-6xl font-heading text-high-contrast-text justify-center mb-8">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {evidence.technicalSkills.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-primary p-6 text-center flex flex-col"
              >
                <span className="text-khaki font-bold uppercase text-sm tracking-wide mb-4">
                  {skill.area}
                </span>
                <p className="text-on-dark text-sm flex-1 flex items-center justify-center">
                  {skill.list}
                </p>
              </div>
            ))}
          </div>

          {/* Areas of Exploration */}
          <div className="space-y-4 text-secondary-text">
            {evidence.technicalSkills.explorationAreas.map((area, index) => (
              <div key={index}>
                <span className="text-primary font-bold">{area.title}:</span>{" "}
                {area.description}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="mt-16 text-center pt-8">
          <p className="text-2xl md:text-3xl font-heading text-highlight mb-4">
            {callToAction.message}
          </p>
          <p className="text-app-text text-lg mb-6">{callToAction.subtext}</p>

          <Link
            href={`mailto:${email}`}
            className="inline-flex items-center px-6 py-3 bg-primary-dark text-on-dark font-semibold rounded-none hover:bg-primary-hover transition-colors duration-300"
          >
            <FaEnvelope className="mr-2 w-5 h-5" />
            Email Me
          </Link>
        </div>
      </main>
    </div>
  );
}
