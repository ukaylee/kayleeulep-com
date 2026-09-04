import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import config from "@/data/config.json";

export default function Footer() {
  const { email, linkedinUrl } = config.contact;
  const { copyright } = config.siteMetadata;

  return (
    <footer className="bg-app-background text-secondary-text border-t border-border-secondary py-12 px-4 md:px-8 text-center mt-auto w-full">
      <div className="container mx-auto max-w-5xl">
        <Link
          href={`mailto:${email}`}
          className="inline-block px-8 py-4 bg-primary-dark text-on-dark text-xl font-bold uppercase tracking-wide rounded-lg shadow-lg hover:bg-primary-hover transition-colors duration-300 mb-6"
        >
          Let's Build Something
        </Link>

        <div className="flex justify-center mb-6">
          <Link
            href={linkedinUrl}
            target="_blank"
            className="text-secondary-text hover:text-primary transition-colors"
          >
            <FaLinkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>

        <p className="text-sm">{copyright}</p>
      </div>
    </footer>
  );
}
