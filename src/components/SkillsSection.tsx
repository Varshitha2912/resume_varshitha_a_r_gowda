import { 
  Brain, 
  Code2, 
  Database, 
  Globe, 
  Sparkles, 
  Users,
  BarChart3,
  Palette 
} from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      category: "Data Science",
      icon: Brain,
      skills: ["Python", "Machine Learning", "Data Analysis", "Statistical Modeling"],
      color: "from-blue-500 to-purple-600"
    },
    {
      category: "Web Development", 
      icon: Code2,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript"],
      color: "from-green-500 to-blue-500"
    },
    {
      category: "Database & Cloud",
      icon: Database,
      skills: ["SQLite", "Cloud Computing", "Data Management", "APIs"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Professional Skills",
      icon: Users,
      skills: ["Project Management", "Leadership", "Team Collaboration", "Client Relations"],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Creative & Wellness",
      icon: Sparkles,
      skills: ["Yoga Instruction", "Mind-Body Integration", "UI/UX Design", "Content Creation"],
      color: "from-teal-500 to-green-500"
    },
    {
      category: "Analytics & Tools",
      icon: BarChart3,
      skills: ["Data Visualization", "Business Intelligence", "Problem Solving", "Research"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="skills" className="py-20 gradient-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning data science, web development, and wellness coaching
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => {
            const IconComponent = skillGroup.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${skillGroup.color} mr-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    {skillGroup.category}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;