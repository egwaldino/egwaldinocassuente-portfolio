import type { JSX } from "react";
import { HeroActions } from "./HeroActions";
import { HeroBackground } from "./HeroBackground";
import { Header } from "@/components/header/Header";
import { Flex, Text, Heading, Span } from "@chakra-ui/react";

export function HeroSection(): JSX.Element {
  return (
    <HeroBackground>
      <Header />

      <Flex
        w="full"
        as="section"
        align="center"
        direction="column"
        textAlign="center"
        gap={{ base: 10, md: 6 }}
        mt={{ base: "6rem", md: "32px" }}
      >
        <Text
          letterSpacing="0.3rem"
          fontWeight="extralight"
          fontSize={{ base: "xs", md: "sm" }}
        >
          MÁGIA DINÂMICA NA WEB
        </Text>

        <Heading
          fontWeight="bold"
          lineHeight="shorter"
          px={{ base: "30px" }}
          fontSize={{ base: "4xl", md: "7xl" }}
          textAlign={{ base: "center", md: "center" }}
        >
          Transformando Conceitos em uma Experiência{" "}
          <Text as="span" color="#CBACF9">
            Perfeita do Usuário
          </Text>
        </Heading>

        <Text fontSize="lg" px={{ base: 5 }}>
          Olá! Eu sou{" "}
          <Span fontWeight={"semibold"} color="#CBACF9">
            Egwaldino,
          </Span>{" "}
          um Web Developer focado em performance e boas práticas
        </Text>

        <HeroActions />
      </Flex>
    </HeroBackground>
  );
}
