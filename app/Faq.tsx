import SectionHeading from "@/components/ui/SectionHeading";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqDetails = [
  {
    question: "كيف يمكنني التسجيل في الدورات؟",
    answer:
      "يمكنك التسجيل في الدورات عبر زيارة صفحة التسجيل على موقعنا واتباع التعليمات الموجهة. بمجرد إكمال عملية التسجيل، ستكون جاهزاً للبدء في تعلم اللغة التي اخترتها.",
  },
  {
    question: "هل توفرون شهادات إتمام عند انتهاء الدورة؟",
    answer:
      "نعم، نوفر شهادات إتمام رسمية لكل الدورات التي ننظمها. يمكنك استخدام هذه الشهادات لتعزيز سيرتك الذاتية وزيادة فرصك في سوق العمل.",
  },
  {
    question: "هل يمكنني تجربة الدورات قبل الاشتراك؟",
    answer:
      "نعم، نوفر فترة تجريبية مجانية لتتمكن من تجربة الدورات والتعرف على أسلوب التعليم قبل الاشتراك الكامل.",
  },

  {
    question: "هل يمكنني استعادة أموالي إذا لم أكن راضياً عن الدورة؟",
    answer:
      "نعم، لدينا سياسة استرداد مرنة تضمن رضاك التام. إذا لم تكن راضياً عن الدورة، يمكنك طلب استرداد أموالك خلال فترة محددة بعد التسجيل.",
  },
  {
    question: "ما هي طرق الدفع المتاحة للاشتراك في الدورات؟",
    answer:
      "نوفر عدة طرق للدفع تشمل البطاقات الائتمانية، الباي بال، والتحويلات المصرفية. يمكنك اختيار الطريقة التي تناسبك أثناء عملية التسجيل.",
  },
];

function Faq() {
  return (
    <section
      id="faq"
      className="flex w-full flex-col items-center justify-center gap-16"
    >
      <SectionHeading
        spanText="الأسئلة الشائعة"
        h2Text="الدورات المقدمة لدينا ساعدت الكثيرين في تحقيق أهدافهم المستقبلية وزيادة فرصهم "
      />
      <div className="w-full lg:min-w-[797px] lg:max-w-min">
        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col gap-4"
        >
          {FaqDetails.map((faq, index) => (
            <AccordionItem
              className="w-full"
              key={index}
              value={`item-${index + 1}`}
            >
              <AccordionTrigger className="text-start text-[21px] font-normal  text-[#864115]	hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className=" text-lg font-normal text-[#AE5820]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default Faq;
