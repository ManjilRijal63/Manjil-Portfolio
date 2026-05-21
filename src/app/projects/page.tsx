import { projects } from "@/data/projects";
import ProjectCard from "@/components/project-card";



export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">

      <h1 className="mb-12 text-center text-5xl font-bold">
        Projects
      </h1>

      <div className="grid gap-8 md:grid-cols-2">


        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
            demo={project.demo}
          />
        ))}

      </div>

    </main>
  );
}