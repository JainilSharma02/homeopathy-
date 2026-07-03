import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import DiseasesWeTreat from "@/components/sections/DiseasesWeTreat";
import Appointment from "@/components/sections/Appointment";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";

import About from "@/components/sections/About";

import FAQ from "@/components/sections/FAQ";
import Background3D from "@/components/ui/Background3D";

export default function Home() {
  return (
    <>
      <Background3D />
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <DiseasesWeTreat />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Appointment />
      <Footer />
    </>
  );
}
