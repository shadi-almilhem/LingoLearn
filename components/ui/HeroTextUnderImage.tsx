// YourComponent.js

import React from "react";
import { Separator } from "./separator";
const sections = [
  { label: "+2000", title: "متعلم" },
  { label: "+20", title: "معلم مختص" },
  { label: "+35", title: "برنامج تعليمي" },
  { label: "+1800", title: "قصة نجاح" },
];

const HeroTextUnderImage = () => {
  // Assuming you have an array of data with the relevant information

  return (
    <div className="my-8 flex w-full items-center justify-between self-stretch md:mb-16 lg:mb-24">
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-start justify-between ">
            <span className="text-sm font-semibold text-[#FDFCFC] sm:text-base md:text-xl lg:text-2xl ">
              {section.label}
            </span>
            <span className="text-xs font-medium text-white/95 sm:text-sm  md:text-lg">
              {section.title}
            </span>
          </div>
          {index < sections.length - 1 && (
            <Separator
              orientation="vertical"
              decorative
              className="h-16 rounded-full bg-white/40 p-[1px]"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default HeroTextUnderImage;
