import Button from "@/components/button";
import SkillCard from "@/components/skill-card";
import { skills } from "@/data/skills";

export default function Home() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">

        <p className="mb-4 text-blue-400">
          Full Stack Developer
        </p>

        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
          Hi, I&apos;m Manjil
        </h1>

        <p className="max-w-2xl text-lg text-slate-300">
          I build modern full-stack web applications using
          Next.js, React, PostgreSQL, Prisma and Tailwind CSS.
        </p>

        <div className="mt-8 flex gap-4">
          <Button text="View Projects" />
          <Button text="Contact Me" />
        </div>

      </section>



{/* SKILLS SECTION */}


<section className="mx-auto max-w-6xl px-6 py-24">

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






    </main>
  );
}