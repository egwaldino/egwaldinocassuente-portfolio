import { Box } from "@chakra-ui/react";
import { ProjectGrid } from "./ProjectGrid";
import { ProjectHeader } from "./ProjectHeader";

export function ProjectsSection() {
  return (
    <Box
      py={24}
      w="full"
      bgColor="#000319"
      id="projects-section"
      px={{ base: 4, md: 24 }}
    >
      <ProjectHeader />
      <ProjectGrid />
    </Box>
  );
}
