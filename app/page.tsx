import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PracticeAreas from "./components/PracticeAreas";
import ProcessSteps from "./components/ProcessSteps";
import ContactForm from "./components/ContactForm";
import FaqAccordion from "./components/FaqAccordion";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div id="inicio">
      <Navbar />

      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <ProcessSteps />
        <Testimonials />
        <FaqAccordion />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
