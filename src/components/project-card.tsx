type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2">

      <h2 className="mb-4 text-2xl font-bold">
        {title}
      </h2>

      <p className="mb-6 text-slate-300">
        {description}
      </p>

      <div className="mb-6 flex flex-wrap gap-2">

        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-300"
          >
            {item}
          </span>
        ))}

      </div>

      <div className="flex gap-4">

        <a
          href={github}
          target="_blank"
          className="rounded-xl bg-white px-4 py-2 text-black"
        >
          GitHub
        </a>

        <a
          href={demo}
          target="_blank"
          className="rounded-xl border border-white/20 px-4 py-2"
        >
          Live Demo
        </a>

      </div>

    </div>
  );
}