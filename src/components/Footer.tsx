
import React from 'react';
import { Button } from "@/components/ui/button";
import { HelpCircle, Info, ExternalLink } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyberpunk-darker pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="md:col-span-3 lg:col-span-1">
            <Logo small className="mb-6 mx-auto md:mx-0" />
            <p className="text-gray-400 mb-6 text-center md:text-left">
              Create professional comic books with AI assistance. Turn your ideas into full comic book pages, panel by panel, with comic-style illustrations.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button asChild className="button-glow text-white">
                <a 
                  href="https://chatgpt.com/g/g-68110eebf7f88191b60025b9c37cb2f2-comic-book-maker-gpt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  USE COMIC BOOK MAKER GPT
                </a>
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 text-center md:text-left">Quick Links</h3>
            <ul className="space-y-3 text-center md:text-left">
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-cyberpunk-purple transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-cyberpunk-purple transition-colors">Features</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-cyberpunk-purple transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-400 hover:text-cyberpunk-purple transition-colors">Disclaimer</a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 text-center md:text-left">Legal</h3>
            <ul className="space-y-3 text-center md:text-left">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 text-center md:text-left">Contact</h3>
            <ul className="space-y-3 text-center md:text-left">
              <li>
                <a 
                  href="tel:+14758008096" 
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors"
                >
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-400 hover:text-cyberpunk-purple transition-colors"
                >
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white/10 my-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="hover:text-cyberpunk-purple">AI WEB TOOLS LLC</a> All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <Button asChild variant="ghost" size="sm" className="text-gray-400 hover:text-cyberpunk-purple hover:bg-white/5">
              <a href="#faq" className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4" />
                FAQ
              </a>
            </Button>
            
            <Button asChild variant="ghost" size="sm" className="text-gray-400 hover:text-cyberpunk-purple hover:bg-white/5">
              <a href="#disclaimer" className="flex items-center gap-2">
                <Info className="w-4 h-4" />
                Disclaimer
              </a>
            </Button>
            
            <Button asChild variant="ghost" size="sm" className="text-gray-400 hover:text-cyberpunk-purple hover:bg-white/5">
              <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                More AI Tools
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating "More AI Tools" Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button asChild className="rounded-full px-6 py-3 button-glow text-white">
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            More AI Tools
          </a>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
