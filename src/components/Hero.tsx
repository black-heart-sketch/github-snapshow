import { Github, Mail, Linkedin, ArrowDown, Code2, Briefcase, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { icon: Code2, label: "Years Experience", value: "5+" },
    { icon: Briefcase, label: "Projects Completed", value: "50+" },
    { icon: Award, label: "Technologies", value: "20+" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-pulse" style={{ animationDuration: '8s' }}></div>
      
      {/* Floating orbs for visual interest */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
      
      <div className="container relative z-10 text-center">
        <div className="mb-6 inline-block animate-fade-in">
          <div className="h-32 w-32 mx-auto rounded-full bg-gradient-to-r from-primary to-accent p-1">
            <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
              <span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SE
              </span>
            </div>
          </div>
        </div>
        
        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Your Name</span>
        </h1>
        
        <p className="mb-4 text-2xl md:text-3xl font-semibold text-foreground/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Full-Stack Software Engineer
        </p>
        
        <p className="mb-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Specializing in building exceptional digital experiences. I create scalable web applications 
          with a focus on clean code, modern architecture, and outstanding user experiences.
        </p>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in" style={{ animationDelay: '0.35s' }}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-2 p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/50 hover:bg-primary/10"
            asChild
          >
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/50 hover:bg-primary/10"
            asChild
          >
            <a href="/resume.pdf" download>Download Resume</a>
          </Button>
        </div>

        <div className="flex gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <a 
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors hover-scale"
            aria-label="GitHub Profile"
          >
            <Github className="h-7 w-7" />
          </a>
          <a 
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors hover-scale"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-7 w-7" />
          </a>
          <a 
            href="mailto:your.email@example.com"
            className="text-muted-foreground hover:text-primary transition-colors hover-scale"
            aria-label="Email"
          >
            <Mail className="h-7 w-7" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};
