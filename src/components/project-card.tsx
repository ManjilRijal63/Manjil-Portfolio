import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

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
    <Card className="border-white/10 bg-slate-900 transition duration-300 hover:-translate-y-2">

      <CardHeader>
        <CardTitle className="text-3xl font-bold tracking-tight text-white">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>

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

          <Button asChild>
            <a href={github} target="_blank">
              GitHub
            </a>
          </Button>

          <Button variant="outline" asChild>
            <a href={demo} target="_blank">
              Demo
            </a>
          </Button>

        </div>

      </CardContent>

    </Card>
  );
}