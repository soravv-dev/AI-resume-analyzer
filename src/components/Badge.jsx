import { motion } from "framer-motion";
import { cn } from "../utils/helpers";

const TONES = {
  purple: "bg-purple/15 text-purple border-purple/30",
  pink: "bg-pink/15 text-pink border-pink/30",
  orange: "bg-orange/15 text-orange border-orange/30",
  neutral: "bg-white/5 text-white/70 border-white/10",
};

export default function Badge({ children, tone = "neutral", className, ...props }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        TONES[tone],
        className
      )}
      {...props}
    >
      {children}
    </motion.span>
  );
}
