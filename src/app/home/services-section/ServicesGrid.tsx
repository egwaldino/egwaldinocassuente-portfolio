import { Flex } from "@chakra-ui/react";
import { services } from "./servicesData";
import { ServicesCard } from "./ServicesCard";

export function ServicesGrid() {
  return (
    <Flex gap={10} wrap="wrap" justify="center" maxW="1200px" w="full">
      {services.map((service) => (
        <ServicesCard key={service.title} service={service} />
      ))}
    </Flex>
  );
}
