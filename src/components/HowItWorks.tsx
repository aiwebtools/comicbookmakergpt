
import React from 'react';
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Define Your Comic Book",
      description: "Answer questions about genre, characters, plot, page count, art style, and tone to set up your comic book project.",
      color: "cyberpunk-purple"
    },
    {
      number: "02",
      title: "Create Your Outline",
      description: "The AI creates a detailed outline with title, story summary, character list, and page-by-page breakdown for your approval.",
      color: "cyberpunk-pink"
    },
    {
      number: "03",
      title: "Build Each Page",
      description: "For each page, the AI plans panel layouts, describes actions, writes dialogue, and generates comic-style illustrations.",
      color: "cyberpunk-orange"
    },
    {
      number: "04",
      title: "Review & Iterate",
      description: "After each page, review the result and request changes or proceed to the next page when satisfied.",
      color: "cyberpunk-blue"
    },
    {
      number: "05",
      title: "Complete Your Comic",
      description: "Once all pages are finalized, the AI can compile your complete comic book into a PDF file.",
      color: "cyberpunk-purple"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative bg-cyberpunk-darker">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text">
            How It Works
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Creating your comic book with Comic Book Maker GPT is easy. Just follow these steps:
          </p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row items-start gap-6 relative"
            >
              {/* Step Number */}
              <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-${step.color}/20 border border-${step.color} flex items-center justify-center`}>
                <span className={`text-${step.color} text-2xl font-bold`}>{step.number}</span>
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className={`absolute top-16 left-8 w-0.5 h-[calc(100%+3rem)] bg-gradient-to-b from-${step.color} to-${steps[index + 1].color} opacity-30 hidden md:block`}></div>
              )}
              
              {/* Content */}
              <div className="flex-1 glass-panel p-6">
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button asChild className="button-glow text-white px-8 py-6 text-lg">
            <a 
              href="https://chatgpt.com/g/g-68110eebf7f88191b60025b9c37cb2f2-comic-book-maker-gpt"
              target="_blank"
              rel="noopener noreferrer"
            >
              START CREATING YOUR COMIC
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
