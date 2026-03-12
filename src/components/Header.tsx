
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { HelpCircle, Info, ExternalLink, Menu, X } from "lucide-react";
import Logo from "./Logo";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  const navLinks = [
    { href: "#faq", icon: <HelpCircle className="w-4 h-4" />, label: "FAQ", external: false },
    { href: "#disclaimer", icon: <Info className="w-4 h-4" />, label: "Disclaimer", external: false },
    { href: "https://aiwebtools.lovable.app/?via=aiwebtools", icon: <ExternalLink className="w-4 h-4" />, label: "More AI Tools", external: true },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cyberpunk-darker/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Logo small className="hidden md:block" />
          
          <div className="flex md:hidden items-center">
            <Logo small />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              <Button key={link.label} asChild variant="ghost" className="text-white hover:text-primary hover:bg-white/5">
                <a 
                  href={link.href} 
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-2"
                >
                  {link.icon}
                  {link.label}
                </a>
              </Button>
            ))}
            
            <Button asChild className="button-glow text-white">
              <a 
                href="https://chatgpt.com/g/g-68110eebf7f88191b60025b9c37cb2f2-comic-book-maker-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                USE COMIC BOOK MAKER GPT
              </a>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white p-2 -mr-2 touch-manipulation"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation - slide down */}
      <div 
        className={`md:hidden bg-cyberpunk-darker/95 backdrop-blur-lg shadow-lg overflow-hidden transition-all duration-200 ease-out ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col space-y-2 px-4 pt-2 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex items-center gap-3 px-4 py-3 text-white hover:text-primary hover:bg-white/5 rounded-lg transition-colors touch-manipulation"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
          
          <a 
            href="https://chatgpt.com/g/g-68110eebf7f88191b60025b9c37cb2f2-comic-book-maker-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="button-glow text-white text-center py-3 rounded-lg mt-2 touch-manipulation"
          >
            USE COMIC BOOK MAKER GPT
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
