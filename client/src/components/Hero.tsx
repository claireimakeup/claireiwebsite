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
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 font-great-vibes">
              Claire Imbrogno <span className="text-accent font-pinyon">Hair and Makeup</span> Artist
            </h1>
            <h2 className="text-secondary text-xl md:text-2xl mb-8 font-light font-dancing">
              Specializing in high-fashion editorial, e-commerce campaigns, and luxury brand photoshoots across Australia and internationally.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#portfolio">
                <Button variant="default" size="default" className="font-marcellus tracking-wider uppercase">
                  View Portfolio
                </Button>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-slideUp">
            <div className="relative overflow-hidden hero-image-container shadow-2xl h-[550px] clip-path-angle">
              <img 
                src={heroImages[currentImageIndex].src} 
                alt="Professional fashion editorial makeup by Claire Imbrogno" 
                className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                style={{ objectPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Image indicator dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroImages.map((image, index) => (
                  <button 
                    key={image.id}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-accent text-white p-4 px-6 rounded-full shadow-lg transform rotate-3 font-alex-brush">
              <p className="font-bold text-lg tracking-wider">Claire Imbrogno</p>
              <p className="text-sm font-allura">Professional Makeup Artist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
