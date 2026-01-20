import type { JSX } from "react";
import { Flex } from "@chakra-ui/react";
import { TestimonialsHeader } from "./TestimonialsHeader";
import { TestimonialsCarousel } from "./TestimonialsCarousel";

export function TestimonialsSection(): JSX.Element {
  return (
    <Flex
      id="testimonials-section"
      py={24}
      w="full"
      align="center"
      flexDir="column"
      bgColor="#000319"
    >
      <TestimonialsHeader />
      <TestimonialsCarousel />
    </Flex>
  );
}
