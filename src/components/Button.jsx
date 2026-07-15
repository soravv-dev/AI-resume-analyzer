import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "../utils/helpers";

const VARIANTS = {
  primary:
    "bg-gradient-to-r from-purple via-pink to-orange text-white shadow-glow-purple",
  secondary:
    "glass text-white hover:bg-white/10 border border-white/10",
  ghost: "text-white/80 hover:text-white hover:bg-white/5",
  outline:
    "border border-purple/50 text-white hover:bg-purple/10 hover:border-purple",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  onClick,
  type = "button",
  className,
  disabled,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300",
    VARIANTS[variant],
    SIZES[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.04, y: -2 },
    whileTap: disabled ? {} : { scale: 0.97 },
    ...props,
  };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
