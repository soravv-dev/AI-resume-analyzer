// Small formatting helpers shared across the app.

export const cn = (...classes) => classes.filter(Boolean).join(" ");

export const formatNumber = (n) => {
  if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + "k";
  return String(n);
};

export const getScoreColor = (score) => {
  if (score >= 85) return "#FB923C";
  if (score >= 70) return "#8B5CF6";
  if (score >= 50) return "#EC4899";
  return "#f87171";
};

export const getScoreLabel = (score) => {
  if (score >= 85) return "Excellent";
  if (score >= 70) return "Good";
  if (score >= 50) return "Fair";
  return "Needs Work";
};

export const getPriorityColor = (priority) => {
  switch (priority.toLowerCase()) {
    case "high":
      return "#EC4899";
    case "medium":
      return "#8B5CF6";
    case "low":
      return "#FB923C";
    default:
      return "#8B5CF6";
  }
};
