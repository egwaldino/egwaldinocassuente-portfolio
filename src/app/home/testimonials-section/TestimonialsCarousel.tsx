import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { TestimonialsCard } from "./TestimonialsCard";
import { testimonials } from "./testimonialsData";

const MotionFlex = motion(Flex);

export function TestimonialsCarousel() {
  return (
    <Flex w="full" overflow="hidden">
      <MotionFlex
        gap={8}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 50,
          ease: "linear",
          repeat: Infinity,
        }}
        minW="fit-content"
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialsCard
            key={`${testimonial.name}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </MotionFlex>
    </Flex>
  );
}
