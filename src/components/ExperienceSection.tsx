import { GraduationCap, Briefcase, Award, Users } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      type: "education",
      icon: GraduationCap,
      title: "Data Science Postgraduate",
      organization: "Queensland University of Technology (QUT)",
      period: "2023 - Present",
      description: "Advanced coursework in machine learning, statistical analysis, and data visualization. Focus on real-world applications and industry projects.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Computer Programming Postgraduate",
      organization: "VIT (Vellore Institute of Technology)",
      period: "2022 - 2023",
      description: "Comprehensive programming curriculum covering modern development frameworks, software engineering principles, and project management.",
      color: "from-green-500 to-teal-600"
    },
    {
      type: "leadership",
      icon: Users,
      title: "Media Head & Sports Committee",
      organization: "University Leadership Roles",
      period: "2021 - 2023",
      description: "Led media initiatives and sports committee activities. Managed team communications, event coordination, and student engagement programs.",
      color: "from-purple-500 to-pink-600"
    },
    {
      type: "certification",
      icon: Award,
      title: "Certified Yoga Instructor",
      organization: "Professional Yoga Alliance",
      period: "2022",
      description: "Comprehensive training in yoga instruction, mind-body integration, and holistic wellness approaches. Focus on therapeutic and mindfulness practices.",
      color: "from-orange-500 to-red-600"
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Bachelor of Science - Computer Science",
      organization: "University",
      period: "2019 - 2022",
      description: "Foundation in computer science principles, programming languages, database management, and software development methodologies.",
      color: "from-teal-500 to-green-600"
    },
    {
      type: "experience",
      icon: Briefcase,
      title: "Freelance Web Developer",
      organization: "Self-Employed",
      period: "2022 - Present",
      description: "Developing responsive websites and web applications for clients. Specializing in modern frameworks and user-centered design approaches.",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section id="experience" className="py-20 gradient-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional development milestones
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-6 w-5 h-5 bg-background border-2 border-primary rounded-full -ml-2 mt-2"></div>
                  
                  {/* Content */}
                  <div className="w-full md:ml-16">
                    <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-r ${exp.color}`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                            <h3 className="text-xl font-semibold text-primary mb-1 md:mb-0">
                              {exp.title}
                            </h3>
                            <span className="text-sm font-medium text-accent bg-accent-light px-3 py-1 rounded-full">
                              {exp.period}
                            </span>
                          </div>
                          
                          <h4 className="text-lg font-medium text-muted-foreground mb-3">
                            {exp.organization}
                          </h4>
                          
                          <p className="text-muted-foreground leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;