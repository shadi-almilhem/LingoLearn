"use client";
import SectionHeading from "@/components/ui/SectionHeading";
import { BookUser, GraduationCap, Languages } from "lucide-react";
import { useRef } from "react";
import { delay, motion, useInView } from "framer-motion";

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

const zoomIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.8,
    },
  },
};

function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

  const cards = [
    {
      label: "تعلم بأي وقت",
      description: "استمتع بالتعلم في أي وقت لتناسب جدولك اليومي ",
      icon: <Languages color="#000B17" strokeWidth={1.5} />,
    },
    {
      label: "مخصص لك",
      description: "نقدم تجربة تعليمية فريدة تتناسب مع احتياجاتك الشخصية ",
      icon: <BookUser color="#000B17" strokeWidth={1.5} />,
    },
    {
      label: "احصل على الشهادة",
      description: "احصل على شهادة معترف بها لتفتح لك أبوابًا جديدة ",
      icon: <GraduationCap color="#000B17" strokeWidth={1.5} />,
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="flex w-full flex-col items-center justify-center gap-16"
    >
      <SectionHeading
        spanText="ماذا نقدم لك"
        h2Text={`نقدم دروساً مبتكرة ومحادثات حية لتعلم اللغات، احصل على مهارات
        لغوية تفتح لك أبوابًا جديدة`}
      />
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={stagger}
        className="flex w-full flex-col items-center justify-evenly gap-8 sm:gap-6 md:flex-row md:gap-6"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="flex min-h-[280px] min-w-full flex-col  items-center justify-between gap-4  self-center rounded-3xl border-2  border-[#CFE5FD] bg-gradient-to-b from-[#E6F2FF] to-[#CFE5FD] px-8 py-12 sm:px-4 sm:py-8  md:min-w-min md:px-6 md:py-10"
          >
            <motion.div
              variants={zoomIn}
              className="flex h-20 w-20 items-center justify-center rounded-lg bg-[#B8D8FA] p-5 sm:p-3 md:p-4"
            >
              <span>{card.icon}</span>
            </motion.div>
            <h3 className="text-center text-lg font-semibold text-[#002145] sm:text-sm md:text-base">
              {`${index + 1}. ${card.label}`}
            </h3>
            <p className="text-md max-w-[300px] text-center font-normal text-[#000B17] sm:text-xs md:text-sm">
              {card.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Services;
