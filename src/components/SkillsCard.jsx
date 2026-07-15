import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import GlassCard from "./GlassCard";
import ProgressBar from "./ProgressBar";
import Badge from "./Badge";

export default function SkillsCard({ skills = [], title = "Matched Skills", tone = "purple" }) {
  return (
    <GlassCard glow={tone} delay={0.1}>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <Badge tone={tone}>{skills.length} skills</Badge>
      </div>
      <div className="space-y-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.05 }}
          >
            <ProgressBar
              value={skill.level}
              label={
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  {skill.name}
                </span>
              }
              delay={0.1 + i * 0.05}
            />
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
}
