import React from "react";
import { Button } from "./button";

function ButtonHero({ border }: any) {
  return (
    <Button
      size="lg"
      className={`button-hero group/button text-large relative inline-flex  items-center justify-center  overflow-hidden rounded-lg border-2 border-solid ${border === "white" ? "border-[#FDFCFC]" : "border-[#080708]"}  px-8   py-4 text-white transition-all duration-300 ease-in-out  hover:shadow-lg hover:shadow-orange-500/30   md:px-4 md:py-2 lg:px-9 lg:py-[18px]`}
    >
      ابدأ رحلة التعلم الآن
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-8 bg-white/20" />
      </div>
    </Button>
  );
}

export default ButtonHero;
