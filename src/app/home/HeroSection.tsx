import type { JSX } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { Flex, Text, Heading, Button, Box } from "@chakra-ui/react";
import BgHero from "@/assets/bg-hero.png"
import { Header } from "@/components/header/Header";

export function HeroSection(): JSX.Element {
  return (

    <Box
      minH="100vh"
      bgImage={`url(${BgHero})`}
      bgSize="cover"
      position="center"
      bgRepeat="no-repeat"
    >
      <Header />

      <Flex
        as="section"
        direction="column"
        w="full"
        align="center"
        gap={6}
        textAlign="center"
      >
        <Text
          fontSize="sm"
          letterSpacing="0.3rem"
          fontWeight="extralight"
        >
          MÁGIA DINÂMICA NA WEB
        </Text>

        <Heading
          as="h1"
          fontSize="7xl"
          fontWeight="bold"
          lineHeight="shorter"
        >
          Transformando Conceitos em uma Experiência{" "}
          <Text as="span" color="#CBACF9">
            Perfeita do Usuário
          </Text>
        </Heading>

        <Text fontSize="lg">
          Olá! Eu sou Egwaldino, um Web Developer residente em Portugal
        </Text>

        <Button
          variant="outline"
          borderColor="gray.100/10"
          px={10}
          py={6}
          rounded="2xl"
          display="flex"
          gap={2}
          _hover={{
            bg: "whiteAlpha.100",
          }}
        >
          <HiArrowUpRight />
          Meus Trabalhos
        </Button>
      </Flex>
    </Box>
  );
}
