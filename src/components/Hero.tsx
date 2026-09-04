"use client";

import Link from "next/link";
import { FaGithub, FaBriefcase } from "react-icons/fa6";
import config from "@/data/config.json";

export default function Hero() {
  const { fullName, titlePosition1, titlePosition2, brandStatement } =
    config.siteMetadata;
  const { githubUrl } = config.contact;

  return (
    <section className="bg-app-background text-app-text px-4 md:px-0 min-h-[calc(100vh-6rem)] flex items-center">
      <div className="w-full flex flex-col md:flex-row items-center text-center md:text-left gap-10 md:gap-16">
        {/* Headshot — double-frame border like the reference */}
        <div className="w-64 sm:w-80 md:w-[28rem] h-80 sm:h-[30rem] md:h-[40rem] flex-shrink-0 border-[10px] border-primary p-3 mx-auto md:mx-0 bg-app-background">
          <div className="w-full h-full border-8 border-primary p-2">
            <img
              src="/images/big_headshot1.jpg"
              alt="Headshot"
              className="w-full h-full object-cover block"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full">
          <h2 className="text-7xl sm:text-5xl md:text-[5.5rem] font-bold text-highlight leading-tight mb-2">
            {fullName}
          </h2>

          <p className="italic font-heading text-high-contrast-text text-lg sm:text-xl md:text-2xl mb-8 leading-snug">
            {titlePosition1} <br /> {titlePosition2}
          </p>

          <p className="text-secondary-text text-base sm:text-lg mb-8 max-w-lg mx-auto md:mx-0 md:ml-auto text-center md:text-right">
            {brandStatement}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-dark italic font-heading text-base rounded-none shadow-sm hover:bg-primary-hover transition-colors flex-1"
            >
              <FaGithub className="w-4 h-4" />
              My GitHub
            </Link>

            <Link
              href="/technical-portfolio"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-dark italic font-heading text-base rounded-none shadow-sm hover:bg-primary-hover transition-colors flex-1"
            >
              My Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
