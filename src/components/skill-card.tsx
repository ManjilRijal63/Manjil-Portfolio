type SkillCardProps = {
  title: string;
  description: string;
};

export default function SkillCard({
  title,
  description,
}: SkillCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">

      <h3 className="mb-4 text-2xl font-semibold">
        {title}
      </h3>

      <p className="text-slate-300">
        {description}
      </p>

    </div>
  );
}