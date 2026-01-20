import { Heading, Span } from "@chakra-ui/react";

export function TestimonialsHeader() {
  return (
    <Heading
      mb={12}
      fontSize="3xl"
      textAlign="center"
      fontWeight="semibold"
      px={{ base: 4, md: 24 }}
    >
      Quem trabalhou comigo <Span color="#CBACF9">diz o seguinte</Span>
    </Heading>
  );
}
