import { Grid, Box, Heading, Span } from "@chakra-ui/react";
import { ProjectCard } from "@/components/ProjectCard";
import Astromei from "@/assets/siteastromei.png"
import Typescript from "@/assets/typescript.svg"
import Firebase from "@/assets/firebase.svg"
import Vite from "@/assets/vite.svg"
import ChakraUI from "@/assets/chakraui.svg"
import ReactJS from "@/assets/reactjs.svg"

const projects = [
  {
    image: Astromei,
    title: "Portfolio de Fotografo Astromei",
    description:
      "Criado para os seus clientes e pré clientes verem os seus serviços, trabalhos feitos e entrarem em contacto.",
    techIcons: [
      Typescript,
      ReactJS,
      Firebase,
      Vite,
      ChakraUI,
    ],
    url: "https://astromei-portfolio.web.app/",
  },
  {
    image: Astromei,
    title: "Portfolio de Fotografo Astromei",
    description:
      "Criado para os seus clientes e pré clientes verem os seus serviços, trabalhos feitos e entrarem em contacto.",
    techIcons: [
      Typescript,
      ReactJS,
      Firebase,
      Vite,
      ChakraUI,
    ],
    url: "https://astromei-portfolio.web.app/",
  },
  {
    image: Astromei,
    title: "Portfolio de Fotografo Astromei",
    description:
      "Criado para os seus clientes e pré clientes verem os seus serviços, trabalhos feitos e entrarem em contacto.",
    techIcons: [
      Typescript,
      ReactJS,
      Firebase,
      Vite,
      ChakraUI,
    ],
    url: "https://astromei-portfolio.web.app/",
  },
  {
    image: Astromei,
    title: "Portfolio de Fotografo Astromei",
    description:
      "Criado para os seus clientes e pré clientes verem os seus serviços, trabalhos feitos e entrarem em contacto.",
    techIcons: [
      Typescript,
      ReactJS,
      Firebase,
      Vite,
      ChakraUI,
    ],
    url: "https://astromei-portfolio.web.app/",
  },
  {
    image: Astromei,
    title: "Portfolio de Fotografo Astromei",
    description:
      "Criado para os seus clientes e pré clientes verem os seus serviços, trabalhos feitos e entrarem em contacto.",
    techIcons: [
      Typescript,
      ReactJS,
      Firebase,
      Vite,
      ChakraUI,
    ],
    url: "https://astromei-portfolio.web.app/",
  },
];

export function ProjectsSection() {
  return (
    <Box w="full" py={24} bgColor="#000319">
      <Heading fontWeight={"bold"} fontSize={"4xl"} mb={12} textAlign="center">
        Uma pequena seleção <Span>dos meus projetos</Span>
      </Heading>

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
    </Box>
  );
}
