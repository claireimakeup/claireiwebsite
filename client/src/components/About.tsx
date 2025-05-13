import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { expertise } from "@/lib/constants";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1511424323602-d3c1a4138056?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=750" 
                alt="Claire Imbrogno - Professional Makeup Artist" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-sm text-secondary">Professional</p>
                    <p className="font-bold">Certified MUA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
              About <span className="text-accent">Claire</span>
            </h2>
            
            <p className="text-secondary mb-6">
              Hello! I'm Claire Imbrogno, a professional makeup artist based in Sydney with a passion for creating beautiful, personalized looks that enhance natural beauty. With expertise in bridal, editorial, and special occasion makeup, I work closely with each client to bring their vision to life.
            </p>
            
            <p className="text-secondary mb-8">
              My approach focuses on enhancing your unique features while ensuring makeup that lasts, photographs beautifully, and makes you feel confident. I believe makeup should be a transformative experience that brings out your best self for any occasion.
            </p>
            
            <h3 className="text-xl font-bold mb-4">My Expertise</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {expertise.map((skill, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 text-accent">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">{skill.title}</h4>
                    <p className="text-secondary text-sm">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4 flex-wrap">
              <a href="#contact">
                <Button variant="default">
                  Book a Session
                </Button>
              </a>
              <a href="#portfolio">
                <Button variant="outline">
                  View Services
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
