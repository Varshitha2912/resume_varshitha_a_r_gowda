import profilePhoto from '@/assets/profile-photo.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              <div className="aspect-square rounded-full overflow-hidden shadow-large">
                <img 
                  src={profilePhoto} 
                  alt="Varshitha A R Gowda"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 -z-10 scale-110"></div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                About Me
              </h2>
              <p className="text-xl text-accent font-medium">
                Blending Data Science & Wellness with a passion for innovative solutions
              </p>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate data scientist and web developer with a unique blend of technical expertise 
                and wellness philosophy. My academic journey spans across multiple disciplines, giving me a 
                holistic approach to problem-solving.
              </p>
              
              <p>
                Currently pursuing advanced studies in Data Science while building innovative web solutions 
                for clients. I believe in creating technology that not only solves problems but also 
                enhances human wellbeing.
              </p>
            </div>
            
            {/* Education Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h3 className="font-semibold text-primary mb-2">Data Science</h3>
                <p className="text-sm text-muted-foreground">Postgraduate Studies at QUT</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h3 className="font-semibold text-primary mb-2">Computer Programming</h3>
                <p className="text-sm text-muted-foreground">Postgraduate at VIT</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h3 className="font-semibold text-primary mb-2">Computer Science</h3>
                <p className="text-sm text-muted-foreground">BSc Degree</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h3 className="font-semibold text-primary mb-2">Yoga Instructor</h3>
                <p className="text-sm text-muted-foreground">Certified Professional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;