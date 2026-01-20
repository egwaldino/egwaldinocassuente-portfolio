import {
  Flex,
  Link,
  Icon,
  Text,
  Image,
  HStack,
  Heading,
} from "@chakra-ui/react";
import type { JSX } from "react";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import EgwaldinoCassuente from "@/assets/egwaldino-cassuente.webp";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

export function AboutProfile(): JSX.Element {
  return (
    <Flex
      align="center"
      px={{ base: "1rem", md: "8rem" }}
      gap={{ base: "2rem", md: "10rem" }}
      flexDir={{ base: "column-reverse", md: "row" }}
    >
      <Flex
        gap="2rem"
        justify="center"
        flexDir="column"
        align={{ base: "center", md: "start" }}
      >
        <Heading fontWeight="semibold">Egwaldino Cassuente</Heading>
        <Text fontWeight={"light"} textAlign={"justify"}>
          Sou programador web com foco em construir aplicações rápidas, modernas
          e bem estruturadas. Tenho experiências principalmente com o React,
          Typescript e interfaces escaláveis que unem boa performance e design.
          Gosto de resolver problemas de forma prática e entregar código limpo,
          claro e eficiente
        </Text>

        <HStack gap={4}>
          <Link
            textDecor="none"
            href="https://www.instagram.com/egwaldinocassuente.ao?igsh=YW96NWF5N2U3ZHRr&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={FiInstagram} boxSize={6} color="#CBACF9" />
          </Link>
          <Link
            textDecor="none"
            href="https://github.com/egwaldino"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={FiGithub} boxSize={6} color="#CBACF9" />
          </Link>
          <Link
            textDecor="none"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ecassuente@gmail.com&su=Contacto%20Via%20WebSite"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={MdEmail} boxSize={6} color="#CBACF9" />
          </Link>
          <Link
            textDecor="none"
            href="https://www.linkedin.com/in/egwaldino-cassuente-5b7712348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={FiLinkedin} boxSize={6} color="#CBACF9" />
          </Link>
          <Link
            textDecor="none"
            href="https://wa.me/351964433241"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={FaWhatsapp} boxSize={6} color="#CBACF9" />
          </Link>
        </HStack>
      </Flex>
      <Image
        w={"250px"}
        src={EgwaldinoCassuente}
        alt="Egwaldino Cassuente, Web Developer"
      />
    </Flex>
  );
}
