// src/components/NavBar.tsx
import Link from 'next/link';
import config from '@/data/config.json';

export default function NavBar() {
  const { website } = config.siteMetadata;
  const { linkedinUrl, email } = config.contact; 
  
  return (
    
    <nav className="bg-app-background text-app-text px-4 md:px-8 pt-12 pb-8"> 
      <div className="flex justify-between items-center">
        
        {/* HOME LINK */}
        <h1 className="text-xl md:text-2xl font-bold tracking-wider">
          {/* 🛑 REPLACED: hover:text-white */}
          <Link href="/" className="hover:text-high-contrast-text transition-colors flex items-center p-1">
            
            {/* HOME ICON */}
            {/* 🛑 REPLACED: text-white */}
            <svg className="w-6 h-6 inline-block md:hidden text-high-contrast-text" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l-10 9h2v11h6v-7h4v7h6v-11h2l-10-9zM12 4.479l7 6.3V20h-4v-7h-6v7H5V10.779l7-6.3z"/>
            </svg>
            
            <span className="hidden md:inline">{website}</span>
          </Link>
        </h1>
        
        {/* Contact Links Container */}
        <div className="flex items-center gap-3 md:gap-4"> 
          
          {/* ABOUT Link */}
          {/* 🛑 REPLACED: text-gray-400 hover:text-white */}
          <Link href="/about" className="text-secondary-text hover:text-high-contrast-text text-sm font-semibold uppercase tracking-wider transition-colors">
            ABOUT
          </Link>

          {/* LinkedIn Link */}
          {/* 🛑 REPLACED: text-gray-400 hover:text-white */}
          <Link href={linkedinUrl} target="_blank" className="text-secondary-text hover:text-high-contrast-text transition-colors p-1">
            <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <span className="sr-only">LinkedIn</span>
          </Link>
          
          {/* Email Button */}
          {/* 🛑 REPLACED: bg-red-600 text-white hover:bg-red-700 */}
          <Link 
            href={`mailto:${email}`} 
            className="inline-flex items-center px-2 py-1 md:px-4 md:py-2 bg-primary-dark text-high-contrast-text font-semibold rounded-md hover:bg-primary-hover transition-colors"
          >
            <svg className="w-5 h-5 mr-0 md:mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
            <span className="hidden md:inline">EMAIL ME</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}