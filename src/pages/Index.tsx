import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <ProjectsGrid />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
