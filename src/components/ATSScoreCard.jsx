import { motion } from "framer-motion";
import CircularProgress from "./CircularProgress";
import GlassCard from "./GlassCard";
import Badge from "./Badge";
import { getScoreColor, getScoreLabel } from "../utils/helpers";

export default function ATSScoreCard({ score = 0, categories = [] }) {
  const color = getScoreColor(score);
  const label = getScoreLabel(score);

  return (
    <GlassCard glow="orange" delay={0.1} className="flex flex-col items-center">
      <div className="flex items-center justify-between w-full mb-6">
        <h3 className="text-lg font-semibold text-white">ATS Readiness Score</h3>
        <Badge tone="orange">{label}</Badge>
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="my-4"
      >
        <CircularProgress value={score} color={color} label="out of 100" size={180} />
      </motion.div>

      <div className="grid grid-cols-2 gap-3 w-full mt-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.05 }}
            className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-white/60">{cat.label}</span>
              <span className="text-xs font-bold" style={{ color: getScoreColor(cat.score) }}>
                {cat.score}
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/8 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${cat.score}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + i * 0.05 }}
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, #8B5CF6, ${getScoreColor(cat.score)})`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
}
