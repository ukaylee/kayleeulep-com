"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaEnvelope } from "react-icons/fa6";
import config from "@/data/config.json";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/technical-portfolio" },
  { name: "Timeline", href: "/experience-timeline" },
];

export default function NavBar() {
  const pathname = usePathname();
  const { email } = config.contact;

  return (
    <nav className="bg-app-background border-b border-border-secondary pt-0 pb-5">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pt-5 text-xs md:text-sm font-semibold uppercase tracking-widest transition-colors ${
                  isActive
                    ? "text-high-contrast-text"
                    : "text-secondary-text hover:text-high-contrast-text"
                }`}
              >
                {isActive && (
                  <span className="absolute left-1/2 -translate-x-1/2 -top-0 h-2 w-14 bg-primary" />
                )}
                {link.name}
              </Link>
            );
          })}
        </div>

        <Link
          href={`mailto:${email}`}
          className="inline-flex items-center relative top-2 gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-primary-dark text-on-dark text-xs md:text-sm font-semibold uppercase tracking-wide hover:bg-primary-hover transition-colors"
        >
          <FaEnvelope className="w-4 h-4" />
          <span className="hidden sm:inline">Email Me</span>
        </Link>
      </div>
    </nav>
  );
}
