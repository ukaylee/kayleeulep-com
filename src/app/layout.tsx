// src/app/layout.tsx
import './globals.css'; 
import { Inter, Emilys_Candy } from 'next/font/google';
import NavBar from '@/components/NavBar';

// CRITICAL FIX: This constant is only needed for type generation, 
// but its class name is no longer needed on <body> due to @theme config.
const inter = Inter({ subsets: ['latin'] });

const emilysCandy = Emilys_Candy({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading'
});

export const metadata = {
  title: 'Kaylee Ulep - Professional Hub',
  description: 'Kaylee Ulep Professional Hub for Software Engineering and Projects',

  icons: {
      icon: '/favicon.ico?v=3', 
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${emilysCandy.variable}`}>
      {/* 🛑 REPLACED: ${inter.className} bg-gray-900 text-gray-200 */}
      <body className="bg-app-background text-app-text min-h-screen"> 
        
        <NavBar /> 
        
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}