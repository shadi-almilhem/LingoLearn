import ButtonHero from "@/components/ui/ButtonHero";
import { HeroText } from "@/components/ui/HeroText";
import Testimonials from "@/components/ui/Testimonials";
import Image from "next/image";
import React from "react";
import HeroImageAndText from "@/components/ui/HeroImageAndText";

function Hero() {
  return (
    <section className="relative z-40 mt-32 flex w-full flex-col justify-center gap-4  md:gap-16 ">
      <Image
        className="absolute right-0 top-0 w-24  sm:w-40 md:right-0 md:w-56"
        src="/language1.svg"
        width={500}
        alt="language icon"
        height={500}
      />
      <Image
        className="absolute left-0 top-40 w-24 sm:w-40 md:left-0 md:w-56"
        src="/language2.svg"
        width={500}
        alt="language icon"
        height={500}
      />
      <div className="flex flex-col items-center justify-center gap-8 md:gap-12">
        <HeroText />
        <div className="flex items-center justify-center">
          <ButtonHero border="black" />
        </div>
        <div className="flex items-center justify-center">
          <Testimonials />
        </div>
        <HeroImageAndText />
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 -mx-2 h-[80vh] bg-gradient-to-b  from-transparent from-5% to-[#FF851B] to-95% sm:-mx-4 md:-mx-16 lg:-mx-36 "></div>
    </section>
  );
}

export default Hero;
