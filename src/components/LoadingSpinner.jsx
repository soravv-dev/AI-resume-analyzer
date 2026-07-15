import { Loader2 } from "lucide-react";

export default function LoadingSpinner({ size = 40, label = "Analyzing..." }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      <div className="relative" style={{ width: size, height: size }}>
        <div className="absolute inset-0 rounded-full border-2 border-purple/20" />
        <Loader2
          className="absolute inset-0 animate-spin text-purple"
          style={{ width: size, height: size }}
        />
      </div>
      <p className="text-sm text-white/60">{label}</p>
    </div>
  );
}
