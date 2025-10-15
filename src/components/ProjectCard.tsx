import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  htmlUrl: string;
  imageUrl?: string;
}

export const ProjectCard = ({
  name,
  description,
  stars,
  forks,
  language,
  htmlUrl,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden border-border bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]">
      {imageUrl && (
        <div className="relative overflow-hidden h-48 bg-muted">
          <img 
            src={imageUrl} 
            alt={`${name} preview`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
            {name}
          </CardTitle>
          <a
            href={htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
        
        {description && (
          <CardDescription className="line-clamp-2">
            {description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            <span>{stars}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="h-4 w-4" />
            <span>{forks}</span>
          </div>
        </div>

        {language && (
          <Badge variant="secondary" className="bg-secondary/50">
            {language}
          </Badge>
        )}
      </CardContent>
    </Card>
  );
};
