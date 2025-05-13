import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Claire Imbrogno | Professional Makeup Artist Sydney</title>
        <meta name="description" content="Professional makeup artist in Sydney specializing in bridal, editorial, and special occasion makeup. Book your transformation with Claire Imbrogno today." />
        <meta name="keywords" content="makeup artist, Sydney, bridal makeup, professional makeup, Claire Imbrogno, CI Makeup, beauty" />
        <meta name="author" content="Claire Imbrogno" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Claire Imbrogno | Professional Makeup Artist Sydney" />
        <meta property="og:description" content="Professional makeup artist in Sydney specializing in bridal, editorial, and special occasion makeup by Claire Imbrogno." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cimakeup.com.au" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Claire Imbrogno | Professional Makeup Artist Sydney" />
        <meta name="twitter:description" content="Professional makeup artist in Sydney specializing in bridal, editorial, and special occasion makeup." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630" />
        
        {/* Structured data (JSON-LD) for SEO */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Claire Imbrogno",
              "url": "https://www.cimakeup.com.au",
              "image": "/assets/claire-portrait.jpeg",
              "jobTitle": "Professional Makeup Artist",
              "worksFor": {
                "@type": "Organization",
                "name": "CI Makeup"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sydney",
                "addressRegion": "NSW",
                "addressCountry": "Australia"
              },
              "sameAs": [
                "https://instagram.com/cimakeup.au",
                "https://facebook.com/cimakeup",
                "https://pinterest.com/cimakeup",
                "https://tiktok.com/@cimakeup"
              ]
            }
          `}
        </script>
      </Helmet>
      <Hero />
      <Portfolio />
      <About />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
