import { motion } from "framer-motion";
import { Compass, ArrowLeft } from "lucide-react";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-purple to-pink flex items-center justify-center shadow-glow-purple mb-8"
        >
          <Compass className="w-10 h-10 text-white" />
        </motion.div>

        <h1 className="text-7xl sm:text-9xl font-extrabold gradient-text mb-4">404</h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
          Page not found
        </h2>
        <p className="text-white/45 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>
        <Button to="/" size="lg">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Button>
      </motion.div>
    </div>
  );
}
