type FeedbackCardProps = {
  name: string;
  message: string;
};

export default function FeedbackCard({
  name,
  message,
}: FeedbackCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">

      <h3 className="mb-3 text-xl font-semibold text-blue-400">
        {name}
      </h3>

      <p className="text-slate-300">
        {message}
      </p>

    </div>
  );
}