// import Button from "@/components/button";
import ProjectCard from "@/components/project-card";
import SkillCard from "@/components/skill-card";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">

        <p className="mb-4 text-blue-400">
          Full Stack Developer
        </p>

        <h1 className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-6xl font-bold text-transparent md:text-8xl">
          Hi, I&apos;m Manjil
        </h1>

        <p className="max-w-2xl text-lg text-slate-300">
          I build modern full-stack web applications using
          Next.js, React, PostgreSQL, Prisma and Tailwind CSS.
        </p>

        <div className="mt-8 flex gap-4">

  <Link href="/projects">
    <Button className="cursor-pointer transition hover:bg-blue-500">
      View Projects
    </Button>
  </Link>

  <Link href="/feedback">
    <Button className="cursor-pointer transition hover:bg-blue-500">
      Give Feedback
    </Button>
  </Link>

</div>
      </section>
      {/* SKILLS SECTION */}
      <section className="mx-auto max-w-6xl px-6 py-24 border-t border-white/10">

        <h2 className="mb-12 text-center text-4xl font-bold">
          Skills
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              description={skill.description}
            />
          ))}

        </div>

      </section>


      {/* projects section */}

      <section className="mx-auto max-w-6xl px-6 py-24 border-t border-white/10">

        <div className="mb-12 flex items-center justify-between">

          <h2 className="text-4xl font-bold">
            Featured Projects
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {projects.slice(0, 2).map((project) => (
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

      </section>


    </main>
  );
}