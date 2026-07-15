import { motion } from "framer-motion";
import { Gauge, TrendingUp, AlertCircle, Award } from "lucide-react";
import ATSScoreCard from "../components/ATSScoreCard";
import ProgressBar from "../components/ProgressBar";
import GlassCard from "../components/GlassCard";
import Badge from "../components/Badge";
import { atsScore, matchedSkills, missingSkills } from "../data/resumeData";
import { getScoreColor, getScoreLabel } from "../utils/helpers";

export default function ATSScore() {
  const color = getScoreColor(atsScore.overall);
  const label = getScoreLabel(atsScore.overall);

  return (
    <div className="pt-28 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10 px-4"
      >
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-white/60 mb-5">
          <Gauge className="w-3.5 h-3.5 text-orange" />
          ATS Score Dashboard
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3">
          Your <span className="gradient-text">ATS Score</span> Breakdown
        </h1>
        <p className="text-white/50 max-w-xl mx-auto">
          A detailed view of how your resume performs across every category ATS
          systems evaluate.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4">
        {/* top score summary cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <GlassCard glow="orange" delay={0} className="text-center">
            <Award className="w-8 h-8 text-orange mx-auto mb-3" />
            <div className="text-3xl font-bold" style={{ color }}>
              {atsScore.overall}
              <span className="text-lg text-white/40">/100</span>
            </div>
            <p className="text-sm text-white/45 mt-1">Overall Score</p>
          </GlassCard>
          <GlassCard glow="purple" delay={0.1} className="text-center">
            <TrendingUp className="w-8 h-8 text-purple mx-auto mb-3" />
            <div className="text-3xl font-bold text-white">
              {matchedSkills.length}
            </div>
            <p className="text-sm text-white/45 mt-1">Matched Skills</p>
          </GlassCard>
          <GlassCard glow="pink" delay={0.2} className="text-center">
            <AlertCircle className="w-8 h-8 text-pink mx-auto mb-3" />
            <div className="text-3xl font-bold text-white">
              {missingSkills.length}
            </div>
            <p className="text-sm text-white/45 mt-1">Missing Skills</p>
          </GlassCard>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <ATSScoreCard score={atsScore.overall} categories={atsScore.categories} />

          {/* category bars */}
          <GlassCard glow="purple" delay={0.1}>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-semibold text-white">Category Breakdown</h3>
              <Badge tone="purple">{label}</Badge>
            </div>
            <div className="space-y-5">
              {atsScore.categories.map((cat, i) => (
                <ProgressBar
                  key={cat.label}
                  value={cat.score}
                  label={cat.label}
                  delay={i * 0.08}
                />
              ))}
            </div>
          </GlassCard>
        </div>

        {/* skill match bars */}
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          <GlassCard glow="purple" delay={0.1}>
            <h3 className="text-lg font-semibold text-white mb-5">Skill Match Levels</h3>
            <div className="space-y-4">
              {matchedSkills.map((skill, i) => (
                <ProgressBar
                  key={skill.name}
                  value={skill.level}
                  label={skill.name}
                  delay={i * 0.05}
                />
              ))}
            </div>
          </GlassCard>

          <GlassCard glow="pink" delay={0.15}>
            <h3 className="text-lg font-semibold text-white mb-5">Missing Keywords</h3>
            <div className="space-y-3">
              {missingSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-3"
                >
                  <span className="text-sm font-medium text-white">{skill.name}</span>
                  <Badge tone={skill.importance === "High" ? "pink" : "purple"}>
                    {skill.importance}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
