import { Grid, Box, Heading, Span } from "@chakra-ui/react";
import { ProjectCard } from "@/components/ProjectCard";
import Astromei from "@/assets/siteastromei.png"
import BernardoCassuende from "@/assets/sitebernardocassuende.png"
import HealthCareAngola from "@/assets/sitehealthcareangola.png"
import Codrillo from "@/assets/webappcodrillo.png"
import Brevemente from "@/assets/appbrevemente.png"
import Typescript from "@/assets/typescript.svg"
import Firebase from "@/assets/firebase.svg"
import Vite from "@/assets/vite.svg"
import ChakraUI from "@/assets/chakraui.svg"
import ReactJS from "@/assets/reactjs.svg"

const projects = [
  {
    image: Astromei,
    title: "Website do Fotografo Astromei",
    description:
      "Desenvolvido para apresentar os serviços fotográficos, trabalhos realizados e facilitar o contacto com clientes e potenciais interessados.",
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
    image: BernardoCassuende,
    title: "Website do Psicólogo Bernardo",
    description:
      "Desenvolvido para apoiar pacientes no agendamento de consultas e permitir um contacto direto, simples e profissional com o psicólogo.",
    techIcons: [
      Typescript,
      ReactJS,
      Firebase,
      Vite,
      ChakraUI,
    ],
    url: "https://bernardo-cassuende.web.app/",
  },
  {
    image: HealthCareAngola,
    title: "Website da Health Care Angola",
    description:
      "Desenvolvida para apresentar os serviços de medicina domiciliar, esclarecer informações e facilitar o contacto com novos clientes.",
    techIcons: [
      Typescript,
      ReactJS,
      Firebase,
      Vite,
      ChakraUI,
    ],
    url: "https://healthcare-angola.web.app/",
  },
  {
    image: Codrillo,
    title: "A Compilar... [Aplicação Web Codrillo]",
    description:
      "Os ingredientes são bons, só falta o tempo certo. Disponível em breve.",
    techIcons: [
      Typescript,
      ReactJS,
      Vite,
      ChakraUI,
    ],
  },
  {
    image: Brevemente,
    title: "A Compilar...",
    description:
      "Os ingredientes são bons, só falta o tempo certo. Disponível em breve.",
    techIcons: [
      Typescript,
      ReactJS,
      Vite,
      ChakraUI,
    ],
  },
  {
    image: Brevemente,
    title: "A Compilar...",
    description:
      "Os ingredientes são bons, só falta o tempo certo. Disponível em breve.",
    techIcons: [
      Typescript,
      ReactJS,
      Vite,
      ChakraUI,
    ],
  },
  
];

export function ProjectsSection() {
  return (
    <Box id="projects-section" w="full" px={24} py={24} bgColor="#000319">
      <Heading fontWeight={"semibold"} fontSize={"3xl"} mb={12} textAlign="center">
        Uma pequena seleção <Span color="#CBACF9">dos meus projetos</Span>
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
