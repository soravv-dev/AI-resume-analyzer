import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import GlassCard from "./GlassCard";

export default function FeaturesSection({ features = [] }) {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Everything you need to <span className="gradient-text">stand out</span>
        </h2>
        <p className="text-white/50 max-w-xl mx-auto">
          Powerful analysis tools wrapped in a beautiful, intuitive interface.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f, i) => {
          const Icon = Icons[f.icon] || Icons.Sparkles;
          return (
            <GlassCard key={f.title} delay={i * 0.08} glow="purple">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple/20 to-orange/20 border border-white/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-orange" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{f.text}</p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
