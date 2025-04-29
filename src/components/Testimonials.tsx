
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I've always wanted to create my own superhero comic but lacked the artistic skills. Comic Book Maker GPT made it possible! The AI guided me through the entire process and created amazing illustrations.",
      author: "Michael R.",
      title: "Aspiring Comic Creator",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "The step-by-step approach is brilliant. I loved how the AI helped me plan each page and panel before creating the illustrations. My manga-style comic turned out better than I expected!",
      author: "Sarah T.",
      title: "Manga Enthusiast",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "As a teacher, I used Comic Book Maker GPT to create educational comics for my students. The process was intuitive, and the kids absolutely loved the results. Definitely recommend!",
      author: "David L.",
      title: "Elementary School Teacher",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-cyberpunk-gradient opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text">
            What Our Users Say
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Join thousands of creators who have brought their comic book ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-cyberpunk-darker/60 backdrop-blur-sm border-0 overflow-hidden cyberpunk-border h-full">
              <CardContent className="p-6 flex flex-col h-full">
                {/* Quote */}
                <div className="text-cyberpunk-purple text-5xl font-serif mb-4">"</div>
                <p className="text-gray-300 flex-1 mb-6">{testimonial.quote}</p>
                
                {/* Author */}
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyberpunk-pink">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
