import {
  Flex,
  Text,
  Image,
  HStack,
  Button,
  VStack,
  Heading,
} from "@chakra-ui/react";
import type { JSX } from "react";
import { motion } from "framer-motion";
import { hardSkills } from "./aboutData";

const MotionFlex = motion(Flex);

export function AboutHardSkills(): JSX.Element {
  return (
    <HStack
      mt={-2}
      pb={20}
      w="full"
      justify="center"
      overflow="hidden"
      bgColor="#000319"
    >
      <Flex flexDir="column" align="center" w="full">
        <Heading fontWeight="semibold" fontSize="3xl">
          Hard Skills
        </Heading>

        <Flex w="full" overflow="hidden" mt={12}>
          <MotionFlex
            gap={6}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            minW="fit-content"
          >
            {[...hardSkills, ...hardSkills].map((tech, index) => (
              <Button
                key={`${tech.name}-${index}`}
                h="8rem"
                w="10rem"
                rounded="xl"
                flexShrink={0}
                variant="ghost"
                bgGradient="to-tl"
                border="0.5px solid"
                gradientTo="#0C0E23"
                gradientFrom="#04071D"
                borderColor="whiteAlpha.100"
              >
                <VStack gap={3}>
                  <Image src={tech.icon} alt={tech.name} boxSize="64px" />
                  <Text fontSize="sm" fontWeight="bold" color={tech.color}>
                    {tech.name}
                  </Text>
                </VStack>
              </Button>
            ))}
          </MotionFlex>
        </Flex>
      </Flex>
    </HStack>
  );
}
