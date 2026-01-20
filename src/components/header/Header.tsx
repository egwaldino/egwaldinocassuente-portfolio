import type { JSX } from "react";
import { Button, Flex, Link } from "@chakra-ui/react";

export function Header(): JSX.Element {
  return (
    <Flex w="full" h="full" py="32px" justify="center">
      <Flex
        h="48px"
        rounded="lg"
        bg="#0C0E23"
        border="1px solid"
        borderColor="gray.100/10"
        px={{ base: "", md: "32px" }}
      >
        <Link textDecor="none" rel="noopener noreferrer">
          <Button
            bgColor="transparent"
            color="white"
            onClick={() => {
              const section = document.getElementById("about-section");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Sobre
          </Button>
        </Link>
        <Link textDecor="none" rel="noopener noreferrer">
          <Button
            bgColor="transparent"
            color="white"
            onClick={() => {
              const section = document.getElementById("projects-section");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Projetos
          </Button>
        </Link>
        <Link textDecor="none" rel="noopener noreferrer">
          <Button
            bgColor="transparent"
            color="white"
            onClick={() => {
              const section = document.getElementById("testimonials-section");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Depoimentos
          </Button>
        </Link>
        <Link textDecor="none" rel="noopener noreferrer">
          <Button
            bgColor="transparent"
            color="white"
            onClick={() => {
              const section = document.getElementById("contacts-section");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contatos
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
