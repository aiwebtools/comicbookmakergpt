
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { HelpCircle, Info, ExternalLink, Menu, X } from "lucide-react";
import Logo from "./Logo";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cyberpunk-darker/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo small className="hidden md:block" />
          
          <div className="flex md:hidden items-center">
            <Logo small />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Button asChild variant="ghost" className="text-white hover:text-cyberpunk-purple hover:bg-white/5">
              <a href="#faq" className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                FAQ
              </a>
            </Button>
            
            <Button asChild variant="ghost" className="text-white hover:text-cyberpunk-purple hover:bg-white/5">
              <a href="#disclaimer" className="flex items-center gap-2">
                <Info className="w-4 h-4" />
                Disclaimer
              </a>
            </Button>
            
            <Button asChild variant="ghost" className="text-white hover:text-cyberpunk-purple hover:bg-white/5">
              <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                More AI Tools
              </a>
            </Button>
            
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
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-cyberpunk-darker/95 backdrop-blur-lg pt-4 pb-6 px-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Button asChild variant="ghost" className="text-white hover:text-cyberpunk-purple hover:bg-white/5 justify-start">
              <a href="#faq" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                FAQ
              </a>
            </Button>
            
            <Button asChild variant="ghost" className="text-white hover:text-cyberpunk-purple hover:bg-white/5 justify-start">
              <a href="#disclaimer" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <Info className="w-4 h-4" />
                Disclaimer
              </a>
            </Button>
            
            <Button asChild variant="ghost" className="text-white hover:text-cyberpunk-purple hover:bg-white/5 justify-start">
              <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                More AI Tools
              </a>
            </Button>
            
            <Button asChild className="button-glow text-white w-full">
              <a 
                href="https://chatgpt.com/g/g-68110eebf7f88191b60025b9c37cb2f2-comic-book-maker-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                USE COMIC BOOK MAKER GPT
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
