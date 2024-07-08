"use client";
import ButtonHero from "@/components/ui/ButtonHero";
import { HeroText } from "@/components/ui/HeroText";
import Testimonials from "@/components/ui/Testimonials";
import Image from "next/image";
import HeroImageAndText from "@/components/ui/HeroImageAndText";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

function Hero() {
  return (
    <section className="relative z-40 mt-32 flex w-full flex-col justify-center gap-4 md:mt-44 md:gap-16">
      <Image
        className="image-moving-animation1 absolute right-0 top-0 w-24 sm:w-40 md:right-0 md:w-56"
        src="/language1.svg"
        width={500}
        alt="language icon"
        height={500}
      />
      <Image
        className="image-moving-animation2 absolute left-0 top-40 w-24 sm:w-40 md:left-0 md:w-56"
        src="/language2.svg"
        width={500}
        alt="language icon"
        height={500}
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="flex flex-col items-center justify-center gap-8 md:gap-12"
      >
        <motion.div variants={fadeInUp}>
          <HeroText />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center"
        >
          <ButtonHero border="black" />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center"
        >
          <Testimonials />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <HeroImageAndText />
        </motion.div>
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 -z-10 -mx-2 h-[80vh] bg-gradient-to-b from-transparent from-5% to-[#006FE6] to-95% sm:-mx-4 md:-mx-16 lg:-mx-36"></div>
    </section>
  );
}

export default Hero;
