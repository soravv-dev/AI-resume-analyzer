import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import GlassCard from "./GlassCard";
import Badge from "./Badge";
import { getPriorityColor } from "../utils/helpers";

export default function SuggestionsCard({ suggestions = [] }) {
  return (
    <GlassCard glow="orange" delay={0.2}>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-white">Improvement Suggestions</h3>
        <Badge tone="orange">{suggestions.length} tips</Badge>
      </div>
      <div className="space-y-4">
        {suggestions.map((s, i) => {
          const color = getPriorityColor(s.priority);
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.07 }}
              className="rounded-2xl border border-white/8 bg-gradient-to-br from-white/5 to-transparent p-4"
            >
              <div className="flex items-start gap-3">
                <div
                  className="mt-0.5 w-8 h-8 shrink-0 rounded-xl flex items-center justify-center"
                  style={{ background: `${color}1a` }}
                >
                  <Lightbulb className="w-4 h-4" style={{ color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-sm font-semibold text-white">{s.title}</h4>
                    <span
                      className="text-xs font-medium rounded-full px-2 py-0.5 shrink-0"
                      style={{ color, background: `${color}1a` }}
                    >
                      {s.priority}
                    </span>
                  </div>
                  <p className="text-sm text-white/55 leading-relaxed">{s.detail}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </GlassCard>
  );
}
