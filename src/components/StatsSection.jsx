import { motion } from "framer-motion";
import useCountUp from "../hooks/useCountUp";
import { formatNumber } from "../utils/helpers";

function StatCard({ stat, index }) {
  const { value, ref } = useCountUp(stat.value, 2000);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass rounded-3xl p-6 text-center hover:shadow-glow-purple transition-shadow duration-300"
    >
      <div className="text-3xl sm:text-4xl font-bold gradient-text">
        {formatNumber(value)}
        {stat.suffix}
      </div>
      <p className="text-sm text-white/45 mt-2">{stat.label}</p>
    </motion.div>
  );
}

export default function StatsSection({ stats = [] }) {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </section>
  );
}
