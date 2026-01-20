import { Box } from "@chakra-ui/react";
import { ProjectGrid } from "./ProjectGrid";
import { ProjectHeader } from "./ProjectHeader";

export function ProjectsSection() {
  return (
    <Box
      w="full"
      py={24}
      bgColor="#000319"
      id="projects-section"
      px={{ base: 4, md: 24 }}
    >
      <ProjectHeader />
      <ProjectGrid />
    </Box>
  );
}
