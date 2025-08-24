import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-between px-6 md:px-12 py-20">
      {/* Main Title */}
      <div className="flex-1">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground leading-none tracking-tight">
          DATA<br />
          SCIENTIST &<br />
          WEB DEVELOPER
        </h1>
      </div>
      
      {/* Description */}
      <div className="flex-1 max-w-md ml-auto">
        <div className="space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            With expertise in <strong className="text-foreground">data science</strong> and <strong className="text-foreground">web development</strong>, I build data-driven solutions and websites that look great and work even better. <strong className="text-foreground">Clean code</strong>, <strong className="text-foreground">intuitive design</strong>, and a <strong className="text-foreground">smooth user experience</strong> every time.
          </p>
          
          <div className="flex flex-col gap-4">
            <Button 
              onClick={() => window.open('#', '_blank')}
              className="bg-foreground hover:bg-foreground/90 text-background px-6 py-3 rounded-full font-medium transition-smooth w-fit"
            >
              Available for Hire
            </Button>
            
            <Button 
              variant="outline"
              onClick={scrollToProjects}
              className="border-border text-foreground hover:bg-secondary px-6 py-3 rounded-full font-medium transition-smooth w-fit"
            >
              View Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToProjects} className="text-muted-foreground hover:text-foreground transition-smooth">
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;