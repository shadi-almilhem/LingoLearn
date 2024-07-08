import { Separator } from "@/components/ui/separator";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="mb-24 flex w-full flex-col gap-8 sm:gap-16">
      <Link
        href="/"
        className="cursor-pointer text-[27px] font-bold text-[#006FE6] lg:text-[36px] xl:text-[47px]"
      >
        لينغو ليرن
      </Link>
      <div className="flex flex-wrap items-center  justify-between gap-12">
        <Separator className="flex max-w-[1000px] rounded-full bg-[#A1CBF8]" />
        <div className="flex items-center   justify-between gap-8">
          <Link href="/" className="text-center text-base text-[#002C5C]">
            الشروط و الأحكام
          </Link>
          <Link href="/" className="text-center text-base text-[#002C5C]">
            سياسة الخصوصية
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex  justify-between gap-4 text-[#006FE6]">
          <Link aria-label="Twitter" href="https://x.com/shadi_m02">
            <Twitter />
          </Link>
          <Link
            aria-label="Instagram"
            href="https://www.instagram.com/shadi_m02"
          >
            <Instagram />
          </Link>
          <Link
            aria-label="Linkedin"
            href="https://www.linkedin.com/in/shadi-al-milhem"
          >
            <Linkedin />
          </Link>
        </div>
        <span className="text-[#006FE6]">
          صنع بـ💙 بواسطة{" "}
          <Link
            className="font-semibold text-[#0059B8]"
            href="https://shadialmilhem.com"
          >
            Shadi Al Milhem
          </Link>
        </span>
        <span className="text-[#002C5C]">
          ©2024 لينفو ليرن. جميع الحقوق محفوظة.
        </span>
      </div>
    </div>
  );
}

export default Footer;
