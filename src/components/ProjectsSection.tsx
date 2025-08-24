import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Pragvera.com",
      description: "Professional business platform",
      category: "WEB DEVELOPMENT",
      color: "bg-blue-500",
      mockup: "/api/placeholder/300/200"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Real-time data visualization",
      category: "DATA SCIENCE",
      color: "bg-green-500",
      mockup: "/api/placeholder/300/200"
    },
    {
      title: "Photo Studio Booking",
      description: "Online booking platform",
      category: "FULL STACK",
      color: "bg-red-500",
      mockup: "/api/placeholder/300/200"
    },
    {
      title: "ML Prediction Model",
      description: "Machine learning insights",
      category: "DATA SCIENCE",
      color: "bg-gray-600",
      mockup: "/api/placeholder/300/200"
    },
    {
      title: "E-commerce Platform",
      description: "Modern shopping experience",
      category: "WEB DEVELOPMENT",
      color: "bg-teal-500",
      mockup: "/api/placeholder/300/200"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Project Card */}
              <div className={`${project.color} rounded-2xl p-6 aspect-[4/5] flex flex-col justify-between transition-transform hover:scale-105`}>
                {/* Top indicators */}
                <div className="flex justify-between items-start">
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                </div>
                
                {/* Mockup container */}
                <div className="flex-1 flex items-center justify-center my-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 w-full max-w-[200px]">
                    <div className="bg-white rounded-md aspect-video opacity-90"></div>
                  </div>
                </div>
                
                {/* Project info */}
                <div className="text-white">
                  <div className="text-xs opacity-70 mb-1">{project.category}</div>
                  <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-sm opacity-80">{project.description}</p>
                </div>
              </div>
              
              {/* Project title below */}
              <div className="mt-4 text-center">
                <div className="text-xs text-muted-foreground mb-1">TITLE</div>
                <h4 className="font-medium text-foreground">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
        
        {/* View all work button */}
        <div className="text-center mt-16">
          <Button 
            variant="outline"
            size="lg"
            className="border-border text-foreground hover:bg-secondary px-8 py-3 rounded-full font-medium transition-smooth"
          >
            View All Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;