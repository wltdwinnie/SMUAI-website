import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Team" },
  { href: "/events", label: "Events" },
  { href: "/partners", label: "Partners" },
];

const socialLinks = [
  { href: "https://linkedin.com/company/smuai", label: "LinkedIn", icon: Linkedin },
  { href: "https://www.instagram.com/smu.ai/", label: "Instagram", icon: Instagram },
  { href: "mailto:smuai@sa.smu.edu.sg", label: "Email", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-soft bg-brand-cloud text-brand-deep-blue">
      <div className="mx-auto grid w-full max-w-[1320px] gap-10 px-5 py-14 lg:grid-cols-[1.3fr_1fr_1.1fr] lg:px-8">
        <div>
          <Image
            src="/brand/smuai_navy_logo.png"
            alt="SMUAI"
            width={260}
            height={81}
            className="h-auto w-[220px]"
          />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-slate">
            Student-led AI community at SMU, building ideas through events, projects, and partnerships.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-soft bg-white/70 px-4 py-2 text-sm font-semibold text-brand-deep-blue transition hover:border-brand-gold hover:text-brand-deep-blue"
                >
                  <Icon size={16} />
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-slate">Shortcuts</h3>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-base font-medium text-brand-deep-blue transition-colors hover:text-brand-slate"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-slate">Membership</h3>
          <p className="mt-5 text-sm leading-relaxed text-brand-slate">
            Registration form is currently being prepared. Join once the next intake opens.
          </p>
          <a
            href="mailto:smuai@sa.smu.edu.sg?subject=SMUAI%20Membership%20Registration%20Interest"
            className="mt-6 inline-flex items-center rounded-full border border-brand-deep-blue bg-brand-deep-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-deep-blue"
          >
            Membership Registration (TBC)
          </a>
        </div>
      </div>

      <div className="border-t border-brand-soft">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-2 px-5 py-5 text-xs text-brand-slate sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} SMUAI. All rights reserved.</p>
          <p>Singapore Management University</p>
        </div>
      </div>
    </footer>
  );
}
