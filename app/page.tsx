import Hero from "@/components/Hero";
import WhyAutomation from "@/components/WhyAutomation";
import BeforeAfter from "@/components/BeforeAfter";
import ServicesOverview from "@/components/ServicesOverview";
import UseCases from "@/components/UseCases";
import FeaturedProjects from "@/components/FeaturedProjects";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyAutomation />
      <BeforeAfter />
      <ServicesOverview />
      <UseCases />
      <FeaturedProjects />
      <Process />
      <CTASection />
      <ContactForm />
    </>
  );
}
