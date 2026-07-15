import { useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, FileText, X, CheckCircle2 } from "lucide-react";
import GlassCard from "./GlassCard";
import Button from "./Button";

// Drag & drop upload area with file preview and simulated analysis trigger.
export default function DragDropUpload({ onAnalyze, loading }) {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);

  const handleFiles = useCallback((files) => {
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setDragging(false);
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles]
  );

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => setDragging(false);

  const removeFile = () => {
    setFile(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <GlassCard glow="orange" hover={false} className="w-full">
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />

      {!file ? (
        <motion.div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => inputRef.current?.click()}
          animate={dragging ? { scale: 1.02 } : { scale: 1 }}
          className={`cursor-pointer rounded-2xl border-2 border-dashed transition-all duration-300 px-6 py-14 text-center ${
            dragging
              ? "border-orange bg-orange/10"
              : "border-white/15 hover:border-purple/50 hover:bg-white/5"
          }`}
        >
          <motion.div
            animate={dragging ? { y: -6 } : { y: 0 }}
            className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple/30 to-pink/30 border border-white/10 flex items-center justify-center mb-5"
          >
            <UploadCloud className="w-8 h-8 text-orange" />
          </motion.div>
          <p className="text-lg font-semibold text-white mb-1">
            {dragging ? "Drop your resume here" : "Drag & drop your resume"}
          </p>
          <p className="text-sm text-white/45 mb-4">
            or click to browse — PDF, DOC, DOCX up to 5 MB
          </p>
          <Button size="sm" variant="secondary" type="button">
            <FileText className="w-4 h-4" />
            Choose File
          </Button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-5"
        >
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple to-pink flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">{file.name}</p>
              <p className="text-xs text-white/40">
                {(file.size / 1024 / 1024).toFixed(2)} MB · Ready to analyze
              </p>
            </div>
            <button
              onClick={removeFile}
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors shrink-0"
              aria-label="Remove file"
            >
              <X className="w-4 h-4 text-white/60" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            {!loading ? (
              <motion.div
                key="analyze"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3"
              >
                <Button onClick={() => onAnalyze(file)} className="flex-1">
                  <CheckCircle2 className="w-5 h-5" />
                  Analyze Resume
                </Button>
                <Button variant="ghost" onClick={removeFile}>
                  Cancel
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center gap-3 py-2"
              >
                <div className="w-5 h-5 border-2 border-orange/30 border-t-orange rounded-full animate-spin" />
                <span className="text-sm text-white/60">Analyzing your resume...</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </GlassCard>
  );
}
