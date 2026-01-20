import { Flex, Text, Image } from "@chakra-ui/react";

type Testimonial = {
  name: string;
  photo: string;
  profession: string;
  description: string;
};

type TestimonialsCardProps = {
  testimonial: Testimonial;
};

export function TestimonialsCard({ testimonial }: TestimonialsCardProps) {
  return (
    <Flex
      w={{ base: "380px", md: "570px" }}
      p={6}
      gap={6}
      rounded="2xl"
      flexShrink={0}
      flexDir="column"
      border="1px solid"
      bgGradient="to-br"
      gradientTo="#0C0E23"
      justify="space-between"
      gradientFrom="#04071D"
      borderColor="whiteAlpha.100"
    >
      <Text fontWeight="light">{testimonial.description}</Text>

      <Flex align="center" gap={4}>
        <Image
          src={testimonial.photo}
          alt={`Photo of ${testimonial.name}, ${testimonial.profession}`}
          rounded="full"
          boxSize="40px"
          objectFit="cover"
        />

        <Flex flexDir="column" lineHeight={1.3}>
          <Text fontWeight="normal" fontSize={15}>
            {testimonial.name}
          </Text>
          <Text color="whiteAlpha.500" fontSize={12}>
            {testimonial.profession}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
