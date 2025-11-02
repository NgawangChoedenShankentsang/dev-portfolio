import { Tool, WebApp } from "@/data/projects";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

type AnimatedProjectsListProps = {
  projects: WebApp[] | Tool[];
  type: "web-apps" | "tools";
};

export function AnimatedProjectsList({ projects }: AnimatedProjectsListProps) {
  // Unified, image‑less card grid for both web‑apps and tools
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project: any, idx: number) => {
        const tags: string[] = (project.tags as string[]) || (project.techs as string[]) || [];
        const hasDemo = Boolean(project.demo);
        return (
          <div key={idx}>
            <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              <CardHeader className="space-y-3">
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed min-h-[60px]">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Code
                    </a>
                  </Button>
                  {hasDemo && (
                    <Button size="sm" asChild className="flex-1 transition-all">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        View
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
