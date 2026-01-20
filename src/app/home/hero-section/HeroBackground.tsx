import type { JSX } from "react";
import { Box } from "@chakra-ui/react";
import BgHero from "@/assets/bg-about.webp";
import { HeroOverlay } from "./HeroOverlay";

export function HeroBackground({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Box
      minH="100vh"
      bgSize="cover"
      overflow="hidden"
      bgColor="#000319"
      position="relative"
      bgRepeat="no-repeat"
      bgImage={`url(${BgHero})`}
    >
      <HeroOverlay />
      {children}
    </Box>
  );
}
