/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          900: "#140A2F",
          800: "#1E1147",
          700: "#2B135C",
        },
        purple: {
          DEFAULT: "#8B5CF6",
        },
        pink: {
          DEFAULT: "#EC4899",
        },
        orange: {
          DEFAULT: "#FB923C",
        },
        amber: {
          light: "#FDBA74",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "purple-gradient":
          "linear-gradient(135deg, #140A2F 0%, #1E1147 50%, #2B135C 100%)",
        "purple-radial":
          "radial-gradient(ellipse at top, #2B135C 0%, #140A2F 70%)",
      },
      boxShadow: {
        "glow-purple": "0 0 40px -10px rgba(139, 92, 246, 0.5)",
        "glow-pink": "0 0 40px -10px rgba(236, 72, 153, 0.5)",
        "glow-orange": "0 0 40px -10px rgba(251, 146, 60, 0.45)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
