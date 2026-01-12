import { Flex, Link } from "@chakra-ui/react";
import type { JSX } from "react";

export function Header(): JSX.Element {
  return (
    <Flex
      as="nav"
      w="full"
      h="16"
     
      justify="center"
    >
      <Flex
        w="120"
        align="center"
        justify="space-between"
        bg="#0C0E23"
        rounded="2xl"
        border="1px solid"
        borderColor="gray.100/10"
        px="15"
      >
        <Link href="/">Sobre</Link>
        <Link href="/">Projetos</Link>
        <Link href="/">Depoimentos</Link>
        <Link href="/">Contatos</Link>
      </Flex>
    </Flex>
  );
}
