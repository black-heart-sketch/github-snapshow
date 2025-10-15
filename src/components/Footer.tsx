import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      label: "GitHub", 
      href: "https://github.com/yourusername",
      username: "@yourusername"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: "https://linkedin.com/in/yourprofile",
      username: "Your Name"
    },
    { 
      icon: Twitter, 
      label: "Twitter", 
      href: "https://twitter.com/yourusername",
      username: "@yourusername"
    },
    { 
      icon: Mail, 
      label: "Email", 
      href: "mailto:your.email@example.com",
      username: "your.email@example.com"
    },
  ];

  return (
    <footer className="relative border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="mb-4 inline-block">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-accent p-0.5">
                <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                  <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    SE
                  </span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Software Engineer</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Passionate about creating innovative solutions and building exceptional digital experiences. 
              Let's collaborate and bring your ideas to life.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all hover-scale"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-3">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors inline-block text-sm"
                  >
                    {social.username}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {new Date().getFullYear()} Your Name. All rights reserved. Built with{" "}
              <Heart className="inline h-4 w-4 text-primary fill-primary" /> using React & TypeScript
            </p>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-primary/10 hover:text-primary"
            >
              Back to top
              <ArrowUp className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
