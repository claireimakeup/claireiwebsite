import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  // Using varied portfolio images showcasing different styles
  const heroImages = [
    { id: 1, src: "/assets/portfolio/beauty/beauty12.jpg" },
    { id: 2, src: "/assets/portfolio/campaign/campaign11.jpg" },
    { id: 3, src: "/assets/portfolio/beauty/beauty17.jpg" },
    { id: 4, src: "/assets/portfolio/campaign/campaign21.jpg" }
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-3 font-tenor tracking-widest">
            CLAIRE IMBROGNO
          </h1>
          <div className="w-20 h-0.5 bg-accent mx-auto my-4"></div>
          <h2 className="text-xl md:text-2xl font-light font-jost uppercase tracking-wider">
            Hair and Makeup Artist
          </h2>
          <div className="flex justify-center mt-3 space-x-4">
            <a 
              href="https://instagram.com/claire_imakeup" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-quicksand"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-1" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
              @claire_imakeup
            </a>
            <a 
              href="https://tiktok.com/@claire_imakeup" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-quicksand"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-1" viewBox="0 0 16 16">
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
              </svg>
              @claire_imakeup
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
            <p className="text-secondary text-lg md:text-xl mb-8 font-bodoni-flf leading-relaxed">
              Elevating editorial beauty and luxury campaigns through artistry that transforms faces into living canvases. With an exceptional eye for detail and sophisticated styling, Claire brings creative direction to life across Melbourne and Australia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#portfolio">
                <Button variant="default" size="default" className="font-poiret tracking-wider uppercase text-sm">
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
