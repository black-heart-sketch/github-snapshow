import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: t('footer.links.about'), href: "#about" },
    { label: t('footer.links.skills'), href: "#skills" },
    { label: t('footer.links.projects'), href: "#projects" },
    { label: t('footer.links.contact'), href: "#contact" },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      label: "GitHub", 
      href: "https://github.com/yourusername",
      username: t('footer.connect.github')
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: "https://linkedin.com/in/yourprofile",
      username: t('footer.connect.linkedin')
    },
    { 
      icon: Twitter, 
      label: "Twitter", 
      href: "https://twitter.com/yourusername",
      username: t('footer.connect.twitter')
    },
    { 
      icon: Mail, 
      label: "Email", 
      href: "mailto:your.email@example.com",
      username: t('footer.connect.email')
    },
  ];

  return (
    <footer className="relative border-t border-border bg-card">
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
            <h3 className="text-xl font-bold mb-3">{t('footer.title')}</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              {t('footer.subtitle')}
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
            <h3 className="text-lg font-semibold mb-4">{t('footer.links.title')}</h3>
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
            <h3 className="text-lg font-semibold mb-4">{t('footer.connect.title')}</h3>
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
              {t('footer.copyright', { year: new Date().getFullYear() })} {" "}
              <Heart className="inline h-4 w-4 text-primary fill-primary" /> {t('footer.builtWith')}
            </p>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-primary/10 hover:text-primary"
            >
              {t('footer.top')}
              <ArrowUp className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
