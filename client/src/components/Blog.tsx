import { CalendarIcon, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/constants";

const Blog = () => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Blog <span className="text-accent">Posts</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Makeup tips, trends, and behind-the-scenes stories from my work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="font-bold text-xl mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-secondary mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <a href={`/blog/${post.slug}`}>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/blog">
            <Button variant="default">
              View All Posts
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
