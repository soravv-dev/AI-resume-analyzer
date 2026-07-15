import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import ATSScore from "./pages/ATSScore";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useState, useCallback } from "react";

function AnimatedRoutes({ onAnalyze, loading }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home onAnalyze={onAnalyze} loading={loading} />
            </PageWrapper>
          }
        />
        <Route
          path="/analyzer"
          element={
            <PageWrapper>
              <ResumeAnalyzer onAnalyze={onAnalyze} loading={loading} />
            </PageWrapper>
          }
        />
        <Route
          path="/ats-score"
          element={
            <PageWrapper>
              <ATSScore />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
        <Route
          path="*"
          element={
            <PageWrapper>
              <NotFound />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(false);

  // Simulated analysis: frontend-only, just delays to show the loading state.
  const handleAnalyze = useCallback((_file, done) => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      done?.();
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes onAnalyze={handleAnalyze} loading={loading} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
