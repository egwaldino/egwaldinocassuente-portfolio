import { Flex } from "@chakra-ui/react";
import { ServicesGrid } from "./ServicesGrid";
import { ServicesHeader } from "./ServicesHeader";

export function ServicesSection() {
  return (
    <Flex
      px={8}
      py={24}
      gap={14}
      w="full"
      bg="#000319"
      align="center"
      justify="center"
      flexDir="column"
      id="services-section"
    >
      <ServicesHeader />
      <ServicesGrid />
    </Flex>
  );
}
