import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ScanText, TrendingUp } from "lucide-react";
import Button from "./Button";
import Badge from "./Badge";

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 pt-20 pb-16 text-center">
      {/* glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple/30 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-pink/20 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-orange/20 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-6"
      >
        <Badge tone="purple">
          <Sparkles className="w-3.5 h-3.5" />
          AI-Powered Resume Analysis
        </Badge>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]"
      >
        Land your dream job with a
        <br className="hidden sm:block" />
        <span className="gradient-text"> resume that gets noticed</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 text-base sm:text-lg text-white/55 max-w-2xl mx-auto"
      >
        Upload your resume and get an instant ATS score, skill gap analysis, and
        tailored suggestions — all in a beautiful, private dashboard.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Button to="/analyzer" size="lg">
          <ScanText className="w-5 h-5" />
          Analyze My Resume
        </Button>
        <Button to="/ats-score" size="lg" variant="secondary">
          View ATS Score Demo
          <ArrowRight className="w-5 h-5" />
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/40"
      >
        <span className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-orange" /> 142k+ resumes analyzed
        </span>
        <span className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-pink" /> No signup required
        </span>
        <span className="flex items-center gap-2">
          <ScanText className="w-4 h-4 text-purple" /> Instant results
        </span>
      </motion.div>
    </section>
  );
}
