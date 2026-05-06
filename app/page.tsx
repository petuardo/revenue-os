import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricsStrip from "@/components/MetricsStrip";
import Problema from "@/components/Problema";
import Sistema from "@/components/Sistema";
import Proceso from "@/components/Proceso";
import Testimonials from "@/components/Testimonials";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <MetricsStrip />
        <Problema />
        <Sistema />
        <Proceso />
        <Testimonials />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
