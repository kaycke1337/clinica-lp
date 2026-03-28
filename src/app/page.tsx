import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Specialists from "@/components/Specialists";
import Testimonials from "@/components/Testimonials";
import Scheduling from "@/components/Scheduling";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Specialists />
        <Testimonials />
        <Scheduling />
      </main>
      <Footer />
    </>
  );
}
