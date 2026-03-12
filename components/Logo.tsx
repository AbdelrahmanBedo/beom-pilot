"use client";

import { motion } from "framer-motion";

type LogoVariant = "nav" | "footer";

interface LogoProps {
  variant?: LogoVariant;
  onClick?: () => void;
}

const variantStyles = {
  nav: {
    container: "flex items-center gap-3",
    logoHeight: "h-[42px]",
    textSize: "text-xl",
  },
  footer: {
    container: "flex items-center gap-3",
    logoHeight: "h-[48px]",
    textSize: "text-2xl",
  },
};

export default function Logo({ variant = "nav", onClick }: LogoProps) {
  const styles = variantStyles[variant];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${styles.container} cursor-pointer group ${onClick ? "" : "pointer-events-none"}`}
      onClick={onClick}
    >
      <img
        src="/beom-logo.svg"
        alt="BEOM"
        className={`${styles.logoHeight} w-auto group-hover:opacity-80 transition-all group-hover:drop-shadow-[0_0_12px_rgba(138,43,226,0.6)]`}
      />
      <span className={`${styles.textSize} font-bold tracking-tight text-white group-hover:text-neon transition-all group-hover:drop-shadow-[0_0_8px_rgba(138,43,226,0.5)] ${variant === "nav" ? "hidden sm:block" : ""}`}>
        BEOM
      </span>
    </motion.div>
  );
}
