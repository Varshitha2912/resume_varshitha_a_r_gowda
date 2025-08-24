import { ExternalLink, Github, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Pragvera.com",
      description: "Professional business and services platform featuring responsive design, modern UI/UX, and seamless user experience. Built with cutting-edge web technologies.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      liveLink: "https://pragvera.com",
      githubLink: "#",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio showcasing skills and experience with Apple-inspired minimalist design. Features smooth animations and optimized performance.",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      liveLink: "#",
      githubLink: "#",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Photo Studio Booking Platform",
      description: "Comprehensive online booking system with real-time scheduling, payment integration, and client management. Streamlines the entire booking process.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      liveLink: "#",
      githubLink: "#",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest web development and data science projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-2">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-primary group-hover:text-accent transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-accent-light text-accent text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(project.liveLink, '_blank')}
                    className="flex-1 hover:bg-accent hover:text-accent-foreground transition-smooth"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(project.githubLink, '_blank')}
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-smooth"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <Button 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 shadow-medium transition-spring"
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;