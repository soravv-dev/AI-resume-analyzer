import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScanText, RotateCcw } from "lucide-react";
import UploadResumeCard from "../components/UploadResumeCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ResumePreviewCard from "../components/ResumePreviewCard";
import ATSScoreCard from "../components/ATSScoreCard";
import SkillsCard from "../components/SkillsCard";
import MissingSkillsCard from "../components/MissingSkillsCard";
import SuggestionsCard from "../components/SuggestionsCard";
import EmptyState from "../components/EmptyState";
import {
  resumeData,
  atsScore,
  matchedSkills,
  missingSkills,
  suggestions,
} from "../data/resumeData";

export default function ResumeAnalyzer({ onAnalyze, loading }) {
  const [analyzed, setAnalyzed] = useState(false);

  const handleAnalyze = (file) => {
    onAnalyze(file, () => setAnalyzed(true));
  };

  const reset = () => {
    setAnalyzed(false);
  };

  return (
    <div className="pt-28 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10 px-4"
      >
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-white/60 mb-5">
          <ScanText className="w-3.5 h-3.5 text-orange" />
          Resume Analyzer
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3">
          Analyze Your <span className="gradient-text">Resume</span>
        </h1>
        <p className="text-white/50 max-w-xl mx-auto">
          Upload your resume to get an instant ATS score, skill match analysis,
          and personalized improvement suggestions.
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {!analyzed ? (
          <motion.div
            key="upload"
            exit={{ opacity: 0, y: -20 }}
          >
            {loading ? (
              <div className="max-w-2xl mx-auto px-4">
                <LoadingSpinner label="Scanning your resume against 10,000+ job descriptions..." />
              </div>
            ) : (
              <UploadResumeCard onAnalyze={handleAnalyze} loading={loading} />
            )}
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto px-4"
          >
            {/* dashboard header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white">Analysis Results</h2>
                <p className="text-sm text-white/45 mt-1">
                  Here's how your resume performs against ATS filters.
                </p>
              </div>
              <button
                onClick={reset}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white glass rounded-full px-4 py-2 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Analyze Another
              </button>
            </div>

            {/* dashboard grid */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <ATSScoreCard score={atsScore.overall} categories={atsScore.categories} />
              </div>
              <div className="lg:col-span-2">
                <ResumePreviewCard resume={resumeData} />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mt-6">
              <SkillsCard skills={matchedSkills} title="Matched Skills" tone="purple" />
              <MissingSkillsCard skills={missingSkills} />
            </div>

            <div className="mt-6">
              <SuggestionsCard suggestions={suggestions} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
