import { motion } from "framer-motion";
import { Target, Users, Zap, Shield, Rocket, Heart } from "lucide-react";
import GlassCard from "../components/GlassCard";
import Button from "../components/Button";
import Badge from "../components/Badge";

const VALUES = [
  { icon: Target, title: "Mission-driven", text: "Help every job seeker present their best self to recruiters and ATS systems alike." },
  { icon: Zap, title: "Instant insight", text: "No waiting, no email follow-ups. Upload and get results in seconds." },
  { icon: Shield, title: "Privacy first", text: "Your resume never leaves your browser. We don't store or share your data." },
  { icon: Heart, title: "Built with care", text: "Crafted with a premium design sensibility because job hunting deserves beauty." },
];

const TIMELINE = [
  { year: "2024", title: "Resumind launched", text: "Started as a weekend project to help friends pass ATS filters." },
  { year: "2025", title: "142k resumes analyzed", text: "Grew into a trusted tool used by job seekers worldwide." },
  { year: "2026", title: "Premium dashboard", text: "Launched a beautiful analytics dashboard with animated insights." },
];

export default function About() {
  return (
    <div className="pt-28 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-14 px-4"
      >
        <Badge tone="purple" className="mb-5">
          <Rocket className="w-3.5 h-3.5" />
          Our Story
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
          We help resumes <span className="gradient-text">get noticed</span>
        </h1>
        <p className="text-white/50 max-w-2xl mx-auto">
          Resumind was born from a simple observation: 75% of resumes are rejected
          by ATS software before a human ever reads them. We're here to change that.
        </p>
      </motion.div>

      {/* values */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {VALUES.map((v, i) => (
            <GlassCard key={v.title} delay={i * 0.08} glow="purple">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple/20 to-orange/20 border border-white/10 flex items-center justify-center mb-4">
                <v.icon className="w-6 h-6 text-orange" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{v.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{v.text}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* timeline */}
      <section className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
          Our <span className="gradient-text">Journey</span>
        </h2>
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple via-pink to-orange -translate-x-1/2" />
          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-4 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-orange -translate-x-1/2 mt-2 ring-4 ring-bg-900 shadow-glow-orange" />
                <div className="sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                  <GlassCard hover={false} glow="purple">
                    <Badge tone="orange">{item.year}</Badge>
                    <h3 className="text-base font-semibold text-white mt-3 mb-1">{item.title}</h3>
                    <p className="text-sm text-white/55">{item.text}</p>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 mt-16 text-center">
        <div className="glass-strong rounded-3xl p-10">
          <Users className="w-10 h-10 text-orange mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Join the movement</h2>
          <p className="text-white/50 mb-6">Try Resumind today — it's free and instant.</p>
          <Button to="/analyzer" size="lg">
            <Zap className="w-5 h-5" />
            Analyze My Resume
          </Button>
        </div>
      </section>
    </div>
  );
}
