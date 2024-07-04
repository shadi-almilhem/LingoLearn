// MyComponent.js
import React from "react";
interface SectionHeadingProps {
  spanText: string;
  h2Text: string;
}
const SectionHeading = ({ spanText, h2Text }: SectionHeadingProps) => {
  return (
    <div className="flex flex-col items-center gap-4 sm:w-auto lg:w-[880px]">
      <span className="text-[16px] font-normal text-[#AE5820] md:text-[21px]">
        {spanText}
      </span>
      <h2 className="md:line-height-set-lg line-height-set-sm max-w-[800px] text-center text-2xl font-medium text-[#5D2B0B] md:text-4xl">
        {h2Text}
      </h2>
    </div>
  );
};

export default SectionHeading;
