import { motion } from "framer-motion";
import { FileText, Mail, Phone, MapPin, Briefcase, GraduationCap, Clock } from "lucide-react";
import GlassCard from "./GlassCard";
import Badge from "./Badge";

export default function ResumePreviewCard({ resume }) {
  if (!resume) return null;
  const rows = [
    { icon: Mail, label: "Email", value: resume.email },
    { icon: Phone, label: "Phone", value: resume.phone },
    { icon: MapPin, label: "Location", value: resume.location },
    { icon: Briefcase, label: "Experience", value: resume.experience },
    { icon: GraduationCap, label: "Education", value: resume.education },
    { icon: Clock, label: "Availability", value: "Immediate" },
  ];

  return (
    <GlassCard glow="purple" delay={0.1}>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold text-white">Resume Preview</h3>
        <Badge tone="purple">PDF</Badge>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple to-pink flex items-center justify-center shadow-glow-purple">
          <FileText className="w-7 h-7 text-white" />
        </div>
        <div>
          <h4 className="text-base font-semibold text-white">{resume.candidateName}</h4>
          <p className="text-sm text-white/50">{resume.role}</p>
        </div>
      </div>

      <p className="text-sm text-white/60 leading-relaxed mb-6 pb-6 border-b border-white/8">
        {resume.summary}
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {rows.map((row, i) => (
          <motion.div
            key={row.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.04 }}
            className="flex items-start gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
              <row.icon className="w-4 h-4 text-purple" />
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wide">{row.label}</p>
              <p className="text-sm text-white/80">{row.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
}
