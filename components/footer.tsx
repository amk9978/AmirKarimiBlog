import { site } from "@/lib/site";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

const footerLinks = [
  { href: "/rss.xml", label: "rss" },
  { href: site.github, label: "github", external: true },
  { href: site.linkedin, label: "linkedin", external: true },
  { href: `mailto:${site.email}`, label: "email" },
];

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-y-2 text-neutral-600 md:flex-row md:space-y-0 md:space-x-4 dark:text-neutral-300">
        {footerLinks.map((link) => (
          <li key={link.href}>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              <ArrowIcon />
              <span className="ml-2 h-7 uppercase tracking-[0.2em] text-xs">
                {link.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300 text-sm">
        © {new Date().getFullYear()} {site.name}. Built on the Portfolio Starter Kit.
      </p>
    </footer>
  );
}
