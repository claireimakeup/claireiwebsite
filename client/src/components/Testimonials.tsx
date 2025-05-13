import { useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/constants";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Client <span className="text-accent">Stories</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            The creative journey behind every look, as told by the clients who trusted me with their vision.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/1 lg:basis-1/1">
                  <div className="p-1">
                    <Card className="border-none shadow-md">
                      <CardContent className="flex flex-col md:flex-row gap-6 p-6">
                        <div className="w-full md:w-1/3">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-64 object-cover rounded-md shadow-sm"
                          />
                        </div>
                        <div className="w-full md:w-2/3 flex flex-col justify-center">
                          <div className="mb-4">
                            <svg className="h-8 w-8 text-accent mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                              <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                            </svg>
                            <p className="text-gray-600 italic mb-4 text-lg">{testimonial.quote}</p>
                          </div>
                          <div>
                            <h4 className="text-xl font-serif font-semibold">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">{testimonial.event}</p>
                            <p className="mt-2 text-sm">{testimonial.story}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative left-0 translate-x-0 mr-2" />
              <CarouselNext className="relative right-0 translate-x-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;