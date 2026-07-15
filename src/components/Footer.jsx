import { Link } from "react-router-dom";
import { Sparkles, Github, Twitter, Linkedin, Mail } from "lucide-react";

const SOCIALS = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

const LINK_GROUPS = [
  {
    title: "Product",
    links: [
      { label: "Resume Analyzer", to: "/analyzer" },
      { label: "ATS Score", to: "/ats-score" },
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resume Tips", to: "/analyzer" },
      { label: "FAQ", to: "/" },
      { label: "Blog", to: "/about" },
      { label: "Changelog", to: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/8">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple to-pink flex items-center justify-center shadow-glow-purple">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Resumind</span>
            </Link>
            <p className="text-sm text-white/45 max-w-sm leading-relaxed">
              The premium AI resume analyzer that helps you beat the ATS and land
              more interviews. Private, instant, and beautifully simple.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-white hover:scale-110 transition-all"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/45 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Resumind. Built for job seekers, with care.
          </p>
          <p className="text-xs text-white/35">
            Frontend demo · No data is stored or shared.
          </p>
        </div>
      </div>
    </footer>
  );
}
