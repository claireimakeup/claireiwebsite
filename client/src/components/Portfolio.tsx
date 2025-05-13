import { useState } from "react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/constants";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Services" },
    { id: "bridal", name: "Bridal" },
    { id: "evening", name: "Evening" },
    { id: "natural", name: "Natural" },
    { id: "editorial", name: "Editorial" }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Makeup <span className="text-accent">Services</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Professional makeup artistry for every occasion, customized to enhance your natural beauty.
          </p>
        </div>

        {/* Services Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`rounded-full ${
                activeCategory === category.id 
                  ? "bg-accent text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-item group" data-category={project.category}>
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-300 mt-2">{project.categories.join(", ")}</p>
                    <a href="#contact">
                      <Button variant="default" className="mt-4">
                        Book This Service
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact">
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
              Book Your Session
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
