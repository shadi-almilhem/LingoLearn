import ButtonHero from "@/components/ui/ButtonHero";
import Image from "next/image";
import React from "react";

function Cta() {
  return (
    <section className="cta-bg flex max-w-[1180px] cursor-default flex-col items-center justify-center gap-16 rounded-3xl p-16 shadow-[0px_16px_20px_0px_rgba(0,0,0,0.10)] lg:min-h-[450px]">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-center text-[36px] font-bold text-white md:text-[47px] lg:text-[61px]">
          سجل و ابدأ تعلم لغة جديدة معنا
        </h2>
        <p className="text-center   text-[21px] font-medium text-white/90 md:text-[27px]">
          تعلّم بسرعة وسهولة مع أفضل الدورات المتاحة
        </p>
      </div>
      <ButtonHero border="white" />
    </section>
  );
}

export default Cta;
