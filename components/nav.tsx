import Link from "next/link";
import { site } from "@/lib/site";

type NavItem = {
  href: string;
  label: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  { href: "/", label: "home" },
  { href: "/blog", label: "blog" },
  { href: site.github, label: "github", external: true },
  { href: site.linkedin, label: "linkedin", external: true },
];

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 md:overflow-auto scroll-pr-6"
          aria-label="Primary"
        >
          <div className="flex flex-row flex-wrap gap-2 pr-8">
            {navItems.map((item) => {
              const classes =
                "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex items-center relative py-1 px-2 m-1 text-sm uppercase tracking-[0.2em]";

              if (item.external) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={classes}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link key={item.href} href={item.href} className={classes}>
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
