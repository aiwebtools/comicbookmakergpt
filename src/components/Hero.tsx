
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900">
      {/* Animated background layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-pink-900/60 to-violet-900/80 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-pink-600/20 animate-glow"></div>
      
      {/* Moving particles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-conic from-purple-400 via-pink-400 to-violet-400 rounded-full opacity-30 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-conic from-blue-400 via-cyan-400 to-purple-400 rounded-full opacity-25 blur-3xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-conic from-pink-400 via-violet-400 to-purple-400 rounded-full opacity-20 blur-2xl animate-float delay-500"></div>
      
      {/* Shimmering grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwIDAgTCAwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOGI1Y2Y2IiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMTUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40 animate-pulse"></div>

      {/* Floating sparkles */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-white rounded-full animate-ping"></div>
      <div className="absolute top-32 right-16 w-2 h-2 bg-purple-300 rounded-full animate-ping delay-300"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-pink-300 rounded-full animate-ping delay-700"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-ping delay-1000"></div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col items-center">
        <div className="text-center mb-12 mt-16 sm:mt-20">
          <div className="relative mb-12">
            <Logo className="mx-auto mb-12 transform hover:scale-110 transition-transform duration-500" />
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 opacity-30 blur-xl rounded-full"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 animate-glow leading-tight">
            <a 
              href="https://chatgpt.com/g/g-68110eebf7f88191b60025b9c37cb2f2-comic-book-maker-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-300 inline-block"
            >
              MAKE EPIC COMIC BOOKS WITH AI FOR FREE!
            </a>
          </h1>
          
          <div className="relative">
            <p className="text-xl md:text-3xl lg:text-4xl max-w-5xl mx-auto text-gray-200 leading-relaxed font-light">
              Turn your ideas into professional comic books with our AI assistant. Create stunning storylines, characters, and illustrations page by page.
            </p>
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-xl rounded-2xl"></div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 mt-12 mb-16">
          <Button asChild className="relative group bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 hover:from-purple-500 hover:via-pink-500 hover:to-violet-500 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-white/20">
            <a 
              href="https://chatgpt.com/g/g-68110eebf7f88191b60025b9c37cb2f2-comic-book-maker-gpt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10">USE COMIC BOOK MAKER GPT</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-40 rounded-2xl blur-xl transition-opacity duration-300"></div>
            </a>
          </Button>
          
          <Button asChild variant="outline" className="border-2 border-purple-400/50 text-purple-300 hover:bg-purple-500/20 hover:text-white hover:border-purple-300 px-12 py-6 text-xl font-bold rounded-2xl backdrop-blur-sm bg-white/5 shadow-xl transform hover:scale-105 transition-all duration-300">
            <a href="#how-it-works">
              Learn How It Works
            </a>
          </Button>
        </div>

        {/* Featured Comic Book Image */}
        <div className="mt-16 w-full max-w-5xl mx-auto relative group">
          <a 
            href="https://chatgpt.com/g/g-68110eebf7f88191b60025b9c37cb2f2-comic-book-maker-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer"
          >
            <div className="relative transform group-hover:scale-105 transition-all duration-500">
              <img 
                src="https://ideogram.ai/assets/image/lossless/response/ejHuPw52SbmMQksPYzFtHA" 
                alt="Comic Book Example" 
                className="w-full rounded-3xl border-4 border-purple-400/30 shadow-2xl shadow-purple-500/30 animate-float"
              />
              
              {/* Glowing border effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 rounded-3xl opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-500"></div>
              
              {/* Sparkle overlay */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-white rounded-full opacity-80 animate-ping"></div>
              <div className="absolute bottom-8 left-8 w-4 h-4 bg-purple-300 rounded-full opacity-70 animate-ping delay-500"></div>
              
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-900/90 to-pink-900/90 backdrop-blur-sm px-8 py-4 rounded-2xl border-2 border-purple-400/50 text-purple-300 text-lg font-medium shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                Created with <a 
                  href="https://chatgpt.com/g/g-68110eebf7f88191b60025b9c37cb2f2-comic-book-maker-gpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:from-pink-400 hover:to-violet-400 transition-all duration-300"
                >
                  Comic Book Maker GPT
                </a>
              </div>
            </div>
          </a>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900 to-transparent"></div>
    </div>
  );
};

export default Hero;
