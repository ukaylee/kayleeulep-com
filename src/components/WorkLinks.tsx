import Link from "next/link";
import { FaGithub, FaMusic, FaRegCalendarCheck } from "react-icons/fa6";
import config from "@/data/config.json";

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
      <div className="text-xl font-bold uppercase tracking-wider text-center md:text-left mb-8 text-high-contrast-text">
        My Core Links & Work
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href={href}
          target="_blank"
          className="flex flex-col items-center justify-center p-8 bg-card-background border border-border-secondary rounded-lg shadow-sm hover:border-primary hover:bg-accent-background/40 transition-colors duration-300 text-center"
        >
          <FeaturedIcon className="text-5xl mb-4 text-primary" />
          <h3 className="text-xl font-semibold text-high-contrast-text">
            {name}
          </h3>
          <span className="text-sm text-secondary-text">{siteDisplay}</span>
        </Link>

        <Link
          href={githubUrl}
          target="_blank"
          className="flex flex-col items-center justify-center p-8 bg-card-background border border-border-secondary rounded-lg shadow-sm hover:border-primary hover:bg-accent-background/40 transition-colors duration-300 text-center"
        >
          <FaGithub className="text-5xl mb-4 text-primary-dark" />
          <h3 className="text-xl font-semibold text-high-contrast-text">
            Github Profile
          </h3>
          <span className="text-sm text-secondary-text">
            {githubUrl.replace("https://", "").replace("http://", "")}
          </span>
        </Link>

        <Link
          href="/experience-timeline"
          className="flex flex-col items-center justify-center p-8 bg-card-background border border-border-secondary rounded-lg shadow-sm hover:border-primary hover:bg-accent-background/40 transition-colors duration-300 text-center"
        >
          <FaRegCalendarCheck className="text-5xl mb-4 text-primary" />
          <h3 className="text-xl font-semibold text-high-contrast-text">
            Experience Timeline
          </h3>
          <span className="text-sm text-secondary-text">timeline/profile</span>
        </Link>
      </div>
    </section>
  );
}
