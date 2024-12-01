import React, { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    quote: "Reuben's expertise in web development transformed our online presence. His attention to detail and innovative solutions exceeded our expectations."
  },
  {
    name: "Michael Chen",
    role: "Data Science Lead, Analytics Pro",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    quote: "Working with Reuben on our data analysis project was a game-changer. His insights helped us optimize our business processes significantly."
  },
  {
    name: "Emily Rodriguez",
    role: "Director of Education, LearnTech Academy",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    quote: "As an educator, Reuben has a unique ability to make complex technical concepts accessible to students. His teaching methods are both effective and engaging."
  },
  {
    name: "David Kim",
    role: "CTO, Innovation Labs",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
    quote: "The technical consulting services provided by Reuben were invaluable to our startup. His strategic guidance helped us make informed technology decisions."
  },
  {
    name: "Nia Patel",
    role: "Principal, Uasin Gishu High School",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    quote: "Reuben's teaching made a notable difference in our students' performance. His approach to integrating technology with learning enhanced student engagement and understanding."
  },
  {
    name: "Liam Adams",
    role: "Founder, Bolt Innovations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    quote: "Reuben's proficiency in AI-driven web development was exactly what we needed for our project. His work with Bolt exceeded expectations and paved the way for future AI-integrated solutions."
  },
  {
    name: "Amara Lopez",
    role: "YouTube Content Creator",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    quote: "Thanks to Reuben's SEO expertise, my channel saw significant growth in engagement. His insights into content strategy were invaluable for reaching a wider audience."
  },
  {
    name: "Samuel Mwangi",
    role: "Trading Analyst, MarketFlow Inc.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
    quote: "Reuben's extensive knowledge of trading brought fresh perspectives to our strategies. His podcast on trading tips quickly became a valuable resource for our team."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 relative bg-gradient-to-b from-black/30 to-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Client Testimonials
          </span>
        </h2>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="max-w-2xl mx-auto">
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 relative">
                    <Quote className="absolute top-4 left-4 w-8 h-8 text-cyan-400/20" />
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400/30"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-100">{testimonial.name}</h3>
                        <p className="text-cyan-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-300 italic relative pl-6">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-cyan-400 w-6' : 'bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;