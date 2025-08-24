import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-medium text-foreground">
            Varshitha.Gowda
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Contact
            </button>
          </div>

          <Button 
            onClick={() => window.open('#', '_blank')}
            className="bg-foreground hover:bg-foreground/90 text-background px-6 py-2 rounded-full font-medium transition-smooth"
          >
            Available for Hire
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;