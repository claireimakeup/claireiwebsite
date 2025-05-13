import { useState } from "react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/constants";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Work" },
    { id: "editorial", name: "Editorial" },
    { id: "commercial", name: "Commercial" },
    { id: "runway", name: "Runway" },
    { id: "bridal", name: "Bridal" },
    { id: "creative", name: "Creative" }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            My <span className="text-accent">Portfolio</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            A decade and a half of creating beauty across fashion, editorial, bridal, and commercial artistry.
          </p>
        </div>

        {/* Portfolio Filter */}
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

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-item group" data-category={project.category}>
              <div className="relative overflow-hidden rounded-xl shadow-md h-full flex flex-col">
                <div className="overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-white flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex gap-2 mb-3">
                    {project.categories.map((category, index) => (
                      <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">
                        {category}
                      </span>
                    ))}
                  </div>
                  <p className="text-secondary text-sm mb-4 flex-grow">{project.description}</p>
                  <a href="#contact">
                    <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white mt-auto">
                      Book This Style
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact">
            <Button variant="default" className="bg-accent text-white hover:bg-accent/90">
              Book Your Session
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
