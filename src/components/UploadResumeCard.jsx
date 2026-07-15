import { motion } from "framer-motion";
import { ShieldCheck, Zap, Eye } from "lucide-react";
import DragDropUpload from "./DragDropUpload";

const TRUST = [
  { icon: ShieldCheck, text: "Private & secure" },
  { icon: Zap, text: "Instant analysis" },
  { icon: Eye, text: "No signup needed" },
];

export default function UploadResumeCard({ onAnalyze, loading }) {
  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <DragDropUpload onAnalyze={onAnalyze} loading={loading} />
      </motion.div>

      <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
        {TRUST.map((t, i) => (
          <motion.span
            key={t.text}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="flex items-center gap-2 text-xs text-white/40"
          >
            <t.icon className="w-4 h-4 text-orange" />
            {t.text}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
