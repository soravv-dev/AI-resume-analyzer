import { motion } from "framer-motion";
import { getScoreColor } from "../utils/helpers";

// Animated horizontal progress bar.
export default function ProgressBar({ value = 0, label, showValue = true, delay = 0 }) {
  const color = getScoreColor(value);

  return (
    <div className="w-full">
      {label && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-white/70">{label}</span>
          {showValue && (
            <span className="text-sm font-semibold" style={{ color }}>
              {value}%
            </span>
          )}
        </div>
      )}
      <div className="h-2.5 w-full rounded-full bg-white/8 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, #8B5CF6, #EC4899, ${color})`,
            boxShadow: `0 0 12px ${color}66`,
          }}
        />
      </div>
    </div>
  );
}
