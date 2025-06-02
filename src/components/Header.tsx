
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gradient-to-r from-purple-900/95 via-indigo-900/95 to-pink-900/95 backdrop-blur-xl shadow-2xl border-b border-white/20' 
          : 'bg-transparent'
      }`}
    >
      {/* Animated glow effect */}
      {scrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 animate-pulse"></div>
      )}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between h-24">
          <div className="transform hover:scale-110 transition-transform duration-300">
            <Logo small className="hidden md:block" />
          </div>
          
          <div className="flex md:hidden items-center transform hover:scale-110 transition-transform duration-300">
            <Logo small />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button asChild variant="ghost" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-white/10 rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
              <a href="#faq" className="flex items-center gap-2 px-4 py-2">
                <HelpCircle className="w-5 h-5" />
                FAQ
              </a>
            </Button>
            
            <Button asChild variant="ghost" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-white/10 rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
              <a href="#disclaimer" className="flex items-center gap-2 px-4 py-2">
                <Info className="w-5 h-5" />
                Disclaimer
              </a>
            </Button>
            
            <Button asChild variant="ghost" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-white/10 rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
              <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2">
                <ExternalLink className="w-5 h-5" />
                More AI Tools
              </a>
            </Button>
            
            <Button asChild className="relative group bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 hover:from-purple-500 hover:via-pink-500 hover:to-violet-500 text-white px-6 py-3 rounded-xl shadow-2xl transform hover:scale-110 transition-all duration-300 border border-white/20">
              <a 
                href="https://chatgpt.com/g/g-68110eebf7f88191b60025b9c37cb2f2-comic-book-maker-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="relative z-10">USE COMIC BOOK MAKER GPT</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 rounded-xl blur-xl transition-opacity duration-300"></div>
              </a>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white hover:bg-white/10 rounded-xl backdrop-blur-sm transform hover:scale-110 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-br from-purple-900/95 via-indigo-900/95 to-pink-900/95 backdrop-blur-xl pt-6 pb-8 px-6 shadow-2xl border-t border-white/20 animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 animate-pulse"></div>
          <nav className="flex flex-col space-y-6 relative z-10">
            <Button asChild variant="ghost" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-white/10 justify-start rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
              <a href="#faq" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-3">
                <HelpCircle className="w-5 h-5" />
                FAQ
              </a>
            </Button>
            
            <Button asChild variant="ghost" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-white/10 justify-start rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
              <a href="#disclaimer" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-3">
                <Info className="w-5 h-5" />
                Disclaimer
              </a>
            </Button>
            
            <Button asChild variant="ghost" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-white/10 justify-start rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
              <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3">
                <ExternalLink className="w-5 h-5" />
                More AI Tools
              </a>
            </Button>
            
            <Button asChild className="relative group bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 hover:from-purple-500 hover:via-pink-500 hover:to-violet-500 text-white w-full rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/20">
              <a 
                href="https://chatgpt.com/g/g-68110eebf7f88191b60025b9c37cb2f2-comic-book-maker-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="px-4 py-4"
              >
                <span className="relative z-10">USE COMIC BOOK MAKER GPT</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 rounded-xl blur-xl transition-opacity duration-300"></div>
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
