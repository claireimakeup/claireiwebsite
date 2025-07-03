import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Claire Imbrogno | Professional Makeup Artist Melbourne</title>
        <meta name="description" content="Professional makeup artist in Melbourne specializing in bridal, editorial, and special occasion makeup. Book your transformation with Claire Imbrogno today." />
        <meta name="keywords" content="makeup artist, Melbourne, bridal makeup, professional makeup, Claire Imbrogno, CI Makeup, beauty" />
        <meta name="author" content="Claire Imbrogno" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Claire Imbrogno | Professional Makeup Artist Melbourne" />
        <meta property="og:description" content="Professional makeup artist in Melbourne specializing in bridal, editorial, and special occasion makeup by Claire Imbrogno." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cimakeup.com.au" />
        <meta property="og:image" content="https://cimakeup.com.au/assets/portfolio/beauty/beauty1.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Claire Imbrogno | Professional Makeup Artist Melbourne" />
        <meta name="twitter:description" content="Professional makeup artist in Melbourne specializing in bridal, editorial, and special occasion makeup." />
        <meta name="twitter:image" content="https://cimakeup.com.au/assets/portfolio/beauty/beauty1.jpg" />
        
        {/* Structured data (JSON-LD) for SEO */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Claire Imbrogno",
              "url": "https://cimakeup.com.au",
              "image": "/assets/claire-portrait.jpeg",
              "jobTitle": "Professional Makeup Artist",
              "worksFor": {
                "@type": "Organization",
                "name": "CI Makeup"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Melbourne",
                "addressRegion": "VIC",
                "addressCountry": "Australia"
              },
              "sameAs": [
                "https://instagram.com/claire_imakeup",
                "https://www.facebook.com/share/16oGmDnoqs/?mibextid=wwXIfr",
                "https://www.tiktok.com/@claire_imakeup"
              ]
            }
          `}
        </script>
      </Helmet>
      <Hero />
      <About />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
