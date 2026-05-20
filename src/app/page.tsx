import Button from "@/components/button";

export default function Home() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">

        <p className="mb-4 text-blue-400">
          Full Stack Developer
        </p>

        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
          Hi, I&apos;m Pratik
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

    </main>
  );
}