
import React, { useEffect } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  // Set document title and scroll to top on load
  useEffect(() => {
    document.title = "Comic Book Maker GPT | Create Amazing Comics with AI";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cyberpunk-dark text-white overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Disclaimer />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
