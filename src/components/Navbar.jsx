import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import Button from "./Button";
import { cn } from "../utils/helpers";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/analyzer", label: "Resume Analyzer" },
  { to: "/ats-score", label: "ATS Score" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300",
            scrolled ? "glass-strong" : "bg-transparent"
          )}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple to-pink flex items-center justify-center shadow-glow-purple group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">Resumind</span>
          </Link>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    isActive
                      ? "text-white bg-white/10"
                      : "text-white/55 hover:text-white hover:bg-white/5"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button to="/analyzer" size="sm">
              Get Started
            </Button>
          </div>

          {/* mobile toggle */}
          <button
            className="md:hidden w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-2 glass-strong rounded-2xl overflow-hidden"
            >
              <div className="flex flex-col p-3 gap-1">
                {LINKS.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      cn(
                        "px-4 py-3 rounded-xl text-sm font-medium transition-all",
                        isActive
                          ? "text-white bg-white/10"
                          : "text-white/55 hover:text-white hover:bg-white/5"
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="pt-2">
                  <Button to="/analyzer" size="sm" className="w-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
