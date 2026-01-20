import { Grid } from "@chakra-ui/react";
import { projects } from "./projectData";
import { ProjectCard } from "@/app/home/project-section/ProjectCard";

export function ProjectGrid() {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={8}
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Grid>
  );
}
