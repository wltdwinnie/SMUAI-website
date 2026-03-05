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
    <footer className="border-t border-white/10 bg-brand-deep-blue text-white">
      <div className="grid w-full gap-8 px-5 py-12 lg:grid-cols-[1.2fr_0.7fr_0.85fr] lg:items-start lg:gap-14 lg:px-12 xl:px-16">
        <div className="max-w-[360px] lg:-mt-4 lg:self-start">
          <Image
            src="/brand/smuai_lion_logo.png"
            alt="SMUAI"
            width={280}
            height={280}
            className="h-auto w-[230px] object-contain object-top"
          />
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/60">Shortcuts</h3>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-base font-medium text-white transition-colors hover:text-brand-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white/60">Social</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-sm font-semibold text-white transition hover:border-brand-gold hover:text-brand-gold"
                >
                  <Icon size={16} />
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="flex w-full flex-col gap-2 px-5 py-5 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between lg:px-12 xl:px-16">
          <p>© {new Date().getFullYear()} SMUAI. All rights reserved.</p>
          <p>Singapore Management University</p>
        </div>
      </div>
    </footer>
  );
}
