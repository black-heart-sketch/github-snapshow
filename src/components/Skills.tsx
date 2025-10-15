import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { t } = useTranslation();
  const skillCategories = [
    {
      category: t('skills.frontend'),
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML/CSS"]
    },
    {
      category: t('skills.backend'),
      skills: ["Node.js", "Python", "Express", "FastAPI", "REST APIs", "GraphQL"]
    },
    {
      category: t('skills.database'),
      skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma"]
    },
    {
      category: t('skills.tools'),
      skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Linux"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          {t('skills.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
