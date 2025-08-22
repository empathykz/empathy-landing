import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import EventsSection from '@/components/EventsSection';
import OfferSection from '@/components/OfferSection';
import CodeSection from '@/components/CodeSection';
import FAQSection from '@/components/FAQSection';
import SocialSection from '@/components/SocialSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TeamSection />
        <TestimonialsSection />
        <EventsSection />
        <OfferSection />
        <CodeSection />
        <FAQSection />
        <SocialSection />
      </main>
    </div>
  );
};

export default Index;