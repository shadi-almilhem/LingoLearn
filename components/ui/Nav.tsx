"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./button";
import { Menu, X } from "lucide-react";

const navItems = [
  { text: "الرئيسية", className: "text-navbar", href: "/" },
  { text: "ماذا نقدم لك", className: "text-navbar", href: "#services" },
  { text: "آراء المتعلمين", className: "text-navbar", href: "#testimonials" },
  { text: "الأسئلة الشائعة", className: "text-navbar", href: "#faq" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="z-50 my-4 flex w-full items-center justify-between text-nowrap px-2 sm:px-4 md:px-16 lg:px-36">
      {/* Logo place */}
      <h2 className="text-[27px] font-bold text-[#ff7700] lg:text-[36px] xl:text-[47px]">
        لينغو ليرن
      </h2>

      {/* Desktop Nav */}
      <div className="hidden items-center justify-between md:flex">
        {navItems.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={`${item.className} text-small lg:text-medium px-2 text-[#5D2B0B] hover:font-medium hover:text-[#864115] lg:px-4`}
          >
            {item.text}
          </Link>
        ))}
      </div>

      {/* Desktop Button */}
      <div className=" hidden  md:flex">
        <Button
          size={"sm"}
          className="flex items-center  justify-center rounded-md bg-[#ff7700] hover:bg-[hsl(28,100%,47%)] md:px-4 md:py-2 lg:px-8 lg:py-4"
        >
          سجل الآن مجاناً
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="absolute left-0 top-16 z-50 flex w-full flex-col items-start gap-2 border-b-2  bg-gradient-to-b from-white to-orange-50 p-4 md:hidden">
          {navItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={`${item.className} text-medium w-full py-2 text-[#00172A] lg:py-4 `}
              onClick={() => setMenuOpen(false)}
            >
              {item.text}
            </Link>
          ))}
          <Button className="hover mt-4 flex w-full items-center   justify-center rounded-md bg-[#FF8435] hover:bg-[#FF8435] md:px-6 md:py-3 lg:px-8 lg:py-4">
            سجل الآن مجاناً
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
