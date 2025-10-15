import { Code2, Rocket, Users, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  const highlights = [
    {
      icon: Code2,
      title: t('about.highlights.code.title'),
      description: t('about.highlights.code.description')
    },
    {
      icon: Rocket,
      title: t('about.highlights.delivery.title'),
      description: t('about.highlights.delivery.description')
    },
    {
      icon: Users,
      title: t('about.highlights.team.title'),
      description: t('about.highlights.team.description')
    },
    {
      icon: Lightbulb,
      title: t('about.highlights.innovation.title'),
      description: t('about.highlights.innovation.description')
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-6 text-center">
          {t('about.title')}
        </h2>
        
        <div className="mb-12 max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            {t('about.p1')}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('about.p2')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] group"
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
