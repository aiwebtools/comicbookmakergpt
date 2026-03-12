
import React from 'react';
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  small?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, small = false }) => {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className={cn(
        "relative flex items-center justify-center",
        small ? "h-10 w-10" : "h-16 w-16"
      )}>
        {/* Comic book icon shape */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-pink rounded-lg animate-glow"></div>
        <div className="relative z-10 bg-cyberpunk-dark w-[95%] h-[95%] rounded-lg flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            className={cn(
              "fill-cyberpunk-purple stroke-1 stroke-cyberpunk-pink",
              small ? "w-6 h-6" : "w-10 h-10"
            )}
          >
            <path d="M22 3H2C1.45 3 1 3.45 1 4V20C1 20.55 1.45 21 2 21H22C22.55 21 23 20.55 23 20V4C23 3.45 22.55 3 22 3ZM21 19H3V5H21V19ZM9 8H19V10H9V8ZM9 11H19V13H9V11ZM9 14H16V16H9V14ZM5 8H8V11H5V8ZM5 13H8V16H5V13Z" />
          </svg>
        </div>
      </div>
      <div className="text-center mt-1">
        <h1 className={cn(
          "font-bold neon-text",
          small ? "text-sm" : "text-xl"
        )}>
          <a 
            href="https://chatgpt.com/g/g-68110eebf7f88191b60025b9c37cb2f2-comic-book-maker-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyberpunk-purple transition-colors"
          >
            Comic Book Maker GPT
          </a>
        </h1>
        <p className={cn(
          "text-gray-400",
          small ? "text-xs" : "text-sm"
        )}>
          Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="hover:text-cyberpunk-purple transition-colors">AiWebTools.Ai</a>
        </p>
      </div>
    </div>
  );
};

export default Logo;
