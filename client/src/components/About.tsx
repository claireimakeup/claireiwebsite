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
                src="/assets/about-image.jpeg" 
                alt="Claire Imbrogno - Professional Makeup Artist" 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
              About <span className="text-accent">Claire</span>
            </h2>
            
            <p className="text-secondary mb-5 leading-relaxed">
              Beginning with a love of painting and watercolors, Claire Imbrogno discovered her artistic vision could transform more than just paper. Her journey from delicate brushstrokes on canvas to commanding the beauty direction on high-fashion editorial shoots reveals an artist who sees faces as her ultimate medium. More than just applying makeup, Claire creates a connection with each canvas she works on, seeing the unique beauty in every client that sits in her chair.
            </p>
            
            <p className="text-secondary mb-5 leading-relaxed">
              With over 15 years immersed in the beauty industry, Claire has refined her craft alongside some of Australia's most prestigious brands. Working with Mecca, Laura Mercier, Cotton On, Myer, and countless photoshoots has given her the versatility to adapt to any style or brief while maintaining her signature light-handed approach that allows natural beauty to shine through.
            </p>
            
            <p className="text-secondary mb-6 leading-relaxed">
              Claire approaches each face with the same meticulous care and creativity whether it's for a bride's special day, a magazine editorial, or a major commercial campaign. Her kit is stocked with only the highest quality products from M.A.C, Dior, NARS, Charlotte Tilbury, and Hourglass, ensuring every look is built on a foundation of luxury and longevity. Based in Melbourne but available Australia-wide, Claire brings the same dedication to creating your perfect look that has made her a trusted name in the industry.
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
