import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

// Resume tips grid — icons are passed as Lucide components.
export default function ResumeTips({ tips = [] }) {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Pro <span className="gradient-text">Resume Tips</span>
        </h2>
        <p className="text-white/50 max-w-xl mx-auto">
          Battle-tested advice from recruiters and ATS experts to make your resume stand out.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tips.map((tip, i) => {
          const Icon = tip.icon;
          return (
            <GlassCard key={tip.title} delay={i * 0.06} glow="purple">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple/20 to-pink/20 border border-white/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-orange" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{tip.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{tip.text}</p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
