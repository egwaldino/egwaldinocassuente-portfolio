import type { JSX } from "react";
import BgHero from "@/assets/bg-about.png"
import OverlayImage from "@/assets/bg-hero.png"
import { HiArrowUpRight } from "react-icons/hi2";
import { Header } from "@/components/header/Header";
import { Flex, Image, Text, Heading, Button, Box, Link } from "@chakra-ui/react";

export function HeroSection(): JSX.Element {
  return (

    <Box
      minH="100vh"
      bgSize="cover"
      position="center"
      bgColor="#000319"
      bgRepeat="no-repeat"
      bgImage={`url(${BgHero})`}
    >
      <Box
        top="0"
        left="50%"
        zIndex={0}
        w={"full"}
        position="absolute"
        transform="translateX(-50%)"
      >
        <Image
          w={"1500px"}
          opacity={"65%"}
          src={OverlayImage}
          pointerEvents="none"
        />
      </Box>
      <Header />

      <Flex
        gap={6}
        w="full"
        mt="32px"
        as="section"
        align="center"
        direction="column"
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

        <Link textDecor="none" rel="noopener noreferrer">
          <Button
            py={6}
            px={10}
            gap={2}
            rounded="lg"
            bgGradient="to-r"
            gradientFrom="#04071D"
            gradientTo="#0C0E23"
            display="flex"
            variant="outline"
            borderColor="gray.100/10"
            _hover={{
              bg: "#000319",
            }}
            onClick={() => {
              const section = document.getElementById("services-section");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <HiArrowUpRight />
            Meus Serviços
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
