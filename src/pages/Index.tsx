
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
    document.title = "Comic Book Maker GPT | Free AI Tools by AI WEB TOOLS | Create Amazing Comics with AI";
    window.scrollTo(0, 0);

    // Add additional SEO meta tags dynamically
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Create professional comic books for free with Comic Book Maker GPT by AI WEB TOOLS. Best free AI tools for comic creation, storytelling, and character development. Turn your ideas into stunning comic book pages with AI assistance.');
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
          "item": "https://www.aiwebtools.ai"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Free AI Tools",
          "item": "https://www.aiwebtools.ai/tools"
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
