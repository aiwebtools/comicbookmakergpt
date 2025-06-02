
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-violet-900/30"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-32 right-32 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-xl animate-float delay-500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 animate-glow">
            Legal Disclaimer
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
            Please read the following important information about using Comic Book Maker GPT.
          </p>
        </div>

        <Card className="relative bg-gradient-to-br from-purple-900/10 via-pink-900/5 to-violet-900/10 backdrop-blur-xl border border-white/20 overflow-hidden shadow-2xl rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 animate-pulse"></div>
          <CardContent className="p-12 relative z-10">
            <div className="space-y-8 text-base md:text-lg text-gray-300 leading-relaxed">
              <p className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <strong className="text-white text-lg">General Use:</strong> Comic Book Maker GPT is an AI tool designed to assist users in creating comic books. It is provided "as is" without warranties of any kind, either expressed or implied.
              </p>
              
              <p className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <strong className="text-white text-lg">Content Creation:</strong> Users are responsible for ensuring that any content created with Comic Book Maker GPT complies with applicable laws and does not infringe upon any third-party rights, including but not limited to copyright, trademark, privacy, and publicity rights.
              </p>
              
              <p className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <strong className="text-white text-lg">Content Ownership:</strong> Users retain ownership of the original content they create using Comic Book Maker GPT. However, AI-generated images may be subject to different terms based on OpenAI's policies.
              </p>
              
              <p className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <strong className="text-white text-lg">Limitation of Liability:</strong> AI WEB TOOLS LLC and its affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from the use or inability to use Comic Book Maker GPT.
              </p>
              
              <p className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <strong className="text-white text-lg">No Commercial Guarantee:</strong> While Comic Book Maker GPT aims to produce high-quality comic book content, we make no guarantees regarding the commercial viability or marketability of any content created using this tool.
              </p>
              
              <p className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <strong className="text-white text-lg">Data Usage:</strong> By using Comic Book Maker GPT, users acknowledge that their interactions with the tool may be processed by OpenAI in accordance with their <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:from-pink-400 hover:to-violet-400 transition-all duration-300 underline">Privacy Policy</a>.
              </p>
              
              <p className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <strong className="text-white text-lg">Age Restrictions:</strong> Users must be at least 13 years of age to use Comic Book Maker GPT. Users under the age of 18 must have parental consent.
              </p>
              
              <p className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <strong className="text-white text-lg">Service Modifications:</strong> AI WEB TOOLS LLC reserves the right to modify, suspend, or discontinue Comic Book Maker GPT at any time without notice.
              </p>
              
              <p className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <strong className="text-white text-lg">Terms of Service:</strong> Use of Comic Book Maker GPT is subject to OpenAI's Terms of Service and AI WEB TOOLS LLC's <a href="https://aiwebtools.lovable.app/disclaimers" target="_blank" rel="noopener noreferrer" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:from-pink-400 hover:to-violet-400 transition-all duration-300 underline">Terms of Service</a>.
              </p>
              
              <div className="text-center mt-12 p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <p className="text-lg font-medium text-white">
                  By using Comic Book Maker GPT, you acknowledge that you have read, understood, and agree to be bound by this disclaimer and all applicable terms and policies.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Disclaimer;
