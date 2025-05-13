import { navLinks } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              John<span className="text-accent">Doe</span>
            </a>
            <p className="text-gray-400 mt-2">Creative Professional</p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <nav className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          
          <div>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} John Doe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
