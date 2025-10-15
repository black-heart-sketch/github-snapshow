import { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Repository {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
  default_branch: string;
}

interface ProjectsGridProps {
  githubUsername: string;
}

export const ProjectsGrid = ({ githubUsername }: ProjectsGridProps) => {
  const [projects, setProjects] = useState<Repository[]>([]);
  const [projectImages, setProjectImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const extractImageFromReadme = (readmeContent: string): string | null => {
    const imgRegex = /!\[.*?\]\((.*?)\)|<img.*?src=["'](.*?)["']/i;
    const match = readmeContent.match(imgRegex);
    return match ? (match[1] || match[2]) : null;
  };

  const fetchReadmeImage = async (username: string, repoName: string, branch: string) => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${username}/${repoName}/readme`,
        {
          headers: {
            Accept: "application/vnd.github.v3.raw",
          },
        }
      );

      if (response.ok) {
        const readme = await response.text();
        let imageUrl = extractImageFromReadme(readme);
        
        if (imageUrl) {
          // Handle relative URLs
          if (!imageUrl.startsWith('http')) {
            imageUrl = `https://raw.githubusercontent.com/${username}/${repoName}/${branch}/${imageUrl}`;
          }
          return imageUrl;
        }
      }
    } catch (error) {
      console.error(`Error fetching README for ${repoName}:`, error);
    }
    return null;
  };

  useEffect(() => {
    const fetchProjects = async () => {
      if (!githubUsername) return;

      setLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=12`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const repos: Repository[] = await response.json();
        setProjects(repos);

        // Fetch images for each repo
        const imagePromises = repos.map(async (repo) => {
          const image = await fetchReadmeImage(githubUsername, repo.name, repo.default_branch);
          return { name: repo.name, image };
        });

        const images = await Promise.all(imagePromises);
        const imageMap: Record<string, string> = {};
        images.forEach(({ name, image }) => {
          if (image) imageMap[name] = image;
        });
        setProjectImages(imageMap);

      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch GitHub projects. Please check the username.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [githubUsername, toast]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-20 text-muted-foreground">
        {githubUsername ? "No public repositories found" : "Enter a GitHub username to view projects"}
      </div>
    );
  }

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Recent Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            stars={project.stargazers_count}
            forks={project.forks_count}
            language={project.language}
            htmlUrl={project.html_url}
            imageUrl={projectImages[project.name]}
          />
        ))}
      </div>
    </section>
  );
};
