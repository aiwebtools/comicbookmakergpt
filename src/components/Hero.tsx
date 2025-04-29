
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyberpunk-dark z-0">
        <div className="absolute inset-0 bg-cyberpunk-gradient opacity-50"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyberpunk-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyberpunk-pink/20 rounded-full filter blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col items-center">
        <div className="text-center mb-8 mt-12 sm:mt-16">
          <Logo className="mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 neon-text">
            MAKE EPIC COMIC BOOKS WITH AI FOR FREE!
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Turn your ideas into professional comic books with our AI assistant. Create stunning storylines, characters, and illustrations page by page.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button asChild className="button-glow text-white px-8 py-6 text-lg">
            <a 
              href="https://chatgpt.com/g/g-68110eebf7f88191b60025b9c37cb2f2-comic-book-maker-gpt"
              target="_blank"
              rel="noopener noreferrer"
            >
              USE COMIC BOOK MAKER GPT
            </a>
          </Button>
          <Button asChild variant="outline" className="border-cyberpunk-purple text-cyberpunk-purple hover:bg-cyberpunk-purple/10 px-8 py-6 text-lg">
            <a href="#how-it-works">
              Learn How It Works
            </a>
          </Button>
        </div>

        {/* Featured Comic Book Image */}
        <div className="mt-12 w-full max-w-4xl mx-auto relative">
          <a 
            href="https://chatgpt.com/g/g-68110eebf7f88191b60025b9c37cb2f2-comic-book-maker-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer transition-transform hover:scale-[1.02]"
          >
            <img 
              src="https://ideogram.ai/assets/image/lossless/response/ejHuPw52SbmMQksPYzFtHA" 
              alt="Comic Book Example" 
              className="w-full rounded-lg border-2 border-cyberpunk-purple/50 shadow-lg shadow-cyberpunk-purple/20 animate-float"
            />
            <div className="absolute -bottom-4 -right-4 bg-cyberpunk-dark px-4 py-2 rounded-lg border border-cyberpunk-pink/50 text-cyberpunk-pink text-sm">
              Created with Comic Book Maker GPT
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
