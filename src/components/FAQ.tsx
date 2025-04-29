
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Comic Book Maker GPT?",
      answer: "Comic Book Maker GPT is an AI-powered comic book creation assistant that helps you create complete comic books page-by-page. It guides you through defining your project, creating an outline, and developing each page with illustrations in a comic book style."
    },
    {
      question: "Do I need artistic skills to use Comic Book Maker GPT?",
      answer: "No artistic skills required! Comic Book Maker GPT handles the visual aspects of comic creation. You provide the story ideas and direction, and the AI generates comic-style illustrations for each page based on your input."
    },
    {
      question: "What styles of comics can I create?",
      answer: "You can create various comic styles including classic superhero, manga, indie comic style, cartoony, and more. Simply specify your preferred art style when setting up your project."
    },
    {
      question: "How many pages can my comic book have?",
      answer: "You can specify any page count for your comic book. The default is 20 pages if not specified, but you're free to create shorter or longer comics based on your story needs."
    },
    {
      question: "Can I make changes to pages after they're created?",
      answer: "Yes! After each page is generated, you'll be asked if you want to make changes or move on to the next page. You can request revisions to any aspect of the page before proceeding."
    },
    {
      question: "How do I get a PDF of my complete comic book?",
      answer: "Once you've completed all the pages of your comic book, Comic Book Maker GPT will offer to compile them into a PDF file for you. This gives you the complete comic book in a shareable format."
    },
    {
      question: "Is there a cost to use Comic Book Maker GPT?",
      answer: "Comic Book Maker GPT is free to use! You'll need a ChatGPT account with access to GPT-4o to use the tool."
    }
  ];

  return (
    <section id="faq" className="py-20 relative bg-cyberpunk-darker">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Everything you need to know about creating comics with AI.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-cyberpunk-dark/60 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-lg font-medium text-white hover:text-cyberpunk-purple">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
