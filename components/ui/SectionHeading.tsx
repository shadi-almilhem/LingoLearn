"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeadingProps {
  spanText: string;
  h2Text: string;
}
const textReveal = {
  hidden: { opacity: 0, y: 50, blur: "10px" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const scaleUp = {
  hidden: { y: 30, opacity: 0, blur: "10px" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const SectionHeading = ({ spanText, h2Text }: SectionHeadingProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={stagger}
      className="flex flex-col items-center gap-4 sm:w-auto lg:w-[880px]"
    >
      <motion.span
        variants={textReveal}
        className="text-[16px] font-normal text-[#002145] md:text-[21px]"
      >
        {spanText}
      </motion.span>
      <motion.h2
        variants={scaleUp}
        className="md:line-height-set-lg line-height-set-sm max-w-[800px] text-center text-2xl font-medium text-[#00438A] md:text-4xl"
      >
        {h2Text}
      </motion.h2>
    </motion.div>
  );
};

export default SectionHeading;
