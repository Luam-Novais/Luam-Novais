'use client'
import Header from '../components/Header';
import Hero from './(pages)/Hero';
import { ContactSection } from './(pages)/Contact';
import FeaturedProjectsSection from './(pages)/FeaturedProjectsSection';
import { Footer } from '../components/Footer';

export default function Page() {
  return (
    <main className="default-layout relative">
      <Header />
      <Hero />
      <FeaturedProjectsSection />
      <ContactSection />
      <Footer/>
    </main>
  );
}
