import { motion } from "framer-motion";
import { XCircle, AlertTriangle } from "lucide-react";
import GlassCard from "./GlassCard";
import Badge from "./Badge";
import { getPriorityColor } from "../utils/helpers";

export default function MissingSkillsCard({ skills = [] }) {
  return (
    <GlassCard glow="pink" delay={0.15}>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-white">Missing Skills</h3>
        <Badge tone="pink">{skills.length} gaps</Badge>
      </div>
      <div className="space-y-3">
        {skills.map((skill, i) => {
          const color = getPriorityColor(skill.importance);
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <XCircle className="w-5 h-5 text-pink" />
                <span className="text-sm font-medium text-white">{skill.name}</span>
              </div>
              <span
                className="flex items-center gap-1.5 text-xs font-semibold rounded-full px-2.5 py-1"
                style={{ color, background: `${color}1a` }}
              >
                {skill.importance === "High" && <AlertTriangle className="w-3 h-3" />}
                {skill.importance}
              </span>
            </motion.div>
          );
        })}
      </div>
    </GlassCard>
  );
}
