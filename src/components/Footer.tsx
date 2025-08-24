import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Varshitha A R Gowda</h3>
            <p className="opacity-90">
              Data Scientist • Web Developer • Yoga Instructor
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <p className="flex items-center text-sm opacity-75 mb-4">
              Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> and lots of coffee
            </p>
            
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-white/30 text-white hover:bg-white hover:text-primary transition-spring"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} Varshitha A R Gowda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;