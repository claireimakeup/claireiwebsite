import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-serif">
              Creative <span className="text-accent">Portfolio</span> That Stands Out
            </h1>
            <h2 className="text-secondary text-xl md:text-2xl mb-8 font-light">
              Showcasing my passion for design, photography, and creative solutions.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#portfolio">
                <Button variant="default" size="default">
                  View My Work
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="default">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-slideUp">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600603405959-6d623e92445c?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=800" 
                alt="Professional creative portrait" 
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-accent text-white p-4 rounded-lg shadow-lg">
              <p className="font-bold">10+ Years</p>
              <p className="text-sm">Professional Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
