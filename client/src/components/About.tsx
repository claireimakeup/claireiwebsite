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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-tenor-sans tracking-wide">
              About <span className="text-accent">Claire</span>
            </h2>
            
            <p className="text-secondary mb-5 leading-relaxed font-times-new-roman text-base">
              Beginning with a love of painting and watercolors, Claire discovered her artistic vision could transform more than just paper. Her journey from delicate brushstrokes on canvas to creating stunning beauty looks for professional photoshoots reveals an artist who sees faces as her ultimate medium. More than just applying makeup, Claire creates a connection with each canvas she works on, seeing the unique beauty in every client that sits in her chair.
            </p>
            
            <p className="text-secondary mb-5 leading-relaxed font-times-new-roman text-base">
              With over 15 years immersed in the beauty industry, Claire has refined her craft alongside some of Australia's most prestigious brands. Her journey includes two years as a makeup artist in London and time as a full-time colour specialist at the prestigious Space.NK makeup store. Working with Mecca, Laura Mercier, Cotton On, Myer, and countless photoshoots has given her the versatility to adapt to any style or brief while maintaining her signature light-handed approach that allows natural beauty to shine through.
            </p>
            
            <p className="text-secondary mb-5 leading-relaxed font-times-new-roman text-base">
              Claire approaches each face with the same meticulous care and creativity whether it's for a bride's special day, a magazine photoshoot, or a major commercial campaign. Her kit is stocked with only the highest quality products from M.A.C, Dior, NARS, Charlotte Tilbury, and Hourglass, ensuring every look is built on a foundation of luxury and longevity. Based in Melbourne but available Australia-wide, Claire brings the same dedication to creating your perfect look that has made her a trusted name in the industry.
            </p>
            
            <p className="text-secondary mb-6 leading-relaxed font-times-new-roman text-base">
              Beyond makeup artistry, Claire is also a skilled hair stylist who can create the perfect complete look for any occasion. With extensive training in skincare, she brings a holistic approach that ensures every client receives makeup application that not only looks beautiful but also benefits their skin. She has extensive experience working with children on set, bringing a patient and gentle approach that puts young talent at ease. Additionally, Claire specializes in men's grooming for photo shoots, ensuring male models and actors look their absolute best while maintaining a natural, polished appearance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
