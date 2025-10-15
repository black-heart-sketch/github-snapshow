import { Github, Mail, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  githubUsername: string;
  onUsernameChange: (username: string) => void;
}

export const Hero = ({ githubUsername, onUsernameChange }: HeroProps) => {
  return (
    <section className="container mx-auto px-6 py-20 text-center">
      <div className="mb-8 inline-block rounded-full bg-gradient-to-r from-primary to-accent p-1">
        <div className="rounded-full bg-background px-6 py-2">
          <Code2 className="inline-block h-6 w-6 text-primary" />
        </div>
      </div>
      
      <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
        Software Engineer
      </h1>
      
      <p className="mb-8 text-xl text-muted-foreground max-w-2xl mx-auto">
        Building innovative solutions with modern technologies
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <input
          type="text"
          placeholder="Enter your GitHub username"
          value={githubUsername}
          onChange={(e) => onUsernameChange(e.target.value)}
          className="w-full sm:w-auto px-6 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        />
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
        >
          <Github className="mr-2 h-5 w-5" />
          View Projects
        </Button>
      </div>

      <div className="flex gap-4 justify-center">
        <a 
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="h-6 w-6" />
        </a>
        <a 
          href="mailto:your.email@example.com"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};
