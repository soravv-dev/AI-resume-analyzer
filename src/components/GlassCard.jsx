import { motion } from "framer-motion";
import { cn } from "../utils/helpers";

// Generic glassmorphism card wrapper with hover lift + optional glow.
export default function GlassCard({
  children,
  className,
  glow = "none",
  hover = true,
  delay = 0,
  ...props
}) {
  const glowClass =
    glow === "purple"
      ? "hover:shadow-glow-purple"
      : glow === "pink"
      ? "hover:shadow-glow-pink"
      : glow === "orange"
      ? "hover:shadow-glow-orange"
      : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -6 } : {}}
      className={cn("glass rounded-3xl p-6 transition-shadow duration-300", glowClass, className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
