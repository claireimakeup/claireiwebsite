import { useState } from "react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/constants";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("beauty");

  const categories = [
    { id: "beauty", name: "Beauty" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "campaign", name: "Campaign" },
    { id: "fashion", name: "Events" },
    { id: "bridal", name: "Bridal" }
  ];

  const filteredProjects = projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            My <span className="text-accent">Portfolio</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto font-times-new-roman">
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
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-lg font-tenor mb-1">{project.title}</h3>
                  <p className="text-gray-200 text-sm font-times">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
