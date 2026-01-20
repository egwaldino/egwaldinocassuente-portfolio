import type { JSX } from "react";
import BgHero from "@/assets/bg-about.webp";
import { AboutProfile } from "./AboutProfile";
import { AboutSoftSkills } from "./AboutSoftSkills";
import { AboutHardSkills } from "./AboutHardSkills";
import { Stack, VStack, Flex } from "@chakra-ui/react";

export function AboutSection(): JSX.Element {
  return (
    <Stack>
      <VStack
        h="full"
        w="full"
        id="about-section"
        bgColor="#000319"
        bgImage={`url(${BgHero})`}
        px={{ base: "1rem", md: "0rem" }}
      >
        <Flex
          h="full"
          rounded="xl"
          border="1px solid"
          bgGradient="to-br"
          gradientTo="#0C0E23"
          justify="space-between"
          gradientFrom="#04071D"
          borderColor="gray.100/10"
          w={{ base: "full", md: "70em" }}
          py={{ base: "2rem", md: "5rem" }}
        >
          <AboutProfile />
        </Flex>

        <AboutSoftSkills />
      </VStack>

      <AboutHardSkills />
    </Stack>
  );
}
