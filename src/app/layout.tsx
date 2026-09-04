import "./globals.css";
import { Tenor_Sans, Playfair_Display } from "next/font/google";
import NavBar from "@/components/NavBar";

const tenorSans = Tenor_Sans({
  subsets: ["latin"],
  weight: "400", // Tenor Sans only ships in 400
  variable: "--font-tenor-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Kaylee Ulep - Professional Hub",
  description:
    "Kaylee Ulep Professional Hub for Software Engineering and Projects",
  icons: {
    icon: "/favicon.ico?v=3",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${tenorSans.variable} ${playfair.variable}`}>
      <body className="bg-app-background text-app-text min-h-screen font-sans">
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
