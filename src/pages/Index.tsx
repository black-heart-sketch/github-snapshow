import { useState } from "react";
import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";

const Index = () => {
  const [githubUsername, setGithubUsername] = useState("");

  return (
    <main className="min-h-screen">
      <Hero 
        githubUsername={githubUsername}
        onUsernameChange={setGithubUsername}
      />
      <ProjectsGrid githubUsername={githubUsername} />
    </main>
  );
};

export default Index;
