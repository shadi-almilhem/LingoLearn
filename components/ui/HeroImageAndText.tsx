import Image from "next/image";
import HeroTextUnderImage from "./HeroTextUnderImage";

function HeroImageAndText() {
  return (
    <div className="relative flex w-auto flex-col items-center justify-center gap-4 sm:w-[500px] md:w-[700px] lg:w-[900px]">
      <div className="relative rounded-[45px_0px] bg-gradient-to-b from-[#2E89EB] to-white p-0.5 md:rounded-[90px_0px] md:p-1">
        <div className="overflow-hidden rounded-[45px_0px] md:rounded-[90px_0px]">
          <Image
            width={1000}
            height={500}
            src="/LearningPerson.webp"
            alt="Person learning with books"
            priority={true}
            className="rounded-[45px_0px] border border-transparent md:rounded-[90px_0px]"
          />
          <div className="absolute inset-0 rounded-[45px_0px] bg-[#FFF3EB] opacity-10 md:rounded-[90px_0px]"></div>
        </div>
      </div>
      <HeroTextUnderImage />
    </div>
  );
}

export default HeroImageAndText;
