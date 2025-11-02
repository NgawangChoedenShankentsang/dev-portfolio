import { generatePageMetadata } from "../seo";
import { AnimatedProjectsList } from "../../components/animated-projects-list";
import React from "react";
import { WEB_APPS } from "@/data/projects";

export const metadata = generatePageMetadata({
  title: "Projects",
  description:
    "Selected open source web applications I’ve built and shipped.",
});

export default function Projects() {
  return (
    <div className="space-y-10 lg:space-y-12">
      {/* Web Applications Section */}
      <section className="space-y-6 lg:space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Web Applications</h2>
          <p className="text-sm text-muted-foreground">
            A curated set of projects focusing on UX, performance, and real-world impact.
          </p>
        </div>
        <AnimatedProjectsList projects={WEB_APPS} type="web-apps" />
      </section>
    </div>
  );
}
