import { motion } from "framer-motion";
import { FileX } from "lucide-react";
import Button from "./Button";

export default function EmptyState({
  icon: Icon = FileX,
  title = "Nothing here yet",
  text = "Upload a resume to see your analysis results.",
  actionLabel,
  onAction,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-3xl p-10 text-center flex flex-col items-center gap-4"
    >
      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
        <Icon className="w-8 h-8 text-white/40" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/50 mt-1 max-w-sm">{text}</p>
      </div>
      {actionLabel && (
        <Button size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </motion.div>
  );
}
