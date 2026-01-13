import { Flex, Link } from "@chakra-ui/react";
import type { JSX } from "react";

export function Header(): JSX.Element {
  return (
    <Flex
      w="full"
      h="full"
      py="32px"
      justify="center"
    >
      <Flex
        h="42px"
        px="32px"
        py="24px"
        gap="24px"
        rounded="lg"
        align="center"
        bg="#0C0E23"
        border="1px solid"
        justify="space-between"
        borderColor="gray.100/10"
      >
        <Link href="/">Sobre</Link>
        <Link href="/">Projetos</Link>
        <Link href="/">Depoimentos</Link>
        <Link href="/">Contatos</Link>
      </Flex>
    </Flex>
  );
}
