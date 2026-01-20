import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  HStack,
  Link,
} from "@chakra-ui/react";
import { HiArrowUpRight } from "react-icons/hi2";

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  techIcons: string[];
  url?: string;
};

export function ProjectCard({
  url,
  title,
  image,
  techIcons,
  description,
}: ProjectCardProps) {
  return (
    <Box
      p={6}
      rounded="2xl"
      border="1px solid"
      bgGradient="to-br"
      gradientTo="#0C0E23"
      transition="0.25s ease"
      gradientFrom="#04071D"
      borderColor="whiteAlpha.100"
      _hover={{ transform: "translateY(-6px)" }}
    >
      <Box rounded="xl" overflow="hidden" mb={5}>
        <Image src={image} alt={title} w="100%" />
      </Box>

      <Heading fontSize="lg" mb={2}>
        {title}
      </Heading>

      <Text fontSize="sm" color="whiteAlpha.700" mb={5}>
        {description}
      </Text>

      <Flex justify="space-between" align="center">
        <HStack maxW={"20rem"} gap={3}>
          {techIcons.map((icon, index) => {
            const techName = icon.includes("typescript")
              ? "TypeScript"
              : icon.includes("reactjs")
                ? "React"
                : icon.includes("firebase")
                  ? "Firebase"
                  : icon.includes("vite")
                    ? "Vite"
                    : icon.includes("chakraui")
                      ? "Chakra UI"
                      : "Technology";
            return (
              <Image key={index} src={icon} alt={techName} boxSize="20px" />
            );
          })}
        </HStack>

        {url && (
          <Link
            gap={1}
            href={url}
            fontSize="sm"
            display="flex"
            color="purple.300"
            alignItems="center"
          >
            Visitar o Site <HiArrowUpRight />
          </Link>
        )}
      </Flex>
    </Box>
  );
}
