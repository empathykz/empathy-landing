import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PsychologistSelectionSection from '@/components/PsychologistSelectionSection';
import TeamSection from '@/components/TeamSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
// import EventsSection from '@/components/EventsSection';
import OfferSection from '@/components/OfferSection';
import CodeSection from '@/components/CodeSection';
import FAQSection from '@/components/FAQSection';
import SocialSection from '@/components/SocialSection';
import StructuredData from '@/components/StructuredData';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <PsychologistSelectionSection />
        <TeamSection />
        <PricingSection />
        <TestimonialsSection />
        {/* <EventsSection /> */}
        <OfferSection />
        <CodeSection />
        <FAQSection />
        <SocialSection />
      </main>
    </div>
  );
};

export default Index;