// src/app/page.tsx
import Hero from '@/components/Hero';
import WorkLinks from '@/components/WorkLinks';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    // The main content of the Home page
    <>
      {/* 1. Content Container: Centered (mx-auto) with a max-width, matching your original intent */}
      <div className="w-full max-w-5xl px-4 mx-auto"> 
        <Hero />
        
        {/* 🛑 FIX: Add a large top margin (mt-16) to separate Hero from WorkLinks */}
        <div className="mt-16">
          <WorkLinks />
        </div>
      </div>
      
      {/* Footer can be full-width, outside the max-width div */}
      <Footer />
    </>
  );
}