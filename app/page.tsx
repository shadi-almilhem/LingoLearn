import Cta from "./Cta";
import Faq from "./Faq";
import Footer from "./Footer";
import Hero from "./Hero";
import Services from "./Services";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center gap-40 px-2 sm:px-4 md:px-16 lg:px-36 ">
      <Hero />

      <div className="bg-grid absolute h-screen w-full"></div>
      <Services />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
