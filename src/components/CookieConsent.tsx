
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Small delay to show the popup after page load
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
    toast({
      title: "Consent Saved",
      description: "Your cookie preferences have been saved.",
      duration: 3000,
    });
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto glass-panel p-6 backdrop-blur-xl bg-cyberpunk-darker/90 border border-white/10 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-white mb-2">I Agree To Terms and Conditions</h3>
          <p className="text-gray-300 text-sm">
            This website uses cookies to ensure you get the best experience. By using Comic Book Maker GPT, you agree to our <a href="https://aiwebtools.ai/terms-of-services" className="text-cyberpunk-purple hover:underline">Terms of Service</a> and <a href="https://openai.com/policies/privacy-policy/" className="text-cyberpunk-purple hover:underline">Privacy Policy</a>.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-cyberpunk-purple text-cyberpunk-purple hover:bg-cyberpunk-purple/10" onClick={handleAccept}>
            Decline
          </Button>
          <Button className="button-glow text-white" onClick={handleAccept}>
            I Agree
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
