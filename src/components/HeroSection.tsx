import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-balance">
            Hi, I'm <span className="text-accent">Varshitha A R Gowda</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-balance">
            Aspiring Data Scientist | IT & Cloud Professional | Certified Yoga Instructor
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg"
              onClick={() => window.open('#', '_blank')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg shadow-large transition-spring"
            >
              Download Resume
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={scrollToAbout}
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg transition-spring"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-white/70 hover:text-white transition-smooth">
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;