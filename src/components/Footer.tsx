
import React from 'react';
import { Button } from "@/components/ui/button";
import { HelpCircle, Info, ExternalLink } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-violet-900/20 backdrop-blur-xl pt-16 pb-8 relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 animate-pulse"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-r from-violet-400/30 to-purple-400/30 rounded-full blur-lg animate-float delay-500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Educational Disclaimer */}
        <div className="mb-12 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 shadow-2xl">
            <p className="text-sm text-gray-300">
              <strong className="text-white">Disclaimer:</strong> This website is for informational, educational, and research purposes only.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-3 lg:col-span-1 space-y-6">
            <Logo small className="mb-8 mx-auto md:mx-0" />
            <p className="text-gray-300 mb-8 text-center md:text-left leading-relaxed">
              Create professional comic books with AI assistance. Turn your ideas into full comic book pages, panel by panel, with comic-style illustrations.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button asChild className="relative group bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 hover:from-purple-500 hover:via-pink-500 hover:to-violet-500 text-white px-8 py-3 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <a 
                  href="https://chatgpt.com/g/g-68110eebf7f88191b60025b9c37cb2f2-comic-book-maker-gpt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative z-10">USE COMIC BOOK MAKER GPT</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 rounded-xl blur-xl transition-opacity duration-300"></div>
                </a>
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8 text-center md:text-left">Quick Links</h3>
            <ul className="space-y-4 text-center md:text-left">
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300 relative group">
                  How It Works
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300 relative group">
                  Features
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300 relative group">
                  FAQ
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300 relative group">
                  Disclaimer
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8 text-center md:text-left">Legal</h3>
            <ul className="space-y-4 text-center md:text-left">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300 relative group"
                >
                  Privacy Policy
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300 relative group"
                >
                  Terms of Service
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8 text-center md:text-left">Contact</h3>
            <ul className="space-y-4 text-center md:text-left">
              <li>
                <a 
                  href="tel:+14758008096" 
                  className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300 relative group"
                >
                  (475) 800-8096
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300 relative group"
                >
                  Contact@ai-webtools.com
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white/20 my-12" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-300 text-sm text-center md:text-left">
            &copy; {currentYear} <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300">AI WEB TOOLS LLC</a> All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <Button asChild variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-300 hover:scale-105">
              <a href="#faq" className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                FAQ
              </a>
            </Button>
            
            <Button asChild variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-300 hover:scale-105">
              <a href="#disclaimer" className="flex items-center gap-2">
                <Info className="w-4 h-4" />
                Disclaimer
              </a>
            </Button>
            
            <Button asChild variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-300 hover:scale-105">
              <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                More AI Tools
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating "More AI Tools" Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <Button asChild className="relative group rounded-full px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 hover:from-purple-500 hover:via-pink-500 hover:to-violet-500 text-white shadow-2xl transform hover:scale-110 transition-all duration-300">
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <ExternalLink className="w-5 h-5" />
            More AI Tools
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 rounded-full blur-xl transition-opacity duration-300"></div>
          </a>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
