import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      <Pricing />
      <CTA />
      <Contact />
    </>
  );
}