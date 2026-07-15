import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import HeroSection from "../components/HeroSection";
import UploadResumeCard from "../components/UploadResumeCard";
import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/FeaturesSection";
import ResumeTips from "../components/ResumeTips";
import FAQ from "../components/FAQ";
import Button from "../components/Button";
import { stats, features, resumeTips, faqs } from "../data/resumeData";

export default function Home({ onAnalyze, loading }) {
  return (
    <div>
      <HeroSection />
      <UploadResumeCard onAnalyze={onAnalyze} loading={loading} />
      <StatsSection stats={stats} />
      <FeaturesSection features={features} />

      {/* CTA banner */}
      <section className="w-full max-w-5xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange/20 rounded-full blur-[100px]" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Ready to <span className="gradient-text-orange">boost your callbacks?</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto mb-8">
            Join 142,000+ job seekers who improved their resume with Resumind.
          </p>
          <Button to="/analyzer" size="lg">
            <Icons.ScanText className="w-5 h-5" />
            Start Analyzing — Free
          </Button>
        </motion.div>
      </section>

      <ResumeTips tips={resumeTips} />
      <FAQ faqs={faqs} />
    </div>
  );
}
