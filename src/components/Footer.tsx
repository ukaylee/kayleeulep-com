// src/components/Footer.tsx
import Link from 'next/link';
import config from '@/data/config.json'; 

export default function Footer() {
  const { email } = config.contact;
  const { copyright } = config.siteMetadata;

  return (
    <footer className="bg-app-background text-secondary-text py-12 px-4 md:px-8 text-center mt-auto w-full"> 
      <div className="container mx-auto">
        {/* Email link */}
        <Link 
          href={`mailto:${email}`}
          className="inline-block px-8 py-4 bg-primary-dark text-high-contrast-text text-2xl font-bold uppercase tracking-wide rounded-lg shadow-lg hover:bg-primary-hover transition-colors duration-300 mb-8"
        >
          LET'S BUILD SOMETHING
        </Link>
        {/* Copyright */}
        <p className="text-sm">
          {copyright}
        </p>
      </div>
    </footer>
  );
}