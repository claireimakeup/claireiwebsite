import { CalendarIcon, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/constants";

const Blog = () => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-tenor">
            Journal
          </h2>
          <p className="text-secondary max-w-2xl mx-auto font-times">
            Insights, techniques, and behind-the-scenes stories from my editorial work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white overflow-hidden group border border-gray-100">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-xs uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span className="font-times">{post.date}</span>
                </div>
                
                <h3 className="font-tenor text-xl mb-3 group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3 font-times">
                  {post.excerpt}
                </p>
                
                <a href={`/blog/${post.slug}`} className="inline-block border-b border-black pb-1 text-sm uppercase tracking-wide font-tenor hover:text-gray-600 transition-colors">
                  Read Article
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="/blog" className="inline-block border border-black px-8 py-3 text-sm uppercase tracking-wide font-tenor hover:bg-black hover:text-white transition-colors">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
