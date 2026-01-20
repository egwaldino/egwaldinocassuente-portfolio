import {
  Box,
  Flex,
  Text,
  Icon,
  Link,
  Stack,
  VStack,
  HStack,
  Button,
  Heading,
} from "@chakra-ui/react";
import { FiCheck } from "react-icons/fi";

type Service = {
  link: string;
  title: string;
  items: string[];
  subtitle: string;
  textButton: string;
  description: string;
  icon: React.ElementType;
};

type ServicesCardProps = {
  service: Service;
};

export function ServicesCard({ service }: ServicesCardProps) {
  return (
    <Box
      p={8}
      rounded="2xl"
      border="2px solid"
      backdropFilter="blur(12px)"
      borderColor="whiteAlpha.100"
      w={{ base: "100%", md: "340px" }}
    >
      <VStack align="start" justify={"space-between"} gap={5}>
        <Flex gap={4} w="full" align="center" flexDir="column">
          <Icon as={service.icon} boxSize={14} color="purple.300" />

          <Flex flexDir="column" align="center">
            <Heading fontSize="xl" fontWeight="semibold" color="#CBACF9">
              {service.title}
            </Heading>

            <Text fontSize="sm" color="whiteAlpha.600">
              {service.subtitle}
            </Text>
          </Flex>
        </Flex>

        <Text textAlign="center" fontSize="sm" color="whiteAlpha.800">
          {service.description}
        </Text>

        <Stack gap={2} pt={2}>
          {service.items.map((item) => (
            <HStack key={item} gap={2}>
              <Icon as={FiCheck} color="green.300" boxSize={4} />
              <Text fontSize="sm" color="whiteAlpha.900">
                {item}
              </Text>
            </HStack>
          ))}
        </Stack>

        <Flex w="full" justify="center">
          <Link w="full" href={service.link} textDecor="none">
            <Button
              w="full"
              rounded="xl"
              variant="outline"
              bgGradient="to-r"
              gradientTo="#0C0E23"
              gradientFrom="#04071D"
              borderColor="gray.100/10"
              _hover={{
                bg: "#000319",
              }}
            >
              {service.textButton}
            </Button>
          </Link>
        </Flex>
      </VStack>
    </Box>
  );
}
