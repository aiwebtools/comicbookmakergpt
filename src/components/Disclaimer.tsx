
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-20 relative">
      <div className="absolute inset-0 bg-cyberpunk-gradient opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text">
            Legal Disclaimer
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Please read the following important information about using Comic Book Maker GPT.
          </p>
        </div>

        <Card className="bg-cyberpunk-darker/70 backdrop-blur-sm border-0 overflow-hidden cyberpunk-border">
          <CardContent className="p-8">
            <div className="space-y-6 text-sm md:text-base text-gray-300">
              <p>
                <strong className="text-white">General Use:</strong> Comic Book Maker GPT is an AI tool designed to assist users in creating comic books. It is provided "as is" without warranties of any kind, either expressed or implied.
              </p>
              
              <p>
                <strong className="text-white">Content Creation:</strong> Users are responsible for ensuring that any content created with Comic Book Maker GPT complies with applicable laws and does not infringe upon any third-party rights, including but not limited to copyright, trademark, privacy, and publicity rights.
              </p>
              
              <p>
                <strong className="text-white">Content Ownership:</strong> Users retain ownership of the original content they create using Comic Book Maker GPT. However, AI-generated images may be subject to different terms based on OpenAI's policies.
              </p>
              
              <p>
                <strong className="text-white">Limitation of Liability:</strong> AI WEB TOOLS LLC and its affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from the use or inability to use Comic Book Maker GPT.
              </p>
              
              <p>
                <strong className="text-white">No Commercial Guarantee:</strong> While Comic Book Maker GPT aims to produce high-quality comic book content, we make no guarantees regarding the commercial viability or marketability of any content created using this tool.
              </p>
              
              <p>
                <strong className="text-white">Data Usage:</strong> By using Comic Book Maker GPT, users acknowledge that their interactions with the tool may be processed by OpenAI in accordance with their <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-cyberpunk-purple hover:underline">Privacy Policy</a>.
              </p>
              
              <p>
                <strong className="text-white">Age Restrictions:</strong> Users must be at least 13 years of age to use Comic Book Maker GPT. Users under the age of 18 must have parental consent.
              </p>
              
              <p>
                <strong className="text-white">Service Modifications:</strong> AI WEB TOOLS LLC reserves the right to modify, suspend, or discontinue Comic Book Maker GPT at any time without notice.
              </p>
              
              <p>
                <strong className="text-white">Terms of Service:</strong> Use of Comic Book Maker GPT is subject to OpenAI's Terms of Service and AI WEB TOOLS LLC's <a href="https://aiwebtools.ai/terms-of-services" target="_blank" rel="noopener noreferrer" className="text-cyberpunk-purple hover:underline">Terms of Service</a>.
              </p>
              
              <p>
                By using Comic Book Maker GPT, you acknowledge that you have read, understood, and agree to be bound by this disclaimer and all applicable terms and policies.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Disclaimer;
