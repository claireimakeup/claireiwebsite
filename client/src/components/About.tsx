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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=750" 
                alt="John Doe - Creative Professional" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-sm text-secondary">Certified Professional</p>
                    <p className="font-bold">Creative Direction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
              About <span className="text-accent">Me</span>
            </h2>
            
            <p className="text-secondary mb-6">
              Hello! I'm John Doe, a creative professional with over 10 years of experience in design, photography, and branding. I help businesses and individuals bring their creative visions to life through thoughtful and strategic design solutions.
            </p>
            
            <p className="text-secondary mb-8">
              My approach combines creative thinking with analytical problem-solving to deliver projects that not only look great but also achieve their intended goals. I believe in the power of design to communicate, inspire, and transform.
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
                  Contact Me
                </Button>
              </a>
              <a href="#">
                <Button variant="outline">
                  Download Resume
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
