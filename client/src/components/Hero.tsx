import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(1);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev % 3) + 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 modern-display">
              Claire Imbrogno <span className="text-accent">Hair and Makeup</span> Artist
            </h1>
            <h2 className="text-secondary text-xl md:text-2xl mb-8 font-light">
              Specializing in high-fashion editorial, e-commerce campaigns, and luxury brand photoshoots across Australia and internationally.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#portfolio">
                <Button variant="default" size="default">
                  View Portfolio
                </Button>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-slideUp">
            <div className="relative overflow-hidden rounded-xl shadow-2xl h-[550px]">
              <img 
                src={`/assets/hero/hero-image${currentImage}.jpg`} 
                alt="Professional fashion editorial makeup by Claire Imbrogno" 
                className="w-full h-full rounded-xl object-cover transition-opacity duration-1000 ease-in-out"
                style={{ objectPosition: currentImage === 3 ? 'top' : 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Image indicator dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {[1, 2, 3].map((num) => (
                  <button 
                    key={num}
                    onClick={() => setCurrentImage(num)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImage === num ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                    aria-label={`View image ${num}`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-accent text-white p-4 rounded-lg shadow-lg">
              <p className="font-bold">Claire Imbrogno</p>
              <p className="text-sm">Professional Makeup Artist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
