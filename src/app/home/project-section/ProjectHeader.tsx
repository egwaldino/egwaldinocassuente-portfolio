import { Heading, Span } from "@chakra-ui/react";

export function ProjectHeader() {
  return (
    <Heading
      mb={12}
      textAlign="center"
      fontWeight={"semibold"}
      fontSize={{ base: "3xl", md: "3xl" }}
    >
      Uma pequena seleção <Span color="#CBACF9">dos meus projetos</Span>
    </Heading>
  );
}
