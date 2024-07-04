import { Separator } from "@/components/ui/separator";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="mb-24 flex w-full flex-col gap-8 sm:gap-16">
      <Link
        href="/"
        className="cursor-pointer text-[27px] font-bold text-[#ff7700] lg:text-[36px] xl:text-[47px]"
      >
        لينغو ليرن
      </Link>
      <div className="flex flex-wrap items-center  justify-between gap-12">
        <Separator className="flex max-w-[1000px] rounded-full bg-[#FFDAC2]" />
        <div className="flex items-center   justify-between gap-8">
          <span className="text-center text-base text-[#FF8435]">
            الشروط و الأحكام
          </span>
          <span className="text-center text-base text-[#FF8435]">
            سياسة الخصوصية
          </span>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex  justify-between gap-4 text-[#FF9D5D]">
          <Link href="https://x.com/shadi_m02">
            <Twitter />
          </Link>
          <Link href="https://www.instagram.com/shadi_m02">
            <Instagram />
          </Link>
          <Link href="https://www.linkedin.com/in/shadi-al-milhem">
            <Linkedin />
          </Link>
        </div>
        <span className="text-[#FF9D5D]">
          ©2024 لينفو ليرن. جميع الحقوق محفوظة.
        </span>
      </div>
    </div>
  );
}

export default Footer;
