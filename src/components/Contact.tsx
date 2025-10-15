import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-6 text-center">
          {t('contact.title')}
        </h2>
        
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          {t('contact.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a 
            href="mailto:your.email@example.com"
            className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('contact.email')}</h3>
                <p className="text-muted-foreground">your.email@example.com</p>
              </div>
            </div>
          </a>

          <div className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('contact.location')}</h3>
                <p className="text-muted-foreground">{t('contact.city')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex gap-4 justify-center mb-8">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
                <Github className="mr-2 h-5 w-5" />
                {t('contact.github')}
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
                <Linkedin className="mr-2 h-5 w-5" />
                {t('contact.linkedin')}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
