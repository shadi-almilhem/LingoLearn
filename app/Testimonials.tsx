import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import React from "react";
const peopleTestimonials = [
  {
    id: 1,
    name: "أحمد",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    text: "“منصة رائعة لتعلم اللغات! المحتوى مفيد جداً والمعلمين محترفون. أنصح بها بشدة لكل من يرغب في تعلم لغة جديدة.”",
  },
  {
    id: 2,
    name: "خالد",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    text: "“تجربتي مع هذا الموقع كانت مذهلة. الدروس تفاعلية وسهلة الفهم. أنا الآن أتحدث الفرنسية بثقة أكبر.”",
  },
  {
    id: 3,
    name: "سارة",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    text: "“أفضل موقع لتعلم اللغات حتى الآن. الدروس ممتعة ومليئة بالمعلومات. أشعر بأنني أتعلم بسرعة أكبر بفضل هذه المنصة.”",
  },
  {
    id: 4,
    name: "ريم",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    text: "“استفدت كثيراً من الدروس التفاعلية والتواصل مع معلمين محترفين. تجربة تعلم ممتعة وفعالة.”",
  },
  {
    id: 5,
    name: "ياسر",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    text: "“أشعر بتقدم كبير في مهاراتي اللغوية بعد استخدام هذا الموقع. أحببت التمارين التفاعلية والأساليب التعليمية المتنوعة.”",
  },
  {
    id: 6,
    name: "وليم",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "“الموقع يوفر الكثير من الموارد المفيدة والمحتوى الجيد. ساعدني على تحسين نطقي وفهمي للغة بشكل كبير.”",
  },
];
function Testimonials() {
  const chunkSize = 3; // Number of testimonials per row

  // Split testimonials into chunks
  const testimonialChunks = [];
  for (let i = 0; i < peopleTestimonials.length; i += chunkSize) {
    testimonialChunks.push(peopleTestimonials.slice(i, i + chunkSize));
  }

  return (
    <section
      id="testimonials"
      className="relative flex w-full flex-col items-center justify-center gap-16 rounded-3xl border-2 border-[#003766] bg-[hsl(24,100%,98%)] px-6 py-16 shadow-[0px_10px_20px_0px_rgba(0,0,0,0.10)] md:px-10 "
    >
      <SectionHeading
        spanText="آراء المتعلمين"
        h2Text="مئات المستخدمين شاركوا قصصهم و كيف غيرت دورات اللغة حياتهم و حسنتها"
      />
      <div className="flex w-full flex-col gap-8  md:gap-6">
        {testimonialChunks.map((chunk, rowIndex) => (
          <div
            key={rowIndex}
            className="flex  flex-col items-center justify-evenly gap-8 sm:gap-6 md:flex-row md:gap-6"
          >
            {chunk.map((testimonial, colIndex) => (
              <div key={colIndex} className="flex w-full flex-col   md:w-fit">
                <div className="flex   min-h-[300px] min-w-full flex-col  items-center justify-between gap-4 self-center  rounded-3xl border-2 border-[#FFDAC2]  bg-gradient-to-b from-[#FFF3EB] to-[hsl(24,100%,93%)] px-8 py-12 sm:items-start sm:px-4 sm:py-8  md:min-w-min md:px-6 md:py-10 ">
                  {/* Star icons */}
                  <div className="flex items-start">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index} className="  text-yellow-500">
                        <Image
                          alt="star icon"
                          src="/star.svg"
                          width={20}
                          height={20}
                        />
                      </span>
                    ))}
                  </div>
                  {/* Testimonial text */}
                  <p className="max-w-[300px]">{testimonial.text}</p>
                  {/* Person's name and image */}
                  <div className="flex items-center justify-center gap-6">
                    <Image
                      alt="person image"
                      height={200}
                      width={200}
                      className="  h-14 w-14 rounded-full border-4   border-white object-cover"
                      src={testimonial.image}
                    />
                    <span>{testimonial.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 -mx-2 h-[80vh] [background:linear-gradient(180deg,rgba(255,243,235,0.00)_-2%,#FFE6D7_50%,rgba(255,243,235,0.00)_100%)] sm:-mx-4 md:-mx-16 lg:-mx-36 "></div>
    </section>
  );
}

export default Testimonials;
