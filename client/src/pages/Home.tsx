import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Creative Portfolio | John Doe</title>
        <meta name="description" content="Professional creative portfolio showcasing design, photography, and artistic projects by John Doe." />
        <meta name="keywords" content="creative portfolio, design, photography, art, John Doe" />
        <meta name="author" content="John Doe" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="John Doe | Creative Portfolio" />
        <meta property="og:description" content="Professional creative portfolio showcasing design, photography, and artistic projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.johndoe.com" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="John Doe | Creative Portfolio" />
        <meta name="twitter:description" content="Professional creative portfolio showcasing design, photography, and artistic projects." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630" />
        
        {/* Structured data (JSON-LD) for SEO */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "John Doe",
              "url": "https://www.johndoe.com",
              "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=750",
              "jobTitle": "Creative Professional",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "sameAs": [
                "https://www.instagram.com/johndoe",
                "https://www.linkedin.com/in/johndoe",
                "https://twitter.com/johndoe",
                "https://dribbble.com/johndoe",
                "https://www.behance.net/johndoe"
              ]
            }
          `}
        </script>
      </Helmet>
      <Hero />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
