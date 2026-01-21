import type { JSX } from "react";
import { HiDownload } from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";
import { Button, Link, HStack } from "@chakra-ui/react";

export function HeroActions(): JSX.Element {
  return (
    <HStack>
      <Link textDecor="none" rel="noopener noreferrer">
        <Button
          py={6}
          px={4}
          gap={2}
          rounded="lg"
          color="white"
          display="flex"
          variant="outline"
          bgGradient="to-r"
          gradientTo="#0C0E23"
          gradientFrom="#04071D"
          borderColor="gray.100/10"
          _hover={{
            bg: "#000319",
          }}
          onClick={() => {
            const section = document.getElementById("services-section");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <HiArrowUpRight />
          Meus Serviços
        </Button>
      </Link>

      <Link
        target="_blank"
        textDecor="none"
        href="/cv-egwaldino.pdf"
        rel="noopener noreferrer"
      >
        <Button
          py={6}
          px={4}
          gap={2}
          rounded="lg"
          display="flex"
          variant="outline"
          color="#04071D"
          bgColor="#caa9fb"
          borderColor="gray.100/10"
          _hover={{
            bg: "#000319",
            color: "white",
          }}
        >
          <HiDownload />
          Download CV
        </Button>
      </Link>
    </HStack>
  );
}
