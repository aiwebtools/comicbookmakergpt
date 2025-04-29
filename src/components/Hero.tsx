
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

        {/* 3D Comic Book Mockup */}
        <div className="mt-16 relative w-full max-w-4xl mx-auto">
          <div className="w-full aspect-video bg-cyberpunk-darker rounded-lg overflow-hidden relative cyberpunk-border animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-cyberpunk-purple/20 to-cyberpunk-pink/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Comic Book Pages Preview */}
              <div className="grid grid-cols-2 gap-4 p-6 w-full max-w-3xl">
                <div className="bg-cyberpunk-darker border border-cyberpunk-purple/30 rounded-md p-3 h-[200px] flex flex-col">
                  <div className="text-cyberpunk-purple text-sm mb-2">Page 1 - Cover</div>
                  <div className="flex-1 bg-gradient-to-br from-cyberpunk-dark to-cyberpunk-darker rounded flex items-center justify-center">
                    <span className="text-cyberpunk-orange text-xs">Comic Cover Preview</span>
                  </div>
                </div>
                <div className="bg-cyberpunk-darker border border-cyberpunk-pink/30 rounded-md p-3 h-[200px] flex flex-col">
                  <div className="text-cyberpunk-pink text-sm mb-2">Page 2 - Story Start</div>
                  <div className="flex-1 bg-gradient-to-br from-cyberpunk-dark to-cyberpunk-darker rounded grid grid-cols-2 gap-2 p-2">
                    <div className="border border-white/10 rounded"></div>
                    <div className="border border-white/10 rounded"></div>
                    <div className="border border-white/10 rounded"></div>
                    <div className="border border-white/10 rounded"></div>
                  </div>
                </div>
                <div className="bg-cyberpunk-darker border border-cyberpunk-blue/30 rounded-md p-3 h-[200px] flex flex-col">
                  <div className="text-cyberpunk-blue text-sm mb-2">Page 3 - Action Scene</div>
                  <div className="flex-1 bg-gradient-to-br from-cyberpunk-dark to-cyberpunk-darker rounded grid grid-cols-3 grid-rows-2 gap-2 p-2">
                    <div className="border border-white/10 rounded col-span-2"></div>
                    <div className="border border-white/10 rounded row-span-2"></div>
                    <div className="border border-white/10 rounded col-span-2"></div>
                  </div>
                </div>
                <div className="bg-cyberpunk-darker border border-cyberpunk-orange/30 rounded-md p-3 h-[200px] flex flex-col">
                  <div className="text-cyberpunk-orange text-sm mb-2">Page 4 - Dialogue</div>
                  <div className="flex-1 bg-gradient-to-br from-cyberpunk-dark to-cyberpunk-darker rounded flex flex-col gap-2 p-2">
                    <div className="flex-1 border border-white/10 rounded"></div>
                    <div className="flex-1 border border-white/10 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Comic Book Interface Elements */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-pink opacity-50"></div>
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-r from-cyberpunk-pink to-cyberpunk-purple opacity-50"></div>
          </div>
          
          {/* Reflection */}
          <div className="w-full h-24 bg-gradient-to-b from-cyberpunk-purple/10 to-transparent mt-1 rounded-b-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
