// Dummy resume analysis data — frontend only, no backend calls

export const resumeData = {
  candidateName: "Alex Morgan",
  role: "Senior Frontend Engineer",
  email: "alex.morgan@email.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  experience: "6 years",
  education: "B.S. Computer Science — UC Berkeley",
  summary:
    "Frontend engineer with 6 years building performant, accessible web applications. Passionate about design systems, animation, and developer experience.",
};

export const atsScore = {
  overall: 87,
  categories: [
    { label: "Keyword Match", score: 92, max: 100 },
    { label: "Format & Structure", score: 95, max: 100 },
    { label: "Experience Relevance", score: 84, max: 100 },
    { label: "Skills Coverage", score: 78, max: 100 },
    { label: "Action Verbs", score: 88, max: 100 },
    { label: "Contact Info", score: 100, max: 100 },
  ],
};

export const matchedSkills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "JavaScript", level: 96 },
  { name: "Tailwind CSS", level: 88 },
  { name: "Framer Motion", level: 82 },
  { name: "Next.js", level: 85 },
  { name: "REST APIs", level: 80 },
  { name: "Git", level: 90 },
];

export const missingSkills = [
  { name: "GraphQL", importance: "High" },
  { name: "Docker", importance: "Medium" },
  { name: "CI/CD", importance: "High" },
  { name: "Web Accessibility (WCAG)", importance: "Medium" },
  { name: "Testing (Jest / Playwright)", importance: "High" },
];

export const suggestions = [
  {
    title: "Add measurable achievements",
    detail:
      "Replace 'Worked on dashboard' with 'Improved dashboard load time by 40% serving 50k+ daily users.'",
    priority: "High",
  },
  {
    title: "Include missing keywords",
    detail:
      "ATS systems scan for role-specific keywords. Add GraphQL, CI/CD, and testing frameworks to pass automated filters.",
    priority: "High",
  },
  {
    title: "Use stronger action verbs",
    detail:
      "Start bullet points with verbs like 'Architected', 'Spearheaded', 'Optimized' instead of 'Responsible for'.",
    priority: "Medium",
  },
  {
    title: "Quantify your impact",
    detail:
      "Add metrics such as team size, user count, performance gains, or revenue impact to each role entry.",
    priority: "Medium",
  },
  {
    title: "Optimize for ATS readability",
    detail:
      "Avoid columns, text boxes, and graphics. Use a single-column layout with standard section headings.",
    priority: "Low",
  },
];

export const resumeTips = [
  {
    icon: "Target",
    title: "Tailor for each role",
    text: "Customize your resume keywords to match the job description. ATS systems rank resumes by keyword relevance.",
  },
  {
    icon: "BarChart3",
    title: "Quantify achievements",
    text: "Use numbers, percentages, and timeframes. 'Reduced load time by 35%' beats 'Improved performance'.",
  },
  {
    icon: "Layout",
    title: "Keep it single-column",
    text: "ATS parsers struggle with multi-column layouts. Use a clean, single-column format with standard headings.",
  },
  {
    icon: "Zap",
    title: "Lead with action verbs",
    text: "Start each bullet with strong verbs: Architected, Spearheaded, Optimized, Delivered, Engineered.",
  },
  {
    icon: "FileText",
    title: "Use standard section titles",
    text: "Stick to 'Experience', 'Education', 'Skills'. Creative names like 'My Journey' confuse ATS parsers.",
  },
  {
    icon: "Sparkles",
    title: "Keep it concise",
    text: "1 page for < 10 years experience, 2 pages max otherwise. Every line should add value.",
  },
];

export const faqs = [
  {
    question: "What is an ATS and why does it matter?",
    answer:
      "An Applicant Tracking System (ATS) is software employers use to filter resumes before a human ever sees them. Up to 75% of resumes are rejected by ATS before reaching a recruiter. Optimizing for ATS dramatically increases your interview chances.",
  },
  {
    question: "How does the resume analyzer work?",
    answer:
      "Resumind scans your resume against job-description keywords, checks formatting compatibility, evaluates skill coverage, and identifies gaps — then produces an ATS readiness score with actionable suggestions.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "We accept PDF and DOCX files up to 5 MB. PDF is recommended because it preserves formatting across all ATS platforms.",
  },
  {
    question: "Is my data stored or shared?",
    answer:
      "No. Resumind processes your resume in your browser session. We do not store, share, or send your resume to any external service.",
  },
  {
    question: "What is a good ATS score?",
    answer:
      "A score of 80+ is considered strong and should pass most ATS filters. Scores below 70 usually indicate missing keywords or formatting issues that need attention.",
  },
  {
    question: "Can I analyze multiple resumes?",
    answer:
      "Yes. You can re-upload and analyze as many resumes as you like. Each analysis is independent and instant.",
  },
];

export const stats = [
  { label: "Resumes Analyzed", value: 142000, suffix: "+" },
  { label: "Avg Score Increase", value: 32, suffix: "%" },
  { label: "Interview Callback Rate", value: 68, suffix: "%" },
  { label: "Companies Hiring", value: 5000, suffix: "+" },
];

export const features = [
  {
    icon: "ScanText",
    title: "ATS Score Analysis",
    text: "Get an instant ATS compatibility score across 6 critical categories with a detailed breakdown.",
  },
  {
    icon: "Sparkles",
    title: "Skill Gap Detection",
    text: "See which skills you have and which ones the job description expects — with matched and missing skill lists.",
  },
  {
    icon: "Lightbulb",
    title: "Smart Suggestions",
    text: "Receive prioritized, actionable recommendations to improve weak sections of your resume.",
  },
  {
    icon: "TrendingUp",
    title: "Analytics Dashboard",
    text: "Beautiful analytics cards with animated counters and progress bars to visualize your resume health.",
  },
];

export const jobRoles = [
  "Frontend Engineer",
  "Full-Stack Developer",
  "Product Designer",
  "Data Scientist",
  "DevOps Engineer",
  "Product Manager",
];
