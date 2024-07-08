import SectionHeading from "@/components/ui/SectionHeading";
import { BookUser, GraduationCap, Languages } from "lucide-react";
import React from "react";

function Services() {
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
      className="flex w-full flex-col items-center justify-center gap-16"
    >
      <SectionHeading
        spanText="ماذا نقدم لك"
        h2Text={`نقدم دروساً مبتكرة ومحادثات حية لتعلم اللغات، احصل على مهارات
        لغوية تفتح لك أبوابًا جديدة`}
      />
      <div className="flex w-full flex-col items-center justify-evenly gap-8 sm:gap-6 md:flex-row md:gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex min-h-[280px] min-w-full flex-col  items-center justify-between gap-4  self-center rounded-3xl border-2  border-[#CFE5FD] bg-gradient-to-b from-[#E6F2FF] to-[#CFE5FD] px-8 py-12 sm:px-4 sm:py-8  md:min-w-min md:px-6 md:py-10  "
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-[#B8D8FA] p-5 sm:p-3 md:p-4">
              <span>{card.icon}</span>
            </div>
            <h3 className="text-center text-lg font-semibold text-[#002145] sm:text-sm md:text-base">
              {`${index + 1}. ${card.label}`}
            </h3>
            <p className="text-md max-w-[300px] text-center font-normal text-[#000B17] sm:text-xs md:text-sm">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
