
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
    document.title = "Comic Book Maker GPT - Create Comics with AI | Free Tool by AI WEB TOOLS";
    window.scrollTo(0, 0);

    // Add additional SEO meta tags dynamically
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Create professional comic books instantly with Comic Book Maker GPT. Free AI-powered tool for comic creation, storytelling, character development & illustrations. Turn ideas into stunning comics - no artistic skills needed!');
    }

    // Add structured data for breadcrumbs
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "AI WEB TOOLS",
          "item": "https://aiwebtools.lovable.app/?via=aiwebtools"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Free AI Tools",
          "item": "https://aiwebtools.lovable.app/?via=aiwebtools"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Comic Book Maker GPT",
          "item": "https://comic-book-maker-gpt.aiwebtools.ai/"
        }
      ]
    });
    document.head.appendChild(breadcrumbScript);

    return () => {
      document.head.removeChild(breadcrumbScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cyberpunk-dark text-white overflow-hidden">
      {/* SEO-optimized semantic structure */}
      <header>
        <Header />
      </header>
      
      <main>
        <section aria-label="Hero section">
          <Hero />
        </section>
        
        <section aria-label="Features section">
          <Features />
        </section>
        
        <section aria-label="How it works section">
          <HowItWorks />
        </section>
        
        <section aria-label="Testimonials section">
          <Testimonials />
        </section>
        
        <section aria-label="Frequently asked questions">
          <FAQ />
        </section>
        
        <section aria-label="Legal disclaimer">
          <Disclaimer />
        </section>
      </main>
      
      <footer>
        <Footer />
      </footer>
      
      <CookieConsent />
    </div>
  );
};

export default Index;
