import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  // Using only fashion/editorial images (no bridal)
  const heroImages = [
    { id: 1, src: "/assets/hero/hero-image1.jpg" },
    { id: 2, src: "/assets/hero/hero-image2.jpg" },
    { id: 3, src: "/assets/hero/hero-image3.jpg" },
    { id: 4, src: "/assets/hero/hero-image4.jpg" }
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [heroImages.length]);
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        {/* Inspired by vanessabarney.com.au with full-width name first */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-3 font-julius tracking-widest">
            CLAIRE IMBROGNO
          </h1>
          <div className="w-20 h-0.5 bg-accent mx-auto my-4"></div>
          <h2 className="text-xl md:text-2xl font-light font-josefin uppercase tracking-widest">
            Hair and Makeup Artist
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
            <p className="text-secondary text-lg md:text-xl mb-8 font-light font-quicksand leading-relaxed">
              Specializing in high-fashion editorial, e-commerce campaigns, and luxury brand photoshoots across Australia and internationally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#portfolio">
                <Button variant="default" size="default" className="font-tenor tracking-wider uppercase text-sm">
                  View Portfolio
                </Button>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-slideUp">
            <div className="relative overflow-hidden hero-image-container shadow-md h-[550px] clip-path-angle">
              <img 
                src={heroImages[currentImageIndex].src} 
                alt="Professional fashion editorial makeup by Claire Imbrogno" 
                className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                style={{ objectPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
              
              {/* Image indicator dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {heroImages.map((image, index) => (
                  <button 
                    key={image.id}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-none transition-all duration-300 ${
                      currentImageIndex === index ? 'bg-white scale-110' : 'bg-white/50'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
