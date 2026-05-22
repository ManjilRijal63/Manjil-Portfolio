export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">

{/* section about me  */}

      <h1 className="mb-10 text-5xl font-bold">
        About Me
      </h1>

      <div className="space-y-6 text-lg text-slate-300">

        <p>
          Hi, I&apos;m Manjil Rijal, a passionate full-stack web developer
          focused on building modern and responsive web applications.
        </p>

        <p>
          I enjoy working with technologies like Next.js,
          React, PostgreSQL, Prisma and Tailwind CSS.
        </p>

        <p>
          Currently, I am improving my backend development
          and full-stack engineering skills while building
          real-world projects.
        </p>

      </div>

{/* section journey */}
<section className="mt-20 border-t border-white/10">

  <h2 className="mb-8 text-3xl font-bold">
    Journey
  </h2>

  <div className="rounded-2xl border border-white/10 bg-slate-900 p-8">

    <p className="text-slate-300">
      Started learning web development with HTML, CSS and JavaScript,
      then gradually moved into React, Next.js and backend technologies.
      Currently focused on becoming a professional full-stack developer.
    </p>

  </div>

</section>




    </main>
  );
}