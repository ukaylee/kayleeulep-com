// src/components/WorkLinks.tsx
import Link from 'next/link';
import { FaGithub, FaMusic, FaRegCalendarCheck } from 'react-icons/fa6'; 
import config from '@/data/config.json';

// Map the icon string in config.json to the actual component for dynamic rendering
const IconMap = {
  FaMusic: FaMusic,
  FaGithub: FaGithub,
  FaRegCalendarCheck: FaRegCalendarCheck,
};

export default function WorkLinks() {
  const { githubUrl } = config.contact; 
  const { name, href, siteDisplay, icon } = config.featuredLink; 
  
  const FeaturedIcon = IconMap[icon as keyof typeof IconMap] || FaMusic; 

  return (
    <section className="text-app-text">
      <div className="text-xl font-bold uppercase tracking-wider text-center md:text-left mb-8">
        MY CORE LINKS & WORK
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Link 1: Featured Project */}
        <Link 
          href={href} 
          target="_blank" 
          className="flex flex-col items-center justify-center p-8 bg-card-background rounded-lg shadow-md hover:bg-accent-background transition-colors duration-300 text-center"
        >
          <FeaturedIcon className="text-5xl mb-4 text-primary" />
          
          <h3 className="text-xl font-semibold">{name}</h3>
          <span className="text-sm text-secondary-text">{siteDisplay}</span>
        </Link>

        {/* Link 2: GitHub Profile */}
        <Link 
          href={githubUrl} 
          target="_blank" 
          className="flex flex-col items-center justify-center p-8 bg-card-background rounded-lg shadow-md hover:bg-accent-background transition-colors duration-300 text-center"
        >
          <FaGithub className="text-5xl mb-4 text-high-contrast-text" />
          
          <h3 className="text-xl font-semibold">Github Profile</h3>
          <span className="text-sm text-secondary-text">{githubUrl.replace('https://', '').replace('http://', '')}</span>
        </Link>

        {/* Link 3: Experience Timeline */}
        <Link 
          href="/experience-timeline" 
          className="flex flex-col items-center justify-center p-8 bg-card-background rounded-lg shadow-md hover:bg-accent-background transition-colors duration-300 text-center"
        >
          <FaRegCalendarCheck className="text-5xl mb-4 text-primary" />
          
          <h3 className="text-xl font-semibold">Experience Timeline</h3>
          <span className="text-sm text-secondary-text">timeline/profile</span>
        </Link>
      </div>
    </section>
  );
}