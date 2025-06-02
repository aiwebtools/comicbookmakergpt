
import React from 'react';
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  small?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, small = false }) => {
  return (
    <div className={cn("flex flex-col items-center group", className)}>
      <div className={cn(
        "relative flex items-center justify-center transform group-hover:scale-110 transition-all duration-500",
        small ? "h-12 w-12" : "h-20 w-20"
      )}>
        {/* Outer glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 rounded-2xl opacity-60 blur-xl animate-glow"></div>
        
        {/* Main icon background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-violet-600 rounded-2xl animate-pulse"></div>
        
        {/* Inner container */}
        <div className="relative z-10 bg-gradient-to-br from-purple-900/90 to-pink-900/90 w-[92%] h-[92%] rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            className={cn(
              "fill-white/90 stroke-2 stroke-purple-300 drop-shadow-lg",
              small ? "w-7 h-7" : "w-12 h-12"
            )}
          >
            <path d="M22 3H2C1.45 3 1 3.45 1 4V20C1 20.55 1.45 21 2 21H22C22.55 21 23 20.55 23 20V4C23 3.45 22.55 3 22 3ZM21 19H3V5H21V19ZM9 8H19V10H9V8ZM9 11H19V13H9V11ZM9 14H16V16H9V14ZM5 8H8V11H5V8ZM5 13H8V16H5V13Z" />
          </svg>
        </div>
        
        {/* Floating sparkles */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping opacity-80"></div>
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-300 rounded-full animate-ping delay-500 opacity-70"></div>
      </div>
      
      <div className="text-center mt-2 group-hover:scale-105 transition-transform duration-300">
        <h1 className={cn(
          "font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 animate-glow",
          small ? "text-base" : "text-2xl"
        )}>
          <a 
            href="https://chatgpt.com/g/g-68110eebf7f88191b60025b9c37cb2f2-comic-book-maker-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:from-pink-400 hover:via-violet-400 hover:to-purple-400 transition-all duration-500"
          >
            Comic Book Maker GPT
          </a>
        </h1>
        <p className={cn(
          "text-gray-300 group-hover:text-white transition-colors duration-300",
          small ? "text-xs" : "text-sm"
        )}>
          Presented by <a href="https://www.aiwebtools.ai" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:from-pink-400 hover:to-violet-400 transition-all duration-300">AiWebTools.Ai</a>
        </p>
      </div>
    </div>
  );
};

export default Logo;
