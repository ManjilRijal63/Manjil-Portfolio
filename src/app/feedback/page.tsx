import FeedbackCard from "@/components/feedback-card";
import FeedbackForm from "@/components/feedback-form";

import { prisma } from "@/lib/prisma";

export default async function FeedbackPage() {

  const feedbacks = await prisma.feedback.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });

  return (
    <main className="mx-auto max-w-4xl px-6 py-24">

      <div className="mb-16 text-center">

        <h1 className="mb-4 text-5xl font-bold">
          Feedback
        </h1>

        <p className="text-slate-400">
          Share your thoughts, suggestions, or experience.
        </p>

      </div>

      <div className="mb-16">
        <FeedbackForm />
      </div>

      <section className="border-t border-white/10">

        <div className="mb-8">

          <h2 className="text-3xl font-semibold">
            Submitted Feedbacks
          </h2>

          <p className="mt-2 text-slate-400">
            Latest feedback from visitors.
          </p>

        </div>

        <div className="space-y-6">

          {feedbacks.length > 0 ? (
            feedbacks.map((feedback) => (
              <FeedbackCard
                key={feedback.id}
                name={feedback.name}
                message={feedback.message}
              />
            ))
          ) : (
            <p className="text-slate-400">
              No feedback submitted yet.
            </p>
          )}

        </div>

      </section>

    </main>
  );
}