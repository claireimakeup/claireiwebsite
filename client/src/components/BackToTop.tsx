import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Button
      variant="default"
      size="icon"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 rounded-full shadow-lg transition-all duration-300 ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      aria-label="Back to top"
    >
      <ChevronUp className="h-6 w-6" />
    </Button>
  );
};

export default BackToTop;
