// src/components/Hero.tsx
"use client";

import Image from 'next/image'; 
import Link from 'next/link';
import config from '@/data/config.json'; 

export default function Hero() {
  const { fullName, titlePosition, brandStatement, resumePdfPath, resumeDownloadName } = config.siteMetadata;

  return (
    <section className="bg-app-background text-app-text py-0 px-4 md:px-8"> 
      
      <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-8 md:space-y-0 md:space-x-12 mt-8 md:mt-16">
        
        {/* Profile Image */}
        <Link 
          href="/about"
          className="relative group block"
        >
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary-dark flex-shrink-0 transition-all duration-300 group-hover:border-8">
            <Image
              src="/images/profile-pic.jpg" 
              alt={fullName}
              width={192} 
              height={192} 
              className="object-cover w-full h-full" 
              priority
            />
          </div>
          {/* Tooltip (Hidden by default, visible on group hover */}
          <span className="absolute left-1/2 bottom-[-1.5rem] transform -translate-x-1/2 whitespace-nowrap bg-high-contrast-text text-app-background text-xs font-semibold px-2 py-1 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 pointer-events-none z-20">
            Open About Page
          </span>
        </Link>

        {/* Text Content */}
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-high-contrast-text leading-tight mb-2">
            {fullName}
          </h2>
          
          <p className="text-primary text-xl md:text-2xl font-semibold mb-4">
            {titlePosition}
          </p>

          <p className="text-secondary-text text-xl mb-8">
            {brandStatement}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">     
            
            {/* Portfolio Button */}
            <Link 
              href="/technical-portfolio" 
              className="inline-block px-8 py-4 bg-primary-dark text-high-contrast-text font-bold uppercase tracking-wide rounded-lg shadow-lg hover:bg-primary-hover transition-colors duration-300"
            >
              VIEW TECHNICAL PORTFOLIO
            </Link>

            {/* Resume Button */}
            <a 
              href={resumePdfPath}
              target="_blank"
              className="inline-block px-8 py-4 bg-primary-dark text-high-contrast-text font-bold uppercase tracking-wide rounded-lg shadow-lg hover:bg-primary-hover transition-colors duration-300"
              download={resumeDownloadName} 
              rel="noopener noreferrer"
            >
              DOWNLOAD FULL RESUME (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}